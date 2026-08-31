import type { Unit } from './types';

export const unit6: Unit = {
  id: 6,
  title: 'Unit 6: Preterite vs. Imperfect (Past Tenses)',
  subtitle: '6 selected lessons from topics 62–74: Preterite and imperfect essentials',
  description: 'A condensed introduction to Spanish past-tense storytelling: preterite for completed events, imperfect for background and habits, regular endings, and high-frequency irregular preterite stems.',
  iconName: 'History',
  colorTheme: 'red',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 62: Pret. vs Imp. I
    // -------------------------------------------------------------
    {
      id: 'u6-l62',
      slug: 'pret-vs-imp-1',
      unitId: 6,
      order: 62,
      title: '62. Pret. vs Imp. I',
      subtitle: 'The Core Concept: Completed Events vs Background Continuous',
      estimatedMinutes: 12,
      iconName: 'History',
      summary: 'Spanish uses two distinct past tenses: the Preterite (for actions with a clear beginning and end) and the Imperfect (for habitual past routines, descriptions, age, time, and ongoing background scenes).',
      theory: [
        {
          id: 'u6-l62-t1',
          title: 'The Golden Difference: Movie Plot vs Stage Setting',
          summary: 'Preterite = The actions that happen (dot on timeline); Imperfect = The background setting (line / backdrop).',
          table: {
            headers: ['Dimension', 'PRETERITE (Pretérito Indefinido)', 'IMPERFECT (Pretérito Imperfecto)'],
            rows: [
              ['Nature of Action', 'Completed, specific action with clear start/end', 'Continuous, ongoing, or habitual action'],
              ['Key Trigger Words', 'ayer (yesterday), anoche (last night), el año pasado', 'siempre (always), todos los días (every day), a menudo'],
              ['Visual Metaphor', 'A snapshot photo / dot on timeline', 'A video clip / backdrop scenery']
            ]
          },
          examples: [
            { spanish: 'Ayer compré un libro.', english: 'Yesterday I bought a book. (Completed event → PRETERITE)', audio: 'Ayer compré un libro.' },
            { spanish: 'Cuando era niño, jugaba en el parque todos los días.', english: 'When I was a boy, I used to play in the park every day. (Habitual past → IMPERFECT)', audio: 'Cuando era niño, jugaba en el parque todos los días.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6201', spanish: 'ayer', english: 'yesterday (Preterite trigger)', category: 'Time' },
        { id: 'v6202', spanish: 'anoche', english: 'last night (Preterite trigger)', category: 'Time' },
        { id: 'v6203', spanish: 'siempre', english: 'always (Imperfect trigger)', category: 'Time' }
      ],
      flashcards: [
        { id: 'f6201', front: 'Preterite vs Imperfect Metaphor', back: 'Preterite = specific event (dot)\nImperfect = ongoing scene / habit (wavy line)', category: 'Past Tenses' }
      ],
      exercises: [
        {
          id: 'u6-l62-ex1',
          type: 'multiple-choice',
          prompt: 'Which past tense is used for "I went to Spain yesterday"?',
          explanation: '"Ayer" indicates a specific completed event → Preterite (Ayer fui a España).',
          options: [
            { id: 'opt1', text: 'Preterite (Ayer fui)', subtext: 'Specific completed event', isCorrect: true },
            { id: 'opt2', text: 'Imperfect (Ayer iba)', subtext: 'Imperfect is for habits', isCorrect: false },
            { id: 'opt3', text: 'Present tense', subtext: 'Past required', isCorrect: false },
            { id: 'opt4', text: 'Subjunctive', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 63: Preterite I (-AR Verbs)
    // -------------------------------------------------------------
    {
      id: 'u6-l63',
      slug: 'preterite-1',
      unitId: 6,
      order: 63,
      title: '63. Preterite I',
      subtitle: 'Regular -AR Verbs: -é, -aste, -ó, -amos, -asteis, -aron',
      estimatedMinutes: 10,
      iconName: 'Calendar',
      summary: 'Learn the regular preterite endings for -AR verbs: hablar → hablé, hablaste, habló, hablamos, hablaron. Notice the crucial accent marks on the "yo" and "él" forms!',
      theory: [
        {
          id: 'u6-l63-t1',
          title: 'Conjugation of Regular -AR Verbs in Preterite',
          summary: 'Stem + [-é, -aste, -ó, -amos, -asteis, -aron]. Accents on -é and -ó are mandatory.',
          table: {
            headers: ['Pronoun', 'Ending', 'HABLAR (to speak)', 'ESTUDIAR (to study)'],
            rows: [
              ['yo', '-é (accent)', 'hablé (I spoke)', 'estudié (I studied)'],
              ['tú', '-aste', 'hablaste', 'estudiaste'],
              ['él / ella / usted', '-ó (accent)', 'habló (he/she spoke)', 'estudió'],
              ['nosotros/as', '-amos', 'hablamos (we spoke)', 'estudiamos'],
              ['ellos / ellas / ustedes', '-aron', 'hablaron (they spoke)', 'estudiaron']
            ]
          },
          examples: [
            { spanish: 'Yo hablé con el profesor ayer.', english: 'I spoke with the teacher yesterday.', audio: 'Yo hablé con el profesor ayer.' },
            { spanish: 'Ella estudió mucho anoche.', english: 'She studied a lot last night.', audio: 'Ella estudió mucho anoche.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6301', spanish: 'hablé', english: 'I spoke', category: 'Preterite' },
        { id: 'v6302', spanish: 'habló', english: 'he / she spoke', category: 'Preterite' }
      ],
      flashcards: [
        { id: 'f6301', front: 'yo (hablar in preterite)', back: 'hablé', category: 'Preterite' },
        { id: 'f6302', front: 'él (estudiar in preterite)', back: 'estudió', category: 'Preterite' }
      ],
      exercises: [
        {
          id: 'u6-l63-ex1',
          type: 'multiple-choice',
          prompt: 'What is the preterite form of "hablar" for "yo"?',
          audioPrompt: 'hablé',
          explanation: 'The "yo" ending for -AR preterite is "-é": "hablé".',
          options: [
            { id: 'opt1', text: 'hablé', subtext: 'Yo hablé', isCorrect: true },
            { id: 'opt2', text: 'hablo', subtext: 'Present tense', isCorrect: false },
            { id: 'opt3', text: 'habló', subtext: 'Él/Ella form', isCorrect: false },
            { id: 'opt4', text: 'hablaba', subtext: 'Imperfect form', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 64: Imperfect I (-AR Verbs)
    // -------------------------------------------------------------
    {
      id: 'u6-l64',
      slug: 'imperfect-1',
      unitId: 6,
      order: 64,
      title: '64. Imperfect I',
      subtitle: 'Regular -AR Verbs: -aba, -abas, -aba, -ábamos, -abais, -aban',
      estimatedMinutes: 10,
      iconName: 'Clock',
      summary: 'Learn the smooth, easy imperfect endings for -AR verbs: -aba, -abas, -aba, -ábamos, -aban ("used to do" / "was doing").',
      theory: [
        {
          id: 'u6-l64-t1',
          title: 'The -ABA Imperfect Conjugation',
          summary: 'Stem + [-aba, -abas, -aba, -ábamos, -abais, -aban].',
          table: {
            headers: ['Pronoun', 'Ending', 'HABLAR (used to speak / was speaking)'],
            rows: [
              ['yo', '-aba', 'hablaba (I used to speak)'],
              ['tú', '-abas', 'hablabas'],
              ['él / ella / usted', '-aba', 'hablaba'],
              ['nosotros/as', '-ábamos (accent)', 'hablábamos'],
              ['ellos / ellas / ustedes', '-aban', 'hablaban']
            ]
          },
          examples: [
            { spanish: 'De niño, yo hablaba español con mis abuelos.', english: 'As a child, I used to speak Spanish with my grandparents.', audio: 'De niño, yo hablaba español con mis abuelos.' },
            { spanish: 'Nosotros jugábamos todos los días.', english: 'We used to play every day.', audio: 'Nosotros jugábamos todos los días.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6401', spanish: 'hablaba', english: 'I / he used to speak', category: 'Imperfect' },
        { id: 'v6402', spanish: 'jugábamos', english: 'we used to play', category: 'Imperfect' }
      ],
      flashcards: [
        { id: 'f6401', front: 'yo (hablar in imperfect)', back: 'hablaba', category: 'Imperfect' }
      ],
      exercises: [
        {
          id: 'u6-l64-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "We used to talk for hours"',
          explanation: '"Nosotros hablábamos por horas" (imperfect habit).',
          options: [
            { id: 'opt1', text: 'Hablábamos por horas.', subtext: 'Correct imperfect form', isCorrect: true },
            { id: 'opt2', text: 'Hablamos ayer.', subtext: 'Preterite specific', isCorrect: false },
            { id: 'opt3', text: 'Hablaba por horas.', subtext: 'Yo/Él form', isCorrect: false },
            { id: 'opt4', text: 'Hablan por horas.', subtext: 'Present tense', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 65: Preterite II (-ER / -IR Verbs)
    // -------------------------------------------------------------
    {
      id: 'u6-l65',
      slug: 'preterite-2',
      unitId: 6,
      order: 65,
      title: '65. Preterite II',
      subtitle: 'Regular -ER & -IR Verbs: -í, -iste, -ió, -imos, -isteis, -ieron',
      estimatedMinutes: 10,
      iconName: 'Calendar',
      summary: '-ER and -IR verbs share the EXACT same preterite endings: comer → comí, comiste, comió, comimos, comieron; vivir → viví, viviste, vivió, vivimos, vivieron.',
      theory: [
        {
          id: 'u6-l65-t1',
          title: 'Conjugations of Regular -ER and -IR Preterite',
          summary: 'Both -er and -ir share identical endings: -í, -iste, -ió, -imos, -isteis, -ieron.',
          table: {
            headers: ['Pronoun', 'Ending', 'COMER (to eat)', 'VIVIR (to live)'],
            rows: [
              ['yo', '-í (accent)', 'comí (I ate)', 'viví (I lived)'],
              ['tú', '-iste', 'comiste', 'viviste'],
              ['él / ella / usted', '-ió (accent)', 'comió (he/she ate)', 'vivió'],
              ['nosotros/as', '-imos', 'comimos', 'vivimos'],
              ['ellos / ellas / ustedes', '-ieron', 'comieron', 'vivieron']
            ]
          },
          examples: [
            { spanish: 'Ayer comí una paella deliciosa.', english: 'Yesterday I ate a delicious paella.', audio: 'Ayer comí una paella deliciosa.' },
            { spanish: 'Ellos vivieron en Madrid por dos años.', english: 'They lived in Madrid for two years.', audio: 'Ellos vivieron en Madrid por dos años.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6501', spanish: 'comí', english: 'I ate', category: 'Preterite' },
        { id: 'v6502', spanish: 'comió', english: 'he / she ate', category: 'Preterite' }
      ],
      flashcards: [
        { id: 'f6501', front: 'yo (comer in preterite)', back: 'comí', category: 'Preterite' },
        { id: 'f6502', front: 'ellos (vivir in preterite)', back: 'vivieron', category: 'Preterite' }
      ],
      exercises: [
        {
          id: 'u6-l65-ex1',
          type: 'multiple-choice',
          prompt: 'What is the preterite form of "escribir" for "ella"?',
          audioPrompt: 'escribió',
          explanation: 'The 3rd person singular ending for -er/-ir in preterite is "-ió": "escribió".',
          options: [
            { id: 'opt1', text: 'escribió', subtext: 'Ella escribió', isCorrect: true },
            { id: 'opt2', text: 'escribí', subtext: 'Yo form', isCorrect: false },
            { id: 'opt3', text: 'escribe', subtext: 'Present tense', isCorrect: false },
            { id: 'opt4', text: 'escribó', subtext: '-ó is for -AR verbs only', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 66: Imperfect II (-ER / -IR & Irregulars)
    // -------------------------------------------------------------
    {
      id: 'u6-l66',
      slug: 'imperfect-2',
      unitId: 6,
      order: 66,
      title: '66. Imperfect II',
      subtitle: '-ER / -IR Endings (-ía) & The ONLY Three Irregular Imperfect Verbs (ser, ir, ver)',
      estimatedMinutes: 11,
      iconName: 'Clock',
      summary: 'Learn the -ía imperfect endings for -ER/-IR verbs, and rejoice: there are ONLY THREE irregular verbs in the ENTIRE Spanish imperfect tense (ser → era, ir → iba, ver → veía)!',
      theory: [
        {
          id: 'u6-l66-t1',
          title: 'The -ÍA Imperfect Endings & The Only 3 Irregulars',
          summary: '-ER/-IR take -ía on every form. The only irregulars are ser, ir, and ver.',
          table: {
            headers: ['Pronoun', 'COMER (-ía)', 'SER (era)', 'IR (iba)', 'VER (veía)'],
            rows: [
              ['yo', 'comía', 'era (I used to be)', 'iba (I used to go)', 'veía (I used to see)'],
              ['tú', 'comías', 'eras', 'ibas', 'veías'],
              ['él / ella / usted', 'comía', 'era', 'iba', 'veía'],
              ['nosotros/as', 'comíamos', 'éramos (accent)', 'íbamos (accent)', 'veíamos'],
              ['ellos / ellas / ustedes', 'comían', 'eran', 'iban', 'veían']
            ]
          },
          examples: [
            { spanish: 'Cuando era joven, iba a la playa cada verano.', english: 'When I was young, I used to go to the beach every summer.', audio: 'Cuando era joven, iba a la playa cada verano.' },
            { spanish: 'Nosotros vivíamos en un apartamento pequeño.', english: 'We used to live in a small apartment.', audio: 'Nosotros vivíamos en un apartamento pequeño.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6601', spanish: 'era', english: 'I / he was (imperfect of ser)', category: 'Imperfect' },
        { id: 'v6602', spanish: 'iba', english: 'I / he used to go (imperfect of ir)', category: 'Imperfect' },
        { id: 'v6603', spanish: 'veía', english: 'I / he used to see (imperfect of ver)', category: 'Imperfect' }
      ],
      flashcards: [
        { id: 'f6601', front: 'The only 3 irregulars in Imperfect', back: 'SER (era), IR (iba), VER (veía)', category: 'Imperfect Irregulars' }
      ],
      exercises: [
        {
          id: 'u6-l66-ex1',
          type: 'multiple-choice',
          prompt: 'What is the imperfect form of "ir" for "nosotros"?',
          audioPrompt: 'íbamos',
          explanation: '"Nosotros íbamos" (accent on í).',
          options: [
            { id: 'opt1', text: 'íbamos', subtext: 'Correct irregular imperfect', isCorrect: true },
            { id: 'opt2', text: 'fuimos', subtext: 'Preterite form', isCorrect: false },
            { id: 'opt3', text: 'vamos', subtext: 'Present tense', isCorrect: false },
            { id: 'opt4', text: 'iábamos', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 72: Preterite VI (Irregular Stems)
    // -------------------------------------------------------------
    {
      id: 'u6-l72',
      slug: 'preterite-6',
      unitId: 6,
      order: 72,
      title: '72. Preterite VI: Irregular Stems',
      subtitle: 'Ser/Ir (fui), Estar (estuve), Tener (tuve), Hacer (hice), Decir (dije)',
      estimatedMinutes: 12,
      iconName: 'Zap',
      summary: 'Master the core irregular preterite verbs that change their stems and take unaccented endings (-e, -iste, -o, -imos, -ieron).',
      theory: [
        {
          id: 'u6-l72-t1',
          title: 'The High-Frequency Irregular Preterites Chart',
          summary: 'Notice: Ser and Ir have identical preterite conjugations (fui, fuiste, fue...)!',
          table: {
            headers: ['Infinitive', 'Preterite Stem', 'Yo Form', 'Él/Ella Form', 'Ellos Form'],
            rows: [
              ['ser / ir', 'fui...', 'fui (I was/went)', 'fue', 'fueron'],
              ['estar', 'estuv-', 'estuve', 'estuvo', 'estuvieron'],
              ['tener', 'tuv-', 'tuve', 'tuvo', 'tuvieron'],
              ['hacer', 'hic- (hiz-)', 'hice', 'hizo (c→z)', 'hicieron'],
              ['decir', 'dij-', 'dije', 'dijo', 'dijeron (drop i)']
            ]
          },
          examples: [
            { spanish: 'Ayer fui al cine.', english: 'Yesterday I went to the cinema. (ir → fui)', audio: 'Ayer fui al cine.' },
            { spanish: 'Tuve que trabajar todo el día.', english: 'I had to work all day. (tener → tuve)', audio: 'Tuve que trabajar todo el día.' },
            { spanish: '¿Qué hiciste anoche?', english: 'What did you do last night? (hacer → hiciste)', audio: '¿Qué hiciste anoche?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v7201', spanish: 'fui', english: 'I was / I went (ser/ir)', category: 'Irregular Preterite' },
        { id: 'v7202', spanish: 'tuve', english: 'I had (tener)', category: 'Irregular Preterite' },
        { id: 'v7203', spanish: 'hice', english: 'I did / made (hacer)', category: 'Irregular Preterite' }
      ],
      flashcards: [
        { id: 'f7201', front: 'yo (ser / ir in preterite)', back: 'fui', category: 'Irregular Preterite' },
        { id: 'f7202', front: 'él (hacer in preterite)', back: 'hizo', frontSubtext: 'Notice c changes to z to keep soft sound', category: 'Irregular Preterite' }
      ],
      exercises: [
        {
          id: 'u6-l72-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "Yesterday I went to the supermarket"',
          explanation: '"Ayer fui al supermercado" (preterite of ir).',
          options: [
            { id: 'opt1', text: 'Ayer fui al supermercado.', subtext: 'Correct preterite of ir', isCorrect: true },
            { id: 'opt2', text: 'Ayer iba al supermercado.', subtext: 'Iba is imperfect', isCorrect: false },
            { id: 'opt3', text: 'Ayer estuve al supermercado.', subtext: 'Wrong verb and preposition', isCorrect: false },
            { id: 'opt4', text: 'Ayer voy al supermercado.', subtext: 'Present tense', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u6-exam',
    title: 'Unit 6 Selected Topics Checkpoint',
    description: 'A short checkpoint covering the preterite/imperfect distinction and representative irregular preterite stems.',
    passingScore: 80,
    exercises: [
      {
        id: 'u6-ex-1',
        type: 'multiple-choice',
        prompt: 'Choose the correct form: "Ayer yo _______ (to eat) paella."',
        explanation: 'Ayer indicates specific completed action → Preterite: "comí".',
        options: [
          { id: 'e1', text: 'comí', subtext: 'Preterite completed event', isCorrect: true },
          { id: 'e2', text: 'comía', subtext: 'Imperfect habit', isCorrect: false },
          { id: 'e3', text: 'como', subtext: 'Present tense', isCorrect: false },
          { id: 'e4', text: 'comió', subtext: 'Él form', isCorrect: false }
        ]
      },
      {
        id: 'u6-ex-2',
        type: 'multiple-choice',
        prompt: 'What is the "yo" form of "ser" in the imperfect tense?',
        explanation: '"Ser" in imperfect is "era" (I used to be).',
        options: [
          { id: 'e1', text: 'era', subtext: 'Imperfect of ser', isCorrect: true },
          { id: 'e2', text: 'fui', subtext: 'Preterite of ser', isCorrect: false },
          { id: 'e3', text: 'soy', subtext: 'Present tense', isCorrect: false },
          { id: 'e4', text: 'estaba', subtext: 'Imperfect of estar', isCorrect: false }
        ]
      }
    ]
  }
};
