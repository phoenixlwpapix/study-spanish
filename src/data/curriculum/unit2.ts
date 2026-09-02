import type { Unit } from './types';

export const unit2: Unit = {
  id: 2,
  title: 'Unit 2: Ser vs Estar, Negation, Questions & Tener',
  subtitle: 'Lessons 15–27: The Two "To Be" Verbs, Syntax & Essential Daily Idioms',
  description: 'Master the fundamental difference between Ser and Estar, negative sentence patterns and double negatives, question formation with interrogative words, possessive adjectives, irregular verbs tener and venir, idiomatic expressions with tener, weather phrases, the personal "a", and contractions (al / del).',
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
            { label: 'SER (Essence / Identity)', description: 'Identity, origin, nationality, profession, permanent characteristics, and time.', color: 'indigo' },
            { label: 'ESTAR (State / Place)', description: 'Physical location, feelings, emotions, and temporary conditions or health.', color: 'emerald' }
          ],
          content: [
            'Both **ser** and **estar** translate into English as "to be" (*am, is, are*), but they are never interchangeable in Spanish.',
            'A helpful rhyme: *"For how you feel and where you are, always use the verb estar!"*',
            'Use **ser** to define fundamental traits that make something what it is. Use **estar** to describe current conditions, ongoing states, or physical positioning.'
          ],
          formula: {
            pattern: 'SER: [Sujeto] + soy/eres/es/somos/son + [Identidad / Rasgo] | ESTAR: [Sujeto] + estoy/estás/está/estamos/están + [Lugar / Estado]',
            example: 'Yo soy profesor (Ser - profession) | Yo estoy en la escuela (Estar - location)'
          },
          table: {
            headers: ['Subject Pronoun', 'SER (Present)', 'ESTAR (Present)', 'Example Meaning'],
            rows: [
              ['yo', 'soy', 'estoy', 'I am'],
              ['tú', 'eres', 'estás', 'you are (informal)'],
              ['él / ella / usted', 'es', 'está', 'he / she / you (formal) is/are'],
              ['nosotros / nosotras', 'somos', 'estamos', 'we are'],
              ['vosotros / vosotras', 'sois', 'estáis', 'you all are (Spain)'],
              ['ellos / ellas / ustedes', 'son', 'están', 'they / you all are']
            ]
          },
          examples: [
            { spanish: 'Yo soy estudiante.', english: 'I am a student. (Identity / Profession → SER)', breakdown: 'Permanent/defined role', audio: 'Yo soy estudiante.' },
            { spanish: 'Yo estoy en Madrid.', english: 'I am in Madrid. (Location → ESTAR)', breakdown: 'Physical position', audio: 'Yo estoy en Madrid.' },
            { spanish: 'La sopa está caliente.', english: 'The soup is hot. (Temporary condition → ESTAR)', breakdown: 'Current state of temperature', audio: 'La sopa está caliente.' },
            { spanish: 'La nieve es fría.', english: 'Snow is cold. (Inherent nature → SER)', breakdown: 'Essential characteristic', audio: 'La nieve es fría.' }
          ],
          proTip: 'Whenever you are describing where something or someone is physically located, Estar is 100% required, even if the location is permanent (e.g. "Madrid está en España").'
        }
      ],
      vocabulary: [
        { id: 'v1501', spanish: 'ser', english: 'to be (inherent)', category: 'Verbs', exampleSentence: { spanish: 'Ella es muy amable.', english: 'She is very kind.' } },
        { id: 'v1502', spanish: 'estar', english: 'to be (state/location)', category: 'Verbs', exampleSentence: { spanish: 'El café está listo.', english: 'The coffee is ready.' } },
        { id: 'v1503', spanish: 'feliz', english: 'happy (state or personality)', category: 'Adjectives', exampleSentence: { spanish: 'Hoy estoy muy feliz.', english: 'Today I am very happy.' } },
        { id: 'v1504', spanish: 'triste', english: 'sad', category: 'Adjectives', exampleSentence: { spanish: '¿Por qué estás triste?', english: 'Why are you sad?' } },
        { id: 'v1505', spanish: 'cansado / cansada', english: 'tired', gender: 'masculine', category: 'Adjectives', exampleSentence: { spanish: 'Nosotros estamos cansados.', english: 'We are tired.' } },
        { id: 'v1506', spanish: 'enfermo / enferma', english: 'sick / ill', gender: 'masculine', category: 'Health', exampleSentence: { spanish: 'Mi hermano está enfermo.', english: 'My brother is sick.' } },
        { id: 'v1507', spanish: 'médico / médica', english: 'doctor', category: 'Professions', exampleSentence: { spanish: 'Mi madre es médica.', english: 'My mother is a doctor.' } }
      ],
      flashcards: [
        { id: 'f1501', front: 'I am (SER vs ESTAR)', back: 'soy / estoy', frontSubtext: 'Essential vs State', backSubtext: 'Yo form', category: 'Ser vs Estar' },
        { id: 'f1502', front: 'He is in Spain (location)', back: 'Él está en España', frontSubtext: 'Location uses ESTAR', backSubtext: '3rd person singular', category: 'Ser vs Estar' },
        { id: 'f1503', front: 'She is a doctor (profession)', back: 'Ella es médica', frontSubtext: 'Profession uses SER', backSubtext: 'No article needed with profession', category: 'Ser vs Estar' },
        { id: 'f1504', front: 'We are tired (condition)', back: 'Estamos cansados', frontSubtext: 'Temporary state', backSubtext: 'Nosotros form', category: 'Ser vs Estar' }
      ],
      exercises: [
        {
          id: 'u2-l15-ex1',
          type: 'multiple-choice',
          prompt: 'How do you ask "Where are you?" (asking about location) to a friend?',
          explanation: 'Physical location always requires the verb "estar": "¿Dónde estás tú?".',
          options: [
            { id: 'opt1', text: '¿Dónde estás tú?', subtext: 'Location with estar', isCorrect: true },
            { id: 'opt2', text: '¿Dónde eres tú?', subtext: 'Incorrect: ser is not used for location', isCorrect: false },
            { id: 'opt3', text: '¿Dónde somos?', subtext: 'Incorrect subject form (we)', isCorrect: false },
            { id: 'opt4', text: '¿Dónde son?', subtext: 'Incorrect subject form (they)', isCorrect: false }
          ]
        },
        {
          id: 'u2-l15-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the correct form of "ser" or "estar" for nationality / origin:',
          sentenceBefore: 'María',
          sentenceAfter: 'de México.',
          correctAnswers: ['es', 'Es'],
          wordBank: ['es', 'está', 'son', 'están'],
          hint: 'Origin / nationality always requires SER.',
          explanation: 'Origin is an inherent characteristic of a person, so it requires "ser": "María es de México".'
        },
        {
          id: 'u2-l15-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "I am tired today"',
          targetEnglish: 'I am tired today',
          correctTokens: ['Estoy', 'cansado', 'hoy'],
          availableTokens: ['Estoy', 'cansado', 'hoy', 'Soy', 'está', 'es'],
          explanation: '"Estoy cansado hoy." Being tired is a temporary physical state, which requires ESTAR.'
        },
        {
          id: 'u2-l15-ex4',
          type: 'matching-pairs',
          prompt: 'Match each English meaning with the correct Spanish sentence:',
          explanation: 'Remember: professions and permanent traits use SER, while temporary conditions and locations use ESTAR.',
          pairs: [
            { id: 'p1', left: 'Ella es inteligente.', right: 'She is intelligent. (Inherent trait - SER)' },
            { id: 'p2', left: 'Ella está en casa.', right: 'She is at home. (Location - ESTAR)' },
            { id: 'p3', left: 'Nosotros somos amigos.', right: 'We are friends. (Relationship - SER)' },
            { id: 'p4', left: 'Nosotros estamos enfermos.', right: 'We are sick. (Health condition - ESTAR)' }
          ]
        },
        {
          id: 'u2-l15-ex5',
          type: 'error-identification',
          prompt: 'Find the mistake in this sentence describing current location:',
          incorrectSentence: 'Mis amigos son en la biblioteca ahora.',
          errorWord: 'son',
          options: ['están', 'somos', 'estás', 'es'],
          correctOption: 'están',
          explanation: 'To express location (where someone is), use ESTAR. For "mis amigos" (they), the correct form is "están".'
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
            { label: 'D - Description', description: 'El cielo es azul (The sky is blue) / Es alto (He is tall)', color: 'indigo' },
            { label: 'O - Occupation', description: 'Mi padre es profesor (My father is a teacher)', color: 'indigo' },
            { label: 'C - Characteristic', description: 'Carlos es muy amable e inteligente (Carlos is friendly and smart)', color: 'indigo' },
            { label: 'T - Time & Date', description: 'Son las tres / Hoy es lunes (It is 3 o\'clock / Today is Monday)', color: 'indigo' },
            { label: 'O - Origin / Material', description: 'Somos de España / La mesa es de madera (We are from Spain / Table is wood)', color: 'indigo' },
            { label: 'R - Relationship', description: 'Elena es mi hermana / Juan es mi amigo (Elena is my sister)', color: 'indigo' }
          ],
          content: [
            'Whenever you are evaluating whether to use *ser*, run through the **DOCTOR** checklist.',
            'Note especially **Time & Date**: telling the hour, day, month, or season always uses *ser* (e.g. *Son las cuatro*, *Hoy es viernes*).'
          ],
          examples: [
            { spanish: 'Son las dos de la tarde.', english: 'It is 2:00 PM. (Time → SER)', breakdown: 'Time expressions take Ser', audio: 'Son las dos de la tarde.' },
            { spanish: 'Ellos son mis hermanos.', english: 'They are my brothers. (Relationship → SER)', breakdown: 'Family connection', audio: 'Ellos son mis hermanos.' },
            { spanish: 'El vaso es de vidrio.', english: 'The glass is made of glass. (Material → SER)', breakdown: 'Composition of an object', audio: 'El vaso es de vidrio.' }
          ]
        },
        {
          id: 'u2-l16-t2',
          title: 'The P.L.A.C.E. Acronym for ESTAR',
          summary: 'Use ESTAR whenever a sentence relates to one of these 5 categories.',
          ruleHighlights: [
            { label: 'P - Position', description: 'El libro está en la mesa (The book is lying on the table)', color: 'emerald' },
            { label: 'L - Location', description: 'Estamos en el parque (We are in the park)', color: 'emerald' },
            { label: 'A - Action (-ando/-iendo)', description: 'Estoy comiendo una manzana (I am eating an apple)', color: 'emerald' },
            { label: 'C - Condition', description: 'El teléfono está roto / La ventana está abierta (Broken / Open)', color: 'emerald' },
            { label: 'E - Emotion', description: '¿Por qué estás enojado? / Estoy feliz (Why are you angry? / I am happy)', color: 'emerald' }
          ],
          content: [
            'Whenever something changes from day to day, describes a physical location, or is an ongoing action, **P.L.A.C.E.** demands *estar*.'
          ],
          examples: [
            { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom? (Location → ESTAR)', breakdown: 'Physical location query', audio: '¿Dónde está el baño?' },
            { spanish: 'La puerta está cerrada.', english: 'The door is closed. (Condition → ESTAR)', breakdown: 'Current state of the door', audio: 'La puerta está cerrada.' },
            { spanish: 'Ella está contenta hoy.', english: 'She is pleased/happy today. (Emotion → ESTAR)', breakdown: 'Current mood', audio: 'Ella está contenta hoy.' }
          ],
          watchOut: 'Do not confuse physical characteristics (SER: "Él es alto") with temporary physical conditions (ESTAR: "Él está cansado").'
        }
      ],
      vocabulary: [
        { id: 'v1601', spanish: 'la hora', english: 'the hour / time', gender: 'feminine', category: 'Time', exampleSentence: { spanish: '¿Qué hora es?', english: 'What time is it?' } },
        { id: 'v1602', spanish: 'ocupado / ocupada', english: 'busy', category: 'Adjectives', exampleSentence: { spanish: 'El jefe está muy ocupado.', english: 'The boss is very busy.' } },
        { id: 'v1603', spanish: 'abierto / abierta', english: 'open', category: 'Conditions', exampleSentence: { spanish: 'La tienda está abierta.', english: 'The shop is open.' } },
        { id: 'v1604', spanish: 'cerrado / cerrada', english: 'closed', category: 'Conditions', exampleSentence: { spanish: 'El banco está cerrado hoy.', english: 'The bank is closed today.' } },
        { id: 'v1605', spanish: 'enojado / enojada', english: 'angry / mad', category: 'Feelings', exampleSentence: { spanish: '¿Por qué estás enojado?', english: 'Why are you angry?' } },
        { id: 'v1606', spanish: 'limpio / limpia', english: 'clean', category: 'Conditions', exampleSentence: { spanish: 'La cocina está limpia.', english: 'The kitchen is clean.' } },
        { id: 'v1607', spanish: 'sucio / sucia', english: 'dirty', category: 'Conditions', exampleSentence: { spanish: 'Los platos están sucios.', english: 'The dishes are dirty.' } }
      ],
      flashcards: [
        { id: 'f1601', front: 'SER Mnemonic', back: 'D.O.C.T.O.R.\n(Description, Occupation, Characteristic, Time, Origin, Relationship)', category: 'Ser vs Estar' },
        { id: 'f1602', front: 'ESTAR Mnemonic', back: 'P.L.A.C.E.\n(Position, Location, Action, Condition, Emotion)', category: 'Ser vs Estar' },
        { id: 'f1603', front: 'Telling time uses which verb?', back: 'SER (Son las tres / Es la una)', frontSubtext: 'Time & Date category', category: 'Ser vs Estar' },
        { id: 'f1604', front: 'Open / Closed (abierto / cerrado)', back: 'Use ESTAR (La puerta está abierta)', frontSubtext: 'Condition category', category: 'Ser vs Estar' }
      ],
      exercises: [
        {
          id: 'u2-l16-ex1',
          type: 'multiple-choice',
          prompt: 'Which verb and form correctly expresses "It is 4:00 PM"?',
          explanation: 'Telling time always uses SER: "Son las cuatro de la tarde".',
          options: [
            { id: 'opt1', text: 'Son las cuatro de la tarde.', subtext: 'Time → SER', isCorrect: true },
            { id: 'opt2', text: 'Están las cuatro de la tarde.', subtext: 'Incorrect: estar is not for time', isCorrect: false },
            { id: 'opt3', text: 'Hay las cuatro de la tarde.', subtext: 'Incorrect: hay means there is/are', isCorrect: false },
            { id: 'opt4', text: 'Es las cuatro de la tarde.', subtext: 'Incorrect agreement (plural hours take "son")', isCorrect: false }
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
          hint: 'Open/closed is a temporary condition (P.L.A.C.E.).',
          explanation: '"Cerrada" is a temporary condition (Condition → ESTAR): "La tienda está cerrada".'
        },
        {
          id: 'u2-l16-ex3',
          type: 'matching-pairs',
          prompt: 'Match each phrase to its underlying DOCTOR / PLACE category:',
          explanation: 'Categorizing by DOCTOR and PLACE helps you pick the right verb instantly.',
          pairs: [
            { id: 'p1', left: 'Son las nueve.', right: 'Time (SER - DOCTOR)' },
            { id: 'p2', left: 'Mi tío es abogado.', right: 'Occupation (SER - DOCTOR)' },
            { id: 'p3', left: 'El vaso está roto.', right: 'Condition (ESTAR - PLACE)' },
            { id: 'p4', left: 'Estamos en el cine.', right: 'Location (ESTAR - PLACE)' }
          ]
        },
        {
          id: 'u2-l16-ex4',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "The kitchen is clean today"',
          targetEnglish: 'The kitchen is clean today',
          correctTokens: ['La', 'cocina', 'está', 'limpia', 'hoy'],
          availableTokens: ['La', 'cocina', 'está', 'limpia', 'hoy', 'es', 'sucio', 'son'],
          explanation: '"La cocina está limpia hoy." (Cleanliness is a state/condition → ESTAR).'
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
      summary: 'Discover how a pair of identical adjectives drastically changes meaning depending on whether you pair them with "ser" or "estar" (e.g. ser listo = to be smart vs estar listo = to be ready).',
      theory: [
        {
          id: 'u2-l17-t1',
          title: 'Adjectives with Dual Meanings',
          summary: 'The choice between Ser and Estar completely alters the definition of certain adjectives.',
          content: [
            'Because *ser* denotes essential qualities and *estar* denotes temporary states, combining them with certain adjectives produces totally distinct concepts.',
            'For example, *ser aburrido* means that a person or movie is inherently boring, while *estar aburrido* means you currently feel bored!'
          ],
          table: {
            headers: ['Adjective', 'With SER (Inherent Trait)', 'With ESTAR (Current State)'],
            rows: [
              ['listo / lista', 'ser listo (to be clever / smart)', 'estar listo (to be ready / prepared)'],
              ['aburrido / aburrida', 'ser aburrido (to be boring)', 'estar aburrido (to feel bored)'],
              ['rico / rica', 'ser rico (to be wealthy / rich in money)', 'estar rico (to taste delicious / flavorful)'],
              ['malo / mala', 'ser malo (to be bad / evil / poor quality)', 'estar malo (to be sick / ill / spoiled food)'],
              ['verde', 'ser verde (to be green in color)', 'estar verde (to be unripe / inexperienced)'],
              ['seguro / segura', 'ser seguro (to be safe / reliable)', 'estar seguro (to be certain / sure)']
            ]
          },
          examples: [
            { spanish: 'Él es muy listo.', english: 'He is very smart / clever. (Trait → SER)', breakdown: 'Intelligence', audio: 'Él es muy listo.' },
            { spanish: '¿Estás listo?', english: 'Are you ready? (State → ESTAR)', breakdown: 'Readiness', audio: '¿Estás listo?' },
            { spanish: 'La clase es aburrida.', english: 'The class is boring. (Inherent trait → SER)', breakdown: 'Quality of the class', audio: 'La clase es aburrida.' },
            { spanish: 'Estoy aburrido en casa.', english: 'I feel bored at home. (State → ESTAR)', breakdown: 'Temporary emotion', audio: 'Estoy aburrido en casa.' },
            { spanish: 'Esta paella está muy rica.', english: 'This paella is delicious! (Taste state → ESTAR)', breakdown: 'Flavor evaluation', audio: 'Esta paella está muy rica.' }
          ],
          proTip: 'Complimenting food at a dinner party? Always say "¡La comida está deliciosa / rica!" using ESTAR to praise how it tastes right now.'
        }
      ],
      vocabulary: [
        { id: 'v1701', spanish: 'listo / lista', english: 'smart (ser) / ready (estar)', category: 'Adjectives', exampleSentence: { spanish: 'Ya estamos listos para salir.', english: 'We are already ready to leave.' } },
        { id: 'v1702', spanish: 'aburrido / aburrida', english: 'boring (ser) / bored (estar)', category: 'Adjectives', exampleSentence: { spanish: 'La película es muy aburrida.', english: 'The movie is very boring.' } },
        { id: 'v1703', spanish: 'rico / rica', english: 'wealthy (ser) / delicious (estar)', category: 'Adjectives', exampleSentence: { spanish: 'El pastel está riquísimo.', english: 'The cake is delicious.' } },
        { id: 'v1704', spanish: 'malo / mala', english: 'bad (ser) / sick or spoiled (estar)', category: 'Adjectives', exampleSentence: { spanish: 'La leche está mala.', english: 'The milk is spoiled.' } },
        { id: 'v1705', spanish: 'seguro / segura', english: 'safe (ser) / sure (estar)', category: 'Adjectives', exampleSentence: { spanish: 'Estoy seguro de la respuesta.', english: 'I am sure of the answer.' } },
        { id: 'v1706', spanish: 'verde', english: 'green (ser) / unripe (estar)', category: 'Adjectives', exampleSentence: { spanish: 'Los plátanos están verdes.', english: 'The bananas are unripe.' } }
      ],
      flashcards: [
        { id: 'f1701', front: 'ser listo vs estar listo', back: 'to be smart vs to be ready', category: 'Meaning Shifts' },
        { id: 'f1702', front: 'ser aburrido vs estar aburrido', back: 'to be boring vs to be bored', category: 'Meaning Shifts' },
        { id: 'f1703', front: 'ser rico vs estar rico', back: 'to be wealthy vs to be delicious', category: 'Meaning Shifts' },
        { id: 'f1704', front: 'ser seguro vs estar seguro', back: 'to be safe vs to be sure/certain', category: 'Meaning Shifts' }
      ],
      exercises: [
        {
          id: 'u2-l17-ex1',
          type: 'multiple-choice',
          prompt: 'How do you ask "Are you ready?" in Spanish?',
          explanation: '"Estar listo" means to be ready (state), whereas "ser listo" means to be clever/smart.',
          options: [
            { id: 'opt1', text: '¿Estás listo?', subtext: 'Ready (state → estar)', isCorrect: true },
            { id: 'opt2', text: '¿Eres listo?', subtext: 'Means "Are you clever/smart?"', isCorrect: false },
            { id: 'opt3', text: '¿Tienes listo?', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: '¿Hay listo?', subtext: 'Incorrect expression', isCorrect: false }
          ]
        },
        {
          id: 'u2-l17-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete: "The food is delicious today!"',
          sentenceBefore: 'La comida',
          sentenceAfter: 'muy rica hoy.',
          correctAnswers: ['está', 'Está'],
          wordBank: ['está', 'es', 'son', 'están'],
          hint: 'Food taste uses ESTAR rico.',
          explanation: 'To say food is delicious / tastes good, Spanish uses "estar rico": "La comida está muy rica".'
        },
        {
          id: 'u2-l17-ex3',
          type: 'matching-pairs',
          prompt: 'Match each Spanish phrase to its exact nuance:',
          explanation: 'Mastering these shifts will make your Spanish sound natural and precise.',
          pairs: [
            { id: 'p1', left: 'Juan es aburrido.', right: 'Juan is a boring person.' },
            { id: 'p2', left: 'Juan está aburrido.', right: 'Juan feels bored right now.' },
            { id: 'p3', left: 'El coche es seguro.', right: 'The car is safe / dependable.' },
            { id: 'p4', left: 'El conductor está seguro.', right: 'The driver is sure / confident.' }
          ]
        },
        {
          id: 'u2-l17-ex4',
          type: 'error-identification',
          prompt: 'Find the error if you want to say "The bananas are unripe":',
          incorrectSentence: 'Los plátanos son verdes para comer.',
          errorWord: 'son',
          options: ['están', 'es', 'está', 'tienen'],
          correctOption: 'están',
          explanation: '"Estar verde" means unripe. "Ser verde" would mean having green skin color as a permanent attribute.'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 18: Ser and Estar IV (Locations of Events vs Physical Objects)
    // -------------------------------------------------------------
    {
      id: 'u2-l18',
      slug: 'ser-and-estar-4',
      unitId: 2,
      order: 18,
      title: '18. Ser and Estar IV',
      subtitle: 'Location of Objects vs. Location of Events',
      estimatedMinutes: 8,
      iconName: 'MapPin',
      summary: 'Learn the advanced nuance: physical objects and people use "estar" for location, but events (parties, concerts, meetings) use "ser" because "ser" means "to take place".',
      theory: [
        {
          id: 'u2-l18-t1',
          title: 'Location of Physical Objects vs. Events (To Take Place)',
          summary: 'Objects/people use ESTAR, while events/gatherings use SER.',
          ruleHighlights: [
            { label: 'Physical Entities → ESTAR', description: 'People, buildings, books, cities (e.g. El museo está en el centro)', color: 'emerald' },
            { label: 'Events / Occurrences → SER', description: 'Parties, concerts, classes, meetings (e.g. La fiesta es en mi casa)', color: 'indigo' }
          ],
          content: [
            'A common trap is assuming all locations use *estar*. When referring to an event (a wedding, class, party, game, conference), **SER** is used in the sense of *"to take place"* or *"to occur"*.',
            'Compare: *"El hotel está en la playa"* (the physical hotel building is located on the beach) vs *"La boda es en el hotel"* (the wedding takes place at the hotel).'
          ],
          formula: {
            pattern: 'Physical object + ESTAR + en [lugar] | Evento + SER + en [lugar / hora]',
            example: 'La fiesta es a las ocho (Event time) | La fiesta es en mi casa (Event location)'
          },
          examples: [
            { spanish: 'El concierto es en el estadio.', english: 'The concert is (takes place) in the stadium. (Event → SER)', breakdown: 'Concert is an event', audio: 'El concierto es en el estadio.' },
            { spanish: 'El estadio está en el norte de la ciudad.', english: 'The stadium is located in the north of the city. (Physical building → ESTAR)', breakdown: 'Physical building', audio: 'El estadio está en el norte de la ciudad.' },
            { spanish: 'La reunión es a las diez en la oficina.', english: 'The meeting is at 10 in the office. (Event → SER)', breakdown: 'Meeting is an event', audio: 'La reunión es a las diez en la oficina.' }
          ],
          watchOut: 'Saying "La fiesta está en mi casa" is grammatically incorrect in standard Spanish. Always say "La fiesta es en mi casa".'
        }
      ],
      vocabulary: [
        { id: 'v1801', spanish: 'la fiesta', english: 'the party', gender: 'feminine', category: 'Events', exampleSentence: { spanish: 'La fiesta es el sábado.', english: 'The party is on Saturday.' } },
        { id: 'v1802', spanish: 'el concierto', english: 'the concert', gender: 'masculine', category: 'Events', exampleSentence: { spanish: 'El concierto es en el parque.', english: 'The concert takes place in the park.' } },
        { id: 'v1803', spanish: 'la reunión', english: 'the meeting', gender: 'feminine', category: 'Events', exampleSentence: { spanish: 'La reunión es mañana.', english: 'The meeting is tomorrow.' } },
        { id: 'v1804', spanish: 'el partido', english: 'the game / match', gender: 'masculine', category: 'Events', exampleSentence: { spanish: 'El partido de fútbol es a las cinco.', english: 'The soccer match is at 5.' } },
        { id: 'v1805', spanish: 'el estadio', english: 'the stadium', gender: 'masculine', category: 'Places', exampleSentence: { spanish: 'El estadio está cerca.', english: 'The stadium is nearby.' } }
      ],
      flashcards: [
        { id: 'f1801', front: 'Where does the party take place?', back: '¿Dónde es la fiesta?', frontSubtext: 'Events use SER', category: 'Ser vs Estar' },
        { id: 'f1802', front: 'Where is the hotel located?', back: '¿Dónde está el hotel?', frontSubtext: 'Physical buildings use ESTAR', category: 'Ser vs Estar' },
        { id: 'f1803', front: 'The meeting is in room 4', back: 'La reunión es en la sala 4', frontSubtext: 'Event uses SER', category: 'Ser vs Estar' }
      ],
      exercises: [
        {
          id: 'u2-l18-ex1',
          type: 'multiple-choice',
          prompt: 'Where does the wedding take place? Choose the grammatically correct Spanish sentence:',
          explanation: 'Events (weddings, parties, concerts) use SER to specify their location because it means "takes place".',
          options: [
            { id: 'opt1', text: 'La boda es en la iglesia.', subtext: 'Event location → SER', isCorrect: true },
            { id: 'opt2', text: 'La boda está en la iglesia.', subtext: 'Incorrect: events take ser', isCorrect: false },
            { id: 'opt3', text: 'La boda tiene en la iglesia.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: 'La boda hay en la iglesia.', subtext: 'Incorrect verb', isCorrect: false }
          ]
        },
        {
          id: 'u2-l18-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete: "The soccer game takes place at the municipal stadium."',
          sentenceBefore: 'El partido de fútbol',
          sentenceAfter: 'en el estadio municipal.',
          correctAnswers: ['es', 'Es'],
          wordBank: ['es', 'está', 'son', 'están'],
          hint: 'A game is an event (takes place → SER).',
          explanation: 'Games are events, so they use "es" (SER) to indicate where they take place.'
        },
        {
          id: 'u2-l18-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "The party is at my house tonight"',
          targetEnglish: 'The party is at my house tonight',
          correctTokens: ['La', 'fiesta', 'es', 'en', 'mi', 'casa', 'esta', 'noche'],
          availableTokens: ['La', 'fiesta', 'es', 'en', 'mi', 'casa', 'esta', 'noche', 'está', 'son'],
          explanation: '"La fiesta es en mi casa esta noche." (Events use SER to express where they occur).'
        },
        {
          id: 'u2-l18-ex4',
          type: 'matching-pairs',
          prompt: 'Match each scenario to either SER or ESTAR:',
          explanation: 'Physical items and places require ESTAR, while organized events take SER.',
          pairs: [
            { id: 'p1', left: 'El museo municipal...', right: '...está en el centro. (Physical building)' },
            { id: 'p2', left: 'La exposición de arte...', right: '...es en el museo. (Event taking place)' },
            { id: 'p3', left: 'Mis amigos...', right: '...están en la cafetería. (People location)' },
            { id: 'p4', left: 'El examen final...', right: '...es en el aula 3. (Event taking place)' }
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
      subtitle: 'Basic "No", Negative Words & Spanish Double Negatives',
      estimatedMinutes: 9,
      iconName: 'Ban',
      summary: 'Learn how to form negative statements by placing "no" before the conjugated verb, and master Spanish double/triple negatives (e.g. "No veo a nadie nunca").',
      theory: [
        {
          id: 'u2-l19-t1',
          title: 'The Basic Rule: "No" Before the Verb',
          summary: 'To make a sentence negative, place "no" directly in front of the conjugated verb.',
          formula: {
            pattern: 'No + [Verbo Conjugado] + [Resto]',
            example: 'Yo no hablo francés (I do not speak French)'
          },
          examples: [
            { spanish: 'Yo no fumo.', english: 'I do not smoke.', audio: 'Yo no fumo.' },
            { spanish: 'Ellos no viven en España.', english: 'They do not live in Spain.', audio: 'Ellos no viven en España.' }
          ]
        },
        {
          id: 'u2-l19-t2',
          title: 'Negative Words and Double Negatives',
          summary: 'Unlike English, Spanish embraces and often requires double negatives.',
          table: {
            headers: ['Affirmative Word', 'Negative Word', 'English Translation'],
            rows: [
              ['algo (something)', 'nada', 'nothing / not anything'],
              ['alguien (someone)', 'nadie', 'no one / nobody / not anyone'],
              ['siempre (always)', 'nunca / jamás', 'never / not ever'],
              ['también (also / too)', 'tampoco', 'neither / not either'],
              ['alguno/a (some / any)', 'ninguno/a (ningún)', 'none / not any / no'],
              ['o... o (either... or)', 'ni... ni', 'neither... nor']
            ]
          },
          content: [
            'In Spanish, if a negative word follows the verb, you **must** place **no** before the verb as well. This creates a standard double negative.',
            'Alternatively, you can place the negative word *before* the verb without "no" (e.g., *Nadie sabe* = *No sabe nadie*).'
          ],
          examples: [
            { spanish: 'No veo a nadie.', english: 'I don\'t see anybody. (No + verb + nadie)', audio: 'No veo a nadie.' },
            { spanish: 'Nadie habla.', english: 'Nobody speaks. (Nadie before verb without "no")', audio: 'Nadie habla.' },
            { spanish: 'Yo no tengo nada.', english: 'I don\'t have anything / I have nothing.', audio: 'Yo no tengo nada.' },
            { spanish: 'Ella nunca come carne.', english: 'She never eats meat.', audio: 'Ella nunca come carne.' }
          ],
          proTip: 'Before a masculine singular noun, "ninguno" shortens to "ningún" with an accent: "No tengo ningún libro" (I don\'t have any book).'
        }
      ],
      vocabulary: [
        { id: 'v1901', spanish: 'nada', english: 'nothing', category: 'Negation', exampleSentence: { spanish: 'No hay nada aquí.', english: 'There is nothing here.' } },
        { id: 'v1902', spanish: 'nadie', english: 'nobody / no one', category: 'Negation', exampleSentence: { spanish: 'Nadie está en la sala.', english: 'Nobody is in the room.' } },
        { id: 'v1903', spanish: 'nunca', english: 'never', category: 'Negation', exampleSentence: { spanish: 'Nunca llego tarde.', english: 'I never arrive late.' } },
        { id: 'v1904', spanish: 'tampoco', english: 'neither / not either', category: 'Negation', exampleSentence: { spanish: 'Yo tampoco sé.', english: 'I don\'t know either.' } },
        { id: 'v1905', spanish: 'ningún / ninguno', english: 'no / none / not any', gender: 'masculine', category: 'Negation', exampleSentence: { spanish: 'No tengo ningún problema.', english: 'I have no problem.' } },
        { id: 'v1906', spanish: 'jamás', english: 'never / ever', category: 'Negation', exampleSentence: { spanish: 'Jamás digo mentiras.', english: 'I never tell lies.' } }
      ],
      flashcards: [
        { id: 'f1901', front: 'nada vs nadie', back: 'nothing vs nobody', category: 'Negation' },
        { id: 'f1902', front: 'también vs tampoco', back: 'also/too vs neither/either', category: 'Negation' },
        { id: 'f1903', front: 'Spanish Double Negative rule', back: 'No + verb + negative word\n(e.g. No tengo nada)', frontSubtext: 'Standard in Spanish', category: 'Negation' },
        { id: 'f1904', front: 'Ninguno before masculine singular noun', back: 'Shortens to "ningún"\n(e.g. ningún amigo)', category: 'Negation' }
      ],
      exercises: [
        {
          id: 'u2-l19-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I don\'t know anyone" in Spanish using double negation?',
          explanation: 'Spanish double negative structure: "No" + conjugated verb + "a nadie".',
          options: [
            { id: 'opt1', text: 'No conozco a nadie.', subtext: 'Correct double negative', isCorrect: true },
            { id: 'opt2', text: 'No conozco a alguien.', subtext: 'Incorrect: "alguien" is affirmative', isCorrect: false },
            { id: 'opt3', text: 'Conozco no nadie.', subtext: 'Incorrect word order', isCorrect: false },
            { id: 'opt4', text: 'No conozco nada.', subtext: 'Means "I don\'t know anything" (objects, not people)', isCorrect: false }
          ]
        },
        {
          id: 'u2-l19-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete: "I don\'t want anything either" (Neither do I want anything):',
          sentenceBefore: 'Yo',
          sentenceAfter: 'quiero nada.',
          correctAnswers: ['tampoco', 'Tampoco'],
          wordBank: ['tampoco', 'también', 'nada', 'siempre'],
          hint: 'The opposite of "también" (also) is "tampoco" (neither).',
          explanation: '"Tampoco" means "neither / not either". Placing it before the verb avoids adding "no".'
        },
        {
          id: 'u2-l19-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "We never travel by bus"',
          targetEnglish: 'We never travel by bus',
          correctTokens: ['Nosotros', 'nunca', 'viajamos', 'en', 'autobús'],
          availableTokens: ['Nosotros', 'nunca', 'viajamos', 'en', 'autobús', 'siempre', 'no', 'nada'],
          explanation: '"Nosotros nunca viajamos en autobús." (When "nunca" comes before the verb, "no" is not used).'
        },
        {
          id: 'u2-l19-ex4',
          type: 'error-identification',
          prompt: 'Find the error in this sentence: "I don\'t have any dollar"',
          incorrectSentence: 'No tengo ninguno dólar en mi cartera.',
          errorWord: 'ninguno',
          options: ['ningún', 'ninguna', 'nada', 'alguno'],
          correctOption: 'ningún',
          explanation: 'Before a masculine singular noun like "dólar", "ninguno" apocopates (shortens) to "ningún".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 20: Questions
    // -------------------------------------------------------------
    {
      id: 'u2-l20',
      slug: 'questions',
      unitId: 2,
      order: 20,
      title: '20. Questions',
      subtitle: 'Forming Questions & All Spanish Interrogative Words',
      estimatedMinutes: 9,
      iconName: 'HelpCircle',
      summary: 'Master inverted question marks (¿?), simple yes/no question inversion, and essential question words like ¿Qué?, ¿Quién?, ¿Dónde?, ¿Cuándo?, ¿Por qué?, and ¿Cómo?.',
      theory: [
        {
          id: 'u2-l20-t1',
          title: 'Question Structure & The Interrogative Words',
          summary: 'All Spanish question words carry written accent marks and inverted question marks (¿...?).',
          ruleHighlights: [
            { label: '¿Qué? vs ¿Cuál?', description: '¿Qué? asks for definitions/explanations; ¿Cuál? asks for a choice among options.', color: 'indigo' },
            { label: '¿Por qué? vs Porque', description: '¿Por qué? (two words, accented) = Why? | Porque (one word) = Because.', color: 'rose' }
          ],
          table: {
            headers: ['Question Word', 'English', 'Example', 'Meaning'],
            rows: [
              ['¿Qué?', 'What?', '¿Qué compras?', 'What are you buying?'],
              ['¿Quién? / ¿Quiénes?', 'Who? (sing / plur)', '¿Quién es ella?', 'Who is she?'],
              ['¿Dónde? / ¿Adónde?', 'Where? / Where to?', '¿Dónde vives?', 'Where do you live?'],
              ['¿De dónde?', 'Where from?', '¿De dónde eres?', 'Where are you from?'],
              ['¿Cuándo?', 'When?', '¿Cuándo empieza?', 'When does it start?'],
              ['¿Por qué?', 'Why?', '¿Por qué estudias?', 'Why do you study?'],
              ['¿Cómo?', 'How?', '¿Cómo estás?', 'How are you?'],
              ['¿Cuál? / ¿Cuáles?', 'Which? / What?', '¿Cuál prefieres?', 'Which one do you prefer?'],
              ['¿Cuánto/a/os/as?', 'How much? / How many?', '¿Cuántos años tienes?', 'How old are you?']
            ]
          },
          examples: [
            { spanish: '¿Qué es esto?', english: 'What is this? (Definition)', audio: '¿Qué es esto?' },
            { spanish: '¿Cuál es tu número de teléfono?', english: 'What is your phone number? (Choice from all numbers)', audio: '¿Cuál es tu número de teléfono?' },
            { spanish: '¿Por qué estudias español? — Porque me gusta.', english: 'Why do you study Spanish? — Because I like it.', audio: '¿Por qué estudias español?' }
          ],
          proTip: 'Never use "¿Qué es tu número de teléfono?" in Spanish! When asking for personal data (name, email, phone number, address), Spanish uses "¿Cuál es...?"'
        }
      ],
      vocabulary: [
        { id: 'v2001', spanish: '¿qué?', english: 'what?', category: 'Questions', exampleSentence: { spanish: '¿Qué haces?', english: 'What are you doing?' } },
        { id: 'v2002', spanish: '¿quién?', english: 'who?', category: 'Questions', exampleSentence: { spanish: '¿Quién llama a la puerta?', english: 'Who is knocking on the door?' } },
        { id: 'v2003', spanish: '¿dónde?', english: 'where?', category: 'Questions', exampleSentence: { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?' } },
        { id: 'v2004', spanish: '¿cuándo?', english: 'when?', category: 'Questions', exampleSentence: { spanish: '¿Cuándo es tu cumpleaños?', english: 'When is your birthday?' } },
        { id: 'v2005', spanish: '¿por qué?', english: 'why?', category: 'Questions', exampleSentence: { spanish: '¿Por qué no vienes?', english: 'Why aren\'t you coming?' } },
        { id: 'v2006', spanish: 'porque', english: 'because', category: 'Conjunctions', exampleSentence: { spanish: 'No voy porque tengo trabajo.', english: 'I\'m not going because I have work.' } },
        { id: 'v2007', spanish: '¿cuál?', english: 'which / what (selection)?', category: 'Questions', exampleSentence: { spanish: '¿Cuál es tu color favorito?', english: 'What is your favorite color?' } }
      ],
      flashcards: [
        { id: 'f2001', front: '¿Por qué? vs Porque', back: 'Why? (2 words, accent) vs Because (1 word)', category: 'Questions' },
        { id: 'f2002', front: '¿Qué? vs ¿Cuál?', back: 'Definition / Concept vs Choice / Personal info', category: 'Questions' },
        { id: 'f2003', front: 'Where to? vs Where from?', back: '¿Adónde? vs ¿De dónde?', category: 'Questions' },
        { id: 'f2004', front: 'How many brothers do you have?', back: '¿Cuántos hermanos tienes?', frontSubtext: 'Agrees in gender/number', category: 'Questions' }
      ],
      exercises: [
        {
          id: 'u2-l20-ex1',
          type: 'multiple-choice',
          prompt: 'How do you ask "What is your email address?" in natural Spanish?',
          explanation: 'Asking for contact details, choices, or identity uses "¿Cuál es...?", not "¿Qué es...".',
          options: [
            { id: 'opt1', text: '¿Cuál es tu correo electrónico?', subtext: 'Correct interrogative for personal info', isCorrect: true },
            { id: 'opt2', text: '¿Qué es tu correo electrónico?', subtext: 'Incorrect: asks for the definition of email', isCorrect: false },
            { id: 'opt3', text: '¿Quién es tu correo electrónico?', subtext: 'Incorrect: "¿quién" asks for a person', isCorrect: false },
            { id: 'opt4', text: '¿Dónde es tu correo electrónico?', subtext: 'Incorrect interrogative', isCorrect: false }
          ]
        },
        {
          id: 'u2-l20-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the question word: "Where are you from?"',
          sentenceBefore: '¿De',
          sentenceAfter: 'eres tú?',
          correctAnswers: ['dónde', 'donde', 'Dónde'],
          wordBank: ['dónde', 'qué', 'cuándo', 'quién'],
          hint: 'Asks about origin/place.',
          explanation: '"¿De dónde eres?" means "Where are you from?". Question words carry an accent on the stressed vowel.'
        },
        {
          id: 'u2-l20-ex3',
          type: 'sentence-builder',
          prompt: 'Build the question: "Why are you not eating?"',
          targetEnglish: 'Why are you not eating?',
          correctTokens: ['¿Por', 'qué', 'no', 'comes', 'tú?'],
          availableTokens: ['¿Por', 'qué', 'no', 'comes', 'tú?', 'porque', 'cuándo', 'dónde'],
          explanation: '"¿Por qué no comes tú?" (Why = ¿Por qué?).'
        },
        {
          id: 'u2-l20-ex4',
          type: 'matching-pairs',
          prompt: 'Match each question to its logical answer:',
          explanation: 'Interrogatives pair logically with corresponding types of responses (time, person, place, reason).',
          pairs: [
            { id: 'p1', left: '¿Quién es ese chico?', right: 'Es mi primo David.' },
            { id: 'p2', left: '¿Cuándo es el examen?', right: 'El próximo viernes por la mañana.' },
            { id: 'p3', left: '¿Por qué no vas a la fiesta?', right: 'Porque estoy muy cansado.' },
            { id: 'p4', left: '¿Cuántos libros tienes?', right: 'Tengo unos diez libros.' }
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
      subtitle: 'Short Form Possessives (mi, tu, su, nuestro, vuestro)',
      estimatedMinutes: 9,
      iconName: 'UserCheck',
      summary: 'Learn how to show ownership in Spanish using short possessive adjectives. Understand how they agree in number and gender with the item possessed, not the owner.',
      theory: [
        {
          id: 'u2-l21-t1',
          title: 'Short-Form Possessive Adjectives Chart',
          summary: 'Possessive adjectives must agree with the NOUN BEING POSSESSED, not the owner.',
          table: {
            headers: ['Owner', 'Singular Possessed Noun', 'Plural Possessed Nouns', 'English'],
            rows: [
              ['yo (my)', 'mi', 'mis', 'my (mi casa / mis libros)'],
              ['tú (your - inf)', 'tu', 'tus', 'your (tu coche / tus amigos)'],
              ['él / ella / usted (his/her/its/your)', 'su', 'sus', 'his/her/its/your (su perro / sus fotos)'],
              ['nosotros/as (our)', 'nuestro / nuestra', 'nuestros / nuestras', 'our (nuestra casa / nuestros hijos)'],
              ['vosotros/as (your - Spain)', 'vuestro / vuestra', 'vuestros / vuestras', 'your pl. (vuestro gato / vuestras cosas)'],
              ['ellos / ellas / ustedes (their/your)', 'su', 'sus', 'their/your pl. (su casa / sus maletas)']
            ]
          },
          content: [
            'Notice that **mi**, **tu**, and **su** only change for number (*mi libro* vs *mis libros*), while **nuestro** and **vuestro** change for BOTH gender and number (*nuestro abuelo*, *nuestra abuela*, *nuestros abuelos*, *nuestras abuelas*).',
            'Because **su / sus** can mean *his, her, its, your (formal), their, or your (plural)*, context clarifies the owner. When ambiguous, use the formula: *el libro de él / de ella*.'
          ],
          examples: [
            { spanish: 'Mis hermanos viven en Barcelona.', english: 'My brothers live in Barcelona. (Mis agrees with plural hermanos)', audio: 'Mis hermanos viven en Barcelona.' },
            { spanish: 'Nuestra casa es grande y luminosa.', english: 'Our house is large and bright. (Nuestra agrees with feminine singular casa)', audio: 'Nuestra casa es grande y luminosa.' },
            { spanish: 'Carlos busca sus llaves.', english: 'Carlos is looking for his keys. (Sus agrees with plural llaves)', audio: 'Carlos busca sus llaves.' }
          ],
          watchOut: 'Don\'t confuse "tu" (possessive adjective: your) with "tú" (subject pronoun: you). Only the pronoun has an accent mark!'
        }
      ],
      vocabulary: [
        { id: 'v2101', spanish: 'mi / mis', english: 'my', category: 'Possessives', exampleSentence: { spanish: 'Mis padres son amables.', english: 'My parents are kind.' } },
        { id: 'v2102', spanish: 'tu / tus', english: 'your (informal)', category: 'Possessives', exampleSentence: { spanish: '¿Dónde está tu coche?', english: 'Where is your car?' } },
        { id: 'v2103', spanish: 'su / sus', english: 'his / her / its / their / your', category: 'Possessives', exampleSentence: { spanish: 'Ella visita a sus abuelos.', english: 'She visits her grandparents.' } },
        { id: 'v2104', spanish: 'nuestro / nuestra', english: 'our (singular)', category: 'Possessives', exampleSentence: { spanish: 'Nuestra familia es grande.', english: 'Our family is big.' } },
        { id: 'v2105', spanish: 'nuestros / nuestras', english: 'our (plural)', category: 'Possessives', exampleSentence: { spanish: 'Nuestros amigos son divertidos.', english: 'Our friends are fun.' } },
        { id: 'v2106', spanish: 'las llaves', english: 'the keys', gender: 'feminine', category: 'Objects', exampleSentence: { spanish: 'No encuentro mis llaves.', english: 'I can\'t find my keys.' } }
      ],
      flashcards: [
        { id: 'f2101', front: 'tu vs tú', back: 'tu = your (possessive) | tú = you (subject pronoun)', category: 'Possessives' },
        { id: 'f2102', front: 'Our (4 forms)', back: 'nuestro, nuestra,指nuestros, nuestras', frontSubtext: 'Agrees with the possessed noun', category: 'Possessives' },
        { id: 'f2103', front: 'His keys / Her keys', back: 'sus llaves (both use "sus" to agree with plural "llaves")', category: 'Possessives' }
      ],
      exercises: [
        {
          id: 'u2-l21-ex1',
          type: 'multiple-choice',
          prompt: 'Complete the Spanish sentence for "We love our family":\n"Nosotros queremos a _______."',
          explanation: '"Familia" is feminine singular, so it requires the feminine singular possessive "nuestra familia".',
          options: [
            { id: 'opt1', text: 'nuestra familia', subtext: 'Correct feminine singular agreement', isCorrect: true },
            { id: 'opt2', text: 'nuestro familia', subtext: 'Incorrect: familia is feminine', isCorrect: false },
            { id: 'opt3', text: 'nuestras familia', subtext: 'Incorrect: familia is singular', isCorrect: false },
            { id: 'opt4', text: 'su familia', subtext: 'Means his/her/their family, not our', isCorrect: false }
          ]
        },
        {
          id: 'u2-l21-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the plural possessive for "my" in: "Yo leo [___] libros favoritos." (I read my favorite books)',
          sentenceBefore: 'Yo leo',
          sentenceAfter: 'libros favoritos.',
          correctAnswers: ['mis', 'Mis'],
          wordBank: ['mis', 'mi', 'sus', 'tus'],
          hint: '"Libros" is plural.',
          explanation: '"Libros" is plural, so "mi" becomes "mis".'
        },
        {
          id: 'u2-l21-ex3',
          type: 'sentence-builder',
          prompt: 'Translate: "Where are your (informal) keys?"',
          targetEnglish: 'Where are your (informal) keys?',
          correctTokens: ['¿Dónde', 'están', 'tus', 'llaves?'],
          availableTokens: ['¿Dónde', 'están', 'tus', 'llaves?', 'tu', 'mis', 'está'],
          explanation: '"¿Dónde están tus llaves?" ("Tus" matches plural "llaves").'
        },
        {
          id: 'u2-l21-ex4',
          type: 'error-identification',
          prompt: 'Find the mistake in this sentence:',
          incorrectSentence: 'Ellos viven en su casa con nuestro tías.',
          errorWord: 'nuestro',
          options: ['nuestras', 'nuestros', 'nuestra', 'sus'],
          correctOption: 'nuestras',
          explanation: '"Tías" is feminine plural, so it requires "nuestras tías".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 22: Tener & Venir
    // -------------------------------------------------------------
    {
      id: 'u2-l22',
      slug: 'tener-and-venir',
      unitId: 2,
      order: 22,
      title: '22. Tener & Venir',
      subtitle: 'The Irregular "-go" + "e:ie" Stem-Changing Verbs',
      estimatedMinutes: 10,
      iconName: 'Package',
      summary: 'Master the high-frequency verbs "tener" (to have) and "venir" (to come), which share an irregular "yo" form ending in -go (tengo/vengo) and an e:ie stem-change in other forms.',
      theory: [
        {
          id: 'u2-l22-t1',
          title: 'Conjugation of Tener and Venir',
          summary: 'Both verbs feature an irregular "yo" form ending in -go and e:ie stem changes for tú, él, and ellos.',
          table: {
            headers: ['Pronoun', 'TENER (to have)', 'VENIR (to come)', 'Pattern Feature'],
            rows: [
              ['yo', 'tengo', 'vengo', 'Irregular "-go" 1st person'],
              ['tú', 'tienes', 'vienes', 'e → ie stem change'],
              ['él / ella / usted', 'tiene', 'viene', 'e → ie stem change'],
              ['nosotros / nosotras', 'tenemos', 'venimos', 'Regular base (no stem change)'],
              ['vosotros / vosotras', 'tenéis', 'venís', 'Regular base (no stem change)'],
              ['ellos / ellas / ustedes', 'tienen', 'vienen', 'e → ie stem change']
            ]
          },
          content: [
            'Notice the parallelism between **tener** and **venir**: *tengo / vengo*, *tienes / vienes*, *tiene / viene*, *tienen / vienen*.',
            'Remember: the *nosotros* and *vosotros* forms NEVER change their stem vowel! They retain the original letter "e" (*tenemos, venimos*).'
          ],
          examples: [
            { spanish: 'Yo tengo dos perros y un gato.', english: 'I have two dogs and a cat.', audio: 'Yo tengo dos perros y un gato.' },
            { spanish: '¿A qué hora vienes a la fiesta?', english: 'What time are you coming to the party?', audio: '¿A qué hora vienes a la fiesta?' },
            { spanish: 'Nosotros venimos de la biblioteca.', english: 'We are coming from the library.', audio: 'Nosotros venimos de la biblioteca.' }
          ],
          proTip: 'When asking someone\'s age in Spanish, always use TENER: "¿Cuántos años tienes?" (Literally: "How many years do you have?"). Never use "ser" for age!'
        }
      ],
      vocabulary: [
        { id: 'v2201', spanish: 'tener', english: 'to have', category: 'Verbs', exampleSentence: { spanish: 'Tengo una idea excelente.', english: 'I have an excellent idea.' } },
        { id: 'v2202', spanish: 'venir', english: 'to come', category: 'Verbs', exampleSentence: { spanish: 'Mi amigo viene mañana.', english: 'My friend is coming tomorrow.' } },
        { id: 'v2203', spanish: 'el año', english: 'the year', gender: 'masculine', category: 'Time', exampleSentence: { spanish: 'Tengo veinte años.', english: 'I am twenty years old.' } },
        { id: 'v2204', spanish: 'la fiesta', english: 'the party', gender: 'feminine', category: 'Events', exampleSentence: { spanish: '¿Vienes a mi fiesta?', english: 'Are you coming to my party?' } },
        { id: 'v2205', spanish: 'temprano', english: 'early', category: 'Adverbs', exampleSentence: { spanish: 'Él siempre viene temprano.', english: 'He always comes early.' } },
        { id: 'v2206', spanish: 'tarde', english: 'late', category: 'Adverbs', exampleSentence: { spanish: 'El tren viene tarde.', english: 'The train is coming late.' } }
      ],
      flashcards: [
        { id: 'f2201', front: 'Yo form of TENER & VENIR', back: 'tengo / vengo', frontSubtext: 'Irregular -go ending', category: 'Tener & Venir' },
        { id: 'f2202', front: 'Nosotros form of TENER & VENIR', back: 'tenemos / venimos', frontSubtext: 'No stem change in nosotros', category: 'Tener & Venir' },
        { id: 'f2203', front: 'How to say your age in Spanish', back: 'Tengo [X] años (Use TENER, not Ser)', category: 'Tener & Venir' }
      ],
      exercises: [
        {
          id: 'u2-l22-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I am 25 years old" in Spanish?',
          explanation: 'Age is expressed using TENER: "Tengo veinticinco años".',
          options: [
            { id: 'opt1', text: 'Tengo veinticinco años.', subtext: 'Correct with tener', isCorrect: true },
            { id: 'opt2', text: 'Soy veinticinco años.', subtext: 'Incorrect: ser is never used for age', isCorrect: false },
            { id: 'opt3', text: 'Estoy veinticinco años.', subtext: 'Incorrect: estar is not used for age', isCorrect: false },
            { id: 'opt4', text: 'Hago veinticinco años.', subtext: 'Incorrect verb', isCorrect: false }
          ]
        },
        {
          id: 'u2-l22-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the correct form of "venir" for "nosotros":',
          sentenceBefore: 'Nosotros',
          sentenceAfter: 'en tren todos los días.',
          correctAnswers: ['venimos', 'Venimos'],
          wordBank: ['venimos', 'vienen', 'vengo', 'vienes'],
          hint: 'Nosotros keeps the regular root "ven-".',
          explanation: 'The nosotros form of venir is "venimos" (no stem change).'
        },
        {
          id: 'u2-l22-ex3',
          type: 'sentence-builder',
          prompt: 'Translate: "They have three new cars"',
          targetEnglish: 'They have three new cars',
          correctTokens: ['Ellos', 'tienen', 'tres', 'coches', 'nuevos'],
          availableTokens: ['Ellos', 'tienen', 'tres', 'coches', 'nuevos', 'tenemos', 'tiene', 'son'],
          explanation: '"Ellos tienen tres coches nuevos." (Ellos form of tener is "tienen").'
        },
        {
          id: 'u2-l22-ex4',
          type: 'matching-pairs',
          prompt: 'Match each subject pronoun with its correct form of TENER or VENIR:',
          explanation: 'Reviewing the -go and e:ie patterns.',
          pairs: [
            { id: 'p1', left: 'Yo', right: 'tengo / vengo (-go form)' },
            { id: 'p2', left: 'Tú', right: 'tienes / vienes (e:ie stem change)' },
            { id: 'p3', left: 'Nosotros', right: 'tenemos / venimos (regular stem)' },
            { id: 'p4', left: 'Ustedes', right: 'tienen / vienen (e:ie plural)' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 23: "Tener Que" & "Hay Que"
    // -------------------------------------------------------------
    {
      id: 'u2-l23',
      slug: 'tener-que-and-hay-que',
      unitId: 2,
      order: 23,
      title: '23. "Tener Que" & "Hay Que"',
      subtitle: 'Personal vs. Impersonal Obligation ("Have to" vs "One must")',
      estimatedMinutes: 8,
      iconName: 'AlertCircle',
      summary: 'Express obligation in Spanish: use "tener que + infinitive" for specific persons ("I have to study"), and "hay que + infinitive" for general, impersonal rules ("One must study").',
      theory: [
        {
          id: 'u2-l23-t1',
          title: 'Personal vs. Impersonal Obligation',
          summary: 'Choose "tener que" when naming a specific person who must do something, and "hay que" for universal necessity.',
          ruleHighlights: [
            { label: 'Tener que + Infinitivo', description: 'Specific person: "Tengo que trabajar" (I have to work)', color: 'indigo' },
            { label: 'Hay que + Infinitivo', description: 'Impersonal / General: "Hay que reciclar" (One must recycle / It is necessary to recycle)', color: 'emerald' }
          ],
          formula: {
            pattern: 'Personal: [Tener conjugado] + que + [Infinitivo] | Impersonal: Hay + que + [Infinitivo]',
            example: 'Tienes que comer bien (You have to eat well) | Hay que comer bien (One must eat well)'
          },
          examples: [
            { spanish: 'Tengo que estudiar para el examen.', english: 'I have to study for the exam. (Personal obligation)', audio: 'Tengo que estudiar para el examen.' },
            { spanish: 'Hay que tener paciencia en la vida.', english: 'One must have patience in life. (Universal truth / impersonal)', audio: 'Hay que tener paciencia en la vida.' },
            { spanish: 'Tenemos que salir a las ocho.', english: 'We have to leave at eight.', audio: 'Tenemos que salir a las ocho.' }
          ],
          watchOut: '"Hay que" NEVER changes form. You will never say "Habemos que" or "Han que"—it is always "Hay que + infinitive".'
        }
      ],
      vocabulary: [
        { id: 'v2301', spanish: 'tener que', english: 'to have to (do something)', category: 'Obligation', exampleSentence: { spanish: 'Tengo que limpiar mi cuarto.', english: 'I have to clean my room.' } },
        { id: 'v2302', spanish: 'hay que', english: 'one must / it is necessary to', category: 'Obligation', exampleSentence: { spanish: 'Hay que respetar las normas.', english: 'One must respect the rules.' } },
        { id: 'v2303', spanish: 'la paciencia', english: 'patience', gender: 'feminine', category: 'Abstract', exampleSentence: { spanish: 'Hay que tener paciencia.', english: 'One must have patience.' } },
        { id: 'v2304', spanish: 'pagar', english: 'to pay', category: 'Verbs', exampleSentence: { spanish: 'Tenemos que pagar la cuenta.', english: 'We have to pay the bill.' } },
        { id: 'v2305', spanish: 'la cuenta', english: 'the bill / check', gender: 'feminine', category: 'Dining', exampleSentence: { spanish: '¿Nos trae la cuenta, por favor?', english: 'Could you bring us the check, please?' } }
      ],
      flashcards: [
        { id: 'f2301', front: 'Tener que + infinitive', back: 'To have to (personal obligation for a specific person)', category: 'Obligation' },
        { id: 'f2302', front: 'Hay que + infinitive', back: 'One must / It is necessary to (impersonal, general rule)', category: 'Obligation' },
        { id: 'f2303', front: 'We have to pay', back: 'Tenemos que pagar', frontSubtext: 'Personal obligation', category: 'Obligation' }
      ],
      exercises: [
        {
          id: 'u2-l23-ex1',
          type: 'multiple-choice',
          prompt: 'Choose the correct expression for general civic advice: "One must protect the environment":',
          explanation: '"Hay que + infinitive" expresses general/universal rules and advice applicable to everyone.',
          options: [
            { id: 'opt1', text: 'Hay que proteger el medio ambiente.', subtext: 'Correct impersonal obligation', isCorrect: true },
            { id: 'opt2', text: 'Tiene que proteger el medio ambiente.', subtext: 'Refers to a specific "he/she"', isCorrect: false },
            { id: 'opt3', text: 'Hay proteger el medio ambiente.', subtext: 'Missing required "que"', isCorrect: false },
            { id: 'opt4', text: 'Tienen que proteger el medio ambiente.', subtext: 'Refers to specific "they"', isCorrect: false }
          ]
        },
        {
          id: 'u2-l23-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete: "Carlos has to buy milk today."',
          sentenceBefore: 'Carlos',
          sentenceAfter: 'que comprar leche hoy.',
          correctAnswers: ['tiene', 'Tiene'],
          wordBank: ['tiene', 'hay', 'tengo', 'tenemos'],
          hint: 'Carlos is 3rd person singular.',
          explanation: 'For Carlos (él), the correct form of tener is "tiene": "Carlos tiene que comprar leche".'
        },
        {
          id: 'u2-l23-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "We have to practice Spanish"',
          targetEnglish: 'We have to practice Spanish',
          correctTokens: ['Tenemos', 'que', 'practicar', 'español'],
          availableTokens: ['Tenemos', 'que', 'practicar', 'español', 'Hay', 'tienen', 'de'],
          explanation: '"Tenemos que practicar español." (We have to = Tenemos que).'
        },
        {
          id: 'u2-l23-ex4',
          type: 'error-identification',
          prompt: 'Find the mistake in this sentence:',
          incorrectSentence: 'Ellos tienen de estudiar mucho para el examen.',
          errorWord: 'de',
          options: ['que', 'a', 'en', 'por'],
          correctOption: 'que',
          explanation: 'The Spanish formula for "have to" is "tener QUE + infinitive", never "tener de".'
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
      subtitle: 'Spanish Idioms Where English Uses "To Be"',
      estimatedMinutes: 9,
      iconName: 'Flame',
      summary: 'In Spanish, sensations like hunger, thirst, heat, cold, and fear are possessed as nouns rather than felt as adjectives. Learn why Spanish says "I have hunger" (Tengo hambre) instead of "I am hungry".',
      theory: [
        {
          id: 'u2-l24-t1',
          title: 'The Master List of Tener Idioms',
          summary: 'Spanish uses "TENER + noun" for sensations where English uses "TO BE + adjective".',
          table: {
            headers: ['Spanish Expression', 'Literal Meaning', 'Natural English Meaning'],
            rows: [
              ['tener hambre', 'to have hunger', 'to be hungry'],
              ['tener sed', 'to have thirst', 'to be thirsty'],
              ['tener calor', 'to have heat', 'to be hot (temperature feeling)'],
              ['tener frío', 'to have cold', 'to be cold'],
              ['tener sueño', 'to have sleepiness', 'to be sleepy'],
              ['tener miedo (de)', 'to have fear (of)', 'to be afraid (of)'],
              ['tener prisa', 'to have rush', 'to be in a hurry'],
              ['tener razón', 'to have reason', 'to be right / correct'],
              ['tener suerte', 'to have luck', 'to be lucky'],
              ['tener cuidado', 'to have care', 'to be careful'],
              ['tener éxito', 'to have success', 'to be successful'],
              ['tener ganas de (+ inf)', 'to have desire of', 'to feel like (doing something)']
            ]
          },
          content: [
            'Because these expressions use nouns (*hambre, sed, calor*), you modify them with **mucho / mucha** (a lot of), NOT *muy* (very).',
            'For example: *"Tengo mucho calor"* (I am very hot), NOT *"Tengo muy calor"*.'
          ],
          examples: [
            { spanish: 'Tengo mucha hambre, ¿vamos a comer?', english: 'I am very hungry, shall we go eat?', audio: 'Tengo mucha hambre, ¿vamos a comer?' },
            { spanish: '¿Tienes frío? — Sí, un poco.', english: 'Are you cold? — Yes, a little.', audio: '¿Tienes frío?' },
            { spanish: 'Tú tienes toda la razón.', english: 'You are completely right.', audio: 'Tú tienes toda la razón.' },
            { spanish: 'Tengo ganas de ver una película.', english: 'I feel like watching a movie.', audio: 'Tengo ganas de ver una película.' }
          ],
          watchOut: 'Never say "Estoy calor" or "Soy caliente"! Saying "Estoy caliente" or "Soy caliente" has vulgar / sexual connotations in Spanish. Always use "Tengo calor".'
        }
      ],
      vocabulary: [
        { id: 'v2401', spanish: 'el hambre', english: 'hunger', gender: 'feminine', category: 'Sensations', notes: 'Takes "el" in singular (el hambre) because it starts with stressed "a", but uses "mucha hambre"', exampleSentence: { spanish: 'Tengo mucha hambre.', english: 'I am very hungry.' } },
        { id: 'v2402', spanish: 'la sed', english: 'thirst', gender: 'feminine', category: 'Sensations', exampleSentence: { spanish: 'Bebo agua porque tengo sed.', english: 'I drink water because I am thirsty.' } },
        { id: 'v2403', spanish: 'el frío', english: 'the cold', gender: 'masculine', category: 'Sensations', exampleSentence: { spanish: 'Cierra la ventana, tengo frío.', english: 'Close the window, I am cold.' } },
        { id: 'v2404', spanish: 'el calor', english: 'the heat', gender: 'masculine', category: 'Sensations', exampleSentence: { spanish: 'En verano tengo mucho calor.', english: 'In summer I am very hot.' } },
        { id: 'v2405', spanish: 'el miedo', english: 'fear', gender: 'masculine', category: 'Sensations', exampleSentence: { spanish: 'No tengo miedo a las alturas.', english: 'I am not afraid of heights.' } },
        { id: 'v2406', spanish: 'la razón', english: 'reason / rightness', gender: 'feminine', category: 'Abstract', exampleSentence: { spanish: 'El profesor tiene razón.', english: 'The teacher is right.' } },
        { id: 'v2407', spanish: 'la prisa', english: 'hurry / rush', gender: 'feminine', category: 'Sensations', exampleSentence: { spanish: 'No puedo hablar, tengo prisa.', english: 'I can\'t talk, I\'m in a hurry.' } }
      ],
      flashcards: [
        { id: 'f2401', front: 'I am hungry (Spanish idiom)', back: 'Tengo hambre\n(Modified with "mucha", not "muy")', category: 'Tener Idioms' },
        { id: 'f2402', front: 'You are right', back: 'Tienes razón', category: 'Tener Idioms' },
        { id: 'f2403', front: 'To feel like doing something', back: 'Tener ganas de + infinitive\n(e.g. Tengo ganas de bailar)', category: 'Tener Idioms' },
        { id: 'f2404', front: 'I am very cold', back: 'Tengo mucho frío', frontSubtext: 'Use "mucho", not "muy"', category: 'Tener Idioms' }
      ],
      exercises: [
        {
          id: 'u2-l24-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I am very thirsty" correctly in Spanish?',
          explanation: 'Sensations use TENER + mucho/mucha + noun: "Tengo mucha sed" ("sed" is feminine).',
          options: [
            { id: 'opt1', text: 'Tengo mucha sed.', subtext: 'Correct idiom with "mucha"', isCorrect: true },
            { id: 'opt2', text: 'Estoy muy sed.', subtext: 'Incorrect: sed is a noun with tener', isCorrect: false },
            { id: 'opt3', text: 'Soy muy sed.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: 'Tengo muy sed.', subtext: 'Incorrect: "muy" cannot modify nouns', isCorrect: false }
          ]
        },
        {
          id: 'u2-l24-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete the sentence: "We are in a hurry because the train leaves soon."',
          sentenceBefore: 'Nosotros',
          sentenceAfter: 'mucha prisa.',
          correctAnswers: ['tenemos', 'Tenemos'],
          wordBank: ['tenemos', 'estamos', 'somos', 'tienen'],
          hint: '"To be in a hurry" is "tener prisa".',
          explanation: 'Nosotros form of tener is "tenemos": "Nosotros tenemos mucha prisa".'
        },
        {
          id: 'u2-l24-ex3',
          type: 'matching-pairs',
          prompt: 'Match each Spanish phrase with its natural English translation:',
          explanation: 'These high-frequency idioms appear daily in conversational Spanish.',
          pairs: [
            { id: 'p1', left: 'Tengo sueño.', right: 'I am sleepy.' },
            { id: 'p2', left: 'Tengo miedo.', right: 'I am afraid / scared.' },
            { id: 'p3', left: 'Tengo suerte.', right: 'I am lucky.' },
            { id: 'p4', left: 'Tengo cuidado.', right: 'I am careful.' }
          ]
        },
        {
          id: 'u2-l24-ex4',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "I feel like eating pizza"',
          targetEnglish: 'I feel like eating pizza',
          correctTokens: ['Tengo', 'ganas', 'de', 'comer', 'pizza'],
          availableTokens: ['Tengo', 'ganas', 'de', 'comer', 'pizza', 'hambre', 'estoy', 'que'],
          explanation: '"Tengo ganas de comer pizza." ("Tener ganas de + infinitive" means to feel like doing something).'
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
      subtitle: 'Talking About Climate with "Hacer", "Haber", and "Estar"',
      estimatedMinutes: 8,
      iconName: 'CloudSun',
      summary: 'Master Spanish weather talk: describe climate using "Hace + weather noun" (Hace sol, Hace frío), impersonal weather verbs (Llueve, Nieva), and "Hay" (Hay niebla).',
      theory: [
        {
          id: 'u2-l25-t1',
          title: 'The Three Ways to Describe Weather in Spanish',
          summary: 'Spanish primarily uses "HACER" for general conditions, dedicated verbs for precipitation, and "HAY / ESTÁ" for atmospheric phenomena.',
          ruleHighlights: [
            { label: '1. Hace + Sustantivo', description: 'Hace calor, Hace frío, Hace sol, Hace viento, Hace buen/mal tiempo', color: 'indigo' },
            { label: '2. Dedicated Verbs', description: 'Llueve / Está lloviendo (It rains / is raining), Nieva / Está nevando (It snows)', color: 'emerald' },
            { label: '3. Hay / Está', description: 'Hay niebla (It\'s foggy), Hay tormenta (There\'s a storm), Está nublado (It is cloudy)', color: 'sky' }
          ],
          table: {
            headers: ['Spanish Phrase', 'Literal Breakdown', 'English Translation'],
            rows: [
              ['¿Qué tiempo hace?', 'What weather does it make?', 'What is the weather like?'],
              ['Hace buen tiempo', 'It makes good weather', 'The weather is nice'],
              ['Hace mal tiempo', 'It makes bad weather', 'The weather is bad'],
              ['Hace mucho calor / frío', 'It makes much heat / cold', 'It is very hot / cold'],
              ['Hace mucho sol / viento', 'It makes much sun / wind', 'It is very sunny / windy'],
              ['Llueve (llover: o>ue)', 'It rains', 'It is raining'],
              ['Nieva (nevar: e>ie)', 'It snows', 'It is snowing'],
              ['Está nublado', 'It is clouded', 'It is cloudy']
            ]
          },
          examples: [
            { spanish: 'Hoy hace mucho sol y calor en Madrid.', english: 'Today it is very sunny and hot in Madrid.', audio: 'Hoy hace mucho sol y calor en Madrid.' },
            { spanish: 'Está lloviendo mucho hoy.', english: 'It is raining a lot today.', audio: 'Está lloviendo mucho hoy.' },
            { spanish: 'En invierno nieva en las montañas.', english: 'In winter it snows in the mountains.', audio: 'En invierno nieva en las montañas.' }
          ],
          proTip: 'Just like with tener idioms, because "sol", "frío", and "viento" are nouns, you must say "Hace MUCHO frío" (never "Hace muy frío").'
        }
      ],
      vocabulary: [
        { id: 'v2501', spanish: 'el tiempo', english: 'weather / time', gender: 'masculine', category: 'Weather', exampleSentence: { spanish: '¿Qué tiempo hace hoy?', english: 'What is the weather like today?' } },
        { id: 'v2502', spanish: 'el sol', english: 'the sun', gender: 'masculine', category: 'Weather', exampleSentence: { spanish: 'Hace mucho sol en la playa.', english: 'It is very sunny at the beach.' } },
        { id: 'v2503', spanish: 'el viento', english: 'the wind', gender: 'masculine', category: 'Weather', exampleSentence: { spanish: 'Hace mucho viento hoy.', english: 'It is very windy today.' } },
        { id: 'v2504', spanish: 'llover (o:ue)', english: 'to rain', category: 'Weather', exampleSentence: { spanish: 'Llueve en primavera.', english: 'It rains in spring.' } },
        { id: 'v2505', spanish: 'nevar (e:ie)', english: 'to snow', category: 'Weather', exampleSentence: { spanish: 'Nieva en diciembre.', english: 'It snows in December.' } },
        { id: 'v2506', spanish: 'nublado / nublada', english: 'cloudy', category: 'Weather', exampleSentence: { spanish: 'El cielo está muy nublado.', english: 'The sky is very cloudy.' } },
        { id: 'v2507', spanish: 'la niebla', english: 'the fog', gender: 'feminine', category: 'Weather', exampleSentence: { spanish: 'Hay mucha niebla esta mañana.', english: 'There is a lot of fog this morning.' } }
      ],
      flashcards: [
        { id: 'f2501', front: 'What is the weather like?', back: '¿Qué tiempo hace?', category: 'Weather' },
        { id: 'f2502', front: 'It is very sunny', back: 'Hace mucho sol\n(Use "mucho", not "muy")', category: 'Weather' },
        { id: 'f2503', front: 'It is raining vs It is snowing', back: 'Llueve / Está lloviendo vs Nieva / Está nevando', category: 'Weather' },
        { id: 'f2504', front: 'It is cloudy', back: 'Está nublado', category: 'Weather' }
      ],
      exercises: [
        {
          id: 'u2-l25-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "It is very windy today" in Spanish?',
          explanation: 'Weather with "hacer" uses "mucho" with nouns: "Hace mucho viento hoy".',
          options: [
            { id: 'opt1', text: 'Hace mucho viento hoy.', subtext: 'Correct weather expression', isCorrect: true },
            { id: 'opt2', text: 'Está muy viento hoy.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt3', text: 'Es mucho viento hoy.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt4', text: 'Hace muy viento hoy.', subtext: 'Incorrect: viento is a noun, needs "mucho"', isCorrect: false }
          ]
        },
        {
          id: 'u2-l25-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete the question: "What is the weather like?"',
          sentenceBefore: '¿Qué',
          sentenceAfter: 'hace hoy?',
          correctAnswers: ['tiempo', 'Tiempo'],
          wordBank: ['tiempo', 'clima', 'hora', 'día'],
          hint: 'The standard idiom uses "tiempo".',
          explanation: '"¿Qué tiempo hace?" is the universal Spanish question for asking about current weather.'
        },
        {
          id: 'u2-l25-ex3',
          type: 'sentence-builder',
          prompt: 'Translate: "It is cloudy and it is raining"',
          targetEnglish: 'It is cloudy and it is raining',
          correctTokens: ['Está', 'nublado', 'y', 'está', 'lloviendo'],
          availableTokens: ['Está', 'nublado', 'y', 'está', 'lloviendo', 'hace', 'sol', 'es'],
          explanation: '"Está nublado y está lloviendo." (Cloudy uses "estar", and ongoing precipitation uses "estar + gerundio").'
        },
        {
          id: 'u2-l25-ex4',
          type: 'matching-pairs',
          prompt: 'Match each weather condition to its Spanish equivalent:',
          explanation: 'Notice which expressions use "hace", "está", or "hay".',
          pairs: [
            { id: 'p1', left: 'It is cold.', right: 'Hace frío.' },
            { id: 'p2', left: 'It is foggy.', right: 'Hay niebla.' },
            { id: 'p3', left: 'It is cloudy.', right: 'Está nublado.' },
            { id: 'p4', left: 'It snows.', right: 'Nieva.' }
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
      subtitle: 'The Special Preposition for Human and Pet Direct Objects',
      estimatedMinutes: 8,
      iconName: 'UserPlus',
      summary: 'When the direct object of a verb is a specific human being or beloved domestic pet, Spanish places the untranslatable preposition "a" in front of it.',
      theory: [
        {
          id: 'u2-l26-t1',
          title: 'When to Use the Personal "a"',
          summary: 'Use the personal "a" whenever the direct receiver of an action is a specific person or pet.',
          ruleHighlights: [
            { label: 'Specific Person / Pet → Use "a"', description: 'Veo a María (I see Maria) / Llamo a mi perro (I call my dog)', color: 'indigo' },
            { label: 'Inanimate Object → NO "a"', description: 'Veo la casa (I see the house) / Compro el libro (I buy the book)', color: 'emerald' },
            { label: 'Exception: Verb "HAY"', description: 'Never use personal "a" after "hay" (e.g. Hay tres personas, not Hay a tres)', color: 'rose' }
          ],
          formula: {
            pattern: 'Verbo + "a" + [Persona específica / Mascota] | Verbo + [Objeto inanimado (sin "a")]',
            example: 'Visito a mi abuela (Person → "a") | Visito el museo (Inanimate object → no "a")'
          },
          examples: [
            { spanish: 'Yo llamo a Juan por teléfono.', english: 'I call Juan on the phone. (Juan is a person → "a Juan")', breakdown: 'Person direct object', audio: 'Yo llamo a Juan por teléfono.' },
            { spanish: 'Yo llamo un taxi.', english: 'I call a taxi. (Taxi is an object → no "a")', breakdown: 'Inanimate object', audio: 'Yo llamo un taxi.' },
            { spanish: 'Ella cuida a su perro.', english: 'She takes care of her dog. (Beloved pet → "a su perro")', breakdown: 'Domestic pet', audio: 'Ella cuida a su perro.' },
            { spanish: 'Hay muchos estudiantes en la clase.', english: 'There are many students in the class. (Exception: "hay" never takes personal "a")', breakdown: 'Verb Hay', audio: 'Hay muchos estudiantes en la clase.' }
          ],
          watchOut: 'Verbs like "tener" generally do not take personal "a" unless expressing emotional holding/care (e.g. "Tengo dos hermanos", no "a").'
        }
      ],
      vocabulary: [
        { id: 'v2601', spanish: 'visitar', english: 'to visit', category: 'Verbs', exampleSentence: { spanish: 'Visito a mis abuelos los domingos.', english: 'I visit my grandparents on Sundays.' } },
        { id: 'v2602', spanish: 'llamar', english: 'to call', category: 'Verbs', exampleSentence: { spanish: 'Llamo a mi madre todos los días.', english: 'I call my mother every day.' } },
        { id: 'v2603', spanish: 'ayudar', english: 'to help', category: 'Verbs', exampleSentence: { spanish: 'Ayudo a mi amigo con la tarea.', english: 'I help my friend with homework.' } },
        { id: 'v2604', spanish: 'escuchar', english: 'to listen to', category: 'Verbs', exampleSentence: { spanish: 'Escucho al profesor.', english: 'I listen to the teacher.' } },
        { id: 'v2605', spanish: 'el perro', english: 'the dog', gender: 'masculine', category: 'Animals', exampleSentence: { spanish: 'Paseo a mi perro.', english: 'I walk my dog.' } },
        { id: 'v2606', spanish: 'el abuelo / la abuela', english: 'the grandfather / grandmother', category: 'Family', exampleSentence: { spanish: 'Quiero mucho a mi abuela.', english: 'I love my grandmother very much.' } }
      ],
      flashcards: [
        { id: 'f2601', front: 'When do you use the Personal "a"?', back: 'When the direct object is a specific person or domestic pet\n(e.g. Veo a Carlos)', category: 'Personal a' },
        { id: 'f2602', front: 'Does an inanimate object take personal "a"?', back: 'No! (e.g. Veo la mesa, not Veo a la mesa)', category: 'Personal a' },
        { id: 'f2603', front: 'Does the verb HAY take personal "a"?', back: 'Never! Always "Hay dos personas" without "a"', category: 'Personal a' }
      ],
      exercises: [
        {
          id: 'u2-l26-ex1',
          type: 'multiple-choice',
          prompt: 'Which sentence correctly includes or omits the personal "a"?',
          explanation: '"Mi hermana" is a specific person direct object, which requires the personal "a".',
          options: [
            { id: 'opt1', text: 'Yo visito a mi hermana los fines de semana.', subtext: 'Correct with personal "a"', isCorrect: true },
            { id: 'opt2', text: 'Yo visito mi hermana los fines de semana.', subtext: 'Missing required personal "a"', isCorrect: false },
            { id: 'opt3', text: 'Yo visito a el museo el domingo.', subtext: 'Incorrect: museum is an inanimate object', isCorrect: false },
            { id: 'opt4', text: 'Hay a muchos niños en el parque.', subtext: 'Incorrect: "hay" never takes personal "a"', isCorrect: false }
          ]
        },
        {
          id: 'u2-l26-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the personal "a" if needed, or select from word bank: "I listen to the teacher (female)."',
          sentenceBefore: 'Yo escucho',
          sentenceAfter: 'la profesora con atención.',
          correctAnswers: ['a', 'A'],
          wordBank: ['a', 'de', 'en', 'por'],
          hint: 'The professor is a person.',
          explanation: '"La profesora" is a specific human direct object, so we insert personal "a": "escucho a la profesora".'
        },
        {
          id: 'u2-l26-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "We love our parents"',
          targetEnglish: 'We love our parents',
          correctTokens: ['Nosotros', 'queremos', 'a', 'nuestros', 'padres'],
          availableTokens: ['Nosotros', 'queremos', 'a', 'nuestros', 'padres', 'de', 'en', 'los'],
          explanation: '"Nosotros queremos a nuestros padres." (Parents are specific humans → requires personal "a").'
        },
        {
          id: 'u2-l26-ex4',
          type: 'error-identification',
          prompt: 'Find the mistake in this sentence:',
          incorrectSentence: 'En la biblioteca hay a muchos estudiantes estudiando.',
          errorWord: 'hay a',
          options: ['hay', 'hay de', 'hay en', 'hay con'],
          correctOption: 'hay',
          explanation: 'The verb "HAY" NEVER takes the personal "a", even when followed by people: "hay muchos estudiantes".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 27: Contractions (al / del)
    // -------------------------------------------------------------
    {
      id: 'u2-l27',
      slug: 'contractions-al-and-del',
      unitId: 2,
      order: 27,
      title: '27. Contractions (al / del)',
      subtitle: 'The Only Two Mandatory Contractions in Spanish',
      estimatedMinutes: 8,
      iconName: 'Minimize2',
      summary: 'Spanish has only two contractions: "a + el = al" and "de + el = del". Learn when they are mandatory and discover the rare exception with proper names.',
      theory: [
        {
          id: 'u2-l27-t1',
          title: 'The Golden Contraction Rules: "al" and "del"',
          summary: 'Whenever preposition "a" or "de" meets the masculine article "el", they must contract into a single word.',
          table: {
            headers: ['Preposition + Article', 'Mandatory Contraction', 'English Meaning', 'Example Sentence'],
            rows: [
              ['a + el', 'al', 'to the / at the', 'Voy al parque (I go to the park)'],
              ['de + el', 'del', 'of the / from the', 'El libro del profesor (The teacher\'s book)'],
              ['a + la', 'a la (NO contraction)', 'to the (feminine)', 'Voy a la playa (I go to the beach)'],
              ['de + la', 'de la (NO contraction)', 'of the (feminine)', 'La casa de la abuela (Grandma\'s house)'],
              ['a + los / las', 'a los / a las', 'to the (plural)', 'Vamos a los partidos'],
              ['de + los / las', 'de los / de las', 'of the (plural)', 'Los juguetes de los niños']
            ]
          },
          content: [
            'Unlike English where contractions like *"can\'t"* or *"it\'s"* are optional/informal, **al** and **del** are 100% grammatically mandatory in both speech and formal writing.',
            '**The Single Exception**: If "El" is capitalized as part of a formal proper title or proper noun (like *El Salvador* or *El País* newspaper), do NOT contract: *"Viajo a El Salvador"*.'
          ],
          examples: [
            { spanish: 'Vamos al supermercado.', english: 'We are going to the supermarket. (a + el supermercado = al)', audio: 'Vamos al supermercado.' },
            { spanish: 'El perro es del vecino.', english: 'The dog is the neighbor\'s. (de + el vecino = del)', audio: 'El perro es del vecino.' },
            { spanish: 'Él regresa del trabajo a las seis.', english: 'He returns from work at six.', audio: 'Él regresa del trabajo a las seis.' }
          ],
          watchOut: 'Never write "Voy a el parque" or "Es de el chico". Native speakers and exams will flag this as a critical error.'
        }
      ],
      vocabulary: [
        { id: 'v2701', spanish: 'al', english: 'to the (a + el)', category: 'Contractions', exampleSentence: { spanish: 'Voy al cine este fin de semana.', english: 'I am going to the movies this weekend.' } },
        { id: 'v2702', spanish: 'del', english: 'of the / from the (de + el)', category: 'Contractions', exampleSentence: { spanish: 'Es el coche del doctor.', english: 'It is the doctor\'s car.' } },
        { id: 'v2703', spanish: 'el supermercado', english: 'the supermarket', gender: 'masculine', category: 'Places', exampleSentence: { spanish: 'Compro comida en el supermercado.', english: 'I buy food at the supermarket.' } },
        { id: 'v2704', spanish: 'el vecino / la vecina', english: 'the neighbor', category: 'People', exampleSentence: { spanish: 'Hablo con el vecino.', english: 'I speak with the neighbor.' } },
        { id: 'v2705', spanish: 'el trabajo', english: 'the work / job', gender: 'masculine', category: 'Places', exampleSentence: { spanish: 'Salgo del trabajo a las cinco.', english: 'I leave work at five.' } },
        { id: 'v2706', spanish: 'el cine', english: 'the cinema / movies', gender: 'masculine', category: 'Places', exampleSentence: { spanish: 'Vamos al cine juntos.', english: 'We go to the movies together.' } }
      ],
      flashcards: [
        { id: 'f2701', front: 'a + el = ?', back: 'al (Mandatory contraction: to the / at the)', category: 'Contractions' },
        { id: 'f2702', front: 'de + el = ?', back: 'del (Mandatory contraction: of the / from the)', category: 'Contractions' },
        { id: 'f2703', front: 'Does "a + la" contract?', back: 'No! Stays "a la" (only masculine "el" contracts)', category: 'Contractions' },
        { id: 'f2704', front: 'Exception to al/del', back: 'Proper capitalized titles: e.g. "a El Salvador", "de El País"', category: 'Contractions' }
      ],
      exercises: [
        {
          id: 'u2-l27-ex1',
          type: 'multiple-choice',
          prompt: 'How do you correctly say "We are going to the cinema" in Spanish?',
          explanation: '"a" + "el cine" must contract to "al cine".',
          options: [
            { id: 'opt1', text: 'Vamos al cine.', subtext: 'Correct contraction (a + el = al)', isCorrect: true },
            { id: 'opt2', text: 'Vamos a el cine.', subtext: 'Incorrect: must contract to "al"', isCorrect: false },
            { id: 'opt3', text: 'Vamos del cine.', subtext: 'Means "coming from the cinema"', isCorrect: false },
            { id: 'opt4', text: 'Vamos en el cine.', subtext: 'Incorrect preposition for motion', isCorrect: false }
          ]
        },
        {
          id: 'u2-l27-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete the sentence with the mandatory contraction (from the / of the): "The car belongs to the doctor."',
          sentenceBefore: 'El coche es',
          sentenceAfter: 'doctor.',
          correctAnswers: ['del', 'Del'],
          wordBank: ['del', 'al', 'de el', 'a el'],
          hint: 'de + el = del.',
          explanation: '"de" + "el doctor" must contract into "del doctor".'
        },
        {
          id: 'u2-l27-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "He returns from work at six"',
          targetEnglish: 'He returns from work at six',
          correctTokens: ['Él', 'regresa', 'del', 'trabajo', 'a', 'las', 'seis'],
          availableTokens: ['Él', 'regresa', 'del', 'trabajo', 'a', 'las', 'seis', 'de', 'el', 'al'],
          explanation: '"Él regresa del trabajo a las seis." ("de + el trabajo" contracts to "del").'
        },
        {
          id: 'u2-l27-ex4',
          type: 'error-identification',
          prompt: 'Find the mistake in this sentence:',
          incorrectSentence: 'Ellos van a el parque con el perro de el vecino.',
          errorWord: 'a el',
          options: ['al', 'del', 'en el', 'por el'],
          correctOption: 'al',
          explanation: '"a + el" must always contract to "al" in standard Spanish.'
        }
      ]
    }
  ],

  // -------------------------------------------------------------
  // UNIT 2 MASTERY EXAM (10 Comprehensive Questions)
  // -------------------------------------------------------------
  masteryExam: {
    id: 'unit-2-exam',
    title: 'Unit 2 Comprehensive Mastery Exam',
    description: 'Test your full mastery across all Unit 2 concepts: Ser vs Estar, DOCTOR vs PLACE, meaning shifts, locations of events, negation, questions, possessive adjectives, tener/venir, idioms with tener, weather, personal "a", and contractions.',
    passingScore: 80,
    exercises: [
      {
        id: 'u2-exam-ex1',
        type: 'multiple-choice',
        prompt: 'Which verb (ser or estar) is correct for origin vs location: "Carlos is from Madrid, but right now he is in Barcelona"?',
        explanation: 'Origin (where someone is from) uses SER ("es de"), while current location uses ESTAR ("está en").',
        options: [
          { id: 'opt1', text: 'Carlos es de Madrid, pero ahora está en Barcelona.', subtext: 'Origin (ser) + Location (estar)', isCorrect: true },
          { id: 'opt2', text: 'Carlos está de Madrid, pero ahora es en Barcelona.', subtext: 'Inverted and incorrect', isCorrect: false },
          { id: 'opt3', text: 'Carlos es de Madrid, pero ahora es en Barcelona.', subtext: 'Ser cannot express location of a person', isCorrect: false },
          { id: 'opt4', text: 'Carlos está de Madrid, pero ahora está en Barcelona.', subtext: 'Origin cannot use estar', isCorrect: false }
        ]
      },
      {
        id: 'u2-exam-ex2',
        type: 'multiple-choice',
        prompt: 'What is the difference between "La manzana es verde" and "La manzana está verde"?',
        explanation: '"Es verde" describes the color of a green apple variety, while "está verde" means the apple is unripe.',
        options: [
          { id: 'opt1', text: '"Es verde" = green color; "Está verde" = unripe', subtext: 'Correct semantic distinction', isCorrect: true },
          { id: 'opt2', text: '"Es verde" = unripe; "Está verde" = green color', subtext: 'Inverted meaning', isCorrect: false },
          { id: 'opt3', text: 'Both sentences mean exactly the same thing', subtext: 'Incorrect', isCorrect: false },
          { id: 'opt4', text: '"Está verde" means the apple is cooked', subtext: 'Incorrect meaning', isCorrect: false }
        ]
      },
      {
        id: 'u2-exam-ex3',
        type: 'fill-in-blank',
        prompt: 'Complete with the correct verb (es / está) for an event taking place: "The birthday party _______ at my grandmother\'s house."',
        sentenceBefore: 'La fiesta de cumpleaños',
        sentenceAfter: 'en la casa de mi abuela.',
        correctAnswers: ['es', 'Es'],
        wordBank: ['es', 'está', 'son', 'están'],
        hint: 'Events (parties, concerts, meetings) use SER to mean "take place".',
        explanation: 'Because a party is an event (not a physical object), standard Spanish requires "es" (SER).'
      },
      {
        id: 'u2-exam-ex4',
        type: 'multiple-choice',
        prompt: 'Choose the correct double-negative sentence meaning "I don\'t see anyone in the street":',
        explanation: 'Double negative formula: "No" + conjugated verb + "a nadie".',
        options: [
          { id: 'opt1', text: 'No veo a nadie en la calle.', subtext: 'Correct double negative with personal "a"', isCorrect: true },
          { id: 'opt2', text: 'No veo nadie en la calle.', subtext: 'Missing personal "a" before nadie', isCorrect: false },
          { id: 'opt3', text: 'Veo a nadie en la calle.', subtext: 'Missing "no" before the verb', isCorrect: false },
          { id: 'opt4', text: 'No veo a alguien en la calle.', subtext: '"Alguien" is affirmative (someone)', isCorrect: false }
        ]
      },
      {
        id: 'u2-exam-ex5',
        type: 'fill-in-blank',
        prompt: 'Fill in the correct possessive adjective for feminine plural: "We love _______ (our) sisters."',
        sentenceBefore: 'Nosotros queremos mucho a',
        sentenceAfter: 'hermanas.',
        correctAnswers: ['nuestras', 'Nuestras'],
        wordBank: ['nuestras', 'nuestros', 'nuestra', 'sus'],
        hint: '"Hermanas" is feminine plural.',
        explanation: 'Possessive adjectives agree with the noun possessed: "nuestras hermanas".'
      },
      {
        id: 'u2-exam-ex6',
        type: 'sentence-builder',
        prompt: 'Translate into Spanish: "Why are you (informal) in a hurry today?"',
        targetEnglish: 'Why are you in a hurry today?',
        correctTokens: ['¿Por', 'qué', 'tienes', 'prisa', 'hoy?'],
        availableTokens: ['¿Por', 'qué', 'tienes', 'prisa', 'hoy?', 'estás', 'porque', 'mucha'],
        explanation: '"¿Por qué tienes prisa hoy?" ("To be in a hurry" is "tener prisa").'
      },
      {
        id: 'u2-exam-ex7',
        type: 'matching-pairs',
        prompt: 'Match each Spanish idiom or contraction with its English meaning:',
        explanation: 'Check your mastery of idioms and contractions.',
        pairs: [
          { id: 'p1', left: 'Tener ganas de bailar', right: 'To feel like dancing' },
          { id: 'p2', left: 'Hace mucho calor', right: 'It is very hot (weather)' },
          { id: 'p3', left: 'El coche del vecino', right: 'The neighbor\'s car (de + el)' },
          { id: 'p4', left: 'Hay que estudiar', right: 'One must study (impersonal)' }
        ]
      },
      {
        id: 'u2-exam-ex8',
        type: 'multiple-choice',
        prompt: 'Which sentence requires the personal "a"?',
        explanation: '"A mi abuelo" requires the personal "a" because my grandfather is a specific person direct object.',
        options: [
          { id: 'opt1', text: 'Yo visito a mi abuelo todos los domingos.', subtext: 'Specific person direct object', isCorrect: true },
          { id: 'opt2', text: 'Yo visito a el museo.', subtext: 'Incorrect: museum is an inanimate object', isCorrect: false },
          { id: 'opt3', text: 'Hay a muchos niños en la piscina.', subtext: 'Incorrect: "hay" never takes personal "a"', isCorrect: false },
          { id: 'opt4', text: 'Tengo a dos coches nuevos.', subtext: 'Incorrect: objects do not take personal "a"', isCorrect: false }
        ]
      },
      {
        id: 'u2-exam-ex9',
        type: 'fill-in-blank',
        prompt: 'Fill in the correct contraction: "Tomorrow we are going to the gym."',
        sentenceBefore: 'Mañana nosotros vamos',
        sentenceAfter: 'gimnasio.',
        correctAnswers: ['al', 'Al'],
        wordBank: ['al', 'del', 'a el', 'de el'],
        hint: 'a + el gimnasio.',
        explanation: '"a" + "el" must contract to "al".'
      },
      {
        id: 'u2-exam-ex10',
        type: 'error-identification',
        prompt: 'Find the mistake in this sentence:',
        incorrectSentence: 'Yo soy muy calor porque hace sol hoy.',
        errorWord: 'soy muy',
        options: ['tengo mucho', 'estoy muy', 'hago mucho', 'tengo muy'],
        correctOption: 'tengo mucho',
        explanation: 'In Spanish, "to be hot" (sensation) is "tener calor" modified with "mucho": "Yo tengo mucho calor".'
      }
    ]
  }
};
