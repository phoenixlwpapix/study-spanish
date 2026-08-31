import type { MistakeItem, UserProgressState } from '../types/progress';

const STORAGE_KEY = 'study_spanish_progress_v1';

const defaultState: UserProgressState = {
  completedLessonIds: [],
  lessonScores: {},
  unitExamScores: {},
  xp: 0,
  streakDays: 1,
  lastActiveDate: null,
  activeLessonId: null,
  mistakes: [],
  bookmarkedVocabIds: [],
  settings: {
    soundEffects: true,
    speechSpeed: 0.9,
    autoPlayAudio: true,
  },
};

export function loadProgress(): UserProgressState {
  if (typeof window === 'undefined') return defaultState;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);

    // Calculate daily streak
    const today = new Date().toISOString().split('T')[0];
    let streak = parsed.streakDays || 1;

    if (parsed.lastActiveDate) {
      const lastDate = new Date(parsed.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = currentDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day
        // Keep streak or increment on first action
      } else if (diffDays > 1) {
        // Streak broken
        streak = 1;
      }
    }

    // Sanitize and clamp existing lessonScores
    const sanitizedLessonScores: typeof defaultState.lessonScores = {};
    if (parsed.lessonScores) {
      for (const [key, item] of Object.entries(parsed.lessonScores as typeof defaultState.lessonScores)) {
        if (item) {
          const maxScore = item.maxScore || 1;
          const score = Math.min(maxScore, Math.max(0, item.score));
          const percentage = Math.min(100, Math.max(0, Math.round((score / maxScore) * 100)));
          sanitizedLessonScores[key] = {
            ...item,
            score,
            percentage
          };
        }
      }
    }

    const now = Date.now();
    const sanitizedMistakes = Array.isArray(parsed.mistakes)
      ? parsed.mistakes.map((item: MistakeItem) => {
          const reviewStatus = item.reviewStatus === 'mastered' ? 'mastered' : 'learning';
          return {
            ...item,
            reviewedCount: Number.isFinite(item.reviewedCount) ? item.reviewedCount : 0,
            consecutiveCorrect: Number.isFinite(item.consecutiveCorrect) ? item.consecutiveCorrect : 0,
            reviewStatus,
            nextReviewAt: reviewStatus === 'mastered'
              ? null
              : typeof item.nextReviewAt === 'number'
                ? item.nextReviewAt
                : item.timestamp || now,
            lastReviewedAt: typeof item.lastReviewedAt === 'number' ? item.lastReviewedAt : null,
          };
        })
      : [];

    return {
      ...defaultState,
      ...parsed,
      lessonScores: sanitizedLessonScores,
      mistakes: sanitizedMistakes,
      streakDays: streak,
      settings: {
        ...defaultState.settings,
        ...(parsed.settings || {}),
      },
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage', err);
    return defaultState;
  }
}

export function saveProgress(state: UserProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save progress to localStorage', err);
  }
}

export function resetAllProgress(): UserProgressState {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return { ...defaultState, lastActiveDate: new Date().toISOString().split('T')[0] };
}
