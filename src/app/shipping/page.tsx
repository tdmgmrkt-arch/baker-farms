import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Shipping Info | Baker Farms",
  description: "Learn about Baker Farms shipping policies, delivery areas, and how we ensure your premium meats arrive fresh.",
};

export default function ShippingPage() {
  return (
    <PolicyLayout
      title="Shipping Information"
      subtitle="How we get premium pasture-raised meats from our farms to your freezer."
    >
      <h2>Delivery Methods</h2>
      <p>
        At Baker Farms, we offer two ways to receive your order depending on the
        product and your location. Our goal is to ensure every cut arrives in
        perfect condition, frozen solid and vacuum-sealed.
      </p>

      <h3>Local Pickup — Winchester, CA</h3>
      <p>
        All products are available for local pickup at our farm in Winchester,
        California. After your order is confirmed and your meat is ready, we'll
        contact you to schedule a convenient pickup time.
      </p>
      <ul>
        <li>Pickup is available by appointment only</li>
        <li>We'll notify you via email or phone when your order is ready</li>
        <li>Please bring a cooler for transport if traveling more than 30 minutes</li>
      </ul>

      <h3>Shipping — Select Products</h3>
      <p>
        The <strong>The Beef Box</strong> (20 lb monthly share),{" "}
        <strong>1/8 Beef</strong>, <strong>1/4 Beef</strong>, and{" "}
        <strong>1/2 Beef</strong> shares are available for shipping. These
        products can also be picked up locally — you choose your preferred
        method at checkout. We ship using insulated packaging with dry ice to
        ensure your meat stays frozen during transit.
      </p>
      <ul>
        <li>Orders are shipped Monday–Wednesday to avoid weekend delays</li>
        <li>You'll receive tracking information via email once your order ships</li>
        <li>Shipping costs are calculated at checkout based on weight and destination</li>
      </ul>
      <p>
        <strong>Note:</strong> Current shipping pricing applies to Southern
        California only. Please contact us for shipping inquiries outside this
        area.
      </p>

      <h3>1/2 Beef — Shipped vs. Pickup</h3>
      <p>
        The 1/2 Beef share is available for both shipping and local pickup.
        Please note the differences:
      </p>
      <ul>
        <li>
          <strong>Shipped ($2,999):</strong> ~160 lbs of boneless cuts (steaks,
          roasts, ground beef)
        </li>
        <li>
          <strong>Local Pickup ($3,399):</strong> 200–250 lbs, which includes
          bones and organs in addition to all boneless cuts
        </li>
      </ul>
      <p>
        The pickup option is priced higher because it includes significantly
        more product (bones, organs, and additional weight).
      </p>

      <h2>Pickup-Only Products</h2>
      <p>
        The following products are <strong>local pickup only</strong> due to size
        or packaging requirements:
      </p>
      <ul>
        <li>Whole Beef</li>
        <li>The Bird Box (Chicken — ~20 lbs)</li>
        <li>The Big Bird Box (Chicken — ~40 lbs)</li>
      </ul>
      <p>
        Seasonal <strong>Lamb</strong>, <strong>Pork</strong>, and{" "}
        <strong>Turkey</strong> are also available for local pickup only when
        in season.
      </p>

      <h2>Processing & Lead Times</h2>
      <p>
        Because our meats are processed in small batches, please allow time for
        your order to be prepared. After placing your order:
      </p>
      <ul>
        <li>We'll confirm your order within 1–2 business days</li>
        <li>
          <strong>Local Pickup:</strong> Allow 2–4 weeks for processing
        </li>
        <li>
          <strong>Shipping:</strong> Allow 4–6 weeks for processing and delivery
        </li>
        <li>You'll be notified when your order is ready for pickup or shipment</li>
      </ul>

      <h2>Packaging</h2>
      <p>
        All cuts are individually vacuum-sealed and clearly labeled with the cut
        name and weight. Shipped orders are packed in insulated boxes with dry
        ice to maintain temperature throughout transit.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have any questions about shipping or pickup, please don't hesitate
        to reach out at{" "}
        <a href="mailto:bakermeatco@gmail.com">bakermeatco@gmail.com</a> or call
        us at <strong>(951) 348-0235</strong>.
      </p>
    </PolicyLayout>
  );
}
