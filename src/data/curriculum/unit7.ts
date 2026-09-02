import type { Unit } from './types';

export const unit7: Unit = {
  "id": 7,
  "title": "Unit 7: The Subjunctive Mood & Adverbs",
  "subtitle": "Lessons 75–84: The Complete Guide to Subjunctive Triggers, Conjugations & Expressions",
  "description": "Master the subjunctive mood in Spanish across all 10 official lessons: expressing \"ago\" with hace, forming adverbs in -mente, the 3-part subjunctive recipe, opposite vowels, orthographic shifts (-car/-gar/-zar/-ger), the DISHES irregulars, and the WEIRDO categories (Desire, Doubt, Impersonal Expressions, and Actions Not Yet Completed).",
  "iconName": "CloudRain",
  "colorTheme": "teal",
  "isAvailable": true,
  "lessons": [
    {
      "id": "u7-l75",
      "slug": "hacerago",
      "unitId": 7,
      "order": 75,
      "title": "75. \"Hace ...\" to mean \"ago\"",
      "subtitle": "Expressing Completed Time Elapsed in the Past",
      "estimatedMinutes": 9,
      "iconName": "Clock",
      "summary": "Learn how to say \"X time ago\" in Spanish using the two versatile sentence structures with \"hace\" + preterite.",
      "theory": [
        {
          "id": "u7-l75-t1",
          "title": "The Two Formulas for \"Ago\" in Spanish",
          "summary": "Combine \"hace\" with a time quantity and a preterite verb.",
          "table": {
            "headers": [
              "Formula",
              "Structure Pattern",
              "Example Sentence"
            ],
            "rows": [
              [
                "Formula 1 (At start)",
                "Hace + [tiempo] + que + [pretérito]",
                "Hace tres días que llegué a Madrid."
              ],
              [
                "Formula 2 (At end)",
                "[pretérito] + hace + [tiempo]",
                "Llegué a Madrid hace tres días."
              ]
            ]
          },
          "content": [
            "Both formulas are 100% equivalent in meaning: *\"Hace dos años me gradué\"* = *\"Me gradué hace dos años\"* (I graduated two years ago)."
          ],
          "examples": [
            {
              "spanish": "Compré este coche hace tres semanas.",
              "english": "I bought this car three weeks ago.",
              "audio": "Compré este coche hace tres semanas."
            },
            {
              "spanish": "Hace dos horas que terminó la película.",
              "english": "The movie finished two hours ago.",
              "audio": "Hace dos horas que terminó la película."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7501",
          "spanish": "hace tres días",
          "english": "three days ago",
          "category": "Time with Hace",
          "exampleSentence": {
            "spanish": "Llegó hace tres días.",
            "english": "He arrived three days ago."
          }
        },
        {
          "id": "v7502",
          "spanish": "hace un mes",
          "english": "a month ago",
          "category": "Time with Hace",
          "exampleSentence": {
            "spanish": "Empecé el curso hace un mes.",
            "english": "I started the course a month ago."
          }
        },
        {
          "id": "v7503",
          "spanish": "hace mucho tiempo",
          "english": "a long time ago",
          "category": "Time with Hace",
          "exampleSentence": {
            "spanish": "Ocurrió hace mucho tiempo.",
            "english": "It happened a long time ago."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7501",
          "front": "How to say \"two days ago\" in Spanish?",
          "back": "Hace dos días / [Verbo pretérito] hace dos días",
          "category": "Expressions with Hace"
        }
      ],
      "exercises": [
        {
          "id": "u7-l75-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"I arrived in Madrid two hours ago\" in Spanish?",
          "explanation": "\"Llegué a Madrid hace dos horas\" or \"Hace dos horas que llegué a Madrid\".",
          "options": [
            {
              "id": "opt1",
              "text": "Llegué a Madrid hace dos horas.",
              "subtext": "Correct preterite + hace + time",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Llego a Madrid hace dos horas.",
              "subtext": "Present tense",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Llegué a Madrid desde dos horas.",
              "subtext": "Incorrect preposition",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Hace dos horas llego a Madrid.",
              "subtext": "Missing que / wrong tense",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l75-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete with \"hace\": \"The train departed 10 minutes ago.\"",
          "sentenceBefore": "El tren salió",
          "sentenceAfter": "diez minutos.",
          "correctAnswers": [
            "hace",
            "Hace"
          ],
          "wordBank": [
            "hace",
            "desde",
            "por",
            "para"
          ],
          "hint": "Means \"ago\".",
          "explanation": "\"Hace diez minutos\" means \"10 minutes ago\"."
        },
        {
          "id": "u7-l75-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I bought this book three days ago\"",
          "targetEnglish": "I bought this book three days ago",
          "correctTokens": [
            "Compré",
            "este",
            "libro",
            "hace",
            "tres",
            "días"
          ],
          "availableTokens": [
            "Compré",
            "este",
            "libro",
            "hace",
            "tres",
            "días",
            "compro",
            "desde"
          ],
          "explanation": "\"Compré este libro hace tres días.\""
        }
      ]
    },
    {
      "id": "u7-l76",
      "slug": "adverbs",
      "unitId": 7,
      "order": 76,
      "title": "76. Formation of Adverbs",
      "subtitle": "Forming Adverbs with the -mente Suffix & Common Adverbs",
      "estimatedMinutes": 9,
      "iconName": "Zap",
      "summary": "Learn how to form Spanish adverbs by adding \"-mente\" to the feminine singular form of an adjective, and preserve written accent marks.",
      "theory": [
        {
          "id": "u7-l76-t1",
          "title": "The -mente Adverb Formation Rule",
          "summary": "Take the feminine singular adjective and attach \"-mente\". If the original adjective has an accent, keep it!",
          "table": {
            "headers": [
              "Adjective (Masc)",
              "Feminine Form",
              "Adverb (-mente)",
              "English Translation"
            ],
            "rows": [
              [
                "rápido",
                "rápida",
                "rápidamente (accent kept!)",
                "quickly / rapidly"
              ],
              [
                "lento",
                "lenta",
                "lentamente",
                "slowly"
              ],
              [
                "claro",
                "clara",
                "claramente",
                "clearly"
              ],
              [
                "fácil",
                "fácil (gender-neutral)",
                "fácilmente (accent kept!)",
                "easily"
              ],
              [
                "feliz",
                "feliz (gender-neutral)",
                "felizmente",
                "happily"
              ]
            ]
          },
          "content": [
            "**Two consecutive -mente adverbs**: If two adverbs ending in -mente are joined by *y* or *pero*, only the SECOND one keeps the suffix: *\"Habló clara y rápidamente\"* (He spoke clearly and quickly)."
          ],
          "examples": [
            {
              "spanish": "Ella explicó la lección claramente.",
              "english": "She explained the lesson clearly.",
              "audio": "Ella explicó la lección claramente."
            },
            {
              "spanish": "El estudiante resolvió el problema fácilmente.",
              "english": "The student solved the problem easily.",
              "audio": "El estudiante resolvió el problema fácilmente."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7601",
          "spanish": "rápidamente",
          "english": "quickly / rapidly",
          "category": "Adverbs",
          "exampleSentence": {
            "spanish": "Corrió rápidamente.",
            "english": "He ran quickly."
          }
        },
        {
          "id": "v7602",
          "spanish": "fácilmente",
          "english": "easily",
          "category": "Adverbs",
          "exampleSentence": {
            "spanish": "Aprobó fácilmente.",
            "english": "He passed easily."
          }
        },
        {
          "id": "v7603",
          "spanish": "despacio",
          "english": "slowly (stand-alone adverb)",
          "category": "Adverbs",
          "exampleSentence": {
            "spanish": "Habla despacio, por favor.",
            "english": "Speak slowly, please."
          }
        },
        {
          "id": "v7604",
          "spanish": "temprano / tarde",
          "english": "early / late",
          "category": "Adverbs",
          "exampleSentence": {
            "spanish": "Llegué temprano hoy.",
            "english": "I arrived early today."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7601",
          "front": "How to form adverbs in Spanish?",
          "back": "Feminine singular adjective + \"-mente\"\n(Keep original written accents: rápida → rápidamente)",
          "category": "Adverbs"
        },
        {
          "id": "f7602",
          "front": "How to combine two -mente adverbs?",
          "back": "Only suffix the second: \"clara y rápidamente\"",
          "category": "Adverbs"
        }
      ],
      "exercises": [
        {
          "id": "u7-l76-ex1",
          "type": "multiple-choice",
          "prompt": "What is the correct adverb formed from the adjective \"rápido\"?",
          "explanation": "Take feminine \"rápida\" + \"mente\", keeping the accent: \"rápidamente\".",
          "options": [
            {
              "id": "opt1",
              "text": "rápidamente",
              "subtext": "Correct feminine base + preserved accent",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "rapidomente",
              "subtext": "Incorrect masculine base",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "rapidamente",
              "subtext": "Missing mandatory accent mark",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "rápida mente",
              "subtext": "Must be written as a single word",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l76-ex2",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"He answered clearly and politely\"",
          "targetEnglish": "He answered clearly and politely",
          "correctTokens": [
            "Él",
            "respondió",
            "clara",
            "y",
            "educadamente"
          ],
          "availableTokens": [
            "Él",
            "respondió",
            "clara",
            "y",
            "educadamente",
            "claramente",
            "educada"
          ],
          "explanation": "\"Él respondió clara y educadamente.\" (When two adverbs are paired, only the second takes -mente)."
        }
      ]
    },
    {
      "id": "u7-l77",
      "slug": "subj1",
      "unitId": 7,
      "order": 77,
      "title": "77. Subjunctive I: Introduction",
      "subtitle": "Mood vs. Tense, The 3-Part Recipe & The WEIRDO Framework",
      "estimatedMinutes": 11,
      "iconName": "HelpCircle",
      "summary": "Understand the fundamental philosophy of the Subjunctive: it is a MOOD expressing subjectivity, desire, doubt, and emotions—not objective factual reality (Indicative).",
      "theory": [
        {
          "id": "u7-l77-t1",
          "title": "The 3-Part Subjunctive Recipe",
          "summary": "To trigger the Subjunctive in Spanish, all three components MUST be present.",
          "table": {
            "headers": [
              "Component",
              "Requirement",
              "Example"
            ],
            "rows": [
              [
                "Clause 1 (Main Clause)",
                "Subject 1 + WEIRDO Verb (wish, emotion, doubt, etc.)",
                "Yo quiero (S1: Yo, Verb: querer)"
              ],
              [
                "Connector",
                "The relative conjunction \"que\"",
                "...que..."
              ],
              [
                "Clause 2 (Subordinate Clause)",
                "Subject 2 (DIFFERENT from S1!) + Verb in SUBJUNCTIVE",
                "...tú comas más frutas. (S2: tú)"
              ]
            ]
          },
          "content": [
            "**The Same Subject Rule**: If Subject 1 and Subject 2 are the same person, do NOT use \"que\" or the Subjunctive—use the **Infinitive**!:",
            "• *Yo quiero comer* (Same subject: I want to eat → Infinitive).",
            "• *Yo quiero que tú comas* (Two different subjects: I want YOU to eat → Subjunctive)."
          ],
          "examples": [
            {
              "spanish": "Mi madre quiere que yo estudie medicina.",
              "english": "My mother wants me to study medicine. (S1: Mother, S2: I → Subjunctive: estudie)",
              "audio": "Mi madre quiere que yo estudie medicina."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7701",
          "spanish": "quiero que...",
          "english": "I want (someone) to...",
          "category": "Subjunctive Triggers",
          "exampleSentence": {
            "spanish": "Quiero que vengas.",
            "english": "I want you to come."
          }
        },
        {
          "id": "v7702",
          "spanish": "espero que...",
          "english": "I hope that...",
          "category": "Subjunctive Triggers",
          "exampleSentence": {
            "spanish": "Espero que tengas un buen día.",
            "english": "I hope you have a nice day."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7701",
          "front": "The 3-part Subjunctive Recipe",
          "back": "1. S1 + WEIRDO verb\n2. \"que\"\n3. S2 + Subjunctive verb (S1 ≠ S2)",
          "category": "Subjunctive"
        },
        {
          "id": "f7702",
          "front": "What if S1 and S2 are the same subject?",
          "back": "Use the INFINITIVE: \"Quiero estudiar\" (Not subjunctive)",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l77-ex1",
          "type": "multiple-choice",
          "prompt": "Why does \"Yo quiero que tú estudies\" use the subjunctive?",
          "explanation": "It has two different subjects (yo vs tú), connected by \"que\", and a main verb of desire (querer).",
          "options": [
            {
              "id": "opt1",
              "text": "Two different subjects (yo ≠ tú) + \"que\" + verb of desire",
              "subtext": "Satisfies all 3 subjunctive requirements",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Because it is in the past tense",
              "subtext": "Incorrect",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Because \"estudiar\" is always subjunctive",
              "subtext": "Incorrect",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Because of the word \"yo\"",
              "subtext": "Incorrect",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l77-ex2",
          "type": "multiple-choice",
          "prompt": "How do you say \"I want to travel to Spain\" (same subject)?",
          "explanation": "When S1 and S2 are the same person, use the INFINITIVE without \"que\": \"Quiero viajar\".",
          "options": [
            {
              "id": "opt1",
              "text": "Quiero viajar a España.",
              "subtext": "Correct infinitive for same subject",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Quiero que yo viaje a España.",
              "subtext": "Unnatural redundancy in Spanish",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Quiero viajo a España.",
              "subtext": "Incorrect syntax",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Espero viajo a España.",
              "subtext": "Incorrect syntax",
              "isCorrect": false
            }
          ]
        }
      ]
    },
    {
      "id": "u7-l78",
      "slug": "subj2",
      "unitId": 7,
      "order": 78,
      "title": "78. Subjunctive II",
      "subtitle": "Conjugating Regular & Stem-Changing Verbs (Opposite Vowels)",
      "estimatedMinutes": 11,
      "iconName": "Zap",
      "summary": "Learn the \"Opposite Vowels\" formula for the Present Subjunctive: -AR verbs switch to -E endings, while -ER and -IR verbs switch to -A endings.",
      "theory": [
        {
          "id": "u7-l78-t1",
          "title": "The 3-Step Present Subjunctive Conjugation Formula",
          "summary": "1. Take the present \"yo\" form → 2. Drop the \"-o\" → 3. Add the opposite vowel endings!",
          "table": {
            "headers": [
              "Pronoun",
              "-AR Ending (HABLAR → hable)",
              "-ER Ending (COMER → coma)",
              "-IR Ending (VIVIR → viva)"
            ],
            "rows": [
              [
                "yo",
                "-e (hable)",
                "-a (coma)",
                "-a (viva)"
              ],
              [
                "tú",
                "-es (hables)",
                "-as (comas)",
                "-as (vivas)"
              ],
              [
                "él / ella / usted",
                "-e (hable)",
                "-a (coma)",
                "-a (viva)"
              ],
              [
                "nosotros / nosotras",
                "-emos (hablemos)",
                "-amos (comamos)",
                "-amos (vivamos)"
              ],
              [
                "vosotros / vosotras",
                "-éis (habléis)",
                "-áis (comáis)",
                "-áis (viváis)"
              ],
              [
                "ellos / ellas / ustedes",
                "-en (hablen)",
                "-an (coman)",
                "-an (vivan)"
              ]
            ]
          },
          "content": [
            "**Stem-Changers in the Subjunctive**:",
            "• **-AR & -ER stem changers** (querer, poder, pensar) follow the BOOT rule: they stem-change in all forms EXCEPT nosotros/vosotros (*quiera, quieras, quiera, **queramos**, quieran*).",
            "• **-IR stem changers** (dormir, pedir, sentir) ALSO change in nosotros/vosotros: o→u (*durmamos*), e→i (*pidamos, sintamos*)!"
          ],
          "examples": [
            {
              "spanish": "Espero que comas bien hoy.",
              "english": "I hope you eat well today. (comer: opposite vowel -as)",
              "audio": "Espero que comas bien hoy."
            },
            {
              "spanish": "Ojalá que no durmamos demasiado.",
              "english": "I hope we don't sleep too much. (dormir: nosotros o→u durmamos)",
              "audio": "Ojalá que no durmamos demasiado."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7801",
          "spanish": "hable / hables",
          "english": "speak (subjunctive)",
          "category": "Subjunctive Conjugations",
          "exampleSentence": {
            "spanish": "Quiero que hables español.",
            "english": "I want you to speak Spanish."
          }
        },
        {
          "id": "v7802",
          "spanish": "coma / comas",
          "english": "eat (subjunctive)",
          "category": "Subjunctive Conjugations",
          "exampleSentence": {
            "spanish": "Es importante que comas.",
            "english": "It is important that you eat."
          }
        },
        {
          "id": "v7803",
          "spanish": "durmamos",
          "english": "we sleep (dormir: nosotros subjunctive)",
          "category": "Subjunctive Conjugations",
          "exampleSentence": {
            "spanish": "Ojalá que durmamos bien.",
            "english": "I hope we sleep well."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7801",
          "front": "Opposite Vowel Subjunctive Rule",
          "back": "-AR verbs take -E (hable, hables, hable, hablemos, hablen)\n-ER/-IR verbs take -A (coma, comas, coma, comamos, coman)",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l78-ex1",
          "type": "multiple-choice",
          "prompt": "What is the present subjunctive form of \"hablar\" for \"tú\"?",
          "explanation": "-AR verbs take -E endings in the subjunctive: \"tú hables\".",
          "options": [
            {
              "id": "opt1",
              "text": "hables",
              "subtext": "Correct opposite vowel ending (-AR takes -es)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "hablas",
              "subtext": "Indicative present tense",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "hable",
              "subtext": "yo or él form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "hablis",
              "subtext": "Incorrect ending",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l78-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the present subjunctive of \"escribir\" for \"ella\" (opposite vowel -a):",
          "sentenceBefore": "Quiero que ella me",
          "sentenceAfter": "una carta pronto.",
          "correctAnswers": [
            "escriba",
            "Escriba"
          ],
          "wordBank": [
            "escriba",
            "escribe",
            "escribas",
            "escribió"
          ],
          "hint": "-IR verbs take -a in subjunctive.",
          "explanation": "\"Escribir\" takes the opposite vowel \"-a\" for ella: \"escriba\"."
        },
        {
          "id": "u7-l78-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I want you to eat more fruit\"",
          "targetEnglish": "I want you to eat more fruit",
          "correctTokens": [
            "Quiero",
            "que",
            "tú",
            "comas",
            "más",
            "fruta"
          ],
          "availableTokens": [
            "Quiero",
            "que",
            "tú",
            "comas",
            "más",
            "fruta",
            "comes",
            "comer"
          ],
          "explanation": "\"Quiero que tú comas más fruta.\""
        }
      ]
    },
    {
      "id": "u7-l79",
      "slug": "subj3",
      "unitId": 7,
      "order": 79,
      "title": "79. Subjunctive III",
      "subtitle": "Orthographic Spelling Shifts (-car, -gar, -zar, -ger, -guir)",
      "estimatedMinutes": 10,
      "iconName": "Edit3",
      "summary": "Learn the spelling changes that maintain consistent consonant sounds across ALL persons of the subjunctive mood.",
      "theory": [
        {
          "id": "u7-l79-t1",
          "title": "Subjunctive Orthographic Shift Table",
          "summary": "Unlike the preterite (where changes only happen in \"yo\"), in the Subjunctive these spelling changes apply to ALL 6 PERSONS!",
          "table": {
            "headers": [
              "Pattern",
              "Shift",
              "Infinitive",
              "Subjunctive yo / tú / él / nosotros / ellos"
            ],
            "rows": [
              [
                "-CAR",
                "c → qu",
                "buscar",
                "busque, busques, busque, busquemos, busquen"
              ],
              [
                "-GAR",
                "g → gu",
                "pagar",
                "pague, pagues, pague, paguemos, paguen"
              ],
              [
                "-ZAR",
                "z → c",
                "empezar",
                "empiece, empieces, empiece, empecemos, empiecen"
              ],
              [
                "-GER / -GIR",
                "g → j",
                "escoger",
                "escoja, escojas, escoja, escojamos, escojan"
              ],
              [
                "-GUIR",
                "gu → g",
                "distinguir",
                "distinga, distingas, distinga, distingamos, distingan"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Es necesario que busquemos una solución.",
              "english": "It is necessary that we look for a solution. (buscar → busquemos)",
              "audio": "Es necesario que busquemos una solución."
            },
            {
              "spanish": "Quiero que pagues la cuenta.",
              "english": "I want you to pay the bill. (pagar → pagues)",
              "audio": "Quiero que pagues la cuenta."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v7901",
          "spanish": "busque / busquemos",
          "english": "search (buscar: subjunctive)",
          "category": "Orthographic Subjunctive",
          "exampleSentence": {
            "spanish": "Busque aquí.",
            "english": "Look here."
          }
        },
        {
          "id": "v7902",
          "spanish": "pague / paguen",
          "english": "pay (pagar: subjunctive)",
          "category": "Orthographic Subjunctive",
          "exampleSentence": {
            "spanish": "Paguen la cuenta.",
            "english": "Pay the bill."
          }
        },
        {
          "id": "v7903",
          "spanish": "escoja",
          "english": "choose (escoger: subjunctive)",
          "category": "Orthographic Subjunctive",
          "exampleSentence": {
            "spanish": "Escoja lo que quiera.",
            "english": "Choose whatever you want."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f7901",
          "front": "Subjunctive shifts for -car, -gar, -zar, -ger",
          "back": "-car → -qu (busque)\n-gar → -gu (pague)\n-zar → -c (empiece)\n-ger → -j (escoja)\n(Applies to ALL forms!)",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l79-ex1",
          "type": "multiple-choice",
          "prompt": "What is the subjunctive form of \"buscar\" for \"nosotros\"?",
          "explanation": "-CAR verbs change \"c\" to \"qu\" in all subjunctive forms: \"busquemos\".",
          "options": [
            {
              "id": "opt1",
              "text": "busquemos",
              "subtext": "Correct c → qu orthographic change",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "buscemos",
              "subtext": "Incorrect spelling",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "buscamos",
              "subtext": "Present indicative form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "busquiemos",
              "subtext": "Incorrect form",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l79-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the subjunctive of \"pagar\" (g→gu) for \"tú\":",
          "sentenceBefore": "Es importante que tú",
          "sentenceAfter": "tus deudas a tiempo.",
          "correctAnswers": [
            "pagues",
            "Pagues"
          ],
          "wordBank": [
            "pagues",
            "pages",
            "pagas",
            "pagué"
          ],
          "hint": "g changes to gu before -es.",
          "explanation": "\"Pagar\" becomes \"pagues\" in the subjunctive for tú."
        }
      ]
    },
    {
      "id": "u7-l80",
      "slug": "subj4",
      "unitId": 7,
      "order": 80,
      "title": "80. Subjunctive IV",
      "subtitle": "The 6 Highly Irregular Verbs: D.I.S.H.E.S.",
      "estimatedMinutes": 11,
      "iconName": "ShieldAlert",
      "summary": "Master the 6 famous irregular verbs in the Present Subjunctive using the D.I.S.H.E.S. mnemonic: Dar, Ir, Ser, Haber, Estar, Saber.",
      "theory": [
        {
          "id": "u7-l80-t1",
          "title": "The D.I.S.H.E.S. Master Table",
          "summary": "These 6 verbs cannot follow the standard \"yo - o\" drop rule.",
          "table": {
            "headers": [
              "Verb",
              "yo",
              "tú",
              "él / ella",
              "nosotros",
              "ellos / ellas"
            ],
            "rows": [
              [
                "D - Dar",
                "dé (accent!)",
                "des",
                "dé (accent!)",
                "demos",
                "den"
              ],
              [
                "I - Ir",
                "vaya",
                "vayas",
                "vaya",
                "vayamos",
                "vayan"
              ],
              [
                "S - Ser",
                "sea",
                "seas",
                "sea",
                "seamos",
                "sean"
              ],
              [
                "H - Haber",
                "haya",
                "hayas",
                "haya",
                "hayamos",
                "hayan"
              ],
              [
                "E - Estar",
                "esté (accent!)",
                "estés (accent!)",
                "esté (accent!)",
                "estemos",
                "estén (accent!)"
              ],
              [
                "S - Saber",
                "sepa",
                "sepas",
                "sepa",
                "sepamos",
                "sepan"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Espero que vayas a la fiesta.",
              "english": "I hope you go to the party. (ir → vayas)",
              "audio": "Espero que vayas a la fiesta."
            },
            {
              "spanish": "Quiero que seas feliz.",
              "english": "I want you to be happy. (ser → seas)",
              "audio": "Quiero que seas feliz."
            },
            {
              "spanish": "Ojalá que no haya problemas.",
              "english": "Hopefully there are no problems. (haber → haya)",
              "audio": "Ojalá que no haya problemas."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8001",
          "spanish": "vaya / vayas",
          "english": "go (ir: subjunctive)",
          "category": "DISHES Irregulars",
          "exampleSentence": {
            "spanish": "Espero que vayas.",
            "english": "I hope you go."
          }
        },
        {
          "id": "v8002",
          "spanish": "sea / seas",
          "english": "be (ser: subjunctive)",
          "category": "DISHES Irregulars",
          "exampleSentence": {
            "spanish": "Sé valiente y que seas feliz.",
            "english": "Be brave and may you be happy."
          }
        },
        {
          "id": "v8003",
          "spanish": "haya",
          "english": "there be (haber: subjunctive)",
          "category": "DISHES Irregulars",
          "exampleSentence": {
            "spanish": "Ojalá que haya comida.",
            "english": "Hopefully there is food."
          }
        },
        {
          "id": "v8004",
          "spanish": "sepa / sepas",
          "english": "know (saber: subjunctive)",
          "category": "DISHES Irregulars",
          "exampleSentence": {
            "spanish": "Dudo que él lo sepa.",
            "english": "I doubt he knows it."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8001",
          "front": "What are the 6 D.I.S.H.E.S. irregular subjunctives?",
          "back": "Dar (dé), Ir (vaya), Ser (sea), Haber (haya), Estar (esté), Saber (sepa)",
          "category": "DISHES Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l80-ex1",
          "type": "multiple-choice",
          "prompt": "What is the present subjunctive form of \"ir\" for \"tú\"?",
          "explanation": "\"Ir\" in the subjunctive is \"vaya, vayas, vaya...\": \"tú vayas\".",
          "options": [
            {
              "id": "opt1",
              "text": "vayas",
              "subtext": "Correct DISHES form for IR",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "vas",
              "subtext": "Present indicative",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "iras",
              "subtext": "Incorrect",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "vayas a",
              "subtext": "Incomplete",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l80-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the subjunctive of \"ser\" for \"tú\": \"I want you to be very happy.\"",
          "sentenceBefore": "Quiero que tú",
          "sentenceAfter": "muy feliz en tu nuevo trabajo.",
          "correctAnswers": [
            "seas",
            "Seas"
          ],
          "wordBank": [
            "seas",
            "eres",
            "sea",
            "eras"
          ],
          "hint": "Subjunctive of ser for tú.",
          "explanation": "\"Ser\" in the subjunctive for tú is \"seas\"."
        },
        {
          "id": "u7-l80-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I hope that there are no problems\"",
          "targetEnglish": "I hope that there are no problems",
          "correctTokens": [
            "Espero",
            "que",
            "no",
            "haya",
            "problemas"
          ],
          "availableTokens": [
            "Espero",
            "que",
            "no",
            "haya",
            "problemas",
            "hay",
            "ha"
          ],
          "explanation": "\"Espero que no haya problemas.\" (Haber -> haya)."
        }
      ]
    },
    {
      "id": "u7-l81",
      "slug": "subj5",
      "unitId": 7,
      "order": 81,
      "title": "81. Subjunctive V: Desire",
      "subtitle": "Verbs of Will, Wishes, Hopes & Requests (Querer, Desear, Ojalá)",
      "estimatedMinutes": 10,
      "iconName": "Heart",
      "summary": "Master the \"W\" (Wishes) of WEIRDO: using verbs of desire, command, and hope (querer, desear, esperar, preferir, exigir, aconsejar, and ¡Ojalá!).",
      "theory": [
        {
          "id": "u7-l81-t1",
          "title": "Verbs of Desire and Will",
          "summary": "When you express what you want someone else to do, the second verb must be in the subjunctive.",
          "table": {
            "headers": [
              "Trigger Verb",
              "Meaning",
              "Example Sentence"
            ],
            "rows": [
              [
                "querer que...",
                "to want (someone) to...",
                "Quiero que vengas a mi fiesta."
              ],
              [
                "desear que...",
                "to wish / desire that...",
                "Deseo que tengas éxito."
              ],
              [
                "esperar que...",
                "to hope that...",
                "Espero que descanses bien."
              ],
              [
                "preferir que...",
                "to prefer that...",
                "Prefiero que no hables de eso."
              ],
              [
                "aconsejar que...",
                "to advise that...",
                "Te aconsejo que estudies más."
              ],
              [
                "¡Ojalá (que)!",
                "I hope to God! / Hopefully...",
                "¡Ojalá que llueva mañana!"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Mis padres quieren que yo estudie todos los días.",
              "english": "My parents want me to study every day.",
              "audio": "Mis padres quieren que yo estudie todos los días."
            },
            {
              "spanish": "¡Ojalá que tengas un buen viaje!",
              "english": "Hopefully you have a great trip!",
              "audio": "¡Ojalá que tengas un buen viaje!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8101",
          "spanish": "desear que",
          "english": "to wish that",
          "category": "Wishes Triggers",
          "exampleSentence": {
            "spanish": "Deseo que seas feliz.",
            "english": "I wish that you be happy."
          }
        },
        {
          "id": "v8102",
          "spanish": "preferir que",
          "english": "to prefer that",
          "category": "Wishes Triggers",
          "exampleSentence": {
            "spanish": "Prefiero que salgamos hoy.",
            "english": "I prefer that we go out today."
          }
        },
        {
          "id": "v8103",
          "spanish": "¡Ojalá!",
          "english": "Hopefully! / I hope so!",
          "category": "Wishes Triggers",
          "exampleSentence": {
            "spanish": "¡Ojalá que todo salga bien!",
            "english": "Hopefully everything turns out well!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8101",
          "front": "Does \"¡Ojalá!\" always take the subjunctive?",
          "back": "YES! \"Ojalá que + Subjuntivo\" always triggers the subjunctive mood.",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l81-ex1",
          "type": "multiple-choice",
          "prompt": "Which verb form completes: \"Te aconsejo que _______ (descansar)\"?",
          "explanation": "\"Aconsejar que\" is a verb of recommendation/will and triggers the subjunctive: \"descanses\".",
          "options": [
            {
              "id": "opt1",
              "text": "descanses",
              "subtext": "Subjunctive opposite vowel ending",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "descansas",
              "subtext": "Indicative present",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "descansar",
              "subtext": "Infinitive (requires conjugated subjunctive)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "descansó",
              "subtext": "Preterite",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l81-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the subjunctive of \"tener\" for \"tú\": \"¡Ojalá que tú _______ suerte!\"",
          "sentenceBefore": "¡Ojalá que tú",
          "sentenceAfter": "mucha suerte en tu examen!",
          "correctAnswers": [
            "tengas",
            "Tengas"
          ],
          "wordBank": [
            "tengas",
            "tienes",
            "tuviste",
            "tenga"
          ],
          "hint": "Subjunctive of tener for tú.",
          "explanation": "\"Ojalá que tengas suerte\" (Tener -> tengas)."
        }
      ]
    },
    {
      "id": "u7-l82",
      "slug": "subj6",
      "unitId": 7,
      "order": 82,
      "title": "82. Subjunctive VI: Ignorance, Doubt & Denial",
      "subtitle": "Doubt (Subjunctive) vs. Certainty (Indicative)",
      "estimatedMinutes": 11,
      "iconName": "HelpCircle",
      "summary": "Master the \"D\" (Doubt/Denial) of WEIRDO: when a speaker doubts or denies a statement, use the Subjunctive. When the speaker expresses certainty or belief, use the Indicative.",
      "theory": [
        {
          "id": "u7-l82-t1",
          "title": "The Doubt vs. Certainty Matrix",
          "summary": "Doubt triggers Subjunctive; Certainty triggers Indicative.",
          "table": {
            "headers": [
              "Expression Type",
              "Triggers SUBJUNCTIVE (Doubt / Uncertainty)",
              "Triggers INDICATIVE (Certainty / Belief)"
            ],
            "rows": [
              [
                "Belief / Opinion",
                "No creo que... / No pienso que...",
                "Creo que... / Pienso que... (es verdad)"
              ],
              [
                "Doubt / Denial",
                "Dudo que... / Niego que...",
                "No dudo que... (no doubt = certainty)"
              ],
              [
                "Truth / Reality",
                "No es verdad que... / Es dudoso que...",
                "Es verdad que... / Es obvio que..."
              ],
              [
                "Example",
                "No creo que él venga hoy. (Subj)",
                "Creo que él viene hoy. (Ind)"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Dudo que ellos sepan la respuesta.",
              "english": "I doubt that they know the answer. (Doubt → Subjunctive: sepan)",
              "audio": "Dudo que ellos sepan la respuesta."
            },
            {
              "spanish": "Es verdad que Madrid es la capital.",
              "english": "It is true that Madrid is the capital. (Certainty → Indicative: es)",
              "audio": "Es verdad que Madrid es la capital."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8201",
          "spanish": "dudo que...",
          "english": "I doubt that... (triggers subjunctive)",
          "category": "Doubt Triggers",
          "exampleSentence": {
            "spanish": "Dudo que sea verdad.",
            "english": "I doubt that it is true."
          }
        },
        {
          "id": "v8202",
          "spanish": "no creo que...",
          "english": "I don't believe that... (triggers subjunctive)",
          "category": "Doubt Triggers",
          "exampleSentence": {
            "spanish": "No creo que llueva.",
            "english": "I don't believe it will rain."
          }
        },
        {
          "id": "v8203",
          "spanish": "creo que...",
          "english": "I believe that... (triggers indicative)",
          "category": "Certainty Triggers",
          "exampleSentence": {
            "spanish": "Creo que él tiene razón.",
            "english": "I believe he is right."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8201",
          "front": "Does \"Creo que...\" trigger the subjunctive?",
          "back": "NO! \"Creo que\" expresses belief/certainty and takes the INDICATIVE.\n\"No creo que\" triggers the SUBJUNCTIVE.",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l82-ex1",
          "type": "multiple-choice",
          "prompt": "Which form correctly completes: \"No creo que Carlos _______ (venir) hoy\"?",
          "explanation": "\"No creo que\" expresses doubt/disbelief and requires the subjunctive: \"venga\".",
          "options": [
            {
              "id": "opt1",
              "text": "venga",
              "subtext": "Subjunctive form triggered by \"No creo que\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "viene",
              "subtext": "Indicative form (only for \"Creo que\")",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "vendrá",
              "subtext": "Future indicative",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "vino",
              "subtext": "Preterite indicative",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l82-ex2",
          "type": "multiple-choice",
          "prompt": "Which form correctly completes: \"Creo que Carlos _______ (tener) razón\"?",
          "explanation": "\"Creo que\" expresses affirmative belief/certainty and takes the INDICATIVE: \"tiene\".",
          "options": [
            {
              "id": "opt1",
              "text": "tiene",
              "subtext": "Indicative present (certainty)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "tenga",
              "subtext": "Subjunctive (only for \"No creo que\")",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "tuviera",
              "subtext": "Imperfect subjunctive",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "tendrá que",
              "subtext": "Incorrect",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l82-ex3",
          "type": "fill-in-blank",
          "prompt": "Fill in the subjunctive of \"ser\" for \"él\": \"Dudo que _______ verdad.\"",
          "sentenceBefore": "Dudo que eso",
          "sentenceAfter": "verdad.",
          "correctAnswers": [
            "sea",
            "Sea"
          ],
          "wordBank": [
            "sea",
            "es",
            "era",
            "fue"
          ],
          "hint": "Subjunctive of ser.",
          "explanation": "\"Dudar que\" triggers the subjunctive: \"sea\"."
        }
      ]
    },
    {
      "id": "u7-l83",
      "slug": "subj7",
      "unitId": 7,
      "order": 83,
      "title": "83. Subjunctive VII: Impersonal Expressions",
      "subtitle": "Es necesario que, Es importante que, Es bueno que & Value Judgments",
      "estimatedMinutes": 10,
      "iconName": "Sparkles",
      "summary": "Master the \"I\" (Impersonal Expressions) of WEIRDO: impersonal value judgments (es necesario, es importante, es bueno, es una lástima) trigger the Subjunctive when followed by \"que\" and a specific subject.",
      "theory": [
        {
          "id": "u7-l83-t1",
          "title": "Impersonal Expressions Triggering Subjunctive",
          "summary": "Value judgments with \"Es + adj + que\" take the Subjunctive.",
          "table": {
            "headers": [
              "Impersonal Expression",
              "English Meaning",
              "Example with Subjunctive"
            ],
            "rows": [
              [
                "Es necesario que...",
                "It is necessary that...",
                "Es necesario que estudies para el examen."
              ],
              [
                "Es importante que...",
                "It is important that...",
                "Es importante que comas saludable."
              ],
              [
                "Es una lástima que...",
                "It is a pity / shame that...",
                "Es una lástima que no puedas venir."
              ],
              [
                "Es mejor que...",
                "It is better that...",
                "Es mejor que salgamos temprano."
              ],
              [
                "Es posible / probable que...",
                "It is possible / probable that...",
                "Es posible que llueva esta tarde."
              ]
            ]
          },
          "content": [
            "**Impersonal expressions of fact take INDICATIVE**: *Es verdad que, es obvio que, es evidente que, es seguro que* describe objective facts and therefore take the INDICATIVE (*\"Es obvio que él sabe la respuesta\"*)."
          ],
          "examples": [
            {
              "spanish": "Es importante que llegues a tiempo.",
              "english": "It is important that you arrive on time. (Subjunctive: llegues)",
              "audio": "Es importante que llegues a tiempo."
            },
            {
              "spanish": "Es una lástima que ellos estén enfermos.",
              "english": "It is a shame that they are sick. (Subjunctive: estén)",
              "audio": "Es una lástima que ellos estén enfermos."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8301",
          "spanish": "es necesario que",
          "english": "it is necessary that",
          "category": "Impersonal Triggers",
          "exampleSentence": {
            "spanish": "Es necesario que practiques.",
            "english": "It is necessary that you practice."
          }
        },
        {
          "id": "v8302",
          "spanish": "es una lástima que",
          "english": "it is a shame / pity that",
          "category": "Impersonal Triggers",
          "exampleSentence": {
            "spanish": "Es una lástima que no vengas.",
            "english": "It is a pity that you are not coming."
          }
        },
        {
          "id": "v8303",
          "spanish": "es mejor que",
          "english": "it is better that",
          "category": "Impersonal Triggers",
          "exampleSentence": {
            "spanish": "Es mejor que esperemos.",
            "english": "It is better that we wait."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8301",
          "front": "Do impersonal value judgments take subjunctive?",
          "back": "YES! \"Es necesario que\", \"Es importante que\", \"Es bueno que\" take the Subjunctive.\n(Except fact expressions: \"Es verdad que\" takes Indicative).",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l83-ex1",
          "type": "multiple-choice",
          "prompt": "Which form completes: \"Es importante que nosotros _______ (hacer) la tarea\"?",
          "explanation": "\"Es importante que\" triggers the subjunctive: nosotros form of hacer is \"hagamos\".",
          "options": [
            {
              "id": "opt1",
              "text": "hagamos",
              "subtext": "Subjunctive form of hacer (yo-go root)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "hacemos",
              "subtext": "Indicative present",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "hicimos",
              "subtext": "Preterite form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "hacer",
              "subtext": "Infinitive",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l83-ex2",
          "type": "sentence-builder",
          "prompt": "Translate: \"It is a pity that you cannot come to the party\"",
          "targetEnglish": "It is a pity that you cannot come to the party",
          "correctTokens": [
            "Es",
            "una",
            "lástima",
            "que",
            "no",
            "puedas",
            "venir",
            "a",
            "la",
            "fiesta"
          ],
          "availableTokens": [
            "Es",
            "una",
            "lástima",
            "que",
            "no",
            "puedas",
            "venir",
            "a",
            "la",
            "fiesta",
            "puedes",
            "podrías"
          ],
          "explanation": "\"Es una lástima que no puedas venir a la fiesta.\""
        }
      ]
    },
    {
      "id": "u7-l84",
      "slug": "subj8",
      "unitId": 7,
      "order": 84,
      "title": "84. Subjunctive VIII: Actions Not Yet Completed",
      "subtitle": "Adverbial Time Conjunctions (Cuando, En cuanto, Tan pronto como, Antes de que)",
      "estimatedMinutes": 11,
      "iconName": "FastForward",
      "summary": "Master time conjunctions: when an adverbial time clause refers to a future, uncompleted action, the verb MUST be in the Subjunctive mood.",
      "theory": [
        {
          "id": "u7-l84-t1",
          "title": "Time Conjunctions: Future Uncompleted vs. Habitual",
          "summary": "If the event hasn't happened yet (future anticipation), use Subjunctive. If it's a past or present habit, use Indicative.",
          "table": {
            "headers": [
              "Conjunction",
              "Meaning",
              "Future / Uncompleted (SUBJUNCTIVE)",
              "Habitual / Past (INDICATIVE)"
            ],
            "rows": [
              [
                "cuando",
                "when",
                "Te llamaré cuando **llegue**. (I will call when I arrive)",
                "Siempre me llama cuando **llega**. (He always calls when he arrives)"
              ],
              [
                "en cuanto / tan pronto como",
                "as soon as",
                "En cuanto **tenga** dinero, viajaré.",
                "En cuanto **tiene** dinero, viaja."
              ],
              [
                "hasta que",
                "until",
                "Esperaremos hasta que **termine**.",
                "Esperamos hasta que **terminó** (past)."
              ],
              [
                "antes de que (ALWAYS SUBJ!)",
                "before",
                "Saldremos antes de que **llueva**.",
                "Salió antes de que **lloviera**."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Te enviaré el documento cuando termine el trabajo.",
              "english": "I will send you the document when I finish work. (Future uncompleted → termine)",
              "audio": "Te enviaré el documento cuando termine el trabajo."
            },
            {
              "spanish": "Llámame en cuanto llegues a casa.",
              "english": "Call me as soon as you arrive home. (Future anticipation → llegues)",
              "audio": "Llámame en cuanto llegues a casa."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8401",
          "spanish": "en cuanto",
          "english": "as soon as (time conjunction)",
          "category": "Time Conjunctions",
          "exampleSentence": {
            "spanish": "En cuanto pueda, iré.",
            "english": "As soon as I can, I will go."
          }
        },
        {
          "id": "v8402",
          "spanish": "tan pronto como",
          "english": "as soon as",
          "category": "Time Conjunctions",
          "exampleSentence": {
            "spanish": "Tan pronto como llegue, comeremos.",
            "english": "As soon as he arrives, we will eat."
          }
        },
        {
          "id": "v8403",
          "spanish": "antes de que",
          "english": "before (always triggers subjunctive)",
          "category": "Time Conjunctions",
          "exampleSentence": {
            "spanish": "Llega antes de que empiece.",
            "english": "Arrive before it starts."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8401",
          "front": "When does \"cuando\" take the subjunctive?",
          "back": "When referring to a future, uncompleted action:\n\"Te llamo cuando llegue\" (I'll call when I arrive)",
          "category": "Subjunctive"
        },
        {
          "id": "f8402",
          "front": "Does \"antes de que\" always take the subjunctive?",
          "back": "YES! \"Antes de que\" ALWAYS requires the subjunctive.",
          "category": "Subjunctive"
        }
      ],
      "exercises": [
        {
          "id": "u7-l84-ex1",
          "type": "multiple-choice",
          "prompt": "Which form completes: \"Te llamaré por teléfono en cuanto yo _______ (llegar) a casa\"?",
          "explanation": "\"En cuanto\" referring to a future action requires the subjunctive: \"llegue\".",
          "options": [
            {
              "id": "opt1",
              "text": "llegue",
              "subtext": "Subjunctive uncompleted future event",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "llego",
              "subtext": "Present indicative",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "llegué",
              "subtext": "Preterite past",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "llegaré",
              "subtext": "Future indicative",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u7-l84-ex2",
          "type": "sentence-builder",
          "prompt": "Translate: \"We will leave before it begins to rain\"",
          "targetEnglish": "We will leave before it begins to rain",
          "correctTokens": [
            "Saldremos",
            "antes",
            "de",
            "que",
            "empiece",
            "a",
            "llover"
          ],
          "availableTokens": [
            "Saldremos",
            "antes",
            "de",
            "que",
            "empiece",
            "a",
            "llover",
            "empieza",
            "empezó"
          ],
          "explanation": "\"Saldremos antes de que empiece a llover.\" (Antes de que always takes subjunctive)."
        }
      ]
    }
  ],
  "masteryExam": {
    "id": "unit-7-exam",
    "title": "Unit 7 Comprehensive Mastery Exam",
    "description": "Test your complete mastery of Unit 7: \"Hace...\" ago expressions, adverb formation in -mente, the 3-part subjunctive recipe, opposite vowels, orthographic shifts (-car/-gar/-zar), DISHES irregulars, and the WEIRDO categories (wishes, doubt, impersonal expressions, uncompleted time clauses).",
    "passingScore": 80,
    "exercises": [
      {
        "id": "u7-exam-ex1",
        "type": "multiple-choice",
        "prompt": "What is the present subjunctive form of \"ser\" for \"yo\"?",
        "explanation": "\"Ser\" in the subjunctive is \"sea\".",
        "options": [
          {
            "id": "opt1",
            "text": "sea",
            "subtext": "Correct DISHES irregular form",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "soy",
            "subtext": "Indicative present",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "sepa",
            "subtext": "Form of saber",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "este",
            "subtext": "Form of estar",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u7-exam-ex2",
        "type": "fill-in-blank",
        "prompt": "Fill in the subjunctive of \"ir\" for \"tú\": \"Quiero que tú _______ conmigo.\"",
        "sentenceBefore": "Quiero que tú",
        "sentenceAfter": "conmigo al concierto.",
        "correctAnswers": [
          "vayas",
          "Vayas"
        ],
        "wordBank": [
          "vayas",
          "vas",
          "vaya",
          "fueras"
        ],
        "hint": "Subjunctive of ir for tú.",
        "explanation": "\"Ir\" in the subjunctive for tú is \"vayas\"."
      },
      {
        "id": "u7-exam-ex3",
        "type": "multiple-choice",
        "prompt": "Which sentence correctly expresses: \"I bought this house three years ago\"?",
        "explanation": "\"Compré esta casa hace tres años\" or \"Hace tres años que compré esta casa\".",
        "options": [
          {
            "id": "opt1",
            "text": "Compré esta casa hace tres años.",
            "subtext": "Correct preterite + hace + time",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Compro esta casa hace tres años.",
            "subtext": "Present tense",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Compré esta casa desde tres años.",
            "subtext": "Incorrect preposition",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Hace tres años compro esta casa.",
            "subtext": "Incorrect tense",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u7-exam-ex4",
        "type": "fill-in-blank",
        "prompt": "Fill in the subjunctive of \"buscar\" for \"nosotros\" (c→qu):",
        "sentenceBefore": "Es necesario que nosotros",
        "sentenceAfter": "una nueva solución.",
        "correctAnswers": [
          "busquemos",
          "Busquemos"
        ],
        "wordBank": [
          "busquemos",
          "buscamos",
          "buscemos",
          "busquiemos"
        ],
        "hint": "-car changes to -qu in subjunctive.",
        "explanation": "\"Buscar\" becomes \"busquemos\" in the subjunctive for nosotros."
      },
      {
        "id": "u7-exam-ex5",
        "type": "multiple-choice",
        "prompt": "Which expression requires the INDICATIVE (not the subjunctive)?",
        "explanation": "\"Creo que\" expresses affirmative certainty/belief and takes the Indicative: \"Creo que él tiene razón\".",
        "options": [
          {
            "id": "opt1",
            "text": "Creo que...",
            "subtext": "Certainty / Belief takes INDICATIVE",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Dudo que...",
            "subtext": "Doubt takes Subjunctive",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "No creo que...",
            "subtext": "Disbelief takes Subjunctive",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Es una lástima que...",
            "subtext": "Value judgment takes Subjunctive",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u7-exam-ex6",
        "type": "sentence-builder",
        "prompt": "Translate: \"I hope that you have a wonderful day\"",
        "targetEnglish": "I hope that you have a wonderful day",
        "correctTokens": [
          "Espero",
          "que",
          "tengas",
          "un",
          "día",
          "maravilloso"
        ],
        "availableTokens": [
          "Espero",
          "que",
          "tengas",
          "un",
          "día",
          "maravilloso",
          "tienes",
          "tuviste"
        ],
        "explanation": "\"Espero que tengas un día maravilloso.\""
      },
      {
        "id": "u7-exam-ex7",
        "type": "multiple-choice",
        "prompt": "What is the correct adverb derived from the adjective \"fácil\"?",
        "explanation": "Feminine/neutral form \"fácil\" + \"mente\", keeping the accent: \"fácilmente\".",
        "options": [
          {
            "id": "opt1",
            "text": "fácilmente",
            "subtext": "Correct form preserving accent mark",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "facilmente",
            "subtext": "Missing written accent",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "fácilemente",
            "subtext": "Incorrect spelling",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "fácil mente",
            "subtext": "Must be one single word",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u7-exam-ex8",
        "type": "fill-in-blank",
        "prompt": "Fill in the subjunctive of \"llegar\" for the future time clause: \"Llámame cuando tú _______.\"",
        "sentenceBefore": "Llámame por teléfono cuando tú",
        "sentenceAfter": "al hotel.",
        "correctAnswers": [
          "llegues",
          "Llegues"
        ],
        "wordBank": [
          "llegues",
          "llegas",
          "llegarás",
          "llegaste"
        ],
        "hint": "Future uncompleted when-clause takes subjunctive (g→gu).",
        "explanation": "\"Cuando tú llegues\" (future anticipation requires subjunctive)."
      },
      {
        "id": "u7-exam-ex9",
        "type": "matching-pairs",
        "prompt": "Match each main clause trigger to the required mood:",
        "explanation": "Testing subjunctive vs indicative trigger recognition.",
        "pairs": [
          {
            "id": "p1",
            "left": "Quiero que...",
            "right": "Subjunctive (Desire)"
          },
          {
            "id": "p2",
            "left": "Es verdad que...",
            "right": "Indicative (Fact)"
          },
          {
            "id": "p3",
            "left": "Dudo que...",
            "right": "Subjunctive (Doubt)"
          },
          {
            "id": "p4",
            "left": "Antes de que...",
            "right": "Subjunctive (Time)"
          }
        ]
      },
      {
        "id": "u7-exam-ex10",
        "type": "error-identification",
        "prompt": "Find the mistake in this sentence:",
        "incorrectSentence": "Mis padres quieren que yo estudio medicina en la universidad.",
        "errorWord": "estudio",
        "options": [
          "estudie",
          "estudiar",
          "estudiara",
          "estudié"
        ],
        "correctOption": "estudie",
        "explanation": "With two different subjects and a verb of desire (querer), the second verb must be in the subjunctive: \"estudie\"."
      }
    ]
  }
};
