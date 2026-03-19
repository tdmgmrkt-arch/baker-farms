import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Baker Farms",
  description: "Baker Farms privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
    >
      <p>
        <strong>Effective Date:</strong> January 1, 2026
      </p>
      <p>
        Baker Farms Premium Meats (&quot;we,&quot; &quot;our,&quot; or
        &quot;us&quot;) respects your privacy and is committed to protecting the
        personal information you share with us. This Privacy Policy explains how
        we collect, use, and safeguard your information when you visit our
        website or place an order.
      </p>

      <h2>Information We Collect</h2>

      <h3>Information You Provide</h3>
      <p>
        When you place an order, contact us, or subscribe to our newsletter, we
        may collect:
      </p>
      <ul>
        <li>Name and contact information (email, phone number)</li>
        <li>Shipping and billing address</li>
        <li>Payment information (processed securely through Stripe)</li>
        <li>Order preferences and special requests</li>
        <li>Any messages you send through our contact form</li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <p>
        When you visit our website, we may automatically collect:
      </p>
      <ul>
        <li>Browser type and version</li>
        <li>Device type and operating system</li>
        <li>Pages visited and time spent on our site</li>
        <li>Referring website or source</li>
        <li>IP address (anonymized where possible)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and fulfill your orders</li>
        <li>Communicate about your order status, pickup schedules, and shipping</li>
        <li>Send newsletters and promotional offers (only with your consent)</li>
        <li>Improve our website and customer experience</li>
        <li>Respond to your questions and support requests</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Payment Security</h2>
      <p>
        All payment transactions are processed through{" "}
        <strong>Stripe</strong>, a PCI-DSS Level 1 certified payment processor.
        We do not store your credit card number or full payment details on our
        servers. Stripe&apos;s security practices can be reviewed at{" "}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
          stripe.com/privacy
        </a>.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information to third
        parties. We may share information only with:
      </p>
      <ul>
        <li>
          <strong>Payment processors</strong> (Stripe) to complete transactions
        </li>
        <li>
          <strong>Shipping carriers</strong> to deliver your order
        </li>
        <li>
          <strong>Email service providers</strong> to send order confirmations
          and newsletters
        </li>
        <li>
          <strong>Legal authorities</strong> if required by law or to protect our
          rights
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to improve your
        browsing experience. These include:
      </p>
      <ul>
        <li>
          <strong>Essential cookies:</strong> Required for the website to
          function properly
        </li>
        <li>
          <strong>Analytics cookies:</strong> Help us understand how visitors use
          our site so we can improve it
        </li>
      </ul>
      <p>
        You can control cookie preferences through your browser settings.
        Disabling cookies may affect some website functionality.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal data</li>
        <li>Unsubscribe from marketing communications at any time</li>
        <li>Opt out of non-essential cookies</li>
      </ul>
      <p>
        California residents may have additional rights under the CCPA. Please
        contact us for more information.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to fulfill
        your orders, provide customer support, and comply with legal
        obligations. You may request deletion of your data at any time by
        contacting us.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. We encourage you to
        review this page periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or your personal data,
        please contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:bakermeatco@gmail.com">bakermeatco@gmail.com</a>
        </li>
        <li>Phone: (951) 348-0235</li>
        <li>Address: Baker Farms, Winchester, California</li>
      </ul>
    </PolicyLayout>
  );
}
