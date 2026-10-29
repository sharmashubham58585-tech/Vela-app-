
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [remaining, setRemaining] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim() || remaining <= 0 || loading) return;

    const userQ = question.trim();
    setMessages((prev) => [...prev, { role: "user", content: userQ }]);
    setQuestion("");
    setRemaining((r) => r - 1);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userQ }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Maaf kijiye, abhi jawab nahi de paaya. Thodi der baad try karein.",
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Kuch technical problem aa gayi. Please thodi der baad try karein.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#ebe6d8] text-[#101412]">
      <header className="px-6 py-5 flex items-center justify-between border-b border-black/5 sticky top-0 bg-[#ebe6d8]/90 backdrop-blur z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border-[1.5px] border-[#d4b483] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-[#d4b483]/60" />
          </div>
          <span className="font-serif text-lg">Vela</span>
        </Link>
        <div className="text-sm">
          <span className="text-black/50">Free left: </span>
          <span className="font-medium text-[#d4b483]">{remaining}</span>
        </div>
      </header>

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-8 flex flex-col">
        <h1 className="font-serif text-2xl mb-1">AI ज्योतिष</h1>
        <p className="text-black/60 text-sm mb-6">
          Apne sawaal poochho. 3 free questions included.
        </p>

        <div className="flex-1 space-y-4 mb-6 min-h-[250px]">
          {messages.length === 0 && (
            <div className="text-center text-black/40 py-12 text-sm">
              Aapka sawaal yahan dikhega.
              <br />
              Example: “Meri current dasha kya keh rahi hai?”
            </div>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[#101412] text-[#ebe6d8] ml-8"
                  : "bg-[#e0d9c8]/60 border border-black/5 mr-8"
              }`}
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="text-black/40 text-sm italic">Socho toh raha hoon…</div>
          )}
        </div>

        <div className="border-t border-black/5 pt-4">
          {remaining <= 0 ? (
            <div className="text-center p-4 rounded-xl bg-[#e0d9c8]/50 text-sm">
              <p className="mb-2">Aapne 3 free questions use kar liye hain.</p>
              <button className="px-5 py-2 rounded-full bg-[#101412] text-[#ebe6d8] text-sm">
                Upgrade for unlimited
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                placeholder="Apna sawaal likhein…"
                className="flex-1 px-4 py-3 rounded-xl bg-[#e0d9c8]/50 border border-black/10 focus:outline-none focus:border-[#d4b483] text-sm"
              />
              <button
                onClick={handleAsk}
                disabled={loading || !question.trim()}
                className="px-5 py-3 rounded-xl bg-[#101412] text-[#ebe6d8] text-sm font-medium disabled:opacity-40"
              >
                Poochho
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
