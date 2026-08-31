import React from 'react';
import type { Unit } from '../../types/curriculum';
import { useProgress } from '../../context/useProgress';
import { Flame, Zap, Award, Play, CheckCircle2 } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';

interface UnitProgressHeroProps {
  unit: Unit;
  onContinueLearning: () => void;
  onOpenExam: () => void;
}

export const UnitProgressHero: React.FC<UnitProgressHeroProps> = ({
  unit,
  onContinueLearning,
  onOpenExam,
}) => {
  const { progress, isLessonCompleted } = useProgress();

  const totalLessons = unit.lessons.length;
  const completedCount = unit.lessons.filter(l => isLessonCompleted(l.id)).length;
  const percentage = Math.round((completedCount / totalLessons) * 100);
  const examRecord = progress.unitExamScores[unit.id];

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-900/50 relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase tracking-wider">
              🟢 Unit {unit.id} Active
            </span>
            <span className="text-xs font-semibold text-slate-300">
              {totalLessons} Interactive Lessons
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>{progress.streakDays} Day Streak</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              <Zap className="w-3.5 h-3.5 fill-indigo-400" />
              <span>{progress.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Unit Title and Description */}
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white m-0 text-left">
            {unit.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            {unit.description}
          </p>
        </div>

        {/* Progress Bar & Quick Action */}
        <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-t border-slate-800">
          <div className="md:col-span-2 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Course Completion</span>
              </span>
              <span>{completedCount} of {totalLessons} Lessons Completed ({percentage}%)</span>
            </div>
            <ProgressBar current={completedCount} total={totalLessons} size="md" color="emerald" />
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2">
            <button
              onClick={onContinueLearning}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-[transform,box-shadow] active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{completedCount === 0 ? 'Start First Lesson' : 'Continue Learning'}</span>
            </button>

            {completedCount >= Math.min(4, totalLessons) && (
              <button
                onClick={onOpenExam}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>{examRecord?.passed ? `Retake Unit ${unit.id} Checkpoint` : `Take Unit ${unit.id} Checkpoint`}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
