export interface MistakeItem {
  id: string;
  exerciseId: string;
  lessonId: string;
  unitId: number;
  prompt: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  timestamp: number;
  reviewedCount: number;
}

export interface UserProgressState {
  completedLessonIds: string[];
  lessonScores: Record<string, { score: number; maxScore: number; percentage: number; timestamp: number }>;
  unitExamScores: Record<number, { score: number; maxScore: number; percentage: number; passed: boolean; timestamp: number }>;
  xp: number;
  streakDays: number;
  lastActiveDate: string | null; // YYYY-MM-DD
  activeLessonId: string | null;
  mistakes: MistakeItem[];
  bookmarkedVocabIds: string[];
  settings: {
    soundEffects: boolean;
    speechSpeed: number; // 0.8 to 1.0
    autoPlayAudio: boolean;
  };
}
