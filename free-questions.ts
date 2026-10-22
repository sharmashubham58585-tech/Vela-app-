const STORAGE_KEY = "vela_free_questions";

export interface FreeQuestionsState {
  used: number;
  remaining: number;
  max: number;
}

const MAX_FREE = 3;

export function getFreeQuestions(): FreeQuestionsState {
  if (typeof window === "undefined") {
    return { used: 0, remaining: MAX_FREE, max: MAX_FREE };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { used: 0, remaining: MAX_FREE, max: MAX_FREE };
    }
    const data = JSON.parse(raw) as { used: number };
    const used = Math.min(Math.max(0, data.used || 0), MAX_FREE);
    return {
      used,
      remaining: MAX_FREE - used,
      max: MAX_FREE,
    };
  } catch {
    return { used: 0, remaining: MAX_FREE, max: MAX_FREE };
  }
}

export function useOneQuestion(): FreeQuestionsState {
  const current = getFreeQuestions();
  if (current.remaining <= 0) return current;

  const next = {
    used: current.used + 1,
    remaining: current.remaining - 1,
    max: MAX_FREE,
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ used: next.used }));
  }

  return next;
}

export function resetFreeQuestions() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}
