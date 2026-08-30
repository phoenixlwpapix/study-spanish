import React, { useState } from 'react';
import { allUnits } from '../../data/curriculum';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  GraduationCap,
  ChevronsUpDown
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

interface CourseRoadmapProps {
  onSelectLesson: (lessonId: string) => void;
  currentUnitId?: number;
}

export const CourseRoadmap: React.FC<CourseRoadmapProps> = ({ onSelectLesson, currentUnitId }) => {
  // Default to empty array (all collapsed) or only the active unit if preferred
  const [expandedUnitIds, setExpandedUnitIds] = useState<number[]>([]);
  const { isLessonCompleted } = useProgress();

  const toggleUnit = (unitId: number) => {
    setExpandedUnitIds(prev => 
      prev.includes(unitId) ? prev.filter(id => id !== unitId) : [...prev, unitId]
    );
  };

  const handleToggleAll = () => {
    if (expandedUnitIds.length === allUnits.length) {
      setExpandedUnitIds([]);
    } else {
      setExpandedUnitIds(allUnits.map(u => u.id));
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Full 9-Unit Course Curriculum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 m-0 text-left">
              Spanish Grammar Progression (A1 → B2)
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-1">
              Structured following the proven StudySpanish curriculum hierarchy. Click any unit to expand its lessons.
            </p>
          </div>

          <button
            onClick={handleToggleAll}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer self-start sm:self-auto shrink-0"
          >
            <ChevronsUpDown className="w-3.5 h-3.5" />
            <span>{expandedUnitIds.length === allUnits.length ? 'Collapse All' : 'Expand All'}</span>
          </button>
        </div>
      </div>

      {/* Units List */}
      <div className="space-y-4">
        {allUnits.map((unit) => {
          const isExpanded = expandedUnitIds.includes(unit.id);
          const completedCount = unit.lessons.filter(l => isLessonCompleted(l.id)).length;
          const isAllCompleted = unit.lessons.length > 0 && completedCount === unit.lessons.length;
          const isCurrentUnit = unit.id === currentUnitId;

          return (
            <div
              key={unit.id}
              className={`bg-white rounded-3xl border-2 transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'border-indigo-300 shadow-md ring-2 ring-indigo-100' 
                  : isCurrentUnit
                    ? 'border-indigo-200 hover:border-indigo-300'
                    : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Unit Header */}
              <div
                onClick={() => toggleUnit(unit.id)}
                className="p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 ${
                    isAllCompleted
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : isCurrentUnit
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-100 text-slate-600'
                  }`}>
                    {unit.id}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900">
                        {unit.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-extrabold uppercase tracking-wider">
                        {unit.lessons.length} Lessons
                      </span>
                      {completedCount > 0 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                          {completedCount}/{unit.lessons.length} Completed
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                      {unit.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 p-1 rounded-xl hover:bg-slate-100">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Collapsible Lessons Outline */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40">
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
                    {unit.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {unit.lessons.map((lesson) => {
                      const completed = isLessonCompleted(lesson.id);

                      return (
                        <div
                          key={lesson.id}
                          onClick={() => onSelectLesson(lesson.id)}
                          className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer shadow-2xs ${
                            completed
                              ? 'bg-emerald-50/80 border-emerald-200 hover:border-emerald-300'
                              : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                              completed
                                ? 'bg-emerald-600 text-white'
                                : 'bg-indigo-100 text-indigo-700'
                            }`}>
                              {lesson.order}
                            </span>
                            <div>
                              <div className="text-sm font-bold text-slate-800">
                                {lesson.title}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">
                                {lesson.subtitle}
                              </div>
                            </div>
                          </div>

                          {completed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <span className="text-xs font-bold text-indigo-600 shrink-0">
                              Start →
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
