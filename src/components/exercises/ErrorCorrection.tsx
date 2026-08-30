import React, { useState, useEffect } from 'react';
import type { ErrorIdentificationExercise } from '../../types/curriculum';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { shuffleArray } from '../../utils/shuffle';

interface ErrorCorrectionProps {
  exercise: ErrorIdentificationExercise;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  isSubmitted: boolean;
  disabled?: boolean;
}

export const ErrorCorrection: React.FC<ErrorCorrectionProps> = ({
  exercise,
  selectedOption,
  onSelectOption,
  isSubmitted,
  disabled = false,
}) => {
  // Randomize option order
  const [shuffledOptions, setShuffledOptions] = useState(() => 
    shuffleArray(exercise.options)
  );

  useEffect(() => {
    setShuffledOptions(shuffleArray(exercise.options));
  }, [exercise.id]);

  const handleSelect = (opt: string) => {
    if (disabled || isSubmitted) return;
    soundEffects.playClick();
    onSelectOption(opt);
  };

  // Render the incorrect sentence with the erroneous word highlighted
  const parts = exercise.incorrectSentence.split(exercise.errorWord);

  return (
    <div className="space-y-5">
      {/* Exercise Prompt */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
        <div className="flex items-center gap-2 text-amber-700 mb-2 font-bold text-xs uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Spot the Error & Fix It</span>
        </div>
        <p className="text-lg font-bold text-slate-900 leading-relaxed">
          {exercise.prompt}
        </p>
      </div>

      {/* Sentence with Highlighted Error */}
      <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl text-center shadow-xs">
        <span className="text-xl sm:text-2xl font-bold text-slate-800">
          {parts[0]}
          <span className="inline-block px-2 py-0.5 mx-1 rounded-lg bg-rose-100 text-rose-800 border-2 border-rose-300 font-extrabold underline decoration-rose-500 decoration-wavy">
            {exercise.errorWord}
          </span>
          {parts[1]}
        </span>
      </div>

      {/* Replacement Options (Randomized order) */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block px-1">
          Choose the correct replacement for "{exercise.errorWord}":
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {shuffledOptions.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            const isCorrect = opt === exercise.correctOption;

            let cardStyle = 'border-slate-200 bg-white hover:border-indigo-300 text-slate-800 shadow-xs';
            if (isSelected && !isSubmitted) {
              cardStyle = 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-400 text-indigo-950 font-bold';
            } else if (isSubmitted) {
              if (isCorrect) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400 text-emerald-950 font-bold';
              } else if (isSelected && !isCorrect) {
                cardStyle = 'border-rose-400 bg-rose-50 text-rose-950 line-through';
              } else {
                cardStyle = 'border-slate-200 bg-slate-50 opacity-60 text-slate-500';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(opt)}
                disabled={disabled || isSubmitted}
                className={`p-4 rounded-xl border-2 text-left font-bold text-base transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${cardStyle}`}
              >
                <span>{opt}</span>
                {isSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
