import React, { useState, useEffect } from 'react';
import type { MatchingPairsExercise } from '../../types/curriculum';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { audioService } from '../../utils/audio';

interface MatchingPairsProps {
  exercise: MatchingPairsExercise;
  matchedPairIds: string[];
  onUpdateMatchedIds: (matchedIds: string[]) => void;
  onComplete: (isAllMatched: boolean) => void;
  isSubmitted: boolean;
  disabled?: boolean;
}

export const MatchingPairs: React.FC<MatchingPairsProps> = ({
  exercise,
  matchedPairIds,
  onUpdateMatchedIds,
  onComplete,
  isSubmitted,
  disabled = false,
}) => {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [mismatchedPair, setMismatchedPair] = useState<[string, string] | null>(null);

  // Keep a stable shuffled order of the right column for this exercise
  const [shuffledRights, setShuffledRights] = useState(() => {
    return [...exercise.pairs].sort(() => Math.random() - 0.5);
  });

  // Re-shuffle if exercise changes
  useEffect(() => {
    setShuffledRights([...exercise.pairs].sort(() => Math.random() - 0.5));
    setSelectedLeft(null);
    setSelectedRight(null);
    setMismatchedPair(null);
  }, [exercise.id]);

  const handleLeftClick = (pairId: string, spanishText: string) => {
    if (disabled || isSubmitted || matchedPairIds.includes(pairId)) return;
    soundEffects.playClick();
    audioService.speak(spanishText);

    // If clicking the same already-selected item, deselect it
    if (selectedLeft === pairId) {
      setSelectedLeft(null);
      return;
    }

    if (selectedRight) {
      // Check match with previously selected right item
      evaluatePair(pairId, selectedRight);
    } else {
      setSelectedLeft(pairId);
    }
  };

  const handleRightClick = (pairId: string) => {
    if (disabled || isSubmitted || matchedPairIds.includes(pairId)) return;
    soundEffects.playClick();

    // If clicking the same already-selected item, deselect it
    if (selectedRight === pairId) {
      setSelectedRight(null);
      return;
    }

    if (selectedLeft) {
      // Check match with previously selected left item
      evaluatePair(selectedLeft, pairId);
    } else {
      setSelectedRight(pairId);
    }
  };

  const evaluatePair = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      // Correct Match!
      soundEffects.playSuccess();
      const updated = [...matchedPairIds, leftId];
      onUpdateMatchedIds(updated);
      setSelectedLeft(null);
      setSelectedRight(null);
      setMismatchedPair(null);

      if (updated.length === exercise.pairs.length) {
        onComplete(true);
      }
    } else {
      // Incorrect Match
      soundEffects.playError();
      setMismatchedPair([leftId, rightId]);
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setMismatchedPair(null);
      }, 550);
    }
  };

  const isAllDone = matchedPairIds.length === exercise.pairs.length;

  return (
    <div className="space-y-4">
      {/* Prompt header */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            {exercise.prompt}
          </p>
          {isAllDone && (
            <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0 animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
              <span>All Matched!</span>
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500">
          Tap a Spanish term on the left, then tap its matching pair on the right.
        </p>
      </div>

      {/* 2-Column Matching Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Column (Spanish) */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
            Spanish
          </span>
          {exercise.pairs.map((pair) => {
            const isMatched = matchedPairIds.includes(pair.id);
            const isSelected = selectedLeft === pair.id;
            const isWrong = mismatchedPair && mismatchedPair[0] === pair.id;

            let cardStyle = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/20 text-slate-800 shadow-xs';
            if (isMatched) {
              cardStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold opacity-90 shadow-none cursor-default';
            } else if (isWrong) {
              cardStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400';
            } else if (isSelected) {
              cardStyle = 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-400 text-indigo-950 font-extrabold shadow-sm scale-[1.01]';
            }

            return (
              <button
                key={`left-${pair.id}`}
                type="button"
                onClick={() => handleLeftClick(pair.id, pair.left)}
                disabled={isMatched || disabled || isSubmitted}
                className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-base transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${cardStyle}`}
              >
                <span>{pair.left}</span>
                {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Right Column (English / Meaning) */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
            Meaning / Match
          </span>
          {shuffledRights.map((pair) => {
            const isMatched = matchedPairIds.includes(pair.id);
            const isSelected = selectedRight === pair.id;
            const isWrong = mismatchedPair && mismatchedPair[1] === pair.id;

            let cardStyle = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/20 text-slate-800 shadow-xs';
            if (isMatched) {
              cardStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold opacity-90 shadow-none cursor-default';
            } else if (isWrong) {
              cardStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400';
            } else if (isSelected) {
              cardStyle = 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-400 text-indigo-950 font-extrabold shadow-sm scale-[1.01]';
            }

            return (
              <button
                key={`right-${pair.id}`}
                type="button"
                onClick={() => handleRightClick(pair.id)}
                disabled={isMatched || disabled || isSubmitted}
                className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-base transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${cardStyle}`}
              >
                <span>{pair.right}</span>
                {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
