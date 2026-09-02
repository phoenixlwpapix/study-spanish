import React, { useState } from 'react';
import { 
  BookOpen, 
  Flame, 
  Zap, 
  Volume2, 
  VolumeX, 
  FileText, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  Menu,
  X
} from 'lucide-react';
import { useProgress } from '../../context/useProgress';
import { ConfirmModal } from '../common/ConfirmModal';

interface NavbarProps {
  activeTab: 'curriculum' | 'cheatsheet' | 'mistakes' | 'exam';
  selectedUnitId: number;
  onSelectTab: (tab: 'curriculum' | 'cheatsheet' | 'mistakes' | 'exam') => void;
  onOpenExam: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, selectedUnitId, onSelectTab, onOpenExam }) => {
  const { progress, updateSettings, resetProgressData } = useProgress();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeMistakeCount = progress.mistakes.filter(
    (mistake) => mistake.reviewStatus !== 'mastered',
  ).length;

  const toggleSound = () => {
    updateSettings({ soundEffects: !progress.settings.soundEffects });
  };

  const handleResetConfirm = () => {
    resetProgressData();
    setShowResetConfirm(false);
  };

  interface NavItem {
    id: 'curriculum' | 'cheatsheet' | 'mistakes';
    label: string;
    icon: typeof BookOpen;
    badge?: number;
  }

  const navItems: NavItem[] = [
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'cheatsheet', label: 'Cheat Sheet', icon: FileText },
    { 
      id: 'mistakes', 
      label: 'Mistakes Notebook', 
      icon: AlertCircle, 
      badge: activeMistakeCount > 0 ? activeMistakeCount : undefined
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand / Logo */}
            <button
              type="button"
              className="flex min-w-0 items-center gap-2 sm:gap-3 cursor-pointer select-none text-left"
              onClick={() => onSelectTab('curriculum')}
              aria-label="Go to curriculum home"
            >
              <img
                src="/claro-logo.png"
                alt=""
                width="40"
                height="40"
                className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 object-contain"
                aria-hidden="true"
                draggable="false"
              />
              <div className="min-w-0">
                <span className="block font-extrabold text-xl leading-none tracking-tight text-slate-900">
                  ¡Claro!
                </span>
                <span className="mt-1 block w-fit rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold leading-none text-amber-800">
                  Spanish Grammar
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-700 shadow-xs' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.badge !== undefined && (
                      <span className="ml-0.5 px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-rose-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <button
                onClick={onOpenExam}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Unit {selectedUnitId} Checkpoint</span>
              </button>
            </nav>

            {/* Right Side Stats & Actions */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
              
              {/* Streak Counter */}
              <div 
                className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl bg-orange-50 text-orange-700 border border-orange-200/60 text-xs font-bold"
                title={`${progress.streakDays} Day Streak!`}
              >
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce duration-1000" />
                <span>{progress.streakDays}d</span>
              </div>

              {/* XP Counter */}
              <div 
                className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/60 text-xs font-bold"
                title={`${progress.xp} Total Experience Points`}
              >
                <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" />
                <span>{progress.xp} XP</span>
              </div>

              {/* Sound Effects Toggle */}
              <button
                onClick={toggleSound}
                className={`hidden md:inline-flex p-2 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                  progress.settings.soundEffects 
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200' 
                    : 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100'
                }`}
                title={progress.settings.soundEffects ? 'Sound FX On' : 'Sound FX Muted'}
                aria-label="Toggle sound effects"
                aria-pressed={progress.settings.soundEffects}
              >
                {progress.settings.soundEffects ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              {/* Reset Progress Action */}
              <button
                onClick={() => setShowResetConfirm(true)}
                className="hidden md:inline-flex p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Reset Course Progress"
                aria-label="Reset progress"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 md:hidden text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 cursor-pointer"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
            <div className="mb-2 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" aria-hidden="true" />
                {progress.xp} XP
              </span>
              <button
                type="button"
                onClick={toggleSound}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-slate-600 hover:bg-white hover:text-slate-900"
                aria-label="Toggle sound effects"
                aria-pressed={progress.settings.soundEffects}
              >
                {progress.settings.soundEffects ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{progress.settings.soundEffects ? 'Sound On' : 'Sound Off'}</span>
              </button>
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-rose-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
            <button
              onClick={() => {
                onOpenExam();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Unit {selectedUnitId} Checkpoint</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setShowResetConfirm(true);
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-rose-50 hover:text-rose-700"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Reset Course Progress</span>
            </button>
          </div>
        )}
      </header>

      {/* Safe Custom Confirm Modal for Progress Reset */}
      <ConfirmModal
        isOpen={showResetConfirm}
        title="Reset All Course Progress?"
        message="This will clear your completed lessons, test scores, earned XP, daily streak, and Mistakes Notebook. This action cannot be undone."
        confirmText="Yes, Reset Everything"
        cancelText="Keep My Progress"
        variant="danger"
        onConfirm={handleResetConfirm}
        onCancel={() => setShowResetConfirm(false)}
      />
    </>
  );
};
