import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '../../utils/audio';
import { useProgress } from '../../context/ProgressContext';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'subtle' | 'primary' | 'card';
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  className = '',
  variant = 'subtle',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { progress } = useProgress();

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    setIsPlaying(true);
    try {
      await audioService.speak(text, progress.settings.speechSpeed || 0.9);
    } finally {
      setIsPlaying(false);
    }
  };

  const sizeClasses = {
    sm: 'p-1 text-xs',
    md: 'p-1.5 text-sm',
    lg: 'p-2.5 text-base',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const variantClasses = {
    subtle: 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/80 bg-slate-100/70',
    primary: 'text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60',
    card: 'text-white bg-indigo-600/90 hover:bg-indigo-600 shadow-xs',
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-150 active:scale-90 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${isPlaying ? 'ring-2 ring-indigo-400 ring-offset-1 animate-pulse' : ''} ${className}`}
      title="Listen to Spanish pronunciation"
      aria-label={`Listen to pronunciation of "${text}"`}
    >
      {isPlaying ? (
        <Volume2 className={`${iconSizes[size]} text-indigo-500 animate-pulse`} />
      ) : (
        <Volume2 className={iconSizes[size]} />
      )}
    </button>
  );
};
