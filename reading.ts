export type LineStrength = "weak" | "moderate" | "strong" | "broken" | "chained";
export type HandShape = "earth" | "air" | "water" | "fire";

export interface PalmInput {
  lifeLine: LineStrength;
  heartLine: LineStrength;
  headLine: LineStrength;
  fateLine: LineStrength | "absent";
  handShape: HandShape;
  mounts: {
    jupiter: "flat" | "developed" | "overdeveloped";
    saturn: "flat" | "developed" | "overdeveloped";
    apollo: "flat" | "developed" | "overdeveloped";
    mercury: "flat" | "developed" | "overdeveloped";
    venus: "flat" | "developed" | "overdeveloped";
  };
}

export interface PalmReading {
  summary: string;
  lifeLine: string;
  heartLine: string;
  headLine: string;
  fateLine: string;
  handShape: string;
  mounts: string;
  overall: string;
}

const lineMeanings: Record<string, Record<string, string>> = {
  life: {
    strong: "Robust vitality and a steady life force. Good recovery ability.",
    moderate: "Balanced energy levels. Life moves at a steady, manageable pace.",
    weak: "May need to consciously protect energy and health routines.",
    broken: "Possible significant life changes or periods of disruption.",
    chained: "Emotional or physical sensitivity; periods of fluctuating vitality.",
  },
  heart: {
    strong: "Deep capacity for love and emotional expression. Loyal nature.",
    moderate: "Balanced emotional life. Able to give and receive affection steadily.",
    weak: "May keep feelings guarded. Emotional expression can feel effortful.",
    broken: "Past emotional upheavals or significant relationship turning points.",
    chained: "Highly sensitive heart; emotions can feel complex or intense.",
  },
  head: {
    strong: "Clear thinking, strong focus, and good mental stamina.",
    moderate: "Practical intelligence and adaptable thinking.",
    weak: "Mind may wander; benefits from structured thinking habits.",
    broken: "Possible shifts in worldview or major learning periods.",
    chained: "Active, sometimes restless mind with many simultaneous thoughts.",
  },
  fate: {
    strong: "Clear sense of direction and purpose. Career path feels guided.",
    moderate: "Steady progress with occasional course corrections.",
    weak: "Path may feel less defined; more freedom to shape your own way.",
    broken: "Major turning points or changes in life direction.",
    chained: "Complex relationship with destiny and external circumstances.",
    absent: "Strong free will. Life is largely self-directed rather than fated.",
  },
};

const shapeMeanings: Record<HandShape, string> = {
  earth: "Practical, grounded, and reliable. Values stability and tangible results.",
  air: "Intellectual, communicative, and curious. Thrives on ideas and social exchange.",
  water: "Intuitive, emotional, and creative. Deeply sensitive to atmosphere and people.",
  fire: "Energetic, enthusiastic, and action-oriented. Natural initiator.",
};

export function generatePalmReading(input: PalmInput): PalmReading {
  const life = lineMeanings.life[input.lifeLine];
  const heart = lineMeanings.heart[input.heartLine];
  const head = lineMeanings.head[input.headLine];
  const fate = lineMeanings.fate[input.fateLine];
  const shape = shapeMeanings[input.handShape];

  const developedMounts = Object.entries(input.mounts)
    .filter(([, v]) => v === "developed" || v === "overdeveloped")
    .map(([k]) => k);

  let mountsText = "Mounts appear balanced overall.";
  if (developedMounts.length > 0) {
    mountsText = `Developed mounts of ${developedMounts.join(", ")} suggest emphasis on those planetary qualities.`;
  }

  const summary = `Your hand shows a ${input.handShape} quality with a ${input.lifeLine} life line and ${input.heartLine} heart line. The overall impression is one of thoughtful energy rather than extremes.`;

  const overall = `Taken together, the lines and shape point toward a life that values both feeling and structure. There is capacity for steady growth when energy is directed with clear intention. This reading is observational and best used as a mirror for self-reflection.`;

  return {
    summary,
    lifeLine: life,
    heartLine: heart,
    headLine: head,
    fateLine: fate,
    handShape: shape,
    mounts: mountsText,
    overall,
  };
}
