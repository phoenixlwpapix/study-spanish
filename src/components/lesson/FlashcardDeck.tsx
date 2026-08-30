import React, { useState } from 'react';
import type { Flashcard } from '../../types/curriculum';
import { AudioButton } from '../common/AudioButton';
import { RotateCw, ChevronLeft, ChevronRight, Shuffle, Sparkles } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

interface FlashcardDeckProps {
  flashcards: Flashcard[];
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ flashcards }) => {
  const [cards, setCards] = useState(flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!cards || cards.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-400 font-medium">
        No flashcards available for this lesson.
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    soundEffects.playClick();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Top Deck Info */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-2">
        <span className="flex items-center gap-1 text-indigo-600">
          <Sparkles className="w-4 h-4" />
          Flashcard Review
        </span>
        <span>
          Card {currentIndex + 1} of {cards.length}
        </span>
        <button
          onClick={handleShuffle}
          className="flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          title="Shuffle deck"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>Shuffle</span>
        </button>
      </div>

      {/* Interactive 3D Flip Card Container */}
      <div 
        onClick={handleFlip}
        style={{ perspective: 1000 }}
        className="relative h-72 sm:h-80 w-full cursor-pointer select-none group"
      >
        <div 
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
          className="relative w-full h-full transition-transform duration-500"
        >
          {/* Front Face (Spanish / Question) */}
          <div 
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 w-full h-full rounded-3xl border-2 border-slate-200 bg-white p-8 flex flex-col justify-between items-center text-center shadow-md hover:border-indigo-300 hover:shadow-lg transition-colors"
          >
            {/* Front Top */}
            <div className="w-full flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                {currentCard.category} • Front
              </span>
              <div onClick={(e) => e.stopPropagation()}>
                <AudioButton text={currentCard.front} size="md" variant="primary" />
              </div>
            </div>

            {/* Front Center */}
            <div className="my-auto space-y-2">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                {currentCard.front}
              </p>
              {currentCard.frontSubtext && (
                <p className="text-sm font-semibold text-indigo-600">
                  {currentCard.frontSubtext}
                </p>
              )}
            </div>

            {/* Front Bottom */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Click card to reveal answer</span>
            </div>
          </div>

          {/* Back Face (English Meaning / Grammar Rule) */}
          <div 
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 w-full h-full rounded-3xl border-2 border-indigo-300 bg-indigo-50/90 p-8 flex flex-col justify-between items-center text-center shadow-md"
          >
            {/* Back Top */}
            <div className="w-full flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md">
                {currentCard.category} • Answer
              </span>
              <div onClick={(e) => e.stopPropagation()}>
                <AudioButton text={currentCard.back} size="md" variant="primary" />
              </div>
            </div>

            {/* Back Center */}
            <div className="my-auto space-y-2">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                {currentCard.back}
              </p>
              {currentCard.backSubtext && (
                <p className="text-sm font-semibold text-indigo-700">
                  {currentCard.backSubtext}
                </p>
              )}
            </div>

            {/* Back Bottom */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click card to flip back</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 font-bold text-slate-700 flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleFlip}
          className="px-6 py-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-sm border border-indigo-200 transition-all cursor-pointer"
        >
          {isFlipped ? 'Show Front' : 'Flip Card'}
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
