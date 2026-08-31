import type { Unit } from './types';

export const unit4: Unit = {
  id: 4,
  title: 'Unit 4: Object Pronouns, Gustar & Present Progressive',
  subtitle: 'Lessons 40–50: Direct & Indirect Objects, Double Pronouns, Gustar & Gerunds',
  description: 'Master the crown jewel of Spanish fluency: Direct Object Pronouns (lo/la/los/las), Indirect Object Pronouns (le/les), Double Object Pronouns (se lo), verbs like Gustar (me gusta), the Present Progressive, and "yo-go" irregular 1st persons.',
  iconName: 'ArrowRightLeft',
  colorTheme: 'teal',
  isAvailable: true,
  lessons: [
    // -------------------------------------------------------------
    // LESSON 40: Pronouns as Objects of Prepositions
    // -------------------------------------------------------------
    {
      id: 'u4-l40',
      slug: 'prepositional-pronouns',
      unitId: 4,
      order: 40,
      title: '40. Prepositional Pronouns',
      subtitle: 'Mí, Ti, Él, Ella, Nosotros & The "Conmigo / Contigo" Rule',
      estimatedMinutes: 9,
      iconName: 'User',
      summary: 'Learn pronouns used after prepositions (para mí, de ti, con él) and the special contractions with "con" (conmigo, contigo).',
      theory: [
        {
          id: 'u4-l40-t1',
          title: 'The Prepositional Pronouns Chart',
          summary: 'Notice that only "mí" and "ti" change from the subject pronouns.',
          table: {
            headers: ['English', 'Preposition + Pronoun', 'Special "Con" Form'],
            rows: [
              ['for me', 'para mí (accent required)', 'conmigo (with me)'],
              ['for you (informal)', 'para ti (no accent)', 'contigo (with you)'],
              ['for him / her / you formal', 'para él / ella / usted', 'con él / con ella / con usted'],
              ['for us', 'para nosotros / nosotras', 'con nosotros / con nosotras'],
              ['for them / you all', 'para ellos / ellas / ustedes', 'con ellos / con ellas / con ustedes']
            ]
          },
          examples: [
            { spanish: 'Este regalo es para mí.', english: 'This gift is for me.', audio: 'Este regalo es para mí.' },
            { spanish: '¿Quieres venir conmigo?', english: 'Do you want to come with me?', audio: '¿Quieres venir conmigo?' },
            { spanish: 'Voy al cine contigo.', english: 'I am going to the movies with you.', audio: 'Voy al cine contigo.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4001', spanish: 'para mí', english: 'for me', category: 'Prepositional Pronouns' },
        { id: 'v4002', spanish: 'para ti', english: 'for you (informal)', category: 'Prepositional Pronouns' },
        { id: 'v4003', spanish: 'conmigo', english: 'with me', category: 'Prepositional Pronouns' },
        { id: 'v4004', spanish: 'contigo', english: 'with you', category: 'Prepositional Pronouns' }
      ],
      flashcards: [
        { id: 'f4001', front: 'with me', back: 'conmigo', category: 'Prepositional Pronouns' },
        { id: 'f4002', front: 'with you (informal)', back: 'contigo', category: 'Prepositional Pronouns' }
      ],
      exercises: [
        {
          id: 'u4-l40-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "Do you want to dance with me?" in Spanish?',
          explanation: '"¿Quieres bailar conmigo?" (con + mí blends into conmigo).',
          options: [
            { id: 'opt1', text: '¿Quieres bailar conmigo?', subtext: 'Correct with me form', isCorrect: true },
            { id: 'opt2', text: '¿Quieres bailar con mí?', subtext: 'Forbidden form', isCorrect: false },
            { id: 'opt3', text: '¿Quieres bailar con yo?', subtext: 'Forbidden form', isCorrect: false },
            { id: 'opt4', text: '¿Quieres bailar contigo?', subtext: 'Contigo means with you', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 41: Direct Object Pronouns I
    // -------------------------------------------------------------
    {
      id: 'u4-l41',
      slug: 'direct-object-pronouns-1',
      unitId: 4,
      order: 41,
      title: '41. Direct Object Pronouns I',
      subtitle: 'Singular Pronouns: me, te, lo, la ("it / him / her / you")',
      estimatedMinutes: 10,
      iconName: 'CornerDownRight',
      summary: 'Direct objects directly receive the action of the verb (answering "what?" or "whom?"). Learn the singular forms and where to position them directly before conjugated verbs.',
      theory: [
        {
          id: 'u4-l41-t1',
          title: 'Singular Direct Object Pronouns',
          summary: 'Direct object pronouns go BEFORE the conjugated verb.',
          table: {
            headers: ['Pronoun', 'English Meaning', 'Example Sentence'],
            rows: [
              ['me', 'me', 'Él me llama (He calls me)'],
              ['te', 'you (informal)', 'Yo te veo (I see you)'],
              ['lo', 'him / it (masculine) / you formal (m)', 'Yo lo compro (I buy it - el libro)'],
              ['la', 'her / it (feminine) / you formal (f)', 'Yo la compro (I buy it - la casa)']
            ]
          },
          content: [
            'In English you say "I buy **it**" (pronoun after verb). In Spanish, you say "Yo **lo** compro" (pronoun **before** the conjugated verb).'
          ],
          examples: [
            { spanish: '¿Tienes el libro? — Sí, lo tengo.', english: 'Do you have the book? — Yes, I have it.', audio: 'Sí, lo tengo.' },
            { spanish: '¿Ves la manzana? — Sí, la veo.', english: 'Do you see the apple? — Yes, I see it.', audio: 'Sí, la veo.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4101', spanish: 'lo', english: 'it (m) / him', category: 'Direct Object' },
        { id: 'v4102', spanish: 'la', english: 'it (f) / her', category: 'Direct Object' },
        { id: 'v4103', spanish: 'comprar', english: 'to buy', category: 'Verbs' }
      ],
      flashcards: [
        { id: 'f4101', front: 'I have it (masculine object)', back: 'Lo tengo', category: 'Direct Object' },
        { id: 'f4102', front: 'I see her', back: 'La veo', category: 'Direct Object' }
      ],
      exercises: [
        {
          id: 'u4-l41-ex1',
          type: 'multiple-choice',
          prompt: 'Replace the noun with a pronoun: "Compro la casa" (I buy the house)',
          explanation: '"La casa" is feminine singular, so replace with "la": "La compro".',
          options: [
            { id: 'opt1', text: 'La compro.', subtext: 'Correct DOP placement', isCorrect: true },
            { id: 'opt2', text: 'Compro la.', subtext: 'Cannot place after conjugated verb', isCorrect: false },
            { id: 'opt3', text: 'Lo compro.', subtext: 'Gender mismatch', isCorrect: false },
            { id: 'opt4', text: 'Le compro.', subtext: 'Le is an indirect object', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 42: Direct Object Pronouns II
    // -------------------------------------------------------------
    {
      id: 'u4-l42',
      slug: 'direct-object-pronouns-2',
      unitId: 4,
      order: 42,
      title: '42. Direct Object Pronouns II',
      subtitle: 'Plural Pronouns: nos, os, los, las ("them / us / you all")',
      estimatedMinutes: 9,
      iconName: 'CornerDownRight',
      summary: 'Master the plural direct object pronouns: nos (us), los (them / you all masc), and las (them / you all fem).',
      theory: [
        {
          id: 'u4-l42-t1',
          title: 'Plural Direct Object Pronouns',
          summary: 'Replace plural nouns with nos, los, or las.',
          table: {
            headers: ['Pronoun', 'English', 'Example'],
            rows: [
              ['nos', 'us', 'El profesor nos enseña (The teacher teaches us)'],
              ['los', 'them (masc/mixed) / you all', 'Los libros → Los compro (I buy them)'],
              ['las', 'them (feminine)', 'Las cartas → Las escribo (I write them)']
            ]
          },
          examples: [
            { spanish: '¿Tienes los boletos? — Sí, los tengo.', english: 'Do you have the tickets? — Yes, I have them.', audio: 'Sí, los tengo.' },
            { spanish: 'Ellos nos invitan a la fiesta.', english: 'They invite us to the party.', audio: 'Ellos nos invitan a la fiesta.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4201', spanish: 'los', english: 'them (m.pl)', category: 'Direct Object' },
        { id: 'v4202', spanish: 'las', english: 'them (f.pl)', category: 'Direct Object' },
        { id: 'v4203', spanish: 'los boletos', english: 'the tickets', category: 'Nouns' }
      ],
      flashcards: [
        { id: 'f4201', front: 'I buy them (the books / masc)', back: 'Los compro', category: 'Direct Object' },
        { id: 'f4202', front: 'I write them (the letters / fem)', back: 'Las escribo', category: 'Direct Object' }
      ],
      exercises: [
        {
          id: 'u4-l42-ex1',
          type: 'multiple-choice',
          prompt: 'Replace the noun: "Leo las revistas" (I read the magazines)',
          explanation: '"Las revistas" is feminine plural → "Las leo".',
          options: [
            { id: 'opt1', text: 'Las leo.', subtext: 'Correct', isCorrect: true },
            { id: 'opt2', text: 'Los leo.', subtext: 'Gender mismatch', isCorrect: false },
            { id: 'opt3', text: 'Leo las.', subtext: 'Wrong placement', isCorrect: false },
            { id: 'opt4', text: 'Les leo.', subtext: 'Incorrect pronoun', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 43: Direct Object Pronouns III (Placement)
    // -------------------------------------------------------------
    {
      id: 'u4-l43',
      slug: 'direct-object-pronouns-3',
      unitId: 4,
      order: 43,
      title: '43. Direct Object Pronouns III',
      subtitle: 'Placement with Infinitives & Present Participles (Gerunds)',
      estimatedMinutes: 10,
      iconName: 'CornerDownRight',
      summary: 'When a sentence has two verbs (conjugated verb + infinitive or gerund), you have TWO choices of placement: before the conjugated verb, OR attached directly to the end of the infinitive/gerund!',
      theory: [
        {
          id: 'u4-l43-t1',
          title: 'The Two Attachment Options',
          summary: 'Option 1: Before the conjugated verb; Option 2: Attached to the infinitive/gerund.',
          content: [
            'When you have a verb combination like *quiero comprar* (I want to buy):',
            '• **Option 1 (Before)**: *Lo quiero comprar.*',
            '• **Option 2 (Attached)**: *Quiero comprarlo.*',
            'Both are 100% grammatically equivalent and equally common!'
          ],
          examples: [
            { spanish: 'Lo voy a ver. / Voy a verlo.', english: 'I am going to see it.', audio: 'Voy a verlo.' },
            { spanish: 'La estoy leyendo. / Estoy leyéndola.', english: 'I am reading it.', audio: 'Estoy leyéndola.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4301', spanish: 'comprarlo', english: 'to buy it (m)', category: 'Pronoun Attachment' },
        { id: 'v4302', spanish: 'verlo', english: 'to see it (m)', category: 'Pronoun Attachment' }
      ],
      flashcards: [
        { id: 'f4301', front: 'I want to read it (2 ways)', back: 'Lo quiero leer / Quiero leerlo', category: 'Pronoun Placement' }
      ],
      exercises: [
        {
          id: 'u4-l43-ex1',
          type: 'multiple-choice',
          prompt: 'Which of the following sentences is grammatically correct for "I need to do it"?',
          explanation: 'Both "Lo necesito hacer" and "Necesito hacerlo" are correct.',
          options: [
            { id: 'opt1', text: 'Necesito hacerlo.', subtext: 'Attached to infinitive', isCorrect: true },
            { id: 'opt2', text: 'Necesito lo hacer.', subtext: 'Forbidden in the middle', isCorrect: false },
            { id: 'opt3', text: 'Hacerlo necesito yo.', subtext: 'Unnatural order', isCorrect: false },
            { id: 'opt4', text: 'Necesito hacelo.', subtext: 'Missing r in infinitive', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 44: Indirect Object Pronouns I
    // -------------------------------------------------------------
    {
      id: 'u4-l44',
      slug: 'indirect-object-pronouns-1',
      unitId: 4,
      order: 44,
      title: '44. Indirect Object Pronouns I',
      subtitle: 'Singular Indirect Objects: me, te, le ("to/for me, you, him, her")',
      estimatedMinutes: 10,
      iconName: 'Send',
      summary: 'Indirect objects tell us TO WHOM or FOR WHOM an action is performed (giving, telling, sending, writing).',
      theory: [
        {
          id: 'u4-l44-t1',
          title: 'Singular Indirect Object Pronouns',
          summary: 'me (to me), te (to you), le (to him/her/you formal).',
          table: {
            headers: ['Pronoun', 'English Meaning', 'Example'],
            rows: [
              ['me', 'to / for me', 'Juan me da el dinero (Juan gives me the money)'],
              ['te', 'to / for you (informal)', 'Yo te escribo una carta (I write you a letter)'],
              ['le', 'to / for him, her, you formal', 'Yo le hablo (I speak to him/her)']
            ]
          },
          examples: [
            { spanish: 'Él me da un libro.', english: 'He gives me a book.', audio: 'Él me da un libro.' },
            { spanish: 'Yo le digo la verdad.', english: 'I tell him/her the truth.', audio: 'Yo le digo la verdad.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4401', spanish: 'le', english: 'to him / to her / to you (formal)', category: 'Indirect Object' },
        { id: 'v4402', spanish: 'decir (digo)', english: 'to say / to tell', category: 'Verbs' },
        { id: 'v4403', spanish: 'la verdad', english: 'the truth', category: 'Nouns' }
      ],
      flashcards: [
        { id: 'f4401', front: 'He gives me a book', back: 'Él me da un libro', category: 'Indirect Object' },
        { id: 'f4402', front: 'I write to him / to her', back: 'Yo le escribo', category: 'Indirect Object' }
      ],
      exercises: [
        {
          id: 'u4-l44-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "The doctor explains the treatment to me"',
          explanation: '"El doctor me explica el tratamiento".',
          options: [
            { id: 'opt1', text: 'El doctor me explica el tratamiento.', subtext: 'Correct IOP placement', isCorrect: true },
            { id: 'opt2', text: 'El doctor explica a mí el tratamiento.', subtext: 'Pronoun me is required', isCorrect: false },
            { id: 'opt3', text: 'El doctor lo explica mí.', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'El doctor te explica a mí.', subtext: 'Person mismatch', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 45: Indirect Object Pronouns II
    // -------------------------------------------------------------
    {
      id: 'u4-l45',
      slug: 'indirect-object-pronouns-2',
      unitId: 4,
      order: 45,
      title: '45. Indirect Object Pronouns II',
      subtitle: 'Plural Indirect Objects: nos, os, les ("to us / to them")',
      estimatedMinutes: 9,
      iconName: 'Send',
      summary: 'Learn plural indirect objects: nos (to/for us) and les (to/for them or you all).',
      theory: [
        {
          id: 'u4-l45-t1',
          title: 'Plural Indirect Object Pronouns',
          summary: 'nos (to us), les (to them / you all).',
          table: {
            headers: ['Pronoun', 'English Meaning', 'Example'],
            rows: [
              ['nos', 'to / for us', 'El abuelo nos cuenta una historia (Grandpa tells us a story)'],
              ['les', 'to / for them / you all', 'Yo les mando un mensaje (I send them a message)']
            ]
          },
          examples: [
            { spanish: 'El profesor nos da la tarea.', english: 'The teacher gives us the homework.', audio: 'El profesor nos da la tarea.' },
            { spanish: 'Yo les compro regalos a mis hijos.', english: 'I buy gifts for my children.', audio: 'Yo les compro regalos a mis hijos.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4501', spanish: 'les', english: 'to them / to you all', category: 'Indirect Object' },
        { id: 'v4502', spanish: 'mandar', english: 'to send', category: 'Verbs' },
        { id: 'v4503', spanish: 'un mensaje', english: 'a message', category: 'Nouns' }
      ],
      flashcards: [
        { id: 'f4501', front: 'to them / to you all (IOP)', back: 'les', category: 'Indirect Object' }
      ],
      exercises: [
        {
          id: 'u4-l45-ex1',
          type: 'multiple-choice',
          prompt: 'How do you say "I write to them every week"?',
          explanation: '"Yo les escribo todas las semanas".',
          options: [
            { id: 'opt1', text: 'Yo les escribo cada semana.', subtext: 'Correct plural IOP', isCorrect: true },
            { id: 'opt2', text: 'Yo los escribo cada semana.', subtext: 'Los is direct object', isCorrect: false },
            { id: 'opt3', text: 'Yo le escribo a ellos.', subtext: 'Le is singular, needs les', isCorrect: false },
            { id: 'opt4', text: 'Yo escribo ellos cada semana.', subtext: 'Missing preposition and pronoun', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 46: Indirect Object Pronouns III (Clarification)
    // -------------------------------------------------------------
    {
      id: 'u4-l46',
      slug: 'indirect-object-pronouns-3',
      unitId: 4,
      order: 46,
      title: '46. Indirect Object Pronouns III',
      subtitle: 'Redundant IOPs & Clarification with "a + Person"',
      estimatedMinutes: 9,
      iconName: 'Send',
      summary: 'In Spanish, even when the noun is mentioned (e.g. "a Juan"), the indirect object pronoun "le" is still required! Understand Spanish\'s mandatory redundant pronoun rule.',
      theory: [
        {
          id: 'u4-l46-t1',
          title: 'The Mandatory Redundant Pronoun Rule',
          summary: 'In Spanish, you must include "le" even when you name the person with "a...".',
          content: [
            'Because *le* can mean "to him", "to her", or "to you formal", Spanish adds **a + person** for clarification or emphasis.',
            'Crucially, Spanish almost ALWAYS retains the pronoun *le* even when *a Juan* is present: **Le** doy el libro **a Juan** (Word for word: "To him I give the book to Juan").'
          ],
          examples: [
            { spanish: 'Le escribo una carta a mi madre.', english: 'I write a letter to my mother.', audio: 'Le escribo una carta a mi madre.' },
            { spanish: 'Les explico la regla a los estudiantes.', english: 'I explain the rule to the students.', audio: 'Les explico la regla a los estudiantes.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4601', spanish: 'a él / a ella', english: 'to him / to her (clarification)', category: 'Clarification' }
      ],
      flashcards: [
        { id: 'f4601', front: 'I give the book to Maria', back: 'Le doy el libro a María', frontSubtext: 'Redundant "le" is standard Spanish', category: 'Indirect Object' }
      ],
      exercises: [
        {
          id: 'u4-l46-ex1',
          type: 'multiple-choice',
          prompt: 'Which sentence demonstrates natural Spanish with redundant IOP?',
          explanation: '"Le doy el dinero a Carlos" (le + a Carlos).',
          options: [
            { id: 'opt1', text: 'Le doy el dinero a Carlos.', subtext: 'Natural standard Spanish', isCorrect: true },
            { id: 'opt2', text: 'Doy el dinero Carlos.', subtext: 'Grammatically broken', isCorrect: false },
            { id: 'opt3', text: 'Lo doy el dinero a Carlos.', subtext: 'Wrong pronoun', isCorrect: false },
            { id: 'opt4', text: 'Doy a Carlos el dinero sin le.', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 47: Double Object Pronouns (Se Lo)
    // -------------------------------------------------------------
    {
      id: 'u4-l47',
      slug: 'double-object-pronouns',
      unitId: 4,
      order: 47,
      title: '47. Double Object Pronouns',
      subtitle: 'Combining Direct & Indirect Objects: The "Se Lo" Rule',
      estimatedMinutes: 12,
      iconName: 'Repeat',
      summary: 'When direct and indirect pronouns appear together, the Indirect pronoun ALWAYS comes first (I.O. + D.O.). Furthermore, you can never say "le lo" or "les lo"—"le/les" magically transforms into "se"!',
      theory: [
        {
          id: 'u4-l47-t1',
          title: 'The Two Golden Rules of Double Pronouns',
          summary: 'Rule 1: People before Things (I.O. before D.O.); Rule 2: No "le lo"—change to "se lo"!',
          ruleHighlights: [
            { label: 'Rule 1: Order', description: 'Indirect Object + Direct Object (I.D. rule: Indirect first, Direct second)', color: 'indigo' },
            { label: 'Rule 2: "Se" change', description: 'le/les + lo/la/los/las → se + lo/la/los/las (e.g. se lo doy)', color: 'rose' }
          ],
          content: [
            'Spanish dislikes the tongue-twisting sound of *le lo* or *les la*. Therefore, whenever *le* or *les* precedes *lo, la, los,* or *las*, the *le/les* transforms into **se**.'
          ],
          table: {
            headers: ['Original (Forbidden)', 'Correct Transformation', 'English Meaning'],
            rows: [
              ['le lo doy', 'se lo doy', 'I give it to him/her'],
              ['le la mando', 'se la mando', 'I send it to him/her'],
              ['les los compro', 'se los compro', 'I buy them for them'],
              ['me lo da', 'me lo da (no change needed)', 'He gives it to me']
            ]
          },
          examples: [
            { spanish: '¿Le diste el libro a Juan? — Sí, se lo di.', english: 'Did you give the book to Juan? — Yes, I gave it to him.', audio: 'Sí, se lo di.' },
            { spanish: 'Ella me lo explicó.', english: 'She explained it to me.', audio: 'Ella me lo explicó.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4701', spanish: 'se lo', english: 'it to him / it to her / it to them', category: 'Double Objects' },
        { id: 'v4702', spanish: 'me lo', english: 'it to me', category: 'Double Objects' }
      ],
      flashcards: [
        { id: 'f4701', front: 'le + lo = ?', back: 'se lo', frontSubtext: 'Never say "le lo"!', category: 'Double Objects' },
        { id: 'f4702', front: 'I give it to him (el libro a Juan)', back: 'Se lo doy', category: 'Double Objects' }
      ],
      exercises: [
        {
          id: 'u4-l47-ex1',
          type: 'multiple-choice',
          prompt: 'Replace both objects: "Doy el regalo (m) a María (f)"',
          explanation: '"le lo doy" transforms into "se lo doy".',
          options: [
            { id: 'opt1', text: 'Se lo doy.', subtext: 'Correct double object substitution', isCorrect: true },
            { id: 'opt2', text: 'Le lo doy.', subtext: 'Forbidden "le lo"', isCorrect: false },
            { id: 'opt3', text: 'Lo le doy.', subtext: 'Wrong order (Indirect must be first)', isCorrect: false },
            { id: 'opt4', text: 'Se la doy.', subtext: 'Regalo is masculine, needs lo', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 48: Verbs Like Gustar
    // -------------------------------------------------------------
    {
      id: 'u4-l48',
      slug: 'verbs-like-gustar',
      unitId: 4,
      order: 48,
      title: '48. Verbs Like Gustar',
      subtitle: 'The Backwards Verbs: gustar, encantar, interesar, doler',
      estimatedMinutes: 11,
      iconName: 'Heart',
      summary: 'In Spanish, "gustar" does not mean "to like"—it means "to be pleasing to". The thing liked is actually the SUBJECT, so the verb only has two forms: gusta (singular/verb) and gustan (plural).',
      theory: [
        {
          id: 'u4-l48-t1',
          title: 'How "Gustar" Works Backwards',
          summary: 'Indirect pronoun + gusta / gustan + the thing pleasing you.',
          table: {
            headers: ['Pronoun', 'Singular / Verb (gusta)', 'Plural Noun (gustan)'],
            rows: [
              ['me (to me)', 'me gusta el libro / me gusta leer', 'me gustan los libros'],
              ['te (to you)', 'te gusta el café', 'te gustan los perros'],
              ['le (to him/her/Ud.)', 'le gusta viajar', 'le gustan las manzanas'],
              ['nos (to us)', 'nos gusta la música', 'nos gustan los deportes'],
              ['les (to them/Uds.)', 'les gusta bailar', 'les gustan los coches']
            ]
          },
          content: [
            'Other high-frequency verbs that behave exactly like *gustar*:',
            '• **encantar**: to love / delight (*me encanta*)',
            '• **interesar**: to interest (*me interesa*)',
            '• **importar**: to matter / be important (*no me importa*)',
            '• **doler (o:ue)**: to hurt / ache (*me duele la cabeza*)'
          ],
          examples: [
            { spanish: 'Me gusta el café.', english: 'I like coffee. (Lit: Coffee is pleasing to me)', audio: 'Me gusta el café.' },
            { spanish: 'Me gustan los gatos.', english: 'I like cats. (Plural subject → gustan)', audio: 'Me gustan los gatos.' },
            { spanish: 'Me encanta viajar.', english: 'I love traveling.', audio: 'Me encanta viajar.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4801', spanish: 'gustar', english: 'to be pleasing to / to like', category: 'Gustar Verbs' },
        { id: 'v4802', spanish: 'encantar', english: 'to love (things/activities)', category: 'Gustar Verbs' },
        { id: 'v4803', spanish: 'interesar', english: 'to interest', category: 'Gustar Verbs' },
        { id: 'v4804', spanish: 'doler (o:ue)', english: 'to hurt / ache', category: 'Gustar Verbs' }
      ],
      flashcards: [
        { id: 'f4801', front: 'I like books (plural)', back: 'Me gustan los libros', frontSubtext: 'Plural noun → gustan', category: 'Gustar Verbs' },
        { id: 'f4802', front: 'I love Spanish', back: 'Me encanta el español', category: 'Gustar Verbs' }
      ],
      exercises: [
        {
          id: 'u4-l48-ex1',
          type: 'multiple-choice',
          prompt: 'Fill in the blank: "A mí me _______ los tacos" (I like tacos)',
          explanation: '"Los tacos" is plural, so the verb must be "gustan".',
          options: [
            { id: 'opt1', text: 'gustan', subtext: 'Plural match with tacos', isCorrect: true },
            { id: 'opt2', text: 'gusta', subtext: 'Singular mismatch', isCorrect: false },
            { id: 'opt3', text: 'gusto', subtext: 'Never use gusto for I like', isCorrect: false },
            { id: 'opt4', text: 'gustamos', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 49: Present Progressive
    // -------------------------------------------------------------
    {
      id: 'u4-l49',
      slug: 'present-progressive',
      unitId: 4,
      order: 49,
      title: '49. Present Progressive',
      subtitle: 'Actions Happening Right Now: estar + -ando / -iendo',
      estimatedMinutes: 10,
      iconName: 'PlayCircle',
      summary: 'Learn how to describe actions currently in progress using "estar" plus the gerund (-ando for -AR verbs, -iendo for -ER/-IR verbs).',
      theory: [
        {
          id: 'u4-l49-t1',
          title: 'The Present Progressive Blueprint',
          summary: 'estar [estoy, estás, está, estamos, están] + gerund.',
          table: {
            headers: ['Verb Family', 'Gerund Ending', 'Example', 'English'],
            rows: [
              ['-AR Verbs', '-ando', 'hablar → hablando', 'speaking'],
              ['-ER Verbs', '-iendo', 'comer → comiendo', 'eating'],
              ['-IR Verbs', '-iendo', 'vivir → viviendo', 'living'],
              ['Irregular: Vowel stem', '-yendo', 'leer → leyendo / oír → oyendo', 'reading / hearing'],
              ['Irregular: Stem-changer', 'e:i or o:u', 'dormir → durmiendo / pedir → pidiendo', 'sleeping / asking']
            ]
          },
          examples: [
            { spanish: 'Estoy estudiando español ahora mismo.', english: 'I am studying Spanish right now.', audio: 'Estoy estudiando español ahora mismo.' },
            { spanish: '¿Qué estás haciendo?', english: 'What are you doing?', audio: '¿Qué estás haciendo?' },
            { spanish: 'El niño está durmiendo.', english: 'The boy is sleeping.', audio: 'El niño está durmiendo.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v4901', spanish: 'hablando', english: 'speaking (-ando)', category: 'Gerunds' },
        { id: 'v4902', spanish: 'comiendo', english: 'eating (-iendo)', category: 'Gerunds' },
        { id: 'v4903', spanish: 'leyendo', english: 'reading (irregular -yendo)', category: 'Gerunds' },
        { id: 'v4904', spanish: 'durmiendo', english: 'sleeping (irregular o:u)', category: 'Gerunds' }
      ],
      flashcards: [
        { id: 'f4901', front: 'I am speaking right now', back: 'Estoy hablando', category: 'Progressive' },
        { id: 'f4902', front: 'leer → gerund', back: 'leyendo', category: 'Progressive' }
      ],
      exercises: [
        {
          id: 'u4-l49-ex1',
          type: 'multiple-choice',
          prompt: 'What is the correct gerund form of "escribir" (to write)?',
          explanation: '-IR verbs take "-iendo": "escribiendo".',
          options: [
            { id: 'opt1', text: 'escribiendo', subtext: 'Correct -iendo ending', isCorrect: true },
            { id: 'opt2', text: 'escribando', subtext: '-ando is for -AR verbs', isCorrect: false },
            { id: 'opt3', text: 'escribyendo', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt4', text: 'escribado', subtext: 'Past participle, not gerund', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 50: Verbs with Irregular 1st Persons ("Yo-Go" Verbs)
    // -------------------------------------------------------------
    {
      id: 'u4-l50',
      slug: 'irregular-1st-person-verbs',
      unitId: 4,
      order: 50,
      title: '50. Irregular 1st Person Verbs',
      subtitle: 'The "Yo-Go" Verbs: hacer, poner, salir, traer, saber, ver, conocer',
      estimatedMinutes: 11,
      iconName: 'Zap',
      summary: 'Many otherwise regular verbs have an irregular "yo" form ending in "-go" or other unique spellings in the present tense.',
      theory: [
        {
          id: 'u4-l50-t1',
          title: 'The High-Frequency "Yo-Go" and Irregular 1st Persons',
          summary: 'Only the "yo" form is irregular; the rest of the verb is completely regular!',
          table: {
            headers: ['Infinitive', 'Irregular "Yo" Form', 'Tú Form (Regular)', 'English Meaning'],
            rows: [
              ['hacer', 'hago (I do/make)', 'haces', 'to do / to make'],
              ['poner', 'pongo (I put)', 'pones', 'to put / to place'],
              ['salir', 'salgo (I leave/go out)', 'sales', 'to leave / to go out'],
              ['traer', 'traigo (I bring)', 'traes', 'to bring'],
              ['caer', 'caigo (I fall)', 'caes', 'to fall'],
              ['saber', 'sé (I know a fact)', 'sabes', 'to know'],
              ['ver', 'veo (I see)', 'ves', 'to see'],
              ['conocer', 'conozco (I know a person)', 'conoces', 'to know / meet']
            ]
          },
          examples: [
            { spanish: 'Yo hago mi tarea.', english: 'I do my homework.', audio: 'Yo hago mi tarea.' },
            { spanish: 'Yo salgo con mis amigos los viernes.', english: 'I go out with my friends on Fridays.', audio: 'Yo salgo con mis amigos los viernes.' },
            { spanish: 'Yo pongo la mesa.', english: 'I set the table.', audio: 'Yo pongo la mesa.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v5001', spanish: 'hacer (hago)', english: 'to do / to make', category: 'Yo-Go Verbs' },
        { id: 'v5002', spanish: 'poner (pongo)', english: 'to put / to place', category: 'Yo-Go Verbs' },
        { id: 'v5003', spanish: 'salir (salgo)', english: 'to leave / to go out', category: 'Yo-Go Verbs' },
        { id: 'v5004', spanish: 'traer (traigo)', english: 'to bring', category: 'Yo-Go Verbs' }
      ],
      flashcards: [
        { id: 'f5001', front: 'yo (hacer)', back: 'hago', category: 'Yo-Go Verbs' },
        { id: 'f5002', front: 'yo (poner)', back: 'pongo', category: 'Yo-Go Verbs' },
        { id: 'f5003', front: 'yo (salir)', back: 'salgo', category: 'Yo-Go Verbs' }
      ],
      exercises: [
        {
          id: 'u4-l50-ex1',
          type: 'multiple-choice',
          prompt: 'What is the "yo" form of "hacer" (to do)?',
          audioPrompt: 'hago',
          explanation: '"Hacer" has the irregular "yo" form "hago".',
          options: [
            { id: 'opt1', text: 'hago', subtext: 'Yo hago', isCorrect: true },
            { id: 'opt2', text: 'haco', subtext: 'Incorrect', isCorrect: false },
            { id: 'opt3', text: 'haces', subtext: 'Tú haces', isCorrect: false },
            { id: 'opt4', text: 'hazo', subtext: 'Incorrect', isCorrect: false }
          ]
        }
      ]
    }
  ],

  masteryExam: {
    id: 'u4-exam',
    title: 'Unit 4 Topic Checkpoint',
    description: 'A short checkpoint covering representative object-pronoun, gustar, and present-progressive topics.',
    passingScore: 80,
    exercises: [
      {
        id: 'u4-ex-1',
        type: 'multiple-choice',
        prompt: 'Translate: "She gives it (el regalo) to him"',
        explanation: 'Double object substitution: "Ella se lo da".',
        options: [
          { id: 'e1', text: 'Ella se lo da.', subtext: 'Correct double object form', isCorrect: true },
          { id: 'e2', text: 'Ella le lo da.', subtext: 'Forbidden le lo', isCorrect: false },
          { id: 'e3', text: 'Ella lo le da.', subtext: 'Wrong order', isCorrect: false },
          { id: 'e4', text: 'Ella se la da.', subtext: 'Regalo is masculine', isCorrect: false }
        ]
      },
      {
        id: 'u4-ex-2',
        type: 'fill-in-blank',
        prompt: 'Complete: "A nosotros nos _______ (like) los libros."',
        sentenceBefore: 'A nosotros nos',
        sentenceAfter: 'los libros de historia.',
        correctAnswers: ['gustan', 'Gustan'],
        wordBank: ['gustan', 'gusta', 'gustamos', 'gusto'],
        hint: '"Los libros" is plural.',
        explanation: '"Los libros" is plural, so we use "gustan".'
      },
      {
        id: 'u4-ex-3',
        type: 'multiple-choice',
        prompt: 'What is the "yo" form of "salir"?',
        explanation: '"Salir" becomes "salgo" in 1st person.',
        options: [
          { id: 'e1', text: 'salgo', subtext: 'Yo salgo', isCorrect: true },
          { id: 'e2', text: 'salo', subtext: 'Incorrect', isCorrect: false },
          { id: 'e3', text: 'sales', subtext: 'Tú sales', isCorrect: false },
          { id: 'e4', text: 'salgo yo no', subtext: 'Incorrect', isCorrect: false }
        ]
      }
    ]
  }
};
