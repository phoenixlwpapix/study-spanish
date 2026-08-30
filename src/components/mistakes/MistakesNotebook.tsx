import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import type { MistakeItem } from '../../types/progress';
import { 
  AlertCircle, 
  Sparkles, 
  Trash2, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { AudioButton } from '../common/AudioButton';
import { soundEffects } from '../../utils/soundEffects';

interface MistakesNotebookProps {
  onGoToLesson: (lessonId: string) => void;
}

export const MistakesNotebook: React.FC<MistakesNotebookProps> = ({ onGoToLesson }) => {
  const { progress, removeMistake, clearAllMistakes } = useProgress();
  const [practiceModeId, setPracticeModeId] = useState<string | null>(null);
  const [practiceInput, setPracticeInput] = useState('');
  const [practiceFeedback, setPracticeFeedback] = useState<'correct' | 'wrong' | null>(null);

  const mistakes = progress.mistakes;

  const handleStartPractice = (mistake: MistakeItem) => {
    setPracticeModeId(mistake.id);
    setPracticeInput('');
    setPracticeFeedback(null);
  };

  const handleCheckPractice = (mistake: MistakeItem) => {
    const isRight = practiceInput.trim().toLowerCase() === mistake.correctAnswer.trim().toLowerCase();
    if (isRight) {
      soundEffects.playSuccess();
      setPracticeFeedback('correct');
      setTimeout(() => {
        removeMistake(mistake.id);
        setPracticeModeId(null);
      }, 1200);
    } else {
      soundEffects.playError();
      setPracticeFeedback('wrong');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">
            <AlertCircle className="w-4 h-4" />
            <span>Smart Review</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 m-0 text-left">
            Mistakes Notebook (Cuaderno de Errores)
          </h2>
          <p className="text-sm text-slate-600 font-medium mt-1">
            Questions you missed during quizzes are automatically saved here so you can review and master them.
          </p>
        </div>

        {mistakes.length > 0 && (
          <button
            onClick={clearAllMistakes}
            className="self-start sm:self-center px-4 py-2 text-xs font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Empty State */}
      {mistakes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900">
              No Mistakes Saved!
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Your mistakes notebook is completely clear. Complete lessons and quizzes to practice, and any missed questions will appear here for targeted review.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-500">
            <span>{mistakes.length} Questions to Review</span>
            <span>Clearing a mistake earns +15 XP</span>
          </div>

          <div className="space-y-4">
            {mistakes.map((item) => {
              const isPracticing = practiceModeId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-all"
                >
                  {/* Mistake Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                        {item.lessonId}
                      </span>
                      <p className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                        {item.prompt}
                      </p>
                    </div>

                    <button
                      onClick={() => removeMistake(item.id)}
                      className="text-slate-300 hover:text-rose-500 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Dismiss mistake"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Comparison: What you answered vs Correct answer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="font-bold text-rose-600 uppercase tracking-wider text-[11px] block">
                        Your Previous Answer:
                      </span>
                      <span className="text-slate-700 font-semibold line-through">
                        {item.userAnswer || '(none)'}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-600 uppercase tracking-wider text-[11px] block">
                          Correct Answer:
                        </span>
                        <AudioButton text={item.correctAnswer} size="sm" />
                      </div>
                      <span className="text-slate-900 font-black">
                        {item.correctAnswer}
                      </span>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="flex items-start gap-2 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">
                      {item.explanation}
                    </span>
                  </div>

                  {/* Interactive Retest / Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                    {isPracticing ? (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="text"
                          value={practiceInput}
                          onChange={(e) => setPracticeInput(e.target.value)}
                          placeholder="Type correct answer..."
                          className="flex-1 px-3 py-2 text-sm font-semibold rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                          onClick={() => handleCheckPractice(item)}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all cursor-pointer"
                        >
                          Verify
                        </button>
                        {practiceFeedback === 'correct' && (
                          <span className="text-xs font-bold text-emerald-600 animate-bounce">
                            ¡Correcto! Cleared!
                          </span>
                        )}
                        {practiceFeedback === 'wrong' && (
                          <span className="text-xs font-bold text-rose-600">
                            Try again
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartPractice(item)}
                          className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all cursor-pointer"
                        >
                          Practice This Question
                        </button>
                        <button
                          onClick={() => removeMistake(item.id)}
                          className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-all cursor-pointer"
                        >
                          Mark Mastered
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => onGoToLesson(item.lessonId)}
                      className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors self-end sm:self-auto cursor-pointer"
                    >
                      <span>Study Full Lesson</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
