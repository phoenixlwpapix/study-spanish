import type { Unit } from './types';

export const unit8: Unit = {
  "id": 8,
  "title": "Unit 8: Relative Pronouns & Commands (Mandatos)",
  "subtitle": "Lessons 85–98: The Complete Guide to Relatives and the Imperative Across All Persons",
  "description": "Master relative clauses and commands in Spanish across all 14 official lessons: que, quien, el que, lo que, the possessive relative cuyo, formal commands (Ud./Uds.), informal commands (tú and the 8 Vin Diesel irregulars), pronoun placement with imperatives, vosotros commands, nosotros \"let's\" commands, indirect commands (que + subj), and comprehensive review drills.",
  "iconName": "CheckSquare",
  "colorTheme": "indigo",
  "isAvailable": true,
  "lessons": [
    {
      "id": "u8-l85",
      "slug": "relproque",
      "unitId": 8,
      "order": 85,
      "title": "85. Rel. Pronouns - que",
      "subtitle": "The Universal Connector for People and Things",
      "estimatedMinutes": 9,
      "iconName": "Link",
      "summary": "\"Que\" is the most versatile and frequently used relative pronoun in Spanish. It means \"that\", \"which\", or \"who/whom\" and refers to both persons and things without changing for gender or number.",
      "theory": [
        {
          "id": "u8-l85-t1",
          "title": "The Universal Relative Pronoun \"Que\"",
          "summary": "\"Que\" connects two clauses and never carries an accent mark when acting as a relative pronoun.",
          "table": {
            "headers": [
              "Antecedent Type",
              "Sentence Example",
              "English Translation"
            ],
            "rows": [
              [
                "Thing (Singular)",
                "El coche **que** compré es rojo.",
                "The car **that** I bought is red."
              ],
              [
                "Things (Plural)",
                "Los libros **que** lees son interesantes.",
                "The books **that** you read are interesting."
              ],
              [
                "Person (Subject)",
                "El hombre **que** trabaja allí es mi tío.",
                "The man **who** works there is my uncle."
              ]
            ]
          },
          "content": [
            "**Crucial Difference**: In English, we often omit \"that\" (*\"The book [that] I bought\"*). In Spanish, **\"que\" can NEVER be omitted!** (*\"El libro que compré\"*)."
          ],
          "examples": [
            {
              "spanish": "La casa que vimos ayer es hermosa.",
              "english": "The house that we saw yesterday is beautiful.",
              "audio": "La casa que vimos ayer es hermosa."
            },
            {
              "spanish": "El estudiante que habla español es Carlos.",
              "english": "The student who speaks Spanish is Carlos.",
              "audio": "El estudiante que habla español es Carlos."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8501",
          "spanish": "el libro que leo",
          "english": "the book (that) I am reading",
          "category": "Relative Pronouns",
          "exampleSentence": {
            "spanish": "El libro que leo es fascinante.",
            "english": "The book that I am reading is fascinating."
          }
        },
        {
          "id": "v8502",
          "spanish": "la persona que...",
          "english": "the person who...",
          "category": "Relative Pronouns",
          "exampleSentence": {
            "spanish": "La persona que vino ayer.",
            "english": "The person who came yesterday."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8501",
          "front": "Can \"que\" be omitted in Spanish like \"that\" in English?",
          "back": "NO! \"Que\" is mandatory in Spanish relative clauses:\n\"El coche que compré\" (Never \"El coche compré\")",
          "category": "Relative Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u8-l85-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"The movie (that) we saw yesterday was fantastic\" in Spanish?",
          "explanation": "\"Que\" connects the clauses and cannot be omitted: \"La película que vimos ayer fue fantástica\".",
          "options": [
            {
              "id": "opt1",
              "text": "La película que vimos ayer fue fantástica.",
              "subtext": "Correct use of mandatory relative \"que\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "La película vimos ayer fue fantástica.",
              "subtext": "Missing mandatory relative \"que\"",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "La película qué vimos ayer fue fantástica.",
              "subtext": "Relative \"que\" never has an accent",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "La película quien vimos ayer.",
              "subtext": "Quien cannot refer to things",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l85-ex2",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"The computer that I bought works very well\"",
          "targetEnglish": "The computer that I bought works very well",
          "correctTokens": [
            "El",
            "ordenador",
            "que",
            "compré",
            "funciona",
            "muy",
            "bien"
          ],
          "availableTokens": [
            "El",
            "ordenador",
            "que",
            "compré",
            "funciona",
            "muy",
            "bien",
            "quien",
            "cuyo"
          ],
          "explanation": "\"El ordenador que compré funciona muy bien.\""
        }
      ]
    },
    {
      "id": "u8-l86",
      "slug": "relproquien",
      "unitId": 8,
      "order": 86,
      "title": "86. Rel. Pronouns - quien / quienes",
      "subtitle": "Referring to People After Prepositions & in Non-Restrictive Clauses",
      "estimatedMinutes": 9,
      "iconName": "User",
      "summary": "\"Quien\" (singular) and \"quienes\" (plural) refer ONLY to people. They are required after prepositions (con, a, de, para) and in non-restrictive clauses set off by commas.",
      "theory": [
        {
          "id": "u8-l86-t1",
          "title": "When to Use \"Quien\" and \"Quienes\"",
          "summary": "Use \"quien(es)\" when referring to people after prepositions or inside commas.",
          "table": {
            "headers": [
              "Context",
              "Pattern",
              "Example Sentence"
            ],
            "rows": [
              [
                "After Prepositions (con, a, de, en)",
                "Preposition + quien(es)",
                "La mujer **con quien** hablé es la doctora."
              ],
              [
                "Plural Antecedent",
                "Preposition + quienes",
                "Los amigos **a quienes** invité vinieron."
              ],
              [
                "Inside Commas (Non-restrictive)",
                ", quien(es)...,",
                "Mi hermano, **quien** vive en Madrid, llegará hoy."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "El profesor con quien hablé es muy amable.",
              "english": "The teacher with whom I spoke is very kind.",
              "audio": "El profesor con quien hablé es muy amable."
            },
            {
              "spanish": "Las personas a quienes llamé ya están aquí.",
              "english": "The people whom I called are already here.",
              "audio": "Las personas a quienes llamé ya están aquí."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8601",
          "spanish": "con quien / con quienes",
          "english": "with whom",
          "category": "Relative Pronouns",
          "exampleSentence": {
            "spanish": "La chica con quien salgo.",
            "english": "The girl with whom I go out."
          }
        },
        {
          "id": "v8602",
          "spanish": "a quien / a quienes",
          "english": "to whom / whom",
          "category": "Relative Pronouns",
          "exampleSentence": {
            "spanish": "El hombre a quien vi.",
            "english": "The man whom I saw."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8601",
          "front": "When is \"quien / quienes\" used?",
          "back": "1. Refers ONLY to people\n2. After prepositions (con quien, a quien, de quien)\n3. Inside commas (non-restrictive clauses)",
          "category": "Relative Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u8-l86-ex1",
          "type": "multiple-choice",
          "prompt": "Fill in the blank: \"La mujer con _______ (singular) hablé es mi profesora.\"",
          "explanation": "After a preposition referring to a single person, use \"quien\": \"con quien hablé\".",
          "options": [
            {
              "id": "opt1",
              "text": "quien",
              "subtext": "Correct relative after preposition for singular person",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "quienes",
              "subtext": "Plural form",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "que",
              "subtext": "Quien is preferred after prepositions for persons",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "cuyo",
              "subtext": "Possessive relative",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l86-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the plural relative pronoun: \"Los chicos a _______ invité a la fiesta vinieron.\"",
          "sentenceBefore": "Los chicos a",
          "sentenceAfter": "invité a la fiesta vinieron.",
          "correctAnswers": [
            "quienes",
            "Quienes"
          ],
          "wordBank": [
            "quienes",
            "quien",
            "que",
            "cuyos"
          ],
          "hint": "Plural form referring to people.",
          "explanation": "\"A quienes\" agrees with the plural antecedent \"los chicos\"."
        }
      ]
    },
    {
      "id": "u8-l87",
      "slug": "relproelque",
      "unitId": 8,
      "order": 87,
      "title": "87. Rel. Pronouns - el que & lo que",
      "subtitle": "Specific Gendered Relatives & The Neuter \"lo que\" for Abstract Ideas",
      "estimatedMinutes": 10,
      "iconName": "Layers",
      "summary": "\"El que / la que / los que / las que\" refer to specific identified antecedents (\"the one who / which\"), while the neuter \"lo que\" refers to abstract concepts, situations, or \"what / that which\".",
      "theory": [
        {
          "id": "u8-l87-t1",
          "title": "El que vs. Lo que",
          "summary": "\"El que\" agrees with specific nouns; \"Lo que\" refers to whole sentences or ideas.",
          "table": {
            "headers": [
              "Form",
              "Meaning",
              "Example Sentence"
            ],
            "rows": [
              [
                "el que / la que",
                "the one that / who (sing)",
                "Tengo dos coches; **el que** uso es el blanco."
              ],
              [
                "los que / las que",
                "the ones that / who (plur)",
                "Las casas viejas son **las que** me gustan."
              ],
              [
                "lo que (neuter)",
                "what / that which (abstract)",
                "**Lo que** necesitas es descansar. / No entendí **lo que** dijo."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Lo que más me gusta de España es la comida.",
              "english": "What I like most about Spain is the food. (Abstract idea → lo que)",
              "audio": "Lo que más me gusta de España es la comida."
            },
            {
              "spanish": "De las dos camisas, compré la que es azul.",
              "english": "Of the two shirts, I bought the one that is blue. (la que)",
              "audio": "De las dos camisas, compré la que es azul."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8701",
          "spanish": "lo que",
          "english": "what / that which (abstract)",
          "category": "Relative Pronouns",
          "exampleSentence": {
            "spanish": "Lo que dices es verdad.",
            "english": "What you say is true."
          }
        },
        {
          "id": "v8702",
          "spanish": "el que / la que",
          "english": "the one that / who",
          "category": "Relative Pronouns",
          "exampleSentence": {
            "spanish": "El que tiene prisa puede salir.",
            "english": "The one who is in a hurry can leave."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8701",
          "front": "When is neuter \"lo que\" used?",
          "back": "To refer to an entire clause, abstract idea, or \"what / that which\":\n\"Lo que quiero es paz\"",
          "category": "Relative Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u8-l87-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"What you need is to sleep eight hours\" in Spanish?",
          "explanation": "\"What\" referring to an abstract idea is \"Lo que\": \"Lo que necesitas es dormir ocho horas\".",
          "options": [
            {
              "id": "opt1",
              "text": "Lo que necesitas es dormir ocho horas.",
              "subtext": "Correct neuter relative \"Lo que\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "El que necesitas es dormir ocho horas.",
              "subtext": "El que requires a specific masculine noun antecedent",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Qué necesitas es dormir ocho horas.",
              "subtext": "Qué with accent is for questions",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Cuyo necesitas es dormir ocho horas.",
              "subtext": "Incorrect",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l87-ex2",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I don't understand what you are saying\"",
          "targetEnglish": "I don't understand what you are saying",
          "correctTokens": [
            "No",
            "entiendo",
            "lo",
            "que",
            "estás",
            "diciendo"
          ],
          "availableTokens": [
            "No",
            "entiendo",
            "lo",
            "que",
            "estás",
            "diciendo",
            "el",
            "qué"
          ],
          "explanation": "\"No entiendo lo que estás diciendo.\""
        }
      ]
    },
    {
      "id": "u8-l88",
      "slug": "reladjcuyo",
      "unitId": 8,
      "order": 88,
      "title": "88. Rel. Adjective - cuyo",
      "subtitle": "The Possessive Relative \"Whose\" (cuyo, cuya, cuyos, cuyas)",
      "estimatedMinutes": 9,
      "iconName": "Tag",
      "summary": "\"Cuyo\" means \"whose\" or \"of whom\". It is a relative adjective and ALWAYS agrees in gender and number with the POSSESSED NOUN that immediately follows it (NOT with the owner!).",
      "theory": [
        {
          "id": "u8-l88-t1",
          "title": "The \"Cuyo\" Agreement Rule",
          "summary": "Cuyo agrees with the thing possessed, NOT the possessor.",
          "table": {
            "headers": [
              "Form",
              "Agreement",
              "Example Sentence"
            ],
            "rows": [
              [
                "cuyo",
                "Masc Singular Noun",
                "El autor **cuyo libro** leí es famoso."
              ],
              [
                "cuya",
                "Fem Singular Noun",
                "La mujer **cuya casa** compré es doctora."
              ],
              [
                "cuyos",
                "Masc Plural Nouns",
                "El profesor **cuyos estudiantes** ganaron el premio."
              ],
              [
                "cuyas",
                "Fem Plural Nouns",
                "La empresa **cuyas oficinas** están en Madrid."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "El hombre cuyo coche es rojo vive aquí.",
              "english": "The man whose car is red lives here. (coche is masc sing → cuyo)",
              "audio": "El hombre cuyo coche es rojo vive aquí."
            },
            {
              "spanish": "La autora cuyas novelas leí ganó el premio.",
              "english": "The author whose novels I read won the prize. (novelas is fem plur → cuyas)",
              "audio": "La autora cuyas novelas leí ganó el premio."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8801",
          "spanish": "cuyo / cuya",
          "english": "whose (singular)",
          "category": "Relative Adjectives",
          "exampleSentence": {
            "spanish": "El chico cuyo padre es médico.",
            "english": "The boy whose father is a doctor."
          }
        },
        {
          "id": "v8802",
          "spanish": "cuyos / cuyas",
          "english": "whose (plural)",
          "category": "Relative Adjectives",
          "exampleSentence": {
            "spanish": "La casa cuyas ventanas son grandes.",
            "english": "The house whose windows are large."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8801",
          "front": "What does \"cuyo\" agree with?",
          "back": "It agrees with the NOUN THAT FOLLOWS IT (the thing possessed), NOT the owner!\n\"La mujer cuyo hijo...\" (cuyo agrees with hijo)",
          "category": "Relative Adjectives"
        }
      ],
      "exercises": [
        {
          "id": "u8-l88-ex1",
          "type": "multiple-choice",
          "prompt": "Fill in the blank: \"El autor _______ (whose) novelas son famosas ganó el premio.\"",
          "explanation": "\"Novelas\" is feminine plural, so the relative adjective must be \"cuyas\" regardless of the author's gender.",
          "options": [
            {
              "id": "opt1",
              "text": "cuyas",
              "subtext": "Agrees with feminine plural \"novelas\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "cuyo",
              "subtext": "Masc singular",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "cuyos",
              "subtext": "Masc plural",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "de quien",
              "subtext": "Does not function as a relative adjective before a noun",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l88-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the relative adjective: \"El hombre _______ (whose) coche se rompió llamó a la grúa.\"",
          "sentenceBefore": "El hombre",
          "sentenceAfter": "coche se rompió llamó a la grúa.",
          "correctAnswers": [
            "cuyo",
            "Cuyo"
          ],
          "wordBank": [
            "cuyo",
            "cuya",
            "cuyos",
            "cuyas"
          ],
          "hint": "Agrees with masculine singular \"coche\".",
          "explanation": "\"Coche\" is masculine singular, so use \"cuyo\"."
        }
      ]
    },
    {
      "id": "u8-l89",
      "slug": "relprorev",
      "unitId": 8,
      "order": 89,
      "title": "89. Rel. Pronouns & Adjectives - Review",
      "subtitle": "Mastery Decision Strategy for Que, Quien, Lo que & Cuyo",
      "estimatedMinutes": 10,
      "iconName": "CheckCircle2",
      "summary": "Solidify your choice among all Spanish relative words with a unified diagnostic flowchart.",
      "theory": [
        {
          "id": "u8-l89-t1",
          "title": "The Relative Decision Flowchart",
          "summary": "How to pick the exact relative pronoun in 3 quick questions.",
          "ruleHighlights": [
            {
              "label": "1. Is it a possessive meaning \"whose\"?",
              "description": "YES → cuyo / cuya / cuyos / cuyas (agrees with noun after it)",
              "color": "indigo"
            },
            {
              "label": "2. Is it referring to an abstract idea / whole clause (\"what\")?",
              "description": "YES → lo que",
              "color": "emerald"
            },
            {
              "label": "3. Is it after a preposition referring to people?",
              "description": "YES → quien / quienes (con quien, a quien)",
              "color": "amber"
            },
            {
              "label": "4. Default relative connector for people & things?",
              "description": "YES → que",
              "color": "rose"
            }
          ],
          "examples": [
            {
              "spanish": "El libro que compré, el amigo con quien hablé, lo que me gusta y el autor cuyos libros leo.",
              "english": "The book that I bought, the friend with whom I spoke, what I like, and the author whose books I read.",
              "audio": "El libro que compré."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v8901",
          "spanish": "lo que pasó",
          "english": "what happened",
          "category": "Review",
          "exampleSentence": {
            "spanish": "Cuéntame lo que pasó.",
            "english": "Tell me what happened."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f8901",
          "front": "Summary of Spanish Relatives",
          "back": "• que = that / which / who (default)\n• quien = people after prepositions\n• lo que = what / abstract idea\n• cuyo/a/os/as = whose (possessive)",
          "category": "Relative Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u8-l89-ex1",
          "type": "matching-pairs",
          "prompt": "Match each Spanish relative phrase with its English meaning:",
          "explanation": "Review relative pronouns and adjectives (que, quien, lo que, cuyo).",
          "pairs": [
            {
              "id": "p1",
              "left": "El libro que leí",
              "right": "The book that I read (que)"
            },
            {
              "id": "p2",
              "left": "La chica con quien hablé",
              "right": "The girl with whom I spoke (con quien)"
            },
            {
              "id": "p3",
              "left": "Lo que quiero es café",
              "right": "What I want is coffee (lo que)"
            },
            {
              "id": "p4",
              "left": "El hombre cuyo coche es rojo",
              "right": "The man whose car is red (cuyo)"
            }
          ]
        }
      ]
    },
    {
      "id": "u8-l90",
      "slug": "formcomm",
      "unitId": 8,
      "order": 90,
      "title": "90. Formal Commands",
      "subtitle": "Imperatives for Usted and Ustedes (Present Subjunctive)",
      "estimatedMinutes": 10,
      "iconName": "ShieldAlert",
      "summary": "Formal commands (giving polite instructions to \"usted\" or \"ustedes\") are formed directly from the Present Subjunctive for BOTH affirmative and negative commands.",
      "theory": [
        {
          "id": "u7-l90-t1",
          "title": "Formal Command Formation Formula",
          "summary": "Use the 3rd person singular (Ud.) or plural (Uds.) of the Present Subjunctive.",
          "table": {
            "headers": [
              "Verb",
              "Usted Command (¡Hable!)",
              "Ustedes Command (¡Hablen!)",
              "Negative Ud. (¡No hable!)"
            ],
            "rows": [
              [
                "Hablar (-AR → -e)",
                "¡Hable!",
                "¡Hablen!",
                "¡No hable!"
              ],
              [
                "Comer (-ER → -a)",
                "¡Coma!",
                "¡Coman!",
                "¡No coma!"
              ],
              [
                "Escribir (-IR → -a)",
                "¡Escriba!",
                "¡Escriban!",
                "¡No escriba!"
              ],
              [
                "Hacer (yo-go: haga)",
                "¡Haga!",
                "¡Hagan!",
                "¡No haga!"
              ],
              [
                "Tener (yo-go: tenga)",
                "¡Tenga!",
                "¡Tengan!",
                "¡No tenga!"
              ],
              [
                "Ir (DISHES: vaya)",
                "¡Vaya!",
                "¡Vayan!",
                "¡No vaya!"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¡Pase adelante y tome asiento, señor Gómez!",
              "english": "Come in and take a seat, Mr. Gómez!",
              "audio": "¡Pase adelante y tome asiento!"
            },
            {
              "spanish": "¡Por favor, no fumen aquí!",
              "english": "Please, do not smoke here! (Uds.)",
              "audio": "¡Por favor, no fumen aquí!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9001",
          "spanish": "¡Pase!",
          "english": "Come in! (formal Ud. command)",
          "category": "Formal Commands",
          "exampleSentence": {
            "spanish": "¡Pase usted!",
            "english": "Come in (sir/ma'am)!"
          }
        },
        {
          "id": "v9002",
          "spanish": "¡Tome asiento!",
          "english": "Take a seat! (formal)",
          "category": "Formal Commands",
          "exampleSentence": {
            "spanish": "¡Tome asiento, por favor!",
            "english": "Take a seat, please!"
          }
        },
        {
          "id": "v9003",
          "spanish": "¡No se preocupe!",
          "english": "Don't worry! (formal reflexive)",
          "category": "Formal Commands",
          "exampleSentence": {
            "spanish": "¡No se preocupe, todo está bien!",
            "english": "Don't worry, everything is fine!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9001",
          "front": "How to form formal (Usted/Uds) commands?",
          "back": "Use the PRESENT SUBJUNCTIVE for both affirmative and negative:\n¡Hable! / ¡No hable! | ¡Coma! / ¡No coma!",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l90-ex1",
          "type": "multiple-choice",
          "prompt": "What is the formal command (Usted) for \"hablar más despacio\"?",
          "explanation": "-AR verbs take -e in the formal command: \"¡Hable más despacio, por favor!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡Hable más despacio, por favor!",
              "subtext": "Correct formal command (Present subjunctive -e)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡Habla más despacio!",
              "subtext": "Informal tú command",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡Hablas más despacio!",
              "subtext": "Indicative statement",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡Hablar más despacio!",
              "subtext": "Infinitive",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l90-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the formal plural command (Ustedes) of \"pasar\":",
          "sentenceBefore": "Señores, ¡",
          "sentenceAfter": "adelante, por favor!",
          "correctAnswers": [
            "Pasen",
            "pasen"
          ],
          "wordBank": [
            "Pasen",
            "Pasan",
            "Pasad",
            "Pasar"
          ],
          "hint": "Uds. formal command takes -en for -AR verbs.",
          "explanation": "The formal command for Ustedes is \"¡Pasen!\"."
        }
      ]
    },
    {
      "id": "u8-l91",
      "slug": "informcomm1",
      "unitId": 8,
      "order": 91,
      "title": "91. Inform. Commands - tú",
      "subtitle": "Affirmative Tú Commands (3rd Person Singular Indicative)",
      "estimatedMinutes": 9,
      "iconName": "Smile",
      "summary": "Regular affirmative informal commands (telling a friend, family member, or child to do something) are identical to the 3rd person singular of the present indicative.",
      "theory": [
        {
          "id": "u8-l91-t1",
          "title": "The Affirmative Tú Command Rule",
          "summary": "Use the él/ella/usted present indicative form.",
          "table": {
            "headers": [
              "Infinitive",
              "3rd Person Indicative",
              "Affirmative Tú Command",
              "English Command"
            ],
            "rows": [
              [
                "Hablar",
                "él habla",
                "¡Habla!",
                "Speak! / Talk!"
              ],
              [
                "Comer",
                "él come",
                "¡Come!",
                "Eat!"
              ],
              [
                "Escribir",
                "él escribe",
                "¡Escribe!",
                "Write!"
              ],
              [
                "Cerrar (e:ie)",
                "él cierra",
                "¡Cierra!",
                "Close!"
              ],
              [
                "Dormir (o:ue)",
                "él duerme",
                "¡Duerme!",
                "Sleep!"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¡Juan, come tus verduras!",
              "english": "Juan, eat your vegetables!",
              "audio": "¡Juan, come tus verduras!"
            },
            {
              "spanish": "¡Habla en español, por favor!",
              "english": "Speak in Spanish, please!",
              "audio": "¡Habla en español, por favor!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9101",
          "spanish": "¡Habla!",
          "english": "Speak! (informal tú command)",
          "category": "Tú Commands",
          "exampleSentence": {
            "spanish": "¡Habla más alto!",
            "english": "Speak louder!"
          }
        },
        {
          "id": "v9102",
          "spanish": "¡Come!",
          "english": "Eat! (informal tú command)",
          "category": "Tú Commands",
          "exampleSentence": {
            "spanish": "¡Come la fruta!",
            "english": "Eat the fruit!"
          }
        },
        {
          "id": "v9103",
          "spanish": "¡Escribe!",
          "english": "Write! (informal tú command)",
          "category": "Tú Commands",
          "exampleSentence": {
            "spanish": "¡Escribe tu nombre!",
            "english": "Write your name!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9101",
          "front": "How to form affirmative regular \"tú\" commands?",
          "back": "Use the 3rd person singular present indicative:\n¡Habla! | ¡Come! | ¡Escribe!",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l91-ex1",
          "type": "multiple-choice",
          "prompt": "What is the affirmative informal command (tú) for \"comer\"?",
          "explanation": "Affirmative tú command uses 3rd person indicative: \"¡Come!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡Come!",
              "subtext": "Correct 3rd person indicative form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡Comas!",
              "subtext": "Subjunctive form (used for negative commands)",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡Comes!",
              "subtext": "2nd person indicative",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡Coma!",
              "subtext": "Formal Ud. command",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l91-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the affirmative tú command for \"estudiar\":",
          "sentenceBefore": "Hijo, ¡",
          "sentenceAfter": "para el examen de mañana!",
          "correctAnswers": [
            "Estudia",
            "estudia"
          ],
          "wordBank": [
            "Estudia",
            "Estudies",
            "Estudie",
            "Estudias"
          ],
          "hint": "3rd person singular indicative.",
          "explanation": "\"Estudiar\" becomes \"¡Estudia!\"."
        }
      ]
    },
    {
      "id": "u8-l92",
      "slug": "irregtucomm",
      "unitId": 8,
      "order": 92,
      "title": "92. Irreg. Commands - tú",
      "subtitle": "The 8 Famous Irregulars: The \"Vin Diesel\" Mnemonic",
      "estimatedMinutes": 10,
      "iconName": "Zap",
      "summary": "Memorize the 8 irregular affirmative tú commands using the famous mnemonic phrase: \"Vin Diesel Has Ten Weapons, Eh?\" → Ven, Di, Sal, Haz, Ten, Ve, Pon, Sé.",
      "theory": [
        {
          "id": "u8-l92-t1",
          "title": "The 8 Irregular Affirmative Tú Commands",
          "summary": "These 8 short, punchy monosyllabic commands must be memorized.",
          "table": {
            "headers": [
              "Infinitive",
              "Affirmative Tú Command",
              "Mnemonic Sound",
              "English Meaning"
            ],
            "rows": [
              [
                "Venir",
                "¡Ven!",
                "Vin...",
                "Come!"
              ],
              [
                "Decir",
                "¡Di!",
                "Di...",
                "Say! / Tell!"
              ],
              [
                "Salir",
                "¡Sal!",
                "Sal...",
                "Leave! / Go out!"
              ],
              [
                "Hacer",
                "¡Haz!",
                "Haz (has)...",
                "Do! / Make!"
              ],
              [
                "Tener",
                "¡Ten!",
                "Ten...",
                "Have! / Hold!"
              ],
              [
                "Ir",
                "¡Ve!",
                "Ve (weapons)...",
                "Go!"
              ],
              [
                "Poner",
                "¡Pon!",
                "Pon...",
                "Put! / Place!"
              ],
              [
                "Ser",
                "¡Sé! (accent!)",
                "Sé (eh!)...",
                "Be!"
              ]
            ]
          },
          "content": [
            "**Say it aloud like an action movie**: *\"Ven Di Sal Haz Ten Ve Pon Sé\"*!"
          ],
          "examples": [
            {
              "spanish": "¡Haz tu tarea ahora mismo!",
              "english": "Do your homework right now! (hacer → haz)",
              "audio": "¡Haz tu tarea ahora mismo!"
            },
            {
              "spanish": "¡Ten cuidado en la calle!",
              "english": "Be careful on the street! (tener → ten)",
              "audio": "¡Ten cuidado en la calle!"
            },
            {
              "spanish": "¡Sé amable con tus compañeros!",
              "english": "Be kind to your classmates! (ser → sé)",
              "audio": "¡Sé amable con tus compañeros!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9201",
          "spanish": "¡Haz!",
          "english": "Do! / Make! (hacer)",
          "category": "Vin Diesel Commands",
          "exampleSentence": {
            "spanish": "¡Haz la cama!",
            "english": "Make the bed!"
          }
        },
        {
          "id": "v9202",
          "spanish": "¡Ven!",
          "english": "Come! (venir)",
          "category": "Vin Diesel Commands",
          "exampleSentence": {
            "spanish": "¡Ven aquí!",
            "english": "Come here!"
          }
        },
        {
          "id": "v9203",
          "spanish": "¡Pon!",
          "english": "Put! (poner)",
          "category": "Vin Diesel Commands",
          "exampleSentence": {
            "spanish": "¡Pon la mesa!",
            "english": "Set the table!"
          }
        },
        {
          "id": "v9204",
          "spanish": "¡Di!",
          "english": "Say! / Tell! (decir)",
          "category": "Vin Diesel Commands",
          "exampleSentence": {
            "spanish": "¡Di la verdad!",
            "english": "Tell the truth!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9201",
          "front": "What are the 8 irregular affirmative tú commands?",
          "back": "Ven (venir), Di (decir), Sal (salir), Haz (hacer), Ten (tener), Ve (ir), Pon (poner), Sé (ser)",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l92-ex1",
          "type": "multiple-choice",
          "prompt": "What is the affirmative informal command (tú) of \"hacer\"?",
          "explanation": "\"Hacer\" forms the irregular command \"¡Haz!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡Haz!",
              "subtext": "Correct Vin Diesel irregular command",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡Hace!",
              "subtext": "Regularization error",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡Hagas!",
              "subtext": "Subjunctive form (used for negative command: ¡No hagas!)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡Haga!",
              "subtext": "Formal Ud. command",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l92-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the irregular affirmative tú command of \"poner\":",
          "sentenceBefore": "Por favor, ¡",
          "sentenceAfter": "el libro en la mesa.",
          "correctAnswers": [
            "Pon",
            "pon"
          ],
          "wordBank": [
            "Pon",
            "Pone",
            "Ponga",
            "Pongas"
          ],
          "hint": "Vin Diesel verb for poner.",
          "explanation": "\"Poner\" forms \"¡Pon!\"."
        },
        {
          "id": "u8-l92-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Tell me the truth right now\"",
          "targetEnglish": "Tell me the truth right now",
          "correctTokens": [
            "Dime",
            "la",
            "verdad",
            "ahora",
            "mismo"
          ],
          "availableTokens": [
            "Dime",
            "la",
            "verdad",
            "ahora",
            "mismo",
            "Dices",
            "Digas"
          ],
          "explanation": "\"Dime la verdad ahora mismo.\" (Decir -> Di + me = Dime)."
        }
      ]
    },
    {
      "id": "u8-l93",
      "slug": "procomm",
      "unitId": 8,
      "order": 93,
      "title": "93. Using Object Pronouns with Commands",
      "subtitle": "Affirmative Attachment (Accents) vs. Negative In-Front Placement",
      "estimatedMinutes": 11,
      "iconName": "CornerDownRight",
      "summary": "Master the ironclad rule of pronoun placement with commands: pronouns ATTACH to the end of affirmative commands (adding written accents), but go IN FRONT of negative commands.",
      "theory": [
        {
          "id": "u8-l93-t1",
          "title": "The Command Pronoun Placement Matrix",
          "summary": "Affirmative = Attach to the end. Negative = Place in front between \"no\" and the verb.",
          "table": {
            "headers": [
              "Command Type",
              "Pronoun Position",
              "Formula",
              "Example"
            ],
            "rows": [
              [
                "Affirmative Command",
                "ATTACHED to end (+ accent)",
                "¡[Verbo][IO][DO]!",
                "¡Cómpralo! / ¡Dígamelo! / ¡Siéntate!"
              ],
              [
                "Negative Command",
                "IN FRONT between \"no\" and verb",
                "¡No [IO] [DO] [verbo]!",
                "¡No lo compres! / ¡No me lo digas! / ¡No te sientes!"
              ]
            ]
          },
          "content": [
            "**Accent Rule on Attached Affirmative Commands**: When attaching one or two pronouns to a command of two or more syllables, add a written accent mark to preserve the original spoken stress (*\"Di\"* → *\"Dime\"* [no accent], but *\"Di\"* + 2 pronouns → *\"Dígamelo\"*, *\"Come\"* + *\"lo\"* → *\"Cómpralo\"*)."
          ],
          "examples": [
            {
              "spanish": "¡Dímelo ahora mismo! / ¡No me lo digas!",
              "english": "Tell it to me right now! / Do not tell it to me!",
              "audio": "¡Dímelo ahora mismo!"
            },
            {
              "spanish": "¡Hazlo hoy! / ¡No lo hagas mañana!",
              "english": "Do it today! / Do not do it tomorrow!",
              "audio": "¡Hazlo hoy!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9301",
          "spanish": "¡Dímelo!",
          "english": "Tell it to me! (affirmative + attached pronouns)",
          "category": "Command Pronouns",
          "exampleSentence": {
            "spanish": "¡Dímelo por favor!",
            "english": "Tell it to me please!"
          }
        },
        {
          "id": "v9302",
          "spanish": "¡No me lo digas!",
          "english": "Don't tell it to me! (negative + front pronouns)",
          "category": "Command Pronouns",
          "exampleSentence": {
            "spanish": "¡No me lo digas todavía!",
            "english": "Don't tell it to me yet!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9301",
          "front": "Pronoun position with commands",
          "back": "Affirmative: Attached to end (¡Hazlo!)\nNegative: In front after \"no\" (¡No lo hagas!)",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l93-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"Don't do it!\" (negative informal tú command) in Spanish?",
          "explanation": "Negative command uses the subjunctive (no hagas) with pronoun in front: \"¡No lo hagas!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡No lo hagas!",
              "subtext": "Correct negative command + front pronoun",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡No hazlo!",
              "subtext": "Never attach pronouns to negative commands",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡No lo haces!",
              "subtext": "Indicative form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡No hagaslo!",
              "subtext": "Incorrect syntax",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l93-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete the affirmative command for \"buy it (el libro)\":",
          "sentenceBefore": "¡",
          "sentenceAfter": "ahora mismo en la librería!",
          "correctAnswers": [
            "Cómpralo",
            "cómpralo"
          ],
          "wordBank": [
            "Cómpralo",
            "Compralo",
            "Lo compra",
            "No lo compres"
          ],
          "hint": "Attach \"lo\" and add written accent on \"Cóm-\".",
          "explanation": "\"Comprar\" + \"lo\" becomes \"¡Cómpralo!\"."
        },
        {
          "id": "u8-l93-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Sit down here and do not stand up\"",
          "targetEnglish": "Sit down here and do not stand up",
          "correctTokens": [
            "Siéntate",
            "aquí",
            "y",
            "no",
            "te",
            "levantes"
          ],
          "availableTokens": [
            "Siéntate",
            "aquí",
            "y",
            "no",
            "te",
            "levantes",
            "te sienta",
            "no levantate"
          ],
          "explanation": "\"Siéntate aquí y no te levantes.\""
        }
      ]
    },
    {
      "id": "u8-l94",
      "slug": "commrev1",
      "unitId": 8,
      "order": 94,
      "title": "94. Commands Review I",
      "subtitle": "Formal & Informal (Tú) Command Drills and Contrasts",
      "estimatedMinutes": 10,
      "iconName": "CheckSquare",
      "summary": "Practice contrasting formal (Usted/Uds.) and informal (Tú) commands in both affirmative and negative structures.",
      "theory": [
        {
          "id": "u8-l94-t1",
          "title": "Affirmative vs Negative Command Contrast",
          "summary": "Contrast the 4 key forms for any verb.",
          "table": {
            "headers": [
              "Person",
              "Affirmative Command",
              "Negative Command"
            ],
            "rows": [
              [
                "Tú (informal)",
                "¡Habla! / ¡Come! / ¡Haz!",
                "¡No hables! / ¡No comas! / ¡No hagas! (Subjunctive)"
              ],
              [
                "Usted (formal)",
                "¡Hable! / ¡Coma! / ¡Haga! (Subjunctive)",
                "¡No hable! / ¡No coma! / ¡No haga! (Subjunctive)"
              ],
              [
                "Ustedes (formal pl)",
                "¡Hablen! / ¡Coman! / ¡Hagan! (Subjunctive)",
                "¡No hablen! / ¡No coman! / ¡No hagan! (Subjunctive)"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¡Habla con él! (Tú) vs ¡Hable con él! (Ud.)",
              "english": "Speak with him! (Informal vs Formal)",
              "audio": "¡Habla con él!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9401",
          "spanish": "¡No hables!",
          "english": "Don't speak! (negative tú)",
          "category": "Commands Review",
          "exampleSentence": {
            "spanish": "¡No hables tan rápido!",
            "english": "Don't speak so fast!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9401",
          "front": "Difference between affirmative and negative tú commands",
          "back": "Affirmative: Indicative 3rd sing (¡Habla!, ¡Haz!)\nNegative: Subjunctive tú (¡No hables!, ¡No hagas!)",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l94-ex1",
          "type": "matching-pairs",
          "prompt": "Match each command to its corresponding person and polarity:",
          "explanation": "Reviewing command structures.",
          "pairs": [
            {
              "id": "p1",
              "left": "¡Come!",
              "right": "Affirmative Tú (informal)"
            },
            {
              "id": "p2",
              "left": "¡No comas!",
              "right": "Negative Tú (informal)"
            },
            {
              "id": "p3",
              "left": "¡Coma!",
              "right": "Affirmative Usted (formal)"
            },
            {
              "id": "p4",
              "left": "¡Coman!",
              "right": "Affirmative Ustedes (formal pl)"
            }
          ]
        }
      ]
    },
    {
      "id": "u8-l95",
      "slug": "informcomm2",
      "unitId": 8,
      "order": 95,
      "title": "95. Informal Commands - vosotros",
      "subtitle": "Plural Informal Commands in Spain (Drop -r and add -d)",
      "estimatedMinutes": 9,
      "iconName": "Users",
      "summary": "In Spain, addressing friends/group informally uses \"vosotros\". Affirmative command: drop the infinitive \"-r\" and add \"-d\" (¡Hablad!, ¡Comed!, ¡Venid!). Negative command: use the vosotros present subjunctive (¡No habléis!, ¡No comáis!).",
      "theory": [
        {
          "id": "u8-l95-t1",
          "title": "The Vosotros Command Rules",
          "summary": "Affirmative: Infinitive minus -r plus -d. Negative: Vosotros Subjunctive.",
          "table": {
            "headers": [
              "Infinitive",
              "Affirmative Vosotros Command",
              "Negative Vosotros Command",
              "Reflexive Command (drop -d before -os)"
            ],
            "rows": [
              [
                "Hablar",
                "¡Hablad!",
                "¡No habléis!",
                "¡Hablaos!"
              ],
              [
                "Comer",
                "¡Comed!",
                "¡No comáis!",
                "¡Comeos!"
              ],
              [
                "Sentarse",
                "¡Sentad! → ¡Sentaos!",
                "¡No os sentéis!",
                "¡Sentaos! (drop -d)"
              ],
              [
                "Irse",
                "¡Idos! (exception keeps d)",
                "¡No os vayáis!",
                "¡Idos!"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¡Chicos, escuchad con atención y no habléis!",
              "english": "Guys, listen attentively and don't talk! (vosotros)",
              "audio": "¡Chicos, escuchad con atención y no habléis!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9501",
          "spanish": "¡Venid!",
          "english": "Come! (vosotros affirmative command)",
          "category": "Vosotros Commands",
          "exampleSentence": {
            "spanish": "¡Venid aquí, amigos!",
            "english": "Come here, friends!"
          }
        },
        {
          "id": "v9502",
          "spanish": "¡Sentaos!",
          "english": "Sit down! (vosotros reflexive command)",
          "category": "Vosotros Commands",
          "exampleSentence": {
            "spanish": "¡Sentaos por favor!",
            "english": "Sit down please!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9501",
          "front": "How to form affirmative vosotros command?",
          "back": "Drop -r and add -d: hablar → ¡Hablad! | comer → ¡Comed! | vivir → ¡Vivid!",
          "category": "Vosotros Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l95-ex1",
          "type": "multiple-choice",
          "prompt": "What is the affirmative vosotros command for \"escuchar\"?",
          "explanation": "Drop \"-r\" and add \"-d\": \"¡Escuchad!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡Escuchad!",
              "subtext": "Correct vosotros command (drop -r, add -d)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡Escuchan!",
              "subtext": "Indicative Ustedes form",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡Escuchéis!",
              "subtext": "Negative vosotros form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡Escuchadlos!",
              "subtext": "Missing context",
              "isCorrect": false
            }
          ]
        }
      ]
    },
    {
      "id": "u8-l96",
      "slug": "noscomm",
      "unitId": 8,
      "order": 96,
      "title": "96. 1st Person Commands - nosotros",
      "subtitle": "\"Let's Do Something\" Commands (¡Hablemos!, ¡Vamos!, ¡Vámonos!)",
      "estimatedMinutes": 10,
      "iconName": "Compass",
      "summary": "Express \"Let's [do something]\" in Spanish using the nosotros form of the Present Subjunctive (¡Hablemos!, ¡Comamos!). Special case: \"Let's go\" is \"¡Vamos!\" (affirmative) vs \"¡No vayamos!\" (negative).",
      "theory": [
        {
          "id": "u8-l96-t1",
          "title": "Nosotros Commands Rules",
          "summary": "Use the nosotros present subjunctive. For reflexive verbs, drop the final \"-s\" before adding \"-nos\" (¡Vámonos!).",
          "table": {
            "headers": [
              "Infinitive",
              "Affirmative (\"Let's...\")",
              "Negative (\"Let's not...\")",
              "Reflexive (drop -s before -nos)"
            ],
            "rows": [
              [
                "Cantar",
                "¡Cantemos!",
                "¡No cantemos!",
                "¡Cantémonos!"
              ],
              [
                "Comer",
                "¡Comamos!",
                "¡No comamos!",
                "¡Comámonos!"
              ],
              [
                "Ir (Special!)",
                "¡Vamos! (indicative!)",
                "¡No vayamos! (subjunctive)",
                "¡Vámonos! (Let's leave!)"
              ],
              [
                "Sentarse",
                "¡Sentémonos! (accent!)",
                "¡No nos sentemos!",
                "¡Sentémonos!"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¡Comamos en este restaurante!",
              "english": "Let's eat in this restaurant!",
              "audio": "¡Comamos en este restaurante!"
            },
            {
              "spanish": "¡Vámonos de aquí, es tarde!",
              "english": "Let's get out of here, it's late!",
              "audio": "¡Vámonos de aquí, es tarde!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9601",
          "spanish": "¡Vamos!",
          "english": "Let's go!",
          "category": "Nosotros Commands",
          "exampleSentence": {
            "spanish": "¡Vamos al parque!",
            "english": "Let's go to the park!"
          }
        },
        {
          "id": "v9602",
          "spanish": "¡Vámonos!",
          "english": "Let's leave! / Let's take off!",
          "category": "Nosotros Commands",
          "exampleSentence": {
            "spanish": "¡Vámonos ya!",
            "english": "Let's leave now!"
          }
        },
        {
          "id": "v9603",
          "spanish": "¡Hablemos!",
          "english": "Let's talk!",
          "category": "Nosotros Commands",
          "exampleSentence": {
            "spanish": "¡Hablemos de eso mañana!",
            "english": "Let's talk about that tomorrow!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9601",
          "front": "How to say \"Let's go\" vs \"Let's leave\" in Spanish?",
          "back": "Let's go = ¡Vamos!\nLet's leave = ¡Vámonos! (irse: vamos + nos → vámonos)",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l96-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"Let's study together\" in Spanish?",
          "explanation": "Nosotros command uses the present subjunctive: \"¡Estudiemos juntos!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡Estudiemos juntos!",
              "subtext": "Correct nosotros command",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡Estudiamos juntos!",
              "subtext": "Present indicative (We study)",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡Vamos estudiar juntos!",
              "subtext": "Missing \"a\"",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡Estudien juntos!",
              "subtext": "Ustedes command (You guys study)",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l96-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete the reflexive command for \"Let's sit down\" (sentarse):",
          "sentenceBefore": "¡",
          "sentenceAfter": "en esta mesa.",
          "correctAnswers": [
            "Sentémonos",
            "sentémonos"
          ],
          "wordBank": [
            "Sentémonos",
            "Sentemosnos",
            "Sentamos",
            "Nos sentamos"
          ],
          "hint": "Drop the final -s before -nos and add accent.",
          "explanation": "\"Sentemos\" + \"nos\" drops the \"s\" → \"¡Sentémonos!\"."
        }
      ]
    },
    {
      "id": "u8-l97",
      "slug": "indcomm",
      "unitId": 8,
      "order": 97,
      "title": "97. Indirect Commands",
      "subtitle": "\"Que + Subjunctive\": Giving Commands to a Third Party",
      "estimatedMinutes": 9,
      "iconName": "ArrowRight",
      "summary": "Use \"Que + Subjunctive\" to express indirect commands, wishes, or instructions intended for a third party (\"Let him do it\", \"Have them enter\", \"May you have a good day\").",
      "theory": [
        {
          "id": "u8-l97-t1",
          "title": "The Indirect Command Formula",
          "summary": "Implies an omitted main verb like \"(Quiero / Mando) que...\".",
          "formula": {
            "pattern": "¡Que + [Sujeto 3ª persona] + [Verbo en Subjuntivo]!",
            "example": "¡Que pase el siguiente! (Have the next person come in!)"
          },
          "examples": [
            {
              "spanish": "¡Que lo haga él si tiene tiempo!",
              "english": "Let him do it if he has time!",
              "audio": "¡Que lo haga él!"
            },
            {
              "spanish": "¡Que tengan un buen viaje!",
              "english": "Have a great trip! (May you all have a great trip)",
              "audio": "¡Que tengan un buen viaje!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9701",
          "spanish": "¡Que pase!",
          "english": "Have him/her enter! / Let him in!",
          "category": "Indirect Commands",
          "exampleSentence": {
            "spanish": "¡Que pase el paciente!",
            "english": "Let the patient enter!"
          }
        },
        {
          "id": "v9702",
          "spanish": "¡Que se diviertan!",
          "english": "Have fun! (to a group)",
          "category": "Indirect Commands",
          "exampleSentence": {
            "spanish": "¡Que se diviertan en la fiesta!",
            "english": "Have fun at the party!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9701",
          "front": "Formula for indirect third-person commands",
          "back": "¡Que + [Subjuntivo]!\n\"¡Que entre!\" (Let him enter!) | \"¡Que lo haga él!\" (Let him do it!)",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l97-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"Have the next patient enter\" in Spanish?",
          "explanation": "Use the indirect command formula \"¡Que pase el siguiente paciente!\".",
          "options": [
            {
              "id": "opt1",
              "text": "¡Que pase el siguiente paciente!",
              "subtext": "Correct indirect command with subjunctive",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¡Que pasa el siguiente paciente!",
              "subtext": "Indicative form",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¡Pasa el siguiente paciente!",
              "subtext": "Direct tú command to the wrong person",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¡Pasad el paciente!",
              "subtext": "Incorrect form",
              "isCorrect": false
            }
          ]
        }
      ]
    },
    {
      "id": "u8-l98",
      "slug": "commrev2",
      "unitId": 8,
      "order": 98,
      "title": "98. Commands Review II",
      "subtitle": "Comprehensive Imperative Mastery Across All Persons & Modes",
      "estimatedMinutes": 11,
      "iconName": "CheckCircle2",
      "summary": "Solidify your complete mastery of Spanish commands across all grammatical persons: tú (affirmative vs negative), usted/ustedes, nosotros, vosotros, and indirect commands.",
      "theory": [
        {
          "id": "u8-l98-t1",
          "title": "The Master Imperative Matrix",
          "summary": "One chart summarizing every imperative form in the Spanish language for the verb HACER.",
          "table": {
            "headers": [
              "Person / Form",
              "Affirmative Command",
              "Negative Command"
            ],
            "rows": [
              [
                "Tú (informal)",
                "¡Hazlo! (Vin Diesel + attached)",
                "¡No lo hagas! (Subjunctive + in front)"
              ],
              [
                "Usted (formal sing)",
                "¡Hágalo! (Subjunctive + attached)",
                "¡No lo haga! (Subjunctive + in front)"
              ],
              [
                "Nosotros (Let's)",
                "¡Hagámoslo! (Subjunctive + attached)",
                "¡No lo hagamos! (Subjunctive + in front)"
              ],
              [
                "Vosotros (informal pl)",
                "¡Hacedlo! (Drop -r, add -d)",
                "¡No lo hagáis! (Subjunctive + in front)"
              ],
              [
                "Ustedes (formal pl)",
                "¡Háganlo! (Subjunctive + attached)",
                "¡No lo hagan! (Subjunctive + in front)"
              ],
              [
                "Indirect (3rd person)",
                "¡Que lo haga él! (Que + Subjunctive)",
                "¡Que no lo haga él!"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¡Hazlo tú, hágalo usted, hagámoslo todos juntos!",
              "english": "Do it yourself, do it sir, let us all do it together!",
              "audio": "¡Hazlo tú!"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v9801",
          "spanish": "¡Hagámoslo!",
          "english": "Let's do it!",
          "category": "Review Commands",
          "exampleSentence": {
            "spanish": "¡Hagámoslo hoy mismo!",
            "english": "Let's do it today!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f9801",
          "front": "Master rule of Spanish commands",
          "back": "Only AFFIRMATIVE TÚ (¡Habla!, ¡Haz!) and AFFIRMATIVE VOSOTROS (¡Hablad!) use non-subjunctive roots. ALL OTHER commands (Formal Ud./Uds., Negative Tú/Vosotros, Nosotros, Indirect) use the SUBJUNCTIVE!",
          "category": "Commands"
        }
      ],
      "exercises": [
        {
          "id": "u8-l98-ex1",
          "type": "multiple-choice",
          "prompt": "Which command is formed WITHOUT using the subjunctive?",
          "explanation": "Only affirmative informal tú commands (like ¡Come!) and affirmative vosotros commands (like ¡Comed!) are derived from non-subjunctive forms.",
          "options": [
            {
              "id": "opt1",
              "text": "Affirmative Tú command (¡Habla!, ¡Come!)",
              "subtext": "Uses 3rd person present indicative",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Negative Tú command (¡No hables!)",
              "subtext": "Uses present subjunctive",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Formal Usted command (¡Hable!)",
              "subtext": "Uses present subjunctive",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Nosotros command (¡Hablemos!)",
              "subtext": "Uses present subjunctive",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u8-l98-ex2",
          "type": "matching-pairs",
          "prompt": "Match each command of \"escribir\" to its correct target person:",
          "explanation": "Reviewing command conjugations.",
          "pairs": [
            {
              "id": "p1",
              "left": "¡Escribe!",
              "right": "Affirmative Tú"
            },
            {
              "id": "p2",
              "left": "¡No escribas!",
              "right": "Negative Tú"
            },
            {
              "id": "p3",
              "left": "¡Escriba!",
              "right": "Formal Usted"
            },
            {
              "id": "p4",
              "left": "¡Escribamos!",
              "right": "Nosotros (Let's write)"
            }
          ]
        }
      ]
    }
  ],
  "masteryExam": {
    "id": "unit-8-exam",
    "title": "Unit 8 Comprehensive Mastery Exam",
    "description": "Test your complete mastery of Unit 8: Relative pronouns (que, quien, el que, lo que, cuyo), formal commands (Ud./Uds.), informal commands (tú and Vin Diesel irregulars), pronoun placement with imperatives, vosotros commands, nosotros commands, and indirect commands.",
    "passingScore": 80,
    "exercises": [
      {
        "id": "u8-exam-ex1",
        "type": "multiple-choice",
        "prompt": "What is the affirmative informal tú command of \"hacer\"?",
        "explanation": "\"Hacer\" is a Vin Diesel irregular: \"¡Haz!\".",
        "options": [
          {
            "id": "opt1",
            "text": "¡Haz!",
            "subtext": "Correct Vin Diesel irregular command",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "¡Hace!",
            "subtext": "Incorrect",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "¡Hagas!",
            "subtext": "Negative command form",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "¡Haga!",
            "subtext": "Formal Ud. command",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u8-exam-ex2",
        "type": "fill-in-blank",
        "prompt": "Fill in the negative tú command of \"decir\" (pronoun in front): \"¡No _______ (me lo) digas!\"",
        "sentenceBefore": "¡No",
        "sentenceAfter": "digas todavía!",
        "correctAnswers": [
          "me lo",
          "Me lo"
        ],
        "wordBank": [
          "me lo",
          "te lo",
          "se lo",
          "dímelo"
        ],
        "hint": "Indirect object first, direct object second.",
        "explanation": "In negative commands, pronouns go in front: \"¡No me lo digas!\"."
      },
      {
        "id": "u8-exam-ex3",
        "type": "multiple-choice",
        "prompt": "Which relative pronoun correctly fills: \"La mujer _______ (whose) casa compré es doctora\"?",
        "explanation": "\"Casa\" is feminine singular, so the relative adjective is \"cuya\".",
        "options": [
          {
            "id": "opt1",
            "text": "cuya",
            "subtext": "Agrees with feminine singular \"casa\"",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "cuyo",
            "subtext": "Masc singular",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "cuyas",
            "subtext": "Plural",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "quien",
            "subtext": "Not a possessive relative",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u8-exam-ex4",
        "type": "fill-in-blank",
        "prompt": "Complete with the neuter relative \"lo que\" for abstract ideas: \"_______ más me gusta es la paella.\"",
        "sentenceBefore": "",
        "sentenceAfter": "más me gusta es la paella.",
        "correctAnswers": [
          "Lo que",
          "lo que"
        ],
        "wordBank": [
          "Lo que",
          "El que",
          "Qué",
          "Cuyo"
        ],
        "hint": "Means \"What / that which\" for an abstract concept.",
        "explanation": "\"Lo que\" refers to abstract statements: \"Lo que más me gusta...\"."
      },
      {
        "id": "u8-exam-ex5",
        "type": "multiple-choice",
        "prompt": "What is the formal command (Usted) for \"venir\"?",
        "explanation": "\"Venir\" forms the formal command from the present subjunctive: \"¡Venga!\".",
        "options": [
          {
            "id": "opt1",
            "text": "¡Venga!",
            "subtext": "Correct formal command (Present subjunctive)",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "¡Ven!",
            "subtext": "Informal tú command",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "¡Viene!",
            "subtext": "Present indicative",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "¡Vengas!",
            "subtext": "Tú subjunctive form",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u8-exam-ex6",
        "type": "sentence-builder",
        "prompt": "Translate: \"Let's speak in Spanish during the class\"",
        "targetEnglish": "Let's speak in Spanish during the class",
        "correctTokens": [
          "Hablemos",
          "en",
          "español",
          "durante",
          "la",
          "clase"
        ],
        "availableTokens": [
          "Hablemos",
          "en",
          "español",
          "durante",
          "la",
          "clase",
          "Hablamos",
          "Hablen"
        ],
        "explanation": "\"Hablemos en español durante la clase.\""
      },
      {
        "id": "u8-exam-ex7",
        "type": "fill-in-blank",
        "prompt": "Fill in the plural relative pronoun after a preposition: \"Las amigas con _______ hablé son amables.\"",
        "sentenceBefore": "Las amigas con",
        "sentenceAfter": "hablé son muy amables.",
        "correctAnswers": [
          "quienes",
          "Quienes"
        ],
        "wordBank": [
          "quienes",
          "quien",
          "cuyas",
          "lo que"
        ],
        "hint": "Plural form for persons after preposition.",
        "explanation": "\"Con quienes\" agrees with the plural antecedent \"las amigas\"."
      },
      {
        "id": "u8-exam-ex8",
        "type": "multiple-choice",
        "prompt": "What is the affirmative informal command (tú) of \"tener\"?",
        "explanation": "\"Tener\" is a Vin Diesel verb: \"¡Ten!\".",
        "options": [
          {
            "id": "opt1",
            "text": "¡Ten!",
            "subtext": "Correct Vin Diesel command",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "¡Tiene!",
            "subtext": "Incorrect",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "¡Tengas!",
            "subtext": "Negative command form",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "¡Tenga!",
            "subtext": "Formal Ud. command",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u8-exam-ex9",
        "type": "matching-pairs",
        "prompt": "Match each command to its rule on pronoun placement:",
        "explanation": "Testing command pronoun placement rules.",
        "pairs": [
          {
            "id": "p1",
            "left": "¡Hazlo!",
            "right": "Affirmative command: Pronoun attached to end"
          },
          {
            "id": "p2",
            "left": "¡No lo hagas!",
            "right": "Negative command: Pronoun in front after \"no\""
          },
          {
            "id": "p3",
            "left": "¡Dígamelo!",
            "right": "Affirmative formal with accent added"
          },
          {
            "id": "p4",
            "left": "¡Vámonos!",
            "right": "Reflexive nosotros drops -s before -nos"
          }
        ]
      },
      {
        "id": "u8-exam-ex10",
        "type": "error-identification",
        "prompt": "Find the mistake in this sentence:",
        "incorrectSentence": "¡Por favor, no hazlo ahora!",
        "errorWord": "hazlo",
        "options": [
          "lo hagas",
          "hagaslo",
          "lo haz",
          "hagas"
        ],
        "correctOption": "lo hagas",
        "explanation": "Negative commands use the subjunctive and pronouns must precede the verb: \"¡No lo hagas!\"."
      }
    ]
  }
};
