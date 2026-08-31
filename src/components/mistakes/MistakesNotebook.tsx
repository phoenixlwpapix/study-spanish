import React, { useEffect, useState } from 'react';
import { useProgress } from '../../context/useProgress';
import type { MistakeItem } from '../../types/progress';
import {
  AlertCircle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { AudioButton } from '../common/AudioButton';
import { ConfirmModal } from '../common/ConfirmModal';
import { soundEffects } from '../../utils/soundEffects';

interface MistakesNotebookProps {
  onGoToLesson: (lessonId: string) => void;
}

type ReviewFilter = 'all' | 'due' | 'upcoming' | 'mastered';
type PracticeFeedback = 'scheduled' | 'wrong' | 'mastered' | null;

const REQUIRED_CORRECT_REVIEWS = 3;
const reviewDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

function isAnswerCorrect(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUserAnswer = userAnswer.trim().toLocaleLowerCase();
  return correctAnswer
    .split(' / ')
    .some((answer) => answer.trim().toLocaleLowerCase() === normalizedUserAnswer);
}

function getReviewLabel(item: MistakeItem, now: number): string {
  if (item.reviewStatus === 'mastered') return 'Mastered';
  if (item.nextReviewAt === null || item.nextReviewAt <= now) return 'Due now';
  return `Next review ${reviewDateFormatter.format(item.nextReviewAt)}`;
}

export const MistakesNotebook: React.FC<MistakesNotebookProps> = ({ onGoToLesson }) => {
  const { progress, reviewMistake, removeMistake, clearAllMistakes } = useProgress();
  const [selectedFilter, setSelectedFilter] = useState<ReviewFilter>('all');
  const [practiceModeId, setPracticeModeId] = useState<string | null>(null);
  const [practiceInput, setPracticeInput] = useState('');
  const [practiceFeedback, setPracticeFeedback] = useState<PracticeFeedback>(null);
  const [reviewClock, setReviewClock] = useState(Date.now);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setReviewClock(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const now = reviewClock;
  const mistakes = progress.mistakes;
  const dueCount = mistakes.filter(
    (item) => item.reviewStatus === 'learning' && (item.nextReviewAt ?? 0) <= now,
  ).length;
  const upcomingCount = mistakes.filter(
    (item) => item.reviewStatus === 'learning' && (item.nextReviewAt ?? 0) > now,
  ).length;
  const masteredCount = mistakes.filter((item) => item.reviewStatus === 'mastered').length;

  const filteredMistakes = [...mistakes]
    .filter((item) => {
      if (selectedFilter === 'due') {
        return item.reviewStatus === 'learning' && (item.nextReviewAt ?? 0) <= now;
      }
      if (selectedFilter === 'upcoming') {
        return item.reviewStatus === 'learning' && (item.nextReviewAt ?? 0) > now;
      }
      if (selectedFilter === 'mastered') return item.reviewStatus === 'mastered';
      return true;
    })
    .sort((first, second) => {
      if (first.reviewStatus !== second.reviewStatus) {
        return first.reviewStatus === 'mastered' ? 1 : -1;
      }
      return (first.nextReviewAt ?? Number.MAX_SAFE_INTEGER)
        - (second.nextReviewAt ?? Number.MAX_SAFE_INTEGER);
    });

  const handleStartPractice = (mistake: MistakeItem) => {
    setPracticeModeId(mistake.id);
    setPracticeInput('');
    setPracticeFeedback(null);
  };

  const handleCheckPractice = (mistake: MistakeItem) => {
    if (!practiceInput.trim()) return;

    const isCorrect = isAnswerCorrect(practiceInput, mistake.correctAnswer);
    reviewMistake(mistake.id, isCorrect, practiceInput.trim());

    if (isCorrect) {
      soundEffects.playSuccess();
      const reachesMastery = mistake.consecutiveCorrect + 1 >= REQUIRED_CORRECT_REVIEWS;
      setPracticeFeedback(reachesMastery ? 'mastered' : 'scheduled');
    } else {
      soundEffects.playError();
      setPracticeFeedback('wrong');
    }
  };

  const finishPractice = () => {
    setPracticeModeId(null);
    setPracticeInput('');
    setPracticeFeedback(null);
  };

  const filters: Array<{ id: ReviewFilter; label: string; count: number }> = [
    { id: 'all', label: 'All', count: mistakes.length },
    { id: 'due', label: 'Due Now', count: dueCount },
    { id: 'upcoming', label: 'Upcoming', count: upcomingCount },
    { id: 'mastered', label: 'Mastered', count: masteredCount },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">
              <AlertCircle className="w-4 h-4" />
              <span>Spaced Review</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 m-0 text-left">
              Mistakes Notebook (Cuaderno de Errores)
            </h1>
            <p className="text-sm text-slate-600 font-medium mt-1">
              Answer correctly 3 times in a row to master a mistake. Reviews return after 1 day, then 3 days.
            </p>
          </div>

          {mistakes.length > 0 && (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="self-start sm:self-center px-4 py-2 text-xs font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
            >
              Clear All
            </button>
          )}
        </div>

        {mistakes.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
            <div className="rounded-2xl bg-rose-50 p-3 text-center">
              <span className="block text-xl font-black text-rose-700">{dueCount}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">Due Now</span>
            </div>
            <div className="rounded-2xl bg-amber-50 p-3 text-center">
              <span className="block text-xl font-black text-amber-700">{upcomingCount}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">Upcoming</span>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-3 text-center">
              <span className="block text-xl font-black text-emerald-700">{masteredCount}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Mastered</span>
            </div>
          </div>
        )}
      </div>

      {mistakes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900">No Mistakes Saved!</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Missed quiz questions will appear here automatically and enter the spaced-review queue.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === filter.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          {filteredMistakes.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 text-slate-500 text-sm font-medium">
              No questions in this review group.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMistakes.map((item) => {
                const isPracticing = practiceModeId === item.id;
                const isMastered = item.reviewStatus === 'mastered';
                const isDue = !isMastered && (item.nextReviewAt ?? 0) <= now;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-3xl p-6 border-2 shadow-xs space-y-4 ${
                      isMastered ? 'border-emerald-200' : 'border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                            {item.lessonId}
                          </span>
                          <span className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md ${
                            isMastered
                              ? 'bg-emerald-100 text-emerald-700'
                              : (item.nextReviewAt ?? 0) <= now
                                ? 'bg-rose-100 text-rose-700'
                                : 'bg-amber-100 text-amber-700'
                          }`}
                          >
                            {isMastered ? <CheckCircle2 className="w-3 h-3" /> : <CalendarClock className="w-3 h-3" />}
                            {getReviewLabel(item, now)}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-slate-900">{item.prompt}</p>
                      </div>

                      <button
                        onClick={() => setPendingDeleteId(item.id)}
                        className="text-slate-300 hover:text-rose-500 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                        title="Delete from notebook"
                        aria-label="Delete from notebook"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="font-bold text-rose-600 uppercase tracking-wider text-[11px] block">Previous Wrong Answer</span>
                        <span className="text-slate-700 font-semibold line-through">{item.userAnswer || '(none)'}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-600 uppercase tracking-wider text-[11px] block">Correct Answer</span>
                          <AudioButton text={item.correctAnswer} size="sm" />
                        </div>
                        <span className="text-slate-900 font-black">{item.correctAnswer}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{item.explanation}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {item.consecutiveCorrect}/{REQUIRED_CORRECT_REVIEWS} consecutive correct
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="w-3.5 h-3.5" />
                        {item.reviewedCount} review attempts
                      </span>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                      {isPracticing ? (
                        <div className="flex-1 space-y-2">
                          {practiceFeedback === 'scheduled' || practiceFeedback === 'mastered' ? (
                            <div className="flex flex-wrap items-center gap-3" aria-live="polite">
                              <span className="text-xs font-bold text-emerald-700">
                                {practiceFeedback === 'mastered'
                                  ? '¡Dominado! Mastered and +15 XP earned.'
                                  : '¡Correcto! The next review has been scheduled.'}
                              </span>
                              <button
                                onClick={finishPractice}
                                className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold cursor-pointer"
                              >
                                Finish Review
                              </button>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`review-${item.exerciseId}`}
                                  value={practiceInput}
                                  onChange={(event) => setPracticeInput(event.target.value)}
                                  placeholder="Type the correct answer…"
                                  aria-label="Practice answer"
                                  autoComplete="off"
                                  className="flex-1 px-3 py-2 text-sm font-semibold rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                                <button
                                  onClick={() => handleCheckPractice(item)}
                                  disabled={!practiceInput.trim()}
                                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold cursor-pointer disabled:cursor-not-allowed"
                                >
                                  Verify
                                </button>
                              </div>
                              {practiceFeedback === 'wrong' && (
                                <p className="text-xs font-bold text-rose-600" aria-live="polite">
                                  Not yet. Your streak reset to 0; review the explanation and try again.
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      ) : (
                        <div>
                          {isMastered ? (
                            <span className="text-xs font-bold text-emerald-700">Mastered after repeated recall</span>
                          ) : !isDue ? (
                            <span className="text-xs font-bold text-amber-700">
                              Review unlocks {item.nextReviewAt ? reviewDateFormatter.format(item.nextReviewAt) : 'soon'}
                            </span>
                          ) : (
                            <button
                              onClick={() => handleStartPractice(item)}
                              className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold cursor-pointer"
                            >
                              Practice This Question
                            </button>
                          )}
                        </div>
                      )}

                      <button
                        onClick={() => onGoToLesson(item.lessonId)}
                        className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1 self-end sm:self-auto cursor-pointer"
                      >
                        <span>Study Full Lesson</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      <ConfirmModal
        isOpen={showClearConfirm}
        title="Clear the Entire Mistakes Notebook?"
        message="This permanently removes due, upcoming, and mastered review items. This action cannot be undone."
        confirmText="Clear Notebook"
        cancelText="Keep Reviews"
        onConfirm={() => {
          clearAllMistakes();
          setShowClearConfirm(false);
        }}
        onCancel={() => setShowClearConfirm(false)}
      />

      <ConfirmModal
        isOpen={pendingDeleteId !== null}
        title="Delete This Review Item?"
        message="This removes the question and its complete review history from your notebook."
        confirmText="Delete Review Item"
        cancelText="Keep It"
        onConfirm={() => {
          if (pendingDeleteId) removeMistake(pendingDeleteId);
          setPendingDeleteId(null);
        }}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
};
