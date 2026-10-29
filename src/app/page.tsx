import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#ebe6d8] text-[#101412]">
      <header className="w-full px-6 py-5 flex items-center justify-between border-b border-black/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-[1.5px] border-[#d4b483] flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border border-[#d4b483]/60" />
          </div>
          <span className="font-serif text-xl tracking-tight">Vela</span>
        </div>
        <Link href="/chart" className="text-sm px-4 py-2 rounded-full bg-[#101412] text-[#ebe6d8]">
          शुरू करें
        </Link>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-3xl mx-auto">
        <div className="mb-6 w-16 h-16 rounded-full border-[1.5px] border-[#d4b483] flex items-center justify-center opacity-80">
          <div className="w-10 h-10 rounded-full border border-[#d4b483]/50" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
          आकाश की शांत
          <br />
          टिप्पणियाँ
        </h1>
        <p className="text-black/50 text-sm mb-6">Quiet observations of the sky</p>

        <p className="text-black/70 text-base max-w-xl mb-10 leading-relaxed">
          वैदिक जन्म कुंडली, AI ज्योतिष, अंकज्योतिष और हस्तरेखा — शांत और स्पष्ट तरीके से।
          <br />
          <span className="text-sm text-black/50">
            Vedic charts, AI guidance, numerology & palmistry with calm clarity.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <Link href="/chart" className="px-8 py-3.5 rounded-full bg-[#101412] text-[#ebe6d8] font-medium text-center">
            कुंडली बनाएं
          </Link>
          <Link href="/ai" className="px-8 py-3.5 rounded-full border border-black/15 text-center">
            AI से पूछें
          </Link>
        </div>

        <p className="mt-6 text-sm text-black/40">
          3 मुफ्त प्रश्न शामिल · 3 free questions included
        </p>
      </section>

      <section className="px-6 py-12 border-t border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "जन्म कुंडली", en: "Natal Chart", href: "/chart", desc: "दशा, योग और ग्रह स्थिति" },
            { title: "AI ज्योतिष", en: "AI Astrologer", href: "/ai", desc: "3 मुफ्त प्रश्न" },
            { title: "अंकज्योतिष", en: "Numerology", href: "/numerology", desc: "लाइफ पाथ व डेस्टिनी नंबर" },
            { title: "हस्तरेखा", en: "Palmistry", href: "/palmistry", desc: "मुख्य रेखाओं का विश्लेषण" },
            { title: "कुंडली मिलान", en: "Compatibility", href: "/compatibility", desc: "अष्टकूट 36 गुण मिलान" },
            { title: "भविष्य दृष्टि", en: "Future Outlook", href: "/ai", desc: "दशा आधारित भविष्यवाणी" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="p-5 rounded-2xl bg-[#e0d9c8]/40 border border-black/5">
              <h3 className="font-serif text-lg mb-0.5">{item.title}</h3>
              <p className="text-xs text-black/40 mb-2">{item.en}</p>
              <p className="text-sm text-black/60">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-black/5 text-center text-sm text-black/40">
        <p>Vela — एक शांत वैदिक पंचांग</p>
      </footer>
    </main>
  );
}
  
