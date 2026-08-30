export type ExerciseType = 
  | 'multiple-choice'
  | 'fill-in-blank'
  | 'sentence-builder'
  | 'matching-pairs'
  | 'error-identification';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  hint?: string;
  explanation: string; // Pedagogical explanation shown after answering
  audioPrompt?: string; // Spanish text to pronounce via TTS
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice';
  options: {
    id: string;
    text: string;
    subtext?: string;
    isCorrect: boolean;
  }[];
}

export interface FillInBlankExercise extends BaseExercise {
  type: 'fill-in-blank';
  sentenceBefore: string;
  sentenceAfter: string;
  correctAnswers: string[]; // Supports multiple valid answers (e.g. "el", "El")
  wordBank?: string[]; // Optional word bank tokens for tap-to-fill
  caseSensitive?: boolean;
}

export interface SentenceBuilderExercise extends BaseExercise {
  type: 'sentence-builder';
  targetEnglish: string;
  correctTokens: string[]; // Correct ordered tokens
  availableTokens: string[]; // Shuffled tokens + potential distractors
}

export interface MatchingPairsExercise extends BaseExercise {
  type: 'matching-pairs';
  pairs: {
    id: string;
    left: string; // Spanish side
    right: string; // English / grammatical side
  }[];
}

export interface ErrorIdentificationExercise extends BaseExercise {
  type: 'error-identification';
  incorrectSentence: string;
  errorWord: string;
  options: string[]; // Options to replace the error
  correctOption: string;
}

export type Exercise = 
  | MultipleChoiceExercise
  | FillInBlankExercise
  | SentenceBuilderExercise
  | MatchingPairsExercise
  | ErrorIdentificationExercise;

export interface GrammarRuleHighlight {
  label: string;
  description: string;
  color?: 'amber' | 'emerald' | 'indigo' | 'rose' | 'sky';
}

export interface TheoryExample {
  spanish: string;
  english: string;
  highlight?: string;
  breakdown?: string;
  audio?: string;
}

export interface TheorySection {
  id: string;
  title: string;
  summary: string;
  ruleHighlights?: GrammarRuleHighlight[];
  content?: string[]; // Paragraphs explaining the concept in English
  formula?: {
    pattern: string;
    example: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  examples: TheoryExample[];
  proTip?: string;
  watchOut?: string;
}

export interface VocabularyItem {
  id: string;
  spanish: string;
  english: string;
  gender?: 'masculine' | 'feminine' | 'neutral' | 'plural';
  category: string;
  notes?: string;
  exampleSentence?: {
    spanish: string;
    english: string;
  };
}

export interface Flashcard {
  id: string;
  front: string;
  frontSubtext?: string;
  back: string;
  backSubtext?: string;
  category: string;
  tag?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  unitId: number;
  order: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  iconName: string; // Lucide icon identifier
  summary: string;
  theory: TheorySection[];
  vocabulary: VocabularyItem[];
  flashcards: Flashcard[];
  exercises: Exercise[];
}

export interface Unit {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  colorTheme: string;
  isAvailable: boolean;
  lessons: Lesson[];
  masteryExam?: {
    id: string;
    title: string;
    description: string;
    passingScore: number; // e.g. 80%
    exercises: Exercise[];
  };
}
