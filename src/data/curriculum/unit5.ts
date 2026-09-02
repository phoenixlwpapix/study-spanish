import type { Unit } from './types';

export const unit5: Unit = {
  "id": 5,
  "title": "Unit 5: Saber vs Conocer, Por vs Para & Reflexives",
  "subtitle": "Lessons 51–61: Essential Contrasts, Clock Time, Daily Routines & Syntax Rules",
  "description": "Master core Spanish linguistic distinctions: Saber vs Conocer, large numbers (31–1000), telling time, the definitive guide to Por vs Para, irregular comparatives, demonstratives, time with hacer, possessive pronouns, reflexive daily routines, and advanced uses of definite articles.",
  "iconName": "ToggleRight",
  "colorTheme": "emerald",
  "isAvailable": true,
  "lessons": [
    {
      "id": "u5-l51",
      "slug": "saber-vs-conocer",
      "unitId": 5,
      "order": 51,
      "title": "51. Saber vs Conocer",
      "subtitle": "The Two \"To Know\" Verbs in Spanish",
      "estimatedMinutes": 10,
      "iconName": "Brain",
      "summary": "Both \"saber\" and \"conocer\" translate as \"to know\" in English, but they represent completely different kinds of knowledge: facts/skills (saber) vs people/places (conocer).",
      "theory": [
        {
          "id": "u5-l51-t1",
          "title": "SABER (Facts, Information & Skills) vs CONOCER (Familiarity)",
          "summary": "Use SABER for facts, data, information, and how to do something (saber + infinitive). Use CONOCER for being acquainted with people, places, and artistic works.",
          "ruleHighlights": [
            {
              "label": "SABER (Facts / Skills)",
              "description": "Yo sé la respuesta (I know the answer) / Sé nadar (I know how to swim)",
              "color": "indigo"
            },
            {
              "label": "CONOCER (People / Places)",
              "description": "Conozco a María (I know Maria) / Conozco Madrid (I know / have visited Madrid)",
              "color": "emerald"
            }
          ],
          "table": {
            "headers": [
              "Pronoun",
              "SABER (Present)",
              "CONOCER (Present)"
            ],
            "rows": [
              [
                "yo",
                "sé (irregular!)",
                "conozco (irregular -zco!)"
              ],
              [
                "tú",
                "sabes",
                "conoces"
              ],
              [
                "él / ella / usted",
                "sabe",
                "conoce"
              ],
              [
                "nosotros / nosotras",
                "sabemos",
                "conocemos"
              ],
              [
                "vosotros / vosotras",
                "sabéis",
                "conocéis"
              ],
              [
                "ellos / ellas / ustedes",
                "saben",
                "conocen"
              ]
            ]
          },
          "content": [
            "**Saber + Infinitive**: To say you know *how to do* an activity (swim, drive, cook, speak Spanish), use *saber + infinitive* without adding \"cómo\" (*Sé cocinar*, NOT *Sé cómo cocinar*).",
            "**Conocer + Person**: When \"conocer\" is used with a human being or pet, you MUST use the personal \"a\" (*Conozco **a** tu hermano*)."
          ],
          "examples": [
            {
              "spanish": "Yo sé dónde vive Carlos.",
              "english": "I know where Carlos lives. (Fact/Information → SABER)",
              "audio": "Yo sé dónde vive Carlos."
            },
            {
              "spanish": "¿Sabes hablar italiano?",
              "english": "Do you know how to speak Italian? (Skill → SABER)",
              "audio": "¿Sabes hablar italiano?"
            },
            {
              "spanish": "Yo conozco a Juan desde hace años.",
              "english": "I know Juan for years. (Person → CONOCER + personal a)",
              "audio": "Yo conozco a Juan desde hace años."
            },
            {
              "spanish": "No conozco esa ciudad.",
              "english": "I am not familiar with / have not visited that city. (Place → CONOCER)",
              "audio": "No conozco esa ciudad."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5101",
          "spanish": "saber",
          "english": "to know (facts / how to do something)",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Sé la verdad.",
            "english": "I know the truth."
          }
        },
        {
          "id": "v5102",
          "spanish": "conocer",
          "english": "to know / be familiar with (people/places)",
          "category": "Verbs",
          "exampleSentence": {
            "spanish": "Conozco España muy bien.",
            "english": "I know Spain very well."
          }
        },
        {
          "id": "v5103",
          "spanish": "la dirección",
          "english": "the address / direction",
          "gender": "feminine",
          "category": "Information",
          "exampleSentence": {
            "spanish": "¿Sabes su dirección?",
            "english": "Do you know his address?"
          }
        },
        {
          "id": "v5104",
          "spanish": "el número de teléfono",
          "english": "the phone number",
          "gender": "masculine",
          "category": "Information",
          "exampleSentence": {
            "spanish": "No sé su número de teléfono.",
            "english": "I don't know her phone number."
          }
        },
        {
          "id": "v5105",
          "spanish": "nadar",
          "english": "to swim",
          "category": "Activities",
          "exampleSentence": {
            "spanish": "Mi hijo sabe nadar muy bien.",
            "english": "My son knows how to swim very well."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5101",
          "front": "Saber vs Conocer",
          "back": "Saber = facts, info, skills (how to)\nConocer = people, places, familiarity",
          "category": "Saber vs Conocer"
        },
        {
          "id": "f5102",
          "front": "Yo forms: Saber & Conocer",
          "back": "yo sé & yo conozco",
          "category": "Saber vs Conocer"
        },
        {
          "id": "f5103",
          "front": "Do you know how to drive?",
          "back": "¿Sabes conducir? (No \"cómo\" needed)",
          "category": "Saber vs Conocer"
        }
      ],
      "exercises": [
        {
          "id": "u5-l51-ex1",
          "type": "multiple-choice",
          "prompt": "Which verb correctly completes: \"Do you know (are you acquainted with) my sister?\"",
          "explanation": "Being acquainted with a person requires CONOCER (plus the personal \"a\"): \"¿Conoces a mi hermana?\".",
          "options": [
            {
              "id": "opt1",
              "text": "¿Conoces a mi hermana?",
              "subtext": "Correct with conocer + personal a",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "¿Sabes a mi hermana?",
              "subtext": "Incorrect: saber is not for people",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "¿Conoce a mi hermana?",
              "subtext": "Formal/3rd person form",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "¿Sabes mi hermana?",
              "subtext": "Incorrect verb",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l51-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the correct form of \"saber\" or \"conocer\": \"I know where the library is.\"",
          "sentenceBefore": "Yo",
          "sentenceAfter": "dónde está la biblioteca.",
          "correctAnswers": [
            "sé",
            "Sé"
          ],
          "wordBank": [
            "sé",
            "conozco",
            "sabe",
            "conoce"
          ],
          "hint": "Fact / location information.",
          "explanation": "Location data and factual information requires \"saber\" -> \"Yo sé\"."
        },
        {
          "id": "u5-l51-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I know how to speak Spanish\"",
          "targetEnglish": "I know how to speak Spanish",
          "correctTokens": [
            "Yo",
            "sé",
            "hablar",
            "español"
          ],
          "availableTokens": [
            "Yo",
            "sé",
            "hablar",
            "español",
            "conozco",
            "cómo",
            "de"
          ],
          "explanation": "\"Yo sé hablar español.\" (Saber + infinitive means to know how to do something; \"cómo\" is not used)."
        },
        {
          "id": "u5-l51-ex4",
          "type": "matching-pairs",
          "prompt": "Match each statement to either SABER or CONOCER:",
          "explanation": "Reviewing the categories of knowledge.",
          "pairs": [
            {
              "id": "p1",
              "left": "...el número de teléfono",
              "right": "SABER (Fact / Data)"
            },
            {
              "id": "p2",
              "left": "...a los padres de María",
              "right": "CONOCER (People)"
            },
            {
              "id": "p3",
              "left": "...cocinar paella",
              "right": "SABER (Skill / How to)"
            },
            {
              "id": "p4",
              "left": "...la ciudad de Barcelona",
              "right": "CONOCER (Places / Familiarity)"
            }
          ]
        }
      ]
    },
    {
      "id": "u5-l52",
      "slug": "numbers-31-1000",
      "unitId": 5,
      "order": 52,
      "title": "52. Numbers: 31–1000",
      "subtitle": "Tens, Hundreds, Thousands & Gender Agreement",
      "estimatedMinutes": 10,
      "iconName": "Hash",
      "summary": "Count from 31 to 1000. Learn the spelling shift from single-word numbers (16–29) to three-word numbers (31–99: treinta y uno), and master gender agreement for hundreds (doscientos / doscientas).",
      "theory": [
        {
          "id": "u5-l52-t1",
          "title": "Tens and Hundreds (31–1000)",
          "summary": "Numbers from 31 to 99 are three separate words connected by \"y\". Hundreds (200–900) must agree in gender with the noun.",
          "table": {
            "headers": [
              "Number",
              "Tens (10–90)",
              "Number",
              "Hundreds (100–1000)"
            ],
            "rows": [
              [
                "30",
                "treinta",
                "100",
                "cien / ciento"
              ],
              [
                "40",
                "cuarenta",
                "200",
                "doscientos / doscientas"
              ],
              [
                "50",
                "cincuenta",
                "300",
                "trescientos / trescientas"
              ],
              [
                "60",
                "sesenta",
                "400",
                "cuatrocientos / cuatrocientas"
              ],
              [
                "70",
                "setenta",
                "500",
                "quinientos / quinientas (irregular!)"
              ],
              [
                "80",
                "ochenta",
                "700",
                "setecientos / setecientas (irregular!)"
              ],
              [
                "90",
                "noventa",
                "900",
                "novecientos / novecientas (irregular!)"
              ],
              [
                "35",
                "treinta y cinco",
                "1000",
                "mil (invariable)"
              ]
            ]
          },
          "content": [
            "**Cien vs Ciento**: Use **cien** for exactly 100 (*cien euros, cien personas*). Use **ciento** when followed by another number (*ciento cinco* = 105).",
            "**Gender Agreement**: The hundreds (200, 300, 400, 500, 600, 700, 800, 900) have masculine and feminine forms: *doscientos chicos* vs *doscientas chicas*.",
            "**Mil**: *Mil* (1,000) never changes: *dos mil libros*, *cinco mil casas*."
          ],
          "examples": [
            {
              "spanish": "El libro cuesta cuarenta y cinco euros.",
              "english": "The book costs 45 euros.",
              "audio": "El libro cuesta cuarenta y cinco euros."
            },
            {
              "spanish": "Hay quinientas personas en el teatro.",
              "english": "There are 500 people in the theater. (quinientas matches feminine personas)",
              "audio": "Hay quinientas personas en el teatro."
            },
            {
              "spanish": "El viaje cuesta mil doscientos dólares.",
              "english": "The trip costs 1,200 dollars.",
              "audio": "El viaje cuesta mil doscientos dólares."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5201",
          "spanish": "treinta",
          "english": "thirty",
          "category": "Numbers",
          "exampleSentence": {
            "spanish": "Tengo treinta años.",
            "english": "I am thirty years old."
          }
        },
        {
          "id": "v5202",
          "spanish": "cincuenta",
          "english": "fifty",
          "category": "Numbers",
          "exampleSentence": {
            "spanish": "Cincuenta minutos.",
            "english": "Fifty minutes."
          }
        },
        {
          "id": "v5203",
          "spanish": "cien / ciento",
          "english": "one hundred",
          "category": "Numbers",
          "exampleSentence": {
            "spanish": "Cien por ciento.",
            "english": "One hundred percent."
          }
        },
        {
          "id": "v5204",
          "spanish": "quinientos / quinientas",
          "english": "five hundred",
          "category": "Numbers",
          "exampleSentence": {
            "spanish": "Quinientas páginas.",
            "english": "500 pages."
          }
        },
        {
          "id": "v5205",
          "spanish": "mil",
          "english": "one thousand",
          "category": "Numbers",
          "exampleSentence": {
            "spanish": "Mil gracias.",
            "english": "A thousand thanks."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5201",
          "front": "cien vs ciento",
          "back": "cien = exactly 100 | ciento = 101 to 199 (e.g. ciento diez)",
          "category": "Numbers"
        },
        {
          "id": "f5202",
          "front": "500 in Spanish",
          "back": "quinientos / quinientas (Irregular root!)",
          "category": "Numbers"
        },
        {
          "id": "f5203",
          "front": "700 and 900 in Spanish",
          "back": "setecientos & novecientos",
          "category": "Numbers"
        },
        {
          "id": "f5204",
          "front": "Do hundreds agree in gender?",
          "back": "Yes! doscientos hombres vs doscientas mujeres",
          "category": "Numbers"
        }
      ],
      "exercises": [
        {
          "id": "u5-l52-ex1",
          "type": "multiple-choice",
          "prompt": "How do you write 500 women in Spanish with correct gender agreement?",
          "explanation": "\"Quinientas\" agrees with the feminine plural noun \"mujeres\".",
          "options": [
            {
              "id": "opt1",
              "text": "quinientas mujeres",
              "subtext": "Correct irregular root + feminine agreement",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "cincocientas mujeres",
              "subtext": "Incorrect root",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "quinientos mujeres",
              "subtext": "Masculine agreement error",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "cinco cientos mujeres",
              "subtext": "Incorrect format",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l52-ex2",
          "type": "fill-in-blank",
          "prompt": "Write 47 in Spanish words (three words):",
          "sentenceBefore": "Mi tío tiene",
          "sentenceAfter": "años.",
          "correctAnswers": [
            "cuarenta y siete",
            "Cuarenta y siete"
          ],
          "wordBank": [
            "cuarenta y siete",
            "cuarentasiete",
            "cuatro y siete",
            "cincuenta y siete"
          ],
          "hint": "Tens + y + units.",
          "explanation": "Numbers from 31 to 99 are three words: \"cuarenta y siete\"."
        },
        {
          "id": "u5-l52-ex3",
          "type": "matching-pairs",
          "prompt": "Match each numeral to its Spanish spelling:",
          "explanation": "Check 100, 500, 700, 900.",
          "pairs": [
            {
              "id": "p1",
              "left": "100",
              "right": "cien"
            },
            {
              "id": "p2",
              "left": "500",
              "right": "quinientos"
            },
            {
              "id": "p3",
              "left": "700",
              "right": "setecientos"
            },
            {
              "id": "p4",
              "left": "900",
              "right": "novecientos"
            }
          ]
        }
      ]
    },
    {
      "id": "u5-l53",
      "slug": "telling-time",
      "unitId": 5,
      "order": 53,
      "title": "53. Telling Time",
      "subtitle": "¿Qué hora es? — Es la una / Son las dos... & At [time] (A las...)",
      "estimatedMinutes": 9,
      "iconName": "Clock",
      "summary": "Master telling time in Spanish using the verb \"ser\": \"Es la una\" (for 1:00) and \"Son las [horas]\" (for all other hours), minutes after the hour (y cuarto, y media), minutes before the hour (menos cuarto), and event times (A las...).",
      "theory": [
        {
          "id": "u5-l53-t1",
          "title": "The Time Blueprint Formula",
          "summary": "Use \"Es la una\" for 1:00 (singular), and \"Son las [2-12]\" for all other hours (plural).",
          "table": {
            "headers": [
              "Time",
              "Spanish Expression",
              "Literal Breakdown",
              "English"
            ],
            "rows": [
              [
                "1:00",
                "Es la una en punto",
                "It is the one on the dot",
                "It is 1:00 sharp"
              ],
              [
                "3:15",
                "Son las tres y cuarto",
                "They are the three and a quarter",
                "It is 3:15 / quarter past 3"
              ],
              [
                "5:30",
                "Son las cinco y media",
                "They are the five and half",
                "It is 5:30 / half past 5"
              ],
              [
                "7:45",
                "Son las ocho menos cuarto",
                "They are eight minus a quarter",
                "It is 7:45 / quarter to 8"
              ],
              [
                "8:50",
                "Son las nueve menos diez",
                "They are nine minus ten",
                "It is 8:50 / ten to 9"
              ],
              [
                "At 4:00",
                "A las cuatro",
                "At the four",
                "At 4:00 (event time)"
              ]
            ]
          },
          "content": [
            "**Current Time vs Event Time**:",
            "1. *What time is it right now?* → *¿Qué hora es?* → **Son las cuatro** (It is 4:00).",
            "2. *At what time is the event?* → *¿A qué hora es la clase?* → **A las cuatro** (At 4:00)."
          ],
          "examples": [
            {
              "spanish": "¿Qué hora es? — Son las dos y media.",
              "english": "What time is it? — It is 2:30.",
              "audio": "Son las dos y media."
            },
            {
              "spanish": "La reunión es a la una de la tarde.",
              "english": "The meeting is at 1:00 PM. (At 1:00 uses \"a la una\")",
              "audio": "La reunión es a la una de la tarde."
            },
            {
              "spanish": "Son las seis de la mañana.",
              "english": "It is 6:00 in the morning.",
              "audio": "Son las seis de la mañana."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5301",
          "spanish": "la hora",
          "english": "the hour / time",
          "gender": "feminine",
          "category": "Time",
          "exampleSentence": {
            "spanish": "¿Qué hora es?",
            "english": "What time is it?"
          }
        },
        {
          "id": "v5302",
          "spanish": "y cuarto",
          "english": "quarter past / fifteen",
          "category": "Time",
          "exampleSentence": {
            "spanish": "Son las cuatro y cuarto.",
            "english": "It is 4:15."
          }
        },
        {
          "id": "v5303",
          "spanish": "y media",
          "english": "half past / thirty",
          "category": "Time",
          "exampleSentence": {
            "spanish": "Son las siete y media.",
            "english": "It is 7:30."
          }
        },
        {
          "id": "v5304",
          "spanish": "menos cuarto",
          "english": "quarter to / forty-five",
          "category": "Time",
          "exampleSentence": {
            "spanish": "Son las diez menos cuarto.",
            "english": "It is 9:45."
          }
        },
        {
          "id": "v5305",
          "spanish": "en punto",
          "english": "on the dot / sharp",
          "category": "Time",
          "exampleSentence": {
            "spanish": "Llega a las ocho en punto.",
            "english": "He arrives at 8:00 sharp."
          }
        },
        {
          "id": "v5306",
          "spanish": "de la mañana / tarde / noche",
          "english": "in the morning / afternoon / night (with time)",
          "category": "Time",
          "exampleSentence": {
            "spanish": "Son las tres de la tarde.",
            "english": "It is 3:00 PM."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5301",
          "front": "It is 1:00 vs It is 2:00",
          "back": "Es la una (singular) vs Son las dos (plural)",
          "category": "Telling Time"
        },
        {
          "id": "f5302",
          "front": "At what time? vs What time is it?",
          "back": "¿A qué hora...? (At what time) vs ¿Qué hora es? (What time is it)",
          "category": "Telling Time"
        },
        {
          "id": "f5303",
          "front": "Quarter past vs Quarter to",
          "back": "y cuarto vs menos cuarto",
          "category": "Telling Time"
        }
      ],
      "exercises": [
        {
          "id": "u5-l53-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"It is 1:15 PM\" in Spanish?",
          "explanation": "1:00 uses singular \"Es la una\", plus \"y cuarto\": \"Es la una y cuarto de la tarde\".",
          "options": [
            {
              "id": "opt1",
              "text": "Es la una y cuarto de la tarde.",
              "subtext": "Correct singular form for 1:00",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Son las una y cuarto de la tarde.",
              "subtext": "Incorrect: 1:00 is singular (Es la una)",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Está la una y cuarto de la tarde.",
              "subtext": "Incorrect verb (time uses ser)",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Es el uno y cuarto de la tarde.",
              "subtext": "Time uses feminine article \"la\"",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l53-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete: \"The class begins at 8:30 (half past eight).\"",
          "sentenceBefore": "La clase empieza a las ocho y",
          "sentenceAfter": ".",
          "correctAnswers": [
            "media",
            "Media"
          ],
          "wordBank": [
            "media",
            "medio",
            "treinta",
            "cuarto"
          ],
          "hint": "Half past is \"y media\".",
          "explanation": "\"Y media\" is the Spanish term for half past: \"a las ocho y media\"."
        },
        {
          "id": "u5-l53-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"The movie starts at nine sharp\"",
          "targetEnglish": "The movie starts at nine sharp",
          "correctTokens": [
            "La",
            "película",
            "empieza",
            "a",
            "las",
            "nueve",
            "en",
            "punto"
          ],
          "availableTokens": [
            "La",
            "película",
            "empieza",
            "a",
            "las",
            "nueve",
            "en",
            "punto",
            "son",
            "es"
          ],
          "explanation": "\"La película empieza a las nueve en punto.\" (Event time uses \"a las...\")."
        },
        {
          "id": "u5-l53-ex4",
          "type": "matching-pairs",
          "prompt": "Match the clock times with their Spanish descriptions:",
          "explanation": "Reviewing time phrases.",
          "pairs": [
            {
              "id": "p1",
              "left": "2:15",
              "right": "Son las dos y cuarto"
            },
            {
              "id": "p2",
              "left": "6:30",
              "right": "Son las seis y media"
            },
            {
              "id": "p3",
              "left": "7:45",
              "right": "Son las ocho menos cuarto"
            },
            {
              "id": "p4",
              "left": "1:00",
              "right": "Es la una en punto"
            }
          ]
        }
      ]
    },
    {
      "id": "u5-l54",
      "slug": "por-and-para",
      "unitId": 5,
      "order": 54,
      "title": "54. \"Por\" and \"Para\"",
      "subtitle": "The Ultimate Guide to Spanish's Two Most Confused Prepositions",
      "estimatedMinutes": 12,
      "iconName": "Shuffle",
      "summary": "Both \"por\" and \"para\" translate as \"for\" in English, but they represent opposite concepts: PARA looks forward to goals, deadlines, and destinations (PERFECT acronym), while POR looks back at causes, duration, exchange, and means.",
      "theory": [
        {
          "id": "u5-l54-t1",
          "title": "The P.E.R.F.E.C.T. Mnemonic for PARA",
          "summary": "Use PARA whenever you are aiming forward toward an endpoint.",
          "ruleHighlights": [
            {
              "label": "P - Purpose / In order to",
              "description": "Estudio para aprender (I study in order to learn)",
              "color": "emerald"
            },
            {
              "label": "E - Exact Deadline",
              "description": "La tarea es para mañana (Homework is due for tomorrow)",
              "color": "emerald"
            },
            {
              "label": "R - Recipient",
              "description": "El regalo es para ti (The gift is for you)",
              "color": "emerald"
            },
            {
              "label": "F - Future Goal",
              "description": "Estudia para ser médico (Studies to become a doctor)",
              "color": "emerald"
            },
            {
              "label": "E - Employment",
              "description": "Trabajo para Google (I work for Google)",
              "color": "emerald"
            },
            {
              "label": "C - Comparison / Opinion",
              "description": "Para un niño, lee muy bien (For a child, he reads well)",
              "color": "emerald"
            },
            {
              "label": "T - Toward Destination",
              "description": "Salgo para Madrid (I am leaving toward Madrid)",
              "color": "emerald"
            }
          ],
          "examples": [
            {
              "spanish": "Este libro es para mi hermano.",
              "english": "This book is for my brother. (Recipient → PARA)",
              "audio": "Este libro es para mi hermano."
            },
            {
              "spanish": "Necesito el informe para el viernes.",
              "english": "I need the report by/for Friday. (Deadline → PARA)",
              "audio": "Necesito el informe para el viernes."
            }
          ]
        },
        {
          "id": "u5-l54-t2",
          "title": "The Core Uses of POR (Cause, Exchange, Duration, Means)",
          "summary": "Use POR for the reason/cause behind an action, duration of time, exchange/cost, by means of transportation/communication, and through/along.",
          "table": {
            "headers": [
              "Category of POR",
              "Explanation",
              "Example Sentence"
            ],
            "rows": [
              [
                "Cause / Reason (Because of)",
                "Due to / motivated by",
                "Llegué tarde por el tráfico (Because of traffic)"
              ],
              [
                "Duration of Time",
                "For how long",
                "Estudié por tres horas (I studied for 3 hours)"
              ],
              [
                "Exchange / Cost / Price",
                "In exchange for",
                "Pagué 20 euros por el libro (I paid €20 for the book)"
              ],
              [
                "Means of Transport / Comm",
                "By / via",
                "Hablamos por teléfono / Viajo por tren"
              ],
              [
                "Through / Along / By",
                "Physical passage",
                "Caminamos por el parque (We walk through the park)"
              ],
              [
                "On Behalf Of",
                "In place of someone",
                "Trabajo por mi compañero hoy (Covering for him)"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Gracias por tu ayuda.",
              "english": "Thank you for your help. (Cause/Gratitude → POR)",
              "audio": "Gracias por tu ayuda."
            },
            {
              "spanish": "Compré la camiseta por quince euros.",
              "english": "I bought the T-shirt for 15 euros. (Exchange/Price → POR)",
              "audio": "Compré la camiseta por quince euros."
            },
            {
              "spanish": "Paseamos por la playa.",
              "english": "We strolled along the beach. (Through/Along → POR)",
              "audio": "Paseamos por la playa."
            }
          ],
          "proTip": "A great mental check: PARA is an arrow pointing forward (→ goal, destination, recipient, deadline). POR is a circle or looking backward (reason, cause, duration, path)."
        }
      ],
      "vocabulary": [
        {
          "id": "v5401",
          "spanish": "para",
          "english": "for / in order to (goal, recipient, deadline)",
          "category": "Prepositions",
          "exampleSentence": {
            "spanish": "Es para ti.",
            "english": "It is for you."
          }
        },
        {
          "id": "v5402",
          "spanish": "por",
          "english": "for / because of / through / by (cause, duration, price)",
          "category": "Prepositions",
          "exampleSentence": {
            "spanish": "Gracias por todo.",
            "english": "Thanks for everything."
          }
        },
        {
          "id": "v5403",
          "spanish": "por favor",
          "english": "please",
          "category": "Idioms",
          "exampleSentence": {
            "spanish": "Un café, por favor.",
            "english": "A coffee, please."
          }
        },
        {
          "id": "v5404",
          "spanish": "por ejemplo",
          "english": "for example",
          "category": "Idioms",
          "exampleSentence": {
            "spanish": "Por ejemplo, en España comen tarde.",
            "english": "For example, in Spain they eat late."
          }
        },
        {
          "id": "v5405",
          "spanish": "por fin",
          "english": "finally / at last",
          "category": "Idioms",
          "exampleSentence": {
            "spanish": "¡Por fin terminamos!",
            "english": "Finally we finished!"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5401",
          "front": "PARA Mnemonic",
          "back": "P.E.R.F.E.C.T.\n(Purpose, Exact deadline, Recipient, Future goal, Employment, Comparison, Toward destination)",
          "category": "Por vs Para"
        },
        {
          "id": "f5402",
          "front": "Key uses of POR",
          "back": "Cause/reason, Duration, Price/exchange, Means (by phone/train), Through/along",
          "category": "Por vs Para"
        },
        {
          "id": "f5403",
          "front": "Thanks FOR your help",
          "back": "Gracias POR tu ayuda (Gratitude/cause takes POR)",
          "category": "Por vs Para"
        }
      ],
      "exercises": [
        {
          "id": "u5-l54-ex1",
          "type": "multiple-choice",
          "prompt": "Which preposition completes: \"This gift is _______ (for) my mother\"?",
          "explanation": "Recipient of a gift is a forward destination (P.E.R.F.E.C.T. Recipient), which requires PARA: \"para mi madre\".",
          "options": [
            {
              "id": "opt1",
              "text": "para mi madre",
              "subtext": "Recipient → PARA",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "por mi madre",
              "subtext": "Means \"on behalf of my mother\" or \"because of my mother\"",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "de mi madre",
              "subtext": "Means \"from my mother\"",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "a mi madre",
              "subtext": "Incorrect preposition for a gift",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l54-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete with \"por\" or \"para\": \"I studied Spanish _______ three hours yesterday.\"",
          "sentenceBefore": "Ayer estudié español",
          "sentenceAfter": "tres horas.",
          "correctAnswers": [
            "por",
            "Por"
          ],
          "wordBank": [
            "por",
            "para",
            "en",
            "de"
          ],
          "hint": "Duration of time.",
          "explanation": "Duration of time strictly requires \"por\": \"por tres horas\"."
        },
        {
          "id": "u5-l54-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"We walked through the park\"",
          "targetEnglish": "We walked through the park",
          "correctTokens": [
            "Nosotros",
            "caminamos",
            "por",
            "el",
            "parque"
          ],
          "availableTokens": [
            "Nosotros",
            "caminamos",
            "por",
            "el",
            "parque",
            "para",
            "a",
            "en"
          ],
          "explanation": "\"Nosotros caminamos por el parque.\" (Physical passage through a space uses POR)."
        },
        {
          "id": "u5-l54-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Tengo que terminar el proyecto por el próximo lunes.",
          "errorWord": "por",
          "options": [
            "para",
            "en",
            "a",
            "de"
          ],
          "correctOption": "para",
          "explanation": "Deadlines and specific due dates (el próximo lunes) strictly require PARA: \"para el próximo lunes\"."
        }
      ]
    },
    {
      "id": "u5-l55",
      "slug": "irregular-comparatives",
      "unitId": 5,
      "order": 55,
      "title": "55. Irregular Comparatives",
      "subtitle": "Mejor (better), Peor (worse), Mayor (older), Menor (younger)",
      "estimatedMinutes": 8,
      "iconName": "TrendingUp",
      "summary": "Learn the 4 core irregular comparatives that never take \"más\" or \"menos\": mejor (better), peor (worse), mayor (older), and menor (younger).",
      "theory": [
        {
          "id": "u5-l55-t1",
          "title": "The 4 Irregular Comparative Forms",
          "summary": "These words already contain the meaning of \"more\" within themselves—never place \"más\" before them.",
          "table": {
            "headers": [
              "Adjective",
              "Irregular Comparative (Singular)",
              "Plural Form",
              "English Meaning"
            ],
            "rows": [
              [
                "bueno (good)",
                "mejor",
                "mejores",
                "better"
              ],
              [
                "malo (bad)",
                "peor",
                "peores",
                "worse"
              ],
              [
                "grande / viejo (old/age)",
                "mayor",
                "mayores",
                "older / greater"
              ],
              [
                "pequeño / joven (young/age)",
                "menor",
                "menores",
                "younger / lesser"
              ]
            ]
          },
          "content": [
            "**Crucial Ban on Double Comparatives**: Saying *\"más mejor\"* or *\"más peor\"* is as wrong in Spanish as saying \"more better\" or \"more worse\" in English!",
            "Notice that these comparative adjectives only change for **number** (*mejor / mejores*, *mayor / mayores*), NOT for gender (*mi hermano mayor*, *mi hermana mayor*)."
          ],
          "examples": [
            {
              "spanish": "Este libro es mejor que la película.",
              "english": "This book is better than the movie.",
              "audio": "Este libro es mejor que la película."
            },
            {
              "spanish": "Mi hermano es mayor que yo.",
              "english": "My brother is older than me.",
              "audio": "Mi hermano es mayor que yo."
            },
            {
              "spanish": "Mis notas son peores este semestre.",
              "english": "My grades are worse this semester.",
              "audio": "Mis notas son peores este semestre."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5501",
          "spanish": "mejor / mejores",
          "english": "better",
          "category": "Comparatives",
          "exampleSentence": {
            "spanish": "Tu idea es mucho mejor.",
            "english": "Your idea is much better."
          }
        },
        {
          "id": "v5502",
          "spanish": "peor / peores",
          "english": "worse",
          "category": "Comparatives",
          "exampleSentence": {
            "spanish": "El tráfico está peor hoy.",
            "english": "The traffic is worse today."
          }
        },
        {
          "id": "v5503",
          "spanish": "mayor / mayores",
          "english": "older / senior",
          "category": "Comparatives",
          "exampleSentence": {
            "spanish": "Tengo dos hermanas mayores.",
            "english": "I have two older sisters."
          }
        },
        {
          "id": "v5504",
          "spanish": "menor / menores",
          "english": "younger / junior",
          "category": "Comparatives",
          "exampleSentence": {
            "spanish": "Mi hermano menor tiene diez años.",
            "english": "My younger brother is ten years old."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5501",
          "front": "Can you say \"más mejor\" in Spanish?",
          "back": "Never! \"Mejor\" already means \"better\". Saying \"más mejor\" is a major error.",
          "category": "Comparatives"
        },
        {
          "id": "f5502",
          "front": "older sister vs younger brother",
          "back": "hermana mayor vs hermano menor",
          "category": "Comparatives"
        }
      ],
      "exercises": [
        {
          "id": "u5-l55-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"My sister is older than me\" in Spanish?",
          "explanation": "\"Older\" for people's age is \"mayor\": \"Mi hermana es mayor que yo\".",
          "options": [
            {
              "id": "opt1",
              "text": "Mi hermana es mayor que yo.",
              "subtext": "Correct irregular comparative for age",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Mi hermana es más vieja que yo.",
              "subtext": "Sounds blunt / rude in Spanish",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Mi hermana es más mayor que yo.",
              "subtext": "Incorrect double comparative",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Mi hermana es mejor que yo.",
              "subtext": "Means \"better than me\"",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l55-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the comparative for \"better\": \"This restaurant is _______ than the other one.\"",
          "sentenceBefore": "Este restaurante es",
          "sentenceAfter": "que el otro.",
          "correctAnswers": [
            "mejor",
            "Mejor"
          ],
          "wordBank": [
            "mejor",
            "más bueno",
            "más mejor",
            "bueno"
          ],
          "hint": "Comparative of bueno.",
          "explanation": "The comparative of bueno is \"mejor\" (never \"más bueno\")."
        },
        {
          "id": "u5-l55-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"These results are worse than last year\"",
          "targetEnglish": "These results are worse than last year",
          "correctTokens": [
            "Estos",
            "resultados",
            "son",
            "peores",
            "que",
            "el",
            "año",
            "pasado"
          ],
          "availableTokens": [
            "Estos",
            "resultados",
            "son",
            "peores",
            "que",
            "el",
            "año",
            "pasado",
            "más",
            "peor"
          ],
          "explanation": "\"Estos resultados son peores que el año pasado.\" (Resultados is plural -> peores)."
        }
      ]
    },
    {
      "id": "u5-l56",
      "slug": "demonstratives",
      "unitId": 5,
      "order": 56,
      "title": "56. Demonstratives",
      "subtitle": "This, That & That Over There (este, ese, aquel & neuter esto, eso)",
      "estimatedMinutes": 10,
      "iconName": "Navigation",
      "summary": "Spanish has three degrees of spatial distance: this (este - near the speaker), that (ese - near the listener), and that over there (aquel - far from both). Learn the full system including the neuter pronouns esto, eso, and aquello.",
      "theory": [
        {
          "id": "u5-l56-t1",
          "title": "The Three Zones of Distance",
          "summary": "Spanish divides space into 3 proximity zones: close (este), intermediate (ese), and far away (aquel).",
          "table": {
            "headers": [
              "Zone / Distance",
              "Masc Sing",
              "Fem Sing",
              "Masc Plur",
              "Fem Plur",
              "Neuter Pronoun"
            ],
            "rows": [
              [
                "Zone 1: Here (near me) - THIS / THESE",
                "este",
                "esta",
                "estos (not estes!)",
                "estas",
                "esto (unknown item)"
              ],
              [
                "Zone 2: There (near you) - THAT / THOSE",
                "ese",
                "esa",
                "esos (not eses!)",
                "esas",
                "eso (unknown item)"
              ],
              [
                "Zone 3: Over there (far from both) - THAT FAR",
                "aquel",
                "aquella",
                "aquellos",
                "aquellas",
                "aquello (unknown item)"
              ]
            ]
          },
          "content": [
            "A famous rhyme to remember: *\"This and these both have T's, that and those don't!\"* (*Este / Esta* have the letter \"t\", while *Ese / Esa* do not).",
            "**Neuter Pronouns (esto, eso, aquello)**: Use them when referring to an abstract idea, a general statement, or an unidentified object whose gender is not yet known (*\"¿Qué es esto?\"* = What is this?)."
          ],
          "examples": [
            {
              "spanish": "Este libro aquí es mío.",
              "english": "This book here is mine. (Zone 1)",
              "audio": "Este libro aquí es mío."
            },
            {
              "spanish": "Esa camisa que llevas es bonita.",
              "english": "That shirt you are wearing is pretty. (Zone 2)",
              "audio": "Esa camisa que llevas es bonita."
            },
            {
              "spanish": "Aquella montaña a lo lejos es muy alta.",
              "english": "That mountain in the distance is very tall. (Zone 3)",
              "audio": "Aquella montaña a lo lejos es muy alta."
            },
            {
              "spanish": "¿Qué es esto? — No sé qué es eso.",
              "english": "What is this? — I don't know what that is. (Neuter pronouns)",
              "audio": "¿Qué es esto?"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5601",
          "spanish": "este / esta",
          "english": "this",
          "category": "Demonstratives",
          "exampleSentence": {
            "spanish": "Esta casa es nueva.",
            "english": "This house is new."
          }
        },
        {
          "id": "v5602",
          "spanish": "estos / estas",
          "english": "these",
          "category": "Demonstratives",
          "exampleSentence": {
            "spanish": "Estos zapatos son cómodos.",
            "english": "These shoes are comfortable."
          }
        },
        {
          "id": "v5603",
          "spanish": "ese / esa",
          "english": "that",
          "category": "Demonstratives",
          "exampleSentence": {
            "spanish": "Ese coche es rápido.",
            "english": "That car is fast."
          }
        },
        {
          "id": "v5604",
          "spanish": "esos / esas",
          "english": "those",
          "category": "Demonstratives",
          "exampleSentence": {
            "spanish": "Esas flores huelen bien.",
            "english": "Those flowers smell nice."
          }
        },
        {
          "id": "v5605",
          "spanish": "aquel / aquella",
          "english": "that (far away)",
          "category": "Demonstratives",
          "exampleSentence": {
            "spanish": "Aquella colina.",
            "english": "That hill over there."
          }
        },
        {
          "id": "v5606",
          "spanish": "esto / eso",
          "english": "this / that (neuter concept)",
          "category": "Demonstratives",
          "exampleSentence": {
            "spanish": "Esto es importante.",
            "english": "This is important."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5601",
          "front": "Mnemonic for Este vs Ese",
          "back": "This and these have T's (este, esta, estos, estas)\nThat and those no T goes (ese, esa, esos, esas)",
          "category": "Demonstratives"
        },
        {
          "id": "f5602",
          "front": "Plural of este and ese",
          "back": "estos & esos (Never \"estes\" or \"eses\"!)",
          "category": "Demonstratives"
        },
        {
          "id": "f5603",
          "front": "What is this? (Spanish)",
          "back": "¿Qué es esto? (Neuter pronoun esto)",
          "category": "Demonstratives"
        }
      ],
      "exercises": [
        {
          "id": "u5-l56-ex1",
          "type": "multiple-choice",
          "prompt": "What is the correct masculine plural form for \"these books\"?",
          "explanation": "The plural of \"este\" is \"estos\" (never \"estes\"): \"estos libros\".",
          "options": [
            {
              "id": "opt1",
              "text": "estos libros",
              "subtext": "Correct masculine plural",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "estes libros",
              "subtext": "Incorrect: \"estes\" does not exist in Spanish",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "esos libros",
              "subtext": "Means \"those books\"",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "estos libro",
              "subtext": "Number agreement mismatch",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l56-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the neuter pronoun for an unknown object: \"What is _______ (this)?\"",
          "sentenceBefore": "¿Qué es",
          "sentenceAfter": "en la caja?",
          "correctAnswers": [
            "esto",
            "Esto"
          ],
          "wordBank": [
            "esto",
            "este",
            "esta",
            "estos"
          ],
          "hint": "Neuter pronoun for unidentified item.",
          "explanation": "When asking what an unidentified object is, use the neuter \"esto\": \"¿Qué es esto?\"."
        },
        {
          "id": "u5-l56-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Those mountains over there (far away) are very high\"",
          "targetEnglish": "Those mountains over there are very high",
          "correctTokens": [
            "Aquellas",
            "montañas",
            "son",
            "muy",
            "altas"
          ],
          "availableTokens": [
            "Aquellas",
            "montañas",
            "son",
            "muy",
            "altas",
            "Esas",
            "Estos",
            "están"
          ],
          "explanation": "\"Aquellas montañas son muy altas.\" (Far away feminine plural -> Aquellas)."
        },
        {
          "id": "u5-l56-ex4",
          "type": "matching-pairs",
          "prompt": "Match each demonstrative to its English meaning:",
          "explanation": "Review the 3 distance tiers.",
          "pairs": [
            {
              "id": "p1",
              "left": "esta casa",
              "right": "this house (here)"
            },
            {
              "id": "p2",
              "left": "esa casa",
              "right": "that house (there)"
            },
            {
              "id": "p3",
              "left": "aquella casa",
              "right": "that house over there (far)"
            },
            {
              "id": "p4",
              "left": "estos libros",
              "right": "these books"
            }
          ]
        }
      ]
    },
    {
      "id": "u5-l57",
      "slug": "time-with-hacer",
      "unitId": 5,
      "order": 57,
      "title": "57. Time with \"Hacer\"",
      "subtitle": "Expressing \"How long have you been doing something?\" (Hace... que)",
      "estimatedMinutes": 9,
      "iconName": "History",
      "summary": "Learn how to express actions that started in the past and continue into the present using the famous construction: \"Hace + [time] + que + [present tense verb]\".",
      "theory": [
        {
          "id": "u5-l57-t1",
          "title": "The Ongoing Duration Formula",
          "summary": "Spanish uses \"Hace + time period + que + present tense\" where English uses \"have been doing for...\".",
          "formula": {
            "pattern": "Hace + [Cantidad de tiempo] + que + [Verbo en presente] | Verbo en presente + desde hace + [Tiempo]",
            "example": "Hace dos años que estudio español (I have been studying Spanish for 2 years)"
          },
          "table": {
            "headers": [
              "Question / Statement Pattern",
              "Spanish Example",
              "English Equivalent"
            ],
            "rows": [
              [
                "Asking \"How long?\"",
                "¿Cuánto tiempo hace que vives aquí?",
                "How long have you been living here?"
              ],
              [
                "Standard Answer (Hace... que)",
                "Hace cinco años que vivo aquí.",
                "I have been living here for 5 years."
              ],
              [
                "Alternative (desde hace)",
                "Vivo aquí desde hace cinco años.",
                "I have lived here for 5 years."
              ],
              [
                "Ago (Past completed)",
                "Llegué hace dos horas.",
                "I arrived two hours ago."
              ]
            ]
          },
          "examples": [
            {
              "spanish": "¿Cuánto tiempo hace que estudias español?",
              "english": "How long have you been studying Spanish?",
              "audio": "¿Cuánto tiempo hace que estudias español?"
            },
            {
              "spanish": "Hace tres meses que trabajo en esta empresa.",
              "english": "I have been working at this company for three months.",
              "audio": "Hace tres meses que trabajo en esta empresa."
            },
            {
              "spanish": "Nos conocemos desde hace diez años.",
              "english": "We have known each other for ten years.",
              "audio": "Nos conocemos desde hace diez años."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5701",
          "spanish": "hace... que",
          "english": "have been doing (for X time)",
          "category": "Time with Hacer",
          "exampleSentence": {
            "spanish": "Hace un año que vivo en Madrid.",
            "english": "I have been living in Madrid for a year."
          }
        },
        {
          "id": "v5702",
          "spanish": "desde hace",
          "english": "since / for (time duration)",
          "category": "Time with Hacer",
          "exampleSentence": {
            "spanish": "Estudio aquí desde hace dos meses.",
            "english": "I study here for two months."
          }
        },
        {
          "id": "v5703",
          "spanish": "¿cuánto tiempo hace que...?",
          "english": "how long have you been...?",
          "category": "Time with Hacer",
          "exampleSentence": {
            "spanish": "¿Cuánto tiempo hace que esperas?",
            "english": "How long have you been waiting?"
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5701",
          "front": "How long have you been studying?",
          "back": "¿Cuánto tiempo hace que estudias?",
          "category": "Time with Hacer"
        },
        {
          "id": "f5702",
          "front": "I have been living here for 3 years",
          "back": "Hace tres años que vivo aquí\n(OR: Vivo aquí desde hace tres años)",
          "category": "Time with Hacer"
        },
        {
          "id": "f5703",
          "front": "2 hours ago",
          "back": "Hace dos horas (hace + time at the end = ago)",
          "category": "Time with Hacer"
        }
      ],
      "exercises": [
        {
          "id": "u5-l57-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"I have been working here for six months\"?",
          "explanation": "\"Hace seis meses que trabajo aquí\" expresses ongoing duration starting in the past.",
          "options": [
            {
              "id": "opt1",
              "text": "Hace seis meses que trabajo aquí.",
              "subtext": "Correct duration formula",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Tengo seis meses que trabajo aquí.",
              "subtext": "Incorrect verb (must use hacer)",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Estoy seis meses trabajando aquí.",
              "subtext": "Incorrect idiom",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Hago seis meses de trabajar aquí.",
              "subtext": "Incorrect phrasing",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l57-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete the question: \"How long have you been living in this city?\"",
          "sentenceBefore": "¿Cuánto tiempo",
          "sentenceAfter": "que vives en esta ciudad?",
          "correctAnswers": [
            "hace",
            "Hace"
          ],
          "wordBank": [
            "hace",
            "tiene",
            "es",
            "está"
          ],
          "hint": "Verb used in duration formula.",
          "explanation": "The question uses \"hace\": \"¿Cuánto tiempo hace que vives...?\"."
        },
        {
          "id": "u5-l57-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"I have been learning Spanish for one year\"",
          "targetEnglish": "I have been learning Spanish for one year",
          "correctTokens": [
            "Hace",
            "un",
            "año",
            "que",
            "aprendo",
            "español"
          ],
          "availableTokens": [
            "Hace",
            "un",
            "año",
            "que",
            "aprendo",
            "español",
            "hago",
            "tengo",
            "de"
          ],
          "explanation": "\"Hace un año que aprendo español.\""
        }
      ]
    },
    {
      "id": "u5-l58",
      "slug": "possessive-pronouns",
      "unitId": 5,
      "order": 58,
      "title": "58. Possessive Pronouns",
      "subtitle": "Mine, Yours, His, Hers, Ours (el mío, el tuyo, el suyo, el nuestro)",
      "estimatedMinutes": 9,
      "iconName": "UserCheck",
      "summary": "Possessive pronouns replace the noun completely (e.g. \"My car is red, but yours is blue\" -> \"El mío es rojo, pero el tuyo es azul\"). Learn the long possessive forms and article omission rules after the verb \"ser\".",
      "theory": [
        {
          "id": "u5-l58-t1",
          "title": "The Possessive Pronouns Chart",
          "summary": "Possessive pronouns take the definite article (el/la/los/las) and agree in gender and number with the possessed item.",
          "table": {
            "headers": [
              "Owner",
              "Masc Sing (mine/yours/etc)",
              "Fem Sing",
              "Masc Plur",
              "Fem Plur"
            ],
            "rows": [
              [
                "yo (mine)",
                "el mío",
                "la mía",
                "los míos",
                "las mías"
              ],
              [
                "tú (yours - inf)",
                "el tuyo",
                "la tuya",
                "los tuyos",
                "las tuyas"
              ],
              [
                "él/ella/usted (his/hers/yours)",
                "el suyo",
                "la suya",
                "los suyos",
                "las suyas"
              ],
              [
                "nosotros (ours)",
                "el nuestro",
                "la nuestra",
                "los nuestros",
                "las nuestras"
              ],
              [
                "vosotros (yours - Spain)",
                "el vuestro",
                "la vuestra",
                "los vuestros",
                "las vuestras"
              ],
              [
                "ellos/ellas/uds (theirs/yours)",
                "el suyo",
                "la suya",
                "los suyos",
                "las suyas"
              ]
            ]
          },
          "content": [
            "**Rule after SER**: When a possessive follows the verb **SER**, the definite article is typically dropped (*\"Este libro es mío\"*, NOT *\"Este libro es el mío\"*), unless making an emphatic identification among a group."
          ],
          "examples": [
            {
              "spanish": "Tu coche es nuevo, pero el mío es viejo.",
              "english": "Your car is new, but mine is old. (el mío replaces el coche mío)",
              "audio": "Tu coche es nuevo, pero el mío es viejo."
            },
            {
              "spanish": "Nuestra casa es pequeña; la suya es grande.",
              "english": "Our house is small; theirs/his/hers is big.",
              "audio": "Nuestra casa es pequeña; la suya es grande."
            },
            {
              "spanish": "Esta chaqueta es mía.",
              "english": "This jacket is mine. (After SER: article is dropped)",
              "audio": "Esta chaqueta es mía."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v5801",
          "spanish": "el mío / la mía",
          "english": "mine (singular)",
          "category": "Possessive Pronouns",
          "exampleSentence": {
            "spanish": "El mío está aquí.",
            "english": "Mine is here."
          }
        },
        {
          "id": "v5802",
          "spanish": "el tuyo / la tuya",
          "english": "yours (informal singular)",
          "category": "Possessive Pronouns",
          "exampleSentence": {
            "spanish": "¿Dónde está el tuyo?",
            "english": "Where is yours?"
          }
        },
        {
          "id": "v5803",
          "spanish": "el suyo / la suya",
          "english": "his / hers / theirs / yours formal",
          "category": "Possessive Pronouns",
          "exampleSentence": {
            "spanish": "La suya es más bonita.",
            "english": "Hers/theirs is prettier."
          }
        },
        {
          "id": "v5804",
          "spanish": "el nuestro / la nuestra",
          "english": "ours",
          "category": "Possessive Pronouns",
          "exampleSentence": {
            "spanish": "El nuestro es más grande.",
            "english": "Ours is bigger."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5801",
          "front": "Possessive Adjective vs Pronoun",
          "back": "Adjective: mi libro (my book)\nPronoun: el mío (mine)",
          "category": "Possessive Pronouns"
        },
        {
          "id": "f5802",
          "front": "Article rule after SER",
          "back": "Drop the article: \"Es mío / Es tuya\" (not \"Es el mío\")",
          "category": "Possessive Pronouns"
        }
      ],
      "exercises": [
        {
          "id": "u5-l58-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"My house is white and yours (informal) is blue\"?",
          "explanation": "\"House\" is feminine, so \"yours\" is \"la tuya\": \"la tuya es azul\".",
          "options": [
            {
              "id": "opt1",
              "text": "Mi casa es blanca y la tuya es azul.",
              "subtext": "Correct feminine agreement with casa",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Mi casa es blanca y el tuyo es azul.",
              "subtext": "Masculine mismatch with casa",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Mi casa es blanca y tu es azul.",
              "subtext": "Incorrect: \"tu\" is an adjective requiring a noun",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Mi casa es blanca y de ti es azul.",
              "subtext": "Incorrect phrasing",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l58-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete: \"This pen is not mine (after SER):\"",
          "sentenceBefore": "Este bolígrafo no es",
          "sentenceAfter": ".",
          "correctAnswers": [
            "mío",
            "Mío"
          ],
          "wordBank": [
            "mío",
            "el mío",
            "mi",
            "mía"
          ],
          "hint": "After \"es\", drop the article; bolígrafo is masculine.",
          "explanation": "After \"es\", the article is dropped: \"no es mío\"."
        },
        {
          "id": "u5-l58-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Our car is faster than theirs\"",
          "targetEnglish": "Our car is faster than theirs",
          "correctTokens": [
            "Nuestro",
            "coche",
            "es",
            "más",
            "rápido",
            "que",
            "el",
            "suyo"
          ],
          "availableTokens": [
            "Nuestro",
            "coche",
            "es",
            "más",
            "rápido",
            "que",
            "el",
            "suyo",
            "la",
            "suya"
          ],
          "explanation": "\"Nuestro coche es más rápido que el suyo.\" (\"El suyo\" matches masculine singular coche)."
        }
      ]
    },
    {
      "id": "u5-l59",
      "slug": "reflexive-verbs-1",
      "unitId": 5,
      "order": 59,
      "title": "59. Reflexive Verbs I",
      "subtitle": "Daily Routines & Reflexive Pronouns (me, te, se, nos, os, se)",
      "estimatedMinutes": 10,
      "iconName": "User",
      "summary": "A verb is reflexive when the subject performs and receives the action upon themselves. Master the 6 reflexive pronouns and essential daily routine verbs like levantarse, lavarse, ducharse, and acostarse.",
      "theory": [
        {
          "id": "u5-l59-t1",
          "title": "Reflexive Pronouns & Conjugation",
          "summary": "Conjugate the verb normally and place the reflexive pronoun in front.",
          "table": {
            "headers": [
              "Pronoun",
              "Reflexive Pronoun",
              "LEVANTARSE (to get up)",
              "English Translation"
            ],
            "rows": [
              [
                "yo",
                "me",
                "me levanto",
                "I get up"
              ],
              [
                "tú",
                "te",
                "te levantas",
                "you get up (informal)"
              ],
              [
                "él / ella / usted",
                "se",
                "se levanta",
                "he / she gets up / you get up"
              ],
              [
                "nosotros / nosotras",
                "nos",
                "nos levantamos",
                "we get up"
              ],
              [
                "vosotros / vosotras",
                "os",
                "os levantáis",
                "you all get up (Spain)"
              ],
              [
                "ellos / ellas / ustedes",
                "se",
                "se levantan",
                "they / you all get up"
              ]
            ]
          },
          "content": [
            "Notice the reflexive pronouns: **me, te, se, nos, os, se**. Both the 3rd person singular and plural share the pronoun **se**.",
            "**Body Parts with Reflexives**: Spanish uses the definite article with body parts and clothing (*\"Me lavo **las** manos\"*), NEVER possessive adjectives (*\"Me lavo mis manos\"* is redundant in Spanish)."
          ],
          "examples": [
            {
              "spanish": "Yo me despierto a las siete de la mañana.",
              "english": "I wake up at 7:00 AM. (despertarse: e:ie)",
              "audio": "Yo me despierto a las siete de la mañana."
            },
            {
              "spanish": "Él se ducha con agua caliente.",
              "english": "He showers with hot water.",
              "audio": "Él se ducha con agua caliente."
            },
            {
              "spanish": "Nosotros nos lavamos las manos antes de comer.",
              "english": "We wash our hands before eating. (Note \"las manos\", not \"nuestras manos\")",
              "audio": "Nosotros nos lavamos las manos antes de comer."
            }
          ],
          "watchOut": "Never say \"Me lavo mis dientes\" or \"Me pongo mi abrigo\"! Always use the definite article: \"Me lavo los dientes\", \"Me pongo el abrigo\"."
        }
      ],
      "vocabulary": [
        {
          "id": "v5901",
          "spanish": "despertarse (e:ie)",
          "english": "to wake up",
          "category": "Reflexive Verbs",
          "exampleSentence": {
            "spanish": "Me despierto temprano.",
            "english": "I wake up early."
          }
        },
        {
          "id": "v5902",
          "spanish": "levantarse",
          "english": "to get out of bed / stand up",
          "category": "Reflexive Verbs",
          "exampleSentence": {
            "spanish": "Me levanto a las ocho.",
            "english": "I get up at eight."
          }
        },
        {
          "id": "v5903",
          "spanish": "ducharse",
          "english": "to take a shower",
          "category": "Reflexive Verbs",
          "exampleSentence": {
            "spanish": "Me ducho todos los días.",
            "english": "I shower every day."
          }
        },
        {
          "id": "v5904",
          "spanish": "lavarse",
          "english": "to wash oneself",
          "category": "Reflexive Verbs",
          "exampleSentence": {
            "spanish": "Lávate las manos.",
            "english": "Wash your hands."
          }
        },
        {
          "id": "v5905",
          "spanish": "vestirse (e:i)",
          "english": "to get dressed",
          "category": "Reflexive Verbs",
          "exampleSentence": {
            "spanish": "Ella se viste con ropa elegante.",
            "english": "She dresses in elegant clothes."
          }
        },
        {
          "id": "v5906",
          "spanish": "acostarse (o:ue)",
          "english": "to go to bed",
          "category": "Reflexive Verbs",
          "exampleSentence": {
            "spanish": "Me acuesto a las once.",
            "english": "I go to bed at 11."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f5901",
          "front": "Reflexive Pronouns chart",
          "back": "me, te, se, nos, os, se",
          "category": "Reflexive Verbs"
        },
        {
          "id": "f5902",
          "front": "Body parts with reflexive verbs rule",
          "back": "Use definite articles (el/la/los/las), never possessives:\nMe lavo las manos (not \"mis manos\")",
          "category": "Reflexive Verbs"
        },
        {
          "id": "f5903",
          "front": "despertarse vs levantarse",
          "back": "despertarse = to wake up | levantarse = to get out of bed",
          "category": "Reflexive Verbs"
        }
      ],
      "exercises": [
        {
          "id": "u5-l59-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"I wash my hands\" correctly in natural Spanish?",
          "explanation": "Reflexive verbs use definite articles with body parts: \"Me lavo las manos\" (not \"mis manos\").",
          "options": [
            {
              "id": "opt1",
              "text": "Me lavo las manos.",
              "subtext": "Correct reflexive with definite article",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Me lavo mis manos.",
              "subtext": "Incorrect: \"mis\" is redundant with reflexives",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Yo lavo las manos.",
              "subtext": "Missing reflexive pronoun \"me\"",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Lavo a mis manos.",
              "subtext": "Incorrect syntax",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l59-ex2",
          "type": "fill-in-blank",
          "prompt": "Fill in the correct reflexive form of \"acostarse\" (o:ue) for \"nosotros\":",
          "sentenceBefore": "Los fines de semana nosotros",
          "sentenceAfter": "tarde.",
          "correctAnswers": [
            "nos acostamos",
            "Nos acostamos"
          ],
          "wordBank": [
            "nos acostamos",
            "se acuestan",
            "me acuesto",
            "nos acuestamos"
          ],
          "hint": "Nosotros keeps regular stem \"acost-\".",
          "explanation": "Nosotros does not stem-change: \"nos acostamos\"."
        },
        {
          "id": "u5-l59-ex3",
          "type": "sentence-builder",
          "prompt": "Translate into Spanish: \"Carlos wakes up at seven in the morning\"",
          "targetEnglish": "Carlos wakes up at seven in the morning",
          "correctTokens": [
            "Carlos",
            "se",
            "despierta",
            "a",
            "las",
            "siete",
            "de",
            "la",
            "mañana"
          ],
          "availableTokens": [
            "Carlos",
            "se",
            "despierta",
            "a",
            "las",
            "siete",
            "de",
            "la",
            "mañana",
            "despierto",
            "le"
          ],
          "explanation": "\"Carlos se despierta a las siete de la mañana.\" (Despertarse: e:ie -> se despierta)."
        },
        {
          "id": "u5-l59-ex4",
          "type": "error-identification",
          "prompt": "Find the mistake in this sentence:",
          "incorrectSentence": "Ella se cepilla sus dientes tres veces al día.",
          "errorWord": "sus",
          "options": [
            "los",
            "las",
            "el",
            "la"
          ],
          "correctOption": "los",
          "explanation": "With reflexive actions on body parts, use the definite article: \"los dientes\", never \"sus dientes\"."
        }
      ]
    },
    {
      "id": "u5-l60",
      "slug": "reflexive-verbs-2",
      "unitId": 5,
      "order": 60,
      "title": "60. Reflexive Verbs II",
      "subtitle": "Verbs That Shift Meaning When Used Reflexively",
      "estimatedMinutes": 9,
      "iconName": "RefreshCw",
      "summary": "Discover how adding a reflexive pronoun completely alters the meaning of basic verbs: dormir (to sleep) vs dormirse (to fall asleep), ir (to go) vs irse (to leave / go away), and poner (to put) vs ponerse (to put on / become).",
      "theory": [
        {
          "id": "u5-l60-t1",
          "title": "Non-Reflexive vs. Reflexive Meaning Shifts",
          "summary": "Making a verb reflexive often adds an aspect of sudden change of state or departure.",
          "table": {
            "headers": [
              "Non-Reflexive Verb",
              "English",
              "Reflexive Form",
              "English Meaning"
            ],
            "rows": [
              [
                "dormir (o:ue)",
                "to sleep",
                "dormirse (o:ue)",
                "to fall asleep"
              ],
              [
                "ir",
                "to go",
                "irse",
                "to leave / go away / take off"
              ],
              [
                "poner",
                "to put / place",
                "ponerse",
                "to put on (clothes) / to become (emotion)"
              ],
              [
                "probar (o:ue)",
                "to try / taste (food)",
                "probarse (o:ue)",
                "to try on (clothes)"
              ],
              [
                "llevar",
                "to carry / take",
                "llevarse",
                "to take away / get along (con)"
              ],
              [
                "llamar",
                "to call",
                "llamarse",
                "to be named / called"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Duermo ocho horas. (dormir = sleep)",
              "english": "I sleep eight hours.",
              "audio": "Duermo ocho horas."
            },
            {
              "spanish": "Me duermo en el sofá. (dormirse = fall asleep)",
              "english": "I fall asleep on the sofa.",
              "audio": "Me duermo en el sofá."
            },
            {
              "spanish": "Voy a la escuela. vs ¡Me voy! (irse = I'm leaving)",
              "english": "I go to school. vs I'm taking off / leaving!",
              "audio": "¡Me voy!"
            },
            {
              "spanish": "Me pongo una chaqueta porque hace frío.",
              "english": "I put on a jacket because it's cold. (ponerse ropa)",
              "audio": "Me pongo una chaqueta."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "id": "v6001",
          "spanish": "dormirse",
          "english": "to fall asleep",
          "category": "Reflexive Shifts",
          "exampleSentence": {
            "spanish": "El niño se durmió en el coche.",
            "english": "The child fell asleep in the car."
          }
        },
        {
          "id": "v6002",
          "spanish": "irse",
          "english": "to leave / depart / take off",
          "category": "Reflexive Shifts",
          "exampleSentence": {
            "spanish": "Ya es tarde, me voy a casa.",
            "english": "It's late, I'm leaving for home."
          }
        },
        {
          "id": "v6003",
          "spanish": "ponerse",
          "english": "to put on (clothes) / to become",
          "category": "Reflexive Shifts",
          "exampleSentence": {
            "spanish": "Se pone feliz cuando me ve.",
            "english": "She becomes happy when she sees me."
          }
        },
        {
          "id": "v6004",
          "spanish": "probarse",
          "english": "to try on (clothes)",
          "category": "Reflexive Shifts",
          "exampleSentence": {
            "spanish": "Voy a probarme estos pantalones.",
            "english": "I am going to try on these pants."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6001",
          "front": "dormir vs dormirse",
          "back": "dormir = to sleep | dormirse = to fall asleep",
          "category": "Reflexive Shifts"
        },
        {
          "id": "f6002",
          "front": "ir vs irse",
          "back": "ir = to go (to a destination) | irse = to leave / go away",
          "category": "Reflexive Shifts"
        },
        {
          "id": "f6003",
          "front": "probar vs probarse",
          "back": "probar = taste food / try an idea | probarse = try on clothes",
          "category": "Reflexive Shifts"
        }
      ],
      "exercises": [
        {
          "id": "u5-l60-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"It is late, I am leaving / taking off\" in Spanish?",
          "explanation": "\"Irse\" means to leave/depart: \"Me voy\".",
          "options": [
            {
              "id": "opt1",
              "text": "Es tarde, ya me voy.",
              "subtext": "Correct reflexive form of irse",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Es tarde, ya voy.",
              "subtext": "Means \"I am coming/going toward you\"",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Es tarde, ya me salgo.",
              "subtext": "Unnatural phrasing",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Es tarde, ya me pongo.",
              "subtext": "Ponerse means to put on or become",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l60-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete: \"I always fall asleep during boring movies.\"",
          "sentenceBefore": "Yo siempre",
          "sentenceAfter": "en el cine si la película es aburrida.",
          "correctAnswers": [
            "me duermo",
            "Me duermo"
          ],
          "wordBank": [
            "me duermo",
            "duermo",
            "me duerme",
            "duermen"
          ],
          "hint": "Fall asleep = dormirse (yo form).",
          "explanation": "\"To fall asleep\" is the reflexive \"dormirse\": \"me duermo\"."
        },
        {
          "id": "u5-l60-ex3",
          "type": "matching-pairs",
          "prompt": "Match each verb pair to its contrasting meaning:",
          "explanation": "Review reflexive meaning alterations.",
          "pairs": [
            {
              "id": "p1",
              "left": "dormir / dormirse",
              "right": "to sleep / to fall asleep"
            },
            {
              "id": "p2",
              "left": "ir / irse",
              "right": "to go / to leave (depart)"
            },
            {
              "id": "p3",
              "left": "probar / probarse",
              "right": "to taste / to try on clothes"
            },
            {
              "id": "p4",
              "left": "poner / ponerse",
              "right": "to place / to put on (clothes)"
            }
          ]
        }
      ]
    },
    {
      "id": "u5-l61",
      "slug": "definite-article-2",
      "unitId": 5,
      "order": 61,
      "title": "61. Definite Article II",
      "subtitle": "Special Uses: Generalized Nouns, Titles, Days & Languages",
      "estimatedMinutes": 9,
      "iconName": "BookMarked",
      "summary": "Spanish uses \"el/la/los/las\" in many scenarios where English omits \"the\": general/abstract nouns (\"El amor es bello\"), titles when talking about someone (\"El doctor Pérez\"), and days of the week (\"Los domingos\").",
      "theory": [
        {
          "id": "u5-l51-t1",
          "title": "When Spanish Uses Articles (and English Doesn't)",
          "summary": "Spanish requires the definite article for generalizations, titles in 3rd person, days of the week, and languages (except after hablar/en).",
          "table": {
            "headers": [
              "Context / Category",
              "Spanish Rule",
              "Example Sentence"
            ],
            "rows": [
              [
                "General / Abstract Concepts",
                "Mandatory article for universal concepts",
                "El amor es importante (Love is important)"
              ],
              [
                "Titles (talking ABOUT someone)",
                "Include article (omit when addressing directly)",
                "El doctor García es amable vs ¡Hola, doctor García!"
              ],
              [
                "Days of the Week",
                "Use el / los instead of \"on\"",
                "El lunes trabajo / Los sábados bailo (On Mondays/Saturdays)"
              ],
              [
                "Languages",
                "Used as subjects/objects, dropped after hablar/en",
                "El español es hermoso / Hablo español / En inglés"
              ]
            ]
          },
          "examples": [
            {
              "spanish": "Los perros son animales leales.",
              "english": "Dogs are loyal animals. (General concept → Los perros)",
              "audio": "Los perros son animales leales."
            },
            {
              "spanish": "La señora Gómez habla español.",
              "english": "Mrs. Gomez speaks Spanish. (Talking about title → La señora Gómez)",
              "audio": "La señora Gómez habla español."
            },
            {
              "spanish": "No tengo clases los viernes.",
              "english": "I don't have classes on Fridays. (On Fridays → Los viernes)",
              "audio": "No tengo clases los viernes."
            }
          ],
          "watchOut": "Do NOT use the article when speaking directly TO someone: \"Buenos días, profesor Martínez\" (NOT \"el profesor Martínez\")."
        }
      ],
      "vocabulary": [
        {
          "id": "v6101",
          "spanish": "el amor",
          "english": "love (abstract concept)",
          "gender": "masculine",
          "category": "Abstract",
          "exampleSentence": {
            "spanish": "El amor lo puede todo.",
            "english": "Love can do anything."
          }
        },
        {
          "id": "v6102",
          "spanish": "el señor / la señora",
          "english": "Mr. / Mrs.",
          "category": "Titles",
          "exampleSentence": {
            "spanish": "El señor López está en su oficina.",
            "english": "Mr. Lopez is in his office."
          }
        },
        {
          "id": "v6103",
          "spanish": "los lunes / los martes...",
          "english": "on Mondays / on Tuesdays...",
          "category": "Time",
          "exampleSentence": {
            "spanish": "Juego al tenis los sábados.",
            "english": "I play tennis on Saturdays."
          }
        }
      ],
      "flashcards": [
        {
          "id": "f6101",
          "front": "Dogs are loyal (General concept)",
          "back": "Los perros son leales (Spanish requires \"Los\")",
          "category": "Definite Articles"
        },
        {
          "id": "f6102",
          "front": "Title rule: talking ABOUT vs TO someone",
          "back": "About: El doctor Smith es simpático\nTo: Hola, doctor Smith (no article)",
          "category": "Definite Articles"
        },
        {
          "id": "f6103",
          "front": "How to say \"on Sundays\"",
          "back": "Los domingos (Never say \"en domingos\")",
          "category": "Definite Articles"
        }
      ],
      "exercises": [
        {
          "id": "u5-l61-ex1",
          "type": "multiple-choice",
          "prompt": "How do you say \"Doctor Sanchez is in the hospital\" when speaking about him to a colleague?",
          "explanation": "When talking ABOUT a titled person, Spanish requires the definite article: \"El doctor Sánchez\".",
          "options": [
            {
              "id": "opt1",
              "text": "El doctor Sánchez está en el hospital.",
              "subtext": "Correct with definite article",
              "isCorrect": true
            },
            {
              "id": "opt2",
              "text": "Doctor Sánchez está en el hospital.",
              "subtext": "Missing mandatory article \"el\"",
              "isCorrect": false
            },
            {
              "id": "opt3",
              "text": "Un doctor Sánchez está en el hospital.",
              "subtext": "Incorrect article",
              "isCorrect": false
            },
            {
              "id": "opt4",
              "text": "Al doctor Sánchez está en el hospital.",
              "subtext": "Incorrect contraction",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "u5-l61-ex2",
          "type": "fill-in-blank",
          "prompt": "Complete for generalized concept: \"_______ (cats) sleep a lot.\"",
          "sentenceBefore": "",
          "sentenceAfter": "gatos duermen mucho durante el día.",
          "correctAnswers": [
            "Los",
            "los"
          ],
          "wordBank": [
            "Los",
            "Unos",
            "El",
            "Les"
          ],
          "hint": "General plural nouns take \"Los\".",
          "explanation": "Generalizations about entire categories in Spanish require the definite article: \"Los gatos\"."
        },
        {
          "id": "u5-l61-ex3",
          "type": "sentence-builder",
          "prompt": "Translate: \"I practice tennis on Saturdays\"",
          "targetEnglish": "I practice tennis on Saturdays",
          "correctTokens": [
            "Yo",
            "practico",
            "tenis",
            "los",
            "sábados"
          ],
          "availableTokens": [
            "Yo",
            "practico",
            "tenis",
            "los",
            "sábados",
            "en",
            "el",
            "a"
          ],
          "explanation": "\"Yo practico tenis los sábados.\" (Spanish uses \"los sábados\" for \"on Saturdays\", never \"en sábados\")."
        }
      ]
    }
  ],
  "masteryExam": {
    "id": "unit-5-exam",
    "title": "Unit 5 Comprehensive Mastery Exam",
    "description": "Test your full mastery across all Unit 5 concepts: Saber vs Conocer, numbers 31–1000, telling time, Por vs Para, irregular comparatives, demonstratives, time with hacer, possessive pronouns, reflexive verbs, and definite article rules.",
    "passingScore": 80,
    "exercises": [
      {
        "id": "u5-exam-ex1",
        "type": "multiple-choice",
        "prompt": "Which verb correctly completes: \"Do you know who that person is, and do you know where she lives?\"",
        "explanation": "Both \"who someone is\" and \"where she lives\" are facts/information, requiring SABER: \"sabes\".",
        "options": [
          {
            "id": "opt1",
            "text": "¿Sabes quién es y sabes dónde vive?",
            "subtext": "Facts / information → SABER",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "¿Conoces quién es y conoces dónde vive?",
            "subtext": "Incorrect: conocer cannot take interrogative clauses",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "¿Sabes quién es y conoces dónde vive?",
            "subtext": "Location info takes saber",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "¿Conoces quién es y sabes dónde vive?",
            "subtext": "Incorrect",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u5-exam-ex2",
        "type": "fill-in-blank",
        "prompt": "Fill in \"por\" or \"para\": \"I bought this computer _______ 500 euros.\"",
        "sentenceBefore": "Compré esta computadora",
        "sentenceAfter": "quinientos euros.",
        "correctAnswers": [
          "por",
          "Por"
        ],
        "wordBank": [
          "por",
          "para",
          "de",
          "en"
        ],
        "hint": "Price / exchange.",
        "explanation": "Exchange/price always requires \"por\": \"por quinientos euros\"."
      },
      {
        "id": "u5-exam-ex3",
        "type": "multiple-choice",
        "prompt": "How do you say \"It is 1:30 PM\" in Spanish?",
        "explanation": "1:00 is singular (\"Es la una\"), plus \"y media\": \"Es la una y media de la tarde\".",
        "options": [
          {
            "id": "opt1",
            "text": "Es la una y media de la tarde.",
            "subtext": "Correct singular form for 1:00",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "Son las una y media de la tarde.",
            "subtext": "Incorrect: 1:00 is singular",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Son las dos menos media.",
            "subtext": "Incorrect syntax",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "Es el uno y media.",
            "subtext": "Incorrect article/gender",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u5-exam-ex4",
        "type": "sentence-builder",
        "prompt": "Translate into Spanish: \"My older brother has lived here for two years\"",
        "targetEnglish": "My older brother has lived here for two years",
        "correctTokens": [
          "Mi",
          "hermano",
          "mayor",
          "vive",
          "aquí",
          "desde",
          "hace",
          "dos",
          "años"
        ],
        "availableTokens": [
          "Mi",
          "hermano",
          "mayor",
          "vive",
          "aquí",
          "desde",
          "hace",
          "dos",
          "años",
          "más",
          "viejo"
        ],
        "explanation": "\"Mi hermano mayor vive aquí desde hace dos años.\" (Older brother = hermano mayor; for 2 years = desde hace dos años)."
      },
      {
        "id": "u5-exam-ex5",
        "type": "fill-in-blank",
        "prompt": "Complete the reflexive body part sentence: \"I brush _______ teeth every night.\"",
        "sentenceBefore": "Me cepillo",
        "sentenceAfter": "dientes cada noche.",
        "correctAnswers": [
          "los",
          "Los"
        ],
        "wordBank": [
          "los",
          "mis",
          "sus",
          "las"
        ],
        "hint": "Use definite article with body parts in reflexives.",
        "explanation": "Reflexive verbs use definite articles for body parts: \"me cepillo los dientes\"."
      },
      {
        "id": "u5-exam-ex6",
        "type": "multiple-choice",
        "prompt": "What is the difference between \"Voy\" and \"Me voy\"?",
        "explanation": "\"Voy\" means \"I go\" (to a place), while \"Me voy\" means \"I am leaving / taking off\".",
        "options": [
          {
            "id": "opt1",
            "text": "\"Voy\" = I go | \"Me voy\" = I am leaving / taking off",
            "subtext": "Correct semantic distinction",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "\"Voy\" = I leave | \"Me voy\" = I arrive",
            "subtext": "Incorrect meaning",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "Both mean exactly the same thing",
            "subtext": "Incorrect",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "\"Me voy\" means \"I sleep\"",
            "subtext": "Incorrect",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u5-exam-ex7",
        "type": "fill-in-blank",
        "prompt": "Fill in the plural possessive pronoun: \"Your car is small, but ours (el coche nuestro) is big.\"",
        "sentenceBefore": "Tu coche es pequeño, pero",
        "sentenceAfter": "es grande.",
        "correctAnswers": [
          "el nuestro",
          "El nuestro"
        ],
        "wordBank": [
          "el nuestro",
          "nuestro",
          "la nuestra",
          "el suyo"
        ],
        "hint": "Matches masculine singular \"coche\".",
        "explanation": "Possessive pronoun replacing \"el coche nuestro\" is \"el nuestro\"."
      },
      {
        "id": "u5-exam-ex8",
        "type": "matching-pairs",
        "prompt": "Match each scenario to either POR or PARA:",
        "explanation": "Test your mastery of the Por vs Para contrast.",
        "pairs": [
          {
            "id": "p1",
            "left": "La tarea es... mañana.",
            "right": "PARA (Deadline)"
          },
          {
            "id": "p2",
            "left": "Viajamos... tren.",
            "right": "POR (Means of transport)"
          },
          {
            "id": "p3",
            "left": "Estudié... tres horas.",
            "right": "POR (Duration)"
          },
          {
            "id": "p4",
            "left": "El regalo es... mamá.",
            "right": "PARA (Recipient)"
          }
        ]
      },
      {
        "id": "u5-exam-ex9",
        "type": "multiple-choice",
        "prompt": "What is the correct masculine plural demonstrative for \"these books right here\"?",
        "explanation": "The plural of \"este\" is \"estos\": \"estos libros\".",
        "options": [
          {
            "id": "opt1",
            "text": "estos libros",
            "subtext": "Correct form with \"t\"",
            "isCorrect": true
          },
          {
            "id": "opt2",
            "text": "estes libros",
            "subtext": "Non-existent word",
            "isCorrect": false
          },
          {
            "id": "opt3",
            "text": "esos libros",
            "subtext": "Means \"those books\"",
            "isCorrect": false
          },
          {
            "id": "opt4",
            "text": "aquellos libros",
            "subtext": "Means \"those books over there\"",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "u5-exam-ex10",
        "type": "error-identification",
        "prompt": "Find the mistake in this sentence:",
        "incorrectSentence": "Yo juego al fútbol en los domingos por la tarde.",
        "errorWord": "en los domingos",
        "options": [
          "los domingos",
          "en domingos",
          "al domingo",
          "por domingos"
        ],
        "correctOption": "los domingos",
        "explanation": "In Spanish, \"on Sundays\" is simply \"los domingos\" without the preposition \"en\"."
      }
    ]
  }
};
