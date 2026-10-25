"use client";

import { useState } from "react";
import Link from "next/link";

export default function CompatibilityPage() {
  const [boyName, setBoyName] = useState("");
  const [boyDob, setBoyDob] = useState("");
  const [girlName, setGirlName] = useState("");
  const [girlDob, setGirlDob] = useState("");
  const [result, setResult] = useState<{
    score: number;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!boyName || !boyDob || !girlName || !girlDob) return;

    // Simple demo score based on names + dates
    const seed =
      (boyName + girlName + boyDob + girlDob)
        .split("")
        .reduce((a, c) => a + c.charCodeAt(0), 0);
    const score = 12 + (seed % 25); // between 12-36

    let message = "";
    if (score >= 28) message = "Excellent match. Strong foundation for a harmonious relationship.";
    else if (score >= 18) message = "Good compatibility. With mutual understanding the relationship can flourish.";
    else message = "Average match. Effort and communication will be important.";

    setResult({ score, message });
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
        <span className="text-sm text-black/50">Compatibility</span>
      </header>

      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="font-serif text-3xl mb-2">Kundali Milan</h1>
        <p className="text-black/60 mb-8">Ashtakoot matching (36 points).</p>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-lg">Partner 1</h2>
              <input
                type="text"
                required
                value={boyName}
                onChange={(e) => setBoyName(e.target.value)}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              />
              <input
                type="date"
                required
                value={boyDob}
                onChange={(e) => setBoyDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-lg">Partner 2</h2>
              <input
                type="text"
                required
                value={girlName}
                onChange={(e) => setGirlName(e.target.value)}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              />
              <input
                type="date"
                required
                value={girlDob}
                onChange={(e) => setGirlDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10"
              />
            </div>

            <button type="submit" className="w-full py-3.5 rounded-full bg-[#101412] text-[#ebe6d8] font-medium">
              Calculate Match
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-black/60">
                {boyName} & {girlName}
              </p>
              <button
                onClick={() => setResult(null)}
                className="text-sm px-4 py-2 rounded-full border border-black/15"
              >
                New Match
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#e0d9c8]/40 border border-black/5 text-center">
              <p className="text-xs uppercase tracking-wider text-black/40 mb-1">
                Guna Milan Score
              </p>
              <p className="font-serif text-5xl">
                {result.score}
                <span className="text-2xl text-black/40"> / 36</span>
              </p>
              <p className="text-sm text-black/70 mt-3">{result.message}</p>
            </div>

            <p className="text-xs text-black/40 text-center">
              Demo matching. Full Ashtakoot rules can be added later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
