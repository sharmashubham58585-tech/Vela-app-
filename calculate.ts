export interface NumerologyResult {
  lifePath: number;
  destiny: number;
  soulUrge: number;
  personality: number;
  birthday: number;
  interpretations: {
    lifePath: string;
    destiny: string;
    soulUrge: string;
    personality: string;
  };
  luckyNumbers: number[];
  favorableDays: string[];
}

const letterValues: Record<string, number> = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
};

function reduceToSingle(n: number): number {
  if (n === 11 || n === 22 || n === 33) return n; // Master numbers
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return n;
}

function nameToNumber(name: string, vowelsOnly = false, consonantsOnly = false): number {
  const cleaned = name.toLowerCase().replace(/[^a-z]/g, "");
  let sum = 0;
  for (const char of cleaned) {
    const isVowel = "aeiou".includes(char);
    if (vowelsOnly && !isVowel) continue;
    if (consonantsOnly && isVowel) continue;
    sum += letterValues[char] || 0;
  }
  return reduceToSingle(sum);
}

const interpretations: Record<number, { life: string; destiny: string; soul: string; personality: string }> = {
  1: {
    life: "Independent, pioneering, and ambitious. Natural leader who carves their own path.",
    destiny: "You are meant to lead and initiate. Self-reliance is your strength.",
    soul: "Deep desire for independence and originality.",
    personality: "Appears confident, assertive, and original to others.",
  },
  2: {
    life: "Diplomatic, sensitive, and cooperative. You thrive in partnerships.",
    destiny: "Your path involves harmony, mediation, and supportive roles.",
    soul: "Yearns for peace, connection, and emotional balance.",
    personality: "Gentle, tactful, and considerate in presence.",
  },
  3: {
    life: "Creative, expressive, and social. Communication is your gift.",
    destiny: "You are here to inspire through words, art, or performance.",
    soul: "Seeks joy, self-expression, and creative outlets.",
    personality: "Charming, optimistic, and articulate.",
  },
  4: {
    life: "Practical, disciplined, and hardworking. Builder of solid foundations.",
    destiny: "Your work is to create stability and lasting structures.",
    soul: "Desires order, security, and tangible results.",
    personality: "Reliable, methodical, and grounded.",
  },
  5: {
    life: "Freedom-loving, adaptable, and adventurous. Change is your teacher.",
    destiny: "You are meant to experience life widely and share those lessons.",
    soul: "Craves variety, travel, and new experiences.",
    personality: "Dynamic, restless, and magnetic.",
  },
  6: {
    life: "Nurturing, responsible, and harmonious. Natural caregiver.",
    destiny: "Your role involves service, family, and creating beauty.",
    soul: "Wants to love, protect, and create a sense of home.",
    personality: "Warm, caring, and aesthetically aware.",
  },
  7: {
    life: "Analytical, introspective, and spiritual. Seeker of truth.",
    destiny: "You are here to understand life's deeper mysteries.",
    soul: "Longs for knowledge, solitude, and inner wisdom.",
    personality: "Thoughtful, reserved, and perceptive.",
  },
  8: {
    life: "Ambitious, powerful, and material-oriented. Master of the material world.",
    destiny: "Your path involves achievement, authority, and abundance.",
    soul: "Desires success, recognition, and financial security.",
    personality: "Authoritative, confident, and results-driven.",
  },
  9: {
    life: "Compassionate, humanitarian, and idealistic. Old soul energy.",
    destiny: "You are meant to serve the greater good and inspire others.",
    soul: "Yearns to heal, teach, and uplift humanity.",
    personality: "Generous, wise, and emotionally open.",
  },
  11: {
    life: "Intuitive, inspirational, and highly sensitive. Master number of illumination.",
    destiny: "You carry a higher frequency of insight and spiritual leadership.",
    soul: "Seeks to awaken and inspire through intuition.",
    personality: "Charismatic, idealistic, and magnetic.",
  },
  22: {
    life: "Master builder. Capable of turning big visions into reality.",
    destiny: "You are here to create large-scale, lasting impact.",
    soul: "Dreams of building something significant for the world.",
    personality: "Practical visionary with quiet power.",
  },
  33: {
    life: "Master teacher and healer. Highest form of compassionate service.",
    destiny: "Your path is to uplift humanity through love and wisdom.",
    soul: "Deep calling to heal and guide others.",
    personality: "Radiates warmth, patience, and spiritual depth.",
  },
};

export function calculateNumerology(fullName: string, dateOfBirth: string): NumerologyResult {
  // Life Path from date
  const digits = dateOfBirth.replace(/-/g, "").split("").map(Number);
  const lifePath = reduceToSingle(digits.reduce((a, b) => a + b, 0));

  // Destiny from full name
  const destiny = nameToNumber(fullName);

  // Soul Urge (vowels)
  const soulUrge = nameToNumber(fullName, true, false);

  // Personality (consonants)
  const personality = nameToNumber(fullName, false, true);

  // Birthday number
  const day = parseInt(dateOfBirth.split("-")[2], 10);
  const birthday = reduceToSingle(day);

  const interp = interpretations[lifePath] || interpretations[1];

  return {
    lifePath,
    destiny,
    soulUrge,
    personality,
    birthday,
    interpretations: {
      lifePath: interp.life,
      destiny: interp.destiny,
      soulUrge: interp.soul,
      personality: interp.personality,
    },
    luckyNumbers: [lifePath, destiny, soulUrge].filter((v, i, a) => a.indexOf(v) === i),
    favorableDays: ["Sunday", "Thursday", "Friday"],
  };
}
