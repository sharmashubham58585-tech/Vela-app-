import type { BirthData, ChartData, PlanetName, SignName } from "@/types/astrology";

const SIGNS: SignName[] = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
];

const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getSign(longitude: number): SignName {
  return SIGNS[Math.floor(longitude / 30) % 12];
}

function getNakshatra(longitude: number) {
  const index = Math.floor((longitude % 360) / (360 / 27));
  const pada = Math.floor(((longitude % (360 / 27)) / (360 / 27 / 4)) % 4) + 1;
  return { name: NAKSHATRAS[index % 27], pada };
}

/**
 * Demo chart generator.
 * In production replace this with Swiss Ephemeris or a proper Vedic library.
 */
export function generateMockChart(birth: BirthData): ChartData {
  const seed =
    birth.date.split("-").reduce((a, b) => a + parseInt(b, 10), 0) +
    birth.time.split(":").reduce((a, b) => a + parseInt(b, 10), 0) +
    Math.floor(birth.latitude * 10) +
    Math.floor(birth.longitude * 10);

  const planets: PlanetName[] = [
    "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu",
  ];

  const planetData = planets.map((name, i) => {
    const long = (seededRandom(seed + i * 17) * 360) % 360;
    const nak = getNakshatra(long);
    return {
      name,
      longitude: Number(long.toFixed(2)),
      sign: getSign(long),
      signDegree: Number((long % 30).toFixed(2)),
      nakshatra: nak.name,
      pada: nak.pada,
      house: (Math.floor(seededRandom(seed + i * 31) * 12) % 12) + 1,
      isRetrograde: ["Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"].includes(name)
        ? seededRandom(seed + i * 7) > 0.72
        : false,
    };
  });

  const lagnaLong = (seededRandom(seed + 99) * 360) % 360;

  const houses = Array.from({ length: 12 }, (_, i) => {
    const long = (lagnaLong + i * 30) % 360;
    return {
      number: i + 1,
      sign: getSign(long),
      degree: Number((long % 30).toFixed(2)),
    };
  });

  const dashaPlanets: PlanetName[] = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
  const maha = dashaPlanets[Math.floor(seededRandom(seed + 200) * 9)];
  const antar = dashaPlanets[Math.floor(seededRandom(seed + 210) * 9)];

  return {
    birth,
    lagna: {
      sign: getSign(lagnaLong),
      degree: Number((lagnaLong % 30).toFixed(2)),
    },
    planets: planetData,
    houses,
    currentDasha: {
      mahadasha: maha,
      antardasha: antar,
      startDate: "2024-01-15",
      endDate: "2026-11-20",
    },
  };
}
