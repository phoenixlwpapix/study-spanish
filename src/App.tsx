import { useState } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { allUnits, getUnitById, getLessonById } from './data/curriculum';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { UnitProgressHero } from './components/dashboard/UnitProgressHero';
import { LessonCard } from './components/dashboard/LessonCard';
import { CourseRoadmap } from './components/dashboard/CourseRoadmap';
import { LessonView } from './components/lesson/LessonView';
import { GrammarCheatSheet } from './components/cheatsheet/GrammarCheatSheet';
import { MistakesNotebook } from './components/mistakes/MistakesNotebook';
import { UnitExamModal } from './components/exam/UnitExamModal';
import { soundEffects } from './utils/soundEffects';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<'curriculum' | 'cheatsheet' | 'mistakes' | 'exam'>('curriculum');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const { isLessonCompleted } = useProgress();

  const currentUnit = getUnitById(selectedUnitId) || allUnits[0];

  const handleSelectLesson = (lessonId: string) => {
    soundEffects.playClick();
    const lesson = getLessonById(lessonId);
    if (lesson) {
      setSelectedUnitId(lesson.unitId);
    }
    setActiveLessonId(lessonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    soundEffects.playClick();
    setActiveLessonId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueLearning = () => {
    // Find the first uncompleted lesson in the current unit or default to first lesson
    const uncompleted = currentUnit.lessons.find(l => !isLessonCompleted(l.id));
    const targetId = uncompleted ? uncompleted.id : currentUnit.lessons[0].id;
    handleSelectLesson(targetId);
  };

  const handleSelectTab = (tab: 'curriculum' | 'cheatsheet' | 'mistakes' | 'exam') => {
    soundEffects.playClick();
    if (tab === 'exam') {
      setIsExamModalOpen(true);
    } else {
      setCurrentTab(tab);
      setActiveLessonId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeLesson = activeLessonId ? getLessonById(activeLessonId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenExam={() => setIsExamModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Active Lesson Screen */}
        {activeLesson ? (
          <LessonView
            lesson={activeLesson}
            onBackToDashboard={handleBackToDashboard}
            onSelectLesson={handleSelectLesson}
          />
        ) : (
          <>
            {/* Dashboard / Curriculum Tab */}
            {currentTab === 'curriculum' && (
              <div className="space-y-10">
                
                {/* Unit Switcher Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {allUnits.map((u) => {
                    const isSelected = u.id === selectedUnitId;
                    return (
                      <button
                        key={u.id}
                        onClick={() => {
                          soundEffects.playClick();
                          setSelectedUnitId(u.id);
                        }}
                        className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 ring-2 ring-indigo-300'
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        Unit {u.id}
                      </button>
                    );
                  })}
                </div>

                {/* Hero Unit Progress for Current Unit */}
                <UnitProgressHero
                  unit={currentUnit}
                  onContinueLearning={handleContinueLearning}
                  onOpenExam={() => setIsExamModalOpen(true)}
                />

                {/* Selected Unit Lessons Grid */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 m-0 text-left">
                        {currentUnit.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                        {currentUnit.description}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full self-start sm:self-auto shrink-0">
                      {currentUnit.lessons.length} Interactive Lessons
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentUnit.lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        onSelect={handleSelectLesson}
                      />
                    ))}
                  </div>
                </div>

                {/* Full 9-Unit Roadmap & Syllabus */}
                <div className="pt-6 border-t border-slate-200">
                  <CourseRoadmap 
                    onSelectLesson={handleSelectLesson} 
                    currentUnitId={selectedUnitId}
                  />
                </div>
              </div>
            )}

            {/* Cheat Sheet Tab */}
            {currentTab === 'cheatsheet' && (
              <GrammarCheatSheet />
            )}

            {/* Mistakes Notebook Tab */}
            {currentTab === 'mistakes' && (
              <MistakesNotebook
                onGoToLesson={(lessonId) => {
                  handleSelectLesson(lessonId);
                }}
              />
            )}
          </>
        )}
      </main>

      {/* Mastery Exam Modal */}
      <UnitExamModal
        isOpen={isExamModalOpen}
        unitId={selectedUnitId}
        onClose={() => setIsExamModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
