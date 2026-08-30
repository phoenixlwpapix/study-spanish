import React, { useState, useEffect } from 'react';
import type { SentenceBuilderExercise } from '../../types/curriculum';
import { AudioButton } from '../common/AudioButton';
import { RotateCcw } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { shuffleArray } from '../../utils/shuffle';

interface SentenceBuilderProps {
  exercise: SentenceBuilderExercise;
  selectedTokens: string[];
  onUpdateTokens: (tokens: string[]) => void;
  isSubmitted: boolean;
  disabled?: boolean;
}

export const SentenceBuilder: React.FC<SentenceBuilderProps> = ({
  exercise,
  selectedTokens,
  onUpdateTokens,
  isSubmitted,
  disabled = false,
}) => {
  // Randomize available word chips order
  const [shuffledTokens, setShuffledTokens] = useState(() => 
    shuffleArray(exercise.availableTokens)
  );

  useEffect(() => {
    setShuffledTokens(shuffleArray(exercise.availableTokens));
  }, [exercise.id]);

  // Count how many times each token is selected to support duplicate tokens
  const tokenCounts = selectedTokens.reduce<Record<string, number>>((acc, token) => {
    acc[token] = (acc[token] || 0) + 1;
    return acc;
  }, {});

  const handleAddToken = (token: string) => {
    if (disabled || isSubmitted) return;
    soundEffects.playClick();
    onUpdateTokens([...selectedTokens, token]);
  };

  const handleRemoveToken = (indexToRemove: number) => {
    if (disabled || isSubmitted) return;
    soundEffects.playClick();
    onUpdateTokens(selectedTokens.filter((_, idx) => idx !== indexToRemove));
  };

  const handleReset = () => {
    if (disabled || isSubmitted) return;
    soundEffects.playClick();
    onUpdateTokens([]);
  };

  const isTokenAvailable = (token: string, availableIndex: number) => {
    // Check if this particular token instance is already used
    const totalOccurrencesInAvailable = shuffledTokens
      .slice(0, availableIndex + 1)
      .filter(t => t === token).length;
    const currentUsedCount = tokenCounts[token] || 0;
    return totalOccurrencesInAvailable > currentUsedCount;
  };

  const isCorrect = selectedTokens.join(' ') === exercise.correctTokens.join(' ');

  return (
    <div className="space-y-5">
      {/* Target English sentence */}
      <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">
          Translate this sentence:
        </span>
        <p className="text-xl sm:text-2xl font-black text-slate-900">
          "{exercise.targetEnglish}"
        </p>
      </div>

      {/* Assembly Construction Area */}
      <div className={`min-h-[110px] p-5 rounded-2xl border-2 transition-all flex flex-wrap items-center gap-2 relative ${
        isSubmitted
          ? isCorrect
            ? 'bg-emerald-50/70 border-emerald-400'
            : 'bg-rose-50/70 border-rose-400'
          : 'bg-white border-slate-300 shadow-inner'
      }`}>
        {selectedTokens.length === 0 ? (
          <span className="text-sm font-medium text-slate-400 italic">
            Tap the word chips below in the correct order...
          </span>
        ) : (
          selectedTokens.map((token, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleRemoveToken(idx)}
              disabled={disabled || isSubmitted}
              className={`px-4 py-2 rounded-xl text-base font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:ring-2 hover:ring-indigo-300'
              }`}
            >
              {token}
            </button>
          ))
        )}

        {/* Reset button inside assembly area */}
        {selectedTokens.length > 0 && !isSubmitted && (
          <button
            type="button"
            onClick={handleReset}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            title="Clear all tokens"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Available Word Chips Bank (Randomized order) */}
      {!isSubmitted && (
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Word Bank:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {shuffledTokens.map((token, idx) => {
              const available = isTokenAvailable(token, idx);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddToken(token)}
                  disabled={!available || disabled}
                  className={`px-4 py-2 text-base font-bold rounded-xl border transition-all ${
                    available
                      ? 'bg-white hover:bg-indigo-50 hover:border-indigo-400 text-slate-800 border-slate-200 shadow-xs active:scale-95 cursor-pointer'
                      : 'bg-slate-200/50 text-slate-300 border-transparent cursor-not-allowed opacity-40'
                  }`}
                >
                  {token}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Audio Pronunciation of Correct Sentence */}
      {isSubmitted && (
        <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-xl">
          <AudioButton text={exercise.correctTokens.join(' ')} size="md" variant="primary" />
          <span className="text-sm font-semibold text-slate-700">
            {exercise.correctTokens.join(' ')}
          </span>
        </div>
      )}
    </div>
  );
};
