import type { Unit } from './types';

export const unit3: Unit = {
  id: 3,
  title: 'Unit 3: Stem-Changers, Irregular Verbs & Comparatives',
  subtitle: 'Lessons 28–39: Boot Verbs (o:ue, e:ie, e:i), Periphrasis & Comparatives',
  description: 'Master shoe/boot stem-changing verbs (poder, querer, pedir), irregulars estar, ir, dar, periphrastic expressions "ir a", "acabar de", "volver a", ordinal numbers, calendar dates, and comparisons.',
  iconName: 'Activity',
  colorTheme: 'purple',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 28: Stem-Changing Verbs: o:ue
    // -------------------------------------------------------------
    {
      id: 'u3-l28',
      slug: 'stem-changing-o-ue',
      unitId: 3,
      order: 28,
      title: '28. Stem-Changing Verbs: o:ue',
      subtitle: 'The "Boot" Verbs: poder, dormir, volver, almorzar',
      estimatedMinutes: 10,
      iconName: 'Shuffle',
      summary: 'In Spanish stem-changing verbs (often called "boot verbs"), the vowel in the stem changes whenever the syllable is stressed: o changes to ue in all forms EXCEPT nosotros and vosotros.',
      theory: [
        {
          id: 'u3-l28-t1',
          title: 'The o → ue Stem Change Pattern',
          summary: 'The vowel "o" changes to "ue" in the boot (yo, tú, él/ella, ellos/ellas).',
          table: {
            headers: ['Pronoun', 'PODER (can/able to)', 'DORMIR (to sleep)', 'VOLVER (to return)'],
            rows: [
              ['yo', 'puedo (I can)', 'duermo (I sleep)', 'vuelvo (I return)'],
              ['tú', 'puedes', 'duermes', 'vuelves'],
              ['él / ella / usted', 'puede', 'duerme', 'vuelve'],
              ['nosotros/as (outside boot)', 'podemos', 'dormimos', 'volvemos'],
              ['ellos / ellas / ustedes', 'pueden', 'duermen', 'vuelven']
            ]
          },
          examples: [
            { spanish: 'Yo puedo hablar español.', english: 'I can speak Spanish.', audio: 'Yo puedo hablar español.' },
            { spanish: 'El bebé duerme ocho horas.', english: 'The baby sleeps eight hours.', audio: 'El bebé duerme ocho horas.' },
            { spanish: 'Nosotros podemos ayudar.', english: 'We can help (Notice: NO stem change for nosotros!).', audio: 'Nosotros podemos ayudar.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2801', spanish: 'poder (o:ue)', english: 'to be able to / can', category: 'Stem-Changers' },
        { id: 'v2802', spanish: 'dormir (o:ue)', english: 'to sleep', category: 'Stem-Changers' },
        { id: 'v2803', spanish: 'volver (o:ue)', english: 'to return', category: 'Stem-Changers' }
      ],
      flashcards: [
        { id: 'f2801', front: 'yo (poder)', back: 'puedo', category: 'Stem-Changers' },
        { id: 'f2802', front: 'nosotros (poder)', back: 'podemos', frontSubtext: 'No change outside the boot!', category: 'Stem-Changers' }
      ],
      exercises: [
        {
          id: 'u3-l28-ex1',
          type: 'multiple-choice',
          prompt: 'Conjugate "dormir" for "yo":',
          explanation: '"Dormir" changes o:ue for yo: "duermo".',
          options: [
            { id: 'opt1', text: 'duermo', subtext: 'Correct stem change', isCorrect: true },
            { id: 'opt2', text: 'dormo', subtext: 'Missing stem change', isCorrect: false },
            { id: 'opt3', text: 'duermes', subtext: 'Tú form', isCorrect: false },
            { id: 'opt4', text: 'duerme', subtext: 'Él form', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 29: Stem-Changing Verbs: e:ie
    // -------------------------------------------------------------
    {
      id: 'u3-l29',
      slug: 'stem-changing-e-ie',
      unitId: 3,
      order: 29,
      title: '29. Stem-Changing Verbs: e:ie',
      subtitle: 'The "Boot" Verbs: querer, entender, empezar, pensar',
      estimatedMinutes: 10,
      iconName: 'Shuffle',
      summary: 'Learn the second major stem-changing family: the vowel "e" in the stem splits into "ie" whenever the syllable receives stress (querer → quiero, entender → entiendo).',
      theory: [
        {
          id: 'u3-l29-t1',
          title: 'The e → ie Stem Change Pattern',
          summary: 'The vowel "e" becomes "ie" inside the boot.',
          table: {
            headers: ['Pronoun', 'QUERER (to want/love)', 'ENTENDER (to understand)', 'EMPEZAR (to start)'],
            rows: [
              ['yo', 'quiero (I want)', 'entiendo (I understand)', 'empiezo (I begin)'],
              ['tú', 'quieres', 'entiendes', 'empiezas'],
              ['él / ella / usted', 'quiere', 'entiende', 'empieza'],
              ['nosotros/as (outside)', 'queremos', 'entendemos', 'empezamos'],
              ['ellos / ellas / ustedes', 'quieren', 'entienden', 'empiezan']
            ]
          },
          examples: [
            { spanish: 'Yo quiero aprender español.', english: 'I want to learn Spanish.', audio: 'Yo quiero aprender español.' },
            { spanish: '¿Entiendes la lección?', english: 'Do you understand the lesson?', audio: '¿Entiendes la lección?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v2901', spanish: 'querer (e:ie)', english: 'to want / to love', category: 'Stem-Changers' },
        { id: 'v2902', spanish: 'entender (e:ie)', english: 'to understand', category: 'Stem-Changers' },
        { id: 'v2903', spanish: 'empezar (e:ie)', english: 'to begin / to start', category: 'Stem-Changers' }
      ],
      flashcards: [
        { id: 'f2901', front: 'yo (querer)', back: 'quiero', category: 'Stem-Changers' },
        { id: 'f2902', front: 'nosotros (querer)', back: 'queremos', category: 'Stem-Changers' }
      ],
      exercises: [
        {
          id: 'u3-l29-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I want a coffee"?',
          explanation: '"Quiero un café".',
          options: [
            { id: 'opt1', text: 'Quiero un café.', subtext: 'Correct e:ie change', isCorrect: true },
            { id: 'opt2', text: 'Quero un café.', subtext: 'Missing stem change', isCorrect: false },
            { id: 'opt3', text: 'Quiere un café.', subtext: 'Él form', isCorrect: false },
            { id: 'opt4', text: 'Quieres un café.', subtext: 'Tú form', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 30: Stem-Changing Verbs: e:i
    // -------------------------------------------------------------
    {
      id: 'u3-l30',
      slug: 'stem-changing-e-i',
      unitId: 3,
      order: 30,
      title: '30. Stem-Changing Verbs: e:i',
      subtitle: 'The -IR Exclusive Family: pedir, servir, repetir',
      estimatedMinutes: 9,
      iconName: 'Shuffle',
      summary: 'Learn the third stem-changing family, found ONLY in -IR verbs: the vowel "e" becomes "i" inside the boot (pedir → pido, servir → sirvo).',
      theory: [
        {
          id: 'u3-l30-t1',
          title: 'The e → i Stem Change Pattern',
          summary: 'The vowel "e" changes directly to "i".',
          table: {
            headers: ['Pronoun', 'PEDIR (to ask for/order)', 'SERVIR (to serve)', 'REPETIR (to repeat)'],
            rows: [
              ['yo', 'pido (I ask for)', 'sirvo (I serve)', 'repito (I repeat)'],
              ['tú', 'pides', 'sirves', 'repites'],
              ['él / ella / usted', 'pide', 'sirve', 'repite'],
              ['nosotros/as (outside)', 'pedimos', 'servimos', 'repetimos'],
              ['ellos / ellas / ustedes', 'piden', 'sirven', 'repiten']
            ]
          },
          examples: [
            { spanish: 'Yo pido la cuenta.', english: 'I ask for the bill.', audio: 'Yo pido la cuenta.' },
            { spanish: 'El restaurante sirve comida mexicana.', english: 'The restaurant serves Mexican food.', audio: 'El restaurante sirve comida mexicana.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3001', spanish: 'pedir (e:i)', english: 'to ask for / to order', category: 'Stem-Changers' },
        { id: 'v3002', spanish: 'servir (e:i)', english: 'to serve', category: 'Stem-Changers' },
        { id: 'v3003', spanish: 'la cuenta', english: 'the bill / the check', category: 'Restaurant' }
      ],
      flashcards: [
        { id: 'f3001', front: 'yo (pedir)', back: 'pido', category: 'Stem-Changers' },
        { id: 'f3002', front: 'el mesero (servir)', back: 'sirve', category: 'Stem-Changers' }
      ],
      exercises: [
        {
          id: 'u3-l30-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "I order the fish in the restaurant"',
          explanation: '"Yo pido el pescado en el restaurante".',
          options: [
            { id: 'opt1', text: 'Pido el pescado en el restaurante.', subtext: 'Correct e:i change', isCorrect: true },
            { id: 'opt2', text: 'Pedo el pescado en el restaurante.', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt3', text: 'Pides el pescado en el restaurante.', subtext: 'Tú form', isCorrect: false },
            { id: 'opt4', text: 'Pide el pescado en el restaurante.', subtext: 'Él form', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 31: Estar, Ir, Dar
    // -------------------------------------------------------------
    {
      id: 'u3-l31',
      slug: 'estar-ir-dar',
      unitId: 3,
      order: 31,
      title: '31. Estar, Ir, Dar',
      subtitle: 'The Trio of -oy Ending Irregular Verbs',
      estimatedMinutes: 9,
      iconName: 'Compass',
      summary: 'Master three foundational irregular verbs whose "yo" forms uniquely end in "-oy": estoy (estar), voy (ir - to go), and doy (dar - to give).',
      theory: [
        {
          id: 'u3-l31-t1',
          title: 'Conjugations of Estar, Ir, and Dar',
          summary: 'Notice how all three have -oy in the 1st person singular.',
          table: {
            headers: ['Pronoun', 'ESTAR (to be)', 'IR (to go)', 'DAR (to give)'],
            rows: [
              ['yo', 'estoy', 'voy (I go)', 'doy (I give)'],
              ['tú', 'estás', 'vas', 'das'],
              ['él / ella / usted', 'está', 'va', 'da'],
              ['nosotros/as', 'estamos', 'vamos', 'damos'],
              ['ellos / ellas / ustedes', 'están', 'van', 'dan']
            ]
          },
          examples: [
            { spanish: 'Voy a la escuela.', english: 'I go to school.', audio: 'Voy a la escuela.' },
            { spanish: 'Doy un regalo a mi amigo.', english: 'I give a gift to my friend.', audio: 'Doy un regalo a mi amigo.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3101', spanish: 'ir', english: 'to go', category: 'Verbs' },
        { id: 'v3102', spanish: 'dar', english: 'to give', category: 'Verbs' },
        { id: 'v3103', spanish: 'un regalo', english: 'a gift / present', category: 'Nouns' }
      ],
      flashcards: [
        { id: 'f3101', front: 'yo (ir)', back: 'voy', category: 'Irregulars' },
        { id: 'f3102', front: 'nosotros (ir)', back: 'vamos', category: 'Irregulars' },
        { id: 'f3103', front: 'yo (dar)', back: 'doy', category: 'Irregulars' }
      ],
      exercises: [
        {
          id: 'u3-l31-ex1',
          type: 'multiple-choice',
          prompt: 'What is the "yo" form of the verb "ir" (to go)?',
          explanation: '"Ir" conjugates to "voy" in 1st person.',
          options: [
            { id: 'opt1', text: 'voy', subtext: 'Yo voy', isCorrect: true },
            { id: 'opt2', text: 'io', subtext: 'Nonexistent form', isCorrect: false },
            { id: 'opt3', text: 'vas', subtext: 'Tú vas', isCorrect: false },
            { id: 'opt4', text: 'va', subtext: 'Él va', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 32: "Ir A" + Infinitive
    // -------------------------------------------------------------
    {
      id: 'u3-l32',
      slug: 'ir-a-infinitive',
      unitId: 3,
      order: 32,
      title: '32. "Ir A" + Infinitive',
      subtitle: 'The Near Future Tense ("Going to do something")',
      estimatedMinutes: 9,
      iconName: 'FastForward',
      summary: 'Express actions that are about to happen in the future using the simple formula: conjugated "ir" + "a" + infinitive verb.',
      theory: [
        {
          id: 'u3-l32-t1',
          title: 'The Periphrastic Future Blueprint',
          summary: 'Express the near future without memorizing future endings!',
          formula: {
            pattern: 'ir [conjugated: voy, vas, va, vamos, van] + a + [infinitive]',
            example: 'Voy a comer (I am going to eat)'
          },
          examples: [
            { spanish: 'Voy a estudiar esta noche.', english: 'I am going to study tonight.', audio: 'Voy a estudiar esta noche.' },
            { spanish: '¿Qué vas a hacer mañana?', english: 'What are you going to do tomorrow?', audio: '¿Qué vas a hacer mañana?' },
            { spanish: 'Vamos a viajar a España.', english: 'We are going to travel to Spain.', audio: 'Vamos a viajar a España.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3201', spanish: 'viajar', english: 'to travel', category: 'Verbs' },
        { id: 'v3202', spanish: 'hacer', english: 'to do / to make', category: 'Verbs' },
        { id: 'v3203', spanish: 'esta noche', english: 'tonight', category: 'Time' }
      ],
      flashcards: [
        { id: 'f3201', front: 'I am going to eat', back: 'Voy a comer', category: 'Near Future' },
        { id: 'f3202', front: 'We are going to travel', back: 'Vamos a viajar', category: 'Near Future' }
      ],
      exercises: [
        {
          id: 'u3-l32-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "We are going to speak Spanish"',
          explanation: '"Vamos a hablar español" (ir + a + infinitive).',
          options: [
            { id: 'opt1', text: 'Vamos a hablar español.', subtext: 'Correct future formula', isCorrect: true },
            { id: 'opt2', text: 'Vamos hablar español.', subtext: 'Missing "a"', isCorrect: false },
            { id: 'opt3', text: 'Vamos a hablamos español.', subtext: 'Double conjugation error', isCorrect: false },
            { id: 'opt4', text: 'Ir a hablar español.', subtext: 'Unconjugated ir', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 33: "Acabar De" + Infinitive
    // -------------------------------------------------------------
    {
      id: 'u3-l33',
      slug: 'acabar-de-infinitive',
      unitId: 3,
      order: 33,
      title: '33. "Acabar De" + Infinitive',
      subtitle: 'Expressing "To Have Just Done Something"',
      estimatedMinutes: 8,
      iconName: 'Check',
      summary: 'Learn how Spanish expresses actions that just finished occurring: "acabar [conjugated in present] + de + infinitive verb".',
      theory: [
        {
          id: 'u3-l33-t1',
          title: 'The "Just Finished" Blueprint',
          summary: 'Acabar de + infinitive translates to "have just [done]".',
          formula: {
            pattern: 'acabar [acabo, acabas, acaba, acabamos, acaban] + de + [infinitive]',
            example: 'Acabo de comer (I have just eaten)'
          },
          examples: [
            { spanish: 'Acabo de llegar a casa.', english: 'I have just arrived home.', audio: 'Acabo de llegar a casa.' },
            { spanish: 'Ella acaba de terminar su examen.', english: 'She has just finished her exam.', audio: 'Ella acaba de terminar su examen.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3301', spanish: 'llegar', english: 'to arrive', category: 'Verbs' },
        { id: 'v3302', spanish: 'terminar', english: 'to finish', category: 'Verbs' }
      ],
      flashcards: [
        { id: 'f3301', front: 'I have just arrived', back: 'Acabo de llegar', category: 'Acabar De' }
      ],
      exercises: [
        {
          id: 'u3-l33-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "They have just eaten"',
          explanation: '"Ellos acaban de comer".',
          options: [
            { id: 'opt1', text: 'Ellos acaban de comer.', subtext: 'Correct idiom', isCorrect: true },
            { id: 'opt2', text: 'Ellos acaban a comer.', subtext: 'Wrong preposition (must be de)', isCorrect: false },
            { id: 'opt3', text: 'Ellos comen ahora.', subtext: 'Means they eat now', isCorrect: false },
            { id: 'opt4', text: 'Ellos acaban de comen.', subtext: 'Double conjugation error', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 34: "Volver A" + Infinitive
    // -------------------------------------------------------------
    {
      id: 'u3-l34',
      slug: 'volver-a-infinitive',
      unitId: 3,
      order: 34,
      title: '34. "Volver A" + Infinitive',
      subtitle: 'Expressing "To Do Something Again"',
      estimatedMinutes: 8,
      iconName: 'RotateCcw',
      summary: 'Instead of saying "hacer otra vez", natural Spanish uses the elegant idiom "volver a + infinitive" to express doing something again.',
      theory: [
        {
          id: 'u3-l34-t1',
          title: 'The "Doing It Again" Blueprint',
          summary: 'Volver (o:ue) + a + infinitive.',
          formula: {
            pattern: 'volver [vuelvo, vuelves, vuelve, volvemos, vuelven] + a + [infinitive]',
            example: 'Vuelvo a leer el libro (I read the book again)'
          },
          examples: [
            { spanish: 'Vuelvo a ver la película.', english: 'I watch the movie again.', audio: 'Vuelvo a ver la película.' },
            { spanish: '¿Vas a volver a intentar?', english: 'Are you going to try again?', audio: '¿Vas a volver a intentar?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3401', spanish: 'intentar', english: 'to try / to attempt', category: 'Verbs' },
        { id: 'v3402', spanish: 'volver a', english: 'to do again', category: 'Verbs' }
      ],
      flashcards: [
        { id: 'f3401', front: 'to do something again', back: 'volver a + infinitive', category: 'Volver A' }
      ],
      exercises: [
        {
          id: 'u3-l34-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I am studying again" in natural Spanish?',
          explanation: '"Vuelvo a estudiar".',
          options: [
            { id: 'opt1', text: 'Vuelvo a estudiar.', subtext: 'Correct idiom', isCorrect: true },
            { id: 'opt2', text: 'Estudio otra vez más.', subtext: 'Clunky literal translation', isCorrect: false },
            { id: 'opt3', text: 'Vuelvo estudiar.', subtext: 'Missing "a"', isCorrect: false },
            { id: 'opt4', text: 'Volver a estudio.', subtext: 'Syntax error', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 35: Ordinal Numbers
    // -------------------------------------------------------------
    {
      id: 'u3-l35',
      slug: 'ordinal-numbers',
      unitId: 3,
      order: 35,
      title: '35. Ordinal Numbers',
      subtitle: '1st through 10th & The "Primer / Tercer" Shortening Rule',
      estimatedMinutes: 9,
      iconName: 'ListOrdered',
      summary: 'Learn ordinal numbers: primero, segundo, tercero... and master the rule where "primero" and "tercero" drop the "-o" before masculine singular nouns (el primer libro, el tercer piso).',
      theory: [
        {
          id: 'u3-l35-t1',
          title: 'Ordinal Numbers 1st to 10th',
          summary: 'Ordinals agree in gender and number with the noun.',
          table: {
            headers: ['Rank', 'Masculine Form', 'Feminine Form', 'Shortened before Masc Sing'],
            rows: [
              ['1st', 'primero', 'primera', 'el primer piso (1st floor)'],
              ['2nd', 'segundo', 'segunda', 'el segundo piso'],
              ['3rd', 'tercero', 'tercera', 'el tercer piso (3rd floor)'],
              ['4th', 'cuarto', 'cuarta', 'el cuarto piso'],
              ['5th', 'quinto', 'quinta', 'el quinto piso'],
              ['6th', 'sexto', 'sexta', 'el sexto piso'],
              ['7th', 'séptimo', 'séptima', 'el séptimo piso'],
              ['8th', 'octavo', 'octava', 'el octavo piso'],
              ['9th', 'noveno', 'novena', 'el noveno piso'],
              ['10th', 'décimo', 'décima', 'el décimo piso']
            ]
          },
          examples: [
            { spanish: 'el primer día de clases', english: 'the first day of class', audio: 'el primer día de clases' },
            { spanish: 'la primera lección', english: 'the first lesson', audio: 'la primera lección' },
            { spanish: 'el tercer capítulo', english: 'the third chapter', audio: 'el tercer capítulo' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3501', spanish: 'primero / primer', english: 'first (1st)', category: 'Ordinals' },
        { id: 'v3502', spanish: 'segundo', english: 'second (2nd)', category: 'Ordinals' },
        { id: 'v3503', spanish: 'tercero / tercer', english: 'third (3rd)', category: 'Ordinals' }
      ],
      flashcards: [
        { id: 'f3501', front: 'the first day (masc)', back: 'el primer día', frontSubtext: 'primero drops -o before masc sing', category: 'Ordinals' },
        { id: 'f3502', front: 'the third floor (masc)', back: 'el tercer piso', frontSubtext: 'tercero drops -o before masc sing', category: 'Ordinals' }
      ],
      exercises: [
        {
          id: 'u3-l35-ex1',
          type: 'multiple-choice',
          prompt: 'Choose the correct form: "El _______ día de la semana" (first day)',
          explanation: '"Primero" becomes "primer" before a masculine singular noun: "el primer día".',
          options: [
            { id: 'opt1', text: 'primer', subtext: 'Shortened before masculine noun', isCorrect: true },
            { id: 'opt2', text: 'primero', subtext: 'Cannot keep -o before noun', isCorrect: false },
            { id: 'opt3', text: 'primera', subtext: 'Gender error (día is masculine)', isCorrect: false },
            { id: 'opt4', text: 'primeros', subtext: 'Plural error', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 36: Months, Seasons & Dates
    // -------------------------------------------------------------
    {
      id: 'u3-l36',
      slug: 'months-seasons-dates',
      unitId: 3,
      order: 36,
      title: '36. Months, Seasons & Dates',
      subtitle: 'The Calendar, Four Seasons & The "El [number] de [month]" Formula',
      estimatedMinutes: 9,
      iconName: 'Calendar',
      summary: 'Learn all 12 months, the four seasons, and how to write and speak dates in Spanish using the standard formula "el [number] de [month]".',
      theory: [
        {
          id: 'u3-l36-t1',
          title: 'Months and Seasons',
          summary: 'Months and seasons are NOT capitalized in Spanish.',
          table: {
            headers: ['Season', 'Spanish', 'Months in Season'],
            rows: [
              ['Spring', 'la primavera', 'marzo, abril, mayo'],
              ['Summer', 'el verano', 'junio, julio, agosto'],
              ['Autumn', 'el otoño', 'septiembre, octubre, noviembre'],
              ['Winter', 'el invierno', 'diciembre, enero, febrero']
            ]
          },
          content: [
            'To express a date: **el [cardinal number] de [month]** (e.g. *el 5 de mayo*).',
            'Exception: For the 1st of the month, Spanish uses the ordinal **el primero de [month]** (or *el uno de [month]* in Latin America).'
          ],
          examples: [
            { spanish: 'Hoy es el cuatro de julio.', english: 'Today is July 4th.', audio: 'Hoy es el cuatro de julio.' },
            { spanish: 'Mi cumpleaños es el primero de enero.', english: 'My birthday is January 1st.', audio: 'Mi cumpleaños es el primero de enero.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3601', spanish: 'enero', english: 'January', category: 'Months' },
        { id: 'v3602', spanish: 'la primavera', english: 'spring', category: 'Seasons' },
        { id: 'v3603', spanish: 'el verano', english: 'summer', category: 'Seasons' },
        { id: 'v3604', spanish: 'el otoño', english: 'autumn / fall', category: 'Seasons' },
        { id: 'v3605', spanish: 'el invierno', english: 'winter', category: 'Seasons' }
      ],
      flashcards: [
        { id: 'f3601', front: 'the 4 seasons', back: 'la primavera, el verano, el otoño, el invierno', category: 'Seasons' }
      ],
      exercises: [
        {
          id: 'u3-l36-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "December 25th" in Spanish?',
          explanation: '"El 25 de diciembre".',
          options: [
            { id: 'opt1', text: 'el 25 de diciembre', subtext: 'Standard date formula', isCorrect: true },
            { id: 'opt2', text: 'diciembre 25', subtext: 'English syntax', isCorrect: false },
            { id: 'opt3', text: 'en 25 de diciembre', subtext: 'Incorrect preposition', isCorrect: false },
            { id: 'opt4', text: 'el 25 diciembre', subtext: 'Missing "de"', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 37: Comparisons of Inequality
    // -------------------------------------------------------------
    {
      id: 'u3-l37',
      slug: 'comparisons-inequality',
      unitId: 3,
      order: 37,
      title: '37. Comparisons of Inequality',
      subtitle: 'More than (más... que) and Less than (menos... que)',
      estimatedMinutes: 9,
      iconName: 'TrendingUp',
      summary: 'Learn how to compare two unequal things using "más + adjective/noun + que" (more than) and "menos + adjective/noun + que" (less than).',
      theory: [
        {
          id: 'u3-l37-t1',
          title: 'The Inequality Comparison Formula',
          summary: 'más... que / menos... que.',
          formula: {
            pattern: 'más / menos + [adjective / adverb / noun] + que',
            example: 'Juan es más alto que Pedro (Juan is taller than Pedro)'
          },
          examples: [
            { spanish: 'El tren es más rápido que el autobús.', english: 'The train is faster than the bus.', audio: 'El tren es más rápido que el autobús.' },
            { spanish: 'Tengo menos libros que tú.', english: 'I have fewer books than you.', audio: 'Tengo menos libros que tú.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3701', spanish: 'más... que', english: 'more... than', category: 'Comparatives' },
        { id: 'v3702', spanish: 'menos... que', english: 'less... than / fewer... than', category: 'Comparatives' },
        { id: 'v3703', spanish: 'rápido', english: 'fast / quick', category: 'Adjectives' }
      ],
      flashcards: [
        { id: 'f3701', front: 'more... than', back: 'más... que', category: 'Comparatives' },
        { id: 'f3702', front: 'less... than', back: 'menos... que', category: 'Comparatives' }
      ],
      exercises: [
        {
          id: 'u3-l37-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "Spanish is easier than Chinese"',
          explanation: '"El español es más fácil que el chino".',
          options: [
            { id: 'opt1', text: 'El español es más fácil que el chino.', subtext: 'Correct comparative', isCorrect: true },
            { id: 'opt2', text: 'El español es más fácil de el chino.', subtext: 'Wrong preposition (use que)', isCorrect: false },
            { id: 'opt3', text: 'El español es tan fácil que el chino.', subtext: 'Incorrect formula', isCorrect: false },
            { id: 'opt4', text: 'El español es fácil que el chino.', subtext: 'Missing más', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 38: Comparisons of Equality
    // -------------------------------------------------------------
    {
      id: 'u3-l38',
      slug: 'comparisons-equality',
      unitId: 3,
      order: 38,
      title: '38. Comparisons of Equality',
      subtitle: 'As... as (tan... como) and As much / many as (tanto... como)',
      estimatedMinutes: 9,
      iconName: 'Equal',
      summary: 'Learn how to compare equal entities: "tan + adjective + como" (as tall as) vs "tanto/a/os/as + noun + como" (as many books as).',
      theory: [
        {
          id: 'u3-l38-t1',
          title: 'Adjectives (tan... como) vs Nouns (tanto... como)',
          summary: 'Use "tan" with adjectives; use "tanto/tanta/tantos/tantas" with nouns.',
          table: {
            headers: ['Comparison Type', 'Formula', 'Example'],
            rows: [
              ['With Adjectives / Adverbs', 'tan + [adj] + como', 'María es tan alta como Juan (Maria is as tall as Juan)'],
              ['With Masculine Sing Noun', 'tanto + [noun] + como', 'Tengo tanto dinero como tú (I have as much money as you)'],
              ['With Feminine Plur Noun', 'tantas + [noun] + como', 'Tengo tantas casas como tú (I have as many houses as you)']
            ]
          },
          examples: [
            { spanish: 'Este libro es tan interesante como aquel.', english: 'This book is as interesting as that one.', audio: 'Este libro es tan interesante como aquel.' },
            { spanish: 'Tengo tantos amigos como tú.', english: 'I have as many friends as you.', audio: 'Tengo tantos amigos como tú.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3801', spanish: 'tan... como', english: 'as... as (with adjectives)', category: 'Comparatives' },
        { id: 'v3802', spanish: 'tanto/a/os/as... como', english: 'as much / many... as', category: 'Comparatives' }
      ],
      flashcards: [
        { id: 'f3801', front: 'as tall as (adjective)', back: 'tan alto como', category: 'Comparatives' },
        { id: 'f3802', front: 'as many books as (noun)', back: 'tantos libros como', category: 'Comparatives' }
      ],
      exercises: [
        {
          id: 'u3-l38-ex1',
          type: 'multiple-choice',
          prompt: 'Fill in: "Ana tiene _______ amigas como Sofía" (as many friends as)',
          explanation: '"Amigas" is feminine plural noun, so use "tantas amigas como".',
          options: [
            { id: 'opt1', text: 'tantas', subtext: 'Fem plural agreement with amigas', isCorrect: true },
            { id: 'opt2', text: 'tan', subtext: 'Tan is only used with adjectives', isCorrect: false },
            { id: 'opt3', text: 'tantos', subtext: 'Gender mismatch', isCorrect: false },
            { id: 'opt4', text: 'tanto', subtext: 'Number mismatch', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 39: Superlatives
    // -------------------------------------------------------------
    {
      id: 'u3-l39',
      slug: 'superlatives',
      unitId: 3,
      order: 39,
      title: '39. Superlatives',
      subtitle: 'The Most (el más...) & The Absolute Superlative (-ísimo)',
      estimatedMinutes: 9,
      iconName: 'Award',
      summary: 'Learn relative superlatives ("el más alto de todos" - the tallest of all), irregular superlatives (el mejor, el peor), and absolute superlatives ending in "-ísimo" (buenísimo, grandísimo).',
      theory: [
        {
          id: 'u3-l39-t1',
          title: 'Relative and Absolute Superlatives',
          summary: '1. el/la más... de; 2. Suffix -ísimo (extremely / super).',
          table: {
            headers: ['Type', 'Formula', 'Example'],
            rows: [
              ['Relative Superlative ("The most")', 'definite article + más + [adj] + de', 'el chico más inteligente de la clase'],
              ['Irregular: The Best', 'el mejor / la mejor', 'el mejor restaurante de la ciudad'],
              ['Irregular: The Worst', 'el peor / la peor', 'la peor película del año'],
              ['Absolute ("Extremely...")', 'adjective stem + -ísimo/a/os/as', '¡La comida está riquísima! (super delicious)']
            ]
          },
          examples: [
            { spanish: 'Madrid es la ciudad más grande de España.', english: 'Madrid is the biggest city in Spain.', audio: 'Madrid es la ciudad más grande de España.' },
            { spanish: 'Este libro es facilísimo.', english: 'This book is extremely easy.', audio: 'Este libro es facilísimo.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v3901', spanish: 'el mejor / la mejor', english: 'the best', category: 'Superlatives' },
        { id: 'v3902', spanish: 'el peor / la peor', english: 'the worst', category: 'Superlatives' },
        { id: 'v3903', spanish: '-ísimo / -ísima', english: 'extremely / very very', category: 'Superlatives' }
      ],
      flashcards: [
        { id: 'f3901', front: 'the best restaurant', back: 'el mejor restaurante', category: 'Superlatives' },
        { id: 'f3902', front: 'extremely good', back: 'buenísimo', category: 'Superlatives' }
      ],
      exercises: [
        {
          id: 'u3-l39-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "The best book in the library"',
          explanation: '"El mejor libro de la biblioteca" (note: use "de" for "in the library").',
          options: [
            { id: 'opt1', text: 'El mejor libro de la biblioteca.', subtext: 'Correct superlative', isCorrect: true },
            { id: 'opt2', text: 'El más bueno libro en la biblioteca.', subtext: 'Irregular mejor required', isCorrect: false },
            { id: 'opt3', text: 'El mejor libro en la biblioteca.', subtext: 'Must use "de", not "en"', isCorrect: false },
            { id: 'opt4', text: 'El peor libro de la biblioteca.', subtext: 'Peor means worst', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u3-exam',
    title: 'Unit 3 Comprehensive Mastery Exam',
    description: '10 questions testing Stem-Changers, Estar/Ir/Dar, Periphrasis (Ir a, Acabar de, Volver a), Ordinals, and Comparatives/Superlatives.',
    passingScore: 80,
    exercises: [
      {
        id: 'u3-ex-1',
        type: 'multiple-choice',
        prompt: 'Conjugate "poder" for "nosotros":',
        explanation: 'Nosotros is outside the boot, so it does NOT stem-change: "podemos".',
        options: [
          { id: 'e1', text: 'podemos', subtext: 'No stem change for nosotros', isCorrect: true },
          { id: 'e2', text: 'puedemos', subtext: 'Erroneous stem change', isCorrect: false },
          { id: 'e3', text: 'pueden', subtext: 'Ellos form', isCorrect: false },
          { id: 'e4', text: 'podimos', subtext: 'Incorrect ending', isCorrect: false }
        ]
      },
      {
        id: 'u3-ex-2',
        type: 'fill-in-blank',
        prompt: 'Complete the near future phrase: "Voy _____ (to) estudiar."',
        sentenceBefore: 'Voy',
        sentenceAfter: 'estudiar español.',
        correctAnswers: ['a', 'A'],
        wordBank: ['a', 'de', 'en', 'por'],
        hint: 'ir + a + infinitive.',
        explanation: 'The periphrastic future formula requires "a": "Voy a estudiar".'
      },
      {
        id: 'u3-ex-3',
        type: 'multiple-choice',
        prompt: 'Translate: "I have just eaten"',
        explanation: '"Acabo de comer".',
        options: [
          { id: 'e1', text: 'Acabo de comer.', subtext: 'Correct', isCorrect: true },
          { id: 'e2', text: 'Voy a comer.', subtext: 'Means going to eat', isCorrect: false },
          { id: 'e3', text: 'Vuelvo a comer.', subtext: 'Means eat again', isCorrect: false },
          { id: 'e4', text: 'Acabo a comer.', subtext: 'Wrong preposition', isCorrect: false }
        ]
      }
    ]
  }
};
