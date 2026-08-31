import type { Unit } from './types';

export const unit5: Unit = {
  id: 5,
  title: 'Unit 5: Saber vs Conocer, Por vs Para & Reflexives',
  subtitle: 'Lessons 51–61: Saber/Conocer, Time, Por/Para, Reflexives & Large Numbers',
  description: 'Master tricky distinctions in Spanish: Saber vs Conocer (knowing facts vs people), telling time, Por vs Para, numbers 31–1000, demonstrative adjectives/pronouns (este, ese, aquel), and reflexive daily routines (lavarse, despertarse).',
  iconName: 'Compass',
  colorTheme: 'amber',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 51: Saber vs Conocer
    // -------------------------------------------------------------
    {
      id: 'u5-l51',
      slug: 'saber-vs-conocer',
      unitId: 5,
      order: 51,
      title: '51. Saber vs Conocer',
      subtitle: 'Facts & Skills (Saber) vs People & Places (Conocer)',
      estimatedMinutes: 11,
      iconName: 'HelpCircle',
      summary: 'Both "saber" and "conocer" translate to "to know", but they have completely different applications in Spanish.',
      theory: [
        {
          id: 'u5-l51-t1',
          title: 'Saber vs Conocer Breakdown',
          summary: 'Saber = facts, information, how to do something; Conocer = people, places, familiarity.',
          table: {
            headers: ['Verb', 'Conjugation (Yo)', 'Used For', 'Examples'],
            rows: [
              ['SABER', 'sé (accent)', 'Facts, data, skills (+ infinitive)', 'Sé hablar español / Sé la verdad'],
              ['CONOCER', 'conozco', 'People, places, art, familiarity', 'Conozco a María / Conozco Madrid']
            ]
          },
          examples: [
            { spanish: 'Yo sé dónde está la estación.', english: 'I know where the station is. (Fact → SABER)', audio: 'Yo sé dónde está la estación.' },
            { spanish: 'Yo conozco Madrid muy bien.', english: 'I know Madrid very well. (Familiar with city → CONOCER)', audio: 'Yo conozco Madrid muy bien.' },
            { spanish: '¿Conoces a mi hermano?', english: 'Do you know / have you met my brother? (Person → CONOCER)', audio: '¿Conoces a mi hermano?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5101', spanish: 'saber (sé)', english: 'to know (facts/skills)', category: 'Verbs' },
        { id: 'v5102', spanish: 'conocer (conozco)', english: 'to know / be familiar with (people/places)', category: 'Verbs' }
      ],
      flashcards: [
        { id: 'f5101', front: 'I know Maria (person)', back: 'Conozco a María', frontSubtext: 'Use CONOCER + personal a', category: 'Saber vs Conocer' },
        { id: 'f5102', front: 'I know how to swim', back: 'Sé nadar', frontSubtext: 'Skill → SABER + infinitive', category: 'Saber vs Conocer' }
      ],
      exercises: [
        {
          id: 'u5-l51-ex1',
          type: 'multiple-choice',
          prompt: 'Which verb is used for knowing how to play the guitar?',
          explanation: 'Knowing a skill uses SABER: "Sé tocar la guitarra".',
          options: [
            { id: 'opt1', text: 'Sé tocar la guitarra.', subtext: 'Skill → Saber', isCorrect: true },
            { id: 'opt2', text: 'Conozco tocar la guitarra.', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt3', text: 'Sabo tocar la guitarra.', subtext: 'Nonexistent form', isCorrect: false },
            { id: 'opt4', text: 'Tengo tocar la guitarra.', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 52: Numbers: 31–1000
    // -------------------------------------------------------------
    {
      id: 'u5-l52',
      slug: 'numbers-31-1000',
      unitId: 5,
      order: 52,
      title: '52. Numbers: 31–1000',
      subtitle: 'Tens, Hundreds, Cien vs Ciento & Counting to Mil',
      estimatedMinutes: 10,
      iconName: 'Hash',
      summary: 'Learn counting by tens (treinta, cuarenta, cincuenta...), the "y" separation rule (treinta y uno), and hundreds (cien, doscientos, quinientos, mil).',
      theory: [
        {
          id: 'u5-l52-t1',
          title: 'Tens and Hundreds Patterns',
          summary: '31–99 use three words (treinta y uno); 100 is "cien", 101 is "ciento uno".',
          table: {
            headers: ['Number', 'Spanish', 'Number', 'Spanish'],
            rows: [
              ['30', 'treinta', '100', 'cien (ciento uno for 101)'],
              ['40', 'cuarenta', '200', 'doscientos / doscientas'],
              ['50', 'cincuenta', '500', 'quinientos (irregular!)'],
              ['60', 'sesenta', '700', 'setecientos (irregular!)'],
              ['70', 'setenta', '900', 'novecientos (irregular!)'],
              ['80', 'ochenta', '1000', 'mil (dos mil for 2000)'],
              ['90', 'noventa', '1,000,000', 'un millón']
            ]
          },
          examples: [
            { spanish: 'cuarenta y cinco dólares', english: 'forty-five dollars', audio: 'cuarenta y cinco dólares' },
            { spanish: 'quinientos libros', english: 'five hundred books', audio: 'quinientos libros' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5201', spanish: 'cien / ciento', english: 'one hundred', category: 'Numbers' },
        { id: 'v5202', spanish: 'quinientos', english: 'five hundred', category: 'Numbers' },
        { id: 'v5203', spanish: 'mil', english: 'one thousand', category: 'Numbers' }
      ],
      flashcards: [
        { id: 'f5201', front: '500 in Spanish', back: 'quinientos', category: 'Numbers' },
        { id: 'f5202', front: '1000 in Spanish', back: 'mil', category: 'Numbers' }
      ],
      exercises: [
        {
          id: 'u5-l52-ex1',
          type: 'multiple-choice',
          prompt: 'What is the Spanish word for the number 500?',
          audioPrompt: 'quinientos',
          explanation: '500 in Spanish is the irregular "quinientos".',
          options: [
            { id: 'opt1', text: 'quinientos', subtext: '500', isCorrect: true },
            { id: 'opt2', text: 'cincocientos', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt3', text: 'setecientos', subtext: '700', isCorrect: false },
            { id: 'opt4', text: 'novecientos', subtext: '900', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 53: Telling Time
    // -------------------------------------------------------------
    {
      id: 'u5-l53',
      slug: 'telling-time',
      unitId: 5,
      order: 53,
      title: '53. Telling Time',
      subtitle: '¿Qué hora es? — Es la una / Son las dos... & At [time] (A las...)',
      estimatedMinutes: 10,
      iconName: 'Clock',
      summary: 'Learn how to ask the time (¿Qué hora es?), state the time (Es la una vs Son las dos), and use "y cuarto" (:15), "y media" (:30), and "menos cuarto" (:45).',
      theory: [
        {
          id: 'u5-l53-t1',
          title: 'The Time Blueprint',
          summary: '1:00 uses singular "Es la una"; all other hours use plural "Son las...".',
          table: {
            headers: ['Time', 'Spanish Expression', 'Audio'],
            rows: [
              ['1:00', 'Es la una en punto.', 'Es la una'],
              ['2:15', 'Son las dos y cuarto (y quince).', 'Son las dos y cuarto'],
              ['3:30', 'Son las tres y media (y treinta).', 'Son las tres y media'],
              ['4:45', 'Son las cinco menos cuarto.', 'Son las cinco menos cuarto'],
              ['At 8:00 AM', 'A las ocho de la mañana.', 'A las ocho de la mañana']
            ]
          },
          examples: [
            { spanish: '¿Qué hora es? — Son las tres y media.', english: 'What time is it? — It is 3:30.', audio: 'Son las tres y media.' },
            { spanish: 'La clase empieza a las nueve.', english: 'The class starts at nine.', audio: 'La clase empieza a las nueve.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5301', spanish: 'y cuarto', english: 'quarter past (:15)', category: 'Time' },
        { id: 'v5302', spanish: 'y media', english: 'half past (:30)', category: 'Time' },
        { id: 'v5303', spanish: 'menos cuarto', english: 'quarter to (:45)', category: 'Time' }
      ],
      flashcards: [
        { id: 'f5301', front: 'It is 1:00 (singular)', back: 'Es la una', category: 'Time' },
        { id: 'f5302', front: 'It is 3:30', back: 'Son las tres y media', category: 'Time' }
      ],
      exercises: [
        {
          id: 'u5-l53-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "It is 1:15" in Spanish?',
          explanation: '1:00 uses "Es la una": "Es la una y cuarto".',
          options: [
            { id: 'opt1', text: 'Es la una y cuarto.', subtext: 'Correct singular form for 1:xx', isCorrect: true },
            { id: 'opt2', text: 'Son las una y cuarto.', subtext: 'Plural error with 1:00', isCorrect: false },
            { id: 'opt3', text: 'Está la una y cuarto.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: 'Son las uno y cuarto.', subtext: 'Must use una (hour is feminine)', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 54: "Por" and "Para"
    // -------------------------------------------------------------
    {
      id: 'u5-l54',
      slug: 'por-and-para',
      unitId: 5,
      order: 54,
      title: '54. "Por" and "Para"',
      subtitle: 'The Ultimate Guide: Cause/Means (Por) vs Goal/Recipient (Para)',
      estimatedMinutes: 12,
      iconName: 'Split',
      summary: 'Both "por" and "para" translate to "for" in English. Learn the distinct rules: PARA looks forward to a goal/deadline/recipient; POR looks backward to a cause/exchange/duration/means.',
      theory: [
        {
          id: 'u5-l54-t1',
          title: 'The POR vs PARA Decision Matrix',
          summary: 'PARA = Purpose, Recipient, Deadline, Destination; POR = Reason, Duration, Means, Exchange.',
          table: {
            headers: ['Usage Category', 'PARA (Goal / Destination)', 'POR (Cause / Passage)'],
            rows: [
              ['Destination / Movement', 'Salgo para Madrid (Heading for Madrid)', 'Paso por el parque (Passing through the park)'],
              ['Recipient', 'El regalo es para ti (The gift is for you)', '—'],
              ['Purpose / Goal', 'Estudio para aprender (In order to learn)', '—'],
              ['Deadline vs Duration', 'Para el viernes (Due by Friday)', 'Por tres horas (For three hours duration)'],
              ['Exchange / Price', '—', 'Pagué 20 dólares por el libro (Paid $20 for it)'],
              ['Means of Transport/Comms', '—', 'Hablamos por teléfono (Talk by phone)']
            ]
          },
          examples: [
            { spanish: 'Este libro es para ti.', english: 'This book is for you. (Recipient → PARA)', audio: 'Este libro es para ti.' },
            { spanish: 'Gracias por tu ayuda.', english: 'Thank you for your help. (Reason/Cause → POR)', audio: 'Gracias por tu ayuda.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5401', spanish: 'para', english: 'for (purpose/recipient/deadline)', category: 'Prepositions' },
        { id: 'v5402', spanish: 'por', english: 'for (reason/exchange/duration/means)', category: 'Prepositions' }
      ],
      flashcards: [
        { id: 'f5401', front: 'Thank you for...', back: 'Gracias por...', frontSubtext: 'Reason/Gratitude → POR', category: 'Por vs Para' },
        { id: 'f5402', front: 'In order to learn', back: 'Para aprender', frontSubtext: 'Purpose → PARA + infinitive', category: 'Por vs Para' }
      ],
      exercises: [
        {
          id: 'u5-l54-ex1',
          type: 'multiple-choice',
          prompt: 'Fill in: "Estudio español _______ viajar a España" (in order to)',
          explanation: 'Purpose ("in order to") requires PARA: "para viajar".',
          options: [
            { id: 'opt1', text: 'para', subtext: 'Purpose/Goal → Para', isCorrect: true },
            { id: 'opt2', text: 'por', subtext: 'Reason/Cause', isCorrect: false },
            { id: 'opt3', text: 'de', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'en', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 55: Irregular Comparatives
    // -------------------------------------------------------------
    {
      id: 'u5-l55',
      slug: 'irregular-comparatives',
      unitId: 5,
      order: 55,
      title: '55. Irregular Comparatives',
      subtitle: 'Mejor, Peor, Mayor, Menor',
      estimatedMinutes: 9,
      iconName: 'TrendingUp',
      summary: 'Learn the four irregular comparative adjectives that do not use "más": mejor (better), peor (worse), mayor (older), and menor (younger).',
      theory: [
        {
          id: 'u5-l55-t1',
          title: 'The 4 Irregular Comparatives',
          summary: 'Never say "más bueno" or "más viejo" for people.',
          table: {
            headers: ['Adjective', 'Irregular Comparative', 'Plural Form', 'English'],
            rows: [
              ['bueno (good)', 'mejor', 'mejores', 'better'],
              ['malo (bad)', 'peor', 'peores', 'worse'],
              ['grande/viejo (age)', 'mayor', 'mayores', 'older / greater'],
              ['pequeño/joven (age)', 'menor', 'menores', 'younger / lesser']
            ]
          },
          examples: [
            { spanish: 'Este libro es mejor que aquel.', english: 'This book is better than that one.', audio: 'Este libro es mejor que aquel.' },
            { spanish: 'Mi hermano mayor vive en Madrid.', english: 'My older brother lives in Madrid.', audio: 'Mi hermano mayor vive en Madrid.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5501', spanish: 'mejor', english: 'better', category: 'Comparatives' },
        { id: 'v5502', spanish: 'peor', english: 'worse', category: 'Comparatives' },
        { id: 'v5503', spanish: 'mayor', english: 'older', category: 'Comparatives' },
        { id: 'v5504', spanish: 'menor', english: 'younger', category: 'Comparatives' }
      ],
      flashcards: [
        { id: 'f5501', front: 'better than', back: 'mejor que', category: 'Comparatives' },
        { id: 'f5502', front: 'my older sister', back: 'mi hermana mayor', category: 'Comparatives' }
      ],
      exercises: [
        {
          id: 'u5-l55-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "My older brother" in Spanish?',
          explanation: '"Mi hermano mayor".',
          options: [
            { id: 'opt1', text: 'Mi hermano mayor', subtext: 'Correct comparative', isCorrect: true },
            { id: 'opt2', text: 'Mi hermano más viejo', subtext: 'Unnatural for family', isCorrect: false },
            { id: 'opt3', text: 'Mi hermano menor', subtext: 'Menor means younger', isCorrect: false },
            { id: 'opt4', text: 'Mi más grande hermano', subtext: 'Incorrect syntax', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 56: Demonstratives
    // -------------------------------------------------------------
    {
      id: 'u5-l56',
      slug: 'demonstratives',
      unitId: 5,
      order: 56,
      title: '56. Demonstratives',
      subtitle: 'This & These (este/esta), That & Those (ese/esa), That over there (aquel)',
      estimatedMinutes: 10,
      iconName: 'Navigation',
      summary: 'Learn the three tiers of physical distance in Spanish: este (here near speaker), ese (there near listener), and aquel (way over yonder).',
      theory: [
        {
          id: 'u5-l56-t1',
          title: 'The 3 Spatial Demonstrative Tiers',
          summary: '"This and these have T\'s; that and those don\'t!"',
          table: {
            headers: ['Distance', 'Masc Sing', 'Fem Sing', 'Masc Plur', 'Fem Plur'],
            rows: [
              ['Here (Near me)', 'este (this)', 'esta (this)', 'estos (these)', 'estas (these)'],
              ['There (Near you)', 'ese (that)', 'esa (that)', 'esos (those)', 'esas (those)'],
              ['Over Yonder (Far from both)', 'aquel (that)', 'aquella (that)', 'aquellos (those)', 'aquellas (those)']
            ]
          },
          examples: [
            { spanish: 'Este libro es mío.', english: 'This book (here) is mine.', audio: 'Este libro es mío.' },
            { spanish: 'Esa casa es grande.', english: 'That house (near you) is big.', audio: 'Esa casa es grande.' },
            { spanish: 'Aquella montaña es hermosa.', english: 'That mountain (way over there) is beautiful.', audio: 'Aquella montaña es hermosa.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5601', spanish: 'este / esta', english: 'this (near me)', category: 'Demonstratives' },
        { id: 'v5602', spanish: 'estos / estas', english: 'these (near me)', category: 'Demonstratives' },
        { id: 'v5603', spanish: 'ese / esa', english: 'that (near you)', category: 'Demonstratives' },
        { id: 'v5604', spanish: 'aquel / aquella', english: 'that (far away)', category: 'Demonstratives' }
      ],
      flashcards: [
        { id: 'f5601', front: 'this book vs that book', back: 'este libro vs ese libro', category: 'Demonstratives' },
        { id: 'f5602', front: 'these shoes (masc plur)', back: 'estos zapatos', category: 'Demonstratives' }
      ],
      exercises: [
        {
          id: 'u5-l56-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "These books" (books is masculine plural)?',
          explanation: '"Estos libros" (este → estos in plural).',
          options: [
            { id: 'opt1', text: 'estos libros', subtext: 'Correct masculine plural', isCorrect: true },
            { id: 'opt2', text: 'estes libros', subtext: 'Nonexistent form', isCorrect: false },
            { id: 'opt3', text: 'estas libros', subtext: 'Gender error', isCorrect: false },
            { id: 'opt4', text: 'esos libros', subtext: 'Means those books', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 57: Time Expressions with "Hacer"
    // -------------------------------------------------------------
    {
      id: 'u5-l57',
      slug: 'time-with-hacer',
      unitId: 5,
      order: 57,
      title: '57. Time with "Hacer"',
      subtitle: 'Expressing "How long have you been doing something?" (Hace... que)',
      estimatedMinutes: 9,
      iconName: 'Clock',
      summary: 'Learn how to describe ongoing duration using "hace + [time duration] + que + [present tense verb]".',
      theory: [
        {
          id: 'u5-l57-t1',
          title: 'The Duration Formula with Hacer',
          summary: 'hace + [time] + que + [present verb].',
          formula: {
            pattern: 'Hace + [duration] + que + [present tense verb]',
            example: 'Hace dos años que estudio español (I have been studying Spanish for 2 years)'
          },
          examples: [
            { spanish: '¿Cuánto tiempo hace que vives aquí?', english: 'How long have you lived here?', audio: '¿Cuánto tiempo hace que vives aquí?' },
            { spanish: 'Hace tres meses que vivo en Madrid.', english: 'I have been living in Madrid for three months.', audio: 'Hace tres meses que vivo en Madrid.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5701', spanish: 'hace ... que', english: 'have been doing ... for [time]', category: 'Time Idioms' }
      ],
      flashcards: [
        { id: 'f5701', front: 'I have been studying for 2 years', back: 'Hace dos años que estudio', category: 'Time Idioms' }
      ],
      exercises: [
        {
          id: 'u5-l57-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "I have lived in Spain for 5 years"',
          explanation: '"Hace cinco años que vivo en España".',
          options: [
            { id: 'opt1', text: 'Hace cinco años que vivo en España.', subtext: 'Correct formula', isCorrect: true },
            { id: 'opt2', text: 'Vivo en España por cinco años.', subtext: 'Clunky English literal', isCorrect: false },
            { id: 'opt3', text: 'Hago cinco años que vivo.', subtext: 'Hago is wrong (must use impersonal hace)', isCorrect: false },
            { id: 'opt4', text: 'Tiene cinco años que vivo.', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 58: Possessive Pronouns
    // -------------------------------------------------------------
    {
      id: 'u5-l58',
      slug: 'possessive-pronouns',
      unitId: 5,
      order: 58,
      title: '58. Possessive Pronouns',
      subtitle: 'Mine, Yours, His, Hers, Ours, Theirs (el mío, el tuyo, el suyo)',
      estimatedMinutes: 9,
      iconName: 'Key',
      summary: 'Replace nouns with possessive pronouns: el mío (mine), el tuyo (yours), el suyo (his/hers/theirs), el nuestro (ours).',
      theory: [
        {
          id: 'u5-l58-t1',
          title: 'The Possessive Pronouns Chart',
          summary: 'Definite article + mío / tuyo / suyo / nuestro.',
          table: {
            headers: ['Owner', 'Masc Sing (Mine/Yours...)', 'Fem Sing', 'Masc Plur', 'Fem Plur'],
            rows: [
              ['My (Mine)', 'el mío', 'la mía', 'los míos', 'las mías'],
              ['Your (Yours inf)', 'el tuyo', 'la tuya', 'los tuyos', 'las tuyas'],
              ['His / Hers / Theirs', 'el suyo', 'la suya', 'los suyos', 'las suyas'],
              ['Our (Ours)', 'el nuestro', 'la nuestra', 'los nuestros', 'las nuestras']
            ]
          },
          examples: [
            { spanish: 'Mi carro es rojo; el tuyo es azul.', english: 'My car is red; yours is blue.', audio: 'Mi carro es rojo; el tuyo es azul.' },
            { spanish: 'Nuestra casa es más grande que la suya.', english: 'Our house is bigger than theirs.', audio: 'Nuestra casa es más grande que la suya.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5801', spanish: 'el mío / la mía', english: 'mine', category: 'Possessive Pronouns' },
        { id: 'v5802', spanish: 'el tuyo / la tuya', english: 'yours', category: 'Possessive Pronouns' },
        { id: 'v5803', spanish: 'el suyo / la suya', english: 'his / hers / theirs', category: 'Possessive Pronouns' }
      ],
      flashcards: [
        { id: 'f5801', front: 'mine (masc sing noun)', back: 'el mío', category: 'Possessive Pronouns' },
        { id: 'f5802', front: 'yours (fem sing noun)', back: 'la tuya', category: 'Possessive Pronouns' }
      ],
      exercises: [
        {
          id: 'u5-l58-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "This book is mine"',
          explanation: '"Este libro es el mío" (or "Este libro es mío").',
          options: [
            { id: 'opt1', text: 'Este libro es mío.', subtext: 'Correct possessive pronoun', isCorrect: true },
            { id: 'opt2', text: 'Este libro es mi.', subtext: 'Mi is an adjective before nouns', isCorrect: false },
            { id: 'opt3', text: 'Este libro es mí.', subtext: 'Mí is prepositional', isCorrect: false },
            { id: 'opt4', text: 'Este libro es me.', subtext: 'Me is object pronoun', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 59: Reflexive Verbs I (Daily Routines)
    // -------------------------------------------------------------
    {
      id: 'u5-l59',
      slug: 'reflexive-verbs-1',
      unitId: 5,
      order: 59,
      title: '59. Reflexive Verbs I',
      subtitle: 'Daily Routines: me lavo, te levantas, se despierta',
      estimatedMinutes: 10,
      iconName: 'User',
      summary: 'Reflexive verbs describe actions the subject performs ON THEMSELVES. Master the reflexive pronouns: me, te, se, nos, se.',
      theory: [
        {
          id: 'u5-l59-t1',
          title: 'Reflexive Pronouns and Daily Routine',
          summary: 'Infinitive ends in -se (lavarse); conjugates with me, te, se, nos, se.',
          table: {
            headers: ['Pronoun', 'Reflexive Pronoun', 'LAVARSE (to wash oneself)', 'LEVANTARSE (to get up)'],
            rows: [
              ['yo', 'me', 'me lavo (I wash myself)', 'me levanto (I get up)'],
              ['tú', 'te', 'te lavas', 'te levantas'],
              ['él / ella / usted', 'se', 'se lava', 'se levanta'],
              ['nosotros/as', 'nos', 'nos lavamos', 'nos levantamos'],
              ['ellos / ellas / ustedes', 'se', 'se lavan', 'se levantan']
            ]
          },
          examples: [
            { spanish: 'Yo me levanto a las siete.', english: 'I get up at 7:00.', audio: 'Yo me levanto a las siete.' },
            { spanish: 'Ella se lava las manos.', english: 'She washes her hands. (Note: use "las manos", NOT "sus manos" with reflexives!)', audio: 'Ella se lava las manos.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5901', spanish: 'levantarse', english: 'to get up', category: 'Reflexive Verbs' },
        { id: 'v5902', spanish: 'lavarse', english: 'to wash oneself', category: 'Reflexive Verbs' },
        { id: 'v5903', spanish: 'despertarse (e:ie)', english: 'to wake up', category: 'Reflexive Verbs' },
        { id: 'v5904', spanish: 'acostarse (o:ue)', english: 'to go to bed', category: 'Reflexive Verbs' }
      ],
      flashcards: [
        { id: 'f5901', front: 'I wake up (despertarse e:ie)', back: 'Me despierto', category: 'Reflexive Verbs' },
        { id: 'f5902', front: 'She washes her hands', back: 'Ella se lava las manos', category: 'Reflexive Verbs' }
      ],
      exercises: [
        {
          id: 'u5-l59-ex1',
          type: 'multiple-choice',
          prompt: 'Conjugate "levantarse" for "yo":',
          audioPrompt: 'me levanto',
          explanation: '"Yo me levanto".',
          options: [
            { id: 'opt1', text: 'me levanto', subtext: 'Correct reflexive form', isCorrect: true },
            { id: 'opt2', text: 'levanto', subtext: 'Missing reflexive pronoun', isCorrect: false },
            { id: 'opt3', text: 'se levanto', subtext: 'Wrong pronoun for yo', isCorrect: false },
            { id: 'opt4', text: 'te levantas', subtext: 'Tú form', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 60: Reflexive Verbs II (Placement)
    // -------------------------------------------------------------
    {
      id: 'u5-l60',
      slug: 'reflexive-verbs-2',
      unitId: 5,
      order: 60,
      title: '60. Reflexive Verbs II',
      subtitle: 'Reflexive Pronoun Placement with Infinitives & Gerunds',
      estimatedMinutes: 10,
      iconName: 'UserCheck',
      summary: 'Learn how to place reflexive pronouns with verb combos: "Me voy a duchar" OR "Voy a ducharme" (attaching the pronoun to the end of the infinitive).',
      theory: [
        {
          id: 'u5-l60-t1',
          title: 'Reflexive Pronoun Placement Options',
          summary: 'Before conjugated verb OR attached to the infinitive/gerund.',
          examples: [
            { spanish: 'Me tengo que levantar. / Tengo que levantarme.', english: 'I have to get up.', audio: 'Tengo que levantarme.' },
            { spanish: 'Ella se está bañando. / Ella está bañándose.', english: 'She is taking a bath.', audio: 'Ella está bañándose.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6001', spanish: 'ducharse', english: 'to shower', category: 'Reflexive Verbs' },
        { id: 'v6002', spanish: 'vestirse (e:i)', english: 'to get dressed', category: 'Reflexive Verbs' }
      ],
      flashcards: [
        { id: 'f6001', front: 'I have to wake up early (2 ways)', back: 'Me tengo que despertar temprano / Tengo que despertarme temprano', category: 'Reflexive Placement' }
      ],
      exercises: [
        {
          id: 'u5-l60-ex1',
          type: 'multiple-choice',
          prompt: 'Choose the correct attached reflexive form for "I need to shower":',
          explanation: '"Necesito ducharme" (attaching "me" to duchar).',
          options: [
            { id: 'opt1', text: 'Necesito ducharme.', subtext: 'Correct attached form', isCorrect: true },
            { id: 'opt2', text: 'Necesito ducharse.', subtext: 'Wrong person (se is 3rd person)', isCorrect: false },
            { id: 'opt3', text: 'Necesito me duchar.', subtext: 'Forbidden placement in the middle', isCorrect: false },
            { id: 'opt4', text: 'Me necesito ducharme.', subtext: 'Double pronoun error', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 61: Definite Article II
    // -------------------------------------------------------------
    {
      id: 'u5-l61',
      slug: 'definite-article-2',
      unitId: 5,
      order: 61,
      title: '61. Definite Article II',
      subtitle: 'Special Uses: Body Parts, Clothing, Languages & General Concepts',
      estimatedMinutes: 8,
      iconName: 'Grid',
      summary: 'Learn when Spanish uses definite articles where English omits them (e.g. abstract concepts like "el amor", languages like "el español", and body parts with reflexives like "me lavo las manos").',
      theory: [
        {
          id: 'u5-l61-t1',
          title: 'Special Rules for Spanish Definite Articles',
          summary: '1. Abstract concepts take el/la; 2. Body parts take el/la instead of my/your.',
          examples: [
            { spanish: 'El español es una lengua hermosa.', english: 'Spanish is a beautiful language.', audio: 'El español es una lengua hermosa.' },
            { spanish: 'Me lavo las manos.', english: 'I wash my hands. (Use "las", NOT "mis")', audio: 'Me lavo las manos.' },
            { spanish: 'El amor es paciente.', english: 'Love is patient. (Abstract concept takes "el")', audio: 'El amor es paciente.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v6101', spanish: 'las manos', english: 'the hands (f.pl)', category: 'Body' },
        { id: 'v6102', spanish: 'la cabeza', english: 'the head', category: 'Body' }
      ],
      flashcards: [
        { id: 'f6101', front: 'I brush my teeth', back: 'Me cepillo los dientes', frontSubtext: 'Use "los", not "mis"', category: 'Definite Articles' }
      ],
      exercises: [
        {
          id: 'u5-l61-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I wash my face" in natural Spanish?',
          explanation: 'With reflexive actions on body parts, use the definite article: "Me lavo la cara".',
          options: [
            { id: 'opt1', text: 'Me lavo la cara.', subtext: 'Natural Spanish (uses la cara)', isCorrect: true },
            { id: 'opt2', text: 'Me lavo mi cara.', subtext: 'Redundant and unidiomatic in Spanish', isCorrect: false },
            { id: 'opt3', text: 'Lavo mi cara yo.', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'Me lavo cara.', subtext: 'Missing article', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u5-exam',
    title: 'Unit 5 Topic Checkpoint',
    description: 'A short checkpoint covering representative saber/conocer, por/para, demonstrative, and reflexive-verb topics.',
    passingScore: 80,
    exercises: [
      {
        id: 'u5-ex-1',
        type: 'multiple-choice',
        prompt: 'Which verb is used for knowing a person?',
        explanation: 'Familiarity with people requires CONOCER: "Conozco a Juan".',
        options: [
          { id: 'e1', text: 'Conozco a Juan.', subtext: 'Person → Conocer + personal a', isCorrect: true },
          { id: 'e2', text: 'Sé a Juan.', subtext: 'Saber is for facts', isCorrect: false },
          { id: 'e3', text: 'Conozco Juan.', subtext: 'Missing personal a', isCorrect: false },
          { id: 'e4', text: 'Tengo Juan.', subtext: 'Incorrect', isCorrect: false }
        ]
      },
      {
        id: 'u5-ex-2',
        type: 'fill-in-blank',
        prompt: 'Fill in por or para: "Gracias ______ (for) el regalo."',
        sentenceBefore: 'Muchas gracias',
        sentenceAfter: 'el bonito regalo.',
        correctAnswers: ['por', 'Por'],
        wordBank: ['por', 'para', 'de', 'con'],
        hint: 'Reason/Gratitude.',
        explanation: 'Gratitude requires "por": "Gracias por el regalo".'
      },
      {
        id: 'u5-ex-3',
        type: 'multiple-choice',
        prompt: 'Conjugate for yo: "despertarse (e:ie)" (to wake up)',
        explanation: '"Me despierto" (reflexive pronoun me + e:ie stem change).',
        options: [
          { id: 'e1', text: 'Me despierto', subtext: 'Correct reflexive and stem change', isCorrect: true },
          { id: 'e2', text: 'Me desperto', subtext: 'Missing stem change', isCorrect: false },
          { id: 'e3', text: 'Despierto', subtext: 'Missing reflexive pronoun', isCorrect: false },
          { id: 'e4', text: 'Se despierta', subtext: '3rd person form', isCorrect: false }
        ]
      }
    ]
  }
};
