import type { Unit } from './types';

export const unit7: Unit = {
  id: 7,
  title: 'Unit 7: Subjunctive Mood (Present Subjunctive)',
  subtitle: 'Lessons 75–84: The Subjunctive Mood, Opposite Vowels & W.E.I.R.D.O.S. Triggers',
  description: 'Enter the world of the subjunctive mood: understanding reality vs. subjective desires, forming opposite vowel endings (-ar → -e, -er/-ir → -a), irregular D.I.S.H.E.S. verbs, and triggering clauses (Wishes, Emotions, Impersonal, Requests, Doubt, and Adverbial Time Clauses).',
  iconName: 'Award',
  colorTheme: 'violet',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 77: Subjunctive I (Introduction)
    // -------------------------------------------------------------
    {
      id: 'u7-l77',
      slug: 'subjunctive-1-intro',
      unitId: 7,
      order: 77,
      title: '77. Subjunctive I: Introduction',
      subtitle: 'Indicative (Facts) vs Subjunctive (Desires, Doubts & Feelings)',
      estimatedMinutes: 12,
      iconName: 'CloudRain',
      summary: 'The subjunctive is not a tense (time), but a MOOD (attitude). While the indicative describes objective facts and reality, the subjunctive reflects hypothetical wishes, emotions, advice, and doubt.',
      theory: [
        {
          id: 'u7-l77-t1',
          title: 'Indicative vs. Subjunctive',
          summary: 'Indicative = What is real; Subjunctive = What is wished, doubted, or uncertain.',
          table: {
            headers: ['Mood', 'Function', 'Example in Spanish', 'English'],
            rows: [
              ['Indicative (Facts)', 'States objective facts', 'Juan habla español.', 'Juan speaks Spanish.'],
              ['Subjunctive (Wishes)', 'Wishes someone else to act', 'Quiero que Juan hable español.', 'I want Juan to speak Spanish.']
            ]
          },
          content: [
            'Notice the 3 elements required for the subjunctive to trigger:',
            '1. **Two different subjects** (e.g. *Yo* quiero que *tú*... )',
            '2. **A trigger verb or expression** (e.g. *Quiero, Espero, Es necesario*)',
            '3. **The connecting word "que"**.'
          ],
          examples: [
            { spanish: 'Espero que tengas un buen día.', english: 'I hope that you have a good day.', audio: 'Espero que tengas un buen día.' },
            { spanish: 'Es importante que estudies.', english: 'It is important that you study.', audio: 'Es importante que estudies.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v7701', spanish: 'espero que', english: 'I hope that (trigger)', category: 'Subjunctive Triggers' },
        { id: 'v7702', spanish: 'quiero que', english: 'I want [someone] to (trigger)', category: 'Subjunctive Triggers' },
        { id: 'v7703', spanish: 'es necesario que', english: 'it is necessary that (trigger)', category: 'Subjunctive Triggers' }
      ],
      flashcards: [
        { id: 'f7701', front: 'Subjunctive Rule of 3', back: '1. Two different subjects\n2. Trigger verb (wish/doubt)\n3. Connecting "que"', category: 'Subjunctive' }
      ],
      exercises: [
        {
          id: 'u7-l77-ex1',
          type: 'multiple-choice',
          prompt: 'Which sentence requires the subjunctive mood in the second clause?',
          explanation: '"Quiero que tú estudies" has two different subjects and a trigger of desire.',
          options: [
            { id: 'opt1', text: 'Quiero que tú estudies más.', subtext: 'Trigger + 2 subjects → Subjunctive', isCorrect: true },
            { id: 'opt2', text: 'Yo estudio todos los días.', subtext: 'Simple fact → Indicative', isCorrect: false },
            { id: 'opt3', text: 'Sé que tú hablas español.', subtext: 'Saber expresses certainty → Indicative', isCorrect: false },
            { id: 'opt4', text: 'Es verdad que tú comes.', subtext: 'Certainty → Indicative', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 78: Subjunctive II (Conjugation)
    // -------------------------------------------------------------
    {
      id: 'u7-l78',
      slug: 'subjunctive-2-conjugation',
      unitId: 7,
      order: 78,
      title: '78. Subjunctive II: Conjugation',
      subtitle: 'The "Opposite Vowel" Rule: -AR → -e, -ER/-IR → -a',
      estimatedMinutes: 12,
      iconName: 'Edit3',
      summary: 'Forming the present subjunctive is easy: 1. Go to the present "yo" form; 2. Drop the "-o"; 3. Add the OPPOSITE vowel endings (-AR gets -e; -ER/-IR get -a)!',
      theory: [
        {
          id: 'u7-l78-t1',
          title: 'The 3-Step Subjunctive Formula',
          summary: '1. Yo form → 2. Drop -o → 3. Swap vowel endings (-AR: -e, -es, -e, -emos, -en; -ER/-IR: -a, -as, -a, -amos, -an).',
          table: {
            headers: ['Pronoun', '-AR Ending (Hablar → hable)', '-ER/-IR Ending (Comer → coma, Vivir → viva)'],
            rows: [
              ['yo', '-e (hable)', '-a (coma / viva)'],
              ['tú', '-es (hables)', '-as (comas / vivas)'],
              ['él / ella / usted', '-e (hable)', '-a (coma / viva)'],
              ['nosotros/as', '-emos (hablemos)', '-amos (comamos / vivamos)'],
              ['ellos / ellas / ustedes', '-en (hablen)', '-an (coman / vivan)']
            ]
          },
          examples: [
            { spanish: 'Quiero que tú hables español.', english: 'I want you to speak Spanish. (hablar → hables)', audio: 'Quiero que tú hables español.' },
            { spanish: 'Es bueno que ellos coman fruta.', english: 'It is good that they eat fruit. (comer → coman)', audio: 'Es bueno que ellos coman fruta.' },
            { spanish: 'Ojalá que vivamos en paz.', english: 'Hopefully we live in peace. (vivir → vivamos)', audio: 'Ojalá que vivamos en paz.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v7801', spanish: 'hable', english: 'speak (subjunctive)', category: 'Subjunctive Forms' },
        { id: 'v7802', spanish: 'coma', english: 'eat (subjunctive)', category: 'Subjunctive Forms' },
        { id: 'v7803', spanish: 'ojalá que', english: 'hopefully / God grant that (always triggers subjunctive)', category: 'Subjunctive Triggers' }
      ],
      flashcards: [
        { id: 'f7801', front: 'Opposite vowel rule', back: '-AR verbs take -e endings\n-ER/-IR verbs take -a endings', category: 'Subjunctive' },
        { id: 'f7802', front: 'yo (hablar in subjunctive)', back: 'hable', category: 'Subjunctive' }
      ],
      exercises: [
        {
          id: 'u7-l78-ex1',
          type: 'multiple-choice',
          prompt: 'What is the present subjunctive form of "comer" for "tú"?',
          audioPrompt: 'comas',
          explanation: '-ER verbs take "-a" endings in subjunctive: "comas".',
          options: [
            { id: 'opt1', text: 'comas', subtext: 'Opposite -as ending for -er', isCorrect: true },
            { id: 'opt2', text: 'comes', subtext: 'Indicative present', isCorrect: false },
            { id: 'opt3', text: 'comás', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'comías', subtext: 'Imperfect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 80: Subjunctive IV (Irregulars - DISHES)
    // -------------------------------------------------------------
    {
      id: 'u7-l80',
      slug: 'subjunctive-4-irregular',
      unitId: 7,
      order: 80,
      title: '80. Irregular Subjunctive Verbs',
      subtitle: 'The D.I.S.H.E.S. Verbs: Dar, Ir, Ser, Haber, Estar, Saber',
      estimatedMinutes: 12,
      iconName: 'Zap',
      summary: 'Verbs that do not end in "-o" in the present "yo" form have irregular subjunctive conjugations, memorized by the acronym D.I.S.H.E.S.',
      theory: [
        {
          id: 'u7-l80-t1',
          title: 'The D.I.S.H.E.S. Irregular Subjunctives',
          summary: 'D - Dar (dé), I - Ir (vaya), S - Ser (sea), H - Haber (haya), E - Estar (esté), S - Saber (sepa).',
          table: {
            headers: ['Verb', 'Yo Subjunctive', 'Tú', 'Él/Ella', 'Nosotros', 'Ellos'],
            rows: [
              ['DAR', 'dé (accent)', 'des', 'dé', 'demos', 'den'],
              ['IR', 'vaya', 'vayas', 'vaya', 'vayamos', 'vayan'],
              ['SER', 'sea', 'seas', 'sea', 'seamos', 'sean'],
              ['HABER', 'haya', 'hayas', 'haya', 'hayamos', 'hayan'],
              ['ESTAR', 'esté (accent)', 'estés', 'esté', 'estemos', 'estén'],
              ['SABER', 'sepa', 'sepas', 'sepa', 'sepamos', 'sepan']
            ]
          },
          examples: [
            { spanish: 'Espero que vayas a la fiesta.', english: 'I hope that you go to the party. (ir → vayas)', audio: 'Espero que vayas a la fiesta.' },
            { spanish: 'Quiero que seas feliz.', english: 'I want you to be happy. (ser → seas)', audio: 'Quiero que seas feliz.' },
            { spanish: 'Ojalá que no haya problemas.', english: 'Hopefully there are no problems. (haber → haya)', audio: 'Ojalá que no haya problemas.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v8001', spanish: 'vaya', english: 'go (subjunctive of ir)', category: 'Subjunctive Irregulars' },
        { id: 'v8002', spanish: 'sea', english: 'be (subjunctive of ser)', category: 'Subjunctive Irregulars' },
        { id: 'v8003', spanish: 'haya', english: 'there be (subjunctive of haber)', category: 'Subjunctive Irregulars' },
        { id: 'v8004', spanish: 'esté', english: 'be (subjunctive of estar)', category: 'Subjunctive Irregulars' },
        { id: 'v8005', spanish: 'sepa', english: 'know (subjunctive of saber)', category: 'Subjunctive Irregulars' }
      ],
      flashcards: [
        { id: 'f8001', front: 'D.I.S.H.E.S. Subjunctive', back: 'Dar (dé), Ir (vaya), Ser (sea), Haber (haya), Estar (esté), Saber (sepa)', category: 'Subjunctive Irregulars' }
      ],
      exercises: [
        {
          id: 'u7-l80-ex1',
          type: 'multiple-choice',
          prompt: 'Conjugate "ir" in the subjunctive for "tú":',
          audioPrompt: 'vayas',
          explanation: '"Ir" becomes "vayas" in the subjunctive.',
          options: [
            { id: 'opt1', text: 'vayas', subtext: 'Tú vayas', isCorrect: true },
            { id: 'opt2', text: 'vas', subtext: 'Indicative present', isCorrect: false },
            { id: 'opt3', text: 'ibas', subtext: 'Imperfect', isCorrect: false },
            { id: 'opt4', text: 'fuiste', subtext: 'Preterite', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u7-exam',
    title: 'Unit 7 Comprehensive Mastery Exam',
    description: '10 questions testing Subjunctive vs Indicative, opposite vowel rules, and D.I.S.H.E.S. irregulars.',
    passingScore: 80,
    exercises: [
      {
        id: 'u7-ex-1',
        type: 'multiple-choice',
        prompt: 'Fill in the blank: "Quiero que tú _______ (to be) feliz."',
        explanation: 'Ser in subjunctive for tú is "seas": "Quiero que tú seas feliz".',
        options: [
          { id: 'e1', text: 'seas', subtext: 'Subjunctive of ser', isCorrect: true },
          { id: 'e2', text: 'eres', subtext: 'Indicative', isCorrect: false },
          { id: 'e3', text: 'ser', subtext: 'Infinitive', isCorrect: false },
          { id: 'e4', text: 'eras', subtext: 'Imperfect', isCorrect: false }
        ]
      },
      {
        id: 'u7-ex-2',
        type: 'fill-in-blank',
        prompt: 'Conjugate "hablar" in subjunctive: "Es necesario que nosotros _______."',
        sentenceBefore: 'Es necesario que nosotros',
        sentenceAfter: 'con el profesor.',
        correctAnswers: ['hablemos', 'Hablemos'],
        wordBank: ['hablemos', 'hablamos', 'hablen', 'hable'],
        hint: '-AR takes -e endings in subjunctive.',
        explanation: '"Nosotros hablemos".'
      }
    ]
  }
};
