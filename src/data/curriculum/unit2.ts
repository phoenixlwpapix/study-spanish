import type { Unit } from './types';

export const unit2: Unit = {
  id: 2,
  title: 'Unit 2: Ser vs Estar, Negation, Questions & Tener',
  subtitle: 'Lessons 15–27: The Two "To Be" Verbs, Syntax & Essential Daily Idioms',
  description: 'Master the fundamental difference between Ser and Estar, learn negative structures, question forming, possessive adjectives, irregular verbs tener and venir, idiomatic expressions with tener, weather phrases, the personal "a", and contractions.',
  iconName: 'Sliders',
  colorTheme: 'blue',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 15: Ser and Estar I
    // -------------------------------------------------------------
    {
      id: 'u2-l15',
      slug: 'ser-and-estar-1',
      unitId: 2,
      order: 15,
      title: '15. Ser and Estar I',
      subtitle: 'Introduction to Spanish\'s Two "To Be" Verbs',
      estimatedMinutes: 10,
      iconName: 'Scale',
      summary: 'English uses a single verb "to be", but Spanish uses two distinct verbs: "ser" (for essential identity and characteristics) and "estar" (for locations and temporary states).',
      theory: [
        {
          id: 'u2-l15-t1',
          title: 'The Core Difference: Essence vs. State',
          summary: 'Ser describes WHAT something is; Estar describes HOW or WHERE something is.',
          ruleHighlights: [
            { label: 'SER (Essence)', description: 'Identity, origin, permanent characteristics, profession, and time.', color: 'indigo' },
            { label: 'ESTAR (State / Place)', description: 'Physical location, feelings, emotions, and temporary conditions.', color: 'emerald' }
          ],
          content: [
            'Both **ser** and **estar** translate into English as "to be" (*am, is, are*), but they are never interchangeable in Spanish.',
            'A helpful rhyme: *"For how you feel and where you are, always use the verb estar!"*'
          ],
          table: {
            headers: ['Pronoun', 'SER (Present)', 'ESTAR (Present)'],
            rows: [
              ['yo', 'soy (I am)', 'estoy (I am)'],
              ['tú', 'eres (you are)', 'estás (you are)'],
              ['él / ella / usted', 'es (he/she/it is)', 'está (he/she/it is)'],
              ['nosotros/as', 'somos (we are)', 'estamos (we are)'],
              ['ellos / ellas / ustedes', 'son (they are)', 'están (they are)']
            ]
          },
          examples: [
            { spanish: 'Yo soy estudiante.', english: 'I am a student. (Identity/Profession → SER)', audio: 'Yo soy estudiante.' },
            { spanish: 'Yo estoy en Madrid.', english: 'I am in Madrid. (Location → ESTAR)', audio: 'Yo estoy en Madrid.' },
            { spanish: 'La sopa está caliente.', english: 'The soup is hot. (Temporary condition → ESTAR)', audio: 'La sopa está caliente.' },
            { spanish: 'La nieve es fría.', english: 'Snow is cold. (Inherent nature → SER)', audio: 'La nieve es fría.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1501', spanish: 'ser', english: 'to be (inherent)', category: 'Verbs' },
        { id: 'v1502', spanish: 'estar', english: 'to be (state/location)', category: 'Verbs' },
        { id: 'v1503', spanish: 'feliz', english: 'happy', category: 'Feelings' },
        { id: 'v1504', spanish: 'triste', english: 'sad', category: 'Feelings' },
        { id: 'v1505', spanish: 'cansado / cansada', english: 'tired', category: 'Feelings' }
      ],
      flashcards: [
        { id: 'f1501', front: 'I am (SER vs ESTAR)', back: 'soy / estoy', category: 'Ser vs Estar' },
        { id: 'f1502', front: 'He is in Spain (location)', back: 'Él está en España', frontSubtext: 'Location takes ESTAR', category: 'Ser vs Estar' },
        { id: 'f1503', front: 'She is a doctor (profession)', back: 'Ella es doctora', frontSubtext: 'Profession takes SER', category: 'Ser vs Estar' }
      ],
      exercises: [
        {
          id: 'u2-l15-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "Where are you?" (location) to a friend?',
          explanation: 'Location always requires the verb "estar": "¿Dónde estás?".',
          options: [
            { id: 'opt1', text: '¿Dónde estás tú?', subtext: 'Location with estar', isCorrect: true },
            { id: 'opt2', text: '¿Dónde eres tú?', subtext: 'Incorrect: ser is not for location', isCorrect: false },
            { id: 'opt3', text: '¿Dónde estáis?', subtext: 'Plural form', isCorrect: false },
            { id: 'opt4', text: '¿Dónde son?', subtext: 'Incorrect form', isCorrect: false }
          ]
        },
        {
          id: 'u2-l15-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the correct form of "ser" or "estar" for nationality/origin:',
          sentenceBefore: 'María',
          sentenceAfter: 'de México.',
          correctAnswers: ['es', 'Es'],
          wordBank: ['es', 'está', 'son', 'están'],
          hint: 'Origin takes SER.',
          explanation: 'Origin is an inherent characteristic, so it requires "ser": "María es de México".'
        },
        {
          id: 'u2-l15-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "I am tired today"',
          targetEnglish: 'I am tired today',
          correctTokens: ['Estoy', 'cansado', 'hoy'],
          availableTokens: ['Estoy', 'cansado', 'hoy', 'Soy', 'está', 'es'],
          explanation: '"Estoy cansado hoy." (Being tired is a temporary physical state → ESTAR).'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 16: Ser and Estar II (DOCTOR vs PLACE)
    // -------------------------------------------------------------
    {
      id: 'u2-l16',
      slug: 'ser-and-estar-2',
      unitId: 2,
      order: 16,
      title: '16. Ser and Estar II',
      subtitle: 'The Memory Acronyms: D.O.C.T.O.R. vs. P.L.A.C.E.',
      estimatedMinutes: 10,
      iconName: 'Compass',
      summary: 'Use the famous mnemonic acronyms D.O.C.T.O.R. (Description, Occupation, Characteristic, Time, Origin, Relationship) and P.L.A.C.E. (Position, Location, Action, Condition, Emotion) to never confuse Ser and Estar again.',
      theory: [
        {
          id: 'u2-l16-t1',
          title: 'The D.O.C.T.O.R. Acronym for SER',
          summary: 'Use SER whenever a sentence relates to one of these 6 categories.',
          ruleHighlights: [
            { label: 'D - Description', description: 'El cielo es azul (The sky is blue)', color: 'indigo' },
            { label: 'O - Occupation', description: 'Mi padre es profesor (My father is a teacher)', color: 'indigo' },
            { label: 'C - Characteristic', description: 'Carlos es muy inteligente (Carlos is smart)', color: 'indigo' },
            { label: 'T - Time & Date', description: 'Son las tres / Hoy es lunes (It is 3 o\'clock / Today is Monday)', color: 'indigo' },
            { label: 'O - Origin', description: 'Somos de España (We are from Spain)', color: 'indigo' },
            { label: 'R - Relationship', description: 'Elena es mi hermana (Elena is my sister)', color: 'indigo' }
          ],
          content: [
            'Whenever you are unsure whether to use *ser*, run through the **DOCTOR** checklist. If it fits any of these 6 categories, use *ser*!'
          ],
          examples: [
            { spanish: 'Son las dos de la tarde.', english: 'It is 2:00 PM. (Time → SER)', audio: 'Son las dos de la tarde.' },
            { spanish: 'Ellos son mis amigos.', english: 'They are my friends. (Relationship → SER)', audio: 'Ellos son mis amigos.' }
          ]
        },
        {
          id: 'u2-l16-t2',
          title: 'The P.L.A.C.E. Acronym for ESTAR',
          summary: 'Use ESTAR whenever a sentence relates to one of these 5 categories.',
          ruleHighlights: [
            { label: 'P - Position', description: 'El libro está en la mesa (The book is sitting on the table)', color: 'emerald' },
            { label: 'L - Location', description: 'Estamos en el parque (We are in the park)', color: 'emerald' },
            { label: 'A - Action (-ando/-iendo)', description: 'Estoy hablando (I am speaking)', color: 'emerald' },
            { label: 'C - Condition', description: 'El teléfono está roto (The phone is broken)', color: 'emerald' },
            { label: 'E - Emotion', description: '¿Por qué estás triste? (Why are you sad?)', color: 'emerald' }
          ],
          content: [
            'Whenever something changes from hour to hour or describes physical placement, **P.L.A.C.E.** applies and demands *estar*.'
          ],
          examples: [
            { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom? (Location → ESTAR)', audio: '¿Dónde está el baño?' },
            { spanish: 'Ella está contenta hoy.', english: 'She is happy today. (Emotion → ESTAR)', audio: 'Ella está contenta hoy.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1601', spanish: 'la hora', english: 'the hour / the time', category: 'Time' },
        { id: 'v1602', spanish: 'ocupado / ocupada', english: 'busy', category: 'Feelings' },
        { id: 'v1603', spanish: 'abierto / abierta', english: 'open', category: 'Conditions' },
        { id: 'v1604', spanish: 'cerrado / cerrada', english: 'closed', category: 'Conditions' }
      ],
      flashcards: [
        { id: 'f1601', front: 'SER Mnemonic', back: 'D.O.C.T.O.R.\n(Description, Occupation, Characteristic, Time, Origin, Relationship)', category: 'Ser vs Estar' },
        { id: 'f1602', front: 'ESTAR Mnemonic', back: 'P.L.A.C.E.\n(Position, Location, Action, Condition, Emotion)', category: 'Ser vs Estar' }
      ],
      exercises: [
        {
          id: 'u2-l16-ex1',
          type: 'multiple-choice',
          prompt: 'Which verb is required for telling time: "It is 4:00 PM"?',
          explanation: 'Telling time always uses SER (Son las cuatro).',
          options: [
            { id: 'opt1', text: 'Son las cuatro de la tarde.', subtext: 'Time → SER', isCorrect: true },
            { id: 'opt2', text: 'Están las cuatro de la tarde.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt3', text: 'Hay las cuatro de la tarde.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: 'Tienen las cuatro de la tarde.', subtext: 'Incorrect verb', isCorrect: false }
          ]
        },
        {
          id: 'u2-l16-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete: "The store is closed right now"',
          sentenceBefore: 'La tienda',
          sentenceAfter: 'cerrada ahora.',
          correctAnswers: ['está', 'Está'],
          wordBank: ['está', 'es', 'son', 'están'],
          hint: 'Condition of the store.',
          explanation: '"Cerrada" is a temporary condition (Condition → ESTAR): "La tienda está cerrada".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 17: Ser and Estar III (Meaning Shifts)
    // -------------------------------------------------------------
    {
      id: 'u2-l17',
      slug: 'ser-and-estar-3',
      unitId: 2,
      order: 17,
      title: '17. Ser and Estar III',
      subtitle: 'Adjectives that Change Meaning with Ser vs. Estar',
      estimatedMinutes: 10,
      iconName: 'Tag',
      summary: 'Discover how pair of identical adjectives drastically change their meaning depending on whether you pair them with "ser" or "estar" (e.g. ser listo = to be smart vs estar listo = to be ready).',
      theory: [
        {
          id: 'u2-l17-t1',
          title: 'Adjectives with Dual Personalities',
          summary: 'The choice between Ser and Estar completely alters the definition.',
          table: {
            headers: ['Adjective', 'With SER (Inherent Trait)', 'With ESTAR (Current State)'],
            rows: [
              ['listo / lista', 'ser listo (to be smart / clever)', 'estar listo (to be ready / prepared)'],
              ['aburrido / aburrida', 'ser aburrido (to be boring)', 'estar aburrido (to be bored)'],
              ['rico / rica', 'ser rico (to be wealthy / rich in money)', 'estar rico (to be delicious / tasty)'],
              ['malo / mala', 'ser malo (to be bad / evil)', 'estar malo (to be ill / sick / spoiled)'],
              ['verde', 'ser verde (to be green in color)', 'estar verde (to be unripe)']
            ]
          },
          examples: [
            { spanish: 'Él es muy listo.', english: 'He is very smart / clever.', audio: 'Él es muy listo.' },
            { spanish: '¿Estás listo?', english: 'Are you ready?', audio: '¿Estás listo?' },
            { spanish: 'La película es aburrida.', english: 'The movie is boring.', audio: 'La película es aburrida.' },
            { spanish: 'Yo estoy aburrido.', english: 'I am bored.', audio: 'Yo estoy aburrido.' },
            { spanish: 'La comida está muy rica.', english: 'The food is very delicious.', audio: 'La comida está muy rica.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1701', spanish: 'listo', english: 'smart (ser) / ready (estar)', category: 'Adjectives' },
        { id: 'v1702', spanish: 'aburrido', english: 'boring (ser) / bored (estar)', category: 'Adjectives' },
        { id: 'v1703', spanish: 'rico', english: 'wealthy (ser) / delicious (estar)', category: 'Adjectives' }
      ],
      flashcards: [
        { id: 'f1701', front: 'ser listo vs estar listo', back: 'to be smart vs to be ready', category: 'Meaning Shifts' },
        { id: 'f1702', front: 'ser aburrido vs estar aburrido', back: 'to be boring vs to be bored', category: 'Meaning Shifts' }
      ],
      exercises: [
        {
          id: 'u2-l17-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "Are you ready?" in Spanish?',
          audioPrompt: '¿Estás listo?',
          explanation: '"Estar listo" means to be ready (state), whereas "ser listo" means to be smart.',
          options: [
            { id: 'opt1', text: '¿Estás listo?', subtext: 'Ready → estar', isCorrect: true },
            { id: 'opt2', text: '¿Eres listo?', subtext: 'Means "Are you smart?"', isCorrect: false },
            { id: 'opt3', text: '¿Tienes listo?', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: '¿Hay listo?', subtext: 'Incorrect verb', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 18: Ser and Estar IV (Summary & Events)
    // -------------------------------------------------------------
    {
      id: 'u2-l18',
      slug: 'ser-and-estar-4',
      unitId: 2,
      order: 18,
      title: '18. Ser and Estar IV',
      subtitle: 'The Special Rule: Location of Events (SER)',
      estimatedMinutes: 9,
      iconName: 'Layers',
      summary: 'Learn the famous advanced exception: while physical objects and people use ESTAR for location, events and gatherings (parties, concerts, meetings) use SER!',
      theory: [
        {
          id: 'u2-l18-t1',
          title: 'Location of Physical Objects vs. Location of Events',
          summary: 'Objects use ESTAR; Events use SER ("takes place at").',
          ruleHighlights: [
            { label: 'Physical Entities → ESTAR', description: 'El hotel está en el centro (The hotel is downtown)', color: 'emerald' },
            { label: 'Events & Parties → SER', description: 'La fiesta es en el hotel (The party takes place at the hotel)', color: 'indigo' }
          ],
          content: [
            'This is one of the most tested nuances on advanced exams: when asking where an event *takes place* (la fiesta, el concierto, la clase, la reunión), use **ser**!'
          ],
          examples: [
            { spanish: 'El concierto es en el estadio.', english: 'The concert is at the stadium. (Event → SER)', audio: 'El concierto es en el estadio.' },
            { spanish: 'El estadio está cerca.', english: 'The stadium is nearby. (Physical building → ESTAR)', audio: 'El estadio está cerca.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1801', spanish: 'la fiesta', english: 'the party', category: 'Events' },
        { id: 'v1802', spanish: 'el concierto', english: 'the concert', category: 'Events' },
        { id: 'v1803', spanish: 'la reunión', english: 'the meeting', category: 'Events' }
      ],
      flashcards: [
        { id: 'f1801', front: 'Where is the party? (Event)', back: '¿Dónde es la fiesta?', frontSubtext: 'Events use SER', category: 'Ser vs Estar' }
      ],
      exercises: [
        {
          id: 'u2-l18-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "The party is at Juan\'s house"?',
          explanation: 'Events taking place somewhere use SER: "La fiesta es en la casa de Juan".',
          options: [
            { id: 'opt1', text: 'La fiesta es en la casa de Juan.', subtext: 'Event takes place → SER', isCorrect: true },
            { id: 'opt2', text: 'La fiesta está en la casa de Juan.', subtext: 'Incorrect for events', isCorrect: false },
            { id: 'opt3', text: 'La fiesta hay en la casa de Juan.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: 'La fiesta tiene en la casa de Juan.', subtext: 'Incorrect verb', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 19: Negation
    // -------------------------------------------------------------
    {
      id: 'u2-l19',
      slug: 'negation',
      unitId: 2,
      order: 19,
      title: '19. Negation',
      subtitle: 'Basic "No" & Spanish Double Negatives (nada, nadie, nunca)',
      estimatedMinutes: 9,
      iconName: 'Slash',
      summary: 'Learn how to form negative statements by placing "no" directly before the conjugated verb, and understand why double negatives are grammatically required in Spanish.',
      theory: [
        {
          id: 'u2-l19-t1',
          title: 'The Basic Negation Rule',
          summary: 'Place "no" directly before the conjugated verb.',
          formula: {
            pattern: 'Subject + no + [conjugated verb] + remainder',
            example: 'Yo no hablo francés (I do not speak French)'
          },
          content: [
            'In English, forming a negative requires helper verbs ("do not", "does not", "did not"). In Spanish, you simply insert **no** immediately before the conjugated verb.'
          ],
          examples: [
            { spanish: 'No como carne.', english: 'I do not eat meat.', audio: 'No como carne.' },
            { spanish: 'Ella no vive aquí.', english: 'She does not live here.', audio: 'Ella no vive aquí.' }
          ]
        },
        {
          id: 'u2-l19-t2',
          title: 'Spanish Double Negatives',
          summary: 'Double negatives are correct and standard in Spanish!',
          table: {
            headers: ['Negative Word', 'English', 'Example in Spanish'],
            rows: [
              ['nada', 'nothing / anything', 'No sé nada (I don\'t know anything)'],
              ['nadie', 'no one / nobody', 'No hay nadie aquí (There is nobody here)'],
              ['nunca / jamás', 'never', 'No voy nunca / Nunca voy (I never go)'],
              ['tampoco', 'neither / either', 'Yo tampoco (Me neither)']
            ]
          },
          examples: [
            { spanish: 'No tengo nada.', english: 'I don\'t have anything / I have nothing.', audio: 'No tengo nada.' },
            { spanish: 'Nadie habla inglés.', english: 'Nobody speaks English.', audio: 'Nadie habla inglés.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1901', spanish: 'nada', english: 'nothing / not anything', category: 'Negation' },
        { id: 'v1902', spanish: 'nadie', english: 'nobody / no one', category: 'Negation' },
        { id: 'v1903', spanish: 'nunca', english: 'never', category: 'Negation' },
        { id: 'v1904', spanish: 'tampoco', english: 'neither / not either', category: 'Negation' }
      ],
      flashcards: [
        { id: 'f1901', front: 'nothing', back: 'nada', category: 'Negation' },
        { id: 'f1902', front: 'nobody', back: 'nadie', category: 'Negation' },
        { id: 'f1903', front: 'me neither', back: 'yo tampoco', category: 'Negation' }
      ],
      exercises: [
        {
          id: 'u2-l19-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "I don\'t know anything"',
          explanation: '"No sé nada" is the standard double negative.',
          options: [
            { id: 'opt1', text: 'No sé nada.', subtext: 'Standard double negative', isCorrect: true },
            { id: 'opt2', text: 'Sé nada.', subtext: 'Missing no', isCorrect: false },
            { id: 'opt3', text: 'No sé nadie.', subtext: 'Nadie = nobody', isCorrect: false },
            { id: 'opt4', text: 'No hago nada.', subtext: 'Means "I do nothing"', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 20: Questions (Interrogatives)
    // -------------------------------------------------------------
    {
      id: 'u2-l20',
      slug: 'questions',
      unitId: 2,
      order: 20,
      title: '20. Questions',
      subtitle: 'Question Words (qué, quién, dónde, cuándo) & Inverted Syntax',
      estimatedMinutes: 10,
      iconName: 'HelpCircle',
      summary: 'Learn all Spanish question words, why they always carry accent marks, and how to use upside-down question marks (¿) and verb-subject inversion.',
      theory: [
        {
          id: 'u2-l20-t1',
          title: 'The Interrogative Words List',
          summary: 'All Spanish question words require written accent marks (tildes).',
          table: {
            headers: ['Question Word', 'English Meaning', 'Example Question'],
            rows: [
              ['¿Qué?', 'What?', '¿Qué estudias? (What do you study?)'],
              ['¿Quién? / ¿Quiénes?', 'Who? (Singular / Plural)', '¿Quién es él? (Who is he?)'],
              ['¿Dónde? / ¿De dónde?', 'Where? / From where?', '¿Dónde vives? (Where do you live?)'],
              ['¿Cuándo?', 'When?', '¿Cuándo es el examen? (When is the exam?)'],
              ['¿Por qué?', 'Why?', '¿Por qué estudias español? (Why do you study Spanish?)'],
              ['¿Cómo?', 'How?', '¿Cómo te llamas? (What is your name?)'],
              ['¿Cuánto/a/os/as?', 'How much? / How many?', '¿Cuántos años tienes? (How old are you?)'],
              ['¿Cuál? / ¿Cuáles?', 'Which? / What?', '¿Cuál es tu número? (What is your number?)']
            ]
          },
          examples: [
            { spanish: '¿De dónde eres tú?', english: 'Where are you from?', audio: '¿De dónde eres tú?' },
            { spanish: '¿Por qué estudias español? — Porque es bonito.', english: 'Why do you study Spanish? — Because it is beautiful.', audio: '¿Por qué estudias español?' }
          ],
          proTip: '"¿Por qué?" (two words with accent) means "Why?". "Porque" (one word without accent) means "Because"!'
        }
      ],
      vocabulary: [
        { id: 'v2001', spanish: '¿qué?', english: 'what?', category: 'Questions' },
        { id: 'v2002', spanish: '¿dónde?', english: 'where?', category: 'Questions' },
        { id: 'v2003', spanish: '¿cuándo?', english: 'when?', category: 'Questions' },
        { id: 'v2004', spanish: '¿por qué?', english: 'why?', category: 'Questions' },
        { id: 'v2005', spanish: 'porque', english: 'because', category: 'Conjunctions' }
      ],
      flashcards: [
        { id: 'f2001', front: 'Why? vs Because', back: '¿Por qué? vs porque', category: 'Questions' },
        { id: 'f2002', front: 'Where are you from?', back: '¿De dónde eres?', category: 'Questions' }
      ],
      exercises: [
        {
          id: 'u2-l20-ex1',
          type: 'multiple-choice',
          prompt: 'Fill in the correct question word: "_______ es tu profesor de español?" (Who is your Spanish teacher?)',
          explanation: '"¿Quién?" means "Who?".',
          options: [
            { id: 'opt1', text: '¿Quién?', subtext: 'Who?', isCorrect: true },
            { id: 'opt2', text: '¿Qué?', subtext: 'What?', isCorrect: false },
            { id: 'opt3', text: '¿Dónde?', subtext: 'Where?', isCorrect: false },
            { id: 'opt4', text: '¿Cuándo?', subtext: 'When?', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 21: Possessive Adjectives
    // -------------------------------------------------------------
    {
      id: 'u2-l21',
      slug: 'possessive-adjectives',
      unitId: 2,
      order: 21,
      title: '21. Possessive Adjectives',
      subtitle: 'Expressing Ownership: mi, tu, su, nuestro, vuestro',
      estimatedMinutes: 9,
      iconName: 'Key',
      summary: 'Learn how to show possession in Spanish. Understand that possessive adjectives agree with the item owned, NOT with the owner.',
      theory: [
        {
          id: 'u2-l21-t1',
          title: 'The Possessive Adjectives Chart',
          summary: 'Possessive adjectives match the gender and number of the noun they modify.',
          table: {
            headers: ['Owner', 'Singular Item Owned', 'Plural Items Owned'],
            rows: [
              ['My (yo)', 'mi libro / mi casa', 'mis libros / mis casas'],
              ['Your informal (tú)', 'tu carro', 'tus carros'],
              ['His / Her / Your formal (él/ella/Ud.)', 'su amigo / su amiga', 'sus amigos / sus amigas'],
              ['Our (nosotros/as)', 'nuestro libro / nuestra casa', 'nuestros libros / nuestras casas'],
              ['Their / Your all (ellos/ellas/Uds.)', 'su familia', 'sus familias']
            ]
          },
          examples: [
            { spanish: 'mi libro y mis lápices', english: 'my book and my pencils', audio: 'mi libro y mis lápices' },
            { spanish: 'nuestra casa es grande', english: 'our house is big', audio: 'nuestra casa es grande' }
          ],
          watchOut: '"Nuestro" is the only possessive adjective that changes for feminine gender (nuestro / nuestra)!'
        }
      ],
      vocabulary: [
        { id: 'v2101', spanish: 'mi / mis', english: 'my', category: 'Possessives' },
        { id: 'v2102', spanish: 'tu / tus', english: 'your (informal)', category: 'Possessives' },
        { id: 'v2103', spanish: 'su / sus', english: 'his / her / their / your (formal)', category: 'Possessives' },
        { id: 'v2104', spanish: 'nuestro / nuestra', english: 'our', category: 'Possessives' }
      ],
      flashcards: [
        { id: 'f2101', front: 'my book / my books', back: 'mi libro / mis libros', category: 'Possessives' },
        { id: 'f2102', front: 'our house / our houses', back: 'nuestra casa / nuestras casas', category: 'Possessives' }
      ],
      exercises: [
        {
          id: 'u2-l21-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "Our friends" (friends is masculine plural: amigos)?',
          explanation: '"Nuestro" changes to match masculine plural: "nuestros amigos".',
          options: [
            { id: 'opt1', text: 'nuestros amigos', subtext: 'Masc Plural match', isCorrect: true },
            { id: 'opt2', text: 'nuestras amigos', subtext: 'Gender error', isCorrect: false },
            { id: 'opt3', text: 'nuestro amigos', subtext: 'Number error', isCorrect: false },
            { id: 'opt4', text: 'sus amigos', subtext: 'Means their friends', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 22: Tener and Venir
    // -------------------------------------------------------------
    {
      id: 'u2-l22',
      slug: 'tener-venir',
      unitId: 2,
      order: 22,
      title: '22. Tener & Venir',
      subtitle: 'Irregular "Go" Verbs with e:ie Stem Changes',
      estimatedMinutes: 10,
      iconName: 'Flame',
      summary: 'Master two of the most essential irregular Spanish verbs: "tener" (to have) and "venir" (to come). Both have an irregular "yo" form (-go) and an e:ie stem change.',
      theory: [
        {
          id: 'u2-l22-t1',
          title: 'Conjugations of Tener and Venir',
          summary: 'Notice the irregular "yo" form (tengo / vengo) and the boot stem-change (e → ie).',
          table: {
            headers: ['Pronoun', 'TENER (to have)', 'VENIR (to come)'],
            rows: [
              ['yo', 'tengo (I have)', 'vengo (I come)'],
              ['tú', 'tienes', 'vienes'],
              ['él / ella / usted', 'tiene', 'viene'],
              ['nosotros/as', 'tenemos', 'venimos'],
              ['ellos / ellas / ustedes', 'tienen', 'vienen']
            ]
          },
          examples: [
            { spanish: 'Yo tengo un perro.', english: 'I have a dog.', audio: 'Yo tengo un perro.' },
            { spanish: '¿Vienes a la fiesta?', english: 'Are you coming to the party?', audio: '¿Vienes a la fiesta?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2201', spanish: 'tener', english: 'to have', category: 'Verbs' },
        { id: 'v2202', spanish: 'venir', english: 'to come', category: 'Verbs' }
      ],
      flashcards: [
        { id: 'f2201', front: 'yo (tener)', back: 'tengo', category: 'Tener/Venir' },
        { id: 'f2202', front: 'tú (tener)', back: 'tienes', category: 'Tener/Venir' },
        { id: 'f2203', front: 'yo (venir)', back: 'vengo', category: 'Tener/Venir' }
      ],
      exercises: [
        {
          id: 'u2-l22-ex1',
          type: 'multiple-choice',
          prompt: 'What is the "yo" form of "tener"?',
          audioPrompt: 'tengo',
          explanation: '"Tener" has an irregular 1st person form: "tengo".',
          options: [
            { id: 'opt1', text: 'tengo', subtext: 'Yo tengo', isCorrect: true },
            { id: 'opt2', text: 'tienes', subtext: 'Tú tienes', isCorrect: false },
            { id: 'opt3', text: 'teno', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'tiene', subtext: 'Él tiene', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 23: "Tener Que" and "Hay Que"
    // -------------------------------------------------------------
    {
      id: 'u2-l23',
      slug: 'tener-que-hay-que',
      unitId: 2,
      order: 23,
      title: '23. "Tener Que" & "Hay Que"',
      subtitle: 'Expressing Personal and Impersonal Obligations ("Must / Have To")',
      estimatedMinutes: 9,
      iconName: 'CheckSquare',
      summary: 'Learn how to express obligations: "tener que + infinitive" (someone specifically has to do something) vs "hay que + infinitive" (it is generally necessary to do something).',
      theory: [
        {
          id: 'u2-l23-t1',
          title: 'Personal vs. Impersonal Obligation',
          summary: 'Tener que = personal (I have to); Hay que = impersonal (One must).',
          formula: {
            pattern: 'tener [conjugated] + que + [infinitive] | hay que + [infinitive]',
            example: 'Tengo que estudiar (I have to study) | Hay que estudiar (One must study)'
          },
          examples: [
            { spanish: 'Tengo que estudiar para el examen.', english: 'I have to study for the exam.', audio: 'Tengo que estudiar para el examen.' },
            { spanish: 'Hay que comer bien.', english: 'One must eat well / It is necessary to eat well.', audio: 'Hay que comer bien.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2301', spanish: 'tener que', english: 'to have to (+ infinitive)', category: 'Obligation' },
        { id: 'v2302', spanish: 'hay que', english: 'one must / it is necessary to (+ infinitive)', category: 'Obligation' }
      ],
      flashcards: [
        { id: 'f2301', front: 'I have to work', back: 'Tengo que trabajar', category: 'Obligation' },
        { id: 'f2302', front: 'One must study (general)', back: 'Hay que estudiar', category: 'Obligation' }
      ],
      exercises: [
        {
          id: 'u2-l23-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "We have to study Spanish"',
          explanation: '"Nosotros tenemos que estudiar español".',
          options: [
            { id: 'opt1', text: 'Tenemos que estudiar español.', subtext: 'Correct personal obligation', isCorrect: true },
            { id: 'opt2', text: 'Hay que estudiamos español.', subtext: 'Incorrect syntax', isCorrect: false },
            { id: 'opt3', text: 'Tenemos de estudiar español.', subtext: 'Wrong preposition', isCorrect: false },
            { id: 'opt4', text: 'Tener que estudiar español.', subtext: 'Unconjugated verb', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 24: Expressions with "Tener"
    // -------------------------------------------------------------
    {
      id: 'u2-l24',
      slug: 'expressions-with-tener',
      unitId: 2,
      order: 24,
      title: '24. Expressions with "Tener"',
      subtitle: 'Idiomatic Sensations: Having hunger, thirst, heat, cold & age',
      estimatedMinutes: 9,
      iconName: 'Heart',
      summary: 'In English you say "I am hungry" or "I am 20 years old", but in Spanish you use the verb TENER ("to have"): tener hambre, tener sed, tener calor, tener frío, tener años.',
      theory: [
        {
          id: 'u2-l24-t1',
          title: 'High-Yield Idioms with Tener',
          summary: 'Spanish conceptualizes physical sensations as things you possess.',
          table: {
            headers: ['Spanish Expression', 'Literal Translation', 'Natural English Meaning'],
            rows: [
              ['tener hambre', 'to have hunger', 'to be hungry'],
              ['tener sed', 'to have thirst', 'to be thirsty'],
              ['tener calor', 'to have heat', 'to be hot'],
              ['tener frío', 'to have cold', 'to be cold'],
              ['tener miedo (de)', 'to have fear', 'to be afraid (of)'],
              ['tener prisa', 'to have hurry', 'to be in a hurry'],
              ['tener razón', 'to have reason', 'to be right / correct'],
              ['tener ... años', 'to have ... years', 'to be ... years old']
            ]
          },
          examples: [
            { spanish: 'Tengo mucha hambre.', english: 'I am very hungry. (Note: use "mucha" because hambre is a noun!)', audio: 'Tengo mucha hambre.' },
            { spanish: '¿Cuántos años tienes? — Tengo veinte años.', english: 'How old are you? — I am twenty years old.', audio: 'Tengo veinte años.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2401', spanish: 'hambre', english: 'hunger (f)', category: 'Tener Idioms' },
        { id: 'v2402', spanish: 'sed', english: 'thirst (f)', category: 'Tener Idioms' },
        { id: 'v2403', spanish: 'calor', english: 'heat (m)', category: 'Tener Idioms' },
        { id: 'v2404', spanish: 'frío', english: 'cold (m)', category: 'Tener Idioms' }
      ],
      flashcards: [
        { id: 'f2401', front: 'I am hungry', back: 'Tengo hambre', frontSubtext: 'Use TENER, not ESTAR', category: 'Tener Idioms' },
        { id: 'f2402', front: 'I am 25 years old', back: 'Tengo veinticinco años', category: 'Tener Idioms' }
      ],
      exercises: [
        {
          id: 'u2-l24-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I am very thirsty" in Spanish?',
          explanation: 'In Spanish, you say "Tengo mucha sed" (using tener + noun).',
          options: [
            { id: 'opt1', text: 'Tengo mucha sed.', subtext: 'Correct idiom', isCorrect: true },
            { id: 'opt2', text: 'Estoy muy sed.', subtext: 'Literal English trap', isCorrect: false },
            { id: 'opt3', text: 'Soy sed.', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'Tengo muy sed.', subtext: 'Must use mucha before nouns', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 25: Weather Expressions
    // -------------------------------------------------------------
    {
      id: 'u2-l25',
      slug: 'weather-expressions',
      unitId: 2,
      order: 25,
      title: '25. Weather Expressions',
      subtitle: 'Talking About Weather with "Hacer", "Estar" & Weather Verbs',
      estimatedMinutes: 9,
      iconName: 'Sun',
      summary: 'Learn how Spanish uses the verb "hacer" (hace sol, hace frío, hace buen tiempo), "estar" (está nublado), and dedicated weather verbs (llueve, nieva).',
      theory: [
        {
          id: 'u2-l25-t1',
          title: 'How Spanish Expresses Weather',
          summary: '1. Hace + noun; 2. Está + adjective; 3. Dedicated weather verbs.',
          table: {
            headers: ['Spanish', 'English Meaning', 'Verb Used'],
            rows: [
              ['Hace buen tiempo.', 'The weather is good.', 'Hacer (Hace)'],
              ['Hace sol.', 'It is sunny.', 'Hacer (Hace)'],
              ['Hace frío / calor.', 'It is cold / hot.', 'Hacer (Hace)'],
              ['Hace viento.', 'It is windy.', 'Hacer (Hace)'],
              ['Está nublado.', 'It is cloudy.', 'Estar (Está)'],
              ['Llueve (llover).', 'It is raining.', 'Weather verb'],
              ['Nieva (nevar).', 'It is snowing.', 'Weather verb']
            ]
          },
          examples: [
            { spanish: 'Hoy hace mucho sol en Madrid.', english: 'Today it is very sunny in Madrid.', audio: 'Hoy hace mucho sol en Madrid.' },
            { spanish: 'Está lloviendo ahora.', english: 'It is raining right now.', audio: 'Está lloviendo ahora.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2501', spanish: 'el tiempo', english: 'the weather / the time', category: 'Weather' },
        { id: 'v2502', spanish: 'el sol', english: 'the sun', category: 'Weather' },
        { id: 'v2503', spanish: 'el viento', english: 'the wind', category: 'Weather' },
        { id: 'v2504', spanish: 'llover (llueve)', english: 'to rain', category: 'Weather' }
      ],
      flashcards: [
        { id: 'f2501', front: 'It is cold (weather)', back: 'Hace frío', category: 'Weather' },
        { id: 'f2502', front: 'It is sunny', back: 'Hace sol', category: 'Weather' }
      ],
      exercises: [
        {
          id: 'u2-l25-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "It is very cold outside" in Spanish?',
          explanation: 'Weather temperature uses "hace": "Hace mucho frío".',
          options: [
            { id: 'opt1', text: 'Hace mucho frío.', subtext: 'Correct weather expression', isCorrect: true },
            { id: 'opt2', text: 'Es muy frío.', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt3', text: 'Está muy frío.', subtext: 'Used for objects, not weather', isCorrect: false },
            { id: 'opt4', text: 'Tiene frío.', subtext: 'Means a person feels cold', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 26: The Personal "a"
    // -------------------------------------------------------------
    {
      id: 'u2-l26',
      slug: 'the-personal-a',
      unitId: 2,
      order: 26,
      title: '26. The Personal "a"',
      subtitle: 'When and Why Spanish Places "a" Before People Direct Objects',
      estimatedMinutes: 8,
      iconName: 'UserCheck',
      summary: 'In Spanish, whenever the direct object of a verb is a specific person or a beloved pet, you MUST place the preposition "a" directly before them.',
      theory: [
        {
          id: 'u2-l26-t1',
          title: 'The Personal "a" Rule',
          summary: 'Objects that are things take no "a"; Objects that are people take "a".',
          content: [
            'Compare these two sentences:',
            '1. *Veo el libro.* (I see the book → Object is a thing, NO "a")',
            '2. *Veo **a** María.* (I see Maria → Object is a person, REQUIRED personal "a")'
          ],
          examples: [
            { spanish: 'Llamo a mi madre.', english: 'I call my mother.', audio: 'Llamo a mi madre.' },
            { spanish: 'Escucho al profesor.', english: 'I listen to the teacher. (a + el = al)', audio: 'Escucho al profesor.' },
            { spanish: 'Miro la televisión.', english: 'I watch television. (Thing → No personal a)', audio: 'Miro la televisión.' }
          ],
          proTip: 'The verb **tener** is an exception and does NOT take the personal "a" in standard sentences: "Tengo dos hermanos" (NOT "Tengo a dos hermanos").'
        }
      ],
      vocabulary: [
        { id: 'v2601', spanish: 'ver', english: 'to see', category: 'Verbs' },
        { id: 'v2602', spanish: 'llamar', english: 'to call', category: 'Verbs' },
        { id: 'v2603', spanish: 'escuchar', english: 'to listen to', category: 'Verbs' }
      ],
      flashcards: [
        { id: 'f2601', front: 'I see Maria', back: 'Veo a María', frontSubtext: 'Personal "a" required before people', category: 'Personal A' }
      ],
      exercises: [
        {
          id: 'u2-l26-ex1',
          type: 'multiple-choice',
          prompt: 'Which sentence correctly includes the personal "a"?',
          explanation: 'People direct objects require "a": "Visito a mis abuelos".',
          options: [
            { id: 'opt1', text: 'Visito a mis abuelos los domingos.', subtext: 'Correct personal "a"', isCorrect: true },
            { id: 'opt2', text: 'Visito mis abuelos los domingos.', subtext: 'Missing personal "a"', isCorrect: false },
            { id: 'opt3', text: 'Veo a la película.', subtext: 'Wrong: movie is an object', isCorrect: false },
            { id: 'opt4', text: 'Compro a un carro.', subtext: 'Wrong: car is an object', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 27: Contractions (al / del)
    // -------------------------------------------------------------
    {
      id: 'u2-l27',
      slug: 'contractions',
      unitId: 2,
      order: 27,
      title: '27. Contractions (al / del)',
      subtitle: 'The Only Two Mandatory Contractions in Spanish',
      estimatedMinutes: 8,
      iconName: 'Minimize2',
      summary: 'Unlike English which has dozens of contractions, Spanish has only TWO mandatory contractions: a + el = al, and de + el = del.',
      theory: [
        {
          id: 'u2-l27-t1',
          title: 'The Two Golden Contractions',
          summary: '1. a + el = al (to the); 2. de + el = del (of the / from the).',
          ruleHighlights: [
            { label: 'a + el → al', description: 'Voy al parque (NOT "Voy a el parque")', color: 'indigo' },
            { label: 'de + el → del', description: 'El libro del profesor (NOT "El libro de el profesor")', color: 'emerald' }
          ],
          content: [
            'Whenever the preposition **a** (to/at) or **de** (of/from) is directly followed by the masculine article **el**, they blend into **al** or **del**.',
            'Note: This ONLY happens with masculine singular "el". It never happens with "la", "los", or "las" (*a la casa, de los libros*).'
          ],
          examples: [
            { spanish: 'Vamos al supermercado.', english: 'We are going to the supermarket.', audio: 'Vamos al supermercado.' },
            { spanish: 'Es el carro del doctor.', english: 'It is the doctor\'s car.', audio: 'Es el carro del doctor.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2701', spanish: 'al (a + el)', english: 'to the / at the (m.sg)', category: 'Contractions' },
        { id: 'v2702', spanish: 'del (de + el)', english: 'of the / from the (m.sg)', category: 'Contractions' }
      ],
      flashcards: [
        { id: 'f2701', front: 'a + el = ?', back: 'al', category: 'Contractions' },
        { id: 'f2702', front: 'de + el = ?', back: 'del', category: 'Contractions' }
      ],
      exercises: [
        {
          id: 'u2-l27-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "We are going to the gym" (gimnasio is masculine: el gimnasio)',
          explanation: '"a + el" contracts into "al": "Vamos al gimnasio".',
          options: [
            { id: 'opt1', text: 'Vamos al gimnasio.', subtext: 'Correct contraction', isCorrect: true },
            { id: 'opt2', text: 'Vamos a el gimnasio.', subtext: 'Forbidden uncontracted form', isCorrect: false },
            { id: 'opt3', text: 'Vamos del gimnasio.', subtext: 'Del means "from the"', isCorrect: false },
            { id: 'opt4', text: 'Vamos a la gimnasio.', subtext: 'Gender error', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u2-exam',
    title: 'Unit 2 Comprehensive Mastery Exam',
    description: '10 questions testing Ser vs Estar, Negation, Questions, Possessives, Tener/Venir, Weather, Personal "a", and Contractions.',
    passingScore: 80,
    exercises: [
      {
        id: 'u2-ex-1',
        type: 'multiple-choice',
        prompt: 'Which verb is used for physical location: "Where is the library?"',
        explanation: 'Location requires ESTAR: "¿Dónde está la biblioteca?".',
        options: [
          { id: 'e1', text: '¿Dónde está la biblioteca?', subtext: 'Location → Estar', isCorrect: true },
          { id: 'e2', text: '¿Dónde es la biblioteca?', subtext: 'Ser is not for physical building location', isCorrect: false },
          { id: 'e3', text: '¿Dónde hay la biblioteca?', subtext: 'Incorrect', isCorrect: false },
          { id: 'e4', text: '¿Dónde tiene la biblioteca?', subtext: 'Incorrect', isCorrect: false }
        ]
      },
      {
        id: 'u2-ex-2',
        type: 'fill-in-blank',
        prompt: 'Fill in the contraction: "Voy ______ (to the) parque."',
        sentenceBefore: 'Voy',
        sentenceAfter: 'parque con mi perro.',
        correctAnswers: ['al', 'Al'],
        wordBank: ['al', 'a el', 'del', 'a la'],
        hint: 'a + el contraction.',
        explanation: 'a + el contracts into "al".'
      },
      {
        id: 'u2-ex-3',
        type: 'multiple-choice',
        prompt: 'How do you say "I am very hot (sensation)"?',
        explanation: 'Physical sensations use TENER: "Tengo mucho calor".',
        options: [
          { id: 'e1', text: 'Tengo mucho calor.', subtext: 'Correct idiom', isCorrect: true },
          { id: 'e2', text: 'Estoy muy caliente.', subtext: 'Has inappropriate double meaning', isCorrect: false },
          { id: 'e3', text: 'Soy calor.', subtext: 'Incorrect', isCorrect: false },
          { id: 'e4', text: 'Hace calor yo.', subtext: 'Incorrect', isCorrect: false }
        ]
      }
    ]
  }
};
