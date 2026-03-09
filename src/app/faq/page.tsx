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
        Browse our products on the homepage and click <strong>"Reserve Now"</strong>{" "}
        on any product. You'll be taken to a secure checkout page to pay your 50%
        deposit. Once your deposit is received, we'll confirm your order within
        1–2 business days.
      </p>

      <h3>What does "50% deposit to reserve" mean?</h3>
      <p>
        Because our meats are processed in small batches, we require a 50% deposit
        to secure your share. The remaining balance is due when your order is
        ready for pickup or before it ships. Final pricing is based on actual
        hanging weight.
      </p>

      <h3>Can I customize my order or choose specific cuts?</h3>
      <p>
        Our shares come with a standard cut list, but we're happy to work with
        you on preferences when possible. Contact us after placing your deposit
        to discuss any special requests.
      </p>

      <h2>Our Meats</h2>

      <h3>What does "grass-fed and finished" mean?</h3>
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
        <li><strong>Baker Beef Box (1/8):</strong> 1–2 cubic feet</li>
        <li><strong>1/4 Beef:</strong> 2–4 cubic feet</li>
        <li><strong>1/2 Beef:</strong> 5–7 cubic feet</li>
        <li><strong>Whole Beef:</strong> 14–20 cubic feet</li>
        <li><strong>Baker Bird Box:</strong> 1–2 cubic feet</li>
        <li><strong>1/2 Lamb:</strong> ~1 cubic foot</li>
        <li><strong>Whole Lamb:</strong> ~2 cubic feet</li>
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
        The <strong>Baker Beef Box</strong>, <strong>1/4 Beef</strong>, and{" "}
        <strong>1/2 Beef</strong> are available for shipping within the
        continental United States. All other products are local pickup only in
        Winchester, CA.
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

      <h2>Payment</h2>

      <h3>What payment methods do you accept?</h3>
      <p>
        We accept all major credit cards through our secure Stripe checkout. Your
        payment information is never stored on our servers.
      </p>

      <h3>Is my deposit refundable?</h3>
      <p>
        Deposits are fully refundable if you cancel before your animal enters
        processing. Once processing begins, deposits are non-refundable. See our{" "}
        <a href="/returns">Return Policy</a> for full details.
      </p>

      <h2>Still Have Questions?</h2>
      <p>
        We're here to help. Reach out to us at{" "}
        <a href="mailto:hello@bakerfarms.com">hello@bakerfarms.com</a> or call{" "}
        <strong>(951) 555-BEEF</strong> and we'll be happy to assist you.
      </p>
    </PolicyLayout>
  );
}
