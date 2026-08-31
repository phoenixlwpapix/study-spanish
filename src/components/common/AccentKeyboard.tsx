import React from 'react';
import { soundEffects } from '../../utils/soundEffects';

interface AccentKeyboardProps {
  onInsertChar: (char: string) => void;
  className?: string;
}

const ACCENT_CHARS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ñ'];

export const AccentKeyboard: React.FC<AccentKeyboardProps> = ({ onInsertChar, className = '' }) => {
  const handleClick = (char: string) => {
    soundEffects.playClick();
    onInsertChar(char);
  };

  return (
    <div className={`flex flex-wrap items-center gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-xl ${className}`}>
      <span className="text-xs font-semibold text-slate-500 mr-1 select-none">Spanish Accents:</span>
      <div className="flex flex-wrap gap-1">
        {ACCENT_CHARS.map((char) => (
          <button
            key={char}
            type="button"
            onClick={() => handleClick(char)}
            className="w-8 h-8 flex items-center justify-center text-sm font-bold text-slate-700 bg-white hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 border border-slate-200 rounded-lg shadow-xs active:scale-95 transition-[color,background-color,border-color,transform] cursor-pointer select-none"
            title={`Insert ${char}`}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};
