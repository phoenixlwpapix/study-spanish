import React, { useState } from 'react';
import type { Lesson } from '../../types/curriculum';
import { TheorySection } from './TheorySection';
import { ExerciseRunner } from './ExerciseRunner';
import { FlashcardDeck } from './FlashcardDeck';
import { VocabularySection } from './VocabularySection';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Clock, 
  FileText, 
  Award 
} from 'lucide-react';
import { useProgress } from '../../context/useProgress';
import { getNextLesson, getUnitById } from '../../data/curriculum';

interface LessonViewProps {
  lesson: Lesson;
  onBackToDashboard: () => void;
  onSelectLesson: (lessonId: string) => void;
}

interface TabItem {
  id: 'learn' | 'practice' | 'flashcards' | 'vocab';
  label: string;
  icon: typeof BookOpen;
  badge?: string;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onBackToDashboard,
  onSelectLesson,
}) => {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'flashcards' | 'vocab'>('learn');
  const { isLessonCompleted, getLessonScore } = useProgress();

  const isCompleted = isLessonCompleted(lesson.id);
  const scorePercentage = getLessonScore(lesson.id);
  const nextLesson = getNextLesson(lesson.id);
  const currentUnit = getUnitById(lesson.unitId);
  const lessonCount = currentUnit?.lessons.length ?? 1;
  const lessonPosition = currentUnit
    ? currentUnit.lessons.findIndex((item) => item.id === lesson.id) + 1
    : 1;

  const tabs: TabItem[] = [
    { id: 'learn', label: '1. Learn Theory', icon: BookOpen },
    {
      id: 'practice',
      label: '2. Practice Quiz',
      icon: CheckCircle2,
      badge: `${lesson.exercises.length} ${lesson.exercises.length === 1 ? 'Q' : 'Qs'}`,
    },
    { id: 'flashcards', label: '3. Flashcards', icon: Layers, badge: `${lesson.flashcards.length}` },
    { id: 'vocab', label: '4. Vocabulary', icon: FileText, badge: `${lesson.vocabulary.length}` },
  ];

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();

    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    setActiveTab(nextTab.id);
    document.getElementById(`lesson-tab-${nextTab.id}`)?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Breadcrumb & Back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToDashboard}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Unit {lesson.unitId} Dashboard</span>
        </button>

        {isCompleted && scorePercentage !== null && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Mastered ({scorePercentage}%)</span>
          </div>
        )}
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-indigo-200 text-xs font-bold uppercase tracking-wider">
            <span className="bg-indigo-700/60 px-2.5 py-1 rounded-md border border-indigo-500/30">
              Lesson {lessonPosition} of {lessonCount}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              ~{lesson.estimatedMinutes} mins
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white m-0 text-left">
            {lesson.title}
          </h1>

          <p className="text-sm sm:text-base text-indigo-100/90 max-w-2xl leading-relaxed">
            {lesson.subtitle}
          </p>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div
        className="flex border-b border-slate-200 bg-white p-1.5 rounded-2xl shadow-xs overflow-x-auto gap-1"
        role="tablist"
        aria-label="Lesson sections"
      >
        {tabs.map((tab, tabIndex) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`lesson-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => handleTabKeyDown(event, tabIndex)}
              role="tab"
              aria-selected={isActive}
              aria-controls="lesson-tab-panel"
              tabIndex={isActive ? 0 : -1}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-colors cursor-pointer flex-1 justify-center ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isActive ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels */}
      <div
        id="lesson-tab-panel"
        className="pt-2"
        role="tabpanel"
        aria-labelledby={`lesson-tab-${activeTab}`}
      >
        {activeTab === 'learn' && (
          <TheorySection
            sections={lesson.theory}
            onStartPractice={() => setActiveTab('practice')}
          />
        )}

        {activeTab === 'practice' && (
          <ExerciseRunner
            exercises={lesson.exercises}
            lessonId={lesson.id}
            unitId={lesson.unitId}
            onFinishLesson={() => {}}
            hasNextLesson={Boolean(nextLesson)}
            onGoToNextLesson={() => {
              if (nextLesson) {
                onSelectLesson(nextLesson.id);
                setActiveTab('learn');
              }
            }}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardDeck flashcards={lesson.flashcards} />
        )}

        {activeTab === 'vocab' && (
          <VocabularySection vocabulary={lesson.vocabulary} />
        )}
      </div>
    </div>
  );
};
