export interface GrammarBlank {
  index: number;
  answer: string;
  options: string[];
}

export interface PatternExercise {
  id: number;
  context: string;
  originalCorrect: string;
  fullSentence: string;
  grammar: {
    blanks: GrammarBlank[];
  };
  vocabulary: {
    focusWord: string;
    contextIndex: number;
  };
}

export const patterns: PatternExercise[] = [
  {
    "id": 1,
    "context": "I need to buy a new laptop. _________________________________ deals?",
    "originalCorrect": "which retailers are currently offering the best",
    "fullSentence": "I need to buy a new laptop. which retailers are currently offering the best deals?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "being",
            "do",
            "are"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "a",
            "to",
            "or",
            "at"
          ]
        },
        {
          "index": 9,
          "answer": "are",
          "options": [
            "are",
            "an",
            "do",
            "am"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "retailers",
      "contextIndex": 8
    }
  },
  {
    "id": 2,
    "context": "I’m thinking about starting a blog. _________________________________?",
    "originalCorrect": "have you decided on a specific focus",
    "fullSentence": "I’m thinking about starting a blog. have you decided on a specific focus ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "and",
            "will",
            "is",
            "about"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "while",
            "in",
            "were",
            "a"
          ]
        },
        {
          "index": 6,
          "answer": "have",
          "options": [
            "because",
            "have",
            "were",
            "shall"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "specific",
      "contextIndex": 11
    }
  },
  {
    "id": 3,
    "context": "I'm going to study at the library this afternoon. _________________________________?",
    "originalCorrect": "will you be borrowing any materials while you’re there",
    "fullSentence": "I'm going to study at the library this afternoon. will you be borrowing any materials while you’re there ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "am",
            "would",
            "with"
          ]
        },
        {
          "index": 4,
          "answer": "at",
          "options": [
            "was",
            "at",
            "must",
            "about"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "can",
            "the",
            "is",
            "because"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "materials",
      "contextIndex": 14
    }
  },
  {
    "id": 4,
    "context": "I'm thinking about getting a pet. _________________________________?",
    "originalCorrect": "what kind of animal are you considering",
    "fullSentence": "I'm thinking about getting a pet. what kind of animal are you considering ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "until",
            "about",
            "the",
            "might"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "being",
            "as",
            "about",
            "a"
          ]
        },
        {
          "index": 8,
          "answer": "of",
          "options": [
            "or",
            "a",
            "been",
            "of"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "considering",
      "contextIndex": 12
    }
  },
  {
    "id": 5,
    "context": "I’m excited to see the new science fiction movie tonight. _________________________________?",
    "originalCorrect": "could you tell me where it’s being shown",
    "fullSentence": "I’m excited to see the new science fiction movie tonight. could you tell me where it’s being shown ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "is",
            "to",
            "at",
            "would"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "the",
            "but",
            "be",
            "while"
          ]
        },
        {
          "index": 10,
          "answer": "could",
          "options": [
            "and",
            "being",
            "when",
            "could"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "fiction",
      "contextIndex": 7
    }
  },
  {
    "id": 6,
    "context": "I heard Anna got a promotion. _________________________________?",
    "originalCorrect": "do you know if she will be moving to a different department",
    "fullSentence": "I heard Anna got a promotion. do you know if she will be moving to a different department ?",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "a",
          "options": [
            "a",
            "does",
            "and",
            "did"
          ]
        },
        {
          "index": 6,
          "answer": "do",
          "options": [
            "the",
            "do",
            "am",
            "while"
          ]
        },
        {
          "index": 9,
          "answer": "if",
          "options": [
            "for",
            "were",
            "as",
            "if"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "department",
      "contextIndex": 17
    }
  },
  {
    "id": 7,
    "context": "We're planning a trip to the mountains next weekend. Can _________________________________?",
    "originalCorrect": "you tell me whether the cabins will be available",
    "fullSentence": "We're planning a trip to the mountains next weekend. Can you tell me whether the cabins will be available ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "a",
          "options": [
            "but",
            "a",
            "while",
            "in"
          ]
        },
        {
          "index": 4,
          "answer": "to",
          "options": [
            "while",
            "but",
            "to",
            "had"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "the",
            "and",
            "might",
            "do"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "weekend",
      "contextIndex": 8
    }
  },
  {
    "id": 8,
    "context": "The museum exhibition opens next month. _________________________________?",
    "originalCorrect": "do you know how much the tickets will cost",
    "fullSentence": "The museum exhibition opens next month. do you know how much the tickets will cost ?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "from",
            "with",
            "while"
          ]
        },
        {
          "index": 6,
          "answer": "do",
          "options": [
            "when",
            "on",
            "but",
            "do"
          ]
        },
        {
          "index": 11,
          "answer": "the",
          "options": [
            "since",
            "the",
            "has",
            "with"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "exhibition",
      "contextIndex": 2
    }
  },
  {
    "id": 9,
    "context": "I just started learning French. _________________________________?",
    "originalCorrect": "where are you taking your lessons",
    "fullSentence": "I just started learning French. where are you taking your lessons ?",
    "grammar": {
      "blanks": [
        {
          "index": 6,
          "answer": "are",
          "options": [
            "if",
            "since",
            "in",
            "are"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "lessons",
      "contextIndex": 10
    }
  },
  {
    "id": 10,
    "context": "Why are you asking about the project deadline? I'm _________________________________",
    "originalCorrect": "checking to see if it has been extended",
    "fullSentence": "Why are you asking about the project deadline? I'm checking to see if it has been extended",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "are",
          "options": [
            "while",
            "does",
            "are",
            "if"
          ]
        },
        {
          "index": 4,
          "answer": "about",
          "options": [
            "about",
            "at",
            "or",
            "while"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "to",
            "had",
            "while",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "project",
      "contextIndex": 6
    }
  },
  {
    "id": 11,
    "context": "The final exam is scheduled for next Friday. _________________________________?",
    "originalCorrect": "we are forming a study group are you interested in joining",
    "fullSentence": "The final exam is scheduled for next Friday. we are forming a study group are you interested in joining ?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "about",
            "as",
            "when",
            "the"
          ]
        },
        {
          "index": 3,
          "answer": "is",
          "options": [
            "will",
            "because",
            "could",
            "is"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "with",
            "do",
            "so",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "joining",
      "contextIndex": 18
    }
  },
  {
    "id": 12,
    "context": "This restaurant has great reviews online. Let's _________________________________.",
    "originalCorrect": "try it out for dinner sometime",
    "fullSentence": "This restaurant has great reviews online. Let's try it out for dinner sometime .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "has",
          "options": [
            "a",
            "in",
            "by",
            "has"
          ]
        },
        {
          "index": 10,
          "answer": "for",
          "options": [
            "for",
            "while",
            "until",
            "with"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "sometime",
      "contextIndex": 12
    }
  },
  {
    "id": 13,
    "context": "What did Maria ask you about the book you're reading? She _________________________________",
    "originalCorrect": "she wanted to know where could buy a copy",
    "fullSentence": "What did Maria ask you about the book you're reading? She she wanted to know where could buy a copy",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "although",
            "did",
            "do",
            "for"
          ]
        },
        {
          "index": 5,
          "answer": "about",
          "options": [
            "about",
            "a",
            "the",
            "or"
          ]
        },
        {
          "index": 6,
          "answer": "the",
          "options": [
            "the",
            "in",
            "or",
            "because"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "reading",
      "contextIndex": 9
    }
  },
  {
    "id": 14,
    "context": "How did you prepare for the exam? I used _________________________________.",
    "originalCorrect": "study guide that was by the professor provided /the",
    "fullSentence": "How did you prepare for the exam? I used study guide that was by the professor provided /the .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "in",
            "when",
            "so",
            "did"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "with",
            "in",
            "by",
            "for"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "since",
            "while",
            "although",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "prepare",
      "contextIndex": 3
    }
  },
  {
    "id": 15,
    "context": "I'm trying to eat healthier these days. _________________________________?",
    "originalCorrect": "could you recommend any healthy recipes",
    "fullSentence": "I'm trying to eat healthier these days. could you recommend any healthy recipes ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "about",
            "are",
            "because",
            "to"
          ]
        },
        {
          "index": 7,
          "answer": "could",
          "options": [
            "could",
            "be",
            "did",
            "might"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "healthier",
      "contextIndex": 4
    }
  },
  {
    "id": 16,
    "context": "My flight was delayed by three hours. That's _________________________________.",
    "originalCorrect": "must have been extremely inconvenient",
    "fullSentence": "My flight was delayed by three hours. That's must have been extremely inconvenient .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "was",
          "options": [
            "was",
            "and",
            "with",
            "as"
          ]
        },
        {
          "index": 4,
          "answer": "by",
          "options": [
            "in",
            "for",
            "by",
            "should"
          ]
        },
        {
          "index": 8,
          "answer": "must",
          "options": [
            "are",
            "must",
            "if",
            "will"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "delayed",
      "contextIndex": 3
    }
  },
  {
    "id": 17,
    "context": "I'm looking for a new apartment. _________________________________?",
    "originalCorrect": "what are you looking for in a neighborhood",
    "fullSentence": "I'm looking for a new apartment. what are you looking for in a neighborhood ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "for",
          "options": [
            "has",
            "is",
            "an",
            "for"
          ]
        },
        {
          "index": 3,
          "answer": "a",
          "options": [
            "because",
            "might",
            "a",
            "the"
          ]
        },
        {
          "index": 7,
          "answer": "are",
          "options": [
            "has",
            "are",
            "from",
            "does"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "neighborhood",
      "contextIndex": 13
    }
  },
  {
    "id": 18,
    "context": "What did you think of the concert? The _________________________________.",
    "originalCorrect": "sound quality was amazing, and band's energy great was /the",
    "fullSentence": "What did you think of the concert? The sound quality was amazing, and band's energy great was /the .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "in",
            "as",
            "might",
            "did"
          ]
        },
        {
          "index": 4,
          "answer": "of",
          "options": [
            "if",
            "to",
            "is",
            "of"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "since",
            "by",
            "be",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "quality",
      "contextIndex": 9
    }
  },
  {
    "id": 19,
    "context": "I have an interview for a new job next week. _________________________________?",
    "originalCorrect": "have you already updated your resume",
    "fullSentence": "I have an interview for a new job next week. have you already updated your resume ?",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "have",
          "options": [
            "is",
            "have",
            "from",
            "an"
          ]
        },
        {
          "index": 2,
          "answer": "an",
          "options": [
            "an",
            "been",
            "have",
            "for"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "been",
            "until",
            "would",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "updated",
      "contextIndex": 13
    }
  },
  {
    "id": 20,
    "context": "I need to submit my assignment by tomorrow._________________________________?",
    "originalCorrect": "have you managed to finish it yet",
    "fullSentence": "I need to submit my assignment by tomorrow. have you managed to finish it yet ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "do",
            "am",
            "so"
          ]
        },
        {
          "index": 6,
          "answer": "by",
          "options": [
            "the",
            "be",
            "had",
            "by"
          ]
        },
        {
          "index": 8,
          "answer": "have",
          "options": [
            "did",
            "if",
            "is",
            "have"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "tomorrow",
      "contextIndex": 7
    }
  },
  {
    "id": 21,
    "context": "I can't find my keys anywhere. _________________________________?",
    "originalCorrect": "do you remember where last them seeing",
    "fullSentence": "I can't find my keys anywhere. do you remember where last them seeing ?",
    "grammar": {
      "blanks": [
        {
          "index": 6,
          "answer": "do",
          "options": [
            "will",
            "of",
            "do",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "remember",
      "contextIndex": 8
    }
  },
  {
    "id": 22,
    "context": "We should plan a team outing soon. That _________________________________.",
    "originalCorrect": "that sounds like a wonderful suggestion",
    "fullSentence": "We should plan a team outing soon. That that sounds like a wonderful suggestion .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "should",
          "options": [
            "should",
            "must",
            "by",
            "about"
          ]
        },
        {
          "index": 3,
          "answer": "a",
          "options": [
            "or",
            "a",
            "must",
            "if"
          ]
        },
        {
          "index": 11,
          "answer": "a",
          "options": [
            "were",
            "to",
            "a",
            "but"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "wonderful",
      "contextIndex": 12
    }
  },
  {
    "id": 23,
    "context": "The new software update is causing some issues. _________________________________ a solution.",
    "originalCorrect": "is working on IT department /the",
    "fullSentence": "The new software update is causing some issues. is working on IT department /the a solution.",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "at",
            "the",
            "of",
            "been"
          ]
        },
        {
          "index": 4,
          "answer": "is",
          "options": [
            "shall",
            "until",
            "been",
            "is"
          ]
        },
        {
          "index": 8,
          "answer": "is",
          "options": [
            "in",
            "is",
            "being",
            "be"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "causing",
      "contextIndex": 5
    }
  },
  {
    "id": 24,
    "context": "I’m thinking of joining the university’s photography club. I didn't _________________________________.",
    "originalCorrect": "know you were interested photography /in",
    "fullSentence": "I’m thinking of joining the university’s photography club. I didn't know you were interested photography /in .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "of",
          "options": [
            "of",
            "being",
            "had",
            "might"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "could",
            "although",
            "has",
            "the"
          ]
        },
        {
          "index": 12,
          "answer": "were",
          "options": [
            "were",
            "to",
            "for",
            "a"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "joining",
      "contextIndex": 3
    }
  },
  {
    "id": 25,
    "context": "Do you know how to get to the city center? The easiest _________________________________.",
    "originalCorrect": "the way to reach it is to take subway",
    "fullSentence": "Do you know how to get to the city center? The easiest the way to reach it is to take subway .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "do",
          "options": [
            "do",
            "been",
            "had",
            "will"
          ]
        },
        {
          "index": 4,
          "answer": "to",
          "options": [
            "to",
            "shall",
            "should",
            "in"
          ]
        },
        {
          "index": 6,
          "answer": "to",
          "options": [
            "to",
            "had",
            "would",
            "have"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "easiest",
      "contextIndex": 11
    }
  },
  {
    "id": 26,
    "context": "I finally finished the novel you lent me. _________________________________?",
    "originalCorrect": "what was your overall impression of it",
    "fullSentence": "I finally finished the novel you lent me. what was your overall impression of it ?",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "the",
          "options": [
            "the",
            "from",
            "is",
            "since"
          ]
        },
        {
          "index": 9,
          "answer": "was",
          "options": [
            "may",
            "from",
            "and",
            "was"
          ]
        },
        {
          "index": 13,
          "answer": "of",
          "options": [
            "had",
            "but",
            "by",
            "of"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "finished",
      "contextIndex": 2
    }
  },
  {
    "id": 27,
    "context": "This coffee is a bit too strong for me. _________________________________?",
    "originalCorrect": "would you prefer me to make it slightly milder",
    "fullSentence": "This coffee is a bit too strong for me. would you prefer me to make it slightly milder ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "is",
          "options": [
            "are",
            "and",
            "in",
            "is"
          ]
        },
        {
          "index": 3,
          "answer": "a",
          "options": [
            "from",
            "may",
            "or",
            "a"
          ]
        },
        {
          "index": 7,
          "answer": "for",
          "options": [
            "with",
            "would",
            "at",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "slightly",
      "contextIndex": 16
    }
  },
  {
    "id": 28,
    "context": "The weather forecast says it will rain all weekend. We should _________________________________.",
    "originalCorrect": "probably cancel our plans for the park",
    "fullSentence": "The weather forecast says it will rain all weekend. We should probably cancel our plans for the park .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "be",
            "the",
            "may",
            "since"
          ]
        },
        {
          "index": 5,
          "answer": "will",
          "options": [
            "will",
            "or",
            "and",
            "should"
          ]
        },
        {
          "index": 10,
          "answer": "should",
          "options": [
            "should",
            "must",
            "and",
            "but"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "weather",
      "contextIndex": 1
    }
  },
  {
    "id": 29,
    "context": "My computer is running very slowly. _________________________________?",
    "originalCorrect": "have you considered rebooting the system yet",
    "fullSentence": "My computer is running very slowly. have you considered rebooting the system yet ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "is",
          "options": [
            "is",
            "are",
            "might",
            "at"
          ]
        },
        {
          "index": 6,
          "answer": "have",
          "options": [
            "when",
            "have",
            "because",
            "although"
          ]
        },
        {
          "index": 10,
          "answer": "the",
          "options": [
            "at",
            "to",
            "the",
            "in"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "rebooting",
      "contextIndex": 9
    }
  },
  {
    "id": 30,
    "context": "I'm not sure which major to choose. You should _________________________________.",
    "originalCorrect": "speak with an academic advisor about your options to",
    "fullSentence": "I'm not sure which major to choose. You should speak with an academic advisor about your options to .",
    "grammar": {
      "blanks": [
        {
          "index": 5,
          "answer": "to",
          "options": [
            "a",
            "because",
            "may",
            "to"
          ]
        },
        {
          "index": 8,
          "answer": "should",
          "options": [
            "being",
            "should",
            "may",
            "for"
          ]
        },
        {
          "index": 10,
          "answer": "with",
          "options": [
            "on",
            "so",
            "to",
            "with"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "options",
      "contextIndex": 16
    }
  },
  {
    "id": 31,
    "context": "I'm planning a surprise party for my brother. _________________________________?",
    "originalCorrect": "any way I can assist you? in",
    "fullSentence": "I'm planning a surprise party for my brother. any way I can assist you? in ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "a",
          "options": [
            "can",
            "be",
            "might",
            "a"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "should",
            "could",
            "for",
            "will"
          ]
        },
        {
          "index": 11,
          "answer": "can",
          "options": [
            "should",
            "can",
            "are",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "surprise",
      "contextIndex": 3
    }
  },
  {
    "id": 32,
    "context": "The documentary about climate change was very informative. Yes ,_________________________________.",
    "originalCorrect": "I gained several valuable insights from it",
    "fullSentence": "The documentary about climate change was very informative. Yes , I gained several valuable insights from it .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "could",
            "the",
            "since",
            "when"
          ]
        },
        {
          "index": 2,
          "answer": "about",
          "options": [
            "about",
            "are",
            "with",
            "an"
          ]
        },
        {
          "index": 5,
          "answer": "was",
          "options": [
            "does",
            "was",
            "must",
            "might"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "climate",
      "contextIndex": 3
    }
  },
  {
    "id": 33,
    "context": "I'm going to be late for the meeting. _________________________________?",
    "originalCorrect": "should I tell the organizer that you're running behind",
    "fullSentence": "I'm going to be late for the meeting. should I tell the organizer that you're running behind ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "for",
            "of",
            "would"
          ]
        },
        {
          "index": 3,
          "answer": "be",
          "options": [
            "be",
            "in",
            "shall",
            "can"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "for",
            "on",
            "but",
            "must"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "running",
      "contextIndex": 15
    }
  },
  {
    "id": 34,
    "context": "I'd like to return this shirt. _________________________________?",
    "originalCorrect": "is there a particular issue with it",
    "fullSentence": "I'd like to return this shirt. is there a particular issue with it ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "has",
            "to",
            "at",
            "for"
          ]
        },
        {
          "index": 6,
          "answer": "is",
          "options": [
            "is",
            "and",
            "for",
            "did"
          ]
        },
        {
          "index": 8,
          "answer": "a",
          "options": [
            "from",
            "for",
            "shall",
            "a"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "particular",
      "contextIndex": 9
    }
  },
  {
    "id": 35,
    "context": "I don't understand this math problem. Let me _________________________________.",
    "originalCorrect": "let me take a closer look at it",
    "fullSentence": "I don't understand this math problem. Let me let me take a closer look at it .",
    "grammar": {
      "blanks": [
        {
          "index": 11,
          "answer": "a",
          "options": [
            "a",
            "so",
            "with",
            "are"
          ]
        },
        {
          "index": 14,
          "answer": "at",
          "options": [
            "been",
            "at",
            "while",
            "might"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "problem",
      "contextIndex": 5
    }
  },
  {
    "id": 36,
    "context": "I'm volunteering at the animal shelter this Saturday. That's _________________________________.",
    "originalCorrect": "a wonderful thing you to do of",
    "fullSentence": "I'm volunteering at the animal shelter this Saturday. That's a wonderful thing you to do of .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "at",
          "options": [
            "shall",
            "from",
            "until",
            "at"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "the",
            "a",
            "would",
            "in"
          ]
        },
        {
          "index": 9,
          "answer": "a",
          "options": [
            "to",
            "a",
            "should",
            "about"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "shelter",
      "contextIndex": 5
    }
  },
  {
    "id": 37,
    "context": "I missed the lecture this morning. I can _________________________________.",
    "originalCorrect": "lend you my notes if you'd like",
    "fullSentence": "I missed the lecture this morning. I can lend you my notes if you'd like .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "the",
          "options": [
            "do",
            "while",
            "and",
            "the"
          ]
        },
        {
          "index": 7,
          "answer": "can",
          "options": [
            "do",
            "can",
            "or",
            "in"
          ]
        },
        {
          "index": 12,
          "answer": "if",
          "options": [
            "or",
            "when",
            "as",
            "if"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "morning",
      "contextIndex": 5
    }
  },
  {
    "id": 38,
    "context": "The new art exhibit is getting a lot of attention. We should _________________________________.",
    "originalCorrect": "go see it before everything sells out",
    "fullSentence": "The new art exhibit is getting a lot of attention. We should go see it before everything sells out .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "to",
            "the",
            "as",
            "might"
          ]
        },
        {
          "index": 4,
          "answer": "is",
          "options": [
            "while",
            "to",
            "the",
            "is"
          ]
        },
        {
          "index": 6,
          "answer": "a",
          "options": [
            "being",
            "in",
            "a",
            "were"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "getting",
      "contextIndex": 5
    }
  },
  {
    "id": 39,
    "context": "It's my first time visiting this city. _________________________________?",
    "originalCorrect": "do you have any recommendations for places to visit are",
    "fullSentence": "It's my first time visiting this city. do you have any recommendations for places to visit are ?",
    "grammar": {
      "blanks": [
        {
          "index": 7,
          "answer": "do",
          "options": [
            "will",
            "because",
            "do",
            "while"
          ]
        },
        {
          "index": 9,
          "answer": "have",
          "options": [
            "the",
            "have",
            "of",
            "while"
          ]
        },
        {
          "index": 12,
          "answer": "for",
          "options": [
            "to",
            "if",
            "is",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "recommendations",
      "contextIndex": 11
    }
  },
  {
    "id": 40,
    "context": "I forgot to bring my umbrella. You can _________________________________.",
    "originalCorrect": "share mine if you need one",
    "fullSentence": "I forgot to bring my umbrella. You can share mine if you need one .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "on",
            "for",
            "being"
          ]
        },
        {
          "index": 7,
          "answer": "can",
          "options": [
            "while",
            "can",
            "of",
            "so"
          ]
        },
        {
          "index": 10,
          "answer": "if",
          "options": [
            "if",
            "am",
            "of",
            "can"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "umbrella",
      "contextIndex": 5
    }
  },
  {
    "id": 41,
    "context": "I've been trying to learn how to play the guitar. _________________________________ it?",
    "originalCorrect": "have you been able to maintain consistent practice",
    "fullSentence": "I've been trying to learn how to play the guitar. have you been able to maintain consistent practice it?",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "been",
          "options": [
            "been",
            "does",
            "at",
            "have"
          ]
        },
        {
          "index": 3,
          "answer": "to",
          "options": [
            "to",
            "or",
            "be",
            "in"
          ]
        },
        {
          "index": 6,
          "answer": "to",
          "options": [
            "to",
            "should",
            "am",
            "with"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "practice",
      "contextIndex": 17
    }
  },
  {
    "id": 42,
    "context": "The company is implementing a new work-from-home policy. I'm excited _________________________________.",
    "originalCorrect": "to see how it will affect productivity",
    "fullSentence": "The company is implementing a new work-from-home policy. I'm excited to see how it will affect productivity .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "must",
            "from",
            "should"
          ]
        },
        {
          "index": 2,
          "answer": "is",
          "options": [
            "is",
            "because",
            "did",
            "would"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "being",
            "since",
            "must",
            "a"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "productivity",
      "contextIndex": 16
    }
  },
  {
    "id": 43,
    "context": "I haven't heard back about my job application yet. It often _________________________________.",
    "originalCorrect": "takes companies a few weeks to review applications for",
    "fullSentence": "I haven't heard back about my job application yet. It often takes companies a few weeks to review applications for .",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "about",
          "options": [
            "about",
            "by",
            "while",
            "do"
          ]
        },
        {
          "index": 13,
          "answer": "a",
          "options": [
            "may",
            "been",
            "since",
            "a"
          ]
        },
        {
          "index": 16,
          "answer": "to",
          "options": [
            "does",
            "to",
            "will",
            "with"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "application",
      "contextIndex": 7
    }
  },
  {
    "id": 44,
    "context": "Can you believe how crowded the train was today? It's _________________________________.",
    "originalCorrect": "usually busy on Friday afternoon this /a",
    "fullSentence": "Can you believe how crowded the train was today? It's usually busy on Friday afternoon this /a .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "can",
          "options": [
            "can",
            "could",
            "and",
            "would"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "the",
            "would",
            "for",
            "as"
          ]
        },
        {
          "index": 7,
          "answer": "was",
          "options": [
            "was",
            "but",
            "from",
            "have"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "crowded",
      "contextIndex": 4
    }
  },
  {
    "id": 45,
    "context": "I think we need more milk. I will _________________________________.",
    "originalCorrect": "some on my way home from work pick up",
    "fullSentence": "I think we need more milk. I will some on my way home from work pick up .",
    "grammar": {
      "blanks": [
        {
          "index": 7,
          "answer": "will",
          "options": [
            "will",
            "as",
            "for",
            "on"
          ]
        },
        {
          "index": 9,
          "answer": "on",
          "options": [
            "am",
            "the",
            "on",
            "has"
          ]
        },
        {
          "index": 13,
          "answer": "from",
          "options": [
            "may",
            "from",
            "about",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "vocabulary",
      "contextIndex": 0
    }
  },
  {
    "id": 46,
    "context": "The instructions for this furniture are so confusing. Let's _________________________________.",
    "originalCorrect": "a online step-by-step if we guide can find see",
    "fullSentence": "The instructions for this furniture are so confusing. Let's a online step-by-step if we guide can find see .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "were",
            "when",
            "had",
            "the"
          ]
        },
        {
          "index": 2,
          "answer": "for",
          "options": [
            "for",
            "have",
            "been",
            "by"
          ]
        },
        {
          "index": 5,
          "answer": "are",
          "options": [
            "the",
            "are",
            "is",
            "being"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "instructions",
      "contextIndex": 1
    }
  },
  {
    "id": 47,
    "context": "I'm training for a marathon next month. That requires _________________________________.",
    "originalCorrect": "a lot of dedication and hard work",
    "fullSentence": "I'm training for a marathon next month. That requires a lot of dedication and hard work .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "for",
          "options": [
            "is",
            "were",
            "for",
            "are"
          ]
        },
        {
          "index": 3,
          "answer": "a",
          "options": [
            "the",
            "in",
            "does",
            "a"
          ]
        },
        {
          "index": 9,
          "answer": "a",
          "options": [
            "is",
            "a",
            "by",
            "when"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "marathon",
      "contextIndex": 4
    }
  },
  {
    "id": 48,
    "context": "Our flight is boarding in 20 minutes. Let's _________________________________.",
    "originalCorrect": "begin making our way to the gate",
    "fullSentence": "Our flight is boarding in 20 minutes. Let's begin making our way to the gate .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "is",
          "options": [
            "to",
            "might",
            "is",
            "although"
          ]
        },
        {
          "index": 4,
          "answer": "in",
          "options": [
            "was",
            "about",
            "may",
            "in"
          ]
        },
        {
          "index": 12,
          "answer": "to",
          "options": [
            "to",
            "a",
            "been",
            "is"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "minutes",
      "contextIndex": 6
    }
  },
  {
    "id": 49,
    "context": "That was one of the best movies I've seen all year. I agree, _________________________________.",
    "originalCorrect": "the acting especially was outstanding",
    "fullSentence": "That was one of the best movies I've seen all year. I agree, the acting especially was outstanding .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "was",
          "options": [
            "or",
            "will",
            "about",
            "was"
          ]
        },
        {
          "index": 3,
          "answer": "of",
          "options": [
            "but",
            "by",
            "and",
            "of"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "must",
            "and",
            "can",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "especially",
      "contextIndex": 15
    }
  },
  {
    "id": 50,
    "context": "I'm organizing a book drive for the local school. _________________________________?",
    "originalCorrect": "how can others get involved in this initiative",
    "fullSentence": "I'm organizing a book drive for the local school. how can others get involved in this initiative ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "a",
          "options": [
            "a",
            "can",
            "about",
            "was"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "for",
            "in",
            "from",
            "as"
          ]
        },
        {
          "index": 6,
          "answer": "the",
          "options": [
            "to",
            "in",
            "an",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "involved",
      "contextIndex": 13
    }
  },
  {
    "id": 51,
    "context": "Why was the flight delayed? The airline announced that the delay _________________________________.",
    "originalCorrect": "was due to an unexpected mechanical issue they discovered",
    "fullSentence": "Why was the flight delayed? The airline announced that the delay was due to an unexpected mechanical issue they discovered .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "was",
          "options": [
            "are",
            "was",
            "from",
            "does"
          ]
        },
        {
          "index": 2,
          "answer": "the",
          "options": [
            "the",
            "been",
            "on",
            "when"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "are",
            "the",
            "in",
            "could"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "unexpected",
      "contextIndex": 15
    }
  },
  {
    "id": 52,
    "context": "Did my package arrive yet? The package you were waiting for _________________________________.",
    "originalCorrect": "you were was delivered this morning while out at lunch",
    "fullSentence": "Did my package arrive yet? The package you were waiting for you were was delivered this morning while out at lunch .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "did",
          "options": [
            "did",
            "does",
            "or",
            "are"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "the",
            "since",
            "with",
            "although"
          ]
        },
        {
          "index": 8,
          "answer": "were",
          "options": [
            "at",
            "was",
            "because",
            "were"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "waiting",
      "contextIndex": 9
    }
  },
  {
    "id": 53,
    "context": "What's the next step for planning the company picnic? We need to find out _________________________________.",
    "originalCorrect": "who is responsible for organizing the annual company picnic this year",
    "fullSentence": "What's the next step for planning the company picnic? We need to find out who is responsible for organizing the annual company picnic this year .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "the",
          "options": [
            "in",
            "the",
            "have",
            "at"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "should",
            "because",
            "so",
            "for"
          ]
        },
        {
          "index": 6,
          "answer": "the",
          "options": [
            "am",
            "the",
            "an",
            "does"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "responsible",
      "contextIndex": 16
    }
  },
  {
    "id": 54,
    "context": "Are you feeling tired lately? My doctor _________________________________.",
    "originalCorrect": "advised me to get at least eight hours of sleep every night",
    "fullSentence": "Are you feeling tired lately? My doctor advised me to get at least eight hours of sleep every night .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "are",
          "options": [
            "by",
            "and",
            "must",
            "are"
          ]
        },
        {
          "index": 9,
          "answer": "to",
          "options": [
            "although",
            "were",
            "on",
            "to"
          ]
        },
        {
          "index": 11,
          "answer": "at",
          "options": [
            "at",
            "when",
            "being",
            "has"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "advised",
      "contextIndex": 7
    }
  },
  {
    "id": 55,
    "context": "Did you hear about the old factory on Main Street? The city is planning _________________________________.",
    "originalCorrect": "the to build a new library where old factory was",
    "fullSentence": "Did you hear about the old factory on Main Street? The city is planning the to build a new library where old factory was .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "did",
          "options": [
            "from",
            "to",
            "be",
            "did"
          ]
        },
        {
          "index": 3,
          "answer": "about",
          "options": [
            "or",
            "was",
            "on",
            "about"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "by",
            "can",
            "is",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "factory",
      "contextIndex": 22
    }
  },
  {
    "id": 56,
    "context": "Was the concert in the park popular? I was surprised to learn _________________________________.",
    "originalCorrect": "how many people attended the free concert in the park",
    "fullSentence": "Was the concert in the park popular? I was surprised to learn how many people attended the free concert in the park .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "was",
          "options": [
            "for",
            "was",
            "did",
            "although"
          ]
        },
        {
          "index": 1,
          "answer": "the",
          "options": [
            "the",
            "may",
            "until",
            "as"
          ]
        },
        {
          "index": 3,
          "answer": "in",
          "options": [
            "in",
            "was",
            "as",
            "be"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "surprised",
      "contextIndex": 9
    }
  },
  {
    "id": 57,
    "context": "What did you think of the new movie? The movie we watched last night _________________________________.",
    "originalCorrect": "the wasn't as interesting as book it was based on",
    "fullSentence": "What did you think of the new movie? The movie we watched last night the wasn't as interesting as book it was based on .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "although",
            "with",
            "did",
            "for"
          ]
        },
        {
          "index": 4,
          "answer": "of",
          "options": [
            "of",
            "shall",
            "when",
            "for"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "although",
            "to",
            "shall",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "interesting",
      "contextIndex": 17
    }
  },
  {
    "id": 58,
    "context": "I'm about to submit my application. Before you submit your application, _________________________________.",
    "originalCorrect": "you should double-check that all the information is accurate",
    "fullSentence": "I'm about to submit my application. Before you submit your application, you should double-check that all the information is accurate .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "about",
          "options": [
            "might",
            "about",
            "as",
            "are"
          ]
        },
        {
          "index": 2,
          "answer": "to",
          "options": [
            "about",
            "since",
            "to",
            "do"
          ]
        },
        {
          "index": 12,
          "answer": "should",
          "options": [
            "on",
            "with",
            "am",
            "should"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "information",
      "contextIndex": 17
    }
  },
  {
    "id": 59,
    "context": "Are you doing anything special next month? My friend who lives in Canada _________________________________.",
    "originalCorrect": "is coming to visit me for two weeks next month",
    "fullSentence": "Are you doing anything special next month? My friend who lives in Canada is coming to visit me for two weeks next month .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "are",
          "options": [
            "in",
            "is",
            "the",
            "are"
          ]
        },
        {
          "index": 11,
          "answer": "in",
          "options": [
            "in",
            "may",
            "might",
            "until"
          ]
        },
        {
          "index": 13,
          "answer": "is",
          "options": [
            "is",
            "shall",
            "with",
            "in"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "anything",
      "contextIndex": 3
    }
  },
  {
    "id": 60,
    "context": "Excuse me, I'm new here. Can you please _________________________________?",
    "originalCorrect": "tell me where the nearest bus station is",
    "fullSentence": "Excuse me, I'm new here. Can you please tell me where the nearest bus station is ?",
    "grammar": {
      "blanks": [
        {
          "index": 5,
          "answer": "can",
          "options": [
            "were",
            "to",
            "might",
            "can"
          ]
        },
        {
          "index": 11,
          "answer": "the",
          "options": [
            "the",
            "would",
            "are",
            "be"
          ]
        },
        {
          "index": 15,
          "answer": "is",
          "options": [
            "a",
            "should",
            "is",
            "was"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "nearest",
      "contextIndex": 12
    }
  },
  {
    "id": 61,
    "context": "Why were you late for the meeting? The reason I was late for the meeting _________________________________.",
    "originalCorrect": "was that my car wouldn't start this morning",
    "fullSentence": "Why were you late for the meeting? The reason I was late for the meeting was that my car wouldn't start this morning .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "were",
          "options": [
            "for",
            "is",
            "were",
            "of"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "as",
            "for",
            "until",
            "are"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "but",
            "shall",
            "been",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "morning",
      "contextIndex": 22
    }
  },
  {
    "id": 62,
    "context": "Why is this restaurant so popular? The restaurant is famous for _________________________________.",
    "originalCorrect": "its delicious seafood dishes that are caught fresh daily",
    "fullSentence": "Why is this restaurant so popular? The restaurant is famous for its delicious seafood dishes that are caught fresh daily .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "is",
          "options": [
            "about",
            "would",
            "of",
            "is"
          ]
        },
        {
          "index": 4,
          "answer": "so",
          "options": [
            "while",
            "so",
            "by",
            "will"
          ]
        },
        {
          "index": 6,
          "answer": "the",
          "options": [
            "can",
            "in",
            "so",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "seafood",
      "contextIndex": 13
    }
  },
  {
    "id": 63,
    "context": "Did you cancel the picnic because of the rain? Despite the heavy rain, _________________________________.",
    "originalCorrect": "the we decided to go ahead with our plans for picnic",
    "fullSentence": "Did you cancel the picnic because of the rain? Despite the heavy rain, the we decided to go ahead with our plans for picnic .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "did",
          "options": [
            "do",
            "but",
            "was",
            "did"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "the",
            "if",
            "by",
            "in"
          ]
        },
        {
          "index": 5,
          "answer": "because",
          "options": [
            "because",
            "might",
            "or",
            "in"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "because",
      "contextIndex": 5
    }
  },
  {
    "id": 64,
    "context": "I need to review the quarterly report soon. I would be very grateful _________________________________.",
    "originalCorrect": "if you could send me the report by Friday",
    "fullSentence": "I need to review the quarterly report soon. I would be very grateful if you could send me the report by Friday .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "the",
            "could",
            "has",
            "to"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "the",
            "am",
            "an",
            "have"
          ]
        },
        {
          "index": 9,
          "answer": "would",
          "options": [
            "of",
            "shall",
            "would",
            "was"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "grateful",
      "contextIndex": 12
    }
  },
  {
    "id": 65,
    "context": "What does the new software update do? The new software update is designed _________________________________.",
    "originalCorrect": "the to make application run much faster on older devices",
    "fullSentence": "What does the new software update do? The new software update is designed the to make application run much faster on older devices .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "does",
          "options": [
            "does",
            "by",
            "until",
            "should"
          ]
        },
        {
          "index": 2,
          "answer": "the",
          "options": [
            "because",
            "were",
            "shall",
            "the"
          ]
        },
        {
          "index": 6,
          "answer": "do",
          "options": [
            "so",
            "do",
            "are",
            "at"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "software",
      "contextIndex": 9
    }
  },
  {
    "id": 66,
    "context": "Why wasn't Mark at the conference yesterday? He was unable to attend the conference _________________________________.",
    "originalCorrect": "he because he had a prior commitment couldn't change",
    "fullSentence": "Why wasn't Mark at the conference yesterday? He was unable to attend the conference he because he had a prior commitment couldn't change .",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "at",
          "options": [
            "at",
            "by",
            "of",
            "been"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "being",
            "so",
            "the",
            "or"
          ]
        },
        {
          "index": 8,
          "answer": "was",
          "options": [
            "was",
            "will",
            "until",
            "a"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "yesterday",
      "contextIndex": 6
    }
  },
  {
    "id": 67,
    "context": "What kind of job is Maria looking for? She is looking for a job _________________________________.",
    "originalCorrect": "that will allow her to use her skills in graphic design",
    "fullSentence": "What kind of job is Maria looking for? She is looking for a job that will allow her to use her skills in graphic design .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "of",
          "options": [
            "but",
            "by",
            "of",
            "to"
          ]
        },
        {
          "index": 4,
          "answer": "is",
          "options": [
            "is",
            "might",
            "will",
            "have"
          ]
        },
        {
          "index": 7,
          "answer": "for",
          "options": [
            "in",
            "about",
            "or",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "looking",
      "contextIndex": 10
    }
  },
  {
    "id": 68,
    "context": "What did the tour guide say about this castle? The tour guide told us that _________________________________.",
    "originalCorrect": "the castle was built over five hundred years ago",
    "fullSentence": "What did the tour guide say about this castle? The tour guide told us that the castle was built over five hundred years ago .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "in",
            "an",
            "with",
            "did"
          ]
        },
        {
          "index": 2,
          "answer": "the",
          "options": [
            "although",
            "but",
            "should",
            "the"
          ]
        },
        {
          "index": 6,
          "answer": "about",
          "options": [
            "about",
            "have",
            "since",
            "by"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "hundred",
      "contextIndex": 21
    }
  },
  {
    "id": 69,
    "context": "Have you made summer plans? I haven't decided yet _________________________________.",
    "originalCorrect": "I what am going to do for my summer vacation",
    "fullSentence": "Have you made summer plans? I haven't decided yet I what am going to do for my summer vacation .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "have",
          "options": [
            "have",
            "shall",
            "did",
            "could"
          ]
        },
        {
          "index": 11,
          "answer": "am",
          "options": [
            "when",
            "by",
            "am",
            "was"
          ]
        },
        {
          "index": 13,
          "answer": "to",
          "options": [
            "with",
            "could",
            "as",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "decided",
      "contextIndex": 7
    }
  },
  {
    "id": 70,
    "context": "Was it easy to set up your new camera? The instructions for the new camera _________________________________.",
    "originalCorrect": "were more complicated than I had originally thought",
    "fullSentence": "Was it easy to set up your new camera? The instructions for the new camera were more complicated than I had originally thought .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "was",
          "options": [
            "about",
            "was",
            "has",
            "while"
          ]
        },
        {
          "index": 3,
          "answer": "to",
          "options": [
            "since",
            "and",
            "by",
            "to"
          ]
        },
        {
          "index": 9,
          "answer": "the",
          "options": [
            "am",
            "do",
            "because",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "instructions",
      "contextIndex": 10
    }
  },
  {
    "id": 71,
    "context": "Did you find the books you were looking for? The librarian showed me _________________________________.",
    "originalCorrect": "the where to find section on ancient history books",
    "fullSentence": "Did you find the books you were looking for? The librarian showed me the where to find section on ancient history books .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "did",
          "options": [
            "must",
            "can",
            "until",
            "did"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "the",
            "about",
            "with",
            "although"
          ]
        },
        {
          "index": 6,
          "answer": "were",
          "options": [
            "were",
            "would",
            "while",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "librarian",
      "contextIndex": 10
    }
  },
  {
    "id": 72,
    "context": "How was the concert, considering the weather? Although the weather was cold, _________________________________.",
    "originalCorrect": "the we still had a wonderful time at outdoor concert",
    "fullSentence": "How was the concert, considering the weather? Although the weather was cold, the we still had a wonderful time at outdoor concert .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "was",
          "options": [
            "do",
            "was",
            "to",
            "shall"
          ]
        },
        {
          "index": 2,
          "answer": "the",
          "options": [
            "so",
            "should",
            "until",
            "the"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "in",
            "the",
            "about",
            "will"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "concert",
      "contextIndex": 21
    }
  },
  {
    "id": 73,
    "context": "I want to recommend that restaurant to a friend. Can you remember _________________________________?",
    "originalCorrect": "the name of the new restaurant we tried last week",
    "fullSentence": "I want to recommend that restaurant to a friend. Can you remember the name of the new restaurant we tried last week ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "have",
            "are",
            "an"
          ]
        },
        {
          "index": 6,
          "answer": "to",
          "options": [
            "for",
            "were",
            "to",
            "could"
          ]
        },
        {
          "index": 7,
          "answer": "a",
          "options": [
            "a",
            "had",
            "in",
            "because"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "remember",
      "contextIndex": 11
    }
  },
  {
    "id": 74,
    "context": "How can I learn more English words? If you want to improve your vocabulary, _________________________________.",
    "originalCorrect": "you should read a wide variety of books and articles",
    "fullSentence": "How can I learn more English words? If you want to improve your vocabulary, you should read a wide variety of books and articles .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "can",
          "options": [
            "the",
            "is",
            "while",
            "can"
          ]
        },
        {
          "index": 7,
          "answer": "if",
          "options": [
            "was",
            "about",
            "if",
            "although"
          ]
        },
        {
          "index": 10,
          "answer": "to",
          "options": [
            "since",
            "does",
            "so",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "english",
      "contextIndex": 5
    }
  },
  {
    "id": 75,
    "context": "Is John still busy with that big project? He finally finished the project _________________________________.",
    "originalCorrect": "he that had been working on for the last two months",
    "fullSentence": "Is John still busy with that big project? He finally finished the project he that had been working on for the last two months .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "is",
          "options": [
            "because",
            "but",
            "is",
            "an"
          ]
        },
        {
          "index": 4,
          "answer": "with",
          "options": [
            "with",
            "can",
            "might",
            "to"
          ]
        },
        {
          "index": 11,
          "answer": "the",
          "options": [
            "is",
            "may",
            "were",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "working",
      "contextIndex": 17
    }
  },
  {
    "id": 76,
    "context": "What was your hotel like on vacation? The hotel where we stayed on vacation _________________________________.",
    "originalCorrect": "had a beautiful swimming pool and a private beach",
    "fullSentence": "What was your hotel like on vacation? The hotel where we stayed on vacation had a beautiful swimming pool and a private beach .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "was",
          "options": [
            "of",
            "an",
            "was",
            "can"
          ]
        },
        {
          "index": 5,
          "answer": "on",
          "options": [
            "may",
            "on",
            "about",
            "by"
          ]
        },
        {
          "index": 7,
          "answer": "the",
          "options": [
            "the",
            "at",
            "has",
            "so"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "private",
      "contextIndex": 21
    }
  },
  {
    "id": 77,
    "context": "We need to discuss the new proposal. I was wondering _________________________________.",
    "originalCorrect": "if you would be available to meet sometime next week",
    "fullSentence": "We need to discuss the new proposal. I was wondering if you would be available to meet sometime next week .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "for",
            "about",
            "had"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "with",
            "was",
            "the",
            "would"
          ]
        },
        {
          "index": 8,
          "answer": "was",
          "options": [
            "does",
            "about",
            "are",
            "was"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "wondering",
      "contextIndex": 9
    }
  },
  {
    "id": 78,
    "context": "Why can't we go to the park? We can’t go _________________________________.",
    "originalCorrect": "to the park because closed today for a special event it's is",
    "fullSentence": "Why can't we go to the park? We can’t go to the park because closed today for a special event it's is .",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "to",
          "options": [
            "about",
            "have",
            "to",
            "could"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "and",
            "the",
            "when",
            "so"
          ]
        },
        {
          "index": 10,
          "answer": "to",
          "options": [
            "must",
            "by",
            "about",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "because",
      "contextIndex": 13
    }
  },
  {
    "id": 79,
    "context": "What's a good habit for computer users? It is important to remember _________________________________.",
    "originalCorrect": "that you should always back up your computer files regularly",
    "fullSentence": "What's a good habit for computer users? It is important to remember that you should always back up your computer files regularly .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "a",
          "options": [
            "on",
            "in",
            "are",
            "a"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "to",
            "for",
            "by",
            "shall"
          ]
        },
        {
          "index": 8,
          "answer": "is",
          "options": [
            "is",
            "a",
            "have",
            "does"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "remember",
      "contextIndex": 11
    }
  },
  {
    "id": 80,
    "context": "I'm trying to make some coffee. Could you explain _________________________________?",
    "originalCorrect": "to this new coffee machine in the kitchen how /use",
    "fullSentence": "I'm trying to make some coffee. Could you explain to this new coffee machine in the kitchen how /use ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "on",
            "to",
            "do",
            "am"
          ]
        },
        {
          "index": 6,
          "answer": "could",
          "options": [
            "at",
            "could",
            "until",
            "as"
          ]
        },
        {
          "index": 9,
          "answer": "to",
          "options": [
            "were",
            "an",
            "to",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "explain",
      "contextIndex": 8
    }
  },
  {
    "id": 81,
    "context": "D id you enjoy the documentary last night? The documentary about penguins _________________________________.",
    "originalCorrect": "was much more informative than I had expected it to be",
    "fullSentence": "D id you enjoy the documentary last night? The documentary about penguins was much more informative than I had expected it to be .",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "the",
          "options": [
            "shall",
            "as",
            "were",
            "the"
          ]
        },
        {
          "index": 8,
          "answer": "the",
          "options": [
            "from",
            "the",
            "being",
            "are"
          ]
        },
        {
          "index": 10,
          "answer": "about",
          "options": [
            "am",
            "must",
            "are",
            "about"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "documentary",
      "contextIndex": 5
    }
  },
  {
    "id": 82,
    "context": "What are the requirements for getting a driver's license? To get a driver's license, _________________________________.",
    "originalCorrect": "a must first pass both written and exam a practical /you",
    "fullSentence": "What are the requirements for getting a driver's license? To get a driver's license, a must first pass both written and exam a practical /you .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "are",
          "options": [
            "are",
            "of",
            "am",
            "will"
          ]
        },
        {
          "index": 2,
          "answer": "the",
          "options": [
            "the",
            "might",
            "shall",
            "until"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "would",
            "and",
            "to",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "driver's",
      "contextIndex": 12
    }
  },
  {
    "id": 83,
    "context": "Why is Maria upset? She was disappointed _________________________________.",
    "originalCorrect": "she was that the concert wanted to see already sold out",
    "fullSentence": "Why is Maria upset? She was disappointed she was that the concert wanted to see already sold out .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "is",
          "options": [
            "is",
            "by",
            "am",
            "with"
          ]
        },
        {
          "index": 5,
          "answer": "was",
          "options": [
            "until",
            "from",
            "must",
            "was"
          ]
        },
        {
          "index": 8,
          "answer": "was",
          "options": [
            "in",
            "was",
            "if",
            "did"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "concert",
      "contextIndex": 11
    }
  },
  {
    "id": 84,
    "context": "What are the qualifications for the new job opening? The company is looking to hire someone _________________________________.",
    "originalCorrect": "who has at least three years of experience in marketing",
    "fullSentence": "What are the qualifications for the new job opening? The company is looking to hire someone who has at least three years of experience in marketing .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "are",
          "options": [
            "was",
            "am",
            "at",
            "are"
          ]
        },
        {
          "index": 2,
          "answer": "the",
          "options": [
            "at",
            "so",
            "the",
            "will"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "for",
            "so",
            "are",
            "had"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "looking",
      "contextIndex": 12
    }
  },
  {
    "id": 85,
    "context": "It's almost the end of the year already. I can't believe _________________________________.",
    "originalCorrect": "how quickly this year has gone by so far",
    "fullSentence": "It's almost the end of the year already. I can't believe how quickly this year has gone by so far .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "the",
          "options": [
            "the",
            "if",
            "can",
            "have"
          ]
        },
        {
          "index": 4,
          "answer": "of",
          "options": [
            "of",
            "until",
            "might",
            "been"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "being",
            "in",
            "with",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "quickly",
      "contextIndex": 12
    }
  },
  {
    "id": 86,
    "context": "What should we do about the project proposal? Before we make a final decision, _________________________________.",
    "originalCorrect": "we should consider all of the available options carefully",
    "fullSentence": "What should we do about the project proposal? Before we make a final decision, we should consider all of the available options carefully .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "should",
          "options": [
            "although",
            "should",
            "on",
            "but"
          ]
        },
        {
          "index": 3,
          "answer": "do",
          "options": [
            "do",
            "but",
            "the",
            "about"
          ]
        },
        {
          "index": 4,
          "answer": "about",
          "options": [
            "a",
            "an",
            "shall",
            "about"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "carefully",
      "contextIndex": 22
    }
  },
  {
    "id": 87,
    "context": "Why are there no cars parked here? The new city regulation _________________________________.",
    "originalCorrect": "prohibits people from parking on this street during weekdays",
    "fullSentence": "Why are there no cars parked here? The new city regulation prohibits people from parking on this street during weekdays .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "are",
          "options": [
            "but",
            "had",
            "are",
            "in"
          ]
        },
        {
          "index": 7,
          "answer": "the",
          "options": [
            "the",
            "been",
            "be",
            "am"
          ]
        },
        {
          "index": 13,
          "answer": "from",
          "options": [
            "from",
            "for",
            "by",
            "if"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "prohibits",
      "contextIndex": 11
    }
  },
  {
    "id": 88,
    "context": "What did your manager want to talk about? My manager asked me _________________________________.",
    "originalCorrect": "if I could finish this report by the end of the week",
    "fullSentence": "What did your manager want to talk about? My manager asked me if I could finish this report by the end of the week .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "with",
            "when",
            "for",
            "did"
          ]
        },
        {
          "index": 5,
          "answer": "to",
          "options": [
            "from",
            "shall",
            "but",
            "to"
          ]
        },
        {
          "index": 7,
          "answer": "about",
          "options": [
            "should",
            "about",
            "if",
            "but"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "manager",
      "contextIndex": 9
    }
  },
  {
    "id": 89,
    "context": "Are you going to your family reunion? Yes. It has been a long time _________________________________.",
    "originalCorrect": "since I last saw my cousins, who live in Australia",
    "fullSentence": "Are you going to your family reunion? Yes. It has been a long time since I last saw my cousins, who live in Australia .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "are",
          "options": [
            "are",
            "be",
            "about",
            "to"
          ]
        },
        {
          "index": 3,
          "answer": "to",
          "options": [
            "to",
            "being",
            "but",
            "am"
          ]
        },
        {
          "index": 9,
          "answer": "has",
          "options": [
            "when",
            "shall",
            "if",
            "has"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "cousins",
      "contextIndex": 19
    }
  },
  {
    "id": 90,
    "context": "What are you studying in your art class? The art class I am taking this semester _________________________________.",
    "originalCorrect": "is focused on watercolor painting techniques and color theory",
    "fullSentence": "What are you studying in your art class? The art class I am taking this semester is focused on watercolor painting techniques and color theory .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "are",
          "options": [
            "are",
            "am",
            "is",
            "can"
          ]
        },
        {
          "index": 4,
          "answer": "in",
          "options": [
            "in",
            "of",
            "had",
            "by"
          ]
        },
        {
          "index": 8,
          "answer": "the",
          "options": [
            "but",
            "am",
            "when",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "painting",
      "contextIndex": 20
    }
  },
  {
    "id": 91,
    "context": "Is my information safe on this website? The website's privacy policy states _________________________________.",
    "originalCorrect": "that it will not share user data with any third parties",
    "fullSentence": "Is my information safe on this website? The website's privacy policy states that it will not share user data with any third parties .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "is",
          "options": [
            "and",
            "may",
            "is",
            "although"
          ]
        },
        {
          "index": 4,
          "answer": "on",
          "options": [
            "on",
            "with",
            "do",
            "in"
          ]
        },
        {
          "index": 7,
          "answer": "the",
          "options": [
            "being",
            "the",
            "so",
            "and"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "website's",
      "contextIndex": 8
    }
  },
  {
    "id": 92,
    "context": "How did Tom do on his final exam? Even though he studied very hard, _________________________________.",
    "originalCorrect": "he did not pass the final exam on his first attempt",
    "fullSentence": "How did Tom do on his final exam? Even though he studied very hard, he did not pass the final exam on his first attempt .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "from",
            "could",
            "did",
            "to"
          ]
        },
        {
          "index": 3,
          "answer": "do",
          "options": [
            "do",
            "at",
            "would",
            "but"
          ]
        },
        {
          "index": 4,
          "answer": "on",
          "options": [
            "while",
            "does",
            "on",
            "do"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "attempt",
      "contextIndex": 24
    }
  },
  {
    "id": 93,
    "context": "Do you have any advice for booking flights? I would recommend _________________________________.",
    "originalCorrect": "that you book your flight well in advance for a good price",
    "fullSentence": "Do you have any advice for booking flights? I would recommend that you book your flight well in advance for a good price .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "do",
          "options": [
            "do",
            "but",
            "because",
            "if"
          ]
        },
        {
          "index": 2,
          "answer": "have",
          "options": [
            "but",
            "have",
            "shall",
            "will"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "may",
            "shall",
            "in",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "recommend",
      "contextIndex": 10
    }
  },
  {
    "id": 94,
    "context": "What is that book you are reading about? The historical novel is about _________________________________.",
    "originalCorrect": "the a young woman who lived during French Revolution",
    "fullSentence": "What is that book you are reading about? The historical novel is about the a young woman who lived during French Revolution .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "is",
          "options": [
            "to",
            "as",
            "is",
            "from"
          ]
        },
        {
          "index": 5,
          "answer": "are",
          "options": [
            "are",
            "may",
            "might",
            "to"
          ]
        },
        {
          "index": 7,
          "answer": "about",
          "options": [
            "on",
            "as",
            "in",
            "about"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "reading",
      "contextIndex": 6
    }
  },
  {
    "id": 95,
    "context": "Which of these two phones should I buy? The main difference between the two phones _________________________________.",
    "originalCorrect": "is that one has a much better camera than the other",
    "fullSentence": "Which of these two phones should I buy? The main difference between the two phones is that one has a much better camera than the other .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "of",
          "options": [
            "by",
            "of",
            "did",
            "so"
          ]
        },
        {
          "index": 5,
          "answer": "should",
          "options": [
            "at",
            "should",
            "be",
            "been"
          ]
        },
        {
          "index": 8,
          "answer": "the",
          "options": [
            "a",
            "been",
            "the",
            "were"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "between",
      "contextIndex": 11
    }
  },
  {
    "id": 96,
    "context": "Why did he choose that job offer? He decided to take the job _________________________________.",
    "originalCorrect": "because it offered a higher salary and better benefits",
    "fullSentence": "Why did he choose that job offer? He decided to take the job because it offered a higher salary and better benefits .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "did",
            "as",
            "be",
            "from"
          ]
        },
        {
          "index": 9,
          "answer": "to",
          "options": [
            "to",
            "at",
            "on",
            "a"
          ]
        },
        {
          "index": 11,
          "answer": "the",
          "options": [
            "the",
            "must",
            "to",
            "but"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "because",
      "contextIndex": 13
    }
  },
  {
    "id": 97,
    "context": "Is there anything I should do before closing the office? Please make sure _________________________________.",
    "originalCorrect": "that you turned off all the lights before leave have /you",
    "fullSentence": "Is there anything I should do before closing the office? Please make sure that you turned off all the lights before leave have /you .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "is",
          "options": [
            "to",
            "with",
            "a",
            "is"
          ]
        },
        {
          "index": 4,
          "answer": "should",
          "options": [
            "being",
            "about",
            "should",
            "been"
          ]
        },
        {
          "index": 5,
          "answer": "do",
          "options": [
            "do",
            "but",
            "or",
            "at"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "closing",
      "contextIndex": 7
    }
  },
  {
    "id": 98,
    "context": "Did the mechanic find out what was wrong with your car? The problem with the car _________________________________.",
    "originalCorrect": "was caused by a small leak in one of the tires",
    "fullSentence": "Did the mechanic find out what was wrong with your car? The problem with the car was caused by a small leak in one of the tires .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "did",
          "options": [
            "did",
            "being",
            "for",
            "on"
          ]
        },
        {
          "index": 1,
          "answer": "the",
          "options": [
            "the",
            "was",
            "been",
            "shall"
          ]
        },
        {
          "index": 6,
          "answer": "was",
          "options": [
            "so",
            "been",
            "was",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "problem",
      "contextIndex": 12
    }
  },
  {
    "id": 99,
    "context": "What did you think of Sarah's performance? I was really impressed by _________________________________.",
    "originalCorrect": "how well she performed on stage despite being so nervous",
    "fullSentence": "What did you think of Sarah's performance? I was really impressed by how well she performed on stage despite being so nervous .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "did",
          "options": [
            "although",
            "be",
            "did",
            "would"
          ]
        },
        {
          "index": 4,
          "answer": "of",
          "options": [
            "of",
            "by",
            "could",
            "since"
          ]
        },
        {
          "index": 8,
          "answer": "was",
          "options": [
            "at",
            "was",
            "to",
            "should"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "impressed",
      "contextIndex": 10
    }
  },
  {
    "id": 100,
    "context": "Why do people emphasize eating a good breakfast? It is often said _________________________________.",
    "originalCorrect": "is that breakfast the most important meal of the day",
    "fullSentence": "Why do people emphasize eating a good breakfast? It is often said is that breakfast the most important meal of the day .",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "do",
          "options": [
            "by",
            "will",
            "but",
            "do"
          ]
        },
        {
          "index": 5,
          "answer": "a",
          "options": [
            "is",
            "does",
            "being",
            "a"
          ]
        },
        {
          "index": 9,
          "answer": "is",
          "options": [
            "am",
            "to",
            "by",
            "is"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "breakfast",
      "contextIndex": 14
    }
  },
  {
    "id": 101,
    "context": "I'm considering minoring in philosophy. How _________________________________?",
    "originalCorrect": "do you think it will complement your major studies",
    "fullSentence": "I'm considering minoring in philosophy. How do you think it will complement your major studies ?",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "in",
          "options": [
            "a",
            "in",
            "could",
            "while"
          ]
        },
        {
          "index": 6,
          "answer": "do",
          "options": [
            "do",
            "been",
            "since",
            "might"
          ]
        },
        {
          "index": 10,
          "answer": "will",
          "options": [
            "will",
            "so",
            "from",
            "because"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "complement",
      "contextIndex": 11
    }
  },
  {
    "id": 102,
    "context": "The campus Wi-Fi is extremely slow today. You_________________________________ main library.",
    "originalCorrect": "can report the issue at the help desk located in the IT",
    "fullSentence": "The campus Wi-Fi is extremely slow today. You can report the issue at the help desk located in the IT main library.",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "until",
            "of",
            "would"
          ]
        },
        {
          "index": 3,
          "answer": "is",
          "options": [
            "to",
            "while",
            "is",
            "with"
          ]
        },
        {
          "index": 8,
          "answer": "can",
          "options": [
            "from",
            "by",
            "has",
            "can"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "extremely",
      "contextIndex": 4
    }
  },
  {
    "id": 103,
    "context": "My student visa expires at the end of the semester. _________________________________?",
    "originalCorrect": "have you submitted all paperwork the renewal for /the necessary",
    "fullSentence": "My student visa expires at the end of the semester. have you submitted all paperwork the renewal for /the necessary ?",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "at",
          "options": [
            "did",
            "at",
            "about",
            "in"
          ]
        },
        {
          "index": 5,
          "answer": "the",
          "options": [
            "is",
            "will",
            "the",
            "about"
          ]
        },
        {
          "index": 7,
          "answer": "of",
          "options": [
            "of",
            "when",
            "a",
            "was"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "renewal",
      "contextIndex": 16
    }
  },
  {
    "id": 104,
    "context": "Professor Chen's lecture was very inspiring. I agree. _________________________________.",
    "originalCorrect": "the section about his environmental research was particularly engaging",
    "fullSentence": "Professor Chen's lecture was very inspiring. I agree. the section about his environmental research was particularly engaging .",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "was",
          "options": [
            "or",
            "to",
            "was",
            "so"
          ]
        },
        {
          "index": 8,
          "answer": "the",
          "options": [
            "the",
            "while",
            "in",
            "can"
          ]
        },
        {
          "index": 10,
          "answer": "about",
          "options": [
            "to",
            "about",
            "of",
            "can"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "research",
      "contextIndex": 13
    }
  },
  {
    "id": 105,
    "context": "I need to book a study room for our group project. _________________________________the weekend?",
    "originalCorrect": "are there any meeting room in the system for large /available",
    "fullSentence": "I need to book a study room for our group project. are there any meeting room in the system for large /available the weekend?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "but",
            "since",
            "an",
            "to"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "a",
            "of",
            "in",
            "might"
          ]
        },
        {
          "index": 7,
          "answer": "for",
          "options": [
            "so",
            "is",
            "for",
            "were"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "weekend",
      "contextIndex": 23
    }
  },
  {
    "id": 106,
    "context": "I'm looking for a part-time job near the college. Have_________________________________?",
    "originalCorrect": "you seen any job openings posted in the library recently",
    "fullSentence": "I'm looking for a part-time job near the college. Have you seen any job openings posted in the library recently ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "for",
          "options": [
            "with",
            "but",
            "because",
            "for"
          ]
        },
        {
          "index": 3,
          "answer": "a",
          "options": [
            "by",
            "must",
            "in",
            "a"
          ]
        },
        {
          "index": 7,
          "answer": "the",
          "options": [
            "could",
            "the",
            "can",
            "is"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "college",
      "contextIndex": 8
    }
  },
  {
    "id": 107,
    "context": "The deadline for course registration is fast approaching. _________________________________ advisor?",
    "originalCorrect": "have you forgotten to schedule a meeting with your",
    "fullSentence": "The deadline for course registration is fast approaching. have you forgotten to schedule a meeting with your advisor?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "with",
            "be",
            "in"
          ]
        },
        {
          "index": 2,
          "answer": "for",
          "options": [
            "for",
            "has",
            "at",
            "with"
          ]
        },
        {
          "index": 5,
          "answer": "is",
          "options": [
            "is",
            "might",
            "if",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "forgotten",
      "contextIndex": 10
    }
  },
  {
    "id": 108,
    "context": "I'm thinking about transferring to a different university. What_________________________________?",
    "originalCorrect": "are the most challenging application requirements for the process",
    "fullSentence": "I'm thinking about transferring to a different university. What are the most challenging application requirements for the process ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "are",
            "to",
            "about",
            "but"
          ]
        },
        {
          "index": 4,
          "answer": "to",
          "options": [
            "do",
            "been",
            "because",
            "to"
          ]
        },
        {
          "index": 5,
          "answer": "a",
          "options": [
            "a",
            "being",
            "about",
            "had"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "university",
      "contextIndex": 7
    }
  },
  {
    "id": 109,
    "context": "I failed the practice midterm yesterday. _________________________________ actual one?",
    "originalCorrect": "how will you plan to study better for the",
    "fullSentence": "I failed the practice midterm yesterday. how will you plan to study better for the actual one?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "the",
          "options": [
            "when",
            "the",
            "about",
            "for"
          ]
        },
        {
          "index": 7,
          "answer": "will",
          "options": [
            "and",
            "by",
            "did",
            "will"
          ]
        },
        {
          "index": 10,
          "answer": "to",
          "options": [
            "is",
            "for",
            "to",
            "of"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "practice",
      "contextIndex": 3
    }
  },
  {
    "id": 110,
    "context": "I heard the cafeteria food has improved. _________________________________.",
    "originalCorrect": "we should try out the new specials for lunch today Exercise 2",
    "fullSentence": "I heard the cafeteria food has improved. we should try out the new specials for lunch today Exercise 2 .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "the",
          "options": [
            "to",
            "a",
            "the",
            "if"
          ]
        },
        {
          "index": 5,
          "answer": "has",
          "options": [
            "has",
            "could",
            "will",
            "might"
          ]
        },
        {
          "index": 8,
          "answer": "should",
          "options": [
            "of",
            "by",
            "does",
            "should"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "exercise",
      "contextIndex": 17
    }
  },
  {
    "id": 111,
    "context": "The historical artifacts exhibition opens next week. _________________________________ for students?",
    "originalCorrect": "are there discount tickets or a special rate",
    "fullSentence": "The historical artifacts exhibition opens next week. are there discount tickets or a special rate for students?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "when",
            "shall",
            "the",
            "was"
          ]
        },
        {
          "index": 7,
          "answer": "are",
          "options": [
            "so",
            "should",
            "are",
            "in"
          ]
        },
        {
          "index": 11,
          "answer": "or",
          "options": [
            "for",
            "or",
            "although",
            "would"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "historical",
      "contextIndex": 1
    }
  },
  {
    "id": 112,
    "context": "I need to print my essay before class starts. _________________________________ located?",
    "originalCorrect": "do you know where the closest printer to the lecture building is",
    "fullSentence": "I need to print my essay before class starts. do you know where the closest printer to the lecture building is located?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "are",
            "at",
            "to",
            "about"
          ]
        },
        {
          "index": 9,
          "answer": "do",
          "options": [
            "by",
            "has",
            "while",
            "do"
          ]
        },
        {
          "index": 13,
          "answer": "the",
          "options": [
            "was",
            "the",
            "with",
            "might"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "lecture",
      "contextIndex": 18
    }
  },
  {
    "id": 113,
    "context": "I'm confused about the citation format we should use. You should_________________________________.",
    "originalCorrect": "look up the style guide on the writing center's website to clarify",
    "fullSentence": "I'm confused about the citation format we should use. You should look up the style guide on the writing center's website to clarify .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "while",
            "may",
            "were",
            "about"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "or",
            "of",
            "was",
            "the"
          ]
        },
        {
          "index": 7,
          "answer": "should",
          "options": [
            "by",
            "to",
            "an",
            "should"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "writing",
      "contextIndex": 18
    }
  },
  {
    "id": 114,
    "context": "My laptop screen cracked this morning. _________________________________of it.",
    "originalCorrect": "you should contact the tech support department to take care",
    "fullSentence": "My laptop screen cracked this morning. you should contact the tech support department to take care of it.",
    "grammar": {
      "blanks": [
        {
          "index": 7,
          "answer": "should",
          "options": [
            "be",
            "a",
            "should",
            "to"
          ]
        },
        {
          "index": 9,
          "answer": "the",
          "options": [
            "but",
            "is",
            "must",
            "the"
          ]
        },
        {
          "index": 13,
          "answer": "to",
          "options": [
            "for",
            "in",
            "so",
            "to"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "morning",
      "contextIndex": 5
    }
  },
  {
    "id": 115,
    "context": "I'm trying to find an internship for the summer. Have_________________________________?",
    "originalCorrect": "you searched the university career services portal yet",
    "fullSentence": "I'm trying to find an internship for the summer. Have you searched the university career services portal yet ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "be",
            "so",
            "of"
          ]
        },
        {
          "index": 4,
          "answer": "an",
          "options": [
            "can",
            "to",
            "an",
            "but"
          ]
        },
        {
          "index": 6,
          "answer": "for",
          "options": [
            "might",
            "to",
            "for",
            "could"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "searched",
      "contextIndex": 11
    }
  },
  {
    "id": 116,
    "context": "The presentation slides are too small to read. _________________________________ larger?",
    "originalCorrect": "how can I adjust the projector settings to make the text",
    "fullSentence": "The presentation slides are too small to read. how can I adjust the projector settings to make the text larger?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "can",
            "being",
            "has",
            "the"
          ]
        },
        {
          "index": 3,
          "answer": "are",
          "options": [
            "are",
            "or",
            "can",
            "an"
          ]
        },
        {
          "index": 6,
          "answer": "to",
          "options": [
            "about",
            "to",
            "at",
            "will"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "presentation",
      "contextIndex": 1
    }
  },
  {
    "id": 117,
    "context": "I'm struggling with the organic chemistry lab reports. Have you _________________________________?",
    "originalCorrect": "tried to discuss your problems with the teaching assistant",
    "fullSentence": "I'm struggling with the organic chemistry lab reports. Have you tried to discuss your problems with the teaching assistant ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "with",
          "options": [
            "with",
            "were",
            "will",
            "from"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "the",
            "had",
            "an",
            "can"
          ]
        },
        {
          "index": 8,
          "answer": "have",
          "options": [
            "the",
            "was",
            "might",
            "have"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "teaching",
      "contextIndex": 17
    }
  },
  {
    "id": 118,
    "context": "Our class field trip is scheduled for next month. Did _________________________________ the trip?",
    "originalCorrect": "your parents remember to sign the necessary permission form for",
    "fullSentence": "Our class field trip is scheduled for next month. Did your parents remember to sign the necessary permission form for the trip?",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "is",
          "options": [
            "on",
            "be",
            "can",
            "is"
          ]
        },
        {
          "index": 6,
          "answer": "for",
          "options": [
            "for",
            "be",
            "been",
            "had"
          ]
        },
        {
          "index": 9,
          "answer": "did",
          "options": [
            "did",
            "at",
            "should",
            "an"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "parents",
      "contextIndex": 11
    }
  },
  {
    "id": 119,
    "context": "I need to improve my public speaking skills. Is there_________________________________?",
    "originalCorrect": "a workshop available on campus that focuses on public speaking",
    "fullSentence": "I need to improve my public speaking skills. Is there a workshop available on campus that focuses on public speaking ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "the",
            "on",
            "if"
          ]
        },
        {
          "index": 8,
          "answer": "is",
          "options": [
            "is",
            "by",
            "had",
            "being"
          ]
        },
        {
          "index": 10,
          "answer": "a",
          "options": [
            "a",
            "does",
            "had",
            "for"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "available",
      "contextIndex": 12
    }
  },
  {
    "id": 120,
    "context": "The student government election results are in. Do you _________________________________?",
    "originalCorrect": "know who the newly elected president and are vice president Exercise 3",
    "fullSentence": "The student government election results are in. Do you know who the newly elected president and are vice president Exercise 3 ?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "on",
            "about",
            "because"
          ]
        },
        {
          "index": 5,
          "answer": "are",
          "options": [
            "for",
            "by",
            "are",
            "as"
          ]
        },
        {
          "index": 6,
          "answer": "in",
          "options": [
            "are",
            "can",
            "in",
            "at"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "government",
      "contextIndex": 2
    }
  },
  {
    "id": 121,
    "context": "I missed the first week of the programming course. _________________________________material?",
    "originalCorrect": "how are you planning to catch up on the missed lecture",
    "fullSentence": "I missed the first week of the programming course. how are you planning to catch up on the missed lecture material?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "the",
          "options": [
            "the",
            "but",
            "when",
            "will"
          ]
        },
        {
          "index": 5,
          "answer": "of",
          "options": [
            "could",
            "of",
            "should",
            "by"
          ]
        },
        {
          "index": 6,
          "answer": "the",
          "options": [
            "by",
            "been",
            "and",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "lecture",
      "contextIndex": 19
    }
  },
  {
    "id": 122,
    "context": "I'm excited about the upcoming cultural festival. _________________________________ there?",
    "originalCorrect": "what kind of performances and food will be available",
    "fullSentence": "I'm excited about the upcoming cultural festival. what kind of performances and food will be available there?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "in",
            "was",
            "although",
            "about"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "should",
            "about",
            "the",
            "on"
          ]
        },
        {
          "index": 9,
          "answer": "of",
          "options": [
            "might",
            "do",
            "to",
            "of"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "excited",
      "contextIndex": 1
    }
  },
  {
    "id": 123,
    "context": "I need to reserve some books from the archives. When _________________________________?",
    "originalCorrect": "are the special collections archives available for students to access",
    "fullSentence": "I need to reserve some books from the archives. When are the special collections archives available for students to access ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "although",
            "at",
            "do"
          ]
        },
        {
          "index": 6,
          "answer": "from",
          "options": [
            "should",
            "from",
            "or",
            "on"
          ]
        },
        {
          "index": 7,
          "answer": "the",
          "options": [
            "to",
            "for",
            "might",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "reserve",
      "contextIndex": 3
    }
  },
  {
    "id": 124,
    "context": "The gym is getting new equipment next week. _________________________________?",
    "originalCorrect": "what are they planning to do with the old equipment",
    "fullSentence": "The gym is getting new equipment next week. what are they planning to do with the old equipment ?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "when",
            "on",
            "has",
            "the"
          ]
        },
        {
          "index": 2,
          "answer": "is",
          "options": [
            "is",
            "were",
            "at",
            "do"
          ]
        },
        {
          "index": 9,
          "answer": "are",
          "options": [
            "in",
            "had",
            "so",
            "are"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "planning",
      "contextIndex": 11
    }
  },
  {
    "id": 125,
    "context": "I want to change my major from science to arts. You should_________________________________.",
    "originalCorrect": "schedule an appointment with your academic advisor to discuss this",
    "fullSentence": "I want to change my major from science to arts. You should schedule an appointment with your academic advisor to discuss this .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "or",
            "to",
            "be",
            "am"
          ]
        },
        {
          "index": 6,
          "answer": "from",
          "options": [
            "from",
            "and",
            "a",
            "am"
          ]
        },
        {
          "index": 8,
          "answer": "to",
          "options": [
            "to",
            "in",
            "will",
            "if"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "academic",
      "contextIndex": 17
    }
  },
  {
    "id": 126,
    "context": "I'm behind on my readings for history class. _________________________________reading time.",
    "originalCorrect": "perhaps you could find a better way to manage your",
    "fullSentence": "I'm behind on my readings for history class. perhaps you could find a better way to manage your reading time.",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "on",
          "options": [
            "on",
            "so",
            "but",
            "if"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "the",
            "did",
            "for",
            "are"
          ]
        },
        {
          "index": 10,
          "answer": "could",
          "options": [
            "at",
            "of",
            "although",
            "could"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "reading",
      "contextIndex": 18
    }
  },
  {
    "id": 127,
    "context": "I need to learn how to analyze data in Python. _________________________________ department?",
    "originalCorrect": "are there any specialized courses offered in the computer science",
    "fullSentence": "I need to learn how to analyze data in Python. are there any specialized courses offered in the computer science department?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "about",
            "did",
            "to",
            "in"
          ]
        },
        {
          "index": 5,
          "answer": "to",
          "options": [
            "to",
            "be",
            "an",
            "were"
          ]
        },
        {
          "index": 8,
          "answer": "in",
          "options": [
            "in",
            "must",
            "are",
            "since"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "courses",
      "contextIndex": 14
    }
  },
  {
    "id": 128,
    "context": "My roommate is moving out at the end of the year. Are _________________________________?",
    "originalCorrect": "you already looking for a new roommate for next semester",
    "fullSentence": "My roommate is moving out at the end of the year. Are you already looking for a new roommate for next semester ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "is",
          "options": [
            "is",
            "was",
            "by",
            "should"
          ]
        },
        {
          "index": 5,
          "answer": "at",
          "options": [
            "at",
            "will",
            "with",
            "the"
          ]
        },
        {
          "index": 6,
          "answer": "the",
          "options": [
            "if",
            "in",
            "be",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "roommate",
      "contextIndex": 18
    }
  },
  {
    "id": 129,
    "context": "The guest speaker gave a fascinating talk. _________________________________ general research?",
    "originalCorrect": "was the discussion more about his new book or",
    "fullSentence": "The guest speaker gave a fascinating talk. was the discussion more about his new book or general research?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "been",
            "may",
            "to"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "would",
            "does",
            "a",
            "shall"
          ]
        },
        {
          "index": 7,
          "answer": "was",
          "options": [
            "should",
            "with",
            "was",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "discussion",
      "contextIndex": 9
    }
  },
  {
    "id": 130,
    "context": "I have to renew my student ID card. Do you know_________________________________?",
    "originalCorrect": "where the main campus services office for renewals located is Exercise 4",
    "fullSentence": "I have to renew my student ID card. Do you know where the main campus services office for renewals located is Exercise 4 ?",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "have",
          "options": [
            "have",
            "but",
            "for",
            "should"
          ]
        },
        {
          "index": 2,
          "answer": "to",
          "options": [
            "to",
            "in",
            "or",
            "does"
          ]
        },
        {
          "index": 8,
          "answer": "do",
          "options": [
            "as",
            "do",
            "would",
            "of"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "services",
      "contextIndex": 15
    }
  },
  {
    "id": 131,
    "context": "I need to prepare for my meeting with the Dean tomorrow. _________________________________.",
    "originalCorrect": "you should prepare and prioritize the main issues to discuss",
    "fullSentence": "I need to prepare for my meeting with the Dean tomorrow. you should prepare and prioritize the main issues to discuss .",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "but",
            "and",
            "was",
            "to"
          ]
        },
        {
          "index": 4,
          "answer": "for",
          "options": [
            "for",
            "in",
            "but",
            "until"
          ]
        },
        {
          "index": 7,
          "answer": "with",
          "options": [
            "but",
            "and",
            "from",
            "with"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "meeting",
      "contextIndex": 6
    }
  },
  {
    "id": 132,
    "context": "The course syllabus mentioned a required textbook. Do you _________________________________ ?",
    "originalCorrect": "know the best place to buy a used copy is /where",
    "fullSentence": "The course syllabus mentioned a required textbook. Do you know the best place to buy a used copy is /where ?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "about",
            "the",
            "shall",
            "did"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "a",
            "or",
            "an",
            "may"
          ]
        },
        {
          "index": 7,
          "answer": "do",
          "options": [
            "should",
            "by",
            "do",
            "although"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "required",
      "contextIndex": 5
    }
  },
  {
    "id": 133,
    "context": "The elevator in the science building is out of service again. I already asked_________________________________.",
    "originalCorrect": "the maintenance department when they would fix it",
    "fullSentence": "The elevator in the science building is out of service again. I already asked the maintenance department when they would fix it .",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "shall",
            "may",
            "to",
            "the"
          ]
        },
        {
          "index": 2,
          "answer": "in",
          "options": [
            "since",
            "in",
            "about",
            "for"
          ]
        },
        {
          "index": 3,
          "answer": "the",
          "options": [
            "should",
            "is",
            "a",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "building",
      "contextIndex": 5
    }
  },
  {
    "id": 134,
    "context": "I’m thinking about starting a student investment club. _________________________________ the club.",
    "originalCorrect": "you need to get official university recognition for",
    "fullSentence": "I’m thinking about starting a student investment club. you need to get official university recognition for the club.",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "can",
            "and",
            "but",
            "about"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "while",
            "with",
            "but",
            "a"
          ]
        },
        {
          "index": 10,
          "answer": "to",
          "options": [
            "should",
            "to",
            "will",
            "while"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "starting",
      "contextIndex": 3
    }
  },
  {
    "id": 135,
    "context": "My presentation feedback was a little harsh. _________________________________?",
    "originalCorrect": "what were the comments specifically about professor's",
    "fullSentence": "My presentation feedback was a little harsh. what were the comments specifically about professor's ?",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "was",
          "options": [
            "on",
            "has",
            "in",
            "was"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "a",
            "have",
            "as",
            "by"
          ]
        },
        {
          "index": 8,
          "answer": "were",
          "options": [
            "by",
            "is",
            "were",
            "been"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "professor's",
      "contextIndex": 13
    }
  },
  {
    "id": 136,
    "context": "I have to retake the English proficiency test next month. _________________________________ study with?",
    "originalCorrect": "where did you find the necessary practice materials to",
    "fullSentence": "I have to retake the English proficiency test next month. where did you find the necessary practice materials to study with?",
    "grammar": {
      "blanks": [
        {
          "index": 1,
          "answer": "have",
          "options": [
            "might",
            "have",
            "does",
            "is"
          ]
        },
        {
          "index": 2,
          "answer": "to",
          "options": [
            "in",
            "about",
            "from",
            "to"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "do",
            "for",
            "the",
            "so"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "practice",
      "contextIndex": 16
    }
  },
  {
    "id": 137,
    "context": "The campus newspaper is looking for new writers. _________________________________articles?",
    "originalCorrect": "when is the deadline to submit your application and",
    "fullSentence": "The campus newspaper is looking for new writers. when is the deadline to submit your application and articles?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "may",
            "the",
            "are",
            "in"
          ]
        },
        {
          "index": 3,
          "answer": "is",
          "options": [
            "is",
            "from",
            "or",
            "while"
          ]
        },
        {
          "index": 5,
          "answer": "for",
          "options": [
            "for",
            "although",
            "do",
            "or"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "writers",
      "contextIndex": 7
    }
  },
  {
    "id": 138,
    "context": "I'm applying for a research assistant position in the lab. What research _________________________________?",
    "originalCorrect": "skills do you specifically hope to gain from the position",
    "fullSentence": "I'm applying for a research assistant position in the lab. What research skills do you specifically hope to gain from the position ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "for",
          "options": [
            "for",
            "does",
            "had",
            "because"
          ]
        },
        {
          "index": 3,
          "answer": "a",
          "options": [
            "a",
            "if",
            "about",
            "since"
          ]
        },
        {
          "index": 7,
          "answer": "in",
          "options": [
            "in",
            "at",
            "does",
            "an"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "position",
      "contextIndex": 6
    }
  },
  {
    "id": 139,
    "context": "I can’t log into the online learning portal. You _________________________________.",
    "originalCorrect": "should contact the help center to reset your password",
    "fullSentence": "I can’t log into the online learning portal. You should contact the help center to reset your password .",
    "grammar": {
      "blanks": [
        {
          "index": 4,
          "answer": "the",
          "options": [
            "the",
            "were",
            "of",
            "should"
          ]
        },
        {
          "index": 9,
          "answer": "should",
          "options": [
            "were",
            "might",
            "are",
            "should"
          ]
        },
        {
          "index": 11,
          "answer": "the",
          "options": [
            "the",
            "until",
            "with",
            "have"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "learning",
      "contextIndex": 6
    }
  },
  {
    "id": 140,
    "context": "The architecture department is hosting a design competition._________________________________?",
    "originalCorrect": "what criteria will be used the winning project to judge Exercise 5",
    "fullSentence": "The architecture department is hosting a design competition. what criteria will be used the winning project to judge Exercise 5 ?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "shall",
            "until",
            "from",
            "the"
          ]
        },
        {
          "index": 3,
          "answer": "is",
          "options": [
            "from",
            "is",
            "to",
            "have"
          ]
        },
        {
          "index": 5,
          "answer": "a",
          "options": [
            "should",
            "and",
            "a",
            "am"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "hosting",
      "contextIndex": 4
    }
  },
  {
    "id": 141,
    "context": "I'm worried about getting a good letter of recommendation. _________________________________, your professor ?",
    "originalCorrect": "who should you ask to write it",
    "fullSentence": "I'm worried about getting a good letter of recommendation. who should you ask to write it , your professor ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "about",
          "options": [
            "in",
            "until",
            "of",
            "about"
          ]
        },
        {
          "index": 4,
          "answer": "a",
          "options": [
            "been",
            "did",
            "a",
            "in"
          ]
        },
        {
          "index": 7,
          "answer": "of",
          "options": [
            "a",
            "of",
            "being",
            "been"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "professor",
      "contextIndex": 18
    }
  },
  {
    "id": 142,
    "context": "The gym is completely empty right now, which is unusual. _________________________________something.",
    "originalCorrect": "maybe with or busy/ midterms everyone's",
    "fullSentence": "The gym is completely empty right now, which is unusual. maybe with or busy/ midterms everyone's something.",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "should",
            "been",
            "although",
            "the"
          ]
        },
        {
          "index": 2,
          "answer": "is",
          "options": [
            "being",
            "been",
            "as",
            "is"
          ]
        },
        {
          "index": 8,
          "answer": "is",
          "options": [
            "should",
            "as",
            "was",
            "is"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "everyone's",
      "contextIndex": 15
    }
  },
  {
    "id": 143,
    "context": "I just received a grade of 'A' on my toughest assignment. This _________________________________.",
    "originalCorrect": "definitely calls for a small celebration of you achievement",
    "fullSentence": "I just received a grade of 'A' on my toughest assignment. This definitely calls for a small celebration of you achievement .",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "a",
          "options": [
            "at",
            "might",
            "a",
            "the"
          ]
        },
        {
          "index": 5,
          "answer": "of",
          "options": [
            "a",
            "as",
            "of",
            "will"
          ]
        },
        {
          "index": 7,
          "answer": "on",
          "options": [
            "on",
            "in",
            "can",
            "an"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "celebration",
      "contextIndex": 17
    }
  },
  {
    "id": 144,
    "context": "The student loans office is raising its interest rates._________________________________ loan applications?",
    "originalCorrect": "will this only affect current students or all new",
    "fullSentence": "The student loans office is raising its interest rates. will this only affect current students or all new loan applications?",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "the",
            "have",
            "about",
            "although"
          ]
        },
        {
          "index": 4,
          "answer": "is",
          "options": [
            "an",
            "may",
            "with",
            "is"
          ]
        },
        {
          "index": 9,
          "answer": "will",
          "options": [
            "was",
            "until",
            "at",
            "will"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "interest",
      "contextIndex": 7
    }
  },
  {
    "id": 145,
    "context": "I need to drop one of my elective courses. Do you _________________________________?",
    "originalCorrect": "know what the official deadline is for dropping a course",
    "fullSentence": "I need to drop one of my elective courses. Do you know what the official deadline is for dropping a course ?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "must",
            "so",
            "but",
            "to"
          ]
        },
        {
          "index": 5,
          "answer": "of",
          "options": [
            "a",
            "if",
            "of",
            "should"
          ]
        },
        {
          "index": 9,
          "answer": "do",
          "options": [
            "do",
            "might",
            "may",
            "are"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "courses",
      "contextIndex": 8
    }
  },
  {
    "id": 146,
    "context": "My group members are not contributing enough to the project.You _________________________________.",
    "originalCorrect": "might want to tell the professor if it keeps happening",
    "fullSentence": "My group members are not contributing enough to the project.You might want to tell the professor if it keeps happening .",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "are",
          "options": [
            "are",
            "may",
            "was",
            "to"
          ]
        },
        {
          "index": 7,
          "answer": "to",
          "options": [
            "since",
            "to",
            "but",
            "of"
          ]
        },
        {
          "index": 8,
          "answer": "the",
          "options": [
            "be",
            "will",
            "to",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "members",
      "contextIndex": 2
    }
  },
  {
    "id": 147,
    "context": "I heard there’s a new tutoring service in the math department. Do _________________________________ they offer?",
    "originalCorrect": "you know what what the tutoring schedule is and",
    "fullSentence": "I heard there’s a new tutoring service in the math department. Do you know what what the tutoring schedule is and they offer?",
    "grammar": {
      "blanks": [
        {
          "index": 3,
          "answer": "a",
          "options": [
            "a",
            "were",
            "as",
            "an"
          ]
        },
        {
          "index": 7,
          "answer": "in",
          "options": [
            "can",
            "a",
            "in",
            "will"
          ]
        },
        {
          "index": 8,
          "answer": "the",
          "options": [
            "the",
            "been",
            "was",
            "shall"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "tutoring",
      "contextIndex": 5
    }
  },
  {
    "id": 148,
    "context": "The student cafeteria is running a special promotion today. Really? __ __ __ __ __ — a discount or __ __? _________________________________",
    "originalCorrect": "what does the promotion include or something free",
    "fullSentence": "The student cafeteria is running a special promotion today. Really? __ __ __ __ __ — a discount or __ __? what does the promotion include or something free",
    "grammar": {
      "blanks": [
        {
          "index": 0,
          "answer": "the",
          "options": [
            "must",
            "were",
            "the",
            "for"
          ]
        },
        {
          "index": 3,
          "answer": "is",
          "options": [
            "in",
            "since",
            "do",
            "is"
          ]
        },
        {
          "index": 5,
          "answer": "a",
          "options": [
            "for",
            "to",
            "may",
            "a"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "running",
      "contextIndex": 4
    }
  },
  {
    "id": 149,
    "context": "I can’t decide which foreign language to study next. Why _________________________________?",
    "originalCorrect": "not choose the one that best fits your career goals",
    "fullSentence": "I can’t decide which foreign language to study next. Why not choose the one that best fits your career goals ?",
    "grammar": {
      "blanks": [
        {
          "index": 6,
          "answer": "to",
          "options": [
            "with",
            "if",
            "must",
            "to"
          ]
        },
        {
          "index": 12,
          "answer": "the",
          "options": [
            "are",
            "was",
            "while",
            "the"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "language",
      "contextIndex": 5
    }
  },
  {
    "id": 150,
    "context": "I'm trying to appeal the penalty fee I received. _________________________________ process?",
    "originalCorrect": "what is the appropriate first step in the appeal",
    "fullSentence": "I'm trying to appeal the penalty fee I received. what is the appropriate first step in the appeal process?",
    "grammar": {
      "blanks": [
        {
          "index": 2,
          "answer": "to",
          "options": [
            "are",
            "to",
            "will",
            "were"
          ]
        },
        {
          "index": 4,
          "answer": "the",
          "options": [
            "the",
            "from",
            "do",
            "shall"
          ]
        },
        {
          "index": 10,
          "answer": "is",
          "options": [
            "in",
            "is",
            "had",
            "can"
          ]
        }
      ]
    },
    "vocabulary": {
      "focusWord": "process",
      "contextIndex": 18
    }
  }
];
