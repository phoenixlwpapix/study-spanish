import type { Unit } from './types';

export const unit6: Unit = {
  "id": 6,
  "title": "Unit 6: Preterite vs. Imperfect (Past Tenses)",
  "subtitle": "Lessons 62–74: The Complete Guide to Narrating the Past in Spanish",
  "description": "Master the crown jewel of Spanish grammar across all 13 official lessons: the dual past tense system (Preterite vs. Imperfect), regular and irregular conjugations, spelling changes, sandal verbs, vowel-clash verbs, meaning-shift verbs, twin irregulars (ser/ir, dar/ver), and irregular stems (U, I, J groups).",
  "iconName": "History",
  "colorTheme": "purple",
  "isAvailable": true,
  "lessons": [
    {
      "id": "u6-l62",
      "slug": "pretimp1",
      "unitId": 6,
      "order": 62,
      "title": "62. Pret. vs Imp. I",
      "subtitle": "The Fundamental Concept: S.I.M.B.A. vs. C.H.E.A.T.E.D.",
      "estimatedMinutes": 11,
      "iconName": "Scale",
      "summary": "Spanish separates the past into two tenses: the Preterite for completed historical events (snapshots) and the Imperfect for ongoing habits, descriptions, and background setting (video background).",
      "theory": [
        {
          "id": "u6-l62-t1",
          "title": "The Preterite (S.I.M.B.A.) vs Imperfect (C.H.E.A.T.E.D.)",
          "summary": "Use SIMBA for the Preterite (definite actions) and CHEATED for the Imperfect (continuous/background).",
          "ruleHighlights": [
            {
              "label": "PRETERITE (S.I.M.B.A.)",
              "description": "Single action, Interruption, Main event, Beginning/End, Action completed",
              "color": "indigo"
            },
            {
              "label": "IMPERFECT (C.H.E.A.T.E.D.)",
              "description": "Continuous habit, Health/Emotion, Age, Time, Weather, Description",
              "color": "emerald"
            }
          ],
          "table": {
            "headers": [
              "Category",
              "Preterite (Pretérito Indefinido)",
              "Imperfect (Pretérito Imperfecto)"
            ],
            "rows": [
              [
                "Mental Analogy",
                "A snapshot photo of a finished action 📸",
                "A running video reel / background music 🎥"
              ],
              [
                "Action Focus",
                "Beginning, end, or total completion of an event",
                "Ongoing duration, repetition, or background state"
              ],
              [
                "Key Triggers",
                "ayer, anoche, el año pasado, de repente, una vez",
                "siempre, todos los días, a menudo, mientras, de niño"
              ],
              [
                "Example",
                "Ayer compré un coche (Yesterday I bought a car)",
                "De niño jugaba al fútbol (As a child I used to play)"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Ayer hablé con mi profesor de español.",
              "english": "Yesterday I spoke with my Spanish teacher. (Preterite → completed event)",
              "audio": "Ayer hablé con mi profesor de español."
            },
            {
              "spanish": "Cuando era niño, siempre comía helado.",
              "english": "When I was a child, I always used to eat ice cream. (Imperfect → childhood habit)",
              "audio": "Cuando era niño, siempre comía helado."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6201",
          "spanish": "ayer",
          "english": "yesterday (Preterite trigger)",
          "category": "Time Triggers",
          "exampleSentence": {
            "spanish": "Ayer salí temprano.",
            "english": "Yesterday I left early."
          }
        },
        {
          "id": "v6202",
          "spanish": "anoche",
          "english": "last night (Preterite trigger)",
          "category": "Time Triggers",
          "exampleSentence": {
            "spanish": "Anoche cené con amigos.",
            "english": "Last night I had dinner with friends."
          }
        },
        {
          "id": "v6203",
          "spanish": "de repente",
          "english": "suddenly (Preterite trigger)",
          "category": "Time Triggers",
          "exampleSentence": {
            "spanish": "De repente sonó la alarma.",
            "english": "Suddenly the alarm went off."
          }
        },
        {
          "id": "v6204",
          "spanish": "todos los días",
          "english": "every day (Imperfect trigger)",
          "category": "Time Triggers",
          "exampleSentence": {
            "spanish": "Estudiaba todos los días.",
            "english": "I used to study every day."
          }
        },
        {
          "id": "v6205",
          "spanish": "mientras",
          "english": "while (Imperfect trigger)",
          "category": "Time Triggers",
          "exampleSentence": {
            "spanish": "Mientras yo leía, él cocinaba.",
            "english": "While I was reading, he was cooking."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6201",
          "front": "Preterite vs Imperfect Mnemonic",
          "back": "Preterite = S.I.M.B.A. (Single action, Interruption, Main event, Beginning/End, Action completed)\nImperfect = C.H.E.A.T.E.D. (Continuous habit, Health, Emotion, Age, Time, Weather, Description)",
          "category": "Past Tenses"
        },
        {
          "id": "f6202",
          "front": "Ayer & anoche trigger which tense?",
          "back": "PRETERITE (Completed past event)",
          "category": "Past Tenses"
        }
      ],
      "exercises": [
        {
          "id": "u6-l62-ex1",
          "type": "multiple-choice",
          "prompt": "Which tense is required for: \"Yesterday I arrived at the airport at 3:00 PM\"?",
          "explanation": "A specific completed event that took place at a defined moment requires the PRETERITE.",
          "options": [
            {
              "id": "opt1",
              "text": "Preterite (Ayer llegué al aeropuerto)",
              "subtext": "Specific completed event",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Imperfect (Ayer llegaba al aeropuerto)",
              "subtext": "Imperfect is for ongoing states/habits",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Present tense",
              "subtext": "Incorrect tense",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Future tense",
              "subtext": "Incorrect tense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l62-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the trigger word for simultaneous ongoing background: \"_______ yo cocinaba, él miraba la televisión.\"",
          "sentenceBefore": "",
          "sentenceAfter": "yo cocinaba, él miraba la televisión.",
          "correctAnswers": [
            "Mientras",
            "mientras"
          ],
          "wordBank": [
            "Mientras",
            "Ayer",
            "Anoche",
            "De repente"
          ],
          "hint": "Means \"while\".",
          "explanation": "\"Mientras\" indicates two simultaneous ongoing actions in the imperfect."
        },
        {
          "id": "u6-l62-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I was sleeping when the phone rang\"",
          "targetEnglish": "I was sleeping when the phone rang",
          "correctTokens": [
            "Yo",
            "dormía",
            "cuando",
            "sonó",
            "el",
            "teléfono"
          ],
          "availableTokens": [
            "Yo",
            "dormía",
            "cuando",
            "sonó",
            "el",
            "teléfono",
            "dormí",
            "sonaba"
          ],
          "explanation": "\"Yo dormía (imperfect background) cuando sonó (preterite interruption) el teléfono.\""
        },
        {
          "id": "u6-l62-ex4",
          "type": "matching-pairs",
          "prompt": "Match each time expression with its corresponding past tense:",
          "explanation": "Reviewing trigger words.",
          "pairs": [
            {
              "id": "p1",
              "left": "Ayer / Anoche",
              "right": "Preterite (Definite past)"
            },
            {
              "id": "p2",
              "left": "De repente",
              "right": "Preterite (Sudden event)"
            },
            {
              "id": "p3",
              "left": "Todos los veranos",
              "right": "Imperfect (Habit)"
            },
            {
              "id": "p4",
              "left": "Cuando era joven",
              "right": "Imperfect (Life stage)"
            }
          ]
        }
      ]
    },
    {
      "id": "u6-l63",
      "slug": "pret1",
      "unitId": 6,
      "order": 63,
      "title": "63. Preterite I",
      "subtitle": "Regular -AR Verbs & Spelling Changes (-car, -gar, -zar)",
      "estimatedMinutes": 10,
      "iconName": "Edit3",
      "summary": "Learn the preterite endings for regular -AR verbs (-é, -aste, -ó, -amos, -asteis, -aron) and discover the mandatory spelling shifts in the \"yo\" form for verbs ending in -car (c→qu), -gar (g→gu), and -zar (z→c).",
      "theory": [
        {
          "id": "u6-l63-t1",
          "title": "Regular -AR Preterite Conjugation",
          "summary": "Written accents are mandatory on \"yo\" (-é) and \"él/ella/usted\" (-ó).",
          "table": {
            "headers": [
              "Pronoun",
              "Ending",
              "HABLAR (to speak)",
              "COMPRAR (to buy)"
            ],
            "rows": [
              [
                "yo",
                "-é",
                "hablé",
                "compré"
              ],
              [
                "tú",
                "-aste",
                "hablaste",
                "compraste"
              ],
              [
                "él / ella / usted",
                "-ó",
                "habló",
                "compró"
              ],
              [
                "nosotros / nosotras",
                "-amos",
                "hablamos",
                "compramos"
              ],
              [
                "vosotros / vosotras",
                "-asteis",
                "hablasteis",
                "comprasteis"
              ],
              [
                "ellos / ellas / ustedes",
                "-aron",
                "hablaron",
                "compraron"
              ]
            ]
          },
          "content": [
            "Notice that the **nosotros** form (*hablamos, compramos*) is identical in both the present and preterite! Context (*\"ayer hablamos\"*) clarifies the tense.",
            "**Spelling shifts in \"yo\" form** to preserve phonetic pronunciation before \"-é\":",
            "• **-CAR → -qué**: buscar → **busqué**, tocar → **toqué**, sacar → **saqué**",
            "• **-GAR → -gué**: pagar → **pagué**, llegar → **llegué**, jugar → **jugué**",
            "• **-ZAR → -cé**: empezar → **empecé**, organizar → **organicé**, almorzar → **almorcé**"
          ],
          "examples": [
            {
              "spanish": "Yo busqué mis llaves por toda la casa.",
              "english": "I looked for my keys all over the house. (buscar: c → qu)",
              "audio": "Yo busqué mis llaves por toda la casa."
            },
            {
              "spanish": "Ayer pagué la cuenta del restaurante.",
              "english": "Yesterday I paid the restaurant bill. (pagar: g → gu)",
              "audio": "Ayer pagué la cuenta del restaurante."
            },
            {
              "spanish": "Empecé a estudiar español el año pasado.",
              "english": "I began studying Spanish last year. (empezar: z → c)",
              "audio": "Empecé a estudiar español el año pasado."
            }
          ],
          "watchOut": "These spelling changes ONLY occur in the \"yo\" form! All other forms are regular: tú buscaste, él buscó, nosotros buscamos."
        }
      ],
      "vocabulary": [
        {
          "id": "v6301",
          "spanish": "hablé",
          "english": "I spoke (hablar)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Hablé con mi jefe.",
            "english": "I spoke with my boss."
          }
        },
        {
          "id": "v6302",
          "spanish": "compró",
          "english": "he/she bought (comprar)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Compró una casa.",
            "english": "He bought a house."
          }
        },
        {
          "id": "v6303",
          "spanish": "busqué",
          "english": "I searched / looked for (buscar: c→qu)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Busqué en internet.",
            "english": "I searched online."
          }
        },
        {
          "id": "v6304",
          "spanish": "pagué",
          "english": "I paid (pagar: g→gu)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Pagué en efectivo.",
            "english": "I paid in cash."
          }
        },
        {
          "id": "v6305",
          "spanish": "empecé",
          "english": "I started / began (empezar: z→c)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Empecé a trabajar hoy.",
            "english": "I started working today."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6301",
          "front": "Preterite endings for -AR verbs",
          "back": "-é, -aste, -ó, -amos, -asteis, -aron",
          "category": "Preterite"
        },
        {
          "id": "f6302",
          "front": "Yo preterite of BUSCAR, PAGAR, EMPEZAR",
          "back": "busqué (c→qu), pagué (g→gu), empecé (z→c)",
          "category": "Preterite"
        }
      ],
      "exercises": [
        {
          "id": "u6-l63-ex1",
          "type": "multiple-choice",
          "prompt": "What is the correct \"yo\" preterite form of \"buscar\"?",
          "explanation": "-CAR verbs change \"c\" to \"qu\" in the \"yo\" preterite: \"yo busqué\".",
          "options": [
            {
              "id": "opt1",
              "text": "busqué",
              "subtext": "Correct c → qu shift",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "buscé",
              "subtext": "Incorrect spelling",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "busco",
              "subtext": "Present tense form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "buscó",
              "subtext": "3rd person singular form (él/ella)",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l63-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the \"yo\" preterite of \"pagar\" (g→gu): \"Yesterday I paid the bill.\"",
          "sentenceBefore": "Ayer yo",
          "sentenceAfter": "la cuenta en el restaurante.",
          "correctAnswers": [
            "pagué",
            "Pagué"
          ],
          "wordBank": [
            "pagué",
            "pagé",
            "pagó",
            "pago"
          ],
          "hint": "g becomes gu before -é.",
          "explanation": "\"Pagar\" changes \"g\" to \"gu\" in the \"yo\" preterite: \"pagué\"."
        },
        {
          "id": "u6-l63-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Yesterday they bought a new car\"",
          "targetEnglish": "Yesterday they bought a new car",
          "correctTokens": [
            "Ayer",
            "ellos",
            "compraron",
            "un",
            "coche",
            "nuevo"
          ],
          "availableTokens": [
            "Ayer",
            "ellos",
            "compraron",
            "un",
            "coche",
            "nuevo",
            "compró",
            "compramos"
          ],
          "explanation": "\"Ayer ellos compraron un coche nuevo.\""
        },
        {
          "id": "u6-l63-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Ayer yo empezé mis clases de español.",
          "errorWord": "empezé",
          "options": [
            "empecé",
            "empezó",
            "empezo",
            "empezaba"
          ],
          "correctOption": "empecé",
          "explanation": "-ZAR verbs change \"z\" to \"c\" in the \"yo\" preterite: \"yo empecé\"."
        }
      ]
    },
    {
      "id": "u6-l64",
      "slug": "imp1",
      "unitId": 6,
      "order": 64,
      "title": "64. Imperfect I",
      "subtitle": "Regular Endings (-aba / -ía) & The Only 3 Irregulars (ser, ir, ver)",
      "estimatedMinutes": 10,
      "iconName": "Sun",
      "summary": "The Imperfect is the most regular tense in Spanish: -AR verbs take \"-aba\", -ER/-IR verbs take \"-ía\", and there are ONLY THREE irregular verbs in the entire language: ser (era), ir (iba), and ver (veía).",
      "theory": [
        {
          "id": "u6-l64-t1",
          "title": "Regular Imperfect Endings",
          "summary": "-AR verbs take \"-aba\" and -ER/-IR verbs take \"-ía\".",
          "table": {
            "headers": [
              "Pronoun",
              "-AR Ending (HABLAR)",
              "-ER/-IR Ending (COMER / VIVIR)"
            ],
            "rows": [
              [
                "yo",
                "hablaba",
                "comía / vivía"
              ],
              [
                "tú",
                "hablabas",
                "comías / vivías"
              ],
              [
                "él / ella / usted",
                "hablaba",
                "comía / vivía"
              ],
              [
                "nosotros / nosotras",
                "hablábamos (accent!)",
                "comíamos / vivíamos"
              ],
              [
                "vosotros / vosotras",
                "hablabais",
                "comíais / vivíais"
              ],
              [
                "ellos / ellas / ustedes",
                "hablaban",
                "comían / vivían"
              ]
            ]
          },
          "content": [
            "Notice that the **yo** form and the **él/ella/usted** form are 100% IDENTICAL in the imperfect (*yo hablaba / él hablaba*).",
            "All -ER and -IR forms carry a written accent on the letter \"í\" (*-ía, -ías, -ía, -íamos, -íais, -ían*)."
          ],
          "examples": [
            {
              "spanish": "De niño, yo jugaba en el parque todos los días.",
              "english": "As a child, I used to play in the park every day.",
              "audio": "De niño, yo jugaba en el parque todos los días."
            },
            {
              "spanish": "Vivíamos en una casa grande en el campo.",
              "english": "We used to live in a big house in the countryside.",
              "audio": "Vivíamos en una casa grande en el campo."
            }
          ]
        },
        {
          "id": "u6-l64-t2",
          "title": "The ONLY Three Irregulars in the Imperfect Tense",
          "summary": "Out of thousands of Spanish verbs, only SER, IR, and VER are irregular in the Imperfect.",
          "table": {
            "headers": [
              "Pronoun",
              "SER (era)",
              "IR (iba)",
              "VER (veía)"
            ],
            "rows": [
              [
                "yo",
                "era",
                "iba",
                "veía"
              ],
              [
                "tú",
                "eras",
                "ibas",
                "veías"
              ],
              [
                "él / ella / usted",
                "era",
                "iba",
                "veía"
              ],
              [
                "nosotros / nosotras",
                "éramos (accent!)",
                "íbamos (accent!)",
                "veíamos"
              ],
              [
                "vosotros / vosotras",
                "erais",
                "ibais",
                "veíais"
              ],
              [
                "ellos / ellas / ustedes",
                "eran",
                "iban",
                "veían"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Cuando yo era joven, iba al cine todos los domingos.",
              "english": "When I was young, I used to go to the movies every Sunday.",
              "audio": "Cuando yo era joven, iba al cine todos los domingos."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6401",
          "spanish": "era / eras",
          "english": "was / were (ser)",
          "category": "Imperfect Verbs",
          "exampleSentence": {
            "spanish": "Mi abuela era cariñosa.",
            "english": "My grandmother was affectionate."
          }
        },
        {
          "id": "v6402",
          "spanish": "iba / ibas",
          "english": "used to go (ir)",
          "category": "Imperfect Verbs",
          "exampleSentence": {
            "spanish": "Iba a la playa en verano.",
            "english": "I used to go to the beach in summer."
          }
        },
        {
          "id": "v6403",
          "spanish": "veía / veías",
          "english": "used to see / watch (ver)",
          "category": "Imperfect Verbs",
          "exampleSentence": {
            "spanish": "Veía películas los viernes.",
            "english": "I watched movies on Fridays."
          }
        },
        {
          "id": "v6404",
          "spanish": "hablaba",
          "english": "used to speak (hablar)",
          "category": "Imperfect Verbs",
          "exampleSentence": {
            "spanish": "Hablaba con mis amigos.",
            "english": "I used to speak with my friends."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6401",
          "front": "How many irregular verbs in the Imperfect?",
          "back": "ONLY 3: SER (era), IR (iba), VER (veía)",
          "category": "Imperfect"
        },
        {
          "id": "f6402",
          "front": "Conjugation of IR in Imperfect",
          "back": "iba, ibas, iba, íbamos, ibais, iban",
          "category": "Imperfect"
        }
      ],
      "exercises": [
        {
          "id": "u6-l64-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"When I was young, I used to live in Madrid\" in Spanish?",
          "explanation": "\"Era\" (ser) and \"vivía\" (vivir) express ongoing childhood background and state.",
          "options": [
            {
              "id": "opt1",
              "text": "Cuando yo era joven, vivía en Madrid.",
              "subtext": "Correct imperfect forms",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Cuando yo fui joven, viví en Madrid.",
              "subtext": "Preterite makes it sound like a momentary flash",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Cuando yo era joven, viví en Madrid.",
              "subtext": "Mixed tenses",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Cuando yo soy joven, vivo en Madrid.",
              "subtext": "Present tense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l64-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the imperfect of \"ir\" for \"nosotros\": \"Every summer we used to go to the beach.\"",
          "sentenceBefore": "Cada verano nosotros",
          "sentenceAfter": "a la playa.",
          "correctAnswers": [
            "íbamos",
            "Íbamos"
          ],
          "wordBank": [
            "íbamos",
            "fuimos",
            "vamos",
            "ibais"
          ],
          "hint": "Irregular imperfect of ir (with accent on í).",
          "explanation": "The nosotros form of ir in the imperfect is \"íbamos\"."
        },
        {
          "id": "u6-l64-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"My grandmother was very kind and generous\"",
          "targetEnglish": "My grandmother was very kind and generous",
          "correctTokens": [
            "Mi",
            "abuela",
            "era",
            "muy",
            "amable",
            "y",
            "generosa"
          ],
          "availableTokens": [
            "Mi",
            "abuela",
            "era",
            "muy",
            "amable",
            "y",
            "generosa",
            "fue",
            "estaba"
          ],
          "explanation": "\"Mi abuela era muy amable y generosa.\""
        }
      ]
    },
    {
      "id": "u6-l65",
      "slug": "pret2",
      "unitId": 6,
      "order": 65,
      "title": "65. Preterite II",
      "subtitle": "Regular -ER and -IR Verbs (-í, -iste, -ió, -imos, -isteis, -ieron)",
      "estimatedMinutes": 9,
      "iconName": "Zap",
      "summary": "Master the preterite endings for regular -ER and -IR verbs (-í, -iste, -ió, -imos, -isteis, -ieron). Notice that both verb types share the exact same endings.",
      "theory": [
        {
          "id": "u6-l65-t1",
          "title": "Regular -ER / -IR Preterite Conjugation",
          "summary": "Both -ER and -IR verbs share identical preterite endings with written accents on \"yo\" (-í) and \"él/ella\" (-ió).",
          "table": {
            "headers": [
              "Pronoun",
              "Ending",
              "COMER (to eat)",
              "VIVIR (to live)",
              "ESCRIBIR (to write)"
            ],
            "rows": [
              [
                "yo",
                "-í",
                "comí",
                "viví",
                "escribí"
              ],
              [
                "tú",
                "-iste",
                "comiste",
                "viviste",
                "escribiste"
              ],
              [
                "él / ella / usted",
                "-ió",
                "comió",
                "vivió",
                "escribió"
              ],
              [
                "nosotros / nosotras",
                "-imos",
                "comimos",
                "vivimos",
                "escribimos"
              ],
              [
                "vosotros / vosotras",
                "-isteis",
                "comisteis",
                "vivisteis",
                "escribisteis"
              ],
              [
                "ellos / ellas / ustedes",
                "-ieron",
                "comieron",
                "vivieron",
                "escribieron"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Ayer comí una paella deliciosa y bebí vino.",
              "english": "Yesterday I ate a delicious paella and drank wine.",
              "audio": "Ayer comí una paella deliciosa y bebí vino."
            },
            {
              "spanish": "Mis amigos salieron a las diez de la noche.",
              "english": "My friends left at 10:00 PM.",
              "audio": "Mis amigos salieron a las diez de la noche."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6501",
          "spanish": "comí",
          "english": "I ate (comer)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Comí fruta.",
            "english": "I ate fruit."
          }
        },
        {
          "id": "v6502",
          "spanish": "vivió",
          "english": "he / she lived (vivir)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Vivió en México.",
            "english": "He lived in Mexico."
          }
        },
        {
          "id": "v6503",
          "spanish": "escribieron",
          "english": "they wrote (escribir)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "Escribieron una carta.",
            "english": "They wrote a letter."
          }
        },
        {
          "id": "v6504",
          "spanish": "bebiste",
          "english": "you drank (beber)",
          "category": "Preterite Verbs",
          "exampleSentence": {
            "spanish": "¿Bebiste agua?",
            "english": "Did you drink water?"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6501",
          "front": "Preterite endings for -ER/-IR verbs",
          "back": "-í, -iste, -ió, -imos, -isteis, -ieron",
          "category": "Preterite"
        }
      ],
      "exercises": [
        {
          "id": "u6-l65-ex1",
          "type": "multiple-choice",
          "prompt": "What is the preterite form of \"comer\" for \"nosotros\"?",
          "explanation": "\"Comer\" for nosotros in the preterite is \"comimos\".",
          "options": [
            {
              "id": "opt1",
              "text": "comimos",
              "subtext": "Correct -ER preterite form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "comemos",
              "subtext": "Present tense form",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "comíamos",
              "subtext": "Imperfect form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "comaron",
              "subtext": "Incorrect ending",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l65-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the preterite of \"escribir\" for \"ella\": \"Yesterday she wrote a poem.\"",
          "sentenceBefore": "Ayer ella",
          "sentenceAfter": "un poema muy bonito.",
          "correctAnswers": [
            "escribió",
            "Escribió"
          ],
          "wordBank": [
            "escribió",
            "escribe",
            "escribía",
            "escribí"
          ],
          "hint": "3rd person singular preterite ends in -ió.",
          "explanation": "\"Escribir\" in the 3rd person singular preterite is \"escribió\"."
        },
        {
          "id": "u6-l65-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Yesterday we drank fresh orange juice\"",
          "targetEnglish": "Yesterday we drank fresh orange juice",
          "correctTokens": [
            "Ayer",
            "nosotros",
            "bebimos",
            "zumo",
            "de",
            "naranja",
            "fresco"
          ],
          "availableTokens": [
            "Ayer",
            "nosotros",
            "bebimos",
            "zumo",
            "de",
            "naranja",
            "fresco",
            "bebemos",
            "bebieron"
          ],
          "explanation": "\"Ayer nosotros bebimos zumo de naranja fresco.\""
        }
      ]
    },
    {
      "id": "u6-l66",
      "slug": "imp2",
      "unitId": 6,
      "order": 66,
      "title": "66. Imperfect II",
      "subtitle": "Setting the Scene: Clock Time, Age, Weather & Mental States",
      "estimatedMinutes": 9,
      "iconName": "Clock",
      "summary": "Master the descriptive domains of the Imperfect: telling clock time in the past (\"eran las tres\"), age (\"tenía diez años\"), weather (\"hacía frío\"), and emotional/mental states.",
      "theory": [
        {
          "id": "u6-l66-t1",
          "title": "Scene Setting Domains of the Imperfect",
          "summary": "These narrative elements almost always take the Imperfect in Spanish past storytelling.",
          "table": {
            "headers": [
              "Context / Category",
              "Formula / Structure",
              "Example Sentence"
            ],
            "rows": [
              [
                "Clock Time in Past",
                "Era la una / Eran las [2–12]",
                "Eran las ocho de la noche cuando llegué."
              ],
              [
                "Age in Past",
                "Tener en imperfecto: tenía [X] años",
                "Cuando yo tenía diez años, vivía en México."
              ],
              [
                "Weather in Past",
                "Hacía frío / llovía / estaba nublado",
                "Hacía mucho viento aquella tarde."
              ],
              [
                "Emotional / Mental State",
                "Estaba cansado / Tenía miedo",
                "Estaba muy triste porque perdí mi reloj."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Eran las dos de la mañana cuando sonó la alarma.",
              "english": "It was 2:00 AM when the alarm sounded. (Time → Eran las dos)",
              "audio": "Eran las dos de la mañana cuando sonó la alarma."
            },
            {
              "spanish": "Hacía mucho frío y nevaba en la ciudad.",
              "english": "It was very cold and snowing in the city. (Weather description)",
              "audio": "Hacía mucho frío y nevaba en la ciudad."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6601",
          "spanish": "eran las...",
          "english": "it was [time] (past time)",
          "category": "Scene Setting",
          "exampleSentence": {
            "spanish": "Eran las cinco.",
            "english": "It was 5:00."
          }
        },
        {
          "id": "v6602",
          "spanish": "tenía... años",
          "english": "was... years old (past age)",
          "category": "Scene Setting",
          "exampleSentence": {
            "spanish": "Tenía siete años.",
            "english": "I was 7 years old."
          }
        },
        {
          "id": "v6603",
          "spanish": "hacía frío / sol",
          "english": "it was cold / sunny",
          "category": "Scene Setting",
          "exampleSentence": {
            "spanish": "Hacía buen tiempo.",
            "english": "The weather was nice."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6601",
          "front": "Telling time in the past",
          "back": "Era la una (1:00) vs Eran las dos, tres... (Always Imperfect)",
          "category": "Imperfect"
        },
        {
          "id": "f6602",
          "front": "Age in the past",
          "back": "Tenía [X] años (Always Imperfect)",
          "category": "Imperfect"
        }
      ],
      "exercises": [
        {
          "id": "u6-l66-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"It was 4:00 PM when Carlos arrived\" in Spanish?",
          "explanation": "Telling time in the past requires the plural imperfect of ser: \"Eran las cuatro\".",
          "options": [
            {
              "id": "opt1",
              "text": "Eran las cuatro de la tarde cuando Carlos llegó.",
              "subtext": "Correct time in past (Eran las cuatro)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Fueron las cuatro de la tarde cuando Carlos llegó.",
              "subtext": "Incorrect: time never uses preterite",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Era las cuatro de la tarde.",
              "subtext": "Plural hour requires \"Eran\"",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Estaban las cuatro.",
              "subtext": "Incorrect verb",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l66-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete for age in the past: \"When I was eight years old, I lived in Spain.\"",
          "sentenceBefore": "Cuando yo",
          "sentenceAfter": "ocho años, vivía en España.",
          "correctAnswers": [
            "tenía",
            "Tenía"
          ],
          "wordBank": [
            "tenía",
            "tuve",
            "era",
            "fui"
          ],
          "hint": "Age in the past uses \"tener\" in the imperfect.",
          "explanation": "Age in the past always uses the imperfect of tener: \"tenía ocho años\"."
        }
      ]
    },
    {
      "id": "u6-l67",
      "slug": "pretimp2",
      "unitId": 6,
      "order": 67,
      "title": "67. Pret. vs Imp. II",
      "subtitle": "Verbs That Change Meaning in Preterite vs. Imperfect",
      "estimatedMinutes": 10,
      "iconName": "Shuffle",
      "summary": "Discover how certain Spanish verbs (saber, conocer, poder, querer) change their fundamental English translation when conjugated in the Preterite vs. Imperfect.",
      "theory": [
        {
          "id": "u6-l67-t1",
          "title": "The Meaning Shift Matrix",
          "summary": "In the preterite, these verbs represent the exact moment of discovery, meeting, or effort.",
          "table": {
            "headers": [
              "Verb",
              "Imperfect Meaning (Ongoing state)",
              "Preterite Meaning (Punctual event)"
            ],
            "rows": [
              [
                "saber",
                "sabía = knew (ongoing knowledge)",
                "supe = found out / learned (moment of discovery)"
              ],
              [
                "conocer",
                "conocía = knew / was acquainted with",
                "conocí = met (for the first time)"
              ],
              [
                "poder",
                "podía = was capable of / could",
                "pude = managed to / succeeded in doing"
              ],
              [
                "no poder",
                "no podía = was not capable",
                "no pude = failed to do (after trying)"
              ],
              [
                "querer",
                "quería = wanted (mental desire)",
                "quise = tried / attempted to do"
              ],
              [
                "no querer",
                "no quería = did not want to",
                "no quise = refused to do"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Yo no sabía la noticia, pero ayer la supe.",
              "english": "I didn't know the news, but yesterday I found out. (sabía = knew, supe = found out)",
              "audio": "Yo no sabía la noticia, pero ayer la supe."
            },
            {
              "spanish": "Conocí a mi esposa en Madrid en 2018.",
              "english": "I met my wife in Madrid in 2018. (conocí = met for first time)",
              "audio": "Conocí a mi esposa en Madrid en 2018."
            },
            {
              "spanish": "El examen fue difícil, pero pude aprobar.",
              "english": "The exam was hard, but I managed to pass. (pude = succeeded in passing)",
              "audio": "El examen fue difícil, pero pude aprobar."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6701",
          "spanish": "supe (saber)",
          "english": "I found out / learned (preterite)",
          "category": "Meaning Shifts",
          "exampleSentence": {
            "spanish": "Supe la verdad ayer.",
            "english": "I found out the truth yesterday."
          }
        },
        {
          "id": "v6702",
          "spanish": "conocí (conocer)",
          "english": "I met (for the first time - preterite)",
          "category": "Meaning Shifts",
          "exampleSentence": {
            "spanish": "Conocí a Carlos anoche.",
            "english": "I met Carlos last night."
          }
        },
        {
          "id": "v6703",
          "spanish": "pude (poder)",
          "english": "I managed to / succeeded (preterite)",
          "category": "Meaning Shifts",
          "exampleSentence": {
            "spanish": "Pude terminar a tiempo.",
            "english": "I managed to finish on time."
          }
        },
        {
          "id": "v6704",
          "spanish": "no quise (no querer)",
          "english": "I refused (preterite)",
          "category": "Meaning Shifts",
          "exampleSentence": {
            "spanish": "No quise comer eso.",
            "english": "I refused to eat that."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6701",
          "front": "saber: sabía vs supe",
          "back": "sabía = knew (state) | supe = found out (event)",
          "category": "Meaning Shifts"
        },
        {
          "id": "f6702",
          "front": "conocer: conocía vs conocí",
          "back": "conocía = knew/was acquainted | conocí = met for the first time",
          "category": "Meaning Shifts"
        },
        {
          "id": "f6703",
          "front": "no quise (preterite of no querer)",
          "back": "I refused to do something",
          "category": "Meaning Shifts"
        }
      ],
      "exercises": [
        {
          "id": "u6-l67-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"Yesterday I found out the secret\" in Spanish?",
          "explanation": "\"To find out\" at a specific moment is the preterite of saber: \"supe el secreto\".",
          "options": [
            {
              "id": "opt1",
              "text": "Ayer supe el secreto.",
              "subtext": "Correct preterite meaning: found out",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Ayer sabía el secreto.",
              "subtext": "Sabía means \"I knew / was aware of for a long time\"",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Ayer encontré el secreto.",
              "subtext": "Encontrar is for physical objects",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Ayer conocí el secreto.",
              "subtext": "Conocer is for people/places",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l67-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the preterite of \"conocer\" to mean \"I met for the first time\": \"Last night I _______ Maria.\"",
          "sentenceBefore": "Anoche yo",
          "sentenceAfter": "a María en la fiesta.",
          "correctAnswers": [
            "conocí",
            "Conocí"
          ],
          "wordBank": [
            "conocí",
            "conocía",
            "conozco",
            "supe"
          ],
          "hint": "Preterite of conocer = met.",
          "explanation": "\"Conocí a María\" means \"I met Maria for the first time\"."
        },
        {
          "id": "u6-l67-ex3",
          "type": "matching-pairs",
          "prompt": "Match each preterite verb form to its punctual English meaning:",
          "explanation": "Reviewing preterite meaning shifts.",
          "pairs": [
            {
              "id": "p1",
              "left": "supe",
              "right": "I found out"
            },
            {
              "id": "p2",
              "left": "conocí",
              "right": "I met (1st time)"
            },
            {
              "id": "p3",
              "left": "pude",
              "right": "I managed to / succeeded"
            },
            {
              "id": "p4",
              "left": "no quise",
              "right": "I refused"
            }
          ]
        }
      ]
    },
    {
      "id": "u6-l68",
      "slug": "pret3",
      "unitId": 6,
      "order": 68,
      "title": "68. Preterite III",
      "subtitle": "Stem-Changing -IR \"Sandal\" Verbs (durmió, pidió, sintió)",
      "estimatedMinutes": 10,
      "iconName": "Footprints",
      "summary": "-IR stem-changing verbs in the preterite only change their root vowel in the 3rd person singular (él/ella/usted) and plural (ellos/ellas/ustedes), forming the shape of a sandal at the bottom of the conjugation chart.",
      "theory": [
        {
          "id": "u6-l68-t1",
          "title": "The -IR Sandal Verb Rule in the Preterite",
          "summary": "Only -IR verbs undergo preterite stem changes, and only in the 3rd person (o → u, e → i).",
          "table": {
            "headers": [
              "Infinitive",
              "yo (regular)",
              "tú (regular)",
              "él / ella (sandal change!)",
              "ellos / ellas (sandal change!)"
            ],
            "rows": [
              [
                "dormir (o → u)",
                "dormí",
                "dormiste",
                "durmió",
                "durmieron"
              ],
              [
                "morir (o → u)",
                "morí",
                "moriste",
                "murió",
                "murieron"
              ],
              [
                "pedir (e → i)",
                "pedí",
                "pediste",
                "pidió",
                "pidieron"
              ],
              [
                "servir (e → i)",
                "serví",
                "serviste",
                "sirvió",
                "sirvieron"
              ],
              [
                "repetir (e → i)",
                "repetí",
                "repetiste",
                "repitió",
                "repitieron"
              ],
              [
                "sentir (e → i)",
                "sentí",
                "sentiste",
                "sintió",
                "sintieron"
              ],
              [
                "preferir (e → i)",
                "preferí",
                "preferiste",
                "prefirió",
                "prefirieron"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "El niño durmió diez horas anoche.",
              "english": "The child slept ten hours last night. (dormir: o → u)",
              "audio": "El niño durmió diez horas anoche."
            },
            {
              "spanish": "Ellos pidieron pescado en el restaurante.",
              "english": "They ordered fish in the restaurant. (pedir: e → i)",
              "audio": "Ellos pidieron pescado en el restaurante."
            },
            {
              "spanish": "Ella prefirió quedarse en casa.",
              "english": "She preferred to stay home. (preferir: e → i)",
              "audio": "Ella prefirió quedarse en casa."
            }
          ],
          "watchOut": "-AR and -ER verbs (like cerrar, volver) do NOT stem change in the preterite (cerró, volvió)!"
        }
      ],
      "vocabulary": [
        {
          "id": "v6801",
          "spanish": "durmió / durmieron",
          "english": "slept (dormir: o→u)",
          "category": "Sandal Verbs",
          "exampleSentence": {
            "spanish": "Durmió profundamente.",
            "english": "He slept deeply."
          }
        },
        {
          "id": "v6802",
          "spanish": "pidió / pidieron",
          "english": "ordered / asked for (pedir: e→i)",
          "category": "Sandal Verbs",
          "exampleSentence": {
            "spanish": "Pidió la cuenta.",
            "english": "He asked for the bill."
          }
        },
        {
          "id": "v6803",
          "spanish": "sirvió / sirvieron",
          "english": "served (servir: e→i)",
          "category": "Sandal Verbs",
          "exampleSentence": {
            "spanish": "Sirvió el vino.",
            "english": "He served the wine."
          }
        },
        {
          "id": "v6804",
          "spanish": "sintió / sintieron",
          "english": "felt (sentir: e→i)",
          "category": "Sandal Verbs",
          "exampleSentence": {
            "spanish": "Sintió dolor.",
            "english": "He felt pain."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6801",
          "front": "What is a preterite \"sandal verb\"?",
          "back": "-IR verbs with vowel shifts ONLY in 3rd person:\nél durmió / ellos durmieron\nél pidió / ellos pidieron",
          "category": "Preterite"
        }
      ],
      "exercises": [
        {
          "id": "u6-l68-ex1",
          "type": "multiple-choice",
          "prompt": "What is the preterite form of \"dormir\" for \"ellos\"?",
          "explanation": "\"Dormir\" changes \"o\" to \"u\" in the 3rd person plural preterite: \"durmieron\".",
          "options": [
            {
              "id": "opt1",
              "text": "durmieron",
              "subtext": "Correct sandal stem change (o → u)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "dormieron",
              "subtext": "Missing stem change",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "duermieron",
              "subtext": "Incorrect diphthong",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "dormaron",
              "subtext": "Incorrect ending",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l68-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the 3rd person singular (ella) preterite of \"preferir\" (e→i):",
          "sentenceBefore": "Ayer ella",
          "sentenceAfter": "el té en vez del café.",
          "correctAnswers": [
            "prefirió",
            "Prefirió"
          ],
          "wordBank": [
            "prefirió",
            "preferió",
            "prefiere",
            "prefería"
          ],
          "hint": "e changes to i in 3rd person singular preterite.",
          "explanation": "\"Preferir\" becomes \"prefirió\" in the 3rd person singular preterite."
        },
        {
          "id": "u6-l68-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"The waiter served the dessert to the customers\"",
          "targetEnglish": "The waiter served the dessert to the customers",
          "correctTokens": [
            "El",
            "camarero",
            "sirvió",
            "el",
            "postre",
            "a",
            "los",
            "clientes"
          ],
          "availableTokens": [
            "El",
            "camarero",
            "sirvió",
            "el",
            "postre",
            "a",
            "los",
            "clientes",
            "servió",
            "sirve"
          ],
          "explanation": "\"El camarero sirvió el postre a los clientes.\" (Servir -> sirvió)."
        }
      ]
    },
    {
      "id": "u6-l69",
      "slug": "imp3",
      "unitId": 6,
      "order": 69,
      "title": "69. Imperfect III",
      "subtitle": "Storytelling in the Past: Setting the Stage & Simultaneous Habits",
      "estimatedMinutes": 9,
      "iconName": "BookOpen",
      "summary": "Combine multiple imperfect clauses to set rich background narratives: describing appearance, weather, atmosphere, and simultaneous ongoing actions with \"mientras\".",
      "theory": [
        {
          "id": "u6-l69-t1",
          "title": "Narrative Background Staging",
          "summary": "In storytelling, the Imperfect paints the background portrait while the Preterite drives the plot.",
          "content": [
            "**The Staging Blueprint**: Look at how a classic story opens in Spanish:",
            "*\"Era una noche oscura. Llovía suavemente y hacía viento. Juan caminaba por la calle y pensaba en su familia...\"*",
            "Notice that every single verb here is in the **Imperfect** (*era, llovía, hacía, caminaba, pensaba*) because no specific bounded event has interrupted the scene yet."
          ],
          "examples": [
            {
              "spanish": "La casa era antigua y tenía ventanas grandes.",
              "english": "The house was old and had big windows. (Atmospheric description)",
              "audio": "La casa era antigua y tenía ventanas grandes."
            },
            {
              "spanish": "Mientras mi madre cocinaba, mi padre leía el periódico.",
              "english": "While my mother was cooking, my father was reading the newspaper. (Simultaneous habits)",
              "audio": "Mientras mi madre cocinaba, mi padre leía el periódico."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6901",
          "spanish": "pensaba",
          "english": "was thinking (pensar)",
          "category": "Storytelling",
          "exampleSentence": {
            "spanish": "Pensaba en ti.",
            "english": "I was thinking of you."
          }
        },
        {
          "id": "v6902",
          "spanish": "llovía suavemente",
          "english": "it was raining softly",
          "category": "Storytelling",
          "exampleSentence": {
            "spanish": "Llovía suavemente en Madrid.",
            "english": "It was raining softly in Madrid."
          }
        },
        {
          "id": "v6903",
          "spanish": "tenía miedo",
          "english": "was afraid",
          "category": "Storytelling",
          "exampleSentence": {
            "spanish": "El niño tenía miedo de la oscuridad.",
            "english": "The child was afraid of the dark."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6901",
          "front": "Function of Imperfect in storytelling",
          "back": "Paints the background setting, atmosphere, and ongoing character states.",
          "category": "Imperfect"
        }
      ],
      "exercises": [
        {
          "id": "u6-l69-ex1",
          "type": "multiple-choice",
          "prompt": "Which verb forms correctly complete the simultaneous background: \"While we _______ (caminar), they _______ (hablar)\"?",
          "explanation": "Simultaneous background actions linked by \"mientras\" require the Imperfect: \"caminábamos / hablaban\".",
          "options": [
            {
              "id": "opt1",
              "text": "caminábamos / hablaban",
              "subtext": "Both imperfect for simultaneous ongoing actions",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "caminamos / hablaron",
              "subtext": "Preterite denotes finished sequence, not simultaneous background",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "caminábamos / hablaron",
              "subtext": "Mismatch",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "caminamos / hablaban",
              "subtext": "Mismatch",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l69-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete the scene description: \"The castle was (ser) very big and had (tener) tall walls.\"",
          "sentenceBefore": "El castillo",
          "sentenceAfter": "muy grande y tenía muros altos.",
          "correctAnswers": [
            "era",
            "Era"
          ],
          "wordBank": [
            "era",
            "fue",
            "estaba",
            "estuvo"
          ],
          "hint": "Descriptive trait in the past uses imperfect of ser.",
          "explanation": "Physical description in the past uses the imperfect: \"era muy grande\"."
        }
      ]
    },
    {
      "id": "u6-l70",
      "slug": "pret4",
      "unitId": 6,
      "order": 70,
      "title": "70. Preterite IV",
      "subtitle": "Vowel-Clash & Orthographic Changes (leer → leyó, oír → oyó)",
      "estimatedMinutes": 10,
      "iconName": "Shuffle",
      "summary": "When an -ER or -IR verb root ends in a vowel (leer, oír, caer, creer, destruir), the unstressed \"i\" between vowels turns into a \"y\" in the 3rd person singular and plural (leyó, leyeron).",
      "theory": [
        {
          "id": "u6-l70-t1",
          "title": "The i → y Vowel Clash Rule in Preterite",
          "summary": "Spanish phonetics avoids three consecutive written vowel letters with unaccented \"i\" (e.g. \"leió\" → \"leyó\").",
          "table": {
            "headers": [
              "Infinitive",
              "yo",
              "tú",
              "él / ella (i → y!)",
              "ellos / ellas (i → y!)"
            ],
            "rows": [
              [
                "leer (to read)",
                "leí (accent!)",
                "leíste (accent!)",
                "leyó",
                "leyeron"
              ],
              [
                "oír (to hear)",
                "oí (accent!)",
                "oíste (accent!)",
                "oyó",
                "oyeron"
              ],
              [
                "creer (to believe)",
                "creí (accent!)",
                "creíste (accent!)",
                "creyó",
                "creyeron"
              ],
              [
                "caer (to fall)",
                "caí (accent!)",
                "caíste (accent!)",
                "cayó",
                "cayeron"
              ],
              [
                "destruir (to destroy)",
                "destruí",
                "destruiste",
                "destruyó",
                "destruyeron"
              ],
              [
                "construir (to build)",
                "construí",
                "construiste",
                "construyó",
                "construyeron"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Ella leyó toda la novela en un fin de semana.",
              "english": "She read the whole novel in one weekend. (leer → leyó)",
              "audio": "Ella leyó toda la novela en un fin de semana."
            },
            {
              "spanish": "Los vecinos oyeron un ruido extraño anoche.",
              "english": "The neighbors heard a strange noise last night. (oír → oyeron)",
              "audio": "Los vecinos oyeron un ruido extraño anoche."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7001",
          "spanish": "leyó / leyeron",
          "english": "read (leer: preterite)",
          "category": "Vowel Clash Preterites",
          "exampleSentence": {
            "spanish": "Leyó el periódico.",
            "english": "He read the newspaper."
          }
        },
        {
          "id": "v7002",
          "spanish": "oyó / oyeron",
          "english": "heard (oír: preterite)",
          "category": "Vowel Clash Preterites",
          "exampleSentence": {
            "spanish": "¿Oíste eso? — Sí, lo oí.",
            "english": "Did you hear that? — Yes, I heard it."
          }
        },
        {
          "id": "v7003",
          "spanish": "cayó / cayeron",
          "english": "fell (caer: preterite)",
          "category": "Vowel Clash Preterites",
          "exampleSentence": {
            "spanish": "El vaso se cayó.",
            "english": "The glass fell."
          }
        },
        {
          "id": "v7004",
          "spanish": "creyó / creyeron",
          "english": "believed (creer: preterite)",
          "category": "Vowel Clash Preterites",
          "exampleSentence": {
            "spanish": "No lo creyeron.",
            "english": "They didn't believe it."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7001",
          "front": "Preterite of LEER, OÍR, CREER (3rd person)",
          "back": "leyó/leyeron, oyó/oyeron, creyó/creyeron (i changes to y)",
          "category": "Preterite"
        }
      ],
      "exercises": [
        {
          "id": "u6-l70-ex1",
          "type": "multiple-choice",
          "prompt": "What is the 3rd person singular (él) preterite form of \"leer\"?",
          "explanation": "\"Leer\" undergoes the i->y vowel clash change in 3rd person: \"él leyó\".",
          "options": [
            {
              "id": "opt1",
              "text": "leyó",
              "subtext": "Correct i → y orthographic change",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "leió",
              "subtext": "Incorrect spelling",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "leía",
              "subtext": "Imperfect form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "leo",
              "subtext": "Present tense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l70-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the 3rd person plural (ellos) preterite of \"oír\" (i→y): \"They heard the music.\"",
          "sentenceBefore": "Ellos",
          "sentenceAfter": "la música desde su habitación.",
          "correctAnswers": [
            "oyeron",
            "Oyeron"
          ],
          "wordBank": [
            "oyeron",
            "oieron",
            "oían",
            "oyieron"
          ],
          "hint": "i changes to y in 3rd person plural.",
          "explanation": "\"Oír\" forms \"oyeron\" in the 3rd person plural preterite."
        },
        {
          "id": "u6-l70-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"The glass fell on the floor\"",
          "targetEnglish": "The glass fell on the floor",
          "correctTokens": [
            "El",
            "vaso",
            "se",
            "cayó",
            "en",
            "el",
            "suelo"
          ],
          "availableTokens": [
            "El",
            "vaso",
            "se",
            "cayó",
            "en",
            "el",
            "suelo",
            "caió",
            "caía"
          ],
          "explanation": "\"El vaso se cayó en el suelo.\" (Caer -> cayó)."
        }
      ]
    },
    {
      "id": "u6-l71",
      "slug": "pret5",
      "unitId": 6,
      "order": 71,
      "title": "71. Preterite V",
      "subtitle": "Twin Verbs: Ser & Ir (fui) and Monosyllabic Dar & Ver (di, vi)",
      "estimatedMinutes": 10,
      "iconName": "Zap",
      "summary": "Master the iconic twin verbs in the preterite: SER and IR share the 100% exact same conjugation (fui, fuiste, fue...). Also learn DAR (di) and VER (vi), which take identical unaccented monosyllabic endings.",
      "theory": [
        {
          "id": "u6-l71-t1",
          "title": "The Ser & Ir Twins + Dar & Ver",
          "summary": "SER and IR are identical in the preterite. Context and prepositions (ir + a) distinguish them.",
          "table": {
            "headers": [
              "Pronoun",
              "SER & IR (to be / to go)",
              "DAR (to give)",
              "VER (to see)"
            ],
            "rows": [
              [
                "yo",
                "fui",
                "di (no accent!)",
                "vi (no accent!)"
              ],
              [
                "tú",
                "fuiste",
                "diste",
                "viste"
              ],
              [
                "él / ella / usted",
                "fue",
                "dio (no accent!)",
                "vio (no accent!)"
              ],
              [
                "nosotros / nosotras",
                "fuimos",
                "dimos",
                "vimos"
              ],
              [
                "vosotros / vosotras",
                "fuisteis",
                "disteis",
                "visteis"
              ],
              [
                "ellos / ellas / ustedes",
                "fueron",
                "dieron",
                "vieron"
              ]
            ]
          },
          "content": [
            "**How to tell SER from IR in the Preterite?**:",
            "• If followed by **\"a\" + location**, it is IR (*\"Fui a España\"* = I went to Spain).",
            "• If followed by an **adjective or noun**, it is SER (*\"El examen fue difícil\"* = The exam was difficult).",
            "• **No Accents**: *di, dio, vi, vio* are 1-syllable words and NEVER carry written accents."
          ],
          "examples": [
            {
              "spanish": "Ayer fui al cine con mis amigos. (IR)",
              "english": "Yesterday I went to the movies with my friends.",
              "audio": "Ayer fui al cine con mis amigos."
            },
            {
              "spanish": "La fiesta fue increíble. (SER)",
              "english": "The party was incredible.",
              "audio": "La fiesta fue increíble."
            },
            {
              "spanish": "Yo le di un regalo y vi su sonrisa.",
              "english": "I gave him a gift and saw his smile. (DAR & VER)",
              "audio": "Yo le di un regalo y vi su sonrisa."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7101",
          "spanish": "fui / fue / fueron",
          "english": "was / went (ser / ir)",
          "category": "Twin Preterites",
          "exampleSentence": {
            "spanish": "Fue un día fantástico.",
            "english": "It was a fantastic day."
          }
        },
        {
          "id": "v7102",
          "spanish": "di / dio",
          "english": "gave (dar)",
          "category": "Twin Preterites",
          "exampleSentence": {
            "spanish": "Le di las gracias.",
            "english": "I gave him thanks."
          }
        },
        {
          "id": "v7103",
          "spanish": "vi / vio",
          "english": "saw (ver)",
          "category": "Twin Preterites",
          "exampleSentence": {
            "spanish": "Vi una película.",
            "english": "I saw a movie."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7101",
          "front": "Preterite of SER and IR",
          "back": "fui, fuiste, fue, fuimos, fuisteis, fueron\n(Identical conjugation!)",
          "category": "Preterite"
        },
        {
          "id": "f7102",
          "front": "Do \"di\", \"dio\", \"vi\", \"vio\" have accents?",
          "back": "NO! Zero accents (monosyllabic words)",
          "category": "Preterite"
        }
      ],
      "exercises": [
        {
          "id": "u6-l71-ex1",
          "type": "multiple-choice",
          "prompt": "In \"Ayer Carlos fue al supermercado\", which verb is \"fue\"?",
          "explanation": "\"Fue + a\" denotes movement to a destination, meaning it is from the verb \"ir\" (to go).",
          "options": [
            {
              "id": "opt1",
              "text": "IR (to go: he went to the supermarket)",
              "subtext": "Movement + \"a\" indicates IR",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "SER (to be: he was the supermarket)",
              "subtext": "Nonsensical meaning",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "ESTAR",
              "subtext": "Incorrect verb",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "TENER",
              "subtext": "Incorrect verb",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l71-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the preterite of \"dar\" for \"yo\" (no accent): \"Yesterday I gave money to charity.\"",
          "sentenceBefore": "Ayer yo",
          "sentenceAfter": "dinero a la caridad.",
          "correctAnswers": [
            "di",
            "Di"
          ],
          "wordBank": [
            "di",
            "dí",
            "doy",
            "daba"
          ],
          "hint": "1-syllable preterite without accent.",
          "explanation": "The \"yo\" preterite of dar is \"di\" (without accent)."
        },
        {
          "id": "u6-l71-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Yesterday we saw a great movie\"",
          "targetEnglish": "Yesterday we saw a great movie",
          "correctTokens": [
            "Ayer",
            "nosotros",
            "vimos",
            "una",
            "gran",
            "película"
          ],
          "availableTokens": [
            "Ayer",
            "nosotros",
            "vimos",
            "una",
            "gran",
            "película",
            "veíamos",
            "vemos"
          ],
          "explanation": "\"Ayer nosotros vimos una gran película.\""
        }
      ]
    },
    {
      "id": "u6-l72",
      "slug": "pret6",
      "unitId": 6,
      "order": 72,
      "title": "72. Preterite VI",
      "subtitle": "Irregular Stems: The U-Stems, I-Stems & J-Stems",
      "estimatedMinutes": 12,
      "iconName": "Key",
      "summary": "Master the high-frequency irregular preterite stems! These verbs transform into special roots (tuv-, estuv-, pus-, pud-, sup-, anduv-, hic-, vin-, quis-, dij-, traj-) and share universal unaccented endings (-e, -iste, -o, -imos, -isteis, -ieron/-eron).",
      "theory": [
        {
          "id": "u6-l72-t1",
          "title": "The Universal Irregular Preterite Endings",
          "summary": "All irregular stem verbs share these exact endings (WITHOUT any written accents!).",
          "table": {
            "headers": [
              "Pronoun",
              "Irregular Ending",
              "TENER (tuv-)",
              "HACER (hic-/hiz-)",
              "DECIR (dij-)"
            ],
            "rows": [
              [
                "yo",
                "-e (no accent!)",
                "tuve",
                "hice",
                "dije"
              ],
              [
                "tú",
                "-iste",
                "tuviste",
                "hiciste",
                "dijiste"
              ],
              [
                "él / ella / usted",
                "-o (no accent!)",
                "tuvo",
                "hizo (c → z!)",
                "dijo"
              ],
              [
                "nosotros / nosotras",
                "-imos",
                "tuvimos",
                "hicimos",
                "dijimos"
              ],
              [
                "vosotros / vosotras",
                "-isteis",
                "tuvisteis",
                "hicisteis",
                "dijisteis"
              ],
              [
                "ellos / ellas / ustedes",
                "-ieron (-eron for J-stems)",
                "tuvieron",
                "hicieron",
                "dijeron (drop i!)"
              ]
            ]
          },
          "content": [
            "**The Three Root Families**:",
            "1. **U-Stems**: tener → **tuv-**, estar → **estuv-**, poder → **pud-**, poner → **pus-**, saber → **sup-**, andar → **anduv-**, haber → **hub-**.",
            "2. **I-Stems**: hacer → **hic-** (él **hizo**), querer → **quis-**, venir → **vin-**.",
            "3. **J-Stems**: decir → **dij-**, traer → **traj-**, conducir → **conduj-** (Note: J-stems drop the \"i\" in 3rd plural: *dijeron, trajeron*, NOT *dijieron*)."
          ],
          "examples": [
            {
              "spanish": "Yo estuve en Madrid por dos semanas.",
              "english": "I was in Madrid for two weeks. (estar → estuv-)",
              "audio": "Yo estuve en Madrid por dos semanas."
            },
            {
              "spanish": "¿Qué hiciste ayer? — Hice la compra.",
              "english": "What did you do yesterday? — I did the shopping. (hacer → hic-)",
              "audio": "¿Qué hiciste ayer?"
            },
            {
              "spanish": "Ellos me dijeron la verdad.",
              "english": "They told me the truth. (decir → dij- + -eron = dijeron)",
              "audio": "Ellos me dijeron la verdad."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7201",
          "spanish": "tuve / tuvo",
          "english": "I had / he had (tener: tuv-)",
          "category": "Irregular Stems",
          "exampleSentence": {
            "spanish": "Tuve una reunión.",
            "english": "I had a meeting."
          }
        },
        {
          "id": "v7202",
          "spanish": "estuve / estuvo",
          "english": "I was / he was (estar: estuv-)",
          "category": "Irregular Stems",
          "exampleSentence": {
            "spanish": "Estuve enfermo.",
            "english": "I was sick."
          }
        },
        {
          "id": "v7203",
          "spanish": "hice / hizo",
          "english": "I did/made / he did (hacer: hic-/hiz-)",
          "category": "Irregular Stems",
          "exampleSentence": {
            "spanish": "Hizo buen trabajo.",
            "english": "He did good work."
          }
        },
        {
          "id": "v7204",
          "spanish": "dije / dijeron",
          "english": "I said / they said (decir: dij-)",
          "category": "Irregular Stems",
          "exampleSentence": {
            "spanish": "Dijeron que sí.",
            "english": "They said yes."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7201",
          "front": "U-stem preterite verbs",
          "back": "tener (tuv-), estar (estuv-), poner (pus-), poder (pud-), saber (sup-)",
          "category": "Irregular Preterite"
        },
        {
          "id": "f7202",
          "front": "Do irregular stem preterites have accents?",
          "back": "NO! Zero accents: tuve, tuvo, hice, hizo, dije, dijo",
          "category": "Irregular Preterite"
        }
      ],
      "exercises": [
        {
          "id": "u6-l72-ex1",
          "type": "multiple-choice",
          "prompt": "What is the 3rd person singular (él) preterite form of \"hacer\"?",
          "explanation": "\"Hacer\" uses \"hiz-\" before \"-o\" to preserve phonetic sound: \"él hizo\".",
          "options": [
            {
              "id": "opt1",
              "text": "hizo",
              "subtext": "Correct spelling change (c → z)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "hico",
              "subtext": "Incorrect spelling",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "hició",
              "subtext": "Incorrect form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "hace",
              "subtext": "Present tense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l72-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the 3rd person plural (ellos) preterite of \"decir\" (J-stem takes -eron):",
          "sentenceBefore": "Ellos me",
          "sentenceAfter": "toda la verdad.",
          "correctAnswers": [
            "dijeron",
            "Dijeron"
          ],
          "wordBank": [
            "dijeron",
            "dijieron",
            "decían",
            "dijaron"
          ],
          "hint": "J-stems take -eron without \"i\".",
          "explanation": "J-stems take \"-eron\": \"dijeron\"."
        },
        {
          "id": "u6-l72-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Yesterday I was in Madrid and I had a meeting\"",
          "targetEnglish": "Yesterday I was in Madrid and I had a meeting",
          "correctTokens": [
            "Ayer",
            "estuve",
            "en",
            "Madrid",
            "y",
            "tuve",
            "una",
            "reunión"
          ],
          "availableTokens": [
            "Ayer",
            "estuve",
            "en",
            "Madrid",
            "y",
            "tuve",
            "una",
            "reunión",
            "estaba",
            "tenía"
          ],
          "explanation": "\"Ayer estuve en Madrid y tuve una reunión.\""
        }
      ]
    },
    {
      "id": "u6-l73",
      "slug": "pretimp3",
      "unitId": 6,
      "order": 73,
      "title": "73. Pret. vs Imp. III",
      "subtitle": "Complex Interrupted Action Sentences & Narrative Weaving",
      "estimatedMinutes": 10,
      "iconName": "GitBranch",
      "summary": "Master the interaction between background actions in progress (Imperfect) and sudden interrupting actions (Preterite) connected by \"cuando\".",
      "theory": [
        {
          "id": "u6-l73-t1",
          "title": "The Interrupted Action Blueprint",
          "summary": "The ongoing action in progress takes the Imperfect; the interrupting event takes the Preterite.",
          "formula": {
            "pattern": "[Acción en progreso: Imperfecto] + \"cuando\" + [Acción que interrumpe: Pretérito]",
            "example": "Yo estudiaba (imperfecto) cuando Juan me llamó (pretérito)"
          },
          "examples": [
            {
              "spanish": "Caminábamos por el parque cuando empezó a llover.",
              "english": "We were walking in the park when it began to rain.",
              "audio": "Caminábamos por el parque cuando empezó a llover."
            },
            {
              "spanish": "Yo cocinaba la cena cuando se cortó la luz.",
              "english": "I was cooking dinner when the power went out.",
              "audio": "Yo cocinaba la cena cuando se cortó la luz."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7301",
          "spanish": "se cortó la luz",
          "english": "the power went out (preterite)",
          "category": "Interrupted Actions",
          "exampleSentence": {
            "spanish": "Se cortó la luz anoche.",
            "english": "The power went out last night."
          }
        },
        {
          "id": "v7302",
          "spanish": "empezó a llover",
          "english": "it began to rain (preterite)",
          "category": "Interrupted Actions",
          "exampleSentence": {
            "spanish": "De repente empezó a llover.",
            "english": "Suddenly it began to rain."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7301",
          "front": "Interrupted action formula in past",
          "back": "Imperfect (ongoing action) + cuando + Preterite (interruption)",
          "category": "Past Tenses"
        }
      ],
      "exercises": [
        {
          "id": "u6-l73-ex1",
          "type": "multiple-choice",
          "prompt": "Which sentence correctly combines the ongoing action with the sudden interruption?",
          "explanation": "Ongoing action uses imperfect (caminaba) and sudden event uses preterite (empezó).",
          "options": [
            {
              "id": "opt1",
              "text": "Yo caminaba por la calle cuando empezó a llover.",
              "subtext": "Correct Imperfect background + Preterite interruption",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Yo caminé por la calle cuando empezaba a llover.",
              "subtext": "Inverted logic",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Yo caminaba por la calle cuando empezaba a llover.",
              "subtext": "Missing preterite interruption",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Yo caminé por la calle cuando empezó a llover.",
              "subtext": "Both preterite loses ongoing sense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l73-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the interrupting preterite verb of \"llamar\": \"I was studying when Carlos _______ me.\"",
          "sentenceBefore": "Yo estudiaba en mi habitación cuando Carlos me",
          "sentenceAfter": "por teléfono.",
          "correctAnswers": [
            "llamó",
            "Llamó"
          ],
          "wordBank": [
            "llamó",
            "llamaba",
            "llamo",
            "llama"
          ],
          "hint": "Sudden punctual interruption uses preterite.",
          "explanation": "The sudden interruption takes the preterite: \"llamó\"."
        },
        {
          "id": "u6-l73-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"We were eating dinner when the guests arrived\"",
          "targetEnglish": "We were eating dinner when the guests arrived",
          "correctTokens": [
            "Cenábamos",
            "cuando",
            "llegaron",
            "los",
            "invitados"
          ],
          "availableTokens": [
            "Cenábamos",
            "cuando",
            "llegaron",
            "los",
            "invitados",
            "cenamos",
            "llegaban"
          ],
          "explanation": "\"Cenábamos cuando llegaron los invitados.\""
        }
      ]
    },
    {
      "id": "u6-l74",
      "slug": "pretimp4",
      "unitId": 6,
      "order": 74,
      "title": "74. Pret. vs Imp. Review",
      "subtitle": "Comprehensive Mastery Summary & Diagnostic Decision Strategy",
      "estimatedMinutes": 11,
      "iconName": "CheckCircle2",
      "summary": "Review and solidify the complete past tense system: check your 4-step decision algorithm for selecting between the Preterite and the Imperfect in any narrative context.",
      "theory": [
        {
          "id": "u6-l74-t1",
          "title": "The 4-Step Past Tense Decision Algorithm",
          "summary": "Follow these 4 questions in order whenever you need to choose between the Preterite and Imperfect.",
          "ruleHighlights": [
            {
              "label": "Step 1: Is it Time, Age, or Weather?",
              "description": "YES → Imperfect (Eran las dos, tenía 10 años, hacía frío)",
              "color": "emerald"
            },
            {
              "label": "Step 2: Is it Habitual / Repeated without count?",
              "description": "YES → Imperfect (Siempre jugaba, todos los días)",
              "color": "emerald"
            },
            {
              "label": "Step 3: Is it an ongoing background state in progress?",
              "description": "YES → Imperfect (Yo dormía cuando...)",
              "color": "emerald"
            },
            {
              "label": "Step 4: Is it a completed, bounded action with a start/end?",
              "description": "YES → Preterite (Ayer compré, salí, hablé, de repente)",
              "color": "indigo"
            }
          ],
          "examples": [
            {
              "spanish": "El verano pasado fui a Barcelona (Pret). La ciudad era hermosa (Imp) y hacía buen tiempo (Imp). Un día visité la Sagrada Familia (Pret).",
              "english": "Last summer I went to Barcelona. The city was beautiful and the weather was nice. One day I visited the Sagrada Familia.",
              "audio": "El verano pasado fui a Barcelona."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7401",
          "spanish": "el verano pasado",
          "english": "last summer (Preterite trigger)",
          "category": "Review",
          "exampleSentence": {
            "spanish": "El verano pasado viajé a España.",
            "english": "Last summer I traveled to Spain."
          }
        },
        {
          "id": "v7402",
          "spanish": "de repente",
          "english": "suddenly",
          "category": "Review",
          "exampleSentence": {
            "spanish": "De repente todo cambió.",
            "english": "Suddenly everything changed."
          }
        },
        {
          "id": "v7403",
          "spanish": "a menudo",
          "english": "often (Imperfect trigger)",
          "category": "Review",
          "exampleSentence": {
            "spanish": "A menudo íbamos al cine.",
            "english": "We often went to the movies."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7401",
          "front": "Summary of Preterite vs Imperfect",
          "back": "Preterite = Completed event, interruption, fixed duration\nImperfect = Habit, background description, time, age, weather",
          "category": "Past Tenses"
        }
      ],
      "exercises": [
        {
          "id": "u6-l74-ex1",
          "type": "multiple-choice",
          "prompt": "In the sentence \"Hacía sol cuando nosotros _______ (salir) de casa\", which form is correct?",
          "explanation": "Leaving home is a punctual completed action interrupting the ongoing weather setting: \"salimos\" (Preterite).",
          "options": [
            {
              "id": "opt1",
              "text": "salimos",
              "subtext": "Preterite completed action",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "salíamos",
              "subtext": "Imperfect ongoing form",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "salgamos",
              "subtext": "Subjunctive form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "salieron",
              "subtext": "Wrong subject person (ellos vs nosotros)",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u6-l74-ex2",
          "type": "matching-pairs",
          "prompt": "Match each complete sentence to its grammatical reason:",
          "explanation": "Categorizing past tense usages.",
          "pairs": [
            {
              "id": "p1",
              "left": "Eran las tres de la tarde.",
              "right": "Imperfect: Time in the past"
            },
            {
              "id": "p2",
              "left": "Ayer compré un reloj.",
              "right": "Preterite: Completed action"
            },
            {
              "id": "p3",
              "left": "De niño siempre comía dulces.",
              "right": "Imperfect: Childhood habit"
            },
            {
              "id": "p4",
              "left": "De repente sonó la alarma.",
              "right": "Preterite: Sudden interruption"
            }
          ]
        }
      ]
    }
  ],
  "masteryExam": {
    "id": "unit-6-exam",
    "title": "Unit 6 Comprehensive Mastery Exam",
    "description": "Test your full mastery across all Unit 6 topics: Preterite vs Imperfect (SIMBA vs CHEATED), regular conjugations, spelling changes (-car/-gar/-zar), sandal verbs (durmió), vowel-clash verbs (leyó), meaning shifts (supe, conocí), twin irregulars (ser/ir, dar/ver), and irregular stems (tuve, hice, dije).",
    "passingScore": 80,
    "exercises": [
      {
        "id": "u6-exam-ex1",
        "type": "multiple-choice",
        "prompt": "Which sentence correctly combines the Imperfect (background action) with the Preterite (interruption)?",
        "explanation": "Background ongoing action is Imperfect (caminaba) and sudden interruption is Preterite (empezó).",
        "options": [
          {
            "id": "opt1",
            "text": "Yo caminaba por el parque cuando empezó a llover.",
            "subtext": "Imperfect background + Preterite interruption",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Yo caminé por el parque cuando empezaba a llover.",
            "subtext": "Inverted logic",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Yo caminaba por el parque cuando empezaba a llover.",
            "subtext": "Both imperfect",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Yo caminé por el parque cuando empezó a llover.",
            "subtext": "Both preterite",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u6-exam-ex2",
        "type": "fill-in-blank",
        "prompt": "Fill in the \"yo\" preterite of \"buscar\" (c→qu):",
        "sentenceBefore": "Ayer yo",
        "sentenceAfter": "el libro pero no lo encontré.",
        "correctAnswers": [
          "busqué",
          "Busqué"
        ],
        "wordBank": [
          "busqué",
          "buscé",
          "busco",
          "buscaba"
        ],
        "hint": "-car verbs change c to qu in yo preterite.",
        "explanation": "\"Buscar\" becomes \"busqué\" in the yo preterite."
      },
      {
        "id": "u6-exam-ex3",
        "type": "multiple-choice",
        "prompt": "What is the 3rd person singular (él) preterite form of the irregular verb \"hacer\"?",
        "explanation": "\"Hacer\" forms \"hizo\" in the 3rd person singular (c changes to z before o).",
        "options": [
          {
            "id": "opt1",
            "text": "hizo",
            "subtext": "Correct form (c → z)",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "hico",
            "subtext": "Incorrect spelling",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "hició",
            "subtext": "Incorrect regularization",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "hace",
            "subtext": "Present tense",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u6-exam-ex4",
        "type": "sentence-builder",
        "prompt": "Translate: \"When I was young, I used to go to the beach every summer\"",
        "targetEnglish": "When I was young, I used to go to the beach every summer",
        "correctTokens": [
          "Cuando",
          "era",
          "joven",
          "iba",
          "a",
          "la",
          "playa",
          "cada",
          "verano"
        ],
        "availableTokens": [
          "Cuando",
          "era",
          "joven",
          "iba",
          "a",
          "la",
          "playa",
          "cada",
          "verano",
          "fui",
          "fui a"
        ],
        "explanation": "\"Cuando era joven, iba a la playa cada verano.\""
      },
      {
        "id": "u6-exam-ex5",
        "type": "fill-in-blank",
        "prompt": "Fill in the 3rd person plural (ellos) preterite of \"decir\" (J-stem):",
        "sentenceBefore": "Mis amigos me",
        "sentenceAfter": "toda la verdad.",
        "correctAnswers": [
          "dijeron",
          "Dijeron"
        ],
        "wordBank": [
          "dijeron",
          "dijieron",
          "decían",
          "dijaron"
        ],
        "hint": "J-stems drop the \"i\" in -ieron.",
        "explanation": "J-stems take \"-eron\": \"dijeron\"."
      },
      {
        "id": "u6-exam-ex6",
        "type": "multiple-choice",
        "prompt": "What is the 3rd person singular (él) preterite of the sandal verb \"dormir\"?",
        "explanation": "\"Dormir\" changes \"o\" to \"u\" in the 3rd person preterite: \"durmió\".",
        "options": [
          {
            "id": "opt1",
            "text": "durmió",
            "subtext": "Correct sandal stem change (o → u)",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "dormió",
            "subtext": "Missing stem change",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "duermió",
            "subtext": "Incorrect diphthong",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "dormía",
            "subtext": "Imperfect form",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u6-exam-ex7",
        "type": "fill-in-blank",
        "prompt": "Complete with past clock time: \"It was 10:00 PM when we arrived.\"",
        "sentenceBefore": "",
        "sentenceAfter": "las diez de la noche cuando llegamos.",
        "correctAnswers": [
          "Eran",
          "eran"
        ],
        "wordBank": [
          "Eran",
          "Fueron",
          "Era",
          "Estaban"
        ],
        "hint": "Plural hours in past time use \"Eran\".",
        "explanation": "Telling time in the past uses the imperfect of ser: \"Eran las diez\"."
      },
      {
        "id": "u6-exam-ex8",
        "type": "matching-pairs",
        "prompt": "Match each verb to its meaning shift in the preterite tense:",
        "explanation": "Reviewing preterite meaning shifts.",
        "pairs": [
          {
            "id": "p1",
            "left": "supe la verdad",
            "right": "I found out the truth"
          },
          {
            "id": "p2",
            "left": "conocí a Juan",
            "right": "I met Juan (1st time)"
          },
          {
            "id": "p3",
            "left": "pude aprobar",
            "right": "I managed to pass"
          },
          {
            "id": "p4",
            "left": "no quise ir",
            "right": "I refused to go"
          }
        ]
      },
      {
        "id": "u6-exam-ex9",
        "type": "multiple-choice",
        "prompt": "What is the 3rd person singular preterite of \"leer\" (vowel clash i→y)?",
        "explanation": "\"Leer\" becomes \"leyó\" in the 3rd person singular preterite.",
        "options": [
          {
            "id": "opt1",
            "text": "leyó",
            "subtext": "Correct i → y shift",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "leió",
            "subtext": "Incorrect spelling",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "leía",
            "subtext": "Imperfect form",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "leyeron",
            "subtext": "Plural form",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u6-exam-ex10",
        "type": "error-identification",
        "prompt": "Find the mistake in this sentence:",
        "incorrectSentence": "Ayer yo tuvó un examen muy difícil en la universidad.",
        "errorWord": "tuvó",
        "options": [
          "tuve",
          "tenía",
          "tuviste",
          "tuve un"
        ],
        "correctOption": "tuve",
        "explanation": "Irregular preterite \"yo\" forms end in \"-e\" without an accent: \"yo tuve\"."
      }
    ]
  }
};
