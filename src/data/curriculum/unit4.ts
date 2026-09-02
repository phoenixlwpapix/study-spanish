import type { Unit } from './types';

export const unit4: Unit = {
  "id": 4,
  "title": "Unit 4: Object Pronouns, Gustar & Present Progressive",
  "subtitle": "Lessons 40–50: Direct & Indirect Pronouns, Double Objects, Gustar & Gerunds",
  "description": "Master the Spanish pronoun system: prepositional pronouns (conmigo, contigo), direct and indirect object pronouns, placement rules, double pronoun mechanics (\"se lo\"), verbs like gustar, the present progressive tense, and irregular \"yo\" form verbs.",
  "iconName": "Layers",
  "colorTheme": "indigo",
  "isAvailable": true,
  "lessons": [
    {
      "id": "u4-l40",
      "slug": "prepositional-pronouns",
      "unitId": 4,
      "order": 40,
      "title": "40. Prepositional Pronouns",
      "subtitle": "Pronouns Used After Prepositions & The \"Conmigo / Contigo\" Exceptions",
      "estimatedMinutes": 9,
      "iconName": "Link",
      "summary": "Learn which pronouns follow prepositions like \"para\", \"de\", \"a\", and \"en\". Master the special irregular combinations \"conmigo\" (with me) and \"contigo\" (with you), plus the 6 prepositions that use subject pronouns instead.",
      "theory": [
        {
          "id": "u4-l40-t1",
          "title": "Prepositional Pronouns Chart",
          "summary": "Most prepositional pronouns match subject pronouns, EXCEPT for \"mí\" (me) and \"ti\" (you).",
          "table": {
            "headers": [
              "Person",
              "Prepositional Pronoun",
              "Example with \"para\" (for)",
              "English"
            ],
            "rows": [
              [
                "yo",
                "mí",
                "para mí",
                "for me"
              ],
              [
                "tú",
                "ti",
                "para ti",
                "for you (informal)"
              ],
              [
                "él / ella / usted",
                "él / ella / usted",
                "para él / ella / usted",
                "for him / her / you (formal)"
              ],
              [
                "nosotros / nosotras",
                "nosotros / nosotras",
                "para nosotros",
                "for us"
              ],
              [
                "vosotros / vosotras",
                "vosotros / vosotras",
                "para vosotros",
                "for you all (Spain)"
              ],
              [
                "ellos / ellas / ustedes",
                "ellos / ellas / ustedes",
                "para ellos / ellas",
                "for them / you all"
              ]
            ]
          },
          "content": [
            "Notice that only the 1st and 2nd person singular change: **mí** and **ti**. All other prepositional pronouns are identical to the standard subject pronouns (*para él, para nosotros, para ellos*).",
            "Note the accent: **mí** (pronoun) carries an accent to distinguish it from **mi** (possessive adjective: my). **Ti** NEVER carries an accent."
          ],
          "examples": [
            {
              "spanish": "Este regalo es para ti.",
              "english": "This gift is for you.",
              "audio": "Este regalo es para ti."
            },
            {
              "spanish": "Ellos hablan de mí.",
              "english": "They are talking about me.",
              "audio": "Ellos hablan de mí."
            },
            {
              "spanish": "Vivimos cerca de ellos.",
              "english": "We live near them.",
              "audio": "Vivimos cerca de ellos."
            }
          ]
        },
        {
          "id": "u4-l40-t2",
          "title": "The Special Combinations with \"CON\"",
          "summary": "When combined with \"con\" (with), mí and ti fuse into \"conmigo\" and \"contigo\".",
          "ruleHighlights": [
            {
              "label": "con + mí → conmigo",
              "description": "¿Quieres venir conmigo? (Do you want to come with me?)",
              "color": "indigo"
            },
            {
              "label": "con + ti → contigo",
              "description": "Siempre estoy feliz contigo (I am always happy with you)",
              "color": "emerald"
            },
            {
              "label": "Exceptions using Yo/Tú",
              "description": "entre, según, excepto, incluso, menos, salvo take \"yo\" and \"tú\" (e.g. entre tú y yo)",
              "color": "rose"
            }
          ],
          "examples": [
            {
              "spanish": "¿Vas al cine conmigo?",
              "english": "Are you going to the movies with me?",
              "audio": "¿Vas al cine conmigo?"
            },
            {
              "spanish": "Quiero bailar contigo.",
              "english": "I want to dance with you.",
              "audio": "Quiero bailar contigo."
            },
            {
              "spanish": "Entre tú y yo, el examen no fue difícil.",
              "english": "Between you and me, the exam was not difficult. (Exception: entre takes tú y yo)",
              "audio": "Entre tú y yo, el examen no fue difícil."
            }
          ],
          "watchOut": "Never say \"con mí\" or \"con ti\"! Always use \"conmigo\" and \"contigo\". Also, never say \"entre ti y mí\"—the rule states \"entre tú y yo\"."
        }
      ],
      "vocabulary": [
        {
          "id": "v4001",
          "spanish": "para mí",
          "english": "for me",
          "category": "Prepositional Pronouns",
          "exampleSentence": {
            "spanish": "El café es para mí.",
            "english": "The coffee is for me."
          }
        },
        {
          "id": "v4002",
          "spanish": "para ti",
          "english": "for you",
          "category": "Prepositional Pronouns",
          "exampleSentence": {
            "spanish": "Tengo un regalo para ti.",
            "english": "I have a gift for you."
          }
        },
        {
          "id": "v4003",
          "spanish": "conmigo",
          "english": "with me (con + mí)",
          "category": "Prepositional Pronouns",
          "exampleSentence": {
            "spanish": "¿Vienes conmigo al parque?",
            "english": "Are you coming with me to the park?"
          }
        },
        {
          "id": "v4004",
          "spanish": "contigo",
          "english": "with you (con + ti)",
          "category": "Prepositional Pronouns",
          "exampleSentence": {
            "spanish": "Me gusta hablar contigo.",
            "english": "I like talking with you."
          }
        },
        {
          "id": "v4005",
          "spanish": "entre tú y yo",
          "english": "between you and me",
          "category": "Idioms",
          "exampleSentence": {
            "spanish": "Es un secreto entre tú y yo.",
            "english": "It's a secret between you and me."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4001",
          "front": "with me vs with you",
          "back": "conmigo vs contigo",
          "category": "Prepositional Pronouns"
        },
        {
          "id": "f4002",
          "front": "mí vs mi",
          "back": "mí (pronoun: for me) vs mi (possessive: my book)",
          "category": "Prepositional Pronouns"
        },
        {
          "id": "f4003",
          "front": "Between you and me (Spanish rule)",
          "back": "Entre tú y yo\n(Preposition exception using subject pronouns)",
          "category": "Prepositional Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u4-l40-ex1",
          "type": "multiple-choice",
          "prompt": "How do you ask \"Do you want to come with me?\" in Spanish?",
          "explanation": "\"With me\" is expressed by the fused pronoun \"conmigo\".",
          "options": [
            {
              "id": "opt1",
              "text": "¿Quieres venir conmigo?",
              "subtext": "Correct fused form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¿Quieres venir con mí?",
              "subtext": "Incorrect: \"con mí\" does not exist",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¿Quieres venir con yo?",
              "subtext": "Incorrect pronoun",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¿Quieres venir con me?",
              "subtext": "Incorrect pronoun",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l40-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete with the prepositional pronoun \"you (informal)\": \"This book is for _______.\"",
          "sentenceBefore": "Este libro es para",
          "sentenceAfter": ".",
          "correctAnswers": [
            "ti",
            "Ti"
          ],
          "wordBank": [
            "ti",
            "tí",
            "tú",
            "te"
          ],
          "hint": "Prepositional pronoun for \"tú\" is \"ti\" (never accented).",
          "explanation": "After prepositions like \"para\", use \"ti\": \"para ti\" (without accent mark)."
        },
        {
          "id": "u4-l40-ex3",
          "type": "sentence-builder",
          "prompt": "Translate: \"It is a secret between you and me\"",
          "targetEnglish": "It is a secret between you and me",
          "correctTokens": [
            "Es",
            "un",
            "secreto",
            "entre",
            "tú",
            "y",
            "yo"
          ],
          "availableTokens": [
            "Es",
            "un",
            "secreto",
            "entre",
            "tú",
            "y",
            "yo",
            "ti",
            "mí",
            "conmigo"
          ],
          "explanation": "\"Es un secreto entre tú y yo.\" (Entre is an exception preposition that takes subject pronouns \"tú y yo\")."
        },
        {
          "id": "u4-l40-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Ellos siempre salen con ti los viernes por la noche.",
          "errorWord": "con ti",
          "options": [
            "contigo",
            "conmigo",
            "para ti",
            "con tú"
          ],
          "correctOption": "contigo",
          "explanation": "\"con + ti\" must always fuse into \"contigo\"."
        }
      ]
    },
    {
      "id": "u4-l41",
      "slug": "direct-object-pronouns-1",
      "unitId": 4,
      "order": 41,
      "title": "41. Direct Object Pronouns I",
      "subtitle": "Replacing Nouns: me, te, lo, la, nos, os, los, las",
      "estimatedMinutes": 10,
      "iconName": "Minimize2",
      "summary": "A direct object directly receives the action of the verb (answers \"What?\" or \"Whom?\"). Learn the 8 direct object pronouns that replace nouns to avoid repetition.",
      "theory": [
        {
          "id": "u4-l41-t1",
          "title": "The 8 Direct Object Pronouns",
          "summary": "Direct object pronouns replace the entity directly acted upon and agree in gender and number.",
          "table": {
            "headers": [
              "Person",
              "Direct Object Pronoun",
              "English Meaning",
              "Example Sentence"
            ],
            "rows": [
              [
                "yo (me)",
                "me",
                "me",
                "Juan me llama (Juan calls me)"
              ],
              [
                "tú (you - inf)",
                "te",
                "you",
                "Te veo (I see you)"
              ],
              [
                "él / inanimate (masc sing)",
                "lo",
                "him / it (masc)",
                "Compro el libro → Lo compro (I buy it)"
              ],
              [
                "ella / inanimate (fem sing)",
                "la",
                "her / it (fem)",
                "Miro la tele → La miro (I watch it)"
              ],
              [
                "nosotros (us)",
                "nos",
                "us",
                "Ella nos escucha (She listens to us)"
              ],
              [
                "vosotros (you all - Spain)",
                "os",
                "you all",
                "Os invito (I invite you all)"
              ],
              [
                "ellos / inanimate (masc plur)",
                "los",
                "them (masc)",
                "Leo los libros → Los leo (I read them)"
              ],
              [
                "ellas / inanimate (fem plur)",
                "las",
                "them (fem)",
                "Como las manzanas → Las como (I eat them)"
              ]
            ]
          },
          "content": [
            "To find the direct object, ask: *Verb + What?* or *Verb + Whom?*",
            "Example: *Yo compro la casa*. What do I buy? *La casa* (feminine singular) → Replace with **la**: *Yo la compro* (I buy it)."
          ],
          "examples": [
            {
              "spanish": "Yo tengo el libro. → Yo lo tengo.",
              "english": "I have the book. → I have it.",
              "audio": "Yo lo tengo."
            },
            {
              "spanish": "María come la manzana. → María la come.",
              "english": "Maria eats the apple. → Maria eats it.",
              "audio": "María la come."
            },
            {
              "spanish": "Ellos ven a nosotros. → Ellos nos ven.",
              "english": "They see us.",
              "audio": "Ellos nos ven."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v4101",
          "spanish": "lo",
          "english": "it (masculine) / him",
          "category": "Direct Object Pronouns",
          "exampleSentence": {
            "spanish": "Tengo el billete. Lo tengo.",
            "english": "I have the ticket. I have it."
          }
        },
        {
          "id": "v4102",
          "spanish": "la",
          "english": "it (feminine) / her",
          "category": "Direct Object Pronouns",
          "exampleSentence": {
            "spanish": "Veo a María. La veo.",
            "english": "I see Maria. I see her."
          }
        },
        {
          "id": "v4103",
          "spanish": "los",
          "english": "them (masculine)",
          "category": "Direct Object Pronouns",
          "exampleSentence": {
            "spanish": "Compro los zapatos. Los compro.",
            "english": "I buy the shoes. I buy them."
          }
        },
        {
          "id": "v4104",
          "spanish": "las",
          "english": "them (feminine)",
          "category": "Direct Object Pronouns",
          "exampleSentence": {
            "spanish": "Como las frutas. Las como.",
            "english": "I eat the fruits. I eat them."
          }
        },
        {
          "id": "v4105",
          "spanish": "nos",
          "english": "us",
          "category": "Direct Object Pronouns",
          "exampleSentence": {
            "spanish": "El profesor nos ayuda.",
            "english": "The teacher helps us."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4101",
          "front": "Direct Object Pronouns: it / him / her",
          "back": "lo (masc) / la (fem)",
          "category": "Direct Object Pronouns"
        },
        {
          "id": "f4102",
          "front": "Direct Object Pronouns: them",
          "back": "los (masc) / las (fem)",
          "category": "Direct Object Pronouns"
        },
        {
          "id": "f4103",
          "front": "Replace: Yo compro la casa",
          "back": "Yo la compro",
          "category": "Direct Object Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u4-l41-ex1",
          "type": "multiple-choice",
          "prompt": "Replace the direct object noun with a pronoun: \"Carlos lee el periódico.\"",
          "explanation": "\"El periódico\" is masculine singular, so it is replaced by \"lo\" placed before the conjugated verb: \"Carlos lo lee\".",
          "options": [
            {
              "id": "opt1",
              "text": "Carlos lo lee.",
              "subtext": "Correct pronoun replacement",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Carlos la lee.",
              "subtext": "Incorrect gender (periódico is masculine)",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Carlos le lee.",
              "subtext": "\"Le\" is an indirect object pronoun",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Carlos lee lo.",
              "subtext": "Incorrect pronoun placement",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l41-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the direct object pronoun for \"las cartas\" (the letters): \"Yo _______ escribo.\"",
          "sentenceBefore": "Yo",
          "sentenceAfter": "escribo todos los días.",
          "correctAnswers": [
            "las",
            "Las"
          ],
          "wordBank": [
            "las",
            "los",
            "la",
            "les"
          ],
          "hint": "\"Cartas\" is feminine plural.",
          "explanation": "\"Las cartas\" is replaced by the feminine plural direct object pronoun \"las\": \"Yo las escribo\"."
        },
        {
          "id": "u4-l41-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I see you (informal) every day\"",
          "targetEnglish": "I see you (informal) every day",
          "correctTokens": [
            "Yo",
            "te",
            "veo",
            "todos",
            "los",
            "días"
          ],
          "availableTokens": [
            "Yo",
            "te",
            "veo",
            "todos",
            "los",
            "días",
            "ti",
            "tú",
            "lo"
          ],
          "explanation": "\"Yo te veo todos los días.\" (\"Te\" is the direct object pronoun for \"tú\")."
        },
        {
          "id": "u4-l41-ex4",
          "type": "matching-pairs",
          "prompt": "Match each noun phrase with the direct object pronoun that replaces it:",
          "explanation": "Check gender and number agreement.",
          "pairs": [
            {
              "id": "p1",
              "left": "el libro",
              "right": "lo"
            },
            {
              "id": "p2",
              "left": "la manzana",
              "right": "la"
            },
            {
              "id": "p3",
              "left": "los gatos",
              "right": "los"
            },
            {
              "id": "p4",
              "left": "las maletas",
              "right": "las"
            }
          ]
        }
      ]
    },
    {
      "id": "u4-l42",
      "slug": "direct-object-pronouns-2",
      "unitId": 4,
      "order": 42,
      "title": "42. Direct Object Pronouns II",
      "subtitle": "Placement with Infinitives, Gerunds & Commands",
      "estimatedMinutes": 10,
      "iconName": "MoveRight",
      "summary": "Learn where to put direct object pronouns: placed before a single conjugated verb, OR attached to the end of infinitives, present participles (-ndo), and affirmative commands.",
      "theory": [
        {
          "id": "u4-l42-t1",
          "title": "The Two Placement Options with Compound Verb Structures",
          "summary": "When two verbs appear together (conjugated verb + infinitive OR conjugated verb + gerund), you have TWO 100% equally valid choices.",
          "ruleHighlights": [
            {
              "label": "Option 1: Before Conjugated Verb",
              "description": "Lo quiero comprar / Lo estoy comiendo",
              "color": "indigo"
            },
            {
              "label": "Option 2: Attached to End",
              "description": "Quiero comprarlo / Estoy comiéndolo (attached as a single word)",
              "color": "emerald"
            }
          ],
          "table": {
            "headers": [
              "Sentence Structure",
              "Option A: In Front",
              "Option B: Attached to End"
            ],
            "rows": [
              [
                "Verb + Infinitive",
                "Yo lo voy a comprar.",
                "Yo voy a comprarlo."
              ],
              [
                "Verb + Infinitive",
                "Ella la necesita estudiar.",
                "Ella necesita estudiarla."
              ],
              [
                "Estar + Gerund (-ndo)",
                "Nosotros los estamos viendo.",
                "Nosotros estamos viéndolos. (Add accent!)"
              ],
              [
                "Affirmative Command",
                "— (Not allowed)",
                "¡Cómpralo! (Mandatory attachment)"
              ],
              [
                "Negative Command",
                "¡No lo compres! (Mandatory in front)",
                "— (Not allowed)"
              ]
            ]
          },
          "content": [
            "**Crucial Accent Rule with Gerunds and Commands**: When attaching a pronoun to a gerund (*comiendo + lo = comiéndolo*) or command (*compra + lo = cómpralo*), add a written accent mark to maintain the original spoken stress!"
          ],
          "examples": [
            {
              "spanish": "Tengo que estudiar la lección. → La tengo que estudiar. / Tengo que estudiarla.",
              "english": "I have to study it.",
              "audio": "Tengo que estudiarla."
            },
            {
              "spanish": "Estoy leyendo el libro. → Lo estoy leyendo. / Estoy leyéndolo.",
              "english": "I am reading it.",
              "audio": "Estoy leyéndolo."
            }
          ],
          "proTip": "In standard everyday speech, attaching pronouns to the infinitive (e.g. \"Quiero comprarlo\") is extremely common and natural."
        }
      ],
      "vocabulary": [
        {
          "id": "v4201",
          "spanish": "comprarlo",
          "english": "to buy it (comprar + lo)",
          "category": "Attached Pronouns",
          "exampleSentence": {
            "spanish": "El coche es caro, pero quiero comprarlo.",
            "english": "The car is expensive, but I want to buy it."
          }
        },
        {
          "id": "v4202",
          "spanish": "hacerlo",
          "english": "to do it (hacer + lo)",
          "category": "Attached Pronouns",
          "exampleSentence": {
            "spanish": "Puedo hacerlo mañana.",
            "english": "I can do it tomorrow."
          }
        },
        {
          "id": "v4203",
          "spanish": "estudiarla",
          "english": "to study it (fem)",
          "category": "Attached Pronouns",
          "exampleSentence": {
            "spanish": "Tengo la guía y voy a estudiarla.",
            "english": "I have the guide and I am going to study it."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4201",
          "front": "Two placement options for: Quiero comprar el libro",
          "back": "1. Lo quiero comprar\n2. Quiero comprarlo (attached)",
          "category": "Pronoun Placement"
        },
        {
          "id": "f4202",
          "front": "Accent rule when attaching to gerund",
          "back": "Add accent to maintain stress:\nleyendo + lo = leyéndolo",
          "category": "Pronoun Placement"
        }
      ],
      "exercises": [
        {
          "id": "u4-l42-ex1",
          "type": "multiple-choice",
          "prompt": "Which sentence demonstrates correct attachment of a pronoun to an infinitive?",
          "explanation": "\"Voy a comerla\" attaches the direct object pronoun \"la\" to the end of the infinitive \"comer\".",
          "options": [
            {
              "id": "opt1",
              "text": "Voy a comerla ahora mismo.",
              "subtext": "Correct attachment to infinitive",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Voy a la comer ahora mismo.",
              "subtext": "Incorrect: pronoun cannot go between preposition and infinitive",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Voy comer la ahora mismo.",
              "subtext": "Pronoun must attach as one word without space",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Voy comiéndola ahora mismo.",
              "subtext": "Different tense structure",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l42-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete with the attached pronoun form: \"I need to do it (el trabajo) today.\"",
          "sentenceBefore": "Necesito",
          "sentenceAfter": "hoy.",
          "correctAnswers": [
            "hacerlo",
            "Hacerlo"
          ],
          "wordBank": [
            "hacerlo",
            "hacerla",
            "lo hacer",
            "hacer"
          ],
          "hint": "hacer + lo (attached).",
          "explanation": "\"Hacer\" + \"lo\" fuses into the single word \"hacerlo\"."
        },
        {
          "id": "u4-l42-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"We are going to buy it (the car)\"",
          "targetEnglish": "We are going to buy it (the car)",
          "correctTokens": [
            "Nosotros",
            "vamos",
            "a",
            "comprarlo"
          ],
          "availableTokens": [
            "Nosotros",
            "vamos",
            "a",
            "comprarlo",
            "lo",
            "comprar",
            "la"
          ],
          "explanation": "\"Nosotros vamos a comprarlo.\" (Or: \"Nosotros lo vamos a comprar\")."
        },
        {
          "id": "u4-l42-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Yo voy a lo ver en el cine mañana.",
          "errorWord": "a lo ver",
          "options": [
            "a verlo",
            "lo voy ver",
            "a ver lo",
            "verlo a"
          ],
          "correctOption": "a verlo",
          "explanation": "You cannot place a pronoun between \"a\" and an infinitive. It must be either \"Lo voy a ver\" or \"Voy a verlo\"."
        }
      ]
    },
    {
      "id": "u4-l43",
      "slug": "direct-object-pronouns-3",
      "unitId": 4,
      "order": 43,
      "title": "43. Direct Object Pronouns III",
      "subtitle": "Disambiguation: Pronouns vs. Definite Articles",
      "estimatedMinutes": 8,
      "iconName": "HelpCircle",
      "summary": "Distinguish direct object pronouns (lo, la, los, las) from definite articles (el, la, los, las), and learn how to clarify ambiguous 3rd person pronouns.",
      "theory": [
        {
          "id": "u4-l43-t1",
          "title": "Direct Object Pronoun vs. Definite Article",
          "summary": "Articles accompany nouns; pronouns replace nouns and accompany verbs.",
          "table": {
            "headers": [
              "Form",
              "Function as Article (Followed by Noun)",
              "Function as Pronoun (Accompanying Verb)"
            ],
            "rows": [
              [
                "la",
                "la casa (the house)",
                "Yo la compro (I buy it)"
              ],
              [
                "los",
                "los libros (the books)",
                "Yo los leo (I read them)"
              ],
              [
                "las",
                "las llaves (the keys)",
                "Yo las busco (I look for them)"
              ],
              [
                "lo / el",
                "el libro (article \"el\")",
                "Yo lo leo (pronoun \"lo\")"
              ]
            ]
          },
          "content": [
            "Notice that the masculine singular forms differ: the article is **el** (*el coche*), but the direct object pronoun is **lo** (*lo tengo*).",
            "To clarify who \"lo\" or \"la\" refers to when ambiguous, native speakers often add a prepositional clarifier: *\"La veo a ella\"* (I see her) or *\"Lo veo a usted\"* (I see you)."
          ],
          "examples": [
            {
              "spanish": "El libro es interesante. Yo lo leo.",
              "english": "The book is interesting. I read it. (\"el\" = article, \"lo\" = pronoun)",
              "audio": "El libro es interesante. Yo lo leo."
            },
            {
              "spanish": "La miro a ella.",
              "english": "I look at her. (Clarified with \"a ella\")",
              "audio": "La miro a ella."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v4301",
          "spanish": "buscar",
          "english": "to look for / to search",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Busco mis gafas. Las busco.",
            "english": "I look for my glasses. I look for them."
          }
        },
        {
          "id": "v4302",
          "spanish": "encontrar",
          "english": "to find",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "No lo encuentro.",
            "english": "I cannot find it."
          }
        },
        {
          "id": "v4303",
          "spanish": "conocer",
          "english": "to know / meet (a person)",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "La conozco a ella.",
            "english": "I know her."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4301",
          "front": "Masculine Singular: Article vs Pronoun",
          "back": "Article = el (el libro) | Pronoun = lo (lo compro)",
          "category": "Direct Objects"
        },
        {
          "id": "f4302",
          "front": "Clarifying \"La veo\"",
          "back": "La veo a ella / La veo a usted",
          "category": "Direct Objects"
        }
      ],
      "exercises": [
        {
          "id": "u4-l43-ex1",
          "type": "multiple-choice",
          "prompt": "Which sentence correctly replaces \"el teléfono\"?",
          "explanation": "\"El teléfono\" is masculine singular, so its direct object pronoun is \"lo\": \"Yo lo tengo\".",
          "options": [
            {
              "id": "opt1",
              "text": "Yo lo tengo.",
              "subtext": "Correct pronoun \"lo\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Yo el tengo.",
              "subtext": "Incorrect: \"el\" is an article, not a DO pronoun",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Yo le tengo.",
              "subtext": "Incorrect object pronoun",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Yo la tengo.",
              "subtext": "Wrong gender",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l43-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete: \"I have the keys (las llaves). I have them.\"",
          "sentenceBefore": "Tengo las llaves.",
          "sentenceAfter": "tengo en mi bolsillo.",
          "correctAnswers": [
            "Las",
            "las"
          ],
          "wordBank": [
            "Las",
            "Los",
            "La",
            "Les"
          ],
          "hint": "\"Llaves\" is feminine plural.",
          "explanation": "\"Las llaves\" is replaced by \"Las\": \"Las tengo en mi bolsillo\"."
        },
        {
          "id": "u4-l43-ex3",
          "type": "sentence-builder",
          "prompt": "Translate: \"I know him (Carlos) very well\"",
          "targetEnglish": "I know him (Carlos) very well",
          "correctTokens": [
            "Yo",
            "lo",
            "conozco",
            "muy",
            "bien"
          ],
          "availableTokens": [
            "Yo",
            "lo",
            "conozco",
            "muy",
            "bien",
            "le",
            "el",
            "él"
          ],
          "explanation": "\"Yo lo conozco muy bien.\" (Direct object pronoun for him is \"lo\")."
        }
      ]
    },
    {
      "id": "u4-l44",
      "slug": "indirect-object-pronouns-1",
      "unitId": 4,
      "order": 44,
      "title": "44. Indirect Object Pronouns I",
      "subtitle": "To Whom / For Whom: me, te, le, nos, os, les",
      "estimatedMinutes": 10,
      "iconName": "Send",
      "summary": "An indirect object tells TO WHOM or FOR WHOM an action is performed. Master the 6 indirect object pronouns: me, te, le, nos, os, les.",
      "theory": [
        {
          "id": "u4-l44-t1",
          "title": "The 6 Indirect Object Pronouns",
          "summary": "Indirect object pronouns answer \"To whom?\" or \"For whom?\". Notice that \"le\" and \"les\" do not distinguish gender.",
          "table": {
            "headers": [
              "Subject Recipient",
              "Indirect Object Pronoun",
              "English Meaning",
              "Example"
            ],
            "rows": [
              [
                "(a mí) to me",
                "me",
                "to/for me",
                "Juan me da el dinero (gives me the money)"
              ],
              [
                "(a ti) to you",
                "te",
                "to/for you",
                "Te compro un café (I buy you a coffee)"
              ],
              [
                "(a él/ella/usted) to him/her/you",
                "le",
                "to/for him, her, you (formal)",
                "Le escribo una carta (I write him/her a letter)"
              ],
              [
                "(a nosotros) to us",
                "nos",
                "to/for us",
                "Nos dicen la verdad (They tell us the truth)"
              ],
              [
                "(a vosotros) to you all",
                "os",
                "to/for you all (Spain)",
                "Os mando un mensaje (I send you all a message)"
              ],
              [
                "(a ellos/ellas/uds) to them/you all",
                "les",
                "to/for them, you all",
                "Les presto el libro (I lend them the book)"
              ]
            ]
          },
          "content": [
            "Notice the difference between Direct and Indirect: 1st and 2nd persons (*me, te, nos, os*) are identical, but the 3rd person singular becomes **le** (instead of lo/la) and plural becomes **les** (instead of los/las).",
            "**Le** and **les** are gender-neutral: *le hablo a Juan* (to him) and *le hablo a María* (to her) both use **le**."
          ],
          "examples": [
            {
              "spanish": "El doctor me da la medicina.",
              "english": "The doctor gives me the medicine.",
              "audio": "El doctor me da la medicina."
            },
            {
              "spanish": "Yo le compro flores a mi madre.",
              "english": "I buy flowers for my mother. (To her → le)",
              "audio": "Yo le compro flores a mi madre."
            },
            {
              "spanish": "El camarero nos trae la comida.",
              "english": "The waiter brings us the food.",
              "audio": "El camarero nos trae la comida."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v4401",
          "spanish": "le",
          "english": "to him / to her / to you (formal)",
          "category": "Indirect Object Pronouns",
          "exampleSentence": {
            "spanish": "Le doy el libro a Carlos.",
            "english": "I give the book to Carlos."
          }
        },
        {
          "id": "v4402",
          "spanish": "les",
          "english": "to them / to you all",
          "category": "Indirect Object Pronouns",
          "exampleSentence": {
            "spanish": "Les escribo un correo a mis amigos.",
            "english": "I write an email to my friends."
          }
        },
        {
          "id": "v4403",
          "spanish": "dar",
          "english": "to give",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Te doy un consejo.",
            "english": "I give you a piece of advice."
          }
        },
        {
          "id": "v4404",
          "spanish": "decir (e:i)",
          "english": "to tell / say",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Me dice la verdad.",
            "english": "He tells me the truth."
          }
        },
        {
          "id": "v4405",
          "spanish": "prestar",
          "english": "to lend",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "¿Me prestas tu bolígrafo?",
            "english": "Will you lend me your pen?"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4401",
          "front": "Indirect Object Pronoun: to him / to her",
          "back": "le (gender-neutral)",
          "category": "Indirect Objects"
        },
        {
          "id": "f4402",
          "front": "Indirect Object Pronoun: to them",
          "back": "les (gender-neutral)",
          "category": "Indirect Objects"
        },
        {
          "id": "f4403",
          "front": "IO Pronouns chart",
          "back": "me, te, le, nos, os, les",
          "category": "Indirect Objects"
        }
      ],
      "exercises": [
        {
          "id": "u4-l44-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"I write a letter to my grandmother\" using the indirect object pronoun?",
          "explanation": "\"A mi abuela\" is the indirect recipient (to her), requiring the indirect object pronoun \"le\".",
          "options": [
            {
              "id": "opt1",
              "text": "Yo le escribo una carta a mi abuela.",
              "subtext": "Correct IO pronoun \"le\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Yo la escribo una carta a mi abuela.",
              "subtext": "Incorrect: \"la\" is direct object",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Yo lo escribo una carta a mi abuela.",
              "subtext": "Incorrect: \"lo\" is direct object",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Yo les escribo una carta a mi abuela.",
              "subtext": "Plural error (abuela is singular)",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l44-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the indirect object pronoun for \"to us\": \"The teacher explains the lesson to us.\"",
          "sentenceBefore": "El profesor",
          "sentenceAfter": "explica la lección.",
          "correctAnswers": [
            "nos",
            "Nos"
          ],
          "wordBank": [
            "nos",
            "les",
            "le",
            "me"
          ],
          "hint": "IO pronoun for nosotros.",
          "explanation": "\"A nosotros\" is represented by \"nos\": \"El profesor nos explica la lección\"."
        },
        {
          "id": "u4-l44-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"He tells me the truth\"",
          "targetEnglish": "He tells me the truth",
          "correctTokens": [
            "Él",
            "me",
            "dice",
            "la",
            "verdad"
          ],
          "availableTokens": [
            "Él",
            "me",
            "dice",
            "la",
            "verdad",
            "mí",
            "le",
            "te"
          ],
          "explanation": "\"Él me dice la verdad.\" (\"Me\" = to me)."
        },
        {
          "id": "u4-l44-ex4",
          "type": "matching-pairs",
          "prompt": "Match the recipient phrase to its corresponding Indirect Object pronoun:",
          "explanation": "Review indirect pronoun selection.",
          "pairs": [
            {
              "id": "p1",
              "left": "a mi hermano",
              "right": "le"
            },
            {
              "id": "p2",
              "left": "a mis padres",
              "right": "les"
            },
            {
              "id": "p3",
              "left": "a ti",
              "right": "te"
            },
            {
              "id": "p4",
              "left": "a nosotros",
              "right": "nos"
            }
          ]
        }
      ]
    },
    {
      "id": "u4-l45",
      "slug": "indirect-object-pronouns-2",
      "unitId": 4,
      "order": 45,
      "title": "45. Indirect Object Pronouns II",
      "subtitle": "The Mandatory Spanish Redundancy / Doubling Rule",
      "estimatedMinutes": 9,
      "iconName": "Copy",
      "summary": "In Spanish, even when the full recipient name is explicitly stated (\"a Juan\"), the indirect object pronoun (\"le\") is STILL required. Learn the doubling rule.",
      "theory": [
        {
          "id": "u4-l45-t1",
          "title": "The Mandatory Redundancy (Doubling) of Indirect Objects",
          "summary": "Spanish requires the indirect pronoun (le/les) even if the noun phrase (a + persona) is present in the sentence.",
          "formula": {
            "pattern": "[Sujeto] + LE / LES + [Verbo] + [Objeto Directo] + \"a\" + [Nombre del Receptor]",
            "example": "Yo le doy el dinero a Juan (I give the money to Juan)"
          },
          "content": [
            "In English, you say: *\"I gave the book to Juan\"*. But in Spanish, you must say: *\"Yo **le** di el libro **a Juan**\"*.",
            "Leaving out **le** (*\"Di el libro a Juan\"*) sounds unnatural or grammatically incomplete to native Spanish speakers.",
            "The phrase *\"a Juan\"* provides clarity, while **le** provides grammatical anchoring."
          ],
          "examples": [
            {
              "spanish": "Le compro un regalo a mi hermana.",
              "english": "I buy a gift for my sister. (Doubled: le ... a mi hermana)",
              "audio": "Le compro un regalo a mi hermana."
            },
            {
              "spanish": "Les explico la tarea a los estudiantes.",
              "english": "I explain the homework to the students. (Doubled: les ... a los estudiantes)",
              "audio": "Les explico la tarea a los estudiantes."
            }
          ],
          "watchOut": "Never drop \"le\" or \"les\" when an explicit \"a + recipient\" is at the end of the clause."
        }
      ],
      "vocabulary": [
        {
          "id": "v4501",
          "spanish": "mandar",
          "english": "to send",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Le mando una carta a mi abuelo.",
            "english": "I send a letter to my grandfather."
          }
        },
        {
          "id": "v4502",
          "spanish": "regalar",
          "english": "to give (as a gift)",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Le regalo flores a mi madre.",
            "english": "I gift flowers to my mother."
          }
        },
        {
          "id": "v4503",
          "spanish": "preguntar",
          "english": "to ask (a question)",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Le pregunto la hora al policía.",
            "english": "I ask the police officer for the time."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4501",
          "front": "Spanish IO Redundancy Rule",
          "back": "You must include \"le/les\" even when \"a [person]\" is in the sentence:\nLe doy el libro a Juan",
          "category": "Indirect Objects"
        },
        {
          "id": "f4502",
          "front": "I send an email to my parents",
          "back": "Les mando un correo a mis padres (les agrees with padres)",
          "category": "Indirect Objects"
        }
      ],
      "exercises": [
        {
          "id": "u4-l45-ex1",
          "type": "multiple-choice",
          "prompt": "Which sentence correctly follows the Spanish indirect object doubling rule?",
          "explanation": "Standard Spanish requires \"le\" before the verb when \"a Pedro\" is stated.",
          "options": [
            {
              "id": "opt1",
              "text": "Yo le presto mi coche a Pedro.",
              "subtext": "Correct doubling with \"le\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Yo presto mi coche a Pedro.",
              "subtext": "Unnatural/incomplete (missing \"le\")",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Yo lo presto mi coche a Pedro.",
              "subtext": "Incorrect DO pronoun",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Yo les presto mi coche a Pedro.",
              "subtext": "Plural mismatch with singular Pedro",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l45-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the required redundant pronoun for plural recipients: \"We send cards to our friends.\"",
          "sentenceBefore": "Nosotros",
          "sentenceAfter": "mandamos postales a nuestros amigos.",
          "correctAnswers": [
            "les",
            "Les"
          ],
          "wordBank": [
            "les",
            "le",
            "los",
            "nos"
          ],
          "hint": "\"A nuestros amigos\" is plural.",
          "explanation": "\"Nuestros amigos\" is plural, requiring the indirect object pronoun \"les\"."
        },
        {
          "id": "u4-l45-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I give flowers to my mother\"",
          "targetEnglish": "I give flowers to my mother",
          "correctTokens": [
            "Yo",
            "le",
            "doy",
            "flores",
            "a",
            "mi",
            "madre"
          ],
          "availableTokens": [
            "Yo",
            "le",
            "doy",
            "flores",
            "a",
            "mi",
            "madre",
            "la",
            "les"
          ],
          "explanation": "\"Yo le doy flores a mi madre.\" (Redundancy rule: le + a mi madre)."
        }
      ]
    },
    {
      "id": "u4-l46",
      "slug": "indirect-object-pronouns-3",
      "unitId": 4,
      "order": 46,
      "title": "46. Indirect Object Pronouns III",
      "subtitle": "Contrasting Direct (lo/la) vs. Indirect (le/les)",
      "estimatedMinutes": 9,
      "iconName": "GitCompare",
      "summary": "Sharpen your skills in distinguishing direct objects (the thing being acted upon) from indirect objects (the beneficiary/receiver of the action).",
      "theory": [
        {
          "id": "u4-l46-t1",
          "title": "Direct Object vs. Indirect Object Decision Matrix",
          "summary": "Ask the two key questions to determine whether to use lo/la (DO) or le/les (IO).",
          "table": {
            "headers": [
              "Question to Ask",
              "Target Identified",
              "3rd Person Pronouns to Use",
              "Example in Action"
            ],
            "rows": [
              [
                "¿QUÉ? (What is acted upon?)",
                "Direct Object (DO)",
                "lo, la, los, las",
                "Compro el libro → LO compro"
              ],
              [
                "¿A QUIÉN? (To/for whom is it done?)",
                "Indirect Object (IO)",
                "le, les",
                "Le compro el libro a Juan → LE compro el libro"
              ]
            ]
          },
          "content": [
            "In the sentence: *\"Yo le escribo una carta a mi amigo\"*: ",
            "1. *What do I write?* → *Una carta* (Direct Object) → **la**",
            "2. *To whom do I write?* → *A mi amigo* (Indirect Object) → **le**"
          ],
          "examples": [
            {
              "spanish": "Yo le escribo una carta. (a mi amigo)",
              "english": "I write a letter to him. (Indirect Object: le)",
              "audio": "Yo le escribo una carta."
            },
            {
              "spanish": "Yo la escribo. (la carta)",
              "english": "I write it. (Direct Object: la)",
              "audio": "Yo la escribo."
            },
            {
              "spanish": "Yo le escribo. (a mi amigo)",
              "english": "I write to him. (Indirect Object: le)",
              "audio": "Yo le escribo."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v4601",
          "spanish": "explicar",
          "english": "to explain",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "El profesor le explica la regla al alumno.",
            "english": "The teacher explains the rule to the student."
          }
        },
        {
          "id": "v4602",
          "spanish": "vender",
          "english": "to sell",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Le vendo mi coche a mi vecino.",
            "english": "I sell my car to my neighbor."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4601",
          "front": "Direct Object question vs IO question",
          "back": "DO = ¿Qué? (What?) | IO = ¿A quién? (To/for whom?)",
          "category": "DO vs IO"
        },
        {
          "id": "f4602",
          "front": "3rd person singular DO vs IO",
          "back": "DO = lo / la | IO = le",
          "category": "DO vs IO"
        }
      ],
      "exercises": [
        {
          "id": "u4-l46-ex1",
          "type": "multiple-choice",
          "prompt": "In \"Carlos compra flores para su novia\", what pronoun replaces \"flores\" (flowers)?",
          "explanation": "\"Flores\" answers \"What does he buy?\" (Direct Object, feminine plural), so it is replaced by \"las\".",
          "options": [
            {
              "id": "opt1",
              "text": "las",
              "subtext": "Direct Object (feminine plural)",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "les",
              "subtext": "Indirect object pronoun",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "la",
              "subtext": "Singular direct object",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "le",
              "subtext": "Indirect object pronoun",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l46-ex2",
          "type": "fill-in-blank",
          "prompt": "In \"Yo preparo la cena para mis hijos\", choose the pronoun that replaces \"para mis hijos\" (to/for whom):",
          "sentenceBefore": "Yo",
          "sentenceAfter": "preparo la cena.",
          "correctAnswers": [
            "les",
            "Les"
          ],
          "wordBank": [
            "les",
            "los",
            "le",
            "las"
          ],
          "hint": "Recipient is plural (a ellos).",
          "explanation": "\"Para mis hijos\" is the indirect object recipient (plural), so it uses \"les\"."
        },
        {
          "id": "u4-l46-ex3",
          "type": "matching-pairs",
          "prompt": "Identify whether the element is a Direct Object or Indirect Object in: \"Le doy el dinero a Carlos\"",
          "explanation": "Distinguish direct receiver from beneficiary.",
          "pairs": [
            {
              "id": "p1",
              "left": "el dinero",
              "right": "Direct Object (lo)"
            },
            {
              "id": "p2",
              "left": "a Carlos",
              "right": "Indirect Object (le)"
            }
          ]
        }
      ]
    },
    {
      "id": "u4-l47",
      "slug": "double-object-pronouns",
      "unitId": 4,
      "order": 47,
      "title": "47. Double Object Pronouns",
      "subtitle": "The R.I.D. Order & The Famous \"Le/Les → Se\" Transformation",
      "estimatedMinutes": 10,
      "iconName": "Zap",
      "summary": "When using both direct and indirect object pronouns together in the same sentence, they follow the R.I.D. order (Indirect before Direct), and \"le/les\" magically changes to \"se\" in front of \"lo/la/los/las\".",
      "theory": [
        {
          "id": "u4-l47-t1",
          "title": "The R.I.D. Pronoun Order & \"Se Lo\" Rule",
          "summary": "Indirect object always precedes Direct object. If both start with the letter \"L\", change the first one (le/les) to \"SE\".",
          "ruleHighlights": [
            {
              "label": "Order: IO before DO",
              "description": "Me lo das (You give it to me) / Te la compro (I buy it for you)",
              "color": "indigo"
            },
            {
              "label": "The \"L-to-S\" Rule",
              "description": "le lo → SE LO | le la → SE LA | les los → SE LOS | les las → SE LAS",
              "color": "rose"
            }
          ],
          "content": [
            "Spanish dislikes the tongue-twister repetition of two \"L\" sounds in a row (*\"le lo doy\"*, *\"les las mando\"*).",
            "Therefore, whenever **le** or **les** is immediately followed by **lo, la, los, or las**, the indirect pronoun **le/les changes into SE**.",
            "Formula: *Yo le doy el libro (lo) a Juan (le)* → *Yo **se lo** doy*."
          ],
          "examples": [
            {
              "spanish": "¿Me pasas la sal? — Sí, te la paso.",
              "english": "Can you pass me the salt? — Yes, I pass it to you. (IO te + DO la)",
              "audio": "Sí, te la paso."
            },
            {
              "spanish": "Yo le doy el dinero a María. → Yo se lo doy.",
              "english": "I give the money to Maria. (le + lo → se lo)",
              "audio": "Yo se lo doy."
            },
            {
              "spanish": "Ella compra los libros para sus hijos. → Ella se los compra.",
              "english": "She buys them for them. (les + los → se los)",
              "audio": "Ella se los compra."
            }
          ],
          "watchOut": "Never say \"Le lo doy\" or \"Les la compro\"! This is one of the most strictly enforced rules in Spanish exams."
        }
      ],
      "vocabulary": [
        {
          "id": "v4701",
          "spanish": "se lo",
          "english": "it to him / her / them",
          "category": "Double Pronouns",
          "exampleSentence": {
            "spanish": "Yo se lo explico.",
            "english": "I explain it to him/her."
          }
        },
        {
          "id": "v4702",
          "spanish": "se la",
          "english": "it (fem) to him / her / them",
          "category": "Double Pronouns",
          "exampleSentence": {
            "spanish": "Él se la da.",
            "english": "He gives it to her."
          }
        },
        {
          "id": "v4703",
          "spanish": "se los / se las",
          "english": "them to him / her / them",
          "category": "Double Pronouns",
          "exampleSentence": {
            "spanish": "Nosotros se los mandamos.",
            "english": "We send them to them."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4701",
          "front": "Order of double object pronouns",
          "back": "Indirect Object FIRST, Direct Object SECOND\n(IO + DO)",
          "category": "Double Pronouns"
        },
        {
          "id": "f4702",
          "front": "What happens to \"le lo\" and \"les la\"?",
          "back": "le lo → se lo\nles la → se la (Avoid two \"L\" pronouns)",
          "category": "Double Pronouns"
        },
        {
          "id": "f4703",
          "front": "Translate: I give it (the book) to her",
          "back": "Yo se lo doy (se = to her, lo = the book)",
          "category": "Double Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u4-l47-ex1",
          "type": "multiple-choice",
          "prompt": "Replace both objects with pronouns: \"Juan da el regalo a María.\"",
          "explanation": "\"A María\" (le) + \"el regalo\" (lo) becomes \"se lo\": \"Juan se lo da\".",
          "options": [
            {
              "id": "opt1",
              "text": "Juan se lo da.",
              "subtext": "Correct le+lo → se lo transformation",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Juan le lo da.",
              "subtext": "Incorrect: \"le lo\" is not allowed in Spanish",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Juan lo le da.",
              "subtext": "Incorrect pronoun order (DO before IO)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Juan la se da.",
              "subtext": "Incorrect order and gender",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l47-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the missing pronouns: \"Do you lend the car to me? — Yes, I lend it to you.\"",
          "sentenceBefore": "¿Me prestas el coche? — Sí,",
          "sentenceAfter": "presto.",
          "correctAnswers": [
            "te lo",
            "Te lo"
          ],
          "wordBank": [
            "te lo",
            "se lo",
            "me lo",
            "le lo"
          ],
          "hint": "To you (te) + it (lo).",
          "explanation": "\"Te\" (to you) + \"lo\" (the car) = \"te lo presto\"."
        },
        {
          "id": "u4-l47-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"She sends it (the letter) to them\"",
          "targetEnglish": "She sends it (the letter) to them",
          "correctTokens": [
            "Ella",
            "se",
            "la",
            "manda"
          ],
          "availableTokens": [
            "Ella",
            "se",
            "la",
            "manda",
            "les",
            "lo",
            "le"
          ],
          "explanation": "\"Ella se la manda.\" (les + la -> se la)."
        },
        {
          "id": "u4-l47-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Yo le los doy a mis amigos mañana.",
          "errorWord": "le los",
          "options": [
            "se los",
            "los le",
            "se las",
            "me los"
          ],
          "correctOption": "se los",
          "explanation": "When \"le/les\" meets \"los\", it must convert to \"se los\"."
        }
      ]
    },
    {
      "id": "u4-l48",
      "slug": "verbs-like-gustar",
      "unitId": 4,
      "order": 48,
      "title": "48. Verbs Like Gustar",
      "subtitle": "The Inverted Grammar of \"Pleasing\" & Common Variations",
      "estimatedMinutes": 10,
      "iconName": "Heart",
      "summary": "In Spanish, \"gustar\" does not mean \"to like\"—it means \"to be pleasing to\". Learn how the subject is actually the thing you like, and discover other verbs like encantar, interesar, and importar.",
      "theory": [
        {
          "id": "u4-l48-t1",
          "title": "The Inverted Mechanism of \"Gustar\"",
          "summary": "The verb matches the THING LIKED (singular or plural), while the person is an indirect object pronoun (me, te, le, nos, os, les).",
          "table": {
            "headers": [
              "Person (Who likes it)",
              "Singular Noun / Infinitive (gusta)",
              "Plural Nouns (gustan)"
            ],
            "rows": [
              [
                "(a mí) me",
                "Me gusta el café / Me gusta bailar",
                "Me gustan los libros"
              ],
              [
                "(a ti) te",
                "Te gusta la música",
                "Te gustan las manzanas"
              ],
              [
                "(a él / ella / usted) le",
                "Le gusta viajar",
                "Le gustan los perros"
              ],
              [
                "(a nosotros) nos",
                "Nos gusta la comida mexicana",
                "Nos gustan las vacaciones"
              ],
              [
                "(a vosotros) os",
                "Os gusta el fútbol",
                "Os gustan las películas"
              ],
              [
                "(a ellos / ellas / ustedes) les",
                "Les gusta leer",
                "Les gustan los coches"
              ]
            ]
          },
          "content": [
            "Because \"gustar\" agrees with the item liked, it only has **two primary forms** in the present tense: **gusta** (for singular nouns or any infinitive verb) and **gustan** (for plural nouns).",
            "Other verbs functioning identically: **encantar** (to love/delight), **interesar** (to interest), **importar** (to matter/be important to), **molestar** (to bother), **doler (o:ue)** (to hurt/ache), **faltar** (to lack/be missing), **quedar** (to fit/suit)."
          ],
          "examples": [
            {
              "spanish": "Me gusta la música española.",
              "english": "I like Spanish music. (Music is pleasing to me → gusta)",
              "audio": "Me gusta la música española."
            },
            {
              "spanish": "Me gustan los tacos.",
              "english": "I like tacos. (Tacos are pleasing to me → gustan)",
              "audio": "Me gustan los tacos."
            },
            {
              "spanish": "Nos encanta viajar por el mundo.",
              "english": "We love traveling the world. (Infinitive verb takes singular encanta)",
              "audio": "Nos encanta viajar por el mundo."
            },
            {
              "spanish": "A Juan le duelen los pies.",
              "english": "Juan's feet hurt. (Plural feet → duelen)",
              "audio": "A Juan le duelen los pies."
            }
          ],
          "watchOut": "Never say \"Yo gusto café\"! The person is never the grammatical subject with gustar—use \"Me gusta el café\"."
        }
      ],
      "vocabulary": [
        {
          "id": "v4801",
          "spanish": "gustar",
          "english": "to be pleasing to / to like",
          "category": "Verbs like Gustar",
          "exampleSentence": {
            "spanish": "Me gusta aprender idiomas.",
            "english": "I like learning languages."
          }
        },
        {
          "id": "v4802",
          "spanish": "encantar",
          "english": "to love / to delight",
          "category": "Verbs like Gustar",
          "exampleSentence": {
            "spanish": "Me encanta la paella.",
            "english": "I love paella."
          }
        },
        {
          "id": "v4803",
          "spanish": "interesar",
          "english": "to interest",
          "category": "Verbs like Gustar",
          "exampleSentence": {
            "spanish": "Nos interesa la historia.",
            "english": "History interests us / We are interested in history."
          }
        },
        {
          "id": "v4804",
          "spanish": "importar",
          "english": "to matter / to care about",
          "category": "Verbs like Gustar",
          "exampleSentence": {
            "spanish": "No me importa.",
            "english": "It doesn't matter to me / I don't care."
          }
        },
        {
          "id": "v4805",
          "spanish": "doler (o:ue)",
          "english": "to hurt / ache",
          "category": "Verbs like Gustar",
          "exampleSentence": {
            "spanish": "Me duele la cabeza.",
            "english": "My head hurts (I have a headache)."
          }
        },
        {
          "id": "v4806",
          "spanish": "molestar",
          "english": "to bother / annoy",
          "category": "Verbs like Gustar",
          "exampleSentence": {
            "spanish": "¿Te molesta el ruido?",
            "english": "Does the noise bother you?"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4801",
          "front": "When do you use \"gusta\" vs \"gustan\"?",
          "back": "gusta = singular noun or verb infinitives\ngustan = plural nouns",
          "category": "Verbs like Gustar"
        },
        {
          "id": "f4802",
          "front": "I love (encantar) Spanish books",
          "back": "Me encantan los libros en español (Plural books → encantan)",
          "category": "Verbs like Gustar"
        },
        {
          "id": "f4803",
          "front": "My head hurts",
          "back": "Me duele la cabeza (Doler works like gustar)",
          "category": "Verbs like Gustar"
        }
      ],
      "exercises": [
        {
          "id": "u4-l48-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"I like Spanish languages and cultures\" (plural)?",
          "explanation": "Because the liked items are plural, the verb must be \"gustan\": \"Me gustan...\".",
          "options": [
            {
              "id": "opt1",
              "text": "Me gustan las culturas hispanas.",
              "subtext": "Correct plural agreement with gustan",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Me gusta las culturas hispanas.",
              "subtext": "Incorrect: cultures is plural",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Yo gusto las culturas hispanas.",
              "subtext": "Incorrect structure (yo cannot be subject)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "A mí gusto las culturas hispanas.",
              "subtext": "Incorrect verb form",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l48-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete with the correct form of \"encantar\": \"We love to travel (viajar).\"",
          "sentenceBefore": "A nosotros nos",
          "sentenceAfter": "viajar en verano.",
          "correctAnswers": [
            "encanta",
            "Encanta"
          ],
          "wordBank": [
            "encanta",
            "encantan",
            "encantamos",
            "encanto"
          ],
          "hint": "Verb infinitives (viajar) take the singular form.",
          "explanation": "When followed by an infinitive verb (viajar), use the singular form \"encanta\"."
        },
        {
          "id": "u4-l48-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Juan is interested in science\"",
          "targetEnglish": "Juan is interested in science",
          "correctTokens": [
            "A",
            "Juan",
            "le",
            "interesa",
            "la",
            "ciencia"
          ],
          "availableTokens": [
            "A",
            "Juan",
            "le",
            "interesa",
            "la",
            "ciencia",
            "interesan",
            "se",
            "lo"
          ],
          "explanation": "\"A Juan le interesa la ciencia.\" (\"Ciencia\" is singular -> le interesa)."
        },
        {
          "id": "u4-l48-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "A mí me gustan bailar salsa los fines de semana.",
          "errorWord": "gustan",
          "options": [
            "gusta",
            "gusto",
            "gustamos",
            "gustas"
          ],
          "correctOption": "gusta",
          "explanation": "When followed by an infinitive verb like \"bailar\", always use the singular \"gusta\"."
        }
      ]
    },
    {
      "id": "u4-l49",
      "slug": "present-progressive",
      "unitId": 3,
      "order": 49,
      "title": "49. Present Progressive",
      "subtitle": "Forming the \"-ing\" Tense (Estar + Gerundio)",
      "estimatedMinutes": 9,
      "iconName": "Activity",
      "summary": "Express actions that are happening right now at this exact moment using \"estar + gerundio\" (-ando for -AR, -iendo for -ER/-IR), and master irregular gerunds like leyendo, oyendo, and durmiendo.",
      "theory": [
        {
          "id": "u4-l49-t1",
          "title": "How to Form the Gerundio (-ando / -iendo)",
          "summary": "Combine conjugated ESTAR with the present participle (-ando for -ar verbs, -iendo for -er/-ir verbs).",
          "formula": {
            "pattern": "[ESTAR: estoy/estás/está/estamos/están] + [Raíz del verbo + -ando / -iendo]",
            "example": "Estoy hablando (I am speaking) | Estamos comiendo (We are eating)"
          },
          "table": {
            "headers": [
              "Infinitive Type",
              "Gerund Ending",
              "Example Infinitive",
              "Gerund Form"
            ],
            "rows": [
              [
                "-AR Verbs",
                "-ando",
                "hablar / estudiar",
                "hablando / estudiando"
              ],
              [
                "-ER Verbs",
                "-iendo",
                "comer / aprender",
                "comiendo / aprendiendo"
              ],
              [
                "-IR Verbs",
                "-iendo",
                "vivir / escribir",
                "viviendo / escribiendo"
              ]
            ]
          },
          "content": [
            "In English, you use the present progressive for future events (*\"I am traveling tomorrow\"*). In Spanish, **estar + gerundio is ONLY for actions currently happening right now**.",
            "**Irregular Gerunds**:",
            "1. *Stem-changing -ir verbs*: **dormir → durmiendo**, **pedir → pidiendo**, **decir → diciendo**, **servir → sirviendo**.",
            "2. *Vowel clash (i → y)*: **leer → leyendo**, **oír → oyendo**, **traer → trayendo**, **ir → yendo**."
          ],
          "examples": [
            {
              "spanish": "¿Qué estás haciendo ahora?",
              "english": "What are you doing right now?",
              "audio": "¿Qué estás haciendo ahora?"
            },
            {
              "spanish": "El niño está durmiendo tranquilamente.",
              "english": "The child is sleeping peacefully. (dormir: o → u: durmiendo)",
              "audio": "El niño está durmiendo tranquilamente."
            },
            {
              "spanish": "Estamos leyendo un libro fascinante.",
              "english": "We are reading a fascinating book. (leer → leyendo)",
              "audio": "Estamos leyendo un libro fascinante."
            }
          ],
          "watchOut": "Never use the Spanish progressive for future plans! For tomorrow, use \"Voy a viajar mañana\" or \"Viajo mañana\", NEVER \"Estoy viajando mañana\"."
        }
      ],
      "vocabulary": [
        {
          "id": "v4901",
          "spanish": "hablando",
          "english": "speaking / talking",
          "category": "Gerunds",
          "exampleSentence": {
            "spanish": "Estoy hablando por teléfono.",
            "english": "I am speaking on the phone."
          }
        },
        {
          "id": "v4902",
          "spanish": "comiendo",
          "english": "eating",
          "category": "Gerunds",
          "exampleSentence": {
            "spanish": "Estamos comiendo en un restaurante.",
            "english": "We are eating at a restaurant."
          }
        },
        {
          "id": "v4903",
          "spanish": "escribiendo",
          "english": "writing",
          "category": "Gerunds",
          "exampleSentence": {
            "spanish": "Ella está escribiendo un correo.",
            "english": "She is writing an email."
          }
        },
        {
          "id": "v4904",
          "spanish": "leyendo",
          "english": "reading (leer: irregular i→y)",
          "category": "Gerunds",
          "exampleSentence": {
            "spanish": "Estoy leyendo las noticias.",
            "english": "I am reading the news."
          }
        },
        {
          "id": "v4905",
          "spanish": "durmiendo",
          "english": "sleeping (dormir: irregular o→u)",
          "category": "Gerunds",
          "exampleSentence": {
            "spanish": "El bebé está durmiendo.",
            "english": "The baby is sleeping."
          }
        },
        {
          "id": "v4906",
          "spanish": "ahora mismo",
          "english": "right now at this moment",
          "category": "Adverbs",
          "exampleSentence": {
            "spanish": "Estoy ocupado ahora mismo.",
            "english": "I am busy right now."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f4901",
          "front": "Gerund endings: -AR vs -ER/-IR",
          "back": "-AR → -ando | -ER/-IR → -iendo",
          "category": "Present Progressive"
        },
        {
          "id": "f4902",
          "front": "Irregular gerund: leer & oír",
          "back": "leyendo & oyendo (i changes to y between vowels)",
          "category": "Present Progressive"
        },
        {
          "id": "f4903",
          "front": "Irregular gerund: dormir & pedir",
          "back": "durmiendo (o→u) & pidiendo (e→i)",
          "category": "Present Progressive"
        }
      ],
      "exercises": [
        {
          "id": "u4-l49-ex1",
          "type": "multiple-choice",
          "prompt": "What is the correct present progressive form for \"We are reading a magazine right now\"?",
          "explanation": "\"Estar\" with nosotros is \"estamos\", and \"leer\" forms the irregular gerund \"leyendo\" (i→y): \"Estamos leyendo\".",
          "options": [
            {
              "id": "opt1",
              "text": "Estamos leyendo una revista ahora mismo.",
              "subtext": "Correct gerund with \"y\"",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Estamos leiendo una revista ahora mismo.",
              "subtext": "Incorrect spelling (needs \"y\")",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Somos leyendo una revista ahora mismo.",
              "subtext": "Incorrect verb (progressive requires estar)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Estamos leando una revista ahora mismo.",
              "subtext": "Incorrect ending",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l49-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the irregular gerund for \"dormir\" (o→u): \"The cat is sleeping on the sofa.\"",
          "sentenceBefore": "El gato está",
          "sentenceAfter": "en el sofá.",
          "correctAnswers": [
            "durmiendo",
            "Durmiendo"
          ],
          "wordBank": [
            "durmiendo",
            "dormiendo",
            "dormando",
            "duermiendo"
          ],
          "hint": "Vowel change o to u in gerund.",
          "explanation": "\"Dormir\" changes \"o\" to \"u\" in the gerund: \"durmiendo\"."
        },
        {
          "id": "u4-l49-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"What are you (informal) doing right now?\"",
          "targetEnglish": "What are you (informal) doing right now?",
          "correctTokens": [
            "¿Qué",
            "estás",
            "haciendo",
            "ahora",
            "mismo?"
          ],
          "availableTokens": [
            "¿Qué",
            "estás",
            "haciendo",
            "ahora",
            "mismo?",
            "haces",
            "eres",
            "haciando"
          ],
          "explanation": "\"¿Qué estás haciendo ahora mismo?\" (Estar + haciendo)."
        },
        {
          "id": "u4-l49-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Ellos son comiendo en el restaurante ahora.",
          "errorWord": "son",
          "options": [
            "están",
            "somos",
            "estamos",
            "tienen"
          ],
          "correctOption": "están",
          "explanation": "The progressive tense strictly requires ESTAR, never Ser: \"Ellos están comiendo\"."
        }
      ]
    },
    {
      "id": "u4-l50",
      "slug": "irregular-first-person-verbs",
      "unitId": 4,
      "order": 50,
      "title": "50. Irregular 1st Person Verbs",
      "subtitle": "The \"Yo-go\" Verbs & Unique 1st-Person Forms (hago, pongo, salgo, sé, veo)",
      "estimatedMinutes": 10,
      "iconName": "User",
      "summary": "Master the high-frequency verbs that are completely regular in every form EXCEPT the 1st person singular \"yo\" (e.g. hacer → hago, poner → pongo, salir → salgo, traer → traigo, saber → sé, ver → veo).",
      "theory": [
        {
          "id": "u4-l50-t1",
          "title": "The \"Yo-go\" Verbs Matrix",
          "summary": "These verbs add \"-go\" in the \"yo\" present form, but conjugate regularly in all other persons.",
          "table": {
            "headers": [
              "Infinitive",
              "Yo Form (Irregular)",
              "Tú Form (Regular)",
              "Él / Ella Form (Regular)",
              "English Meaning"
            ],
            "rows": [
              [
                "hacer (to do / make)",
                "yo hago",
                "tú haces",
                "él hace",
                "I do / I make"
              ],
              [
                "poner (to put / place)",
                "yo pongo",
                "tú pones",
                "él pone",
                "I put / I set (the table)"
              ],
              [
                "salir (to leave / go out)",
                "yo salgo",
                "tú sales",
                "él sale",
                "I leave / I go out"
              ],
              [
                "traer (to bring)",
                "yo traigo",
                "tú traes",
                "él trae",
                "I bring"
              ],
              [
                "valer (to be worth / cost)",
                "yo valgo",
                "tú vales",
                "él vale",
                "I am worth"
              ],
              [
                "caer (to fall)",
                "yo caigo",
                "tú caes",
                "él cae",
                "I fall"
              ]
            ]
          },
          "content": [
            "Notice that only the **yo** form is irregular! Once you learn *yo hago*, the rest of the chart follows standard regular -er/-ir verb patterns (*haces, hace, hacemos, hacéis, hacen*).",
            "Other non-\"go\" irregular 1st person forms you must memorize: **saber → yo sé**, **ver → yo veo**, **dar → yo doy**, **conocer → yo conozco**, **conducir → yo conduzco**."
          ],
          "examples": [
            {
              "spanish": "Yo hago mi tarea por la tarde.",
              "english": "I do my homework in the afternoon.",
              "audio": "Yo hago mi tarea por la tarde."
            },
            {
              "spanish": "Yo pongo la mesa para la cena.",
              "english": "I set the table for dinner.",
              "audio": "Yo pongo la mesa para la cena."
            },
            {
              "spanish": "Yo salgo de casa a las siete y media.",
              "english": "I leave home at 7:30.",
              "audio": "Yo salgo de casa a las siete y media."
            },
            {
              "spanish": "Yo sé la respuesta correcta.",
              "english": "I know the correct answer. (saber → sé)",
              "audio": "Yo sé la respuesta correcta."
            }
          ],
          "proTip": "Knowing these \"yo\" forms is vital: in later units, you will discover that the entire Spanish Subjunctive mood is built directly on this exact \"yo\" stem!"
        }
      ],
      "vocabulary": [
        {
          "id": "v5001",
          "spanish": "hacer (yo hago)",
          "english": "to do / to make",
          "category": "Irregular Yo Verbs",
          "exampleSentence": {
            "spanish": "Hago ejercicio todos los días.",
            "english": "I exercise every day."
          }
        },
        {
          "id": "v5002",
          "spanish": "poner (yo pongo)",
          "english": "to put / set",
          "category": "Irregular Yo Verbs",
          "exampleSentence": {
            "spanish": "Pongo los libros en la mesa.",
            "english": "I put the books on the table."
          }
        },
        {
          "id": "v5003",
          "spanish": "salir (yo salgo)",
          "english": "to leave / go out",
          "category": "Irregular Yo Verbs",
          "exampleSentence": {
            "spanish": "Salgo con mis amigos.",
            "english": "I go out with my friends."
          }
        },
        {
          "id": "v5004",
          "spanish": "traer (yo traigo)",
          "english": "to bring",
          "category": "Irregular Yo Verbs",
          "exampleSentence": {
            "spanish": "Traigo buenas noticias.",
            "english": "I bring good news."
          }
        },
        {
          "id": "v5005",
          "spanish": "saber (yo sé)",
          "english": "to know (facts/info)",
          "category": "Irregular Yo Verbs",
          "exampleSentence": {
            "spanish": "Yo sé hablar español.",
            "english": "I know how to speak Spanish."
          }
        },
        {
          "id": "v5006",
          "spanish": "ver (yo veo)",
          "english": "to see / watch",
          "category": "Irregular Yo Verbs",
          "exampleSentence": {
            "spanish": "Veo una película interesante.",
            "english": "I watch an interesting movie."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5001",
          "front": "Yo forms: hacer, poner, salir, traer",
          "back": "hago, pongo, salgo, traigo",
          "category": "Irregular Yo"
        },
        {
          "id": "f5002",
          "front": "Yo form of SABER & VER",
          "back": "sé & veo",
          "category": "Irregular Yo"
        },
        {
          "id": "f5003",
          "front": "Yo form of CONOCER & CONDUCIR",
          "back": "conozco & conduzco (-zco ending)",
          "category": "Irregular Yo"
        }
      ],
      "exercises": [
        {
          "id": "u4-l50-ex1",
          "type": "multiple-choice",
          "prompt": "What is the correct \"yo\" form of \"hacer\" (to do/make)?",
          "explanation": "\"Hacer\" is an irregular \"yo-go\" verb: \"yo hago\".",
          "options": [
            {
              "id": "opt1",
              "text": "yo hago",
              "subtext": "Correct irregular -go form",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "yo haco",
              "subtext": "Incorrect regularization",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "yo hace",
              "subtext": "3rd person form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "yo hazo",
              "subtext": "Incorrect form",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u4-l50-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the \"yo\" form of \"salir\" (to go out): \"On Fridays I go out with friends.\"",
          "sentenceBefore": "Los viernes yo",
          "sentenceAfter": "con mis amigos a cenar.",
          "correctAnswers": [
            "salgo",
            "Salgo"
          ],
          "wordBank": [
            "salgo",
            "salo",
            "sales",
            "sale"
          ],
          "hint": "Irregular -go ending.",
          "explanation": "The \"yo\" form of salir is \"salgo\": \"yo salgo con mis amigos\"."
        },
        {
          "id": "u4-l50-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I set the table and I bring the food\"",
          "targetEnglish": "I set the table and I bring the food",
          "correctTokens": [
            "Yo",
            "pongo",
            "la",
            "mesa",
            "y",
            "traigo",
            "la",
            "comida"
          ],
          "availableTokens": [
            "Yo",
            "pongo",
            "la",
            "mesa",
            "y",
            "traigo",
            "la",
            "comida",
            "hago",
            "salgo"
          ],
          "explanation": "\"Yo pongo la mesa y traigo la comida.\" (Poner -> pongo, Traer -> traigo)."
        },
        {
          "id": "u4-l50-ex4",
          "type": "matching-pairs",
          "prompt": "Match each infinitive with its irregular \"yo\" form:",
          "explanation": "Reviewing key irregular 1st-person forms.",
          "pairs": [
            {
              "id": "p1",
              "left": "hacer",
              "right": "hago"
            },
            {
              "id": "p2",
              "left": "poner",
              "right": "pongo"
            },
            {
              "id": "p3",
              "left": "traer",
              "right": "traigo"
            },
            {
              "id": "p4",
              "left": "saber",
              "right": "sé"
            }
          ]
        }
      ]
    }
  ],
  "masteryExam": {
    "id": "unit-4-exam",
    "title": "Unit 4 Comprehensive Mastery Exam",
    "description": "Test your full mastery across all Unit 4 concepts: Prepositional pronouns (conmigo, contigo), direct and indirect object pronouns, placement rules, double pronouns (se lo), verbs like gustar, the present progressive, and irregular \"yo\" verbs.",
    "passingScore": 80,
    "exercises": [
      {
        "id": "u4-exam-ex1",
        "type": "multiple-choice",
        "prompt": "Which sentence correctly replaces \"el regalo a mi madre\" with double pronouns?",
        "explanation": "\"El regalo\" (lo) + \"a mi madre\" (le) becomes \"se lo\": \"Yo se lo doy\".",
        "options": [
          {
            "id": "opt1",
            "text": "Yo se lo doy hoy.",
            "subtext": "Correct le+lo → se lo",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Yo le lo doy hoy.",
            "subtext": "Incorrect: \"le lo\" is forbidden",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Yo lo le doy hoy.",
            "subtext": "Incorrect pronoun order",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Yo la se doy hoy.",
            "subtext": "Incorrect gender and order",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u4-exam-ex2",
        "type": "fill-in-blank",
        "prompt": "Fill in the correct form of \"gustar\": \"We like Mexican tacos (plural).\"",
        "sentenceBefore": "A nosotros nos",
        "sentenceAfter": "mucho los tacos mexicanos.",
        "correctAnswers": [
          "gustan",
          "Gustan"
        ],
        "wordBank": [
          "gustan",
          "gusta",
          "gustamos",
          "gusto"
        ],
        "hint": "\"Los tacos\" is plural.",
        "explanation": "Because \"los tacos\" is plural, the verb must be \"gustan\"."
      },
      {
        "id": "u4-exam-ex3",
        "type": "multiple-choice",
        "prompt": "How do you say \"Do you want to come with me?\" in Spanish?",
        "explanation": "\"Con + mí\" fuses into \"conmigo\".",
        "options": [
          {
            "id": "opt1",
            "text": "¿Quieres venir conmigo?",
            "subtext": "Correct fused prepositional pronoun",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "¿Quieres venir con mí?",
            "subtext": "Incorrect: \"con mí\" is not valid",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "¿Quieres venir con yo?",
            "subtext": "Incorrect pronoun",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "¿Quieres venir con me?",
            "subtext": "Incorrect pronoun",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u4-exam-ex4",
        "type": "sentence-builder",
        "prompt": "Translate into Spanish: \"I am reading an interesting book right now\"",
        "targetEnglish": "I am reading an interesting book right now",
        "correctTokens": [
          "Estoy",
          "leyendo",
          "un",
          "libro",
          "interesante",
          "ahora"
        ],
        "availableTokens": [
          "Estoy",
          "leyendo",
          "un",
          "libro",
          "interesante",
          "ahora",
          "leiendo",
          "soy"
        ],
        "explanation": "\"Estoy leyendo un libro interesante ahora.\" (Leer forms irregular gerund \"leyendo\")."
      },
      {
        "id": "u4-exam-ex5",
        "type": "fill-in-blank",
        "prompt": "Fill in the irregular \"yo\" form of \"hacer\": \"Every morning I _______ my bed.\"",
        "sentenceBefore": "Cada mañana yo",
        "sentenceAfter": "mi cama.",
        "correctAnswers": [
          "hago",
          "Hago"
        ],
        "wordBank": [
          "hago",
          "haco",
          "hace",
          "hacen"
        ],
        "hint": "Irregular \"yo-go\" verb.",
        "explanation": "The \"yo\" form of hacer is \"hago\"."
      },
      {
        "id": "u4-exam-ex6",
        "type": "multiple-choice",
        "prompt": "Which sentence correctly follows the indirect object doubling rule?",
        "explanation": "Spanish requires \"le\" even when \"a mi abuela\" is present.",
        "options": [
          {
            "id": "opt1",
            "text": "Yo le escribo una carta a mi abuela.",
            "subtext": "Correct doubling with \"le\"",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Yo escribo una carta a mi abuela.",
            "subtext": "Incomplete (missing \"le\")",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Yo la escribo una carta a mi abuela.",
            "subtext": "Incorrect direct pronoun",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Yo les escribo una carta a mi abuela.",
            "subtext": "Plural mismatch with singular abuela",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u4-exam-ex7",
        "type": "fill-in-blank",
        "prompt": "Complete with the attached pronoun form: \"I want to buy them (the tickets - los billetes).\"",
        "sentenceBefore": "Tengo dinero y quiero",
        "sentenceAfter": ".",
        "correctAnswers": [
          "comprarlos",
          "Comprarlos"
        ],
        "wordBank": [
          "comprarlos",
          "comprarlas",
          "los comprar",
          "comprarlo"
        ],
        "hint": "comprar + los (attached).",
        "explanation": "\"Comprar\" + \"los\" fuses into the single word \"comprarlos\"."
      },
      {
        "id": "u4-exam-ex8",
        "type": "matching-pairs",
        "prompt": "Match each verb with its irregular \"yo\" present form:",
        "explanation": "Testing irregular 1st person verbs.",
        "pairs": [
          {
            "id": "p1",
            "left": "poner",
            "right": "pongo"
          },
          {
            "id": "p2",
            "left": "salir",
            "right": "salgo"
          },
          {
            "id": "p3",
            "left": "traer",
            "right": "traigo"
          },
          {
            "id": "p4",
            "left": "saber",
            "right": "sé"
          }
        ]
      },
      {
        "id": "u4-exam-ex9",
        "type": "multiple-choice",
        "prompt": "What is the correct gerundio of the stem-changing verb \"dormir\"?",
        "explanation": "\"Dormir\" changes \"o\" to \"u\" in the gerund: \"durmiendo\".",
        "options": [
          {
            "id": "opt1",
            "text": "durmiendo",
            "subtext": "Correct o→u change",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "dormiendo",
            "subtext": "Incorrect: missing vowel change",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "duermiendo",
            "subtext": "Incorrect diphthong",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "dormando",
            "subtext": "Incorrect ending",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u4-exam-ex10",
        "type": "error-identification",
        "prompt": "Find the mistake in this sentence:",
        "incorrectSentence": "A ellos le gustan mucho las películas de acción.",
        "errorWord": "le",
        "options": [
          "les",
          "se",
          "los",
          "me"
        ],
        "correctOption": "les",
        "explanation": "\"A ellos\" is plural, so it requires the plural indirect object pronoun \"les\"."
      }
    ]
  }
};
