import React, { useId } from 'react';
import { getUnitById, unit1 } from '../../data/curriculum';
import { ExerciseRunner } from '../lesson/ExerciseRunner';
import { Award, X } from 'lucide-react';
import { useProgress } from '../../context/useProgress';
import { useDialogFocus } from '../../hooks/useDialogFocus';

interface UnitExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  unitId?: number;
}

export const UnitExamModal: React.FC<UnitExamModalProps> = ({ isOpen, onClose, unitId = 1 }) => {
  const { recordUnitExam } = useProgress();
  const titleId = useId();
  const descriptionId = useId();
  const { dialogRef, initialFocusRef } = useDialogFocus(isOpen, onClose);
  const unit = getUnitById(unitId) || unit1;
  const exam = unit.masteryExam || unit1.masteryExam;

  if (!isOpen || !exam) return null;

  const handleFinishExam = (score: number, maxScore: number) => {
    const percentage = Math.round((score / maxScore) * 100);
    const passed = percentage >= exam.passingScore;
    recordUnitExam(unit.id, score, maxScore, passed);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200 overscroll-contain">
      <div
        ref={dialogRef}
        className="relative w-full max-w-3xl bg-slate-50 rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          ref={initialFocusRef}
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors z-20 cursor-pointer"
          title="Exit Exam"
          aria-label="Exit checkpoint"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4" aria-hidden="true" />
            <span>Unit {unit.id} Knowledge Check</span>
          </div>
          <h2 id={titleId} className="text-2xl sm:text-3xl font-black text-slate-900 m-0">
            {exam.title}
          </h2>
          <p id={descriptionId} className="text-xs sm:text-sm text-slate-500 font-medium">
            {exam.description} (Passing Score: {exam.passingScore}%)
          </p>
        </div>

        {/* Exam Runner */}
        <ExerciseRunner
          exercises={exam.exercises}
          lessonId={`unit-${unit.id}-exam`}
          unitId={unit.id}
          onFinishLesson={handleFinishExam}
          onGoToNextLesson={onClose}
          hasNextLesson={false}
          mode="exam"
          passingScore={exam.passingScore}
        />
      </div>
    </div>
  );
};
