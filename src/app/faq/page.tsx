import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "FAQ | Baker Farms",
  description: "Frequently asked questions about Baker Farms premium pasture-raised meats, ordering, and delivery.",
};

export default function FAQPage() {
  return (
    <PolicyLayout
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about ordering from Baker Farms."
    >
      <h2>Ordering</h2>

      <h3>How do I place an order?</h3>
      <p>
        Browse our products on the homepage and click{" "}
        <strong>&quot;Order Now&quot;</strong> on any product. You'll be taken to
        a secure checkout page to complete your full payment. Once payment is
        received, we'll confirm your order within 1–2 business days.
      </p>

      <h3>How does payment work?</h3>
      <p>
        Full payment is required at checkout to secure your order. All payments
        are processed securely through Stripe. Final pricing is based on actual
        hanging weight and may be adjusted slightly after processing.
      </p>

      <h3>Can I customize my order or choose specific cuts?</h3>
      <p>
        Our shares come with a standard cut list, but we're happy to work with
        you on preferences when possible. Contact us after placing your order to
        discuss any special requests. Custom cuts are available on the 1/2 and
        Whole Beef local pickup options.
      </p>

      <h2>Our Meats</h2>

      <h3>What does &quot;grass-fed and finished&quot; mean?</h3>
      <p>
        Our cattle are raised on pasture their entire lives and are never
        transitioned to grain feed in a feedlot. They eat grass from start to
        finish, which produces healthier, more flavorful beef.
      </p>

      <h3>Are your animals given hormones or antibiotics?</h3>
      <p>
        No. All of our animals are raised without hormones, antibiotics, soy, or
        corn. We believe in raising animals the way nature intended.
      </p>

      <h3>How is the meat processed?</h3>
      <p>
        Each animal is humanely processed at a USDA-inspected facility. All cuts
        are vacuum-sealed and labeled with the cut name and weight, then
        flash-frozen for maximum freshness.
      </p>

      <h2>Storage & Freezer Space</h2>

      <h3>How much freezer space do I need?</h3>
      <p>Each share requires different amounts of space:</p>
      <ul>
        <li><strong>The Beef Box (20 lb monthly):</strong> ~1 cubic foot</li>
        <li><strong>1/8 Beef:</strong> 1–2 cubic feet</li>
        <li><strong>1/4 Beef:</strong> 2–4 cubic feet</li>
        <li><strong>1/2 Beef:</strong> 7–10 cubic feet</li>
        <li><strong>Whole Beef:</strong> 14–20 cubic feet</li>
        <li><strong>The Bird Box (~20 lbs):</strong> ~1 cubic foot</li>
        <li><strong>The Big Bird Box (~40 lbs):</strong> 1–2 cubic feet</li>
      </ul>

      <h3>How long will the meat last in the freezer?</h3>
      <p>
        Vacuum-sealed cuts will stay fresh in a standard freezer for{" "}
        <strong>12–18 months</strong>. For best quality, we recommend consuming
        within 12 months.
      </p>

      <h2>Shipping & Pickup</h2>

      <h3>Which products can be shipped?</h3>
      <p>
        <strong>The Beef Box</strong> (20 lb monthly share),{" "}
        <strong>1/8 Beef</strong>, <strong>1/4 Beef</strong>, and{" "}
        <strong>1/2 Beef</strong> are available for both shipping and local
        pickup — you choose your preferred method at checkout. Shipping is
        currently available within Southern California. All other products are
        local pickup only in Winchester, CA.
      </p>

      <h3>Why is the 1/2 Beef a different price and weight for shipping vs. pickup?</h3>
      <p>
        Shipped 1/2 Beef orders (<strong>$2,999</strong>) are approximately{" "}
        <strong>160 lbs</strong> of boneless cuts (steaks, roasts, ground beef).
        Local pickup orders (<strong>$3,399</strong>) are{" "}
        <strong>200–250 lbs</strong> because they include bones and organs in
        addition to all boneless cuts. The pickup option costs more because you
        receive significantly more product.
      </p>

      <h3>How is meat shipped?</h3>
      <p>
        Shipped orders are packed in insulated boxes with dry ice and sent via
        expedited shipping. We ship Monday–Wednesday to avoid weekend delays.
        You'll receive tracking information via email.
      </p>

      <h3>Where is pickup located?</h3>
      <p>
        Pickup is at our farm in <strong>Winchester, California</strong>. We'll
        schedule a convenient time once your order is ready. Please bring a
        cooler if you're traveling more than 30 minutes.
      </p>

      <h3>How long does it take to receive my order?</h3>
      <ul>
        <li><strong>Local Pickup:</strong> Allow 2–4 weeks for processing</li>
        <li><strong>Shipping:</strong> Allow 4–6 weeks for processing and delivery</li>
      </ul>

      <h2>Payment & Cancellations</h2>

      <h3>What payment methods do you accept?</h3>
      <p>
        We accept all major credit cards through our secure Stripe checkout. Your
        payment information is never stored on our servers.
      </p>

      <h3>What is your cancellation policy?</h3>
      <p>
        If you need to cancel your order, please contact us as soon as possible.
        Cancellations made before your animal enters processing are eligible for
        a full refund. Once processing has begun, orders are non-refundable. See
        our <a href="/returns">Return Policy</a> for full details.
      </p>

      <h2>Still Have Questions?</h2>
      <p>
        We're here to help. Reach out to us at{" "}
        <a href="mailto:bakermeatco@gmail.com">bakermeatco@gmail.com</a> or call{" "}
        <strong>(951) 348-0235</strong> and we'll be happy to assist you.
      </p>
    </PolicyLayout>
  );
}
