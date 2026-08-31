import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { ProgressProvider } from './context/ProgressContext';
import { useProgress } from './context/useProgress';
import { allUnits, getUnitById, getLessonById } from './data/curriculum';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { UnitProgressHero } from './components/dashboard/UnitProgressHero';
import { LessonCard } from './components/dashboard/LessonCard';
import { CourseRoadmap } from './components/dashboard/CourseRoadmap';
import { soundEffects } from './utils/soundEffects';

const loadLessonView = () => import('./components/lesson/LessonView');
const loadGrammarCheatSheet = () => import('./components/cheatsheet/GrammarCheatSheet');
const loadMistakesNotebook = () => import('./components/mistakes/MistakesNotebook');
const loadUnitExamModal = () => import('./components/exam/UnitExamModal');

const LessonView = lazy(() => loadLessonView().then(module => ({ default: module.LessonView })));
const GrammarCheatSheet = lazy(() => loadGrammarCheatSheet().then(module => ({ default: module.GrammarCheatSheet })));
const MistakesNotebook = lazy(() => loadMistakesNotebook().then(module => ({ default: module.MistakesNotebook })));
const UnitExamModal = lazy(() => loadUnitExamModal().then(module => ({ default: module.UnitExamModal })));

function PageLoadingFallback() {
  return (
    <div role="status" className="min-h-72 rounded-3xl border border-slate-200 bg-white p-8 animate-pulse">
      <span className="sr-only">Loading learning content…</span>
      <div className="h-8 w-2/5 rounded-xl bg-slate-200" />
      <div className="mt-5 h-4 w-4/5 rounded-lg bg-slate-100" />
      <div className="mt-3 h-4 w-3/5 rounded-lg bg-slate-100" />
    </div>
  );
}

type AppTab = 'curriculum' | 'cheatsheet' | 'mistakes';

interface AppNavigationState {
  currentTab: AppTab;
  selectedUnitId: number;
  activeLessonId: string | null;
  isExamModalOpen: boolean;
}

function readNavigationState(): AppNavigationState {
  const params = new URLSearchParams(window.location.search);
  const requestedUnitId = Number(params.get('unit'));
  const selectedUnitId = getUnitById(requestedUnitId) ? requestedUnitId : 1;
  const requestedLessonId = params.get('lesson');
  const requestedLesson = requestedLessonId ? getLessonById(requestedLessonId) : undefined;
  const requestedTab = params.get('tab');
  const currentTab: AppTab = requestedLesson
    ? 'curriculum'
    : requestedTab === 'cheatsheet' || requestedTab === 'mistakes'
      ? requestedTab
      : 'curriculum';

  return {
    currentTab,
    selectedUnitId: requestedLesson?.unitId ?? selectedUnitId,
    activeLessonId: requestedLesson?.id ?? null,
    isExamModalOpen: params.get('checkpoint') === '1',
  };
}

function createNavigationUrl(state: AppNavigationState): string {
  const params = new URLSearchParams();

  if (state.selectedUnitId !== 1) {
    params.set('unit', String(state.selectedUnitId));
  }
  if (state.currentTab !== 'curriculum') {
    params.set('tab', state.currentTab);
  }
  if (state.activeLessonId) {
    params.set('lesson', state.activeLessonId);
  }
  if (state.isExamModalOpen) {
    params.set('checkpoint', '1');
  }

  const search = params.toString();
  return `${window.location.pathname}${search ? `?${search}` : ''}`;
}

function scrollToTop(): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

function AppContent() {
  const [navigation, setNavigation] = useState<AppNavigationState>(readNavigationState);
  const { isLessonCompleted } = useProgress();
  const { currentTab, selectedUnitId, activeLessonId, isExamModalOpen } = navigation;

  const navigate = useCallback((nextState: AppNavigationState, replace = false) => {
    setNavigation(nextState);
    const nextUrl = createNavigationUrl(nextState);
    if (replace) {
      window.history.replaceState(null, '', nextUrl);
    } else {
      window.history.pushState(null, '', nextUrl);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setNavigation(readNavigationState());
      scrollToTop();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentUnit = getUnitById(selectedUnitId) || allUnits[0];

  const handleSelectLesson = (lessonId: string) => {
    soundEffects.playClick();
    const lesson = getLessonById(lessonId);
    if (!lesson) return;

    void loadLessonView();
    navigate({
      currentTab: 'curriculum',
      selectedUnitId: lesson.unitId,
      activeLessonId: lesson.id,
      isExamModalOpen: false,
    });
    scrollToTop();
  };

  const handleBackToDashboard = () => {
    soundEffects.playClick();
    navigate({
      ...navigation,
      currentTab: 'curriculum',
      activeLessonId: null,
      isExamModalOpen: false,
    });
    scrollToTop();
  };

  const handleContinueLearning = () => {
    // Find the first uncompleted lesson in the current unit or default to first lesson
    const uncompleted = currentUnit.lessons.find(l => !isLessonCompleted(l.id));
    const targetId = uncompleted ? uncompleted.id : currentUnit.lessons[0].id;
    handleSelectLesson(targetId);
  };

  const handleOpenExam = () => {
    void loadUnitExamModal();
    navigate({ ...navigation, isExamModalOpen: true });
  };

  const handleSelectTab = (tab: AppTab | 'exam') => {
    soundEffects.playClick();
    if (tab === 'exam') {
      handleOpenExam();
    } else {
      if (tab === 'cheatsheet') void loadGrammarCheatSheet();
      if (tab === 'mistakes') void loadMistakesNotebook();
      navigate({
        ...navigation,
        currentTab: tab,
        activeLessonId: null,
        isExamModalOpen: false,
      });
    }
    scrollToTop();
  };

  const activeLesson = activeLessonId ? getLessonById(activeLessonId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-white focus:text-indigo-700 focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* Top Navigation */}
      <Navbar
        activeTab={currentTab}
        selectedUnitId={selectedUnitId}
        onSelectTab={handleSelectTab}
        onOpenExam={handleOpenExam}
      />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Active Lesson Screen */}
        {activeLesson ? (
          <Suspense fallback={<PageLoadingFallback />}>
            <LessonView
              lesson={activeLesson}
              onBackToDashboard={handleBackToDashboard}
              onSelectLesson={handleSelectLesson}
            />
          </Suspense>
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
                          navigate({
                            currentTab: 'curriculum',
                            selectedUnitId: u.id,
                            activeLessonId: null,
                            isExamModalOpen: false,
                          });
                        }}
                        className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-colors cursor-pointer ${
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
                  onOpenExam={handleOpenExam}
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
              <Suspense fallback={<PageLoadingFallback />}>
                <GrammarCheatSheet />
              </Suspense>
            )}

            {/* Mistakes Notebook Tab */}
            {currentTab === 'mistakes' && (
              <Suspense fallback={<PageLoadingFallback />}>
                <MistakesNotebook onGoToLesson={handleSelectLesson} />
              </Suspense>
            )}
          </>
        )}
      </main>

      {/* Mastery Exam Modal */}
      {isExamModalOpen && (
        <Suspense fallback={null}>
          <UnitExamModal
            isOpen
            unitId={selectedUnitId}
            onClose={() => navigate({ ...navigation, isExamModalOpen: false }, true)}
          />
        </Suspense>
      )}

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
