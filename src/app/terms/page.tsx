import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Baker Farms",
  description: "Baker Farms terms of service — the terms and conditions governing your use of our website and purchases.",
};

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="The terms and conditions governing your use of our website and purchases."
    >
      <p>
        <strong>Effective Date:</strong> January 1, 2026
      </p>
      <p>
        Welcome to Baker Farms Premium Meats. By accessing our website and
        placing orders, you agree to be bound by these Terms of Service. Please
        read them carefully.
      </p>

      <h2>Orders & Deposits</h2>
      <p>
        All orders require a <strong>50% deposit</strong> to reserve your share.
        By placing a deposit, you are agreeing to purchase the selected product
        at the listed price, subject to final weight adjustment.
      </p>
      <ul>
        <li>
          Deposits are processed securely through Stripe and are confirmed via
          email
        </li>
        <li>
          The remaining balance is due upon pickup or before shipment
        </li>
        <li>
          Final pricing is based on the actual hanging weight of your animal and
          may vary slightly from the estimated price listed on our website
        </li>
      </ul>

      <h2>Cancellations</h2>
      <ul>
        <li>
          <strong>Before processing:</strong> You may cancel your order and
          receive a full deposit refund if your animal has not yet entered
          processing
        </li>
        <li>
          <strong>During or after processing:</strong> Deposits are
          non-refundable once your animal has entered the processing stage
        </li>
      </ul>
      <p>
        To cancel an order, please contact us as soon as possible at{" "}
        <a href="mailto:hello@bakerfarms.com">hello@bakerfarms.com</a>.
      </p>

      <h2>Product Descriptions & Pricing</h2>
      <p>
        We make every effort to ensure product descriptions, weights, and
        pricing are accurate. However:
      </p>
      <ul>
        <li>
          Weights listed are <strong>estimates</strong> based on typical yields
          and may vary
        </li>
        <li>
          Cut lists represent standard processing and may vary slightly based on
          animal size and processor availability
        </li>
        <li>
          Prices are subject to change without notice, but confirmed deposits
          will be honored at the price at the time of purchase
        </li>
      </ul>

      <h2>Shipping & Delivery</h2>
      <p>
        Products eligible for shipping will be sent using insulated packaging
        with dry ice via expedited carriers. Baker Farms is not responsible for
        delays caused by shipping carriers, weather events, or other
        circumstances beyond our control.
      </p>
      <p>
        If your shipment arrives damaged or thawed, please contact us within{" "}
        <strong>48 hours</strong> with photos for a resolution. See our{" "}
        <a href="/returns">Return Policy</a> for details.
      </p>

      <h2>Local Pickup</h2>
      <p>
        Orders designated for local pickup must be collected at our farm in
        Winchester, California within the scheduled pickup window. Orders not
        picked up within <strong>7 days</strong> of the scheduled date may incur
        storage fees or be subject to cancellation.
      </p>

      <h2>Food Safety & Liability</h2>
      <p>
        All products are processed at USDA-inspected facilities and are
        vacuum-sealed and flash-frozen. Once products leave our possession
        (via shipping or pickup), Baker Farms is not liable for:
      </p>
      <ul>
        <li>Improper storage or handling by the customer</li>
        <li>Foodborne illness resulting from improper cooking or preparation</li>
        <li>Damage caused by improper thawing methods</li>
      </ul>
      <p>
        Please follow safe food handling practices and cook all meats to
        recommended internal temperatures.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website — including text, images, logos, and design —
        is the property of Baker Farms Premium Meats and is protected by
        applicable copyright and trademark laws. You may not reproduce,
        distribute, or use our content without written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Baker Farms Premium Meats shall
        not be liable for any indirect, incidental, special, or consequential
        damages arising from your use of our website or purchase of our products.
        Our total liability shall not exceed the amount you paid for the
        applicable product.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service are governed by and construed in accordance with
        the laws of the State of California. Any disputes arising from these
        terms shall be resolved in the courts of Riverside County, California.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to update these Terms of Service at any time.
        Changes will be posted on this page with an updated effective date. Your
        continued use of our website after changes are posted constitutes
        acceptance of the updated terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about these Terms of Service, please contact us:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:hello@bakerfarms.com">hello@bakerfarms.com</a>
        </li>
        <li>Phone: (951) 555-BEEF</li>
        <li>Address: Baker Farms, Winchester, California</li>
      </ul>
    </PolicyLayout>
  );
}
