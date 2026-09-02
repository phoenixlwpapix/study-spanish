import type { Unit } from './types';

export const unit9: Unit = {
  "id": 9,
  "title": "Unit 9: Future, Conditional & Advanced Grammar",
  "subtitle": "Lessons 99–108: Perfect Tenses, Imperfect Subjunctive, \"Si\" Clauses & Accentuation",
  "description": "Master the capstone of Spanish grammar across all 10 official lessons: the Simple Future (and probability), Past Participles, Present Perfect, Past Perfect (Pluperfect), Future Perfect, the Conditional Mood, the Imperfect Subjunctive (formation and sequence of tenses), contrary-to-fact \"Si\" conditional clauses, and the formal Rules of Accentuation.",
  "iconName": "FastForward",
  "colorTheme": "purple",
  "isAvailable": true,
  "lessons": [
    {
      "id": "u9-l99",
      "slug": "future",
      "unitId": 9,
      "order": 99,
      "title": "99. Future",
      "subtitle": "The Simple Future Tense & Future of Probability",
      "estimatedMinutes": 11,
      "iconName": "FastForward",
      "summary": "Learn how to form the Simple Future tense by adding endings directly to the full infinitive (-é, -ás, -á, -emos, -éis, -án), master the 12 irregular stems, and use the future to express probability/conjecture in the present.",
      "theory": [
        {
          "id": "u9-l99-t1",
          "title": "Simple Future Conjugation Formula",
          "summary": "Infinitive + universal endings (identical for -AR, -ER, and -IR!).",
          "table": {
            "headers": [
              "Pronoun",
              "Ending",
              "HABLAR",
              "COMER",
              "VIVIR"
            ],
            "rows": [
              [
                "yo",
                "-é",
                "hablaré",
                "comeré",
                "viviré"
              ],
              [
                "tú",
                "-ás",
                "hablarás",
                "comerás",
                "vivirás"
              ],
              [
                "él / ella / usted",
                "-á",
                "hablará",
                "comerá",
                "vivirá"
              ],
              [
                "nosotros / nosotras",
                "-emos (no accent!)",
                "hablaremos",
                "comeremos",
                "viviremos"
              ],
              [
                "vosotros / vosotras",
                "-éis",
                "hablaréis",
                "comeréis",
                "viviréis"
              ],
              [
                "ellos / ellas / ustedes",
                "-án",
                "hablarán",
                "comerán",
                "vivirán"
              ]
            ]
          },
          "content": [
            "**The 12 Irregular Stems in Future & Conditional**:",
            "• **d-replacement**: tener → **tendr-**, poner → **pondr-**, salir → **saldr-**, venir → **vendr-**, valer → **valdr-**.",
            "• **e-drop**: saber → **sabr-**, poder → **podr-**, caber → **cabr-**, haber → **habr-**, querer → **querr-**.",
            "• **shortened**: hacer → **har-**, decir → **dir-**.",
            "**Future of Probability**: In Spanish, the future tense expresses wonder or probability about the present (*\"¿Qué hora será?\"* = What time could it be? / *\"Serán las tres\"* = It must be about 3:00)."
          ],
          "examples": [
            {
              "spanish": "Mañana hablaré con el director y tendré una reunión.",
              "english": "Tomorrow I will speak with the director and have a meeting.",
              "audio": "Mañana hablaré con el director."
            },
            {
              "spanish": "¿Dónde estará Carlos? — Estará en su casa.",
              "english": "Where could Carlos be? — He is probably at home. (Probability)",
              "audio": "¿Dónde estará Carlos?"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9901",
          "spanish": "hablaré / hablará",
          "english": "I will speak / he will speak",
          "category": "Future Tense",
          "exampleSentence": {
            "spanish": "Hablaré con él mañana.",
            "english": "I will speak with him tomorrow."
          }
        },
        {
          "id": "v9902",
          "spanish": "tendré / tendrá",
          "english": "I will have / he will have (tener: tendr-)",
          "category": "Future Tense",
          "exampleSentence": {
            "spanish": "Tendré tiempo mañana.",
            "english": "I will have time tomorrow."
          }
        },
        {
          "id": "v9903",
          "spanish": "haré / hará",
          "english": "I will do / he will do (hacer: har-)",
          "category": "Future Tense",
          "exampleSentence": {
            "spanish": "Haré la tarea más tarde.",
            "english": "I will do the homework later."
          }
        },
        {
          "id": "v9904",
          "spanish": "diré / dirá",
          "english": "I will say / he will say (decir: dir-)",
          "category": "Future Tense",
          "exampleSentence": {
            "spanish": "Te diré la verdad.",
            "english": "I will tell you the truth."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9901",
          "front": "Simple Future endings",
          "back": "Infinitive + -é, -ás, -á, -emos, -éis, -án\n(All with accents except nosotros: -emos)",
          "category": "Future"
        },
        {
          "id": "f9902",
          "front": "Future stems of TENER, HACER, DECIR, PONER",
          "back": "tendr-, har-, dir-, pondr-",
          "category": "Future"
        }
      ],
      "exercises": [
        {
          "id": "u9-l99-ex1",
          "type": "multiple-choice",
          "prompt": "What is the simple future form of \"hacer\" for \"yo\"?",
          "explanation": "\"Hacer\" uses the irregular stem \"har-\": \"haré\".",
          "options": [
            {
              "id": "opt1",
              "text": "haré",
              "subtext": "Correct irregular future stem (har- + -é)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "haceré",
              "subtext": "Regularization error",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "hizo",
              "subtext": "Preterite tense",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "haga",
              "subtext": "Subjunctive form",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l99-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the future form of \"tener\" for \"nosotros\":",
          "sentenceBefore": "El próximo año nosotros",
          "sentenceAfter": "una nueva casa.",
          "correctAnswers": [
            "tendremos",
            "Tendremos"
          ],
          "wordBank": [
            "tendremos",
            "teneremos",
            "tenemos",
            "tendríamos"
          ],
          "hint": "Irregular stem tendr- + -emos.",
          "explanation": "\"Tener\" forms \"tendremos\" in the future for nosotros."
        },
        {
          "id": "u9-l99-ex3",
          "type": "sentence-builder",
          "prompt": "Translate: \"Tomorrow they will say the truth to the public\"",
          "targetEnglish": "Tomorrow they will say the truth to the public",
          "correctTokens": [
            "Mañana",
            "ellos",
            "dirán",
            "la",
            "verdad",
            "al",
            "público"
          ],
          "availableTokens": [
            "Mañana",
            "ellos",
            "dirán",
            "la",
            "verdad",
            "al",
            "público",
            "decirán",
            "dicen"
          ],
          "explanation": "\"Mañana ellos dirán la verdad al público.\" (Decir -> dirán)."
        }
      ]
    },
    {
      "id": "u9-l100",
      "slug": "pastpart",
      "unitId": 9,
      "order": 100,
      "title": "100. Past Participle",
      "subtitle": "Forming Participles (-ado / -ido) & Using Them as Adjectives",
      "estimatedMinutes": 10,
      "iconName": "CheckSquare",
      "summary": "Learn how to form the Past Participle (-ado for -AR, -ido for -ER/-IR), memorize the 9 irregular participles, and use them as adjectives that agree in gender and number with nouns.",
      "theory": [
        {
          "id": "u9-l100-t1",
          "title": "The Past Participle Formation & 9 Famous Irregulars",
          "summary": "-AR → -ado, -ER/-IR → -ido. 9 key verbs have irregular participles.",
          "table": {
            "headers": [
              "Infinitive",
              "Irregular Participle",
              "English Meaning",
              "Used as Adjective Example"
            ],
            "rows": [
              [
                "abrir",
                "abierto",
                "opened / open",
                "La puerta está **abierta**."
              ],
              [
                "decir",
                "dicho",
                "said / told",
                "Las palabras están **dichas**."
              ],
              [
                "escribir",
                "escrito",
                "written",
                "El libro está **escrito** en español."
              ],
              [
                "hacer",
                "hecho",
                "done / made",
                "La comida está **hecha**."
              ],
              [
                "morir",
                "muerto",
                "died / dead",
                "El perro está **muerto**."
              ],
              [
                "poner",
                "puesto",
                "put / placed",
                "La mesa está **puesta**."
              ],
              [
                "romper",
                "roto",
                "broken",
                "La ventana está **rota**."
              ],
              [
                "ver",
                "visto",
                "seen",
                "La película está **vista**."
              ],
              [
                "volver",
                "vuelto",
                "returned",
                "Ellos han **vuelto** a casa."
              ]
            ]
          },
          "content": [
            "**Agreement Rule**:",
            "• When used as an **adjective with estar/ser**, the participle MUST agree in gender and number (*\"La ventana está rota\"*, *\"Los coches están rotos\"*).",
            "• When used in compound tenses with **haber**, the participle is **INVARIABLE** and always ends in \"-o\" (*\"Ella ha comido\"*, *\"Ellas han comido\"*)."
          ],
          "examples": [
            {
              "spanish": "El documento ya está escrito y firmado.",
              "english": "The document is already written and signed.",
              "audio": "El documento ya está escrito y firmado."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10001",
          "spanish": "abierto / abierta",
          "english": "open / opened (abrir)",
          "category": "Participles",
          "exampleSentence": {
            "spanish": "La tienda está abierta.",
            "english": "The shop is open."
          }
        },
        {
          "id": "v10002",
          "spanish": "hecho / hecha",
          "english": "done / made (hacer)",
          "category": "Participles",
          "exampleSentence": {
            "spanish": "Todo está hecho.",
            "english": "Everything is done."
          }
        },
        {
          "id": "v10003",
          "spanish": "roto / rota",
          "english": "broken (romper)",
          "category": "Participles",
          "exampleSentence": {
            "spanish": "El vaso está roto.",
            "english": "The glass is broken."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10001",
          "front": "9 Irregular Past Participles",
          "back": "abierto (abrir), dicho (decir), escrito (escribir), hecho (hacer), muerto (morir), puesto (poner), roto (romper), visto (ver), vuelto (volver)",
          "category": "Participles"
        }
      ],
      "exercises": [
        {
          "id": "u9-l100-ex1",
          "type": "multiple-choice",
          "prompt": "What is the irregular past participle of \"escribir\"?",
          "explanation": "\"Escribir\" forms the irregular participle \"escrito\".",
          "options": [
            {
              "id": "opt1",
              "text": "escrito",
              "subtext": "Correct irregular participle",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "escribido",
              "subtext": "Regularization error",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "escribiendo",
              "subtext": "Present participle (gerund)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "escribió",
              "subtext": "Preterite form",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l100-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete with adjective participle agreeing with \"las puertas\" (abrir): \"The doors are open.\"",
          "sentenceBefore": "Las puertas de la tienda están",
          "sentenceAfter": "hoy.",
          "correctAnswers": [
            "abiertas",
            "Abiertas"
          ],
          "wordBank": [
            "abiertas",
            "abierto",
            "abiertos",
            "abierta"
          ],
          "hint": "Agrees with feminine plural \"las puertas\".",
          "explanation": "\"Abiertas\" agrees with feminine plural \"las puertas\"."
        }
      ]
    },
    {
      "id": "u9-l101",
      "slug": "presperfect",
      "unitId": 9,
      "order": 101,
      "title": "101. Present Perfect",
      "subtitle": "Haber + Past Participle & The Unbreakable Unit Rule",
      "estimatedMinutes": 11,
      "iconName": "Sparkles",
      "summary": "Form the Present Perfect (\"I have eaten\", \"She has arrived\") using the present tense of Haber (he, has, ha, hemos, habéis, han) + the invariable Past Participle ending in -o.",
      "theory": [
        {
          "id": "u9-l101-t1",
          "title": "The Present Perfect Structure",
          "summary": "Haber + Participio (-ado / -ido).",
          "table": {
            "headers": [
              "Pronoun",
              "Haber Present",
              "HABLAR (he hablado)",
              "COMER (he comido)",
              "VIVIR (he vivido)"
            ],
            "rows": [
              [
                "yo",
                "he",
                "he hablado",
                "he comido",
                "he vivido"
              ],
              [
                "tú",
                "has",
                "has hablado",
                "has comido",
                "has vivido"
              ],
              [
                "él / ella / usted",
                "ha",
                "ha hablado",
                "ha comido",
                "ha vivido"
              ],
              [
                "nosotros / nosotras",
                "hemos",
                "hemos hablado",
                "hemos comido",
                "hemos vivido"
              ],
              [
                "vosotros / vosotras",
                "habéis",
                "habéis hablado",
                "habéis comido",
                "habéis vivido"
              ],
              [
                "ellos / ellas / ustedes",
                "han",
                "han hablado",
                "han comido",
                "han vivido"
              ]
            ]
          },
          "content": [
            "**The Unbreakable Unit Rule**: In Spanish, nothing can ever separate *Haber* and the participle! Pronouns and \"no\" MUST precede *Haber*:",
            "• *\"Yo **lo he visto**\"* (I have seen it — NOT *\"Yo he lo visto\"*).",
            "• *\"**No hemos comido**\"* (We have not eaten — NOT *\"Hemos no comido\"*)."
          ],
          "examples": [
            {
              "spanish": "Hoy he hablado con María y hemos comido juntos.",
              "english": "Today I have spoken with Maria and we have eaten together.",
              "audio": "Hoy he hablado con María."
            },
            {
              "spanish": "¿Has visto mis llaves? — No, no las he visto.",
              "english": "Have you seen my keys? — No, I haven't seen them.",
              "audio": "¿Has visto mis llaves?"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10101",
          "spanish": "he hablado",
          "english": "I have spoken",
          "category": "Present Perfect",
          "exampleSentence": {
            "spanish": "He hablado con el profesor.",
            "english": "I have spoken with the teacher."
          }
        },
        {
          "id": "v10102",
          "spanish": "has hecho",
          "english": "you have done / made",
          "category": "Present Perfect",
          "exampleSentence": {
            "spanish": "¿Qué has hecho hoy?",
            "english": "What have you done today?"
          }
        },
        {
          "id": "v10103",
          "spanish": "ya / todavía no",
          "english": "already / not yet",
          "category": "Present Perfect",
          "exampleSentence": {
            "spanish": "Todavía no he terminado.",
            "english": "I haven't finished yet."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10101",
          "front": "Conjugation of HABER in Present Perfect",
          "back": "he, has, ha, hemos, habéis, han + Participio (-o)",
          "category": "Present Perfect"
        },
        {
          "id": "f10102",
          "front": "Can words separate Haber and the Participle?",
          "back": "NO! The unit is unbreakable. Pronouns and \"no\" go before haber: \"No lo he visto\"",
          "category": "Present Perfect"
        }
      ],
      "exercises": [
        {
          "id": "u9-l101-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"We have done all our homework\" in Spanish?",
          "explanation": "\"Hemos hecho\" uses the present of haber + irregular participle of hacer (hecho).",
          "options": [
            {
              "id": "opt1",
              "text": "Nosotros hemos hecho toda nuestra tarea.",
              "subtext": "Correct present perfect form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Nosotros hemos hacido toda nuestra tarea.",
              "subtext": "Incorrect participle",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Nosotros hacemos hecho toda nuestra tarea.",
              "subtext": "Wrong auxiliary verb",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Nosotros habemos hecho toda nuestra tarea.",
              "subtext": "Incorrect form of haber",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l101-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the present of haber for \"tú\": \"¿_______ visto a Carlos hoy?\"",
          "sentenceBefore": "¿",
          "sentenceAfter": "visto a Carlos hoy en la oficina?",
          "correctAnswers": [
            "Has",
            "has"
          ],
          "wordBank": [
            "Has",
            "Ha",
            "He",
            "Hemos"
          ],
          "hint": "Tú form of haber.",
          "explanation": "The tú form of haber is \"has\": \"¿Has visto...?\"."
        },
        {
          "id": "u9-l101-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I have not seen the movie yet\"",
          "targetEnglish": "I have not seen the movie yet",
          "correctTokens": [
            "Todavía",
            "no",
            "he",
            "visto",
            "la",
            "película"
          ],
          "availableTokens": [
            "Todavía",
            "no",
            "he",
            "visto",
            "la",
            "película",
            "veo",
            "ha"
          ],
          "explanation": "\"Todavía no he visto la película.\""
        }
      ]
    },
    {
      "id": "u9-l102",
      "slug": "pastperfect",
      "unitId": 9,
      "order": 102,
      "title": "102. Past Perfect (Pluperfect)",
      "subtitle": "Pretérito Pluscuamperfecto: Había + Participio (The \"Past of the Past\")",
      "estimatedMinutes": 10,
      "iconName": "History",
      "summary": "Express an action that had occurred prior to another moment in the past using the Imperfect of Haber (había, habías, había, habíamos, habíais, habían) + Past Participle.",
      "theory": [
        {
          "id": "u9-l102-t1",
          "title": "The Pluperfect Conjugation Formula",
          "summary": "Había + Participio expresses \"had done\".",
          "table": {
            "headers": [
              "Pronoun",
              "Haber Imperfect",
              "COMER (había comido)",
              "SALIR (había salido)"
            ],
            "rows": [
              [
                "yo",
                "había",
                "había comido",
                "había salido"
              ],
              [
                "tú",
                "habías",
                "habías comido",
                "habías salido"
              ],
              [
                "él / ella / usted",
                "había",
                "había comido",
                "había salido"
              ],
              [
                "nosotros / nosotras",
                "habíamos (accent!)",
                "habíamos comido",
                "habíamos salido"
              ],
              [
                "vosotros / vosotras",
                "habíais",
                "habíais comido",
                "habíais salido"
              ],
              [
                "ellos / ellas / ustedes",
                "habían",
                "habían comido",
                "habían salido"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Cuando llegamos al cine, la película ya había empezado.",
              "english": "When we arrived at the cinema, the movie had already started.",
              "audio": "Cuando llegamos al cine, la película ya había empezado."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10201",
          "spanish": "ya había empezado",
          "english": "had already started",
          "category": "Pluperfect",
          "exampleSentence": {
            "spanish": "La clase ya había empezado.",
            "english": "The class had already started."
          }
        },
        {
          "id": "v10202",
          "spanish": "habíamos terminado",
          "english": "we had finished",
          "category": "Pluperfect",
          "exampleSentence": {
            "spanish": "Ya habíamos terminado el trabajo.",
            "english": "We had already finished the work."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10201",
          "front": "How to form the Pluperfect (Past Perfect) in Spanish?",
          "back": "había, habías, había, habíamos, habíais, habían + Participio\n(\"I had done / had eaten\")",
          "category": "Past Perfect"
        }
      ],
      "exercises": [
        {
          "id": "u9-l102-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"When Carlos called, I had already left\" in Spanish?",
          "explanation": "\"Had already left\" is the pluperfect: \"ya había salido\".",
          "options": [
            {
              "id": "opt1",
              "text": "Cuando Carlos llamó, yo ya había salido.",
              "subtext": "Correct pluperfect + preterite sequence",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Cuando Carlos llamó, yo ya he salido.",
              "subtext": "Present perfect mismatch",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Cuando Carlos llamó, yo salí.",
              "subtext": "Simple preterite loses prior-action sense",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Cuando Carlos llamaba, yo salía.",
              "subtext": "Simultaneous imperfect",
              "isCorrect": false
            }
          ]
        }
      ]
    },
    {
      "id": "u9-l103",
      "slug": "futureperfect",
      "unitId": 9,
      "order": 103,
      "title": "103. Future Perfect",
      "subtitle": "Futuro Perfecto: Habré + Participio (\"Will Have Done\")",
      "estimatedMinutes": 10,
      "iconName": "FastForward",
      "summary": "Express what will have been completed by a future deadline (or conjecture about the recent past) using the Future of Haber (habré, habrás, habrá, habremos, habréis, habrán) + Past Participle.",
      "theory": [
        {
          "id": "u9-l103-t1",
          "title": "The Future Perfect Formula",
          "summary": "Habré + Participio.",
          "table": {
            "headers": [
              "Pronoun",
              "Haber Future",
              "TERMINAR (habré terminado)"
            ],
            "rows": [
              [
                "yo",
                "habré",
                "habré terminado"
              ],
              [
                "tú",
                "habrás",
                "habrás terminado"
              ],
              [
                "él / ella / usted",
                "habrá",
                "habrá terminado"
              ],
              [
                "nosotros / nosotras",
                "habremos",
                "habremos terminado"
              ],
              [
                "vosotros / vosotras",
                "habréis",
                "habréis terminado"
              ],
              [
                "ellos / ellas / ustedes",
                "habrán",
                "habrán terminado"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Para las cinco de la tarde, habré terminado el proyecto.",
              "english": "By 5:00 PM, I will have finished the project.",
              "audio": "Para las cinco de la tarde, habré terminado el proyecto."
            },
            {
              "spanish": "¿Dónde está Juan? — Habrá salido a almorzar.",
              "english": "Where is Juan? — He must have gone out for lunch. (Past probability)",
              "audio": "¿Dónde está Juan?"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10301",
          "spanish": "para mañana",
          "english": "by tomorrow",
          "category": "Future Perfect",
          "exampleSentence": {
            "spanish": "Para mañana habré terminado.",
            "english": "By tomorrow I will have finished."
          }
        },
        {
          "id": "v10302",
          "spanish": "habrá llegado",
          "english": "must have arrived (probability)",
          "category": "Future Perfect",
          "exampleSentence": {
            "spanish": "Ya habrá llegado a Madrid.",
            "english": "He must have arrived in Madrid by now."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10301",
          "front": "Formula for Future Perfect (\"will have done\")",
          "back": "habré, habrás, habrá, habremos, habréis, habrán + Participio",
          "category": "Future Perfect"
        }
      ],
      "exercises": [
        {
          "id": "u9-l103-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"By next Friday, we will have graduated\" in Spanish?",
          "explanation": "\"We will have graduated\" is the future perfect: \"nos habremos graduado\".",
          "options": [
            {
              "id": "opt1",
              "text": "Para el próximo viernes, nos habremos graduado.",
              "subtext": "Correct future perfect form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Para el próximo viernes, nos hemos graduado.",
              "subtext": "Present perfect",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Para el próximo viernes, nos graduamos.",
              "subtext": "Present indicative",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Para el próximo viernes, nos habíamos graduado.",
              "subtext": "Pluperfect",
              "isCorrect": false
            }
          ]
        }
      ]
    },
    {
      "id": "u9-l104",
      "slug": "conditional",
      "unitId": 9,
      "order": 104,
      "title": "104. Conditional",
      "subtitle": "The Simple Conditional Mood (Infinitive + -ía)",
      "estimatedMinutes": 11,
      "iconName": "Compass",
      "summary": "Learn how to form the Simple Conditional mood (\"would\") by adding -ía, -ías, -ía, -íamos, -íais, -ían to the infinitive (using the same 12 irregular stems as the future tense). Master polite requests like \"¿Podría usted...?\" and \"Me gustaría...\".",
      "theory": [
        {
          "id": "u9-l104-t1",
          "title": "Simple Conditional Conjugation Formula",
          "summary": "Infinitive + -ía, -ías, -ía, -íamos, -íais, -ían (All forms carry a written accent on \"í\"!).",
          "table": {
            "headers": [
              "Pronoun",
              "Ending",
              "HABLAR",
              "COMER",
              "TENER (tendr-)",
              "HACER (har-)"
            ],
            "rows": [
              [
                "yo",
                "-ía",
                "hablaría",
                "comería",
                "tendría",
                "haría"
              ],
              [
                "tú",
                "-ías",
                "hablarías",
                "comerías",
                "tendrías",
                "harías"
              ],
              [
                "él / ella / usted",
                "-ía",
                "hablaría",
                "comería",
                "tendría",
                "haría"
              ],
              [
                "nosotros / nosotras",
                "-íamos",
                "hablaríamos",
                "comeríamos",
                "tendríamos",
                "haríamos"
              ],
              [
                "vosotros / vosotras",
                "-íais",
                "hablaríais",
                "comeríais",
                "tendríais",
                "haríais"
              ],
              [
                "ellos / ellas / ustedes",
                "-ían",
                "hablarían",
                "comerían",
                "tendrían",
                "harían"
              ]
            ]
          },
          "content": [
            "**Key Pragmatic Uses**:",
            "• **Polite Requests**: *\"¿Podría usted ayudarme?\"* (Could you help me?) | *\"Me gustaría un café\"* (I would like a coffee).",
            "• **Hypothetical Statements**: *\"Yo viajaría por el mundo\"* (I would travel the world)."
          ],
          "examples": [
            {
              "spanish": "Me gustaría reservar una mesa para dos personas.",
              "english": "I would like to reserve a table for two. (Polite request)",
              "audio": "Me gustaría reservar una mesa para dos personas."
            },
            {
              "spanish": "Yo compraría esa casa si tuviera dinero.",
              "english": "I would buy that house if I had money.",
              "audio": "Yo compraría esa casa si tuviera dinero."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10401",
          "spanish": "me gustaría",
          "english": "I would like",
          "category": "Conditional",
          "exampleSentence": {
            "spanish": "Me gustaría viajar a España.",
            "english": "I would like to travel to Spain."
          }
        },
        {
          "id": "v10402",
          "spanish": "¿podría usted...?",
          "english": "could you please...?",
          "category": "Conditional",
          "exampleSentence": {
            "spanish": "¿Podría usted cerrar la puerta?",
            "english": "Could you close the door?"
          }
        },
        {
          "id": "v10403",
          "spanish": "haría / diría",
          "english": "I would do / I would say",
          "category": "Conditional",
          "exampleSentence": {
            "spanish": "Yo haría lo mismo.",
            "english": "I would do the same."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10401",
          "front": "Simple Conditional endings",
          "back": "Infinitive + -ía, -ías, -ía, -íamos, -íais, -ían\n(All forms have written accents on \"í\"!)",
          "category": "Conditional"
        }
      ],
      "exercises": [
        {
          "id": "u9-l104-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"I would like to speak with the doctor\" in Spanish?",
          "explanation": "\"Me gustaría hablar con el doctor\".",
          "options": [
            {
              "id": "opt1",
              "text": "Me gustaría hablar con el doctor.",
              "subtext": "Correct polite conditional phrase",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Me gustará hablar con el doctor.",
              "subtext": "Future tense",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Me gusta hablar con el doctor.",
              "subtext": "Present tense",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Me gustaba hablar con el doctor.",
              "subtext": "Imperfect tense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l104-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the conditional of \"hacer\" for \"yo\": \"In your place, I would do the same.\"",
          "sentenceBefore": "En tu lugar, yo",
          "sentenceAfter": "lo mismo.",
          "correctAnswers": [
            "haría",
            "Haría"
          ],
          "wordBank": [
            "haría",
            "hacería",
            "hice",
            "haga"
          ],
          "hint": "Irregular stem har- + -ía.",
          "explanation": "\"Hacer\" forms \"haría\" in the conditional."
        }
      ]
    },
    {
      "id": "u9-l105",
      "slug": "imperfect-subjunctive",
      "unitId": 9,
      "order": 105,
      "title": "105. Imperfect Subjunctive I",
      "subtitle": "The 3-Step Derivation Formula (Preterite Ellos minus -ron + -ra)",
      "estimatedMinutes": 11,
      "iconName": "Zap",
      "summary": "Learn the universal formula for the Imperfect Subjunctive: take the 3rd person plural of the Preterite (ellos hablaron, comieron, tuvieron), drop \"-ron\", and add -ra, -ras, -ra, -́ramos (accent!), -rais, -ran.",
      "theory": [
        {
          "id": "u9-l105-t1",
          "title": "The Universal Imperfect Subjunctive Formula",
          "summary": "1. Preterite Ellos → 2. Drop \"-ron\" → 3. Add -ra endings!",
          "table": {
            "headers": [
              "Infinitive",
              "Preterite Ellos",
              "Root (Drop -ron)",
              "Imperfect Subjunctive Forms (yo / tú / él / nos / ellos)"
            ],
            "rows": [
              [
                "hablar",
                "hablaron",
                "habla-",
                "hablara, hablaras, hablara, **habláramos**, hablaran"
              ],
              [
                "comer",
                "comieron",
                "comie-",
                "comiera, comieras, comiera, **comiéramos**, comieran"
              ],
              [
                "tener (irreg)",
                "tuvieron",
                "tuvie-",
                "tuviera, tuvieras, tuviera, **tuviéramos**, tuvieran"
              ],
              [
                "hacer (irreg)",
                "hicieron",
                "hicie-",
                "hiciera, hicieras, hiciera, **hiciéramos**, hicieran"
              ],
              [
                "ser / ir (irreg)",
                "fueron",
                "fue-",
                "fuera, fueras, fuera, **fuéramos**, fueran"
              ],
              [
                "decir (irreg)",
                "dijeron",
                "dije-",
                "dijera, dijeras, dijera, **dijéramos**, dijeran"
              ]
            ]
          },
          "content": [
            "**Mandatory Accent on Nosotros Form**: The nosotros form of the imperfect subjunctive ALWAYS carries a written accent on the vowel immediately preceding *-́ramos* (*habláramos, comiéramos, tuviéramos, fuéramos*)."
          ],
          "examples": [
            {
              "spanish": "Si yo tuviera dinero, viajaría por el mundo.",
              "english": "If I had money, I would travel the world. (tener: tuviera)",
              "audio": "Si yo tuviera dinero, viajaría por el mundo."
            },
            {
              "spanish": "Si yo fuera tú, estudiaría más.",
              "english": "If I were you, I would study more. (ser: fuera)",
              "audio": "Si yo fuera tú, estudiaría más."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10501",
          "spanish": "tuviera / tuvieras",
          "english": "had (imperfect subjunctive: tener)",
          "category": "Imperfect Subjunctive",
          "exampleSentence": {
            "spanish": "Si tuviera tiempo, iría.",
            "english": "If I had time, I would go."
          }
        },
        {
          "id": "v10502",
          "spanish": "fuera / fueras",
          "english": "were / went (imperfect subjunctive: ser/ir)",
          "category": "Imperfect Subjunctive",
          "exampleSentence": {
            "spanish": "Si fuera rico, compraría un barco.",
            "english": "If I were rich, I would buy a boat."
          }
        },
        {
          "id": "v10503",
          "spanish": "hiciera",
          "english": "did / made (imperfect subjunctive: hacer)",
          "category": "Imperfect Subjunctive",
          "exampleSentence": {
            "spanish": "Si hiciera sol, saldríamos.",
            "english": "If it were sunny, we would go out."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10501",
          "front": "How to form the Imperfect Subjunctive?",
          "back": "1. Take 3rd plural Preterite (ellos hablaron, tuvieron)\n2. Drop \"-ron\"\n3. Add -ra, -ras, -ra, -́ramos, -rais, -ran",
          "category": "Imperfect Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u9-l105-ex1",
          "type": "multiple-choice",
          "prompt": "What is the imperfect subjunctive of \"tener\" for \"yo\"?",
          "explanation": "Preterite ellos: \"tuvieron\" → drop \"-ron\" → \"tuvie-\" + \"-ra\" = \"tuviera\".",
          "options": [
            {
              "id": "opt1",
              "text": "tuviera",
              "subtext": "Correct imperfect subjunctive form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "tenga",
              "subtext": "Present subjunctive form",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "teniera",
              "subtext": "Regularization error (missed preterite root)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "tuvieseis",
              "subtext": "Vosotros form",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l105-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the imperfect subjunctive of \"ser\" for \"yo\": \"Si yo _______ (ser) tú, descansaría.\"",
          "sentenceBefore": "Si yo",
          "sentenceAfter": "tú, descansaría todo el fin de semana.",
          "correctAnswers": [
            "fuera",
            "Fuera"
          ],
          "wordBank": [
            "fuera",
            "sea",
            "era",
            "fui"
          ],
          "hint": "Preterite ellos fueron → fuera.",
          "explanation": "\"Ser\" in the imperfect subjunctive is \"fuera\"."
        }
      ]
    },
    {
      "id": "u9-l106",
      "slug": "imperfect-subjunctive-ii",
      "unitId": 9,
      "order": 106,
      "title": "106. Imperfect Subjunctive II",
      "subtitle": "Sequence of Tenses in Past WEIRDO Subordinate Clauses",
      "estimatedMinutes": 10,
      "iconName": "GitBranch",
      "summary": "Master the Spanish Sequence of Tenses (La concordancia de tiempos): when the main clause verb is in any past tense (Preterite, Imperfect, Pluperfect) or Conditional, the subordinate clause MUST be in the Imperfect Subjunctive.",
      "theory": [
        {
          "id": "u9-l106-t1",
          "title": "The Sequence of Tenses Matrix",
          "summary": "Present triggers Present Subjunctive; Past triggers Imperfect Subjunctive.",
          "table": {
            "headers": [
              "Main Clause Tense",
              "Trigger Example",
              "Subordinate Mood & Tense",
              "Full Sentence Example"
            ],
            "rows": [
              [
                "Present / Future",
                "Mi madre **quiere** que...",
                "PRESENT Subjunctive",
                "Mi madre quiere que yo **estudie**."
              ],
              [
                "Preterite / Imperfect",
                "Mi madre **quería** que...",
                "IMPERFECT Subjunctive",
                "Mi madre quería que yo **estudiara**."
              ],
              [
                "Past Doubt",
                "Yo **dudaba** que...",
                "IMPERFECT Subjunctive",
                "Yo dudaba que él **supiera** la verdad."
              ],
              [
                "Past Emotion",
                "Me **alegré** de que...",
                "IMPERFECT Subjunctive",
                "Me alegré de que tú **estuvieras** aquí."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "El profesor nos mandó que leyéramos el libro.",
              "english": "The teacher ordered us to read the book. (Preterite mandó → Imp. Subjunctive leyéramos)",
              "audio": "El profesor nos mandó que leyéramos el libro."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10601",
          "spanish": "quería que estudiara",
          "english": "wanted me to study",
          "category": "Sequence of Tenses",
          "exampleSentence": {
            "spanish": "Ella quería que yo estudiara.",
            "english": "She wanted me to study."
          }
        },
        {
          "id": "v10602",
          "spanish": "dudaba que supiera",
          "english": "doubted that he knew",
          "category": "Sequence of Tenses",
          "exampleSentence": {
            "spanish": "Dudaba que él lo supiera.",
            "english": "I doubted he knew it."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10601",
          "front": "Sequence of tenses rule",
          "back": "Main verb in Past (quería, dudé, fue necesario) → Subordinate verb in IMPERFECT SUBJUNCTIVE (estudiara, viniera, fuera)",
          "category": "Sequence of Tenses"
        }
      ],
      "exercises": [
        {
          "id": "u9-l106-ex1",
          "type": "multiple-choice",
          "prompt": "Which form completes: \"Ayer mi jefe me pidió que yo _______ (hacer) el informe\"?",
          "explanation": "Main clause is past preterite (\"pidió\"), so the subordinate verb must be in the imperfect subjunctive: \"hiciera\".",
          "options": [
            {
              "id": "opt1",
              "text": "hiciera",
              "subtext": "Correct imperfect subjunctive for past sequence",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "haga",
              "subtext": "Present subjunctive (only for present main clause)",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "hice",
              "subtext": "Preterite indicative",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "haré",
              "subtext": "Future indicative",
              "isCorrect": false
            }
          ]
        }
      ]
    },
    {
      "id": "u9-l107",
      "slug": "imperfect-subjunctive-iii",
      "unitId": 9,
      "order": 107,
      "title": "107. Imperfect Subjunctive III: \"Si\" Clauses",
      "subtitle": "Contrary-to-Fact & Hypothetical Conditional Sentences",
      "estimatedMinutes": 11,
      "iconName": "Shuffle",
      "summary": "Master the crown jewel of conditional sentences: the contrary-to-fact hypothetical blueprint combining \"Si + Imperfecto de Subjuntivo\" with the \"Condicional Simple\" (\"If I had money, I would travel\").",
      "theory": [
        {
          "id": "u9-l107-t1",
          "title": "The 3 Types of \"Si\" Clauses in Spanish",
          "summary": "Understand real vs contrary-to-fact conditions.",
          "table": {
            "headers": [
              "Condition Type",
              "\"Si\" Clause (Condition)",
              "Main Clause (Result)",
              "Example"
            ],
            "rows": [
              [
                "Type 1: Real / Possible",
                "Si + Presente de Indicativo",
                "Futuro / Presente / Mandato",
                "Si **tengo** dinero, **compraré** el coche."
              ],
              [
                "Type 2: Hypothetical / Contrary-to-Fact",
                "Si + IMPERFECTO DE SUBJUNTIVO",
                "CONDICIONAL SIMPLE",
                "Si **tuviera** dinero, **compraría** el coche."
              ],
              [
                "Type 2 Inverted Order",
                "CONDICIONAL SIMPLE",
                "si + IMPERFECTO DE SUBJUNTIVO",
                "**Compraría** el coche si **tuviera** dinero."
              ]
            ]
          },
          "content": [
            "**The Golden Rule of \"Si\" Clauses**: In Spanish, the word **\"si\" (if) is NEVER followed by the Present Subjunctive or Conditional!** It is always paired with the Imperfect Subjunctive in hypothetical sentences (*\"Si tuviera...\", \"Si fuera...\"*)."
          ],
          "examples": [
            {
              "spanish": "Si yo tuviera más tiempo libre, aprendería a tocar la guitarra.",
              "english": "If I had more free time, I would learn to play the guitar.",
              "audio": "Si yo tuviera más tiempo libre, aprendería a tocar la guitarra."
            },
            {
              "spanish": "Si nosotros viviéramos en Madrid, hablaríamos español todos los días.",
              "english": "If we lived in Madrid, we would speak Spanish every day.",
              "audio": "Si nosotros viviéramos en Madrid, hablaríamos español todos los días."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10701",
          "spanish": "si tuviera dinero",
          "english": "if I had money",
          "category": "Si Clauses",
          "exampleSentence": {
            "spanish": "Si tuviera dinero, viajaría.",
            "english": "If I had money, I would travel."
          }
        },
        {
          "id": "v10702",
          "spanish": "si fuera tú",
          "english": "if I were you",
          "category": "Si Clauses",
          "exampleSentence": {
            "spanish": "Si fuera tú, estudiaría.",
            "english": "If I were you, I would study."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10701",
          "front": "Hypothetical \"Si\" Clause Blueprint",
          "back": "Si + [Imperfecto de Subjuntivo], [Condicional Simple]\n\"Si tuviera dinero, viajaría por el mundo\"",
          "category": "Si Clauses"
        }
      ],
      "exercises": [
        {
          "id": "u9-l107-ex1",
          "type": "multiple-choice",
          "prompt": "Which sentence correctly expresses the hypothetical condition: \"If I had money, I would buy that car\"?",
          "explanation": "Blueprint: Si + Imperfect Subjunctive (tuviera) + Conditional (compraría).",
          "options": [
            {
              "id": "opt1",
              "text": "Si yo tuviera dinero, compraría ese coche.",
              "subtext": "Correct hypothetical \"Si\" clause formula",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Si yo tendría dinero, compraría ese coche.",
              "subtext": "Never use conditional right after \"si\"",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Si yo tenga dinero, compraré ese coche.",
              "subtext": "Never use present subjunctive right after \"si\"",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Si yo tuviera dinero, compré ese coche.",
              "subtext": "Preterite mismatch",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l107-ex2",
          "type": "sentence-builder",
          "prompt": "Translate: \"If I were you, I would not do that\"",
          "targetEnglish": "If I were you, I would not do that",
          "correctTokens": [
            "Si",
            "yo",
            "fuera",
            "tú",
            "no",
            "haría",
            "eso"
          ],
          "availableTokens": [
            "Si",
            "yo",
            "fuera",
            "tú",
            "no",
            "haría",
            "eso",
            "sería",
            "hago"
          ],
          "explanation": "\"Si yo fuera tú, no haría eso.\""
        }
      ]
    },
    {
      "id": "u9-l108",
      "slug": "rules-of-accentuation",
      "unitId": 9,
      "order": 108,
      "title": "108. Rules of Accentuation",
      "subtitle": "The 4 Word Classes (Agudas, Llanas, Esdrújulas) & Diacritical Accents",
      "estimatedMinutes": 11,
      "iconName": "BookOpen",
      "summary": "Master the formal rules governing written accent marks (la tilde) in Spanish: word stress classification (Agudas, Llanas, Esdrújulas) and diacritical accents that distinguish word meanings.",
      "theory": [
        {
          "id": "u9-l108-t1",
          "title": "The 3 Main Stress Rules in Spanish",
          "summary": "Natural stress vs when a written accent (tilde) is required.",
          "table": {
            "headers": [
              "Classification",
              "Stress Position",
              "When is written accent (tilde) required?",
              "Examples"
            ],
            "rows": [
              [
                "1. Agudas",
                "Last syllable (última)",
                "When word ends in VOWEL, -N, or -S",
                "habló, café, corazón, compás (No accent: papel, hablar)"
              ],
              [
                "2. Llanas / Graves",
                "2nd to last (penúltima)",
                "When word ends in CONSONANT other than -N or -S",
                "fácil, lápiz, árbol (No accent: mesa, comen, casas)"
              ],
              [
                "3. Esdrújulas",
                "3rd to last (antepenúltima)",
                "ALWAYS carries a written accent!",
                "médico, música, pájaro, rápido"
              ],
              [
                "4. Sobresdrújulas",
                "4th to last",
                "ALWAYS carries a written accent!",
                "dígamelo, cómpratelo, fácilmente"
              ]
            ]
          },
          "content": [
            "**Diacritical Accents (La tilde diacrítica)**: Distinguishes words that sound identical but have different grammatical functions:",
            "• **él** (he) vs **el** (the) | **tú** (you) vs **tu** (your) | **mí** (me) vs **mi** (my).",
            "• **sí** (yes) vs **si** (if) | **té** (tea) vs **te** (you pronoun) | **más** (more) vs **mas** (but).",
            "• **¿Qué? / ¿Dónde?** (questions/exclamations) vs **que / donde** (relative pronouns)."
          ],
          "examples": [
            {
              "spanish": "Él toma té en su casa si tú quieres.",
              "english": "He drinks tea at his house if you want. (Diacritical accents: él, té, tú)",
              "audio": "Él toma té en su casa si tú quieres."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v10801",
          "spanish": "la tilde",
          "english": "the written accent mark",
          "category": "Accentuation",
          "exampleSentence": {
            "spanish": "Esta palabra lleva tilde.",
            "english": "This word carries an accent mark."
          }
        },
        {
          "id": "v10802",
          "spanish": "palabra aguda",
          "english": "word stressed on last syllable",
          "category": "Accentuation",
          "exampleSentence": {
            "spanish": "Corazón es una palabra aguda.",
            "english": "Corazón is an aguda word."
          }
        },
        {
          "id": "v10803",
          "spanish": "palabra llana / grave",
          "english": "word stressed on penultimate syllable",
          "category": "Accentuation",
          "exampleSentence": {
            "spanish": "Mesa es una palabra llana.",
            "english": "Mesa is a llana word."
          }
        },
        {
          "id": "v10804",
          "spanish": "palabra esdrújula",
          "english": "word stressed on antepenultimate syllable",
          "category": "Accentuation",
          "exampleSentence": {
            "spanish": "Música es una palabra esdrújula.",
            "english": "Música is an esdrújula word."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f10801",
          "front": "Accent rule for Esdrújulas words",
          "back": "Stressed on the 3rd-to-last syllable → ALWAYS carries a written accent! (médico, música, pájaro)",
          "category": "Accentuation"
        },
        {
          "id": "f10802",
          "front": "When do Agudas words carry an accent?",
          "back": "When stressed on the LAST syllable and ending in a VOWEL, -N, or -S (habló, corazón, compás)",
          "category": "Accentuation"
        }
      ],
      "exercises": [
        {
          "id": "u9-l108-ex1",
          "type": "multiple-choice",
          "prompt": "Why does the word \"médico\" carry a written accent mark?",
          "explanation": "\"Médico\" is an esdrújula word (stressed on 3rd-to-last syllable) and all esdrújulas always carry an accent.",
          "options": [
            {
              "id": "opt1",
              "text": "It is an esdrújula word (stressed on 3rd-to-last syllable)",
              "subtext": "All esdrújulas always carry an accent",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "It is an aguda word ending in vowel",
              "subtext": "Incorrect classification",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Because of diacritical distinction",
              "subtext": "Incorrect",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Because it ends in -o",
              "subtext": "Incorrect",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l108-ex2",
          "type": "multiple-choice",
          "prompt": "Which pair correctly demonstrates the diacritical accent distinction between \"he\" and \"the\"?",
          "explanation": "\"Él\" with an accent means \"he\" (pronoun), while \"el\" without an accent means \"the\" (definite article).",
          "options": [
            {
              "id": "opt1",
              "text": "Él (he) vs el (the)",
              "subtext": "Correct diacritical accent pair",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "El (he) vs él (the)",
              "subtext": "Inverted",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Tu (you) vs tú (your)",
              "subtext": "Inverted",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Si (yes) vs sí (if)",
              "subtext": "Inverted",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u9-l108-ex3",
          "type": "matching-pairs",
          "prompt": "Match each Spanish word to its correct accentuation category:",
          "explanation": "Categorizing words by stress rules.",
          "pairs": [
            {
              "id": "p1",
              "left": "corazón / habló",
              "right": "Aguda (accented on last syllable)"
            },
            {
              "id": "p2",
              "left": "fácil / árbol",
              "right": "Llana (accented on 2nd-to-last syllable)"
            },
            {
              "id": "p3",
              "left": "música / médico",
              "right": "Esdrújula (always accented)"
            },
            {
              "id": "p4",
              "left": "dígamelo",
              "right": "Sobresdrújula (always accented)"
            }
          ]
        }
      ]
    }
  ],
  "masteryExam": {
    "id": "unit-9-exam",
    "title": "Unit 9 Comprehensive Mastery Exam",
    "description": "Test your complete mastery of Unit 9: Simple Future, Past Participles, Present Perfect, Pluperfect, Future Perfect, Conditional, Imperfect Subjunctive (formation & sequence of tenses), contrary-to-fact \"Si\" clauses, and the Rules of Accentuation.",
    "passingScore": 80,
    "exercises": [
      {
        "id": "u9-exam-ex1",
        "type": "multiple-choice",
        "prompt": "What is the simple future form of \"tener\" for \"yo\"?",
        "explanation": "\"Tener\" uses the irregular stem \"tendr-\": \"tendré\".",
        "options": [
          {
            "id": "opt1",
            "text": "tendré",
            "subtext": "Correct irregular future stem (tendr- + -é)",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "teneré",
            "subtext": "Regularization error",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "tuve",
            "subtext": "Preterite tense",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "tenga",
            "subtext": "Subjunctive form",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u9-exam-ex2",
        "type": "fill-in-blank",
        "prompt": "Fill in the irregular past participle of \"hacer\": \"Todo está _______.\"",
        "sentenceBefore": "Todo el trabajo ya está",
        "sentenceAfter": "por el equipo.",
        "correctAnswers": [
          "hecho",
          "Hecho"
        ],
        "wordBank": [
          "hecho",
          "hacido",
          "haciendo",
          "hizo"
        ],
        "hint": "Irregular participle of hacer.",
        "explanation": "\"Hacer\" forms the irregular participle \"hecho\"."
      },
      {
        "id": "u9-exam-ex3",
        "type": "multiple-choice",
        "prompt": "Which sentence correctly expresses: \"If I had money, I would travel\"?",
        "explanation": "Formula: Si + Imperfect Subjunctive (tuviera) + Conditional (viajaría).",
        "options": [
          {
            "id": "opt1",
            "text": "Si yo tuviera dinero, viajaría por el mundo.",
            "subtext": "Correct hypothetical conditional formula",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Si yo tendría dinero, viajaría por el mundo.",
            "subtext": "Never use conditional after \"si\"",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Si yo tenga dinero, viajaré por el mundo.",
            "subtext": "Never use present subjunctive after \"si\"",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Si yo tuviera dinero, viajé por el mundo.",
            "subtext": "Preterite mismatch",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u9-exam-ex4",
        "type": "fill-in-blank",
        "prompt": "Fill in the present of haber for \"nosotros\": \"Nosotros _______ comido paella hoy.\"",
        "sentenceBefore": "Nosotros",
        "sentenceAfter": "comido una paella deliciosa hoy.",
        "correctAnswers": [
          "hemos",
          "Hemos"
        ],
        "wordBank": [
          "hemos",
          "habemos",
          "han",
          "he"
        ],
        "hint": "Nosotros form of haber.",
        "explanation": "The nosotros form of haber is \"hemos\"."
      },
      {
        "id": "u9-exam-ex5",
        "type": "multiple-choice",
        "prompt": "Why does \"música\" carry a written accent mark?",
        "explanation": "\"Música\" is an esdrújula word (stressed on 3rd-to-last syllable) and all esdrújulas always carry an accent.",
        "options": [
          {
            "id": "opt1",
            "text": "It is an esdrújula word (all esdrújulas carry a written accent)",
            "subtext": "Correct accentuation rule",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Because it is a feminine noun",
            "subtext": "Incorrect",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "It is an aguda word ending in a vowel",
            "subtext": "Incorrect",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Because of diacritical distinction",
            "subtext": "Incorrect",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u9-exam-ex6",
        "type": "sentence-builder",
        "prompt": "Translate: \"When we arrived, the train had already left\"",
        "targetEnglish": "When we arrived, the train had already left",
        "correctTokens": [
          "Cuando",
          "llegamos",
          "el",
          "tren",
          "ya",
          "había",
          "salido"
        ],
        "availableTokens": [
          "Cuando",
          "llegamos",
          "el",
          "tren",
          "ya",
          "había",
          "salido",
          "ha",
          "salía"
        ],
        "explanation": "\"Cuando llegamos, el tren ya había salido.\""
      },
      {
        "id": "u9-exam-ex7",
        "type": "fill-in-blank",
        "prompt": "Fill in the conditional of \"gustar\" in the polite phrase: \"Me _______ (gustar) un café.\"",
        "sentenceBefore": "Por favor, me",
        "sentenceAfter": "un café con leche.",
        "correctAnswers": [
          "gustaría",
          "Gustaría"
        ],
        "wordBank": [
          "gustaría",
          "gustará",
          "gusta",
          "gustaba"
        ],
        "hint": "Conditional polite form.",
        "explanation": "\"Me gustaría un café con leche\"."
      },
      {
        "id": "u9-exam-ex8",
        "type": "multiple-choice",
        "prompt": "What is the imperfect subjunctive form of \"ser\" for \"nosotros\"?",
        "explanation": "\"Ser\" forms \"fuéramos\" with a mandatory written accent on the \"e\".",
        "options": [
          {
            "id": "opt1",
            "text": "fuéramos",
            "subtext": "Correct form with mandatory written accent",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "fueramos",
            "subtext": "Missing mandatory written accent",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "seamos",
            "subtext": "Present subjunctive form",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "éramos",
            "subtext": "Imperfect indicative form",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u9-exam-ex9",
        "type": "matching-pairs",
        "prompt": "Match each sentence to its corresponding compound tense:",
        "explanation": "Reviewing compound and conditional tenses.",
        "pairs": [
          {
            "id": "p1",
            "left": "Hoy he comido paella.",
            "right": "Present Perfect (he comido)"
          },
          {
            "id": "p2",
            "left": "Ya había salido cuando llegaste.",
            "right": "Pluperfect / Past Perfect (había salido)"
          },
          {
            "id": "p3",
            "left": "Para mañana habré terminado.",
            "right": "Future Perfect (habré terminado)"
          },
          {
            "id": "p4",
            "left": "Yo compraría esa casa.",
            "right": "Simple Conditional (compraría)"
          }
        ]
      },
      {
        "id": "u9-exam-ex10",
        "type": "error-identification",
        "prompt": "Find the mistake in this sentence:",
        "incorrectSentence": "Si yo tendría más dinero, viajaría por todo el mundo.",
        "errorWord": "tendría",
        "options": [
          "tuviera",
          "tenga",
          "tuve",
          "tuvieseis"
        ],
        "correctOption": "tuviera",
        "explanation": "In hypothetical \"Si\" clauses, \"si\" must be followed by the Imperfect Subjunctive (\"tuviera\"), NEVER the Conditional."
      }
    ]
  }
};
