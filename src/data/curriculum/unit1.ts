import type { Unit } from './types';

export const unit1: Unit = {
  id: 1,
  title: 'Unit 1: Spanish Grammar Fundamentals',
  subtitle: 'The complete 14-lesson curriculum matching StudySpanish.com Unit 1',
  description: 'Master the core building blocks of beginner Spanish: noun genders, numbers 1–30, plurals, articles, the verb form "hay", subject pronouns, all three regular verb conjugations (-ar, -er, -ir), descriptive adjectives, and the days of the week.',
  iconName: 'BookOpen',
  colorTheme: 'emerald',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 1: Gender of Nouns I
    // -------------------------------------------------------------
    {
      id: 'u1-l1',
      slug: 'gender-of-nouns-1',
      unitId: 1,
      order: 1,
      title: '1. Gender of Nouns I',
      subtitle: 'Masculine vs Feminine Basics (-o / -a) & Common Exceptions',
      estimatedMinutes: 8,
      iconName: 'Sparkles',
      summary: 'In Spanish, all nouns possess grammatical gender. Learn the golden rules of -o vs -a endings and discover famous exceptions like "el día" and "la mano".',
      theory: [
        {
          id: 'u1-l1-t1',
          title: 'The Golden Rule: -o and -a Endings',
          summary: 'Unlike English where inanimate objects are neutral ("it"), every single Spanish noun is either masculine or feminine.',
          ruleHighlights: [
            { label: 'Masculine (-o)', description: 'Nouns ending in -o are usually masculine (use "el")', color: 'indigo' },
            { label: 'Feminine (-a)', description: 'Nouns ending in -a are usually feminine (use "la")', color: 'rose' }
          ],
          content: [
            'In Spanish, grammatical gender is not about biological sex for inanimate objects—it is a grammatical classification system that affects articles and adjectives.',
            'As a general starting rule: nouns ending in the vowel -o are masculine, and nouns ending in the vowel -a are feminine.'
          ],
          formula: {
            pattern: 'el + [masculine noun (-o)] | la + [feminine noun (-a)]',
            example: 'el libro (the book) | la mesa (the table)'
          },
          examples: [
            { spanish: 'el libro', english: 'the book', breakdown: 'Ends in -o → Masculine', audio: 'el libro' },
            { spanish: 'el perro', english: 'the dog', breakdown: 'Ends in -o → Masculine', audio: 'el perro' },
            { spanish: 'la casa', english: 'the house', breakdown: 'Ends in -a → Feminine', audio: 'la casa' },
            { spanish: 'la mesa', english: 'the table', breakdown: 'Ends in -a → Feminine', audio: 'la mesa' }
          ],
          proTip: 'When you learn a new Spanish noun, always memorize it together with its article ("el libro", not just "libro") so the gender is locked in your memory!'
        },
        {
          id: 'u1-l1-t2',
          title: 'Famous Exceptions You Must Know',
          summary: 'Some words break the -o/-a rule due to Greek origins or abbreviations.',
          content: [
            'Several high-frequency Spanish words end in -a but are actually masculine (often words of Greek origin ending in -ma, -pa, or -ta).',
            'Conversely, a few words end in -o but are feminine (often shortened versions of longer feminine words).'
          ],
          table: {
            headers: ['Spanish', 'Meaning', 'Gender', 'Why is it an exception?'],
            rows: [
              ['el día', 'the day', 'Masculine', 'Ends in -a, but takes "el"'],
              ['el mapa', 'the map', 'Masculine', 'Greek origin ending in -pa'],
              ['el problema', 'the problem', 'Masculine', 'Greek origin ending in -ma'],
              ['el idioma', 'the language', 'Masculine', 'Greek origin ending in -ma'],
              ['la mano', 'the hand', 'Feminine', 'Ends in -o, but takes "la"'],
              ['la foto', 'the photo', 'Feminine', 'Short for "la fotografía"'],
              ['la moto', 'the motorcycle', 'Feminine', 'Short for "la motocicleta"']
            ]
          },
          examples: [
            { spanish: 'Buenos días', english: 'Good morning / Good day', breakdown: '"Día" is masculine!', audio: 'Buenos días' },
            { spanish: 'la mano derecha', english: 'the right hand', breakdown: '"Mano" is feminine!', audio: 'la mano derecha' }
          ],
          watchOut: 'Never say "la problema" or "la día"! These are two of the most common beginner traps.'
        }
      ],
      vocabulary: [
        { id: 'v101', spanish: 'el libro', english: 'the book', gender: 'masculine', category: 'Objects', exampleSentence: { spanish: 'El libro es nuevo.', english: 'The book is new.' } },
        { id: 'v102', spanish: 'la casa', english: 'the house', gender: 'feminine', category: 'Places', exampleSentence: { spanish: 'La casa es blanca.', english: 'The house is white.' } },
        { id: 'v103', spanish: 'el perro', english: 'the dog', gender: 'masculine', category: 'Animals', exampleSentence: { spanish: 'El perro es amigable.', english: 'The dog is friendly.' } },
        { id: 'v104', spanish: 'el gato', english: 'the cat', gender: 'masculine', category: 'Animals', exampleSentence: { spanish: 'El gato duerme.', english: 'The cat is sleeping.' } },
        { id: 'v105', spanish: 'la mesa', english: 'the table', gender: 'feminine', category: 'Furniture', exampleSentence: { spanish: 'La mesa es de madera.', english: 'The table is made of wood.' } },
        { id: 'v106', spanish: 'el día', english: 'the day', gender: 'masculine', category: 'Time', notes: 'Exception: ends in -a but is masculine', exampleSentence: { spanish: 'Hoy es un buen día.', english: 'Today is a good day.' } },
        { id: 'v107', spanish: 'el mapa', english: 'the map', gender: 'masculine', category: 'Objects', notes: 'Exception: Greek origin', exampleSentence: { spanish: 'El mapa de España.', english: 'The map of Spain.' } },
        { id: 'v108', spanish: 'la mano', english: 'the hand', gender: 'feminine', category: 'Body', notes: 'Exception: ends in -o but is feminine', exampleSentence: { spanish: 'Levanta la mano.', english: 'Raise your hand.' } }
      ],
      flashcards: [
        { id: 'f101', front: 'el libro', back: 'the book', frontSubtext: 'Masculine noun', backSubtext: 'Ends in -o', category: 'Basics' },
        { id: 'f102', front: 'la mesa', back: 'the table', frontSubtext: 'Feminine noun', backSubtext: 'Ends in -a', category: 'Basics' },
        { id: 'f103', front: 'el día', back: 'the day', frontSubtext: '⚠️ Exception', backSubtext: 'Masculine despite ending in -a', category: 'Exceptions' },
        { id: 'f104', front: 'la mano', back: 'the hand', frontSubtext: '⚠️ Exception', backSubtext: 'Feminine despite ending in -o', category: 'Exceptions' },
        { id: 'f105', front: 'el mapa', back: 'the map', frontSubtext: '⚠️ Exception', backSubtext: 'Masculine noun of Greek origin', category: 'Exceptions' }
      ],
      exercises: [
        {
          id: 'u1-l1-ex1',
          type: 'multiple-choice',
          prompt: 'Which article correctly precedes the noun "casa" (house)?',
          audioPrompt: 'casa',
          explanation: '"Casa" ends in -a and is a standard feminine noun, so it takes the feminine article "la".',
          options: [
            { id: 'opt1', text: 'la casa', subtext: 'Feminine', isCorrect: true },
            { id: 'opt2', text: 'el casa', subtext: 'Masculine', isCorrect: false },
            { id: 'opt3', text: 'lo casa', subtext: 'Neuter', isCorrect: false },
            { id: 'opt4', text: 'le casa', subtext: 'French-style', isCorrect: false }
          ]
        },
        {
          id: 'u1-l1-ex2',
          type: 'multiple-choice',
          prompt: 'Identify the famous exception: Which of these words ending in "-a" is actually MASCULINE?',
          explanation: '"El día" is a famous exception to the general rule. It ends in -a but is grammatically masculine.',
          options: [
            { id: 'opt1', text: 'día', subtext: 'Takes "el"', isCorrect: true },
            { id: 'opt2', text: 'mesa', subtext: 'Takes "la"', isCorrect: false },
            { id: 'opt3', text: 'silla', subtext: 'Takes "la"', isCorrect: false },
            { id: 'opt4', text: 'ventana', subtext: 'Takes "la"', isCorrect: false }
          ]
        },
        {
          id: 'u1-l1-ex3',
          type: 'fill-in-blank',
          prompt: 'Fill in the correct definite article (el or la) for "mano" (hand):',
          sentenceBefore: 'Por favor, levanta',
          sentenceAfter: 'mano.',
          correctAnswers: ['la', 'La'],
          wordBank: ['la', 'el', 'los', 'las'],
          hint: 'Remember: "mano" is a tricky exception ending in -o!',
          explanation: 'Although "mano" ends in -o, it is feminine and requires "la mano".'
        },
        {
          id: 'u1-l1-ex4',
          type: 'matching-pairs',
          prompt: 'Match each Spanish noun to its correct English meaning and gender:',
          explanation: 'Great job matching! Always remember "el día" and "el mapa" take "el", while "la mano" takes "la".',
          pairs: [
            { id: 'p1', left: 'el libro', right: 'the book (masculine)' },
            { id: 'p2', left: 'la mesa', right: 'the table (feminine)' },
            { id: 'p3', left: 'el mapa', right: 'the map (masculine exception)' },
            { id: 'p4', left: 'la mano', right: 'the hand (feminine exception)' }
          ]
        },
        {
          id: 'u1-l1-ex5',
          type: 'error-identification',
          prompt: 'Find the mistake in this sentence and select the correct replacement:',
          incorrectSentence: 'Yo tengo la mapa de Madrid.',
          errorWord: 'la',
          options: ['el', 'un', 'una', 'lo'],
          correctOption: 'el',
          explanation: '"Mapa" is masculine because of its Greek root, so it must be "el mapa" (or "un mapa").'
        },
        {
          id: 'u1-l1-ex6',
          type: 'sentence-builder',
          prompt: 'Build the Spanish phrase for: "The dog and the cat"',
          targetEnglish: 'The dog and the cat',
          correctTokens: ['El', 'perro', 'y', 'el', 'gato'],
          availableTokens: ['El', 'perro', 'y', 'el', 'gato', 'La', 'gata', 'mesa'],
          explanation: 'Both "perro" and "gato" are masculine singular nouns ending in -o, taking the article "El".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 2: Gender of Nouns II
    // -------------------------------------------------------------
    {
      id: 'u1-l2',
      slug: 'gender-of-nouns-2',
      unitId: 1,
      order: 2,
      title: '2. Gender of Nouns II',
      subtitle: 'Suffix Patterns (-ción, -dad), Professions & People',
      estimatedMinutes: 9,
      iconName: 'Layers',
      summary: 'Learn reliable suffix patterns for abstract nouns (-ción, -dad, -tad) and how to form feminine titles for professions and people.',
      theory: [
        {
          id: 'u1-l2-t1',
          title: 'Reliable Feminine Suffix Patterns',
          summary: 'Nouns ending in specific suffixes are almost 100% reliably feminine.',
          ruleHighlights: [
            { label: '-ción / -sión', description: 'Always feminine (la lección, la televisión)', color: 'rose' },
            { label: '-dad / -tad', description: 'Always feminine (la ciudad, la libertad)', color: 'rose' },
            { label: '-tud / -umbre', description: 'Always feminine (la actitud, la costumbre)', color: 'rose' }
          ],
          content: [
            'Abstract nouns and nouns borrowed from Latin with certain suffixes follow extremely consistent gender rules in Spanish.',
            'Whenever you encounter a word ending in -ción, -sión, -dad, -tad, or -tud, you can be certain it is feminine!'
          ],
          table: {
            headers: ['Suffix Pattern', 'Spanish Example', 'English Equivalent', 'Article'],
            rows: [
              ['-ción / -sión', 'la nación, la lección, la pasión', '-tion / -sion (nation, lesson)', 'la'],
              ['-dad / -tad', 'la ciudad, la universidad, la libertad', '-ty (city, university, liberty)', 'la'],
              ['-tud', 'la juventud, la actitud', '-tude (youth, attitude)', 'la']
            ]
          },
          examples: [
            { spanish: 'la conversación', english: 'the conversation', breakdown: 'Ends in -ción → Feminine', audio: 'la conversación' },
            { spanish: 'la ciudad', english: 'the city', breakdown: 'Ends in -dad → Feminine', audio: 'la ciudad' },
            { spanish: 'la universidad', english: 'the university', breakdown: 'Ends in -dad → Feminine', audio: 'la universidad' }
          ],
          proTip: 'English words ending in "-tion" (information, nation, station) almost always correspond to Spanish "-ción" words (información, nación, estación) and are ALL feminine!'
        },
        {
          id: 'u1-l2-t2',
          title: 'Professions and People Nouns',
          summary: 'How to switch between male and female roles.',
          content: [
            'For professions ending in a consonant (like -or): add **-a** for the female version (el profesor → la profesora, el doctor → la doctora).',
            'For professions ending in **-ista** or **-ante**: the word itself does not change; only the article changes! (el dentista / la dentista, el estudiante / la estudiante).'
          ],
          table: {
            headers: ['Category', 'Masculine Form', 'Feminine Form', 'English'],
            rows: [
              ['Add -a', 'el profesor', 'la profesora', 'the teacher'],
              ['Add -a', 'el doctor', 'la doctora', 'the doctor'],
              ['Same ending (-ista)', 'el dentista', 'la dentista', 'the dentist'],
              ['Same ending (-ista)', 'el artista', 'la artista', 'the artist'],
              ['Same ending (-ante)', 'el estudiante', 'la estudiante', 'the student']
            ]
          },
          examples: [
            { spanish: 'El profesor y la profesora', english: 'The male teacher and the female teacher', audio: 'El profesor y la profesora' },
            { spanish: 'Ella es una excelente artista', english: 'She is an excellent artist', audio: 'Ella es una excelente artista' }
          ],
          watchOut: 'Do not invent "la dentisto" or "la artisto"! Words ending in -ista keep -ista for both men and women.'
        }
      ],
      vocabulary: [
        { id: 'v201', spanish: 'la lección', english: 'the lesson', gender: 'feminine', category: 'Education', exampleSentence: { spanish: 'La lección es fácil.', english: 'The lesson is easy.' } },
        { id: 'v202', spanish: 'la ciudad', english: 'the city', gender: 'feminine', category: 'Places', exampleSentence: { spanish: 'Madrid es una gran ciudad.', english: 'Madrid is a great city.' } },
        { id: 'v203', spanish: 'la universidad', english: 'the university', gender: 'feminine', category: 'Education', exampleSentence: { spanish: 'Estudio en la universidad.', english: 'I study at the university.' } },
        { id: 'v204', spanish: 'el profesor', english: 'the male teacher', gender: 'masculine', category: 'People', exampleSentence: { spanish: 'El profesor explica la regla.', english: 'The teacher explains the rule.' } },
        { id: 'v205', spanish: 'la profesora', english: 'the female teacher', gender: 'feminine', category: 'People', exampleSentence: { spanish: 'La profesora es amable.', english: 'The teacher is kind.' } },
        { id: 'v206', spanish: 'el estudiante', english: 'the student (male/general)', gender: 'masculine', category: 'People', exampleSentence: { spanish: 'El estudiante lee.', english: 'The student reads.' } },
        { id: 'v207', spanish: 'la artista', english: 'the female artist', gender: 'feminine', category: 'People', notes: '-ista ending remains the same', exampleSentence: { spanish: 'La artista pinta.', english: 'The artist paints.' } }
      ],
      flashcards: [
        { id: 'f201', front: 'la ciudad', back: 'the city', frontSubtext: 'Feminine noun', backSubtext: 'Ends in -dad', category: 'Suffixes' },
        { id: 'f202', front: 'la lección', back: 'the lesson', frontSubtext: 'Feminine noun', backSubtext: 'Ends in -ción', category: 'Suffixes' },
        { id: 'f203', front: 'el/la dentista', back: 'the dentist (m/f)', frontSubtext: '-ista ending', backSubtext: 'Spelling stays the same for both genders', category: 'Professions' },
        { id: 'f204', front: 'el profesor → la profesora', back: 'the teacher (m → f)', frontSubtext: 'Consonant ending', backSubtext: 'Add -a to form feminine', category: 'Professions' }
      ],
      exercises: [
        {
          id: 'u1-l2-ex1',
          type: 'multiple-choice',
          prompt: 'What article should accompany the word "estación" (station)?',
          audioPrompt: 'estación',
          explanation: 'Nouns ending in "-ción" are always feminine in Spanish, so it is "la estación".',
          options: [
            { id: 'opt1', text: 'la estación', subtext: 'Feminine (-ción)', isCorrect: true },
            { id: 'opt2', text: 'el estación', subtext: 'Masculine', isCorrect: false },
            { id: 'opt3', text: 'lo estación', subtext: 'Neuter', isCorrect: false },
            { id: 'opt4', text: 'un estación', subtext: 'Masculine indefinite', isCorrect: false }
          ]
        },
        {
          id: 'u1-l2-ex2',
          type: 'multiple-choice',
          prompt: 'How do you say "the female dentist" in Spanish?',
          explanation: 'Nouns ending in "-ista" do not change form between genders. You simply use the feminine article "la dentista".',
          options: [
            { id: 'opt1', text: 'la dentista', subtext: '-ista stays identical', isCorrect: true },
            { id: 'opt2', text: 'la dentisto', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt3', text: 'la dentistora', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'el dentisto', subtext: 'Incorrect', isCorrect: false }
          ]
        },
        {
          id: 'u1-l2-ex3',
          type: 'fill-in-blank',
          prompt: 'Complete the sentence with the appropriate article for "ciudad":',
          sentenceBefore: 'Barcelona es',
          sentenceAfter: 'ciudad más bonita.',
          correctAnswers: ['la', 'una'],
          wordBank: ['la', 'el', 'un', 'una'],
          hint: 'Remember: words ending in -dad are feminine.',
          explanation: 'Words ending in "-dad" are always feminine, so "la ciudad" is correct.'
        },
        {
          id: 'u1-l2-ex4',
          type: 'matching-pairs',
          prompt: 'Match the masculine profession with its correct feminine counterpart:',
          explanation: 'Notice how -or adds -a (profesor → profesora, doctor → doctora) while -ista and -ante remain invariable (artista, estudiante)!',
          pairs: [
            { id: 'p1', left: 'el profesor', right: 'la profesora' },
            { id: 'p2', left: 'el doctor', right: 'la doctora' },
            { id: 'p3', left: 'el artista', right: 'la artista' },
            { id: 'p4', left: 'el estudiante', right: 'la estudiante' }
          ]
        },
        {
          id: 'u1-l2-ex5',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "The university is in the city"',
          targetEnglish: 'The university is in the city',
          correctTokens: ['La', 'universidad', 'está', 'en', 'la', 'ciudad'],
          availableTokens: ['La', 'universidad', 'está', 'en', 'la', 'ciudad', 'El', 'un', 'libro'],
          explanation: 'Both "universidad" and "ciudad" end in -dad, so both use the feminine article "la".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 3: Numbers: 1–10
    // -------------------------------------------------------------
    {
      id: 'u1-l3',
      slug: 'numbers-1-10',
      unitId: 1,
      order: 3,
      title: '3. Numbers: 1–10',
      subtitle: 'Counting 1 to 10 & "Uno" vs "Un / Una" before Nouns',
      estimatedMinutes: 8,
      iconName: 'Hash',
      summary: 'Learn the cardinal numbers from 1 to 10 and understand how the number "uno" changes to "un" or "una" before nouns.',
      theory: [
        {
          id: 'u1-l3-t1',
          title: 'Cardinal Numbers 1 to 10',
          summary: 'Counting in Spanish from uno to diez.',
          ruleHighlights: [
            { label: 'Uno before Masculine', description: '"uno" drops the -o before a masculine noun: "un libro" (one book / a book).', color: 'indigo' },
            { label: 'Uno before Feminine', description: '"uno" becomes "una" before a feminine noun: "una mesa" (one table / a table).', color: 'rose' }
          ],
          content: [
            'Here are the numbers 1 to 10 in Spanish. Practice pronouncing each one.',
            'When counting on its own (1, 2, 3...), you say **uno, dos, tres...**. But when telling how many objects you have, **uno** changes to **un** (before masculine nouns) or **una** (before feminine nouns).'
          ],
          table: {
            headers: ['Number', 'Spanish', 'Pronunciation Guide', 'Audio'],
            rows: [
              ['1', 'uno (un / una)', 'OO-noh', 'uno'],
              ['2', 'dos', 'dohs', 'dos'],
              ['3', 'tres', 'trehs', 'tres'],
              ['4', 'cuatro', 'KWAH-troh', 'cuatro'],
              ['5', 'cinco', 'SEEN-koh', 'cinco'],
              ['6', 'seis', 'sayss', 'seis'],
              ['7', 'siete', 'see-EH-teh', 'siete'],
              ['8', 'ocho', 'OH-choh', 'ocho'],
              ['9', 'nueve', 'NWEH-veh', 'nueve'],
              ['10', 'diez', 'dyehs', 'diez']
            ]
          },
          examples: [
            { spanish: 'un libro', english: 'one book', breakdown: 'uno → un before masculine noun', audio: 'un libro' },
            { spanish: 'una pluma', english: 'one pen', breakdown: 'uno → una before feminine noun', audio: 'una pluma' },
            { spanish: 'tres perros y cuatro gatos', english: 'three dogs and four cats', audio: 'tres perros y cuatro gatos' }
          ],
          proTip: 'Numbers 2 through 10 (dos, tres, cuatro...) never change their form regardless of whether the noun is masculine or feminine: "dos libros" and "dos mesas"!'
        }
      ],
      vocabulary: [
        { id: 'v301', spanish: 'uno', english: 'one', category: 'Numbers', exampleSentence: { spanish: 'Uno, dos, tres.', english: 'One, two, three.' } },
        { id: 'v302', spanish: 'dos', english: 'two', category: 'Numbers', exampleSentence: { spanish: 'Tengo dos gatos.', english: 'I have two cats.' } },
        { id: 'v303', spanish: 'tres', english: 'three', category: 'Numbers', exampleSentence: { spanish: 'Tres libros en la mesa.', english: 'Three books on the table.' } },
        { id: 'v304', spanish: 'cuatro', english: 'four', category: 'Numbers', exampleSentence: { spanish: 'Cuatro sillas.', english: 'Four chairs.' } },
        { id: 'v305', spanish: 'cinco', english: 'five', category: 'Numbers', exampleSentence: { spanish: 'Cinco dedos en la mano.', english: 'Five fingers on the hand.' } },
        { id: 'v306', spanish: 'seis', english: 'six', category: 'Numbers' },
        { id: 'v307', spanish: 'siete', english: 'seven', category: 'Numbers' },
        { id: 'v308', spanish: 'ocho', english: 'eight', category: 'Numbers' },
        { id: 'v309', spanish: 'nueve', english: 'nine', category: 'Numbers' },
        { id: 'v310', spanish: 'diez', english: 'ten', category: 'Numbers' }
      ],
      flashcards: [
        { id: 'f301', front: '1, 2, 3', back: 'uno, dos, tres', category: 'Numbers' },
        { id: 'f302', front: '4, 5, 6', back: 'cuatro, cinco, seis', category: 'Numbers' },
        { id: 'f303', front: '7, 8, 9, 10', back: 'siete, ocho, nueve, diez', category: 'Numbers' },
        { id: 'f304', front: 'one book vs one house', back: 'un libro / una casa', frontSubtext: 'uno changes before nouns', category: 'Numbers' }
      ],
      exercises: [
        {
          id: 'u1-l3-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "one pencil" in Spanish (lápiz is masculine)?',
          audioPrompt: 'un lápiz',
          explanation: '"Uno" becomes "un" before a masculine singular noun: "un lápiz".',
          options: [
            { id: 'opt1', text: 'un lápiz', subtext: 'uno drops -o before masculine', isCorrect: true },
            { id: 'opt2', text: 'uno lápiz', subtext: 'Incorrect before noun', isCorrect: false },
            { id: 'opt3', text: 'una lápiz', subtext: 'Gender error', isCorrect: false },
            { id: 'opt4', text: 'unos lápiz', subtext: 'Plural mismatch', isCorrect: false }
          ]
        },
        {
          id: 'u1-l3-ex2',
          type: 'matching-pairs',
          prompt: 'Match each Spanish number with its numerical digit:',
          explanation: 'Great job matching numbers 1 to 10!',
          pairs: [
            { id: 'p1', left: 'tres', right: '3' },
            { id: 'p2', left: 'cinco', right: '5' },
            { id: 'p3', left: 'ocho', right: '8' },
            { id: 'p4', left: 'diez', right: '10' }
          ]
        },
        {
          id: 'u1-l3-ex3',
          type: 'fill-in-blank',
          prompt: 'Type the Spanish word for the number 7 (siete):',
          sentenceBefore: 'Hay',
          sentenceAfter: 'días en una semana.',
          correctAnswers: ['siete', 'Siete'],
          wordBank: ['siete', 'seis', 'ocho', 'cinco'],
          hint: 'Starts with s-i-e...',
          explanation: '7 is "siete" in Spanish.'
        },
        {
          id: 'u1-l3-ex4',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "Two cats and four dogs"',
          targetEnglish: 'Two cats and four dogs',
          correctTokens: ['Dos', 'gatos', 'y', 'cuatro', 'perros'],
          availableTokens: ['Dos', 'gatos', 'y', 'cuatro', 'perros', 'tres', 'diez', 'una'],
          explanation: '"Dos gatos y cuatro perros" (numbers dos and cuatro do not change gender).'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 4: Plural Forms of Nouns
    // -------------------------------------------------------------
    {
      id: 'u1-l4',
      slug: 'plural-forms-of-nouns',
      unitId: 1,
      order: 4,
      title: '4. Plural Forms of Nouns',
      subtitle: 'Pluralization Rules (-s, -es, -z → -ces) & Mixed Groups',
      estimatedMinutes: 9,
      iconName: 'Copy',
      summary: 'Learn how to transform singular nouns into plurals based on their final letter, and understand how Spanish handles mixed-gender groups.',
      theory: [
        {
          id: 'u1-l4-t1',
          title: 'The 3 Main Pluralization Rules',
          summary: 'Forming plurals in Spanish is logical and follows 3 straightforward sound-based rules.',
          ruleHighlights: [
            { label: 'Rule 1: Vowel + s', description: 'If a noun ends in an unstressed vowel (a, e, i, o, u), add -s.', color: 'indigo' },
            { label: 'Rule 2: Consonant + es', description: 'If a noun ends in a consonant (except -z), add -es.', color: 'emerald' },
            { label: 'Rule 3: -z → -ces', description: 'If a noun ends in -z, change z to c and add -es.', color: 'amber' }
          ],
          content: [
            'Just like English adds "-s" or "-es", Spanish creates plural forms systematically.',
            'Note that when the noun becomes plural, the article also changes: "el" becomes "los", and "la" becomes "las".'
          ],
          table: {
            headers: ['Singular Ending', 'Rule', 'Singular Example', 'Plural Example'],
            rows: [
              ['Vowel (-o, -a, -e)', 'Add -s', 'el libro / la casa', 'los libros / las casas'],
              ['Consonant (-r, -l, -d)', 'Add -es', 'el profesor / el papel', 'los profesores / los papeles'],
              ['Ends in -z', 'Change -z to -ces', 'el lápiz / la voz / el pez', 'los lápices / las voces / los peces']
            ]
          },
          examples: [
            { spanish: 'el gato → los gatos', english: 'the cat → the cats', breakdown: 'Vowel "o" + s', audio: 'los gatos' },
            { spanish: 'la mujer → las mujeres', english: 'the woman → the women', breakdown: 'Consonant "r" + es', audio: 'las mujeres' },
            { spanish: 'el lápiz → los lápices', english: 'the pencil → the pencils', breakdown: 'z becomes ces', audio: 'los lápices' },
            { spanish: 'la luz → las luces', english: 'the light → the lights', breakdown: 'z becomes ces', audio: 'las luces' }
          ],
          proTip: 'Spanish orthography prefers the letter "c" before "e" and "i", which is why "-z" always transforms into "-ces" in plurals!'
        },
        {
          id: 'u1-l4-t2',
          title: 'The Mixed-Gender Group Rule',
          summary: 'How to refer to groups consisting of both males and females.',
          content: [
            'In standard Spanish grammar, when a group includes both males and females, the **masculine plural form** is used for the entire group.',
            'For example, 1 boy (un chico) + 4 girls (cuatro chicas) = 5 children (cinco chicos / cinco niños).'
          ],
          examples: [
            { spanish: 'los padres', english: 'the parents (father + mother)', audio: 'los padres' },
            { spanish: 'los hermanos', english: 'the siblings (brothers + sisters)', audio: 'los hermanos' },
            { spanish: 'los profesores', english: 'the teachers (male and female staff)', audio: 'los profesores' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v401', spanish: 'el lápiz', english: 'the pencil', gender: 'masculine', category: 'Stationery', notes: 'Plural: los lápices', exampleSentence: { spanish: 'Tengo dos lápices.', english: 'I have two pencils.' } },
        { id: 'v402', spanish: 'el papel', english: 'the paper', gender: 'masculine', category: 'Stationery', notes: 'Plural: los papeles', exampleSentence: { spanish: 'Los papeles están en la mesa.', english: 'The papers are on the table.' } },
        { id: 'v403', spanish: 'la mujer', english: 'the woman', gender: 'feminine', category: 'People', notes: 'Plural: las mujeres', exampleSentence: { spanish: 'Las mujeres trabajan.', english: 'The women work.' } },
        { id: 'v404', spanish: 'el hombre', english: 'the man', gender: 'masculine', category: 'People', notes: 'Plural: los hombres', exampleSentence: { spanish: 'Los hombres caminan.', english: 'The men walk.' } },
        { id: 'v405', spanish: 'la voz', english: 'the voice', gender: 'feminine', category: 'Body', notes: 'Plural: las voces', exampleSentence: { spanish: 'Escucho muchas voces.', english: 'I hear many voices.' } },
        { id: 'v406', spanish: 'el pez', english: 'the fish (alive)', gender: 'masculine', category: 'Animals', notes: 'Plural: los peces', exampleSentence: { spanish: 'Los peces nadan.', english: 'The fish swim.' } }
      ],
      flashcards: [
        { id: 'f401', front: 'el lápiz → ?', back: 'los lápices', frontSubtext: 'Ends in -z', backSubtext: 'z changes to ces', category: 'Plurals' },
        { id: 'f402', front: 'el profesor → ?', back: 'los profesores', frontSubtext: 'Ends in consonant -r', backSubtext: 'Add -es', category: 'Plurals' },
        { id: 'f403', front: 'la flor → ?', back: 'las flores', frontSubtext: 'Ends in consonant -r', backSubtext: 'Add -es', category: 'Plurals' },
        { id: 'f404', front: 'el pez → ?', back: 'los peces', frontSubtext: 'Ends in -z', backSubtext: 'z changes to ces', category: 'Plurals' }
      ],
      exercises: [
        {
          id: 'u1-l4-ex1',
          type: 'multiple-choice',
          prompt: 'What is the correct plural form of "el lápiz" (the pencil)?',
          audioPrompt: 'los lápices',
          explanation: 'Words ending in -z change "z" to "c" and add "-es", so "el lápiz" becomes "los lápices".',
          options: [
            { id: 'opt1', text: 'los lápices', subtext: 'z → ces', isCorrect: true },
            { id: 'opt2', text: 'los lápizes', subtext: 'Incorrect spelling', isCorrect: false },
            { id: 'opt3', text: 'las lápizas', subtext: 'Wrong gender & ending', isCorrect: false },
            { id: 'opt4', text: 'los lápizs', subtext: 'Missing -es', isCorrect: false }
          ]
        },
        {
          id: 'u1-l4-ex2',
          type: 'fill-in-blank',
          prompt: 'Type the plural form for "el papel" (the paper):',
          sentenceBefore: 'Aquí están',
          sentenceAfter: '(the papers).',
          correctAnswers: ['los papeles', 'papeles'],
          wordBank: ['los papeles', 'las papels', 'los papelos', 'papeles'],
          hint: '"Papel" ends in a consonant (-l), so add -es.',
          explanation: 'Nouns ending in a consonant take "-es" in the plural, so "el papel" becomes "los papeles".'
        },
        {
          id: 'u1-l4-ex3',
          type: 'matching-pairs',
          prompt: 'Match each singular noun with its correct plural form:',
          explanation: 'Great job! Vowel + s, Consonant + es, and -z becomes -ces.',
          pairs: [
            { id: 'p1', left: 'el libro', right: 'los libros' },
            { id: 'p2', left: 'la ciudad', right: 'las ciudades' },
            { id: 'p3', left: 'la voz', right: 'las voces' },
            { id: 'p4', left: 'el hotel', right: 'los hoteles' }
          ]
        },
        {
          id: 'u1-l4-ex4',
          type: 'error-identification',
          prompt: 'Find and fix the error in the pluralization:',
          incorrectSentence: 'En el acuario hay muchos pezes de colores.',
          errorWord: 'pezes',
          options: ['peces', 'pezas', 'pezos', 'pecis'],
          correctOption: 'peces',
          explanation: 'The word "pez" ends in -z, so its plural must be spelled "peces" with a "c".'
        },
        {
          id: 'u1-l4-ex5',
          type: 'sentence-builder',
          prompt: 'Build the sentence: "The teachers read the books"',
          targetEnglish: 'The teachers read the books',
          correctTokens: ['Los', 'profesores', 'leen', 'los', 'libros'],
          availableTokens: ['Los', 'profesores', 'leen', 'los', 'libros', 'Las', 'ciudades', 'gatos'],
          explanation: '"Profesores" (from profesor + es) and "libros" (from libro + s) are both masculine plural nouns.'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 5: Definite and Indefinite Articles
    // -------------------------------------------------------------
    {
      id: 'u1-l5',
      slug: 'definite-and-indefinite-articles',
      unitId: 1,
      order: 5,
      title: '5. Def. & Indef. Articles',
      subtitle: 'The Complete Matrix: el / la / los / las & un / una / unos / unas',
      estimatedMinutes: 10,
      iconName: 'Grid',
      summary: 'Master all 8 forms of Spanish articles: definite ("the") and indefinite ("a / an / some"), and understand when to use each.',
      theory: [
        {
          id: 'u1-l5-t1',
          title: 'Definite Articles: "The" (el, la, los, las)',
          summary: 'Definite articles refer to specific, known items.',
          ruleHighlights: [
            { label: 'el', description: 'Masculine Singular ("the")', color: 'indigo' },
            { label: 'la', description: 'Feminine Singular ("the")', color: 'rose' },
            { label: 'los', description: 'Masculine Plural ("the")', color: 'indigo' },
            { label: 'las', description: 'Feminine Plural ("the")', color: 'rose' }
          ],
          content: [
            'In English we only have one word for "the". Spanish has 4 distinct forms that must agree in both **gender** (masculine/feminine) and **number** (singular/plural) with the noun.',
            'Spanish also uses definite articles with general concepts (e.g. "El amor es importante" = "Love is important").'
          ],
          table: {
            headers: ['Gender', 'Singular ("the")', 'Plural ("the")'],
            rows: [
              ['Masculine', 'el (el amigo)', 'los (los amigos)'],
              ['Feminine', 'la (la amiga)', 'las (las amigas)']
            ]
          },
          examples: [
            { spanish: 'el amigo', english: 'the male friend', audio: 'el amigo' },
            { spanish: 'los amigos', english: 'the friends (group/males)', audio: 'los amigos' },
            { spanish: 'la amiga', english: 'the female friend', audio: 'la amiga' },
            { spanish: 'las amigas', english: 'the female friends', audio: 'las amigas' }
          ]
        },
        {
          id: 'u1-l5-t2',
          title: 'Indefinite Articles: "A / An / Some" (un, una, unos, unas)',
          summary: 'Indefinite articles refer to unspecified items.',
          ruleHighlights: [
            { label: 'un', description: 'Masculine Singular ("a / an")', color: 'indigo' },
            { label: 'una', description: 'Feminine Singular ("a / an")', color: 'rose' },
            { label: 'unos', description: 'Masculine Plural ("some / a few")', color: 'indigo' },
            { label: 'unas', description: 'Feminine Plural ("some / a few")', color: 'rose' }
          ],
          content: [
            'While "un" and "una" mean "a" or "an", the plural forms "unos" and "unas" translate to "some" or "a few".'
          ],
          table: {
            headers: ['Gender', 'Singular ("a/an")', 'Plural ("some/a few")'],
            rows: [
              ['Masculine', 'un (un carro)', 'unos (unos carros)'],
              ['Feminine', 'una (una manzana)', 'unas (unas manzanas)']
            ]
          },
          examples: [
            { spanish: 'un gato', english: 'a cat', audio: 'un gato' },
            { spanish: 'unos gatos', english: 'some cats', audio: 'unos gatos' },
            { spanish: 'una mesa', english: 'a table', audio: 'una mesa' },
            { spanish: 'unas mesas', english: 'some tables', audio: 'unas mesas' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v501', spanish: 'el carro', english: 'the car', gender: 'masculine', category: 'Transport', exampleSentence: { spanish: 'El carro es rápido.', english: 'The car is fast.' } },
        { id: 'v502', spanish: 'la manzana', english: 'the apple', gender: 'feminine', category: 'Food', exampleSentence: { spanish: 'Como una manzana.', english: 'I eat an apple.' } },
        { id: 'v503', spanish: 'el amigo', english: 'the friend (male)', gender: 'masculine', category: 'People', exampleSentence: { spanish: 'Juan es mi amigo.', english: 'Juan is my friend.' } },
        { id: 'v504', spanish: 'la amiga', english: 'the friend (female)', gender: 'feminine', category: 'People', exampleSentence: { spanish: 'Ana es mi amiga.', english: 'Ana is my friend.' } }
      ],
      flashcards: [
        { id: 'f501', front: 'the (masculine plural)', back: 'los', frontSubtext: 'Definite article', backSubtext: 'e.g. los libros', category: 'Definite' },
        { id: 'f502', front: 'the (feminine plural)', back: 'las', frontSubtext: 'Definite article', backSubtext: 'e.g. las casas', category: 'Definite' },
        { id: 'f503', front: 'some (masculine plural)', back: 'unos', frontSubtext: 'Indefinite article', backSubtext: 'e.g. unos días', category: 'Indefinite' },
        { id: 'f504', front: 'some (feminine plural)', back: 'unas', frontSubtext: 'Indefinite article', backSubtext: 'e.g. unas manzanas', category: 'Indefinite' }
      ],
      exercises: [
        {
          id: 'u1-l5-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "Some apples" (manzana is feminine)',
          audioPrompt: 'unas manzanas',
          explanation: '"Manzanas" is feminine plural, so we use the feminine plural indefinite article "unas".',
          options: [
            { id: 'opt1', text: 'unas manzanas', subtext: 'Feminine plural indefinite', isCorrect: true },
            { id: 'opt2', text: 'unos manzanas', subtext: 'Masculine article error', isCorrect: false },
            { id: 'opt3', text: 'las manzanas', subtext: 'Means "THE apples"', isCorrect: false },
            { id: 'opt4', text: 'una manzanas', subtext: 'Singular article error', isCorrect: false }
          ]
        },
        {
          id: 'u1-l5-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete the sentence with the correct definite article for "problemas":',
          sentenceBefore: 'Nosotros entendemos',
          sentenceAfter: 'problemas de matemáticas.',
          correctAnswers: ['los', 'Los'],
          wordBank: ['los', 'las', 'el', 'unos'],
          hint: 'Remember: "problema" is masculine!',
          explanation: '"Problema" is a masculine noun ending in -ma, so its plural takes "los problemas".'
        },
        {
          id: 'u1-l5-ex3',
          type: 'matching-pairs',
          prompt: 'Match each article to its exact English function:',
          explanation: 'Well done! All 4 definite articles match gender and number in Spanish.',
          pairs: [
            { id: 'p1', left: 'el libro', right: 'the book (masc sing)' },
            { id: 'p2', left: 'los libros', right: 'the books (masc plur)' },
            { id: 'p3', left: 'un libro', right: 'a book (masc sing)' },
            { id: 'p4', left: 'unos libros', right: 'some books (masc plur)' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 6: The Verb Form "Hay"
    // -------------------------------------------------------------
    {
      id: 'u1-l6',
      slug: 'the-verb-form-hay',
      unitId: 1,
      order: 6,
      title: '6. The Verb Form "Hay"',
      subtitle: 'Expressing Existence: "There is" and "There are"',
      estimatedMinutes: 8,
      iconName: 'Eye',
      summary: 'Learn how to use the single, versatile word "hay" to express both singular "there is" and plural "there are", how to ask questions with "¿hay?", and how to negate with "no hay".',
      theory: [
        {
          id: 'u1-l6-t1',
          title: 'The Magic Word: "Hay"',
          summary: 'In Spanish, one simple word expresses both "there is" and "there are".',
          ruleHighlights: [
            { label: 'Singular & Plural', description: '"Hay" works for both singular items and plural items without changing form!', color: 'indigo' },
            { label: 'Negation', description: 'Place "no" before hay: "No hay..." (There is not / There are no...)', color: 'rose' }
          ],
          content: [
            'The word **hay** (pronounced like English "eye") comes from the verb *haber*. It means both **there is** (singular) and **there are** (plural).',
            'Unlike English where you must switch between "there is" and "there are", Spanish **hay** stays completely identical!'
          ],
          table: {
            headers: ['Spanish', 'English Meaning', 'Example'],
            rows: [
              ['Hay un libro.', 'There is one book.', 'Hay un libro en la mesa.'],
              ['Hay cinco libros.', 'There are five books.', 'Hay cinco libros en la mesa.'],
              ['¿Hay un banco cerca?', 'Is there a bank nearby?', '¿Hay un banco aquí?'],
              ['No hay problema.', 'There is no problem.', 'No hay problema.']
            ]
          },
          examples: [
            { spanish: 'Hay un gato en el jardín.', english: 'There is a cat in the garden.', audio: 'Hay un gato en el jardín.' },
            { spanish: 'Hay tres estudiantes aquí.', english: 'There are three students here.', audio: 'Hay tres estudiantes aquí.' },
            { spanish: 'No hay leche.', english: 'There is no milk.', audio: 'No hay leche.' }
          ],
          proTip: '"Hay" is never used with definite articles (el/la/los/las). Say "Hay un libro" (There is a book), NOT "Hay el libro".'
        }
      ],
      vocabulary: [
        { id: 'v601', spanish: 'hay', english: 'there is / there are', category: 'Verbs', exampleSentence: { spanish: 'Hay comida.', english: 'There is food.' } },
        { id: 'v602', spanish: 'no hay', english: 'there is no / there are no', category: 'Verbs', exampleSentence: { spanish: 'No hay problema.', english: 'No problem.' } },
        { id: 'v603', spanish: 'en', english: 'in / on / at', category: 'Prepositions', exampleSentence: { spanish: 'En la mesa.', english: 'On the table.' } },
        { id: 'v604', spanish: 'mucho / muchos', english: 'a lot / many', category: 'Quantity', exampleSentence: { spanish: 'Hay muchos libros.', english: 'There are many books.' } }
      ],
      flashcards: [
        { id: 'f601', front: 'there is / there are', back: 'hay', frontSubtext: 'One word for both singular & plural', category: 'Hay' },
        { id: 'f602', front: 'there is no / there are no', back: 'no hay', frontSubtext: 'e.g. No hay problema', category: 'Hay' },
        { id: 'f603', front: 'Is there a hospital nearby?', back: '¿Hay un hospital cerca?', category: 'Hay' }
      ],
      exercises: [
        {
          id: 'u1-l6-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "There are eight dogs in the park"?',
          audioPrompt: 'Hay ocho perros en el parque.',
          explanation: '"Hay" is used for both singular and plural existence.',
          options: [
            { id: 'opt1', text: 'Hay ocho perros en el parque.', subtext: 'Correct use of hay', isCorrect: true },
            { id: 'opt2', text: 'Son ocho perros en el parque.', subtext: 'Incorrect verb', isCorrect: false },
            { id: 'opt3', text: 'Hayan ocho perros en el parque.', subtext: 'Nonexistent form', isCorrect: false },
            { id: 'opt4', text: 'Está ocho perros en el parque.', subtext: 'Incorrect verb', isCorrect: false }
          ]
        },
        {
          id: 'u1-l6-ex2',
          type: 'fill-in-blank',
          prompt: 'Complete the sentence: "There is no problem"',
          sentenceBefore: '',
          sentenceAfter: 'problema.',
          correctAnswers: ['No hay', 'no hay'],
          wordBank: ['No hay', 'Hay no', 'No es', 'No tiene'],
          hint: 'Negation + hay.',
          explanation: '"No hay problema" is the natural Spanish expression for "there is no problem".'
        },
        {
          id: 'u1-l6-ex3',
          type: 'sentence-builder',
          prompt: 'Build the sentence: "There are four chairs and one table"',
          targetEnglish: 'There are four chairs and one table',
          correctTokens: ['Hay', 'cuatro', 'sillas', 'y', 'una', 'mesa'],
          availableTokens: ['Hay', 'cuatro', 'sillas', 'y', 'una', 'mesa', 'un', 'son', 'dos'],
          explanation: '"Hay cuatro sillas y una mesa." ("Hay" expresses existence for both quantities).'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 7: Subject Pronouns
    // -------------------------------------------------------------
    {
      id: 'u1-l7',
      slug: 'subject-pronouns',
      unitId: 1,
      order: 7,
      title: '7. Subject Pronouns',
      subtitle: 'Yo, Tú, Él/Ella/Usted, Nosotros, Vosotros, Ellos/Ustedes',
      estimatedMinutes: 10,
      iconName: 'Users',
      summary: 'Learn the full spectrum of Spanish personal pronouns, understand the vital difference between informal "tú" and formal "usted", and learn when pronouns are dropped.',
      theory: [
        {
          id: 'u1-l7-t1',
          title: 'The Subject Pronoun Chart',
          summary: 'Pronouns tell us who is performing the action in a sentence.',
          content: [
            'Spanish subject pronouns are divided into 1st person (speaker), 2nd person (listener), and 3rd person (person or thing being talked about).'
          ],
          table: {
            headers: ['Person', 'Singular', 'Plural'],
            rows: [
              ['1st Person ("I / We")', 'yo (I)', 'nosotros / nosotras (we)'],
              ['2nd Person ("You")', 'tú (you informal) / usted (you formal)', 'vosotros / vosotras (you all - Spain) / ustedes (you all)'],
              ['3rd Person ("He / She / They")', 'él (he) / ella (she)', 'ellos (they masc/mixed) / ellas (they fem)']
            ]
          },
          examples: [
            { spanish: 'yo', english: 'I', audio: 'yo' },
            { spanish: 'tú', english: 'you (informal / friendly)', audio: 'tú' },
            { spanish: 'usted', english: 'you (formal / polite)', audio: 'usted' },
            { spanish: 'nosotros', english: 'we (masculine / mixed)', audio: 'nosotros' },
            { spanish: 'ellas', english: 'they (all female)', audio: 'ellas' }
          ]
        },
        {
          id: 'u1-l7-t2',
          title: 'Tú vs. Usted (Informal vs. Formal)',
          summary: 'Choosing the right level of respect.',
          ruleHighlights: [
            { label: 'tú (Informal)', description: 'Used with friends, family, children, classmates, and pets.', color: 'indigo' },
            { label: 'usted (Formal)', description: 'Used with elders, bosses, doctors, strangers, and in professional settings.', color: 'emerald' }
          ],
          content: [
            'In English, "you" is universal. In Spanish, social distance and respect dictate whether you use "tú" or "usted".',
            'Notice that "él" and "tú" carry accent marks! Without the accent, "el" means "the", and "tu" means "your".'
          ],
          examples: [
            { spanish: '¿Cómo estás tú?', english: 'How are you? (to a friend / informal)', audio: '¿Cómo estás tú?' },
            { spanish: '¿Cómo está usted?', english: 'How are you? (to a professor or elder / formal)', audio: '¿Cómo está usted?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v701', spanish: 'yo', english: 'I', category: 'Pronouns' },
        { id: 'v702', spanish: 'tú', english: 'you (informal singular)', category: 'Pronouns', notes: 'Accent required: tú vs tu' },
        { id: 'v703', spanish: 'él', english: 'he', category: 'Pronouns', notes: 'Accent required: él vs el' },
        { id: 'v704', spanish: 'ella', english: 'she', category: 'Pronouns' },
        { id: 'v705', spanish: 'usted', english: 'you (formal singular)', category: 'Pronouns' },
        { id: 'v706', spanish: 'nosotros / nosotras', english: 'we (m/f)', category: 'Pronouns' },
        { id: 'v707', spanish: 'ellos / ellas', english: 'they (m/f)', category: 'Pronouns' },
        { id: 'v708', spanish: 'ustedes', english: 'you all (plural)', category: 'Pronouns' }
      ],
      flashcards: [
        { id: 'f701', front: 'I (subject pronoun)', back: 'yo', category: 'Pronouns' },
        { id: 'f702', front: 'you (formal singular)', back: 'usted (Ud.)', category: 'Pronouns' },
        { id: 'f703', front: 'he (with accent)', back: 'él', category: 'Pronouns' },
        { id: 'f704', front: 'we (all female)', back: 'nosotras', category: 'Pronouns' }
      ],
      exercises: [
        {
          id: 'u1-l7-ex1',
          type: 'multiple-choice',
          prompt: 'Which pronoun would you use when addressing your professor or a doctor with respect?',
          explanation: '"Usted" is the formal 2nd person singular pronoun used to show respect.',
          options: [
            { id: 'opt1', text: 'usted', subtext: 'Formal you', isCorrect: true },
            { id: 'opt2', text: 'tú', subtext: 'Informal you', isCorrect: false },
            { id: 'opt3', text: 'vosotros', subtext: 'Informal plural', isCorrect: false },
            { id: 'opt4', text: 'él', subtext: 'He', isCorrect: false }
          ]
        },
        {
          id: 'u1-l7-ex2',
          type: 'fill-in-blank',
          prompt: 'Fill in the pronoun for "he" (with accent):',
          sentenceBefore: '',
          sentenceAfter: 'es mi amigo.',
          correctAnswers: ['Él', 'él'],
          wordBank: ['Él', 'Ella', 'Yo', 'Tú'],
          hint: 'Remember the accent mark on él.',
          explanation: '"Él" means "he".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 8: Regular Verbs I (-AR Verbs)
    // -------------------------------------------------------------
    {
      id: 'u1-l8',
      slug: 'regular-verbs-1-ar',
      unitId: 1,
      order: 8,
      title: '8. Regular Verbs I (-AR Verbs)',
      subtitle: 'Present Tense of -AR Verbs: hablar, estudiar, trabajar',
      estimatedMinutes: 11,
      iconName: 'MessageSquare',
      summary: 'Learn the most common verb category in Spanish: -ar verbs. Master the endings -o, -as, -a, -amos, -áis, -an.',
      theory: [
        {
          id: 'u1-l8-t1',
          title: 'How to Conjugate -AR Verbs',
          summary: 'Drop the -ar infinitive ending and add the person-specific ending.',
          formula: {
            pattern: 'Stem + [-o, -as, -a, -amos, -áis, -an]',
            example: 'hablar → habl- + o = hablo (I speak)'
          },
          content: [
            'To conjugate regular verbs ending in **-ar** in the present tense, remove the **-ar** ending to find the verb stem, then add the appropriate personal ending.'
          ],
          table: {
            headers: ['Pronoun', 'Ending', 'Hablar (to speak)', 'Estudiar (to study)', 'Trabajar (to work)'],
            rows: [
              ['yo', '-o', 'hablo (I speak)', 'estudio (I study)', 'trabajo (I work)'],
              ['tú', '-as', 'hablas (you speak)', 'estudias', 'trabajas'],
              ['él / ella / usted', '-a', 'habla (he/she speaks)', 'estudia', 'trabaja'],
              ['nosotros/as', '-amos', 'hablamos (we speak)', 'estudiamos', 'trabajamos'],
              ['vosotros/as', '-áis', 'habláis', 'estudiáis', 'trabajáis'],
              ['ellos / ellas / ustedes', '-an', 'hablan (they speak)', 'estudian', 'trabajan']
            ]
          },
          examples: [
            { spanish: 'Yo hablo español.', english: 'I speak Spanish.', audio: 'Yo hablo español.' },
            { spanish: '¿Hablas tú inglés?', english: 'Do you speak English?', audio: '¿Hablas tú inglés?' },
            { spanish: 'Nosotros estudiamos mucho.', english: 'We study a lot.', audio: 'Nosotros estudiamos mucho.' }
          ],
          proTip: 'In Spanish, "hablo" translates to both "I speak" and "I am speaking" (no helper verb needed in standard present tense)!'
        }
      ],
      vocabulary: [
        { id: 'v801', spanish: 'hablar', english: 'to speak / to talk', category: 'Verbs', exampleSentence: { spanish: 'Hablo español.', english: 'I speak Spanish.' } },
        { id: 'v802', spanish: 'estudiar', english: 'to study', category: 'Verbs', exampleSentence: { spanish: 'Estudio gramática.', english: 'I study grammar.' } },
        { id: 'v803', spanish: 'trabajar', english: 'to work', category: 'Verbs', exampleSentence: { spanish: 'Trabajo aquí.', english: 'I work here.' } },
        { id: 'v804', spanish: 'español', english: 'Spanish (language)', category: 'Languages' },
        { id: 'v805', spanish: 'inglés', english: 'English (language)', category: 'Languages' }
      ],
      flashcards: [
        { id: 'f801', front: 'yo (hablar)', back: 'hablo', frontSubtext: '-ar ending for yo', category: '-AR Verbs' },
        { id: 'f802', front: 'tú (hablar)', back: 'hablas', frontSubtext: '-ar ending for tú', category: '-AR Verbs' },
        { id: 'f803', front: 'nosotros (trabajar)', back: 'trabajamos', frontSubtext: '-ar ending for we', category: '-AR Verbs' },
        { id: 'f804', front: 'ellos (estudiar)', back: 'estudian', frontSubtext: '-ar ending for they', category: '-AR Verbs' }
      ],
      exercises: [
        {
          id: 'u1-l8-ex1',
          type: 'multiple-choice',
          prompt: 'What is the correct form of "hablar" for "yo" (I)?',
          audioPrompt: 'hablo',
          explanation: 'The present tense ending for "yo" in -ar verbs is "-o": "hablo".',
          options: [
            { id: 'opt1', text: 'hablo', subtext: 'Yo hablo', isCorrect: true },
            { id: 'opt2', text: 'hablas', subtext: 'Tú hablas', isCorrect: false },
            { id: 'opt3', text: 'habla', subtext: 'Él/Ella habla', isCorrect: false },
            { id: 'opt4', text: 'hablan', subtext: 'Ellos hablan', isCorrect: false }
          ]
        },
        {
          id: 'u1-l8-ex2',
          type: 'fill-in-blank',
          prompt: 'Conjugate "estudiar" for "nosotros":',
          sentenceBefore: 'Nosotros',
          sentenceAfter: 'español todos los días.',
          correctAnswers: ['estudiamos', 'Estudiamos'],
          wordBank: ['estudiamos', 'estudian', 'estudio', 'estudias'],
          hint: '-amos ending.',
          explanation: '"Nosotros estudiamos" is the 1st person plural form.'
        },
        {
          id: 'u1-l8-ex3',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "You (informal) speak Spanish"',
          targetEnglish: 'You speak Spanish',
          correctTokens: ['Tú', 'hablas', 'español'],
          availableTokens: ['Tú', 'hablas', 'español', 'hablo', 'habla', 'inglés'],
          explanation: '"Tú hablas español." (Tú takes -as ending).'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 9: Regular Verbs II (-ER Verbs)
    // -------------------------------------------------------------
    {
      id: 'u1-l9',
      slug: 'regular-verbs-2-er',
      unitId: 1,
      order: 9,
      title: '9. Regular Verbs II (-ER Verbs)',
      subtitle: 'Present Tense of -ER Verbs: comer, beber, aprender, leer',
      estimatedMinutes: 10,
      iconName: 'Coffee',
      summary: 'Learn the second major verb conjugation family: -er verbs. Master the endings -o, -es, -e, -emos, -éis, -en.',
      theory: [
        {
          id: 'u1-l9-t1',
          title: 'How to Conjugate -ER Verbs',
          summary: 'Notice how the dominant vowel switches from "a" to "e".',
          formula: {
            pattern: 'Stem + [-o, -es, -e, -emos, -éis, -en]',
            example: 'comer → com- + o = como (I eat)'
          },
          content: [
            'Regular -er verbs follow a pattern identical to -ar verbs, except that the vowel **e** replaces **a** in the endings (except for the *yo* form, which still ends in **-o**).'
          ],
          table: {
            headers: ['Pronoun', 'Ending', 'Comer (to eat)', 'Beber (to drink)', 'Aprender (to learn)'],
            rows: [
              ['yo', '-o', 'como (I eat)', 'bebo (I drink)', 'aprendo (I learn)'],
              ['tú', '-es', 'comes', 'bebes', 'aprendes'],
              ['él / ella / usted', '-e', 'come', 'bebe', 'aprende'],
              ['nosotros/as', '-emos', 'comemos', 'bebemos', 'aprendemos'],
              ['vosotros/as', '-éis', 'coméis', 'bebéis', 'aprendéis'],
              ['ellos / ellas / ustedes', '-en', 'comen', 'beben', 'aprenden']
            ]
          },
          examples: [
            { spanish: 'Yo como una manzana.', english: 'I eat an apple.', audio: 'Yo como una manzana.' },
            { spanish: '¿Qué bebes tú?', english: 'What are you drinking?', audio: '¿Qué bebes tú?' },
            { spanish: 'Ellos aprenden español.', english: 'They learn Spanish.', audio: 'Ellos aprenden español.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v901', spanish: 'comer', english: 'to eat', category: 'Verbs', exampleSentence: { spanish: 'Como pan.', english: 'I eat bread.' } },
        { id: 'v902', spanish: 'beber', english: 'to drink', category: 'Verbs', exampleSentence: { spanish: 'Bebo agua.', english: 'I drink water.' } },
        { id: 'v903', spanish: 'aprender', english: 'to learn', category: 'Verbs', exampleSentence: { spanish: 'Aprendo mucho.', english: 'I learn a lot.' } },
        { id: 'v904', spanish: 'leer', english: 'to read', category: 'Verbs', exampleSentence: { spanish: 'Leo un libro.', english: 'I read a book.' } }
      ],
      flashcards: [
        { id: 'f901', front: 'yo (comer)', back: 'como', category: '-ER Verbs' },
        { id: 'f902', front: 'tú (beber)', back: 'bebes', category: '-ER Verbs' },
        { id: 'f903', front: 'nosotros (aprender)', back: 'aprendemos', category: '-ER Verbs' },
        { id: 'f904', front: 'ellos (leer)', back: 'leen', category: '-ER Verbs' }
      ],
      exercises: [
        {
          id: 'u1-l9-ex1',
          type: 'multiple-choice',
          prompt: 'Choose the correct form of "comer" for "nosotros":',
          audioPrompt: 'comemos',
          explanation: 'For -er verbs, "nosotros" takes the "-emos" ending: "comemos".',
          options: [
            { id: 'opt1', text: 'comemos', subtext: 'Nosotros comemos', isCorrect: true },
            { id: 'opt2', text: 'comamos', subtext: 'Subjunctive error', isCorrect: false },
            { id: 'opt3', text: 'comen', subtext: 'Ellos comen', isCorrect: false },
            { id: 'opt4', text: 'como', subtext: 'Yo como', isCorrect: false }
          ]
        },
        {
          id: 'u1-l9-ex2',
          type: 'fill-in-blank',
          prompt: 'Conjugate "beber" for "ella":',
          sentenceBefore: 'Ella',
          sentenceAfter: 'agua fría.',
          correctAnswers: ['bebe', 'Bebe'],
          wordBank: ['bebe', 'bebo', 'bebes', 'beben'],
          hint: '3rd person singular ending is -e.',
          explanation: '"Ella bebe" is the correct 3rd person singular conjugation.'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 10: Regular Verbs III (-IR Verbs)
    // -------------------------------------------------------------
    {
      id: 'u1-l10',
      slug: 'regular-verbs-3-ir',
      unitId: 1,
      order: 10,
      title: '10. Regular Verbs III (-IR Verbs)',
      subtitle: 'Present Tense of -IR Verbs: vivir, escribir, abrir',
      estimatedMinutes: 10,
      iconName: 'PenTool',
      summary: 'Master the third verb family: -ir verbs. See how closely they mirror -er verbs, differing only in the nosotros (-imos) and vosotros (-ís) forms.',
      theory: [
        {
          id: 'u1-l10-t1',
          title: 'How to Conjugate -IR Verbs',
          summary: '-IR verbs share almost identical endings with -ER verbs, except in the nosotros/vosotros forms.',
          formula: {
            pattern: 'Stem + [-o, -es, -e, -imos, -ís, -en]',
            example: 'vivir → viv- + o = vivo (I live)'
          },
          content: [
            '-IR verbs are the twins of -ER verbs! The only difference is that the **nosotros** form ends in **-imos** (not -emos) and the **vosotros** form ends in **-ís**.'
          ],
          table: {
            headers: ['Pronoun', 'Ending', 'Vivir (to live)', 'Escribir (to write)', 'Abrir (to open)'],
            rows: [
              ['yo', '-o', 'vivo (I live)', 'escribo (I write)', 'abro (I open)'],
              ['tú', '-es', 'vives', 'escribes', 'abres'],
              ['él / ella / usted', '-e', 'vive', 'escribe', 'abre'],
              ['nosotros/as', '-imos', 'vivimos (we live)', 'escribimos', 'abrimos'],
              ['vosotros/as', '-ís', 'vivís', 'escribís', 'abrís'],
              ['ellos / ellas / ustedes', '-en', 'viven', 'escriben', 'abren']
            ]
          },
          examples: [
            { spanish: 'Yo vivo en Madrid.', english: 'I live in Madrid.', audio: 'Yo vivo en Madrid.' },
            { spanish: 'Ella escribe una carta.', english: 'She writes a letter.', audio: 'Ella escribe una carta.' },
            { spanish: 'Nosotros vivimos en España.', english: 'We live in Spain.', audio: 'Nosotros vivimos en España.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1001', spanish: 'vivir', english: 'to live', category: 'Verbs', exampleSentence: { spanish: 'Vivo aquí.', english: 'I live here.' } },
        { id: 'v1002', spanish: 'escribir', english: 'to write', category: 'Verbs', exampleSentence: { spanish: 'Escribo una nota.', english: 'I write a note.' } },
        { id: 'v1003', spanish: 'abrir', english: 'to open', category: 'Verbs', exampleSentence: { spanish: 'Abro la puerta.', english: 'I open the door.' } }
      ],
      flashcards: [
        { id: 'f1001', front: 'yo (vivir)', back: 'vivo', category: '-IR Verbs' },
        { id: 'f1002', front: 'nosotros (vivir)', back: 'vivimos', frontSubtext: '-imos ending for nosotros in -ir', category: '-IR Verbs' },
        { id: 'f1003', front: 'él (escribir)', back: 'escribe', category: '-IR Verbs' }
      ],
      exercises: [
        {
          id: 'u1-l10-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "We live in Spain" in Spanish?',
          audioPrompt: 'Nosotros vivimos en España.',
          explanation: 'For -ir verbs, the "nosotros" ending is "-imos": "vivimos".',
          options: [
            { id: 'opt1', text: 'Nosotros vivimos en España.', subtext: '-imos ending', isCorrect: true },
            { id: 'opt2', text: 'Nosotros vivemos en España.', subtext: '-emos is for -er verbs only', isCorrect: false },
            { id: 'opt3', text: 'Nosotros vivamos en España.', subtext: 'Subjunctive error', isCorrect: false },
            { id: 'opt4', text: 'Nosotros viven en España.', subtext: 'They form', isCorrect: false }
          ]
        },
        {
          id: 'u1-l10-ex2',
          type: 'fill-in-blank',
          prompt: 'Conjugate "escribir" for "yo":',
          sentenceBefore: 'Yo',
          sentenceAfter: 'un libro en español.',
          correctAnswers: ['escribo', 'Escribo'],
          wordBank: ['escribo', 'escribes', 'escribe', 'escribimos'],
          hint: '1st person singular ends in -o.',
          explanation: '"Yo escribo" is the 1st person singular form.'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 11: Adjectives I
    // -------------------------------------------------------------
    {
      id: 'u1-l11',
      slug: 'adjectives-1-agreement-placement',
      unitId: 1,
      order: 11,
      title: '11. Adjectives I',
      subtitle: 'Gender & Number Agreement and Word Placement',
      estimatedMinutes: 10,
      iconName: 'Tag',
      summary: 'Learn how Spanish descriptive adjectives must agree with nouns in both gender and number, and why adjectives usually follow the nouns they describe.',
      theory: [
        {
          id: 'u1-l11-t1',
          title: 'The Two Rules of Spanish Adjectives',
          summary: '1. Agreement in gender & number; 2. Placement after the noun.',
          ruleHighlights: [
            { label: 'Rule 1: Agreement', description: 'Adjectives ending in -o have 4 forms: -o (m.sg), -a (f.sg), -os (m.pl), -as (f.pl).', color: 'indigo' },
            { label: 'Rule 2: Placement', description: 'Descriptive adjectives usually come AFTER the noun (el libro rojo, NOT el rojo libro).', color: 'emerald' }
          ],
          content: [
            'In English, you say "the red car" (adjective before noun). In Spanish, you say **el carro rojo** (noun first, descriptive adjective second).',
            'Adjectives must agree in both gender (masculine/feminine) and number (singular/plural) with the noun they describe.'
          ],
          table: {
            headers: ['Form', 'Example (alto = tall)', 'Noun Match'],
            rows: [
              ['Masc Singular', 'el chico alto', 'the tall boy'],
              ['Fem Singular', 'la chica alta', 'the tall girl'],
              ['Masc Plural', 'los chicos altos', 'the tall boys'],
              ['Fem Plural', 'las chicas altas', 'the tall girls']
            ]
          },
          examples: [
            { spanish: 'el libro rojo', english: 'the red book', breakdown: 'Masc Sing', audio: 'el libro rojo' },
            { spanish: 'las casas blancas', english: 'the white houses', breakdown: 'Fem Plur', audio: 'las casas blancas' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1101', spanish: 'alto / alta', english: 'tall / high', category: 'Adjectives' },
        { id: 'v1102', spanish: 'bajo / baja', english: 'short / low', category: 'Adjectives' },
        { id: 'v1103', spanish: 'rojo / roja', english: 'red', category: 'Colors' },
        { id: 'v1104', spanish: 'blanco / blanca', english: 'white', category: 'Colors' },
        { id: 'v1105', spanish: 'negro / negra', english: 'black', category: 'Colors' }
      ],
      flashcards: [
        { id: 'f1101', front: 'the red book', back: 'el libro rojo', frontSubtext: 'Adjective follows noun', category: 'Adjectives' },
        { id: 'f1102', front: 'the tall girls', back: 'las chicas altas', frontSubtext: 'Fem plural agreement', category: 'Adjectives' }
      ],
      exercises: [
        {
          id: 'u1-l11-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "The white houses" (casa is feminine)',
          audioPrompt: 'las casas blancas',
          explanation: '"Casas" is feminine plural, so the adjective must agree: "las casas blancas".',
          options: [
            { id: 'opt1', text: 'las casas blancas', subtext: 'Fem Plur agreement', isCorrect: true },
            { id: 'opt2', text: 'las casas blancos', subtext: 'Gender mismatch', isCorrect: false },
            { id: 'opt3', text: 'las blancas casas', subtext: 'Unnatural word order', isCorrect: false },
            { id: 'opt4', text: 'los casas blancos', subtext: 'Article error', isCorrect: false }
          ]
        },
        {
          id: 'u1-l11-ex2',
          type: 'sentence-builder',
          prompt: 'Translate into Spanish: "The tall boy reads a book"',
          targetEnglish: 'The tall boy reads a book',
          correctTokens: ['El', 'chico', 'alto', 'lee', 'un', 'libro'],
          availableTokens: ['El', 'chico', 'alto', 'lee', 'un', 'libro', 'alta', 'la', 'rojo'],
          explanation: '"El chico alto lee un libro." (Adjective "alto" follows "chico").'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 12: Adjectives II
    // -------------------------------------------------------------
    {
      id: 'u1-l12',
      slug: 'adjectives-2-invariable-nationality',
      unitId: 1,
      order: 12,
      title: '12. Adjectives II',
      subtitle: 'Invariable Adjectives (-e, consonant) & Nationalities',
      estimatedMinutes: 9,
      iconName: 'Sliders',
      summary: 'Learn adjectives that do not change for gender (like "grande", "azul", "inteligente") and how adjectives of nationality form their feminine versions.',
      theory: [
        {
          id: 'u1-l12-t1',
          title: 'Gender-Invariable Adjectives',
          summary: 'Adjectives ending in -e or a consonant stay the same for both masculine and feminine nouns.',
          content: [
            'Adjectives that end in **-e** (e.g. *inteligente*, *grande*, *verde*) or in a **consonant** (e.g. *azul*, *fácil*, *joven*) have only **one** form for both masculine and feminine singular nouns!',
            'To make them plural: add **-s** to vowel endings (*inteligentes*, *grandes*) and **-es** to consonant endings (*azules*, *fáciles*).'
          ],
          table: {
            headers: ['Adjective', 'Masculine Match', 'Feminine Match', 'Plural Form'],
            rows: [
              ['grande (big)', 'un libro grande', 'una casa grande', 'grandes'],
              ['inteligente (smart)', 'un chico inteligente', 'una chica inteligente', 'inteligentes'],
              ['azul (blue)', 'un carro azul', 'una mesa azul', 'azules'],
              ['fácil (easy)', 'un examen fácil', 'una lección fácil', 'fáciles']
            ]
          },
          examples: [
            { spanish: 'El estudiante inteligente / La estudiante inteligente', english: 'The smart male student / The smart female student', audio: 'El estudiante inteligente' },
            { spanish: 'Los carros azules', english: 'The blue cars', audio: 'Los carros azules' }
          ]
        },
        {
          id: 'u1-l12-t2',
          title: 'Adjectives of Nationality',
          summary: 'Nationalities ending in a consonant add -a for feminine.',
          content: [
            'Unlike standard consonant adjectives, adjectives of nationality ending in a consonant **add -a** to form the feminine: *español → española*, *alemán → alemana*, *inglés → inglesa*.'
          ],
          examples: [
            { spanish: 'El libro español y la música española', english: 'The Spanish book and the Spanish music', audio: 'la música española' },
            { spanish: 'Un profesor alemán y una profesora alemana', english: 'A German male teacher and a German female teacher', audio: 'una profesora alemana' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v1201', spanish: 'grande', english: 'big / large', category: 'Adjectives' },
        { id: 'v1202', spanish: 'inteligente', english: 'intelligent / smart', category: 'Adjectives' },
        { id: 'v1203', spanish: 'azul', english: 'blue', category: 'Colors' },
        { id: 'v1204', spanish: 'verde', english: 'green', category: 'Colors' },
        { id: 'v1205', spanish: 'fácil', english: 'easy', category: 'Adjectives' },
        { id: 'v1206', spanish: 'difícil', english: 'difficult / hard', category: 'Adjectives' }
      ],
      flashcards: [
        { id: 'f1201', front: 'the smart girl', back: 'la chica inteligente', frontSubtext: 'inteligente does not change to inteligenta', category: 'Adjectives' },
        { id: 'f1202', front: 'the blue cars', back: 'los carros azules', frontSubtext: 'consonant + es plural', category: 'Adjectives' }
      ],
      exercises: [
        {
          id: 'u1-l12-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "The smart women" in Spanish?',
          audioPrompt: 'las mujeres inteligentes',
          explanation: '"Inteligente" ends in -e, so its plural form adds "-s": "inteligentes".',
          options: [
            { id: 'opt1', text: 'las mujeres inteligentes', subtext: 'Correct plural', isCorrect: true },
            { id: 'opt2', text: 'las mujeres inteligentas', subtext: 'Incorrect form', isCorrect: false },
            { id: 'opt3', text: 'las inteligentes mujeres', subtext: 'Unnatural order', isCorrect: false },
            { id: 'opt4', text: 'los mujeres inteligentes', subtext: 'Article error', isCorrect: false }
          ]
        },
        {
          id: 'u1-l12-ex2',
          type: 'fill-in-blank',
          prompt: 'Type the plural form of "azul" for "los libros":',
          sentenceBefore: 'Tengo dos libros',
          sentenceAfter: '(blue).',
          correctAnswers: ['azules', 'Azules'],
          wordBank: ['azules', 'azuls', 'azulas', 'azulos'],
          hint: 'Consonant ending adds -es.',
          explanation: '"Azul" ends in a consonant, so add "-es": "azules".'
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 13: Days of the Week
    // -------------------------------------------------------------
    {
      id: 'u1-l13',
      slug: 'days-of-the-week',
      unitId: 1,
      order: 13,
      title: '13. Days of the Week',
      subtitle: 'Lunes to Domingo, Non-Capitalization & "On Monday" (El Lunes)',
      estimatedMinutes: 8,
      iconName: 'Calendar',
      summary: 'Learn all 7 days of the week in Spanish. Understand why they are not capitalized and how Spanish uses "el" instead of "on".',
      theory: [
        {
          id: 'u1-l13-t1',
          title: 'The 7 Days of the Week',
          summary: 'All days of the week in Spanish are grammatically masculine.',
          ruleHighlights: [
            { label: 'No Capital Letters', description: 'Days of the week are not capitalized in Spanish (unless at the start of a sentence).', color: 'amber' },
            { label: '"On" = el / los', description: 'To say "on Monday", use "el lunes". To say "on Mondays", use "los lunes". Never say "en lunes"!', color: 'indigo' }
          ],
          content: [
            'In Spanish, the week starts on **lunes** (Monday). All seven days are masculine (*el lunes, el martes...*).',
            'Notice that days ending in **-s** (lunes to viernes) do not change in the plural; only the article changes (*el lunes → los lunes*)!'
          ],
          table: {
            headers: ['Spanish', 'English', 'Plural ("On [Days]")', 'Audio'],
            rows: [
              ['el lunes', 'Monday', 'los lunes (on Mondays)', 'lunes'],
              ['el martes', 'Tuesday', 'los martes (on Tuesdays)', 'martes'],
              ['el miércoles', 'Wednesday', 'los miércoles (on Wednesdays)', 'miércoles'],
              ['el jueves', 'Thursday', 'los jueves (on Thursdays)', 'jueves'],
              ['el viernes', 'Friday', 'los viernes (on Fridays)', 'viernes'],
              ['el sábado', 'Saturday', 'los sábados (on Saturdays)', 'sábado'],
              ['el domingo', 'Sunday', 'los domingos (on Sundays)', 'domingo']
            ]
          },
          examples: [
            { spanish: 'Hoy es lunes.', english: 'Today is Monday.', audio: 'Hoy es lunes.' },
            { spanish: 'Trabajo los lunes y los miércoles.', english: 'I work on Mondays and Wednesdays.', audio: 'Trabajo los lunes y los miércoles.' },
            { spanish: 'El examen es el viernes.', english: 'The exam is on Friday.', audio: 'El examen es el viernes.' }
          ],
          watchOut: 'Never say "en lunes" for "on Monday"! In Spanish, "on Monday" is always **el lunes**.'
        }
      ],
      vocabulary: [
        { id: 'v1301', spanish: 'el lunes', english: 'Monday', category: 'Days of the Week' },
        { id: 'v1302', spanish: 'el martes', english: 'Tuesday', category: 'Days of the Week' },
        { id: 'v1303', spanish: 'el miércoles', english: 'Wednesday', category: 'Days of the Week' },
        { id: 'v1304', spanish: 'el jueves', english: 'Thursday', category: 'Days of the Week' },
        { id: 'v1305', spanish: 'el viernes', english: 'Friday', category: 'Days of the Week' },
        { id: 'v1306', spanish: 'el sábado', english: 'Saturday', category: 'Days of the Week' },
        { id: 'v1307', spanish: 'el domingo', english: 'Sunday', category: 'Days of the Week' },
        { id: 'v1308', spanish: 'hoy', english: 'today', category: 'Time' },
        { id: 'v1309', spanish: 'mañana', english: 'tomorrow', category: 'Time' }
      ],
      flashcards: [
        { id: 'f1301', front: 'Monday, Tuesday, Wednesday', back: 'lunes, martes, miércoles', category: 'Days' },
        { id: 'f1302', front: 'Thursday, Friday', back: 'jueves, viernes', category: 'Days' },
        { id: 'f1303', front: 'Saturday, Sunday', back: 'sábado, domingo', category: 'Days' },
        { id: 'f1304', front: 'on Mondays', back: 'los lunes', frontSubtext: 'Use los for recurring days', category: 'Days' }
      ],
      exercises: [
        {
          id: 'u1-l13-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "on Friday" in natural Spanish?',
          audioPrompt: 'el viernes',
          explanation: 'In Spanish, "on [day]" is expressed using the definite article "el [day]": "el viernes".',
          options: [
            { id: 'opt1', text: 'el viernes', subtext: 'Natural Spanish for "on Friday"', isCorrect: true },
            { id: 'opt2', text: 'en viernes', subtext: 'Literal English translation trap', isCorrect: false },
            { id: 'opt3', text: 'sobre viernes', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'a viernes', subtext: 'Incorrect', isCorrect: false }
          ]
        },
        {
          id: 'u1-l13-ex2',
          type: 'matching-pairs',
          prompt: 'Match each Spanish day with its English equivalent:',
          explanation: 'Great job matching the days of the week!',
          pairs: [
            { id: 'p1', left: 'lunes', right: 'Monday' },
            { id: 'p2', left: 'miércoles', right: 'Wednesday' },
            { id: 'p3', left: 'viernes', right: 'Friday' },
            { id: 'p4', left: 'domingo', right: 'Sunday' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 14: Numbers 11–30
    // -------------------------------------------------------------
    {
      id: 'u1-l14',
      slug: 'numbers-11-30',
      unitId: 1,
      order: 14,
      title: '14. Numbers: 11–30',
      subtitle: 'From Once to Treinta & The "Veinti-" Single Word Rule',
      estimatedMinutes: 9,
      iconName: 'Hash',
      summary: 'Learn numbers 11 through 30 in Spanish. Understand the unique 11-15 words (once to quince), the 16-19 pattern (dieciséis...), and the single-word 20s (veintiuno...).',
      theory: [
        {
          id: 'u1-l14-t1',
          title: 'Numbers 11 to 30 Patterns',
          summary: '11–15 have unique endings (-ce); 16–19 begin with dieci-; 21–29 are written as one single word (veinti-).',
          content: [
            '• **11 to 15**: once, doce, trece, catorce, quince (all end in **-ce**).',
            '• **16 to 19**: dieciséis, diecisiete, dieciocho, diecinueve (contracted from *diez y seis*).',
            '• **20 to 29**: veinte, veintiuno, veintidós, veintitrés, veinticuatro, veinticinco, veintiséis, veintisiete, veintiocho, veintinueve (written as **one single word**!).',
            '• **30**: treinta.'
          ],
          table: {
            headers: ['Number', 'Spanish', 'Number', 'Spanish'],
            rows: [
              ['11', 'once', '21', 'veintiuno (veintiún)'],
              ['12', 'doce', '22', 'veintidós'],
              ['13', 'trece', '23', 'veintitrés'],
              ['14', 'catorce', '24', 'veinticuatro'],
              ['15', 'quince', '25', 'veinticinco'],
              ['16', 'dieciséis', '26', 'veintiséis'],
              ['17', 'diecisiete', '27', 'veintisiete'],
              ['18', 'dieciocho', '28', 'veintiocho'],
              ['19', 'diecinueve', '29', 'veintinueve'],
              ['20', 'veinte', '30', 'treinta']
            ]
          },
          examples: [
            { spanish: 'quince días', english: 'fifteen days', audio: 'quince días' },
            { spanish: 'veintidós estudiantes', english: 'twenty-two students', audio: 'veintidós estudiantes' },
            { spanish: 'treinta libros', english: 'thirty books', audio: 'treinta libros' }
          ],
          proTip: 'Numbers 21 to 29 are written as a single word (veintiuno), while numbers from 31 upwards use three separate words (treinta y uno)!'
        }
      ],
      vocabulary: [
        { id: 'v1401', spanish: 'once', english: 'eleven', category: 'Numbers' },
        { id: 'v1402', spanish: 'doce', english: 'twelve', category: 'Numbers' },
        { id: 'v1403', spanish: 'trece', english: 'thirteen', category: 'Numbers' },
        { id: 'v1404', spanish: 'catorce', english: 'fourteen', category: 'Numbers' },
        { id: 'v1405', spanish: 'quince', english: 'fifteen', category: 'Numbers' },
        { id: 'v1406', spanish: 'veinte', english: 'twenty', category: 'Numbers' },
        { id: 'v1407', spanish: 'veinticinco', english: 'twenty-five', category: 'Numbers' },
        { id: 'v1408', spanish: 'treinta', english: 'thirty', category: 'Numbers' }
      ],
      flashcards: [
        { id: 'f1401', front: '11, 12, 13, 14, 15', back: 'once, doce, trece, catorce, quince', category: 'Numbers' },
        { id: 'f1402', front: '16, 17, 18, 19, 20', back: 'dieciséis, diecisiete, dieciocho, diecinueve, veinte', category: 'Numbers' },
        { id: 'f1403', front: '25, 30', back: 'veinticinco, treinta', category: 'Numbers' }
      ],
      exercises: [
        {
          id: 'u1-l14-ex1',
          type: 'multiple-choice',
          prompt: 'What is the Spanish word for the number 15?',
          audioPrompt: 'quince',
          explanation: '15 in Spanish is "quince".',
          options: [
            { id: 'opt1', text: 'quince', subtext: '15', isCorrect: true },
            { id: 'opt2', text: 'catorce', subtext: '14', isCorrect: false },
            { id: 'opt3', text: 'trece', subtext: '13', isCorrect: false },
            { id: 'opt4', text: 'diez y cinco', subtext: 'Incorrect', isCorrect: false }
          ]
        },
        {
          id: 'u1-l14-ex2',
          type: 'matching-pairs',
          prompt: 'Match each Spanish number word with its number:',
          explanation: 'Great job matching numbers 11 to 30!',
          pairs: [
            { id: 'p1', left: 'once', right: '11' },
            { id: 'p2', left: 'quince', right: '15' },
            { id: 'p3', left: 'veinte', right: '20' },
            { id: 'p4', left: 'treinta', right: '30' }
          ]
        }
      ]
    }
  ],

  // -------------------------------------------------------------
  // UNIT 1 COMPREHENSIVE MASTERY EXAM (All 14 Lessons)
  // -------------------------------------------------------------
  masteryExam: {
    id: 'u1-exam',
    title: 'Unit 1 Comprehensive Mastery Exam',
    description: '14 multi-format questions testing all topics from Unit 1: Gender, Numbers 1–30, Plurals, Articles, Hay, Subject Pronouns, -AR/-ER/-IR Verbs, Adjectives, and Days of the Week.',
    passingScore: 80,
    exercises: [
      {
        id: 'u1-ex-1',
        type: 'multiple-choice',
        prompt: 'Which article correctly precedes "día" (day)?',
        explanation: '"Día" is a classic exception: it ends in -a but is grammatically masculine (el día).',
        options: [
          { id: 'e1', text: 'el día', subtext: 'Masculine exception', isCorrect: true },
          { id: 'e2', text: 'la día', subtext: 'Incorrect', isCorrect: false },
          { id: 'e3', text: 'una día', subtext: 'Incorrect', isCorrect: false },
          { id: 'e4', text: 'los día', subtext: 'Singular mismatch', isCorrect: false }
        ]
      },
      {
        id: 'u1-ex-2',
        type: 'multiple-choice',
        prompt: 'What is the correct plural form of "la ciudad" (the city)?',
        explanation: '"Ciudad" ends in a consonant (-d), so it adds -es, and "la" becomes "las": las ciudades.',
        options: [
          { id: 'e1', text: 'las ciudades', subtext: 'Correct plural', isCorrect: true },
          { id: 'e2', text: 'los ciudades', subtext: 'Gender error', isCorrect: false },
          { id: 'e3', text: 'las ciudads', subtext: 'Missing -e-', isCorrect: false },
          { id: 'e4', text: 'las ciudadeces', subtext: 'Incorrect', isCorrect: false }
        ]
      },
      {
        id: 'u1-ex-3',
        type: 'fill-in-blank',
        prompt: 'Fill in the plural form of "el lápiz":',
        sentenceBefore: 'En el estuche hay tres',
        sentenceAfter: '(pencils).',
        correctAnswers: ['lápices', 'lapices'],
        wordBank: ['lápices', 'lápizes', 'lapizs', 'lapicos'],
        hint: '-z changes to -ces in the plural.',
        explanation: 'Words ending in -z change to -ces in the plural: el lápiz → los lápices.'
      },
      {
        id: 'u1-ex-4',
        type: 'multiple-choice',
        prompt: 'How do you say "There are ten books on the table"?',
        explanation: '"Hay" expresses existence for both singular and plural: "Hay diez libros en la mesa".',
        options: [
          { id: 'e1', text: 'Hay diez libros en la mesa.', subtext: 'Correct use of hay', isCorrect: true },
          { id: 'e2', text: 'Son diez libros en la mesa.', subtext: 'Wrong verb', isCorrect: false },
          { id: 'e3', text: 'Están diez libros en la mesa.', subtext: 'Wrong verb', isCorrect: false },
          { id: 'e4', text: 'Hayan diez libros en la mesa.', subtext: 'Incorrect form', isCorrect: false }
        ]
      },
      {
        id: 'u1-ex-5',
        type: 'fill-in-blank',
        prompt: 'Conjugate "hablar" for "yo":',
        sentenceBefore: 'Yo',
        sentenceAfter: 'español y inglés.',
        correctAnswers: ['hablo', 'Hablo'],
        wordBank: ['hablo', 'hablas', 'habla', 'hablamos'],
        hint: '-o ending for yo in -ar verbs.',
        explanation: '"Yo hablo" is the 1st person singular form of hablar.'
      },
      {
        id: 'u1-ex-6',
        type: 'multiple-choice',
        prompt: 'Conjugate "comer" for "nosotros":',
        explanation: 'For -er verbs, the "nosotros" form takes "-emos": "comemos".',
        options: [
          { id: 'e1', text: 'comemos', subtext: 'Nosotros comemos', isCorrect: true },
          { id: 'e2', text: 'comamos', subtext: 'Subjunctive error', isCorrect: false },
          { id: 'e3', text: 'comen', subtext: 'Ellos comen', isCorrect: false },
          { id: 'e4', text: 'como', subtext: 'Yo como', isCorrect: false }
        ]
      },
      {
        id: 'u1-ex-7',
        type: 'fill-in-blank',
        prompt: 'Conjugate "vivir" for "nosotros":',
        sentenceBefore: 'Nosotros',
        sentenceAfter: 'en una casa grande.',
        correctAnswers: ['vivimos', 'Vivimos'],
        wordBank: ['vivimos', 'vivemos', 'viven', 'vivo'],
        hint: '-imos ending for nosotros in -ir verbs.',
        explanation: 'For -ir verbs, the "nosotros" form takes "-imos": "vivimos".'
      },
      {
        id: 'u1-ex-8',
        type: 'sentence-builder',
        prompt: 'Translate into Spanish: "The tall boy and the smart girl"',
        targetEnglish: 'The tall boy and the smart girl',
        correctTokens: ['El', 'chico', 'alto', 'y', 'la', 'chica', 'inteligente'],
        availableTokens: ['El', 'chico', 'alto', 'y', 'la', 'chica', 'inteligente', 'alta', 'los', 'grande'],
        explanation: '"El chico alto y la chica inteligente." (Adjectives agree and follow the nouns).'
      },
      {
        id: 'u1-ex-9',
        type: 'multiple-choice',
        prompt: 'How do you say "on Mondays" in Spanish?',
        explanation: 'In Spanish, "on [days]" is expressed with "los [days]": "los lunes".',
        options: [
          { id: 'e1', text: 'los lunes', subtext: 'Correct for "on Mondays"', isCorrect: true },
          { id: 'e2', text: 'en lunes', subtext: 'Incorrect', isCorrect: false },
          { id: 'e3', text: 'a los lunes', subtext: 'Incorrect', isCorrect: false },
          { id: 'e4', text: 'sobre los lunes', subtext: 'Incorrect', isCorrect: false }
        ]
      },
      {
        id: 'u1-ex-10',
        type: 'matching-pairs',
        prompt: 'Match each number with its Spanish name:',
        explanation: 'Great job matching numbers 1 to 30!',
        pairs: [
          { id: 'mp1', left: 'cinco', right: '5' },
          { id: 'mp2', left: 'doce', right: '12' },
          { id: 'mp3', left: 'veinticinco', right: '25' },
          { id: 'mp4', left: 'treinta', right: '30' }
        ]
      }
    ]
  }
};
