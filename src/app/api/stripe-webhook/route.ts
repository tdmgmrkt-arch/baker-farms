import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL!;

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "missing signature" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 100,
    expand: ["data.price.product"],
  });

  const items = lineItems.data.map((item) => {
    const product = item.price?.product as Stripe.Product | undefined;
    return {
      name: product?.name ?? item.description ?? "Unknown",
      qty: item.quantity ?? 1,
      unit_amount: item.price?.unit_amount ?? 0,
      amount_total: item.amount_total ?? 0,
    };
  });

  const productsSummary = items
    .map((i) => `${i.name} x${i.qty}`)
    .join(", ");

  const flatItems: Record<string, string | number> = {};
  items.slice(0, 10).forEach((item, idx) => {
    const n = idx + 1;
    flatItems[`product_${n}_name`] = item.name;
    flatItems[`product_${n}_qty`] = item.qty;
    flatItems[`product_${n}_amount`] = item.amount_total / 100;
  });

  const customer = session.customer_details;
  const fullName = customer?.name ?? "";
  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ");

  const payload = {
    email: customer?.email ?? "",
    first_name: firstName ?? "",
    last_name: lastName ?? "",
    phone: customer?.phone ?? "",
    address1: customer?.address?.line1 ?? "",
    address2: customer?.address?.line2 ?? "",
    city: customer?.address?.city ?? "",
    state: customer?.address?.state ?? "",
    postal_code: customer?.address?.postal_code ?? "",
    country: customer?.address?.country ?? "",
    total: (session.amount_total ?? 0) / 100,
    currency: session.currency ?? "usd",
    stripe_session_id: session.id,
    payment_status: session.payment_status,
    products: productsSummary,
    item_count: items.length,
    ...flatItems,
  };

  const ghlRes = await fetch(ghlWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!ghlRes.ok) {
    const text = await ghlRes.text();
    console.error("GHL forward failed", ghlRes.status, text);
    return NextResponse.json(
      { error: "ghl forward failed", status: ghlRes.status },
      { status: 502 }
    );
  }

  return NextResponse.json({ received: true, forwarded: true });
}
