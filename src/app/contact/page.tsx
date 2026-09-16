import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Book a Mattress Cleaning Appointment | Lincoln, NE",
  description:
    "Book mattress cleaning in Lincoln, Nebraska. Call (402) 672-6272 or send the short form — tell us how many mattresses and what you are seeing, and we will confirm pricing before we schedule.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Book
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5">Book an Appointment</h1>
      <p className="text-xl mb-8">
        The fastest way is the phone — we can quote it in under a minute and confirm your address is inside the
        service radius. Prefer to write it down? The form below is short on purpose.
      </p>

      <div className="bg-navy text-white rounded-2xl p-8 mb-10 text-center texture-grain">
        <p className="text-lg mb-3">Call or text, 7 days a week:</p>
        <a href={site.phoneHref} className="inline-flex bg-teal hover:bg-teal-bright text-white font-bold text-2xl px-8 py-4 rounded-lg items-center transition-colors">
          {site.phone}
        </a>
        <p className="text-white/70 mt-3">{site.hours}</p>
        <a href={`mailto:${site.email}`} className="inline-block text-teal-bright hover:text-white mt-2 transition-colors">
          {site.email}
        </a>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-4">Or send us the details</h2>
      <QuoteForm />
      <p className="text-mist mt-4">
        We reply the same day — usually within a couple of hours. No deposit required.
      </p>

      <div className="mt-10 bg-ice border border-line rounded-2xl p-6">
        <h2 className="font-sans font-bold text-lg text-navy mb-2">Before you call, it helps to know</h2>
        <ul className="space-y-2 text-mist text-[15px]">
          <li>• How many mattresses, and the size of each one.</li>
          <li>• Whether there is pet, urine, or blood history — that determines which add-on applies.</li>
          <li>• Your town, so we can confirm the service radius.</li>
          <li>• If you have an active bed bug infestation, mention it — we will refer you to pest control rather than book you.</li>
        </ul>
      </div>
    </div>
  );
}