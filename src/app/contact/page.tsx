import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import { WebPageJsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { site } from "@/lib/site";
import { BookOptions, BookHours } from "@/components/BookOptions";

export const metadata: Metadata = {
  title: "Book Mattress Cleaning in Lincoln, NE",
  description:
    "Book mattress cleaning in Lincoln, NE: call or text (402) 512-5658 or email info@sleepsanitation.com. $249 first mattress, any size. No deposit required.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Book mattress cleaning in Lincoln, NE" path="/contact" dateModified={updatedFor("/contact")} type="ContactPage" />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Book
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5">Book an Appointment</h1>
      <p className="text-xl mb-8">
        Call, text or email us below. Tell us your town and how many mattresses, and we&apos;ll
        confirm your address is inside the service radius and give you the price. No deposit required.
      </p>

      <div className="bg-navy text-white rounded-2xl p-5 sm:p-7 mb-10 texture-grain">
        <div className="relative">
          <h2 className="font-display text-2xl font-semibold mb-4">How can you reach us?</h2>
          <BookOptions layout="stack" />
          <BookHours className="mt-5" />
        </div>
      </div>

      <div className="mt-10 bg-ice border border-line rounded-2xl p-6">
        <h2 className="font-sans font-bold text-lg text-navy mb-2">Before you call, text or email, it helps to know</h2>
        <ul className="space-y-2 text-mist text-[15px]">
          <li>• How many mattresses, and the size of each one.</li>
          <li>• Whether there is pet, urine, or blood history — ordinary accidents are included; severe contamination is quoted separately.</li>
          <li>• Your town, so we can confirm the service radius.</li>
          <li>• If you have an active bed bug infestation, mention it — we will refer you to pest control rather than book you.</li>
        </ul>
      </div>
    </div>
  );
}