export type PlanetName =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "Rahu"
  | "Ketu";

export type SignName =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export interface PlanetPosition {
  name: PlanetName;
  longitude: number;
  sign: SignName;
  signDegree: number;
  nakshatra: string;
  pada: number;
  house: number;
  isRetrograde: boolean;
  isCombust?: boolean;
}

export interface BirthData {
  name?: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  place: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface ChartData {
  birth: BirthData;
  lagna: {
    sign: SignName;
    degree: number;
  };
  planets: PlanetPosition[];
  houses: { number: number; sign: SignName; degree: number }[];
  currentDasha?: {
    mahadasha: PlanetName;
    antardasha: PlanetName;
    startDate: string;
    endDate: string;
  };
}

export interface FreeQuestionsState {
  used: number;
  remaining: number;
  max: 3;
}
