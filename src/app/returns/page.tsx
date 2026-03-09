import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Return Policy | Baker Farms",
  description: "Baker Farms return and refund policy for premium pasture-raised meats.",
};

export default function ReturnsPage() {
  return (
    <PolicyLayout
      title="Return Policy"
      subtitle="Our commitment to your satisfaction with every order."
    >
      <h2>Our Guarantee</h2>
      <p>
        We take immense pride in the quality of our pasture-raised meats. Every
        animal is ethically raised on our family farm in Winchester, California,
        and every cut is vacuum-sealed and flash-frozen for optimal freshness. If
        you're not satisfied, we want to make it right.
      </p>

      <h2>Quality Issues</h2>
      <p>
        If you receive a product that is damaged, thawed during shipping, or does
        not meet our quality standards, please contact us within{" "}
        <strong>48 hours of delivery or pickup</strong> and we will work with you
        to resolve the issue. This may include:
      </p>
      <ul>
        <li>A replacement of the affected product</li>
        <li>A partial or full credit toward a future order</li>
        <li>A refund for the affected portion of your order</li>
      </ul>
      <p>
        Please include photos of the product and packaging when reporting an
        issue so we can assess and respond quickly.
      </p>

      <h2>Deposits</h2>
      <p>
        All orders require a <strong>50% deposit</strong> to reserve your share.
        Deposits are refundable under the following conditions:
      </p>
      <ul>
        <li>
          <strong>Cancellation before processing:</strong> Full deposit refund if
          you cancel before your animal enters processing
        </li>
        <li>
          <strong>Cancellation during processing:</strong> Deposits are
          non-refundable once your animal has entered the processing stage
        </li>
      </ul>
      <p>
        The remaining balance is due upon pickup or before shipping. Final
        pricing is based on the actual hanging weight of your animal.
      </p>

      <h2>What We Cannot Accept</h2>
      <p>
        Due to the perishable nature of our products, we are unable to accept
        returns on:
      </p>
      <ul>
        <li>Products that have been opened, thawed, or cooked</li>
        <li>Orders reported more than 48 hours after delivery or pickup</li>
        <li>Issues caused by improper storage after receiving your order</li>
      </ul>

      <h2>How to Report an Issue</h2>
      <p>
        Contact us as soon as possible with your order details and a description
        of the issue:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:hello@bakerfarms.com">hello@bakerfarms.com</a>
        </li>
        <li>Phone: (951) 555-BEEF</li>
      </ul>
      <p>
        We review all claims promptly and will respond within{" "}
        <strong>1–2 business days</strong>.
      </p>
    </PolicyLayout>
  );
}
