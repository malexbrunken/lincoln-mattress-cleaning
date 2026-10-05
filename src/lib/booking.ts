import { site } from "@/lib/site";

/**
 * Booking channels. There is no online scheduler, so /book offers call, text and a
 * pre-filled email. Every site-wide "Book" CTA points at BOOK_PATH.
 */
export const BOOK_PATH = "/book";
export const smsHref = "sms:+14025125658";

const emailSubject = `Mattress sanitation booking - ${site.city}`;
const emailBody = [
  "Hi, I'd like to book a mattress sanitation visit.",
  "",
  "Name:",
  "Address or neighborhood:",
  "Number and size of mattresses:",
  "Any urine or odor concerns:",
  "Preferred days or times:",
  "Best phone number:",
].join("\n");

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
