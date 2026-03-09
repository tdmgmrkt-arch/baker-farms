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
      subtitle="How we get premium pasture-raised meats from our farm to your freezer."
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
        California. After your order is processed and your meat is ready, we'll
        contact you to schedule a convenient pickup time.
      </p>
      <ul>
        <li>Pickup is available by appointment only</li>
        <li>We'll notify you via email or phone when your order is ready</li>
        <li>Please bring a cooler for transport if traveling more than 30 minutes</li>
      </ul>

      <h3>Shipping — Select Products</h3>
      <p>
        The <strong>Baker Beef Box (1/8 Beef)</strong>, <strong>1/4 Beef</strong>,
        and <strong>1/2 Beef</strong> shares are available for shipping. We ship
        using insulated packaging with dry ice to ensure your meat stays frozen
        during transit.
      </p>
      <ul>
        <li>Orders are shipped Monday–Wednesday to avoid weekend delays</li>
        <li>Shipping is available within the continental United States</li>
        <li>You'll receive tracking information via email once your order ships</li>
        <li>Shipping costs are calculated at checkout based on weight and destination</li>
      </ul>

      <h2>Pickup-Only Products</h2>
      <p>
        The following products are <strong>local pickup only</strong> due to size
        or packaging requirements:
      </p>
      <ul>
        <li>Whole Beef</li>
        <li>Baker Bird Box (Chicken)</li>
        <li>1/2 Lamb</li>
        <li>Whole Lamb</li>
      </ul>

      <h2>Processing & Lead Times</h2>
      <p>
        Because our meats are processed in small batches, please allow time for
        your order to be prepared. After placing your deposit:
      </p>
      <ul>
        <li>We'll confirm your order within 1–2 business days</li>
        <li>Processing typically takes 2–4 weeks depending on the product and season</li>
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
        <a href="mailto:hello@bakerfarms.com">hello@bakerfarms.com</a> or call
        us at <strong>(951) 555-BEEF</strong>.
      </p>
    </PolicyLayout>
  );
}
