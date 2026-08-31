import type { Unit } from './types';

export const unit9: Unit = {
  id: 9,
  title: 'Unit 9: Future, Conditional & Perfect Tenses',
  subtitle: '4 selected lessons from topics 99, 101, and 104–107: Advanced tense foundations',
  description: 'A condensed introduction to the future, conditional, present perfect, and imperfect subjunctive. Past and future perfect, accentuation, and the full imperfect-subjunctive sequence remain planned.',
  iconName: 'Zap',
  colorTheme: 'rose',
  isAvailable: true,
  lessons: ([
    // -------------------------------------------------------------
    // LESSON 96: Future Tense
    // -------------------------------------------------------------
    {
      id: 'u9-l96',
      slug: 'future-tense',
      unitId: 9,
      order: 99,
      title: '99. Future Tense',
      subtitle: 'The Simple Future Tense: -é, -ás, -á, -emos, -éis, -án',
      estimatedMinutes: 11,
      iconName: 'FastForward',
      summary: 'Learn the simple future tense in Spanish. Unlike other tenses, you do NOT drop the infinitive ending—you attach endings directly to the entire intact infinitive (hablaré, comeré, viviré)!',
      theory: [
        {
          id: 'u9-l96-t1',
          title: 'The Future Tense Blueprint',
          summary: 'Infinitive + [-é, -ás, -á, -emos, -éis, -án]. Same endings for all -AR, -ER, and -IR verbs!',
          table: {
            headers: ['Pronoun', 'Ending', 'HABLAR', 'COMER', 'VIVIR'],
            rows: [
              ['yo', '-é', 'hablaré (I will speak)', 'comeré (I will eat)', 'viviré (I will live)'],
              ['tú', '-ás', 'hablarás', 'comerás', 'vivirás'],
              ['él / ella / usted', '-á', 'hablará', 'comerá', 'vivirá'],
              ['nosotros/as', '-emos', 'hablaremos', 'comeremos', 'viviremos'],
              ['ellos / ellas / ustedes', '-án', 'hablarán', 'comerán', 'vivirán']
            ]
          },
          content: [
            'Irregular future stems (same endings attached to irregular stem):',
            '• **tener** → tendr- (*tendré*) | **hacer** → har- (*haré*) | **poder** → podr- (*podré*)',
            '• **poner** → pondr- (*pondré*) | **saber** → sabr- (*sabré*) | **decir** → dir- (*diré*)'
          ],
          examples: [
            { spanish: 'Mañana hablaré con mi jefe.', english: 'Tomorrow I will speak with my boss.', audio: 'Mañana hablaré con mi jefe.' },
            { spanish: 'El próximo año viajaré a España.', english: 'Next year I will travel to Spain.', audio: 'El próximo año viajaré a España.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v9601', spanish: 'hablaré', english: 'I will speak', category: 'Future' },
        { id: 'v9602', spanish: 'tendré', english: 'I will have', category: 'Future Irregulars' },
        { id: 'v9603', spanish: 'haré', english: 'I will do / make', category: 'Future Irregulars' }
      ],
      flashcards: [
        { id: 'f9601', front: 'I will travel (viajar in future)', back: 'Viajaré', category: 'Future' },
        { id: 'f9602', front: 'I will have (tener in future)', back: 'Tendré', category: 'Future Irregulars' }
      ],
      exercises: [
        {
          id: 'u9-l96-ex1',
          type: 'multiple-choice',
          prompt: 'What is the future form of "estudiar" for "yo"?',
          audioPrompt: 'estudiaré',
          explanation: 'Infinitive estudiar + -é = "estudiaré".',
          options: [
            { id: 'opt1', text: 'estudiaré', subtext: 'Infinitive + -é', isCorrect: true },
            { id: 'opt2', text: 'estudié', subtext: 'Preterite past', isCorrect: false },
            { id: 'opt3', text: 'estudio', subtext: 'Present tense', isCorrect: false },
            { id: 'opt4', text: 'estudiaría', subtext: 'Conditional tense', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 97: Conditional Tense
    // -------------------------------------------------------------
    {
      id: 'u9-l97',
      slug: 'conditional-tense',
      unitId: 9,
      order: 104,
      title: '104. Conditional Tense',
      subtitle: 'Expressing "Would do": -ía, -ías, -ía, -íamos, -íais, -ían',
      estimatedMinutes: 11,
      iconName: 'GitBranch',
      summary: 'Learn how to say what "would" happen using the conditional tense: intact infinitive + -ía, -ías, -ía, -íamos, -ían (hablaría, comería, viviría).',
      theory: [
        {
          id: 'u9-l97-t1',
          title: 'The Conditional Blueprint',
          summary: 'Infinitive + [-ía, -ías, -ía, -íamos, -íais, -ían].',
          table: {
            headers: ['Pronoun', 'HABLAR (would speak)', 'COMER (would eat)', 'VIVIR (would live)'],
            rows: [
              ['yo', 'hablaría (I would speak)', 'comería', 'viviría'],
              ['tú', 'hablarías', 'comerías', 'vivirías'],
              ['él / ella / usted', 'hablaría', 'comería', 'viviría'],
              ['nosotros/as', 'hablaríamos', 'comeríamos', 'viviríamos'],
              ['ellos / ellas / ustedes', 'hablarían', 'comerían', 'vivirían']
            ]
          },
          examples: [
            { spanish: 'Yo viajaría por todo el mundo si tuviera dinero.', english: 'I would travel the whole world if I had money.', audio: 'Yo viajaría por todo el mundo.' },
            { spanish: '¿Podrías ayudarme, por favor?', english: 'Could you help me, please? (Polite request)', audio: '¿Podrías ayudarme, por favor?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v9701', spanish: 'hablaría', english: 'I would speak', category: 'Conditional' },
        { id: 'v9702', spanish: 'podría', english: 'I / he could (would be able to)', category: 'Conditional' }
      ],
      flashcards: [
        { id: 'f9701', front: 'I would live in Spain', back: 'Viviría en España', category: 'Conditional' }
      ],
      exercises: [
        {
          id: 'u9-l97-ex1',
          type: 'multiple-choice',
          prompt: 'Translate: "I would buy that house"',
          explanation: '"Compraría esa casa" (infinitive comprar + -ía).',
          options: [
            { id: 'opt1', text: 'Compraría esa casa.', subtext: 'Correct conditional', isCorrect: true },
            { id: 'opt2', text: 'Compré esa casa.', subtext: 'Preterite past', isCorrect: false },
            { id: 'opt3', text: 'Compraré esa casa.', subtext: 'Future (I will buy)', isCorrect: false },
            { id: 'opt4', text: 'Compro esa casa.', subtext: 'Present tense', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 98: Present Perfect
    // -------------------------------------------------------------
    {
      id: 'u9-l98',
      slug: 'present-perfect',
      unitId: 9,
      order: 101,
      title: '101. Present Perfect',
      subtitle: 'Expressing "Have done": haber (he, has, ha, hemos, han) + Participio',
      estimatedMinutes: 11,
      iconName: 'CheckCircle2',
      summary: 'Learn the present perfect tense (he hablado, has comido, hemos vivido) to describe actions completed recently or throughout life experience.',
      theory: [
        {
          id: 'u9-l98-t1',
          title: 'The Present Perfect Blueprint',
          summary: 'haber [he, has, ha, hemos, han] + past participle (-ado / -ido).',
          table: {
            headers: ['Pronoun', 'Haber', 'Past Participle (-ado / -ido)', 'Example'],
            rows: [
              ['yo', 'he', 'hablado / comido / vivido', 'He comido (I have eaten)'],
              ['tú', 'has', 'estudiado', 'Has estudiado (You have studied)'],
              ['él / ella / usted', 'ha', 'viajado', 'Ha viajado (He has traveled)'],
              ['nosotros/as', 'hemos', 'aprendido', 'Hemos aprendido (We have learned)'],
              ['ellos / ellas / ustedes', 'han', 'terminado', 'Han terminado (They have finished)']
            ]
          },
          content: [
            'Irregular past participles to memorize:',
            '• **hacer** → hecho (*he hecho*) | **escribir** → escrito (*he escrito*)',
            '• **ver** → visto (*he visto*) | **abrir** → abierto (*he abierto*) | **decir** → dicho (*he dicho*)'
          ],
          examples: [
            { spanish: 'He visitado España tres veces.', english: 'I have visited Spain three times.', audio: 'He visitado España tres veces.' },
            { spanish: '¿Has visto mis llaves?', english: 'Have you seen my keys?', audio: '¿Has visto mis llaves?' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v9801', spanish: 'he hablado', english: 'I have spoken', category: 'Present Perfect' },
        { id: 'v9802', spanish: 'hecho', english: 'done / made (participle of hacer)', category: 'Participles' },
        { id: 'v9803', spanish: 'visto', english: 'seen (participle of ver)', category: 'Participles' }
      ],
      flashcards: [
        { id: 'f9801', front: 'I have eaten (comer in present perfect)', back: 'He comido', category: 'Present Perfect' },
        { id: 'f9802', front: 'hacer → past participle', back: 'hecho (he hecho = I have done)', category: 'Participles' }
      ],
      exercises: [
        {
          id: 'u9-l98-ex1',
          type: 'multiple-choice',
          prompt: 'Translate into Spanish: "We have lived here for ten years"',
          explanation: '"Hemos vivido aquí por diez años" (haber hemos + vivido).',
          options: [
            { id: 'opt1', text: 'Hemos vivido aquí por diez años.', subtext: 'Correct present perfect', isCorrect: true },
            { id: 'opt2', text: 'Habemos vivido aquí.', subtext: 'Habemos is archaic/incorrect', isCorrect: false },
            { id: 'opt3', text: 'Hemos viviendo aquí.', subtext: 'Gerund error', isCorrect: false },
            { id: 'opt4', text: 'Tenemos vivido aquí.', subtext: 'Tener is not helper for perfect tense', isCorrect: false }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // LESSON 100: Imperfect Subjunctive
    // -------------------------------------------------------------
    {
      id: 'u9-l100',
      slug: 'imperfect-subjunctive',
      unitId: 9,
      order: 105,
      title: '105–107. Imperfect Subjunctive',
      subtitle: 'Past Subjunctive (-ra) & Hypothetical "Si" Clauses',
      estimatedMinutes: 14,
      iconName: 'CloudRain',
      summary: 'Unlock advanced fluency with the imperfect subjunctive (-ra, -ras, -ra, -ramos, -ran) and express hypothetical contrary-to-fact "Si" clauses (Si tuviera dinero, viajaría).',
      theory: [
        {
          id: 'u9-l100-t1',
          title: 'The Imperfect Subjunctive & "Si" Clauses',
          summary: '1. Take 3rd person plural preterite (ellos hablaron); 2. Drop -ron; 3. Add -ra, -ras, -ra, -ramos, -ran.',
          table: {
            headers: ['Infinitive', 'Ellos Preterite', 'Drop -ron', 'Yo Form (-ra)'],
            rows: [
              ['hablar', 'hablaron', 'habla-', 'hablara (if I spoke)'],
              ['tener', 'tuvieron', 'tuvie-', 'tuviera (if I had)'],
              ['hacer', 'hicieron', 'hicie-', 'hiciera (if I made)'],
              ['ser / ir', 'fueron', 'fue-', 'fuera (if I were / went)']
            ]
          },
          content: [
            'Hypothetical Conditional "Si" clause formula:',
            '**Si + [Imperfect Subjunctive], + [Conditional]**',
            '• *Si tuviera más tiempo, estudiaría más.* (If I had more time, I would study more).'
          ],
          examples: [
            { spanish: 'Si tuviera dinero, viajaría por el mundo.', english: 'If I had money, I would travel the world.', audio: 'Si tuviera dinero, viajaría por el mundo.' },
            { spanish: 'Ojalá fuera viernes.', english: 'I wish it were Friday.', audio: 'Ojalá fuera viernes.' }
          ]
        }
      ],
      vocabulary: [
        { id: 'v10001', spanish: 'tuviera', english: 'if I had (imperfect subjunctive)', category: 'Imperfect Subjunctive' },
        { id: 'v10002', spanish: 'fuera', english: 'if I were / went (imperfect subjunctive)', category: 'Imperfect Subjunctive' }
      ],
      flashcards: [
        { id: 'f10001', front: 'If I had money, I would travel', back: 'Si tuviera dinero, viajaría', category: 'Hypothetical Clauses' }
      ],
      exercises: [
        {
          id: 'u9-l100-ex1',
          type: 'multiple-choice',
          prompt: 'Complete the hypothetical "Si" clause: "Si yo _______ (to have) dinero, compraría un carro nuevo."',
          explanation: '"Si tuviera dinero, compraría un carro nuevo" (Si + imperfect subjunctive + conditional).',
          options: [
            { id: 'opt1', text: 'tuviera', subtext: 'Imperfect subjunctive of tener', isCorrect: true },
            { id: 'opt2', text: 'tengo', subtext: 'Present indicative', isCorrect: false },
            { id: 'opt3', text: 'tendría', subtext: 'Cannot put conditional after Si', isCorrect: false },
            { id: 'opt4', text: 'tuve', subtext: 'Preterite', isCorrect: false }
          ]
        }
      ]
    }
  ] satisfies Unit['lessons']).sort((first, second) => first.order - second.order),

  masteryExam: {
    id: 'u9-exam',
    title: 'Unit 9 Selected Topics Checkpoint',
    description: 'A short checkpoint covering representative future, conditional, perfect, and hypothetical forms.',
    passingScore: 80,
    exercises: [
      {
        id: 'u9-ex-1',
        type: 'multiple-choice',
        prompt: 'Translate: "Tomorrow I will do my homework"',
        explanation: 'Hacer in future for yo is "haré": "Mañana haré mi tarea".',
        options: [
          { id: 'e1', text: 'Mañana haré mi tarea.', subtext: 'Irregular future haré', isCorrect: true },
          { id: 'e2', text: 'Mañana haceré mi tarea.', subtext: 'Incorrect stem', isCorrect: false },
          { id: 'e3', text: 'Mañana hago mi tarea.', subtext: 'Present tense', isCorrect: false },
          { id: 'e4', text: 'Mañana haría mi tarea.', subtext: 'Conditional', isCorrect: false }
        ]
      }
    ]
  }
};
