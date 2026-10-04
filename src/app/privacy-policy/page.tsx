import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy and SMS Terms",
  description:
    "Sleep Sanitation LLC messaging privacy policy: what we collect when you opt in to SMS, how we use it, no third-party sharing, and the SMS program terms.",
};

const dataCollected = [
  "Your name",
  "Your phone number",
  "Consent to send SMS messages",
];

const dataUses = [
  "Operate our business",
  "Send you the SMS messages you've opted in to receive",
];

const terms = [
  "The messaging program consists of general customer care messaging to answer questions and provide support to customers. Messages will be sent from (402) 512-5658.",
  "You can cancel the SMS service at any time. Just text 'STOP' to the phone number from which you received messages. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.",
  "If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at info@sleepsanitation.com.",
  "Carriers are not liable for delayed or undelivered messages.",
  "As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.",
  "If you have any questions regarding privacy, please read our privacy policy details contained in the rest of this page or contact us at info@sleepsanitation.com",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Privacy policy and SMS terms" path="/privacy-policy" dateModified={updatedFor("/privacy-policy")} type="WebPage" />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Privacy Policy", url: `${site.url}/privacy-policy` },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Privacy Policy
      </nav>

      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5 leading-tight">
        Sleep Sanitation Messaging Privacy Policy
      </h1>

      <p className="text-lg mb-10">
        Sleep Sanitation LLC (doing business as Sleep Sanitation) (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
        respects your privacy and is committed to protecting your personal information. This Privacy Policy
        explains how Sleep Sanitation collects and uses information about you when you opt-in to receive SMS
        messages from us.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-4">Data We Collect</h2>
      <p className="mb-4">When you opt-in to receive SMS messages, we collect:</p>
      <ul className="space-y-2 mb-10 rounded-2xl bg-ice border border-line p-6">
        {dataCollected.map((d) => (
          <li key={d} className="flex gap-3"><span className="text-teal font-bold">•</span> {d}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-navy mb-4">How We Use Your Data</h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="space-y-2 mb-10 rounded-2xl bg-ice border border-line p-6">
        {dataUses.map((d) => (
          <li key={d} className="flex gap-3"><span className="text-teal font-bold">•</span> {d}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-navy mb-4">Data Sharing</h2>
      <ul className="space-y-3 mb-10 text-lg leading-relaxed">
        <li>
          Customer data is not shared with 3rd parties for promotional or marketing purposes.
        </li>
        <li>
          Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing
          that may be mentioned elsewhere in this policy excludes mobile opt-in data.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-navy mb-4">
        Messaging Program Terms and Conditions
      </h2>
      <ol className="space-y-5 mb-10 text-lg leading-relaxed">
        {terms.map((t, i) => (
          <li key={i} className="flex gap-4">
            <span className="font-display text-2xl text-teal leading-none pt-1">{i + 1}</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>

      <p className="text-mist">
        Questions about this policy or our messaging program? Contact us at{" "}
        <a href="mailto:info@sleepsanitation.com" className="text-teal-deep underline font-semibold">
          info@sleepsanitation.com
        </a>{" "}
        or call{" "}
        <a href={site.phoneHref} className="text-teal-deep underline font-semibold">{site.phone}</a>.
      </p>
    </div>
  );
}