import React, { useRef, useState, useEffect } from 'react';
import type { FillInBlankExercise } from '../../types/curriculum';
import { AccentKeyboard } from '../common/AccentKeyboard';
import { AudioButton } from '../common/AudioButton';
import { soundEffects } from '../../utils/soundEffects';
import { shuffleArray } from '../../utils/shuffle';

interface FillInBlankProps {
  exercise: FillInBlankExercise;
  value: string;
  onChange: (val: string) => void;
  isSubmitted: boolean;
  disabled?: boolean;
}

export const FillInBlank: React.FC<FillInBlankProps> = ({
  exercise,
  value,
  onChange,
  isSubmitted,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Randomize word bank tokens order
  const [shuffledWordBank, setShuffledWordBank] = useState(() => 
    exercise.wordBank ? shuffleArray(exercise.wordBank) : []
  );

  useEffect(() => {
    if (exercise.wordBank) {
      setShuffledWordBank(shuffleArray(exercise.wordBank));
    } else {
      setShuffledWordBank([]);
    }
  }, [exercise.id, exercise.wordBank]);

  const handleInsertAccent = (char: string) => {
    if (disabled || isSubmitted) return;
    const newValue = value + char;
    onChange(newValue);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleWordBankSelect = (word: string) => {
    if (disabled || isSubmitted) return;
    soundEffects.playClick();
    onChange(word);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const isCorrect = exercise.correctAnswers.some(
    ans => ans.trim().toLowerCase() === value.trim().toLowerCase()
  );

  return (
    <div className="space-y-5">
      {/* Exercise Prompt */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
        <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
          {exercise.prompt}
        </p>
        {exercise.hint && (
          <p className="text-xs font-medium text-amber-700 bg-amber-50/80 border border-amber-200/60 px-3 py-1.5 rounded-lg mt-3 inline-block">
            💡 Hint: {exercise.hint}
          </p>
        )}
      </div>

      {/* Sentence Slot with Input */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl font-medium text-slate-800">
        {exercise.sentenceBefore && <span>{exercise.sentenceBefore}</span>}
        
        <div className="relative inline-block my-1">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled || isSubmitted}
            placeholder="type answer..."
            className={`w-40 sm:w-48 text-center font-bold px-3 py-2 text-lg rounded-xl border-2 transition-all outline-none ${
              isSubmitted
                ? isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-300'
                  : 'border-rose-400 bg-rose-50 text-rose-900 ring-2 ring-rose-300'
                : 'border-indigo-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 bg-indigo-50/30 text-indigo-950'
            }`}
          />
        </div>

        {exercise.sentenceAfter && <span>{exercise.sentenceAfter}</span>}

        {isSubmitted && (
          <div className="ml-2">
            <AudioButton 
              text={`${exercise.sentenceBefore} ${exercise.correctAnswers[0]} ${exercise.sentenceAfter}`.trim()} 
              size="md" 
              variant="primary" 
            />
          </div>
        )}
      </div>

      {/* Word Bank Tokens (Randomized order) */}
      {shuffledWordBank.length > 0 && !isSubmitted && (
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tap a word to insert:
          </span>
          <div className="flex flex-wrap gap-2">
            {shuffledWordBank.map((word, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleWordBankSelect(word)}
                className="px-3.5 py-1.5 bg-white hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accent Keyboard Toolbar */}
      {!isSubmitted && (
        <AccentKeyboard onInsertChar={handleInsertAccent} />
      )}
    </div>
  );
};
