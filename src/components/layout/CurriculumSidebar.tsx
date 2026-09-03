import React, { useState } from 'react';
import { allUnits } from '../../data/curriculum';
import { useProgress } from '../../context/useProgress';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  GraduationCap, 
  Award,
  ChevronsUpDown,
  ListTree
} from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';

interface CurriculumSidebarProps {
  selectedUnitId: number;
  onSelectUnit: (unitId: number) => void;
  onSelectLesson: (lessonId: string) => void;
  onOpenExam: (unitId: number) => void;
}

export const CurriculumSidebar: React.FC<CurriculumSidebarProps> = ({
  selectedUnitId,
  onSelectUnit,
  onSelectLesson,
  onOpenExam
}) => {
  const { isLessonCompleted, progress } = useProgress();
  const [expandedUnitIds, setExpandedUnitIds] = useState<number[]>([selectedUnitId]);
  const [mobileNavigatorOpen, setMobileNavigatorOpen] = useState(false);

  const toggleExpand = (unitId: number, e: React.MouseEvent) => {
    e.stopPropagation();
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

  const totalCurriculumLessons = React.useMemo(
    () => allUnits.reduce((total, unit) => total + unit.lessons.length, 0),
    [],
  );
  const totalCompletedOverall = React.useMemo(
    () => allUnits.reduce((acc, u) => acc + u.lessons.filter(l => isLessonCompleted(l.id)).length, 0),
    [isLessonCompleted],
  );
  const overallPercentage = totalCurriculumLessons > 0
    ? Math.round((totalCompletedOverall / totalCurriculumLessons) * 100)
    : 0;

  return (
    <aside className="w-full lg:w-80 xl:w-96 2xl:w-[400px] shrink-0 lg:sticky lg:top-20 space-y-4">
      <button
        type="button"
        onClick={() => setMobileNavigatorOpen((isOpen) => !isOpen)}
        className="lg:hidden w-full rounded-2xl border border-indigo-100 bg-white p-4 text-left shadow-xs transition-[border-color,box-shadow] hover:border-indigo-300 hover:shadow-sm"
        aria-expanded={mobileNavigatorOpen}
        aria-controls="curriculum-navigator"
      >
        <span className="flex items-center justify-between gap-3">
          <span className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/20">
              <ListTree className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-indigo-500">Course Navigator</span>
              <span className="block truncate text-sm font-black text-slate-900">Unit {selectedUnitId} · {allUnits[selectedUnitId - 1]?.lessons.length ?? 0} Lessons</span>
            </span>
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-indigo-700">
            {mobileNavigatorOpen ? 'Close' : 'Browse'}
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileNavigatorOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
          </span>
        </span>
      </button>

      <div id="curriculum-navigator" className={`${mobileNavigatorOpen ? 'block' : 'hidden'} lg:block space-y-4`}>
      {/* Sidebar Overview Card */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Course Units</span>
          </div>
          <button
            type="button"
            onClick={handleToggleAll}
            title={expandedUnitIds.length === allUnits.length ? 'Collapse All' : 'Expand All'}
            aria-label={expandedUnitIds.length === allUnits.length ? 'Collapse all units' : 'Expand all units'}
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
          >
            <ChevronsUpDown className="w-4 h-4" />
          </button>
        </div>

        <div>
          <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1">
            <span>Overall Progress</span>
            <span className="text-indigo-600">{totalCompletedOverall}/{totalCurriculumLessons} ({overallPercentage}%)</span>
          </div>
          <ProgressBar current={totalCompletedOverall} total={totalCurriculumLessons} size="sm" color="indigo" />
        </div>
      </div>

      {/* 9 Units Accordion List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-x-hidden overflow-y-auto divide-y divide-slate-100 max-h-[min(65vh,36rem)] lg:max-h-[calc(100vh-14rem)] scrollbar-thin overscroll-contain">
        {allUnits.map((unit) => {
          const isSelected = unit.id === selectedUnitId;
          const isExpanded = expandedUnitIds.includes(unit.id);
          const completedCount = unit.lessons.filter(l => isLessonCompleted(l.id)).length;
          const isAllCompleted = unit.lessons.length > 0 && completedCount === unit.lessons.length;
          const examPassed = progress.unitExamScores[unit.id]?.passed;

          return (
            <div 
              key={unit.id}
              className={`transition-colors ${
                isSelected ? 'bg-indigo-50/40' : 'hover:bg-slate-50/70'
              }`}
            >
              {/* Unit Header Item */}
              <div className="flex items-stretch gap-1 p-1.5">
                <button
                  type="button"
                  onClick={() => {
                   onSelectUnit(unit.id);
                   if (!expandedUnitIds.includes(unit.id)) {
                     setExpandedUnitIds(prev => [...prev, unit.id]);
                   }
                   setMobileNavigatorOpen(false);
                 }}
                  className="flex min-w-0 flex-1 items-center justify-between gap-2.5 rounded-2xl p-2 text-left select-none hover:bg-white/80"
                >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                    isAllCompleted
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700'
                  }`}>
                    {isAllCompleted ? <CheckCircle2 className="w-4 h-4" /> : unit.id}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-xs font-black truncate block ${
                        isSelected ? 'text-indigo-950 font-black' : 'text-slate-900'
                      }`}>
                        Unit {unit.id}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 shrink-0">
                        {completedCount}/{unit.lessons.length}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate">
                      {unit.title.replace(/^Unit \d+:\s*/, '')}
                    </div>
                  </div>
                </div>

                </button>

                <button
                  type="button"
                  onClick={(e) => toggleExpand(unit.id, e)}
                  aria-label={isExpanded ? 'Collapse lessons' : 'Expand lessons'}
                  className="my-auto p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer shrink-0"
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>

              {/* Sub-lessons list */}
              {isExpanded && (
                <div className="bg-slate-50/70 border-t border-slate-100 px-2 py-1.5 space-y-0.5">
                  {unit.lessons.map((lesson) => {
                    const isCompleted = isLessonCompleted(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => {
                          setMobileNavigatorOpen(false);
                          onSelectLesson(lesson.id);
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 hover:bg-white hover:shadow-2xs transition-[color,background-color,box-shadow] cursor-pointer text-slate-700 hover:text-indigo-700 group"
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <span className={`w-4 h-4 rounded-md text-[10px] font-black flex items-center justify-center shrink-0 ${
                            isCompleted 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-slate-200/80 text-slate-600'
                          }`}>
                            {lesson.order}
                          </span>
                          <span className="truncate text-[11px] group-hover:font-bold">
                            {lesson.title.replace(/^\d+\.\s*/, '')}
                          </span>
                        </div>

                        {isCompleted && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}

                  {/* Unit Exam Button inside sidebar */}
                  <button
                    type="button"
                    onClick={() => {
                      onOpenExam(unit.id);
                    }}
                    className={`w-full mt-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      examPassed
                        ? 'bg-emerald-100/80 text-emerald-800 hover:bg-emerald-200'
                        : 'bg-amber-100/80 text-amber-900 hover:bg-amber-200'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{examPassed ? `Unit ${unit.id} Checkpoint Passed` : `Unit ${unit.id} Checkpoint Exam`}</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </aside>
  );
};
