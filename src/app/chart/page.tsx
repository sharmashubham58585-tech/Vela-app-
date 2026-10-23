"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChartPage() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "12:00",
    place: "",
  });
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <main className="min-h-screen pb-16 bg-[#ebe6d8] text-[#101412]">
      <header className="px-6 py-5 flex items-center justify-between border-b border-black/5 sticky top-0 bg-[#ebe6d8]/90 backdrop-blur z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border-[1.5px] border-[#d4b483] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-[#d4b483]/60" />
          </div>
          <span className="font-serif text-lg">Vela</span>
        </Link>
        <span className="text-sm text-black/50">Natal Chart</span>
      </header>

      <div className="max-w-xl mx-auto px-6 py-10">
        {!showResult ? (
          <>
            <h1 className="font-serif text-3xl mb-2">Generate your chart</h1>
            <p className="text-black/60 mb-8">
              Enter your birth details to generate a Vedic natal chart.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm mb-1.5 text-black/70">Name (optional)</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483]"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1.5 text-black/70">Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1.5 text-black/70">Time of Birth</label>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1.5 text-black/70">Place of Birth</label>
                <input
                  type="text"
                  required
                  value={form.place}
                  onChange={(e) => setForm({ ...form, place: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483]"
                  placeholder="City, Country"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#101412] text-[#ebe6d8] font-medium"
              >
                Calculate Chart
              </button>
            </form>
          </>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-serif text-3xl mb-1">{form.name || "Your"} Chart</h1>
                <p className="text-black/60 text-sm">
                  {form.date} · {form.time} · {form.place}
                </p>
              </div>
              <button
                onClick={() => setShowResult(false)}
                className="text-sm px-4 py-2 rounded-full border border-black/15"
              >
                New Chart
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#e0d9c8]/40 border border-black/5">
              <p className="text-xs uppercase tracking-wider text-black/40 mb-1">Lagna</p>
              <p className="font-serif text-xl">Libra 14.2°</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#e0d9c8]/40 border border-black/5">
              <p className="text-xs uppercase tracking-wider text-black/40 mb-1">Current Dasha</p>
              <p className="font-serif text-xl">Venus – Mercury</p>
              <p className="text-xs text-black/50 mt-1">until 2026-11-20</p>
            </div>

            <div className="p-5 rounded-2xl border border-[#d4b483]/30 bg-[#d4b483]/5">
              <p className="text-sm text-black/70">
                This is a demo chart. Full planetary calculations will be connected soon with Swiss Ephemeris.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
