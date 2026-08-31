import React, { useState, useEffect, useCallback } from 'react';
import type { UserProgressState, MistakeItem } from '../types/progress';
import { loadProgress, saveProgress, resetAllProgress } from '../utils/storage';
import { soundEffects } from '../utils/soundEffects';
import { triggerConfetti } from '../utils/confetti';
import { ProgressContext } from './progress-context';

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const REQUIRED_CORRECT_REVIEWS = 3;
const REVIEW_INTERVALS_MS = [DAY_IN_MS, 3 * DAY_IN_MS] as const;

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgressState>(() => loadProgress());

  // Save to localStorage whenever progress updates
  useEffect(() => {
    saveProgress(progress);
    soundEffects.setMuted(!progress.settings.soundEffects);
  }, [progress]);

  const isLessonCompleted = useCallback((lessonId: string) => {
    return progress.completedLessonIds.includes(lessonId);
  }, [progress.completedLessonIds]);

  const getLessonScore = useCallback((lessonId: string) => {
    const record = progress.lessonScores[lessonId];
    return record ? record.percentage : null;
  }, [progress.lessonScores]);

  const completeLesson = useCallback((lessonId: string, rawScore: number, maxScore: number) => {
    const validMax = Math.max(1, maxScore);
    const safeScore = Math.min(validMax, Math.max(0, rawScore));
    const percentage = Math.min(100, Math.max(0, Math.round((safeScore / validMax) * 100)));
    const today = new Date().toISOString().split('T')[0];
    const earnedXp = Math.max(20, Math.round((percentage / 100) * 80) + 20);

    setProgress(prev => {
      const alreadyCompleted = prev.completedLessonIds.includes(lessonId);
      const newCompleted = alreadyCompleted ? prev.completedLessonIds : [...prev.completedLessonIds, lessonId];
      
      // Calculate streak
      let streak = prev.streakDays;
      if (prev.lastActiveDate !== today) {
        streak += 1;
      }

      return {
        ...prev,
        completedLessonIds: newCompleted,
        lessonScores: {
          ...prev.lessonScores,
          [lessonId]: {
            score: safeScore,
            maxScore: validMax,
            percentage,
            timestamp: Date.now()
          }
        },
        xp: prev.xp + earnedXp,
        streakDays: streak,
        lastActiveDate: today
      };
    });

    if (percentage >= 70) {
      triggerConfetti();
      soundEffects.playVictory();
    }
  }, []);

  const recordMistake = useCallback((mistake: Omit<MistakeItem, 'id' | 'timestamp' | 'reviewedCount' | 'consecutiveCorrect' | 'reviewStatus' | 'nextReviewAt' | 'lastReviewedAt'>) => {
    setProgress(prev => {
      const now = Date.now();
      // Don't duplicate exact same exercise error if already logged
      const existingIdx = prev.mistakes.findIndex(m => m.exerciseId === mistake.exerciseId);
      if (existingIdx >= 0) {
        const updated = [...prev.mistakes];
        updated[existingIdx] = {
          ...updated[existingIdx],
          userAnswer: mistake.userAnswer,
          timestamp: now,
          consecutiveCorrect: 0,
          reviewStatus: 'learning',
          nextReviewAt: now,
        };
        return { ...prev, mistakes: updated };
      }

      const newMistake: MistakeItem = {
        ...mistake,
        id: `mistake-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        timestamp: now,
        reviewedCount: 0,
        consecutiveCorrect: 0,
        reviewStatus: 'learning',
        nextReviewAt: now,
        lastReviewedAt: null,
      };

      return {
        ...prev,
        mistakes: [newMistake, ...prev.mistakes]
      };
    });
  }, []);

  const reviewMistake = useCallback((mistakeId: string, isCorrect: boolean, userAnswer: string) => {
    setProgress(prev => {
      const now = Date.now();
      let earnedMasteryXp = false;

      const mistakes = prev.mistakes.map(item => {
        if (item.id !== mistakeId || item.reviewStatus === 'mastered') return item;

        if (!isCorrect) {
          return {
            ...item,
            userAnswer,
            reviewedCount: item.reviewedCount + 1,
            consecutiveCorrect: 0,
            nextReviewAt: now,
            lastReviewedAt: now,
          };
        }

        const consecutiveCorrect = Math.min(
          REQUIRED_CORRECT_REVIEWS,
          item.consecutiveCorrect + 1,
        );
        const isMastered = consecutiveCorrect >= REQUIRED_CORRECT_REVIEWS;
        if (isMastered) earnedMasteryXp = true;

        return {
          ...item,
          reviewedCount: item.reviewedCount + 1,
          consecutiveCorrect,
          reviewStatus: isMastered ? 'mastered' as const : 'learning' as const,
          nextReviewAt: isMastered
            ? null
            : now + REVIEW_INTERVALS_MS[consecutiveCorrect - 1],
          lastReviewedAt: now,
        };
      });

      return {
        ...prev,
        mistakes,
        xp: prev.xp + (earnedMasteryXp ? 15 : 0),
      };
    });
  }, []);

  const removeMistake = useCallback((mistakeId: string) => {
    setProgress(prev => ({
      ...prev,
      mistakes: prev.mistakes.filter(m => m.id !== mistakeId),
    }));
    soundEffects.playClick();
  }, []);

  const clearAllMistakes = useCallback(() => {
    setProgress(prev => ({
      ...prev,
      mistakes: []
    }));
  }, []);

  const recordUnitExam = useCallback((unitId: number, rawScore: number, maxScore: number, passed: boolean) => {
    const validMax = Math.max(1, maxScore);
    const safeScore = Math.min(validMax, Math.max(0, rawScore));
    const percentage = Math.min(100, Math.max(0, Math.round((safeScore / validMax) * 100)));
    const earnedXp = passed ? 150 : 50;

    setProgress(prev => ({
      ...prev,
      unitExamScores: {
        ...prev.unitExamScores,
        [unitId]: {
          score: safeScore,
          maxScore: validMax,
          percentage,
          passed,
          timestamp: Date.now()
        }
      },
      xp: prev.xp + earnedXp
    }));

    if (passed) {
      triggerConfetti();
      soundEffects.playVictory();
    }
  }, []);

  const toggleVocabBookmark = useCallback((vocabId: string) => {
    setProgress(prev => {
      const exists = prev.bookmarkedVocabIds.includes(vocabId);
      return {
        ...prev,
        bookmarkedVocabIds: exists
          ? prev.bookmarkedVocabIds.filter(id => id !== vocabId)
          : [...prev.bookmarkedVocabIds, vocabId]
      };
    });
    soundEffects.playClick();
  }, []);

  const isVocabBookmarked = useCallback((vocabId: string) => {
    return progress.bookmarkedVocabIds.includes(vocabId);
  }, [progress.bookmarkedVocabIds]);

  const updateSettings = useCallback((newSettings: Partial<UserProgressState['settings']>) => {
    setProgress(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...newSettings
      }
    }));
  }, []);

  const resetProgressData = useCallback(() => {
    const reset = resetAllProgress();
    setProgress(reset);
    soundEffects.playClick();
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLessonCompleted,
        getLessonScore,
        completeLesson,
        recordMistake,
        reviewMistake,
        removeMistake,
        clearAllMistakes,
        recordUnitExam,
        toggleVocabBookmark,
        isVocabBookmarked,
        updateSettings,
        resetProgressData
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
