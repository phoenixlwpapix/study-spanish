import React, { useCallback, useState, useEffect } from 'react';
import type { Exercise } from '../../types/curriculum';
import { ProgressBar } from '../common/ProgressBar';
import { MultipleChoice } from '../exercises/MultipleChoice';
import { FillInBlank } from '../exercises/FillInBlank';
import { SentenceBuilder } from '../exercises/SentenceBuilder';
import { MatchingPairs } from '../exercises/MatchingPairs';
import { ErrorCorrection } from '../exercises/ErrorCorrection';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Zap } from 'lucide-react';
import { useProgress } from '../../context/useProgress';
import { FormattedText } from '../common/FormattedText';
import { soundEffects } from '../../utils/soundEffects';

type ExerciseMode = 'lesson' | 'exam';

interface ExerciseRunnerProps {
  exercises: Exercise[];
  lessonId: string;
  unitId: number;
  onFinishLesson: (score: number, maxScore: number) => void;
  onGoToNextLesson?: () => void;
  hasNextLesson?: boolean;
  mode?: ExerciseMode;
  passingScore?: number;
}

export const ExerciseRunner: React.FC<ExerciseRunnerProps> = ({
  exercises,
  lessonId,
  unitId,
  onFinishLesson,
  onGoToNextLesson,
  hasNextLesson = false,
  mode = 'lesson',
  passingScore = 70,
}) => {
  const { recordMistake, completeLesson } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Exercise states
  const [mcSelectedId, setMcSelectedId] = useState<string | null>(null);
  const [fibText, setFibText] = useState('');
  const [sbTokens, setSbTokens] = useState<string[]>([]);
  const [mpMatchedIds, setMpMatchedIds] = useState<string[]>([]);
  const [mpCompleted, setMpCompleted] = useState(false);
  const [ecSelectedOpt, setEcSelectedOpt] = useState<string | null>(null);

  const currentExercise = exercises[currentIndex];
  const isLastQuestion = currentIndex === exercises.length - 1;

  // Reset exercise state when moving to next question
  const resetQuestionState = useCallback(() => {
    setIsSubmitted(false);
    setIsCurrentCorrect(false);
    setMcSelectedId(null);
    setFibText('');
    setSbTokens([]);
    setMpMatchedIds([]);
    setMpCompleted(false);
    setEcSelectedOpt(null);
  }, []);

  const isReadyToSubmit = useCallback(() => {
    if (!currentExercise) return false;
    switch (currentExercise.type) {
      case 'multiple-choice':
        return mcSelectedId !== null;
      case 'fill-in-blank':
        return fibText.trim().length > 0;
      case 'sentence-builder':
        return sbTokens.length > 0;
      case 'matching-pairs':
        return mpCompleted || mpMatchedIds.length === currentExercise.pairs.length;
      case 'error-identification':
        return ecSelectedOpt !== null;
      default:
        return false;
    }
  }, [currentExercise, ecSelectedOpt, fibText, mcSelectedId, mpCompleted, mpMatchedIds.length, sbTokens.length]);

  const handleSubmitAnswer = useCallback(() => {
    if (isSubmitted || !isReadyToSubmit()) return;

    let correct = false;
    let userAns = '';
    let correctAns = '';

    switch (currentExercise.type) {
      case 'multiple-choice': {
        const selected = currentExercise.options.find(o => o.id === mcSelectedId);
        const correctOpt = currentExercise.options.find(o => o.isCorrect);
        correct = selected?.isCorrect || false;
        userAns = selected?.text || '';
        correctAns = correctOpt?.text || '';
        break;
      }
      case 'fill-in-blank': {
        userAns = fibText.trim();
        correctAns = currentExercise.correctAnswers.join(' / ');
        correct = currentExercise.correctAnswers.some(
          ans => ans.trim().toLowerCase() === userAns.toLowerCase()
        );
        break;
      }
      case 'sentence-builder': {
        userAns = sbTokens.join(' ');
        correctAns = currentExercise.correctTokens.join(' ');
        correct = userAns === correctAns;
        break;
      }
      case 'matching-pairs': {
        correct = true; // by definition, user finished matching all
        userAns = 'All pairs matched';
        correctAns = 'Matched pairs';
        break;
      }
      case 'error-identification': {
        userAns = ecSelectedOpt || '';
        correctAns = currentExercise.correctOption;
        correct = userAns === correctAns;
        break;
      }
    }

    setIsSubmitted(true);
    setIsCurrentCorrect(correct);

    if (correct) {
      soundEffects.playSuccess();
      setScore(prev => prev + 1);
    } else {
      soundEffects.playError();
      // Record mistake in user's notebook
      recordMistake({
        exerciseId: currentExercise.id,
        lessonId,
        unitId,
        prompt: currentExercise.prompt,
        userAnswer: userAns,
        correctAnswer: correctAns,
        explanation: currentExercise.explanation
      });
    }
  }, [currentExercise, ecSelectedOpt, fibText, isReadyToSubmit, isSubmitted, lessonId, mcSelectedId, recordMistake, sbTokens, unitId]);

  const handleNextQuestion = useCallback(() => {
    if (isLastQuestion) {
      // Final score is already accumulated accurately in `score`
      const finalScore = Math.min(exercises.length, Math.max(0, score));
      if (mode === 'lesson') {
        completeLesson(lessonId, finalScore, exercises.length);
      }
      onFinishLesson(finalScore, exercises.length);
      setIsFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      resetQuestionState();
    }
  }, [completeLesson, exercises.length, isLastQuestion, lessonId, mode, onFinishLesson, resetQuestionState, score]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    resetQuestionState();
  };

  // Keyboard shortcut listener (Enter to check/next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (!isSubmitted && isReadyToSubmit()) {
          handleSubmitAnswer();
        } else if (isSubmitted) {
          handleNextQuestion();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextQuestion, handleSubmitAnswer, isReadyToSubmit, isSubmitted]);

  if (isFinished) {
    const safeScore = Math.min(exercises.length, Math.max(0, score));
    const percentage = exercises.length > 0 ? Math.min(100, Math.max(0, Math.round((safeScore / exercises.length) * 100))) : 100;
    const isPassed = percentage >= passingScore;
    const earnedXp = mode === 'exam'
      ? (isPassed ? 150 : 50)
      : Math.max(20, Math.round((percentage / 100) * 80) + 20);

    return (
      <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center space-y-6 animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
          <Award className="w-10 h-10" />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isPassed ? '¡Excelente Trabajo!' : 'Good Effort! Keep Practicing!'}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            {isPassed 
              ? 'You have successfully completed this interactive lesson and mastered the key concepts.'
              : 'Review your mistakes and give it another try to earn full mastery score!'}
          </p>
        </div>

        {/* Score & XP Stats */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Score</span>
            <span className="text-2xl sm:text-3xl font-black text-slate-900">
              {score} / {exercises.length}
            </span>
            <span className={`text-xs font-bold block mt-0.5 ${isPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
              ({percentage}%)
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">XP Earned</span>
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-black text-indigo-600">
              <Zap className="w-6 h-6 fill-indigo-600" />
              <span>+{earnedXp}</span>
            </div>
            <span className="text-xs font-semibold text-indigo-500 block mt-0.5">Experience</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {hasNextLesson && onGoToNextLesson && (
            <button
              onClick={onGoToNextLesson}
              className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Next Lesson</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={handleRestart}
            className="w-full py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Practice Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header with Progress Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="flex-1">
          <ProgressBar 
            current={currentIndex + 1} 
            total={exercises.length} 
            size="md" 
            color="emerald" 
          />
        </div>
        <span className="text-xs font-bold text-slate-500 shrink-0">
          Question {currentIndex + 1} of {exercises.length}
        </span>
      </div>

      {/* Exercise Content Box */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        {currentExercise.type === 'multiple-choice' && (
          <MultipleChoice
            key={currentExercise.id}
            exercise={currentExercise}
            selectedOptionId={mcSelectedId}
            onSelectOption={setMcSelectedId}
            isSubmitted={isSubmitted}
          />
        )}

        {currentExercise.type === 'fill-in-blank' && (
          <FillInBlank
            key={currentExercise.id}
            exercise={currentExercise}
            value={fibText}
            onChange={setFibText}
            isSubmitted={isSubmitted}
          />
        )}

        {currentExercise.type === 'sentence-builder' && (
          <SentenceBuilder
            key={currentExercise.id}
            exercise={currentExercise}
            selectedTokens={sbTokens}
            onUpdateTokens={setSbTokens}
            isSubmitted={isSubmitted}
          />
        )}

        {currentExercise.type === 'matching-pairs' && (
          <MatchingPairs
            key={currentExercise.id}
            exercise={currentExercise}
            matchedPairIds={mpMatchedIds}
            onUpdateMatchedIds={setMpMatchedIds}
            onComplete={(completed) => {
              setMpCompleted(completed);
            }}
            isSubmitted={isSubmitted}
          />
        )}

        {currentExercise.type === 'error-identification' && (
          <ErrorCorrection
            key={currentExercise.id}
            exercise={currentExercise}
            selectedOption={ecSelectedOpt}
            onSelectOption={setEcSelectedOpt}
            isSubmitted={isSubmitted}
          />
        )}
      </div>

      {/* Bottom Feedback Banner & Action Bar */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className={`p-5 rounded-2xl border-2 transition-colors duration-300 ${
          isSubmitted
            ? isCurrentCorrect
              ? 'bg-emerald-50 border-emerald-300'
              : 'bg-rose-50 border-rose-300'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Feedback message and explanation */}
          <div className="flex-1">
            {isSubmitted ? (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      <span className="font-extrabold text-lg text-emerald-900">
                        ¡Correcto! Well done!
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />
                      <span className="font-extrabold text-lg text-rose-900">
                        Not quite right
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed pl-8">
                  <FormattedText text={currentExercise.explanation} />
                </p>
              </div>
            ) : (
              <div className="text-xs font-semibold text-slate-500">
                Press <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-mono">Enter ↵</span> to submit
              </div>
            )}
          </div>

          {/* Action button (Check or Next) */}
          <div className="shrink-0 flex items-center justify-end">
            {!isSubmitted ? (
              <button
                type="button"
                onClick={handleSubmitAnswer}
                disabled={!isReadyToSubmit()}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className={`w-full sm:w-auto px-8 py-3 rounded-xl text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  isCurrentCorrect
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                    : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20'
                }`}
              >
                <span>{isLastQuestion ? 'View Results' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
