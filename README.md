# Vela — Quiet Vedic Almanac

A calm, editorial Vedic astrology platform with natal charts, AI Astrologer, numerology, palmistry and compatibility.

## Design System
- **Ink**: `#101412`
- **Cream**: `#ebe6d8`
- **Brass**: `#d4b483`
- Quiet editorial aesthetic (not purple mystic)
- Logo: thin brass moon ring

## Features Ready (Demo)

| Module | Status | Notes |
|--------|--------|-------|
| Landing page | Ready | Full |
| Natal Chart | Ready | Mock calculation + full UI |
| AI Astrologer | Ready | 3 free questions (localStorage) |
| Numerology | Ready | Life Path, Destiny, Soul Urge, Personality |
| Palmistry | Ready | Guided major lines + mounts |
| Compatibility | Ready | Ashtakoot (36 points) + Manglik |
| Design system | Ready | Colors, typography, components |

## How to run

```bash
cd vela-app
npm install
npm run dev
```

Open http://localhost:3000

## Pages
- `/` — Home
- `/chart` — Natal chart generator
- `/ai` — AI Astrologer (3 free questions)
- `/numerology` — Numerology calculator
- `/palmistry` — Palm reading
- `/compatibility` — Kundali Milan

## Important Notes

- Chart calculations are **demo/mock**. For real accuracy integrate Swiss Ephemeris or a certified Vedic library.
- AI responses are currently placeholder. Connect OpenAI / Grok / Claude and pass real ChartData as context.
- Free questions are tracked in localStorage (per browser).

## Next production steps
1. Real planetary engine (Swiss Ephemeris)
2. Real AI with chart context
3. Image upload for palmistry
4. PDF report export
5. User accounts + saved charts
6. Auth + payments for unlimited questions
