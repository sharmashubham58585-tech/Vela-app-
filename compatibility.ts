export interface CompatibilityResult {
  totalScore: number;
  maxScore: 36;
  percentage: number;
  gunas: {
    name: string;
    score: number;
    max: number;
    meaning: string;
  }[];
  manglik: {
    boy: boolean;
    girl: boolean;
    status: string;
  };
  overall: string;
  strengths: string[];
  challenges: string[];
}

const GUNA_NAMES = [
  { name: "Varna", max: 1, meaning: "Spiritual compatibility" },
  { name: "Vashya", max: 2, meaning: "Mutual attraction & control" },
  { name: "Tara", max: 3, meaning: "Health & well-being" },
  { name: "Yoni", max: 4, meaning: "Physical & sexual compatibility" },
  { name: "Graha Maitri", max: 5, meaning: "Mental compatibility" },
  { name: "Gana", max: 6, meaning: "Temperament" },
  { name: "Bhakoot", max: 7, meaning: "Love & emotional bond" },
  { name: "Nadi", max: 8, meaning: "Health & progeny" },
];

function seeded(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function calculateCompatibility(
  boyName: string,
  boyDate: string,
  girlName: string,
  girlDate: string
): CompatibilityResult {
  const seed =
    (boyName + girlName + boyDate + girlDate)
      .split("")
      .reduce((a, c) => a + c.charCodeAt(0), 0);

  const gunas = GUNA_NAMES.map((g, i) => {
    const raw = seeded(seed + i * 13);
    // Bias toward realistic scores (most couples get mid-high)
    const score = Math.min(g.max, Math.max(0, Math.round(raw * (g.max + 1.2))));
    return {
      name: g.name,
      score,
      max: g.max,
      meaning: g.meaning,
    };
  });

  const totalScore = gunas.reduce((a, g) => a + g.score, 0);
  const percentage = Math.round((totalScore / 36) * 100);

  const boyManglik = seeded(seed + 100) > 0.7;
  const girlManglik = seeded(seed + 101) > 0.7;

  let manglikStatus = "Neither is Manglik. No special concern.";
  if (boyManglik && girlManglik) {
    manglikStatus = "Both are Manglik. This often cancels the dosha.";
  } else if (boyManglik || girlManglik) {
    manglikStatus = "One partner shows Manglik indication. Traditional remedies or further chart analysis recommended.";
  }

  let overall = "";
  if (totalScore >= 28) {
    overall = "Excellent match. Strong foundation for a harmonious relationship.";
  } else if (totalScore >= 18) {
    overall = "Good compatibility. With mutual understanding the relationship can flourish.";
  } else if (totalScore >= 12) {
    overall = "Average match. Effort and communication will be important.";
  } else {
    overall = "Challenging score. Deeper chart analysis and conscious effort would be needed.";
  }

  const strengths: string[] = [];
  const challenges: string[] = [];

  gunas.forEach((g) => {
    if (g.score >= g.max * 0.7) strengths.push(`${g.name} (${g.meaning})`);
    if (g.score <= g.max * 0.3) challenges.push(`${g.name} (${g.meaning})`);
  });

  if (strengths.length === 0) strengths.push("Shared values can still create stability");
  if (challenges.length === 0) challenges.push("No major red flags in the guna matching");

  return {
    totalScore,
    maxScore: 36,
    percentage,
    gunas,
    manglik: {
      boy: boyManglik,
      girl: girlManglik,
      status: manglikStatus,
    },
    overall,
    strengths,
    challenges,
  };
}
