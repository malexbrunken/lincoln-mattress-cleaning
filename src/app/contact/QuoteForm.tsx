"use client";

import { useState } from "react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-ice border-2 border-teal rounded-2xl p-8 text-center">
        <p className="text-2xl font-bold text-navy mb-2">Thank you! ✅</p>
        <p className="text-lg">We got your details and will call you back shortly. Talk soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border-2 border-line p-7 space-y-5">
      <div>
        <label htmlFor="name" className="block font-bold text-navy mb-1">Your name</label>
        <input id="name" name="name" required className="w-full border-2 border-line rounded-lg px-4 py-3.5 text-lg" />
      </div>
      <div>
        <label htmlFor="phone" className="block font-bold text-navy mb-1">Phone number</label>
        <input id="phone" name="phone" type="tel" required className="w-full border-2 border-line rounded-lg px-4 py-3.5 text-lg" />
      </div>
      <div>
        <label htmlFor="mattresses" className="block font-bold text-navy mb-1">How many mattresses?</label>
        <input id="mattresses" name="mattresses" placeholder="e.g. 2 — a king and a queen" className="w-full border-2 border-line rounded-lg px-4 py-3.5 text-lg" />
      </div>
      <div>
        <label htmlFor="town" className="block font-bold text-navy mb-1">Your town</label>
        <input id="town" name="town" placeholder="e.g. Lincoln, Waverly, Seward" className="w-full border-2 border-line rounded-lg px-4 py-3.5 text-lg" />
      </div>
      <div>
        <label htmlFor="history" className="block font-bold text-navy mb-1">Pet, urine, or blood history?</label>
        <input id="history" name="history" placeholder="e.g. dog accident last year, or none" className="w-full border-2 border-line rounded-lg px-4 py-3.5 text-lg" />
      </div>
      <div>
        <label htmlFor="notes" className="block font-bold text-navy mb-1">Anything else we should know? (optional)</label>
        <textarea id="notes" name="notes" rows={3} className="w-full border-2 border-line rounded-lg px-4 py-3.5 text-lg" />
      </div>
      {status === "error" && (
        <p className="text-red-700 font-semibold">Sorry — something went wrong. Please call us instead!</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-teal hover:bg-teal-bright text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 w-full sm:w-auto disabled:opacity-60 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send My Request"}
      </button>
    </form>
  );
}