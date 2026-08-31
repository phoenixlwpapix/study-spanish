import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-auto text-center text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
          <span className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            Topic progression inspired by StudySpanish Grammar
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            78 interactive lessons • Units 6–9 currently condensed
          </span>
        </div>
        <p className="text-slate-400">
          Built for English-speaking Spanish learners. All lessons and exercises are stored locally in your browser.
        </p>
      </div>
    </footer>
  );
};
