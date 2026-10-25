"use client";

import { useState } from "react";
import Link from "next/link";

export default function PalmistryPage() {
  const [lifeLine, setLifeLine] = useState("moderate");
  const [heartLine, setHeartLine] = useState("moderate");
  const [headLine, setHeadLine] = useState("moderate");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const meanings: Record<string, string> = {
      strong: "strong and clear energy",
      moderate: "balanced and steady energy",
      weak: "sensitive and needs care",
      broken: "periods of change and transformation",
    };

    const text = `Your Life Line shows ${meanings[lifeLine]}. Heart Line indicates ${meanings[heartLine]}. Head Line reflects ${meanings[headLine]}. Overall, your hand suggests a thoughtful nature with capacity for steady growth. This is a demo reading — deeper analysis can be added later.`;

    setResult(text);
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
        <span className="text-sm text-black/50">Palmistry</span>
      </header>

      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="font-serif text-3xl mb-2">Palmistry</h1>
        <p className="text-black/60 mb-8">Guided reading of major lines.</p>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1.5 text-black/70">Life Line</label>
              <select
                value={lifeLine}
                onChange={(e) => setLifeLine(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              >
                <option value="strong">Strong & clear</option>
                <option value="moderate">Moderate</option>
                <option value="weak">Faint / weak</option>
                <option value="broken">Broken</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1.5 text-black/70">Heart Line</label>
              <select
                value={heartLine}
                onChange={(e) => setHeartLine(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              >
                <option value="strong">Strong & clear</option>
                <option value="moderate">Moderate</option>
                <option value="weak">Faint / weak</option>
                <option value="broken">Broken</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1.5 text-black/70">Head Line</label>
              <select
                value={headLine}
                onChange={(e) => setHeadLine(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              >
                <option value="strong">Strong & clear</option>
                <option value="moderate">Moderate</option>
                <option value="weak">Faint / weak</option>
                <option value="broken">Broken</option>
              </select>
            </div>

            <button type="submit" className="w-full py-3.5 rounded-full bg-[#101412] text-[#ebe6d8] font-medium">
              Generate Reading
            </button>
          </form>
        ) : (
          <div className="space-y-5">
            <div className="flex justify-end">
              <button
                onClick={() => setResult(null)}
                className="text-sm px-4 py-2 rounded-full border border-black/15"
              >
                New Reading
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-[#e0d9c8]/40 border border-black/5">
              <p className="text-sm leading-relaxed text-black/80">{result}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
