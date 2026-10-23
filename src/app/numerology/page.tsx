"use client";

import { useState } from "react";
import Link from "next/link";

export default function NumerologyPage() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{
    lifePath: number;
    destiny: number;
    interpretation: string;
  } | null>(null);

  const reduce = (n: number): number => {
    if (n === 11 || n === 22 || n === 33) return n;
    while (n > 9) {
      n = n.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    }
    return n;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !dob) return;

    const digits = dob.replace(/-/g, "").split("").map(Number);
    const lifePath = reduce(digits.reduce((a, b) => a + b, 0));

    let sum = 0;
    for (const c of name.toLowerCase()) {
      if (c >= "a" && c <= "z") sum += c.charCodeAt(0) - 96;
    }
    const destiny = reduce(sum);

    const meanings: Record<number, string> = {
      1: "Independent, pioneering, and ambitious. Natural leader.",
      2: "Diplomatic, sensitive, and cooperative. Thrives in partnerships.",
      3: "Creative, expressive, and social. Communication is your gift.",
      4: "Practical, disciplined, and hardworking. Builder of foundations.",
      5: "Freedom-loving, adaptable, and adventurous.",
      6: "Nurturing, responsible, and harmonious. Natural caregiver.",
      7: "Analytical, introspective, and spiritual. Seeker of truth.",
      8: "Ambitious, powerful, and material-oriented.",
      9: "Compassionate, humanitarian, and idealistic.",
      11: "Intuitive and inspirational. Master number of illumination.",
      22: "Master builder. Turns big visions into reality.",
      33: "Master teacher and healer. Highest form of service.",
    };

    setResult({
      lifePath,
      destiny,
      interpretation: meanings[lifePath] || meanings[1],
    });
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
        <span className="text-sm text-black/50">Numerology</span>
      </header>

      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="font-serif text-3xl mb-2">Numerology</h1>
        <p className="text-black/60 mb-8">Discover your Life Path and Destiny numbers.</p>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1.5 text-black/70">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483]"
                placeholder="As on official documents"
              />
            </div>
            <div>
              <label className="block text-sm mb-1.5 text-black/70">Date of Birth</label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483]"
              />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-full bg-[#101412] text-[#ebe6d8] font-medium">
              Calculate Numbers
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-black/60 text-sm">{name} · {dob}</p>
              <button onClick={() => setResult(null)} className="text-sm px-4 py-2 rounded-full border border-black/15">
                New Reading
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#e0d9c8]/40 border border-black/5 text-center">
                <p className="text-xs text-black/40 uppercase">Life Path</p>
                <p className="font-serif text-4xl mt-1">{result.lifePath}</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#e0d9c8]/40 border border-black/5 text-center">
                <p className="text-xs text-black/40 uppercase">Destiny</p>
                <p className="font-serif text-4xl mt-1">{result.destiny}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#e0d9c8]/30 border border-black/5">
              <h3 className="font-serif text-lg mb-2">Life Path {result.lifePath}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{result.interpretation}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
