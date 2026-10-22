import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-5 flex items-center justify-between border-b border-ink/5">
        <div className="flex items-center gap-3">
          {/* Thin brass moon ring logo */}
          <div className="w-8 h-8 rounded-full border-[1.5px] border-brass flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border border-brass/60" />
          </div>
          <span className="font-serif text-xl tracking-tight text-ink">
            Vela
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-ink/70">
          <Link href="/chart" className="hover:text-ink transition-colors">
            Chart
          </Link>
          <Link href="/ai" className="hover:text-ink transition-colors">
            AI
          </Link>
          <Link href="/numerology" className="hover:text-ink transition-colors">
            Numerology
          </Link>
          <Link href="/palmistry" className="hover:text-ink transition-colors">
            Palmistry
          </Link>
          <Link href="/compatibility" className="hover:text-ink transition-colors">
            Match
          </Link>
        </nav>

        <Link
          href="/chart"
          className="text-sm px-4 py-2 rounded-full bg-ink text-cream hover:bg-ink/90 transition-colors"
        >
          Get Started
        </Link>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-3xl mx-auto">
        <div className="mb-6 w-16 h-16 rounded-full border-[1.5px] border-brass flex items-center justify-center opacity-80">
          <div className="w-10 h-10 rounded-full border border-brass/50" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-ink mb-6 text-balance">
          Quiet observations
          <br />
          of the sky
        </h1>

        <p className="text-ink/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Vedic natal charts, daily almanac, AI guidance, numerology and
          palmistry — presented with calm clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/chart"
            className="px-8 py-3.5 rounded-full bg-ink text-cream font-medium hover:bg-ink/90 transition-all shadow-soft"
          >
            Generate Your Chart
          </Link>
          <Link
            href="/ai"
            className="px-8 py-3.5 rounded-full border border-ink/15 text-ink hover:border-brass hover:text-brass transition-all"
          >
            Ask the AI Astrologer
          </Link>
        </div>

        <p className="mt-8 text-sm text-ink/40">
          3 free questions included
        </p>
      </section>

      {/* Feature grid */}
      <section className="px-6 py-16 border-t border-ink/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Natal Chart",
              desc: "Accurate Vedic kundali with dashas, yogas and interactive wheel.",
            },
            {
              title: "AI Astrologer",
              desc: "Context-aware guidance grounded in your actual chart data.",
            },
            {
              title: "Future Outlook",
              desc: "Balanced predictions based on current dasha and major transits.",
            },
            {
              title: "Numerology",
              desc: "Life path, destiny and name analysis with clear interpretations.",
            },
            {
              title: "Palmistry",
              desc: "Guided reading or image upload for major lines and mounts.",
            },
            {
              title: "Compatibility",
              desc: "Ashtakoot matching and detailed relationship insights.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-cream-dark/40 border border-ink/5 hover:border-brass/30 transition-colors"
            >
              <h3 className="font-serif text-lg mb-2 text-ink">{item.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-ink/5 text-center text-sm text-ink/40">
        <p>Vela — A quiet editorial almanac</p>
      </footer>
    </main>
  );
}
