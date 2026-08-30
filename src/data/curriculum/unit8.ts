import type { Unit } from './types';

export const unit8: Unit = {
  id: 8,
  title: 'Unit 8: Relative Pronouns & Commands (Mandatos)',
  subtitle: 'Lessons 85–89: Que/Quien, Formal (Usted) & Informal (Tú) Commands',
  description: 'Master relative clauses (que, quien, lo que) and imperative commands: Formal Usted/Ustedes commands, Affirmative Tú commands, Negative Tú commands, and object pronoun attachment rules.',
  iconName: 'CheckSquare',
  colorTheme: 'cyan',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 85: Relative Pronouns: Que
    // -------------------------------------------------------------
    {
      id: 'u8-l85',
      slug: 'relative-pronouns-que',
      unitId: 8,
      order: 85,
      title: '85. Relative Pronouns: Que',
      subtitle: 'Connecting Sentences: "That", "Which", "Who"',
      estimatedMinutes: 9,
      iconName: 'Link',
      summary: 'Learn how to combine two sentences using the most versatile relative pronoun in Spanish: "que" (that / which / who). Note: unlike English, "que" can NEVER be omitted in Spanish!',
      theory: [
        {
          id: 'u8-l85-t1',
          title: 'The Infallible "Que" Connector',
          summary: '"Que" refers to both people and things. It cannot be omitted.',
          content: [
            'In English, you can say "The book [that] I read" (omitting "that"). In Spanish, you MUST say "El libro **que** leo".',
            '"Que" does NOT have an accent mark when used as a relative pronoun (unlike the question word "¿qué?").'
          ],
          examples: [
            { spanish: 'El hombre que habla es mi padre.', english: 'The man who is speaking is my father.', audio: 'El hombre que habla es mi padre.' },
            { spanish: 'El carro que compré es rojo.', english: 'The car that I bought is red.', audio: 'El carro que compré es rojo.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v8501', spanish: 'que', english: 'that / which / who (relative pronoun)', category: 'Relative Pronouns' }
      ],
      flashcards: [
        { id: 'f8501', front: 'Can "que" be dropped in Spanish?', back: 'NO! Never omit "que" in relative clauses.', category: 'Relative Pronouns' }
      ],
      exercises: [
        {
          id: 'u8-l85-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "The house that I like is white"',
          explanation: '"La casa que me gusta es blanca".',
          options: [
            { id: 'opt1', text: 'La casa que me gusta es blanca.', subtext: 'Correct use of relative que', isCorrect: true },
            { id: 'opt2', text: 'La casa me gusta es blanca.', subtext: 'Missing mandatory que', isCorrect: false },
            { id: 'opt3', text: 'La casa qué me gusta es blanca.', subtext: 'Relative que has no accent', isCorrect: false },
            { id: 'opt4', text: 'La casa quien me gusta es blanca.', subtext: 'Quien is for people only', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 87: Formal Commands (Usted / Ustedes)
    // -------------------------------------------------------------
    {
      id: 'u8-l87',
      slug: 'formal-commands',
      unitId: 8,
      order: 87,
      title: '87. Formal Commands (Ud. / Uds.)',
      subtitle: 'Polite Imperatives: Hable, Coma, Pasen, Tomen',
      estimatedMinutes: 10,
      iconName: 'CheckSquare',
      summary: 'Formal commands (giving polite instructions to elders, bosses, or customers) use the exact same opposite vowel endings as the present subjunctive: -AR → -e/-en; -ER/-IR → -a/-an.',
      theory: [
        {
          id: 'u8-l87-t1',
          title: 'How to Form Polite Commands',
          summary: 'Use subjunctive endings: hable (Ud.), hablen (Uds.), coma (Ud.), coman (Uds.).',
          table: {
            headers: ['Infinitive', 'Usted Command (Polite Singular)', 'Ustedes Command (Polite Plural)'],
            rows: [
              ['hablar (to speak)', '¡Hable! (Speak!)', '¡Hablen! (Speak all of you!)'],
              ['comer (to eat)', '¡Coma! (Eat!)', '¡Coman!'],
              ['escribir (to write)', '¡Escriba! (Write!)', '¡Escriban!'],
              ['pasar (to come in)', '¡Pase! (Come in!)', '¡Pasen!']
            ]
          },
          examples: [
            { spanish: '¡Pase, por favor!', english: 'Come in, please! (pasar → pase)', audio: '¡Pase, por favor!' },
            { spanish: '¡Coman las verduras!', english: 'Eat the vegetables! (comer → coman)', audio: '¡Coman las verduras!' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v8701', spanish: '¡pase!', english: 'come in! (Ud. command)', category: 'Commands' },
        { id: 'v8702', spanish: '¡hable!', english: 'speak! (Ud. command)', category: 'Commands' },
        { id: 'v8703', spanish: 'por favor', english: 'please', category: 'Courtesy' }
      ],
      flashcards: [
        { id: 'f8701', front: 'Come in, please! (formal Ud.)', back: '¡Pase, por favor!', category: 'Formal Commands' }
      ],
      exercises: [
        {
          id: 'u8-l87-ex1',
          type: 'multiple-choice',
          prompt: 'How do you politely tell a customer "Please sign here" (firmar - to sign)?',
          explanation: '-AR verb takes "-e" for Ud.: "Firme aquí, por favor".',
          options: [
            { id: 'opt1', text: 'Firme aquí, por favor.', subtext: 'Correct polite Ud. command', isCorrect: true },
            { id: 'opt2', text: 'Firma aquí, por favor.', subtext: 'Informal tú command', isCorrect: false },
            { id: 'opt3', text: 'Firmar aquí, por favor.', subtext: 'Infinitive', isCorrect: false },
            { id: 'opt4', text: 'Firmo aquí, por favor.', subtext: 'Yo form', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 88: Informal "Tú" Commands
    // -------------------------------------------------------------
    {
      id: 'u8-l88',
      slug: 'informal-tu-commands',
      unitId: 8,
      order: 88,
      title: '88. Informal "Tú" Commands',
      subtitle: 'Affirmative Commands (3rd Person Form) & The 8 Irregulars (Vin Diesel)',
      estimatedMinutes: 11,
      iconName: 'CheckSquare',
      summary: 'To tell a friend to do something, use the 3rd person singular present indicative form (habla, come, vive). Master the 8 famous irregulars: ven, di, sal, haz, ten, ve, pon, sé (mnemonic: "Vin Diesel Has Ten Weapons").',
      theory: [
        {
          id: 'u8-l88-t1',
          title: 'Affirmative Tú Commands & The 8 Irregulars',
          summary: 'Regular = 3rd person indicative (habla, come). 8 Irregulars = ven, di, sal, haz, ten, ve, pon, sé.',
          table: {
            headers: ['Infinitive', 'Affirmative Tú Command', 'English Meaning'],
            rows: [
              ['venir', '¡Ven!', 'Come!'],
              ['decir', '¡Di!', 'Say / Tell!'],
              ['salir', '¡Sal!', 'Leave / Go out!'],
              ['hacer', '¡Haz!', 'Do / Make!'],
              ['tener', '¡Ten!', 'Have / Hold!'],
              ['ir', '¡Ve!', 'Go!'],
              ['poner', '¡Pon!', 'Put / Set!'],
              ['ser', '¡Sé!', 'Be!']
            ]
          },
          examples: [
            { spanish: '¡Habla más despacio!', english: 'Speak slower! (hablar → habla)', audio: '¡Habla más despacio!' },
            { spanish: '¡Haz tu tarea!', english: 'Do your homework! (hacer → haz)', audio: '¡Haz tu tarea!' },
            { spanish: '¡Ten cuidado!', english: 'Be careful! (tener → ten)', audio: '¡Ten cuidado!' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v8801', spanish: '¡haz!', english: 'do / make! (tú command of hacer)', category: 'Tú Commands' },
        { id: 'v8802', spanish: '¡ven!', english: 'come! (tú command of venir)', category: 'Tú Commands' },
        { id: 'v8803', spanish: '¡ten cuidado!', english: 'be careful!', category: 'Idioms' }
      ],
      flashcards: [
        { id: 'f8801', front: '8 Irregular Tú Commands', back: 'Ven, Di, Sal, Haz, Ten, Ve, Pon, Sé\n("Vin Diesel Has Ten Weapons")', category: 'Tú Commands' }
      ],
      exercises: [
        {
          id: 'u8-l88-ex1',
          type: 'multiple-choice',
          prompt: 'What is the informal affirmative command for "hacer" (to do)?',
          audioPrompt: 'haz',
          explanation: '"Hacer" has the irregular affirmative tú command "haz".',
          options: [
            { id: 'opt1', text: 'haz', subtext: 'Irregular command', isCorrect: true },
            { id: 'opt2', text: 'hace', subtext: 'Regular indicative', isCorrect: false },
            { id: 'opt3', text: 'haga', subtext: 'Formal Ud. command', isCorrect: false },
            { id: 'opt4', text: 'haces', subtext: 'Tú indicative', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 89: Negative "Tú" Commands
    // -------------------------------------------------------------
    {
      id: 'u8-l89',
      slug: 'negative-tu-commands',
      unitId: 8,
      order: 89,
      title: '89. Negative "Tú" Commands',
      subtitle: 'Telling Someone NOT to Do Something: "No" + Subjunctive Form',
      estimatedMinutes: 10,
      iconName: 'Slash',
      summary: 'While affirmative tú commands use the indicative, negative tú commands ("Don\'t do that!") switch to the present SUBJUNCTIVE: No hables, No comas, No vayas, No hagas.',
      theory: [
        {
          id: 'u8-l89-t1',
          title: 'The Negative Command Rule',
          summary: 'No + [tú form of present subjunctive].',
          table: {
            headers: ['Infinitive', 'Affirmative Command (Do it!)', 'Negative Command (Don\'t do it!)'],
            rows: [
              ['hablar', '¡Habla! (Speak!)', '¡No hables! (Don\'t speak!)'],
              ['comer', '¡Come! (Eat!)', '¡No comas! (Don\'t eat!)'],
              ['hacer', '¡Haz! (Do it!)', '¡No hagas! (Don\'t do it!)'],
              ['ir', '¡Ve! (Go!)', '¡No vayas! (Don\'t go!)']
            ]
          },
          examples: [
            { spanish: '¡No hables tan rápido!', english: 'Don\'t speak so fast!', audio: '¡No hables tan rápido!' },
            { spanish: '¡No vayas allí solo!', english: 'Don\'t go there alone!', audio: '¡No vayas allí solo!' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v8901', spanish: '¡no hables!', english: 'don\'t speak!', category: 'Negative Commands' },
        { id: 'v8902', spanish: '¡no hagas!', english: 'don\'t do!', category: 'Negative Commands' }
      ],
      flashcards: [
        { id: 'f8901', front: 'Speak! vs Don\'t speak! (tú)', back: '¡Habla! vs ¡No hables!', category: 'Commands' },
        { id: 'f8902', front: 'Do it! vs Don\'t do it! (tú)', back: '¡Haz! vs ¡No hagas!', category: 'Commands' }
      ],
      exercises: [
        {
          id: 'u8-l89-ex1',
          type: 'multiple-choice',
          prompt: 'How do you tell a friend "Don\'t eat that"?',
          explanation: 'Negative tú commands use the subjunctive: "No comas eso".',
          options: [
            { id: 'opt1', text: '¡No comas eso!', subtext: 'Correct negative subjunctive command', isCorrect: true },
            { id: 'opt2', text: '¡No come eso!', subtext: 'Cannot use affirmative form with no', isCorrect: false },
            { id: 'opt3', text: '¡No comes eso!', subtext: 'Indicative statement, not command', isCorrect: false },
            { id: 'opt4', text: '¡No coma eso!', subtext: 'Formal Ud. form', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u8-exam',
    title: 'Unit 8 Comprehensive Mastery Exam',
    description: '10 questions testing Relative Pronouns, Formal Commands, Affirmative Tú Commands, and Negative Commands.',
    passingScore: 80,
    exercises: [
      {
        id: 'u8-ex-1',
        type: 'multiple-choice',
        prompt: 'What is the affirmative tú command for "venir" (to come)?',
        explanation: 'Ven is the irregular affirmative command.',
        options: [
          { id: 'e1', text: '¡Ven!', subtext: 'Irregular affirmative tú command', isCorrect: true },
          { id: 'e2', text: '¡Viene!', subtext: 'Indicative', isCorrect: false },
          { id: 'e3', text: '¡Venga!', subtext: 'Formal Ud. command', isCorrect: false },
          { id: 'e4', text: '¡Veni!', subtext: 'Incorrect', isCorrect: false }
        ]
      }
    ]
  }
};
