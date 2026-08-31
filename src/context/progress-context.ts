import { createContext } from 'react';
import type { MistakeItem, UserProgressState } from '../types/progress';

export interface ProgressContextValue {
  progress: UserProgressState;
  isLessonCompleted: (lessonId: string) => boolean;
  getLessonScore: (lessonId: string) => number | null;
  completeLesson: (lessonId: string, score: number, maxScore: number) => void;
  recordMistake: (mistake: Omit<MistakeItem, 'id' | 'timestamp' | 'reviewedCount' | 'consecutiveCorrect' | 'reviewStatus' | 'nextReviewAt' | 'lastReviewedAt'>) => void;
  reviewMistake: (mistakeId: string, isCorrect: boolean, userAnswer: string) => void;
  removeMistake: (mistakeId: string) => void;
  clearAllMistakes: () => void;
  recordUnitExam: (unitId: number, score: number, maxScore: number, passed: boolean) => void;
  toggleVocabBookmark: (vocabId: string) => void;
  isVocabBookmarked: (vocabId: string) => boolean;
  updateSettings: (settings: Partial<UserProgressState['settings']>) => void;
  resetProgressData: () => void;
}

export const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);
