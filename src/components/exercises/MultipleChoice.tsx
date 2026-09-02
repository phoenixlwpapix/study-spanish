import React, { useState } from 'react';
import type { MultipleChoiceExercise } from '../../types/curriculum';
import { AudioButton } from '../common/AudioButton';
import { CheckCircle2, XCircle } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { shuffleArray } from '../../utils/shuffle';

interface MultipleChoiceProps {
  exercise: MultipleChoiceExercise;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
  isSubmitted: boolean;
  disabled?: boolean;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  exercise,
  selectedOptionId,
  onSelectOption,
  isSubmitted,
  disabled = false,
}) => {
  // Randomize option positions on load and per-exercise change
  const [shuffledOptions] = useState(() => shuffleArray(exercise.options));

  const handleSelect = (optionId: string) => {
    if (disabled || isSubmitted) return;
    soundEffects.playClick();
    onSelectOption(optionId);
  };

  return (
    <div className="space-y-4">
      {/* Exercise Prompt */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            {exercise.prompt}
          </p>
          {exercise.audioPrompt && (
            <AudioButton text={exercise.audioPrompt} size="md" variant="primary" />
          )}
        </div>
      </div>

      {/* Options List (Randomized Positions) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {shuffledOptions.map((option, idx) => {
          const isSelected = selectedOptionId === option.id;
          const letter = String.fromCharCode(65 + idx); // A, B, C, D

          let cardStyle = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800 shadow-xs';
          let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

          if (isSelected && !isSubmitted) {
            cardStyle = 'border-indigo-500 bg-indigo-50/60 ring-2 ring-indigo-400/40 text-indigo-950 font-semibold shadow-sm';
            badgeStyle = 'bg-indigo-600 text-white border-indigo-600';
          } else if (isSubmitted) {
            if (option.isCorrect) {
              cardStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-400 text-emerald-950 font-bold';
              badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
            } else if (isSelected && !option.isCorrect) {
              cardStyle = 'border-rose-400 bg-rose-50/80 ring-2 ring-rose-400 text-rose-950 line-through';
              badgeStyle = 'bg-rose-600 text-white border-rose-600';
            } else {
              cardStyle = 'border-slate-200 bg-slate-50/50 opacity-60 text-slate-500';
            }
          }

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              disabled={disabled || isSubmitted}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-[color,background-color,border-color,transform] flex items-center justify-between gap-3 active:scale-[0.99] cursor-pointer disabled:cursor-default ${cardStyle}`}
            >
              <div className="flex items-center gap-3.5">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black border shrink-0 transition-colors ${badgeStyle}`}>
                  {letter}
                </span>
                <div>
                  <div className="text-base font-bold tracking-tight">{option.text}</div>
                  {isSubmitted && option.subtext && (
                    <div className={`text-xs mt-0.5 font-normal ${
                      option.isCorrect
                        ? 'text-emerald-800'
                        : isSelected
                          ? 'text-rose-800'
                          : 'text-slate-500'
                    }`}>
                      {option.subtext}
                    </div>
                  )}
                </div>
              </div>

              {isSubmitted && option.isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              {isSubmitted && isSelected && !option.isCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
