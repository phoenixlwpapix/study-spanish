import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'emerald' | 'indigo' | 'amber' | 'rose';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  showText = false,
  size = 'md',
  color = 'emerald',
  className = '',
}) => {
  const percentage = total > 0 ? Math.min(100, Math.max(0, Math.round((current / total) * 100))) : 0;

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colorClasses = {
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  };

  return (
    <div className={`w-full ${className}`}>
      {showText && (
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
          <span>Progress</span>
          <span>{current} / {total} ({percentage}%)</span>
        </div>
      )}
      <div
        className={`w-full bg-slate-200/80 rounded-full overflow-hidden ${heightClasses[size]}`}
        role="progressbar"
        aria-label="Progress"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={Math.min(total, Math.max(0, current))}
      >
        <div
          className={`${heightClasses[size]} ${colorClasses[color]} rounded-full transition-[width] duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
