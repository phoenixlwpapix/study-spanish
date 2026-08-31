import React from 'react';
import type { LucideIcon } from 'lucide-react';
import type { Lesson } from '../../types/curriculum';
import { useProgress } from '../../context/useProgress';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Zap, 
  Users, 
  HelpCircle, 
  Copy, 
  Grid, 
  Compass
} from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onSelect: (lessonId: string) => void;
}

const LESSON_ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Layers,
  Copy,
  Grid,
  Users,
  Zap,
  Compass,
  HelpCircle,
};

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, onSelect }) => {
  const { isLessonCompleted, getLessonScore } = useProgress();

  const isCompleted = isLessonCompleted(lesson.id);
  const scorePercentage = getLessonScore(lesson.id);

  const IconComponent = LESSON_ICONS[lesson.iconName ?? ''] ?? BookOpen;

  return (
    <button
      type="button"
      onClick={() => onSelect(lesson.id)}
      className={`group relative w-full text-left bg-white rounded-3xl p-6 border-2 transition-[color,background-color,border-color,box-shadow,transform] duration-200 cursor-pointer flex flex-col justify-between gap-5 ${
        isCompleted
          ? 'border-emerald-200 hover:border-emerald-400 hover:shadow-md'
          : 'border-slate-200 hover:border-indigo-400 hover:shadow-lg'
      }`}
    >
      <div className="space-y-4">
        {/* Top Meta Line */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
              isCompleted 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-indigo-100 text-indigo-800'
            }`}>
              {lesson.order}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Lesson {lesson.order}
            </span>
          </div>

          {/* Status Badge */}
          {isCompleted ? (
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{scorePercentage !== null ? `${scorePercentage}%` : 'Done'}</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
              <Circle className="w-3 h-3" />
              <span>Ready</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className={`p-2 rounded-xl shrink-0 ${
              isCompleted ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
            } transition-colors`}>
              <IconComponent className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
              {lesson.title}
            </h3>
          </div>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mt-1">
            {lesson.subtitle}
          </p>
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {lesson.estimatedMinutes}m
          </span>
          <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">
            {lesson.exercises.length} exercises
          </span>
        </div>

        <span className="flex items-center gap-1 text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">
          <span>{isCompleted ? 'Review' : 'Start'}</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </button>
  );
};
