export interface Exercise {
  id: number;
  context: string;
  prompt?: string;
  jumbledWords: string[];
  correctSentence: string;
}

export const exercises: Exercise[] = [
  {
    "id": 1,
    "context": "I need to buy a new laptop. _________________________________ deals?",
    "jumbledWords": [
      "currently",
      "offering",
      "the",
      "best",
      "which",
      "retailers",
      "are"
    ],
    "correctSentence": "which retailers are currently offering the best"
  },
  {
    "id": 2,
    "context": "I’m thinking about starting a blog. _________________________________?",
    "jumbledWords": [
      "decided",
      "have",
      "you",
      "specific",
      "focus",
      "on",
      "a"
    ],
    "correctSentence": "have you decided on a specific focus"
  },
  {
    "id": 3,
    "context": "I'm going to study at the library this afternoon. _________________________________?",
    "jumbledWords": [
      "any",
      "borrowing",
      "while",
      "there",
      "be",
      "will",
      "materials",
      "you",
      "you’re"
    ],
    "correctSentence": "will you be borrowing any materials while you’re there"
  },
  {
    "id": 4,
    "context": "I'm thinking about getting a pet. _________________________________?",
    "jumbledWords": [
      "are",
      "you",
      "considering",
      "kind",
      "of",
      "what",
      "animal"
    ],
    "correctSentence": "what kind of animal are you considering"
  },
  {
    "id": 5,
    "context": "I’m excited to see the new science fiction movie tonight. _________________________________?",
    "jumbledWords": [
      "you",
      "could",
      "shown",
      "where",
      "it’s",
      "tell",
      "being",
      "me"
    ],
    "correctSentence": "could you tell me where it’s being shown"
  },
  {
    "id": 6,
    "context": "I heard Anna got a promotion. _________________________________?",
    "jumbledWords": [
      "a",
      "will be",
      "different",
      "if",
      "moving to",
      "know",
      "do",
      "department",
      "you",
      "she"
    ],
    "correctSentence": "do you know if she will be moving to a different department"
  },
  {
    "id": 7,
    "context": "We're planning a trip to the mountains next weekend. Can _________________________________?",
    "jumbledWords": [
      "tell me",
      "the cabins",
      "available",
      "whether",
      "will be",
      "you"
    ],
    "correctSentence": "you tell me whether the cabins will be available"
  },
  {
    "id": 8,
    "context": "The museum exhibition opens next month. _________________________________?",
    "jumbledWords": [
      "you",
      "how",
      "know",
      "tickets",
      "will cost",
      "much",
      "the",
      "do"
    ],
    "correctSentence": "do you know how much the tickets will cost"
  },
  {
    "id": 9,
    "context": "I just started learning French. _________________________________?",
    "jumbledWords": [
      "taking",
      "you",
      "lessons",
      "are",
      "where",
      "your"
    ],
    "correctSentence": "where are you taking your lessons"
  },
  {
    "id": 10,
    "context": "Why are you asking about the project deadline? I'm _________________________________",
    "jumbledWords": [
      "checking",
      "to see",
      "if",
      "has been",
      "extended",
      "it"
    ],
    "correctSentence": "checking to see if it has been extended"
  },
  {
    "id": 11,
    "context": "The final exam is scheduled for next Friday. _________________________________?",
    "jumbledWords": [
      "a study group",
      "are",
      "forming",
      "we",
      "interested in",
      "joining",
      "you",
      "are"
    ],
    "correctSentence": "we are forming a study group are you interested in joining"
  },
  {
    "id": 12,
    "context": "This restaurant has great reviews online. Let's _________________________________.",
    "jumbledWords": [
      "for dinner",
      "it",
      "try",
      "out",
      "sometime"
    ],
    "correctSentence": "try it out for dinner sometime"
  },
  {
    "id": 13,
    "context": "What did Maria ask you about the book you're reading? She _________________________________",
    "jumbledWords": [
      "wanted",
      "a copy",
      "buy",
      "she",
      "to know",
      "could",
      "where"
    ],
    "correctSentence": "she wanted to know where could buy a copy"
  },
  {
    "id": 14,
    "context": "How did you prepare for the exam? I used _________________________________.",
    "jumbledWords": [
      "by",
      "the professor",
      "was",
      "that",
      "study guide",
      "provided",
      "the"
    ],
    "correctSentence": "study guide that was by the professor provided /the"
  },
  {
    "id": 15,
    "context": "I'm trying to eat healthier these days. _________________________________?",
    "jumbledWords": [
      "recommend",
      "healthy",
      "recipes",
      "could",
      "you",
      "any"
    ],
    "correctSentence": "could you recommend any healthy recipes"
  },
  {
    "id": 16,
    "context": "My flight was delayed by three hours. That's _________________________________.",
    "jumbledWords": [
      "been",
      "must",
      "have",
      "extremely",
      "inconvenient"
    ],
    "correctSentence": "must have been extremely inconvenient"
  },
  {
    "id": 17,
    "context": "I'm looking for a new apartment. _________________________________?",
    "jumbledWords": [
      "are",
      "what",
      "you",
      "for",
      "in",
      "looking",
      "a neighborhood"
    ],
    "correctSentence": "what are you looking for in a neighborhood"
  },
  {
    "id": 18,
    "context": "What did you think of the concert? The _________________________________.",
    "jumbledWords": [
      "and",
      "great",
      "band's energy",
      "amazing,",
      "was",
      "sound quality",
      "was",
      "the"
    ],
    "correctSentence": "sound quality was amazing, and band's energy great was /the"
  },
  {
    "id": 19,
    "context": "I have an interview for a new job next week. _________________________________?",
    "jumbledWords": [
      "updated",
      "you",
      "resume",
      "have",
      "your",
      "already"
    ],
    "correctSentence": "have you already updated your resume"
  },
  {
    "id": 20,
    "context": "I need to submit my assignment by tomorrow._________________________________?",
    "jumbledWords": [
      "managed",
      "finish",
      "have",
      "to",
      "you",
      "yet",
      "it"
    ],
    "correctSentence": "have you managed to finish it yet"
  },
  {
    "id": 21,
    "context": "I can't find my keys anywhere. _________________________________?",
    "jumbledWords": [
      "you",
      "last",
      "where",
      "remember",
      "them",
      "seeing",
      "do"
    ],
    "correctSentence": "do you remember where last them seeing"
  },
  {
    "id": 22,
    "context": "We should plan a team outing soon. That _________________________________.",
    "jumbledWords": [
      "wonderful",
      "sounds",
      "suggestion",
      "like",
      "that",
      "a"
    ],
    "correctSentence": "that sounds like a wonderful suggestion"
  },
  {
    "id": 23,
    "context": "The new software update is causing some issues. _________________________________ a solution.",
    "jumbledWords": [
      "on",
      "working",
      "is",
      "IT department",
      "the"
    ],
    "correctSentence": "is working on IT department /the"
  },
  {
    "id": 24,
    "context": "I’m thinking of joining the university’s photography club. I didn't _________________________________.",
    "jumbledWords": [
      "interested",
      "you",
      "know",
      "were",
      "photography",
      "in"
    ],
    "correctSentence": "know you were interested photography /in"
  },
  {
    "id": 25,
    "context": "Do you know how to get to the city center? The easiest _________________________________.",
    "jumbledWords": [
      "reach",
      "the",
      "is",
      "to",
      "take",
      "subway",
      "way",
      "to",
      "it"
    ],
    "correctSentence": "the way to reach it is to take subway"
  },
  {
    "id": 26,
    "context": "I finally finished the novel you lent me. _________________________________?",
    "jumbledWords": [
      "overall",
      "impression",
      "your",
      "of",
      "it",
      "was",
      "what"
    ],
    "correctSentence": "what was your overall impression of it"
  },
  {
    "id": 27,
    "context": "This coffee is a bit too strong for me. _________________________________?",
    "jumbledWords": [
      "prefer",
      "you",
      "would",
      "me",
      "to",
      "make",
      "it",
      "slightly",
      "milder"
    ],
    "correctSentence": "would you prefer me to make it slightly milder"
  },
  {
    "id": 28,
    "context": "The weather forecast says it will rain all weekend. We should _________________________________.",
    "jumbledWords": [
      "our",
      "probably",
      "for the park",
      "plans",
      "cancel"
    ],
    "correctSentence": "probably cancel our plans for the park"
  },
  {
    "id": 29,
    "context": "My computer is running very slowly. _________________________________?",
    "jumbledWords": [
      "considered",
      "yet",
      "you",
      "have",
      "rebooting",
      "the",
      "system"
    ],
    "correctSentence": "have you considered rebooting the system yet"
  },
  {
    "id": 30,
    "context": "I'm not sure which major to choose. You should _________________________________.",
    "jumbledWords": [
      "an academic advisor",
      "to",
      "about your options",
      "speak with"
    ],
    "correctSentence": "speak with an academic advisor about your options to"
  },
  {
    "id": 31,
    "context": "I'm planning a surprise party for my brother. _________________________________?",
    "jumbledWords": [
      "assist",
      "any",
      "I",
      "way",
      "can",
      "in",
      "you?"
    ],
    "correctSentence": "any way I can assist you? in"
  },
  {
    "id": 32,
    "context": "The documentary about climate change was very informative. Yes ,_________________________________.",
    "jumbledWords": [
      "gained",
      "valuable",
      "I",
      "insights",
      "several",
      "from",
      "it"
    ],
    "correctSentence": "I gained several valuable insights from it"
  },
  {
    "id": 33,
    "context": "I'm going to be late for the meeting. _________________________________?",
    "jumbledWords": [
      "organizer",
      "should",
      "behind",
      "that",
      "I",
      "you're running",
      "tell",
      "the"
    ],
    "correctSentence": "should I tell the organizer that you're running behind"
  },
  {
    "id": 34,
    "context": "I'd like to return this shirt. _________________________________?",
    "jumbledWords": [
      "issue",
      "there",
      "particular",
      "a",
      "with",
      "is",
      "it"
    ],
    "correctSentence": "is there a particular issue with it"
  },
  {
    "id": 35,
    "context": "I don't understand this math problem. Let me _________________________________.",
    "jumbledWords": [
      "take",
      "closer",
      "me",
      "let",
      "a",
      "look",
      "at",
      "it"
    ],
    "correctSentence": "let me take a closer look at it"
  },
  {
    "id": 36,
    "context": "I'm volunteering at the animal shelter this Saturday. That's _________________________________.",
    "jumbledWords": [
      "you",
      "to",
      "wonderful",
      "a",
      "thing",
      "of",
      "do"
    ],
    "correctSentence": "a wonderful thing you to do of"
  },
  {
    "id": 37,
    "context": "I missed the lecture this morning. I can _________________________________.",
    "jumbledWords": [
      "my",
      "like",
      "if",
      "you",
      "notes",
      "lend",
      "you'd"
    ],
    "correctSentence": "lend you my notes if you'd like"
  },
  {
    "id": 38,
    "context": "The new art exhibit is getting a lot of attention. We should _________________________________.",
    "jumbledWords": [
      "it",
      "go",
      "sells out",
      "before",
      "see",
      "everything"
    ],
    "correctSentence": "go see it before everything sells out"
  },
  {
    "id": 39,
    "context": "It's my first time visiting this city. _________________________________?",
    "jumbledWords": [
      "are",
      "any",
      "you",
      "recommendations",
      "do",
      "for places to visit",
      "have"
    ],
    "correctSentence": "do you have any recommendations for places to visit are"
  },
  {
    "id": 40,
    "context": "I forgot to bring my umbrella. You can _________________________________.",
    "jumbledWords": [
      "if you",
      "need one",
      "share",
      "mine"
    ],
    "correctSentence": "share mine if you need one"
  },
  {
    "id": 41,
    "context": "I've been trying to learn how to play the guitar. _________________________________ it?",
    "jumbledWords": [
      "been",
      "consistent",
      "you",
      "able",
      "have",
      "to",
      "maintain",
      "practice"
    ],
    "correctSentence": "have you been able to maintain consistent practice"
  },
  {
    "id": 42,
    "context": "The company is implementing a new work-from-home policy. I'm excited _________________________________.",
    "jumbledWords": [
      "will",
      "how",
      "productivity",
      "it",
      "affect",
      "to see"
    ],
    "correctSentence": "to see how it will affect productivity"
  },
  {
    "id": 43,
    "context": "I haven't heard back about my job application yet. It often _________________________________.",
    "jumbledWords": [
      "to review",
      "a few weeks",
      "companies",
      "for",
      "applications",
      "takes"
    ],
    "correctSentence": "takes companies a few weeks to review applications for"
  },
  {
    "id": 44,
    "context": "Can you believe how crowded the train was today? It's _________________________________.",
    "jumbledWords": [
      "Friday",
      "this",
      "a",
      "usually",
      "busy",
      "afternoon",
      "on"
    ],
    "correctSentence": "usually busy on Friday afternoon this /a"
  },
  {
    "id": 45,
    "context": "I think we need more milk. I will _________________________________.",
    "jumbledWords": [
      "my way",
      "some",
      "home",
      "from",
      "on",
      "work",
      "pick up"
    ],
    "correctSentence": "some on my way home from work pick up"
  },
  {
    "id": 46,
    "context": "The instructions for this furniture are so confusing. Let's _________________________________.",
    "jumbledWords": [
      "step-by-step",
      "if",
      "a",
      "we",
      "guide",
      "can",
      "find",
      "online",
      "see"
    ],
    "correctSentence": "a online step-by-step if we guide can find see"
  },
  {
    "id": 47,
    "context": "I'm training for a marathon next month. That requires _________________________________.",
    "jumbledWords": [
      "of",
      "a lot",
      "and",
      "dedication",
      "hard work"
    ],
    "correctSentence": "a lot of dedication and hard work"
  },
  {
    "id": 48,
    "context": "Our flight is boarding in 20 minutes. Let's _________________________________.",
    "jumbledWords": [
      "making",
      "to",
      "way",
      "begin",
      "the",
      "our",
      "gate"
    ],
    "correctSentence": "begin making our way to the gate"
  },
  {
    "id": 49,
    "context": "That was one of the best movies I've seen all year. I agree, _________________________________.",
    "jumbledWords": [
      "the acting",
      "especially",
      "was",
      "outstanding"
    ],
    "correctSentence": "the acting especially was outstanding"
  },
  {
    "id": 50,
    "context": "I'm organizing a book drive for the local school. _________________________________?",
    "jumbledWords": [
      "get",
      "involved",
      "others",
      "how",
      "can",
      "in",
      "initiative",
      "this"
    ],
    "correctSentence": "how can others get involved in this initiative"
  },
  {
    "id": 51,
    "context": "Why was the flight delayed? The airline announced that the delay _________________________________.",
    "jumbledWords": [
      "due to",
      "unexpected",
      "discovered",
      "they",
      "an",
      "mechanical",
      "was",
      "issue"
    ],
    "correctSentence": "was due to an unexpected mechanical issue they discovered"
  },
  {
    "id": 52,
    "context": "Did my package arrive yet? The package you were waiting for _________________________________.",
    "jumbledWords": [
      "was",
      "out",
      "you",
      "at",
      "this",
      "delivered",
      "while",
      "morning",
      "were",
      "lunch"
    ],
    "correctSentence": "you were was delivered this morning while out at lunch"
  },
  {
    "id": 53,
    "context": "What's the next step for planning the company picnic? We need to find out _________________________________.",
    "jumbledWords": [
      "is",
      "organizing",
      "the",
      "for",
      "who",
      "this",
      "responsible",
      "company picnic",
      "annual",
      "year"
    ],
    "correctSentence": "who is responsible for organizing the annual company picnic this year"
  },
  {
    "id": 54,
    "context": "Are you feeling tired lately? My doctor _________________________________.",
    "jumbledWords": [
      "eight hours",
      "of sleep",
      "advised",
      "every",
      "at least",
      "night",
      "to get",
      "me"
    ],
    "correctSentence": "advised me to get at least eight hours of sleep every night"
  },
  {
    "id": 55,
    "context": "Did you hear about the old factory on Main Street? The city is planning _________________________________.",
    "jumbledWords": [
      "where",
      "a",
      "new",
      "was",
      "build",
      "the",
      "old factory",
      "to",
      "library"
    ],
    "correctSentence": "the to build a new library where old factory was"
  },
  {
    "id": 56,
    "context": "Was the concert in the park popular? I was surprised to learn _________________________________.",
    "jumbledWords": [
      "the",
      "many",
      "attended",
      "free",
      "people",
      "in",
      "how",
      "concert",
      "the park"
    ],
    "correctSentence": "how many people attended the free concert in the park"
  },
  {
    "id": 57,
    "context": "What did you think of the new movie? The movie we watched last night _________________________________.",
    "jumbledWords": [
      "as",
      "the",
      "it",
      "interesting",
      "wasn't",
      "book",
      "was",
      "based",
      "on",
      "as"
    ],
    "correctSentence": "the wasn't as interesting as book it was based on"
  },
  {
    "id": 58,
    "context": "I'm about to submit my application. Before you submit your application, _________________________________.",
    "jumbledWords": [
      "you",
      "all",
      "is",
      "that",
      "information",
      "double-check",
      "the",
      "should",
      "accurate"
    ],
    "correctSentence": "you should double-check that all the information is accurate"
  },
  {
    "id": 59,
    "context": "Are you doing anything special next month? My friend who lives in Canada _________________________________.",
    "jumbledWords": [
      "is",
      "me",
      "next",
      "for",
      "visit",
      "month",
      "to",
      "coming",
      "two",
      "weeks"
    ],
    "correctSentence": "is coming to visit me for two weeks next month"
  },
  {
    "id": 60,
    "context": "Excuse me, I'm new here. Can you please _________________________________?",
    "jumbledWords": [
      "me",
      "is",
      "the",
      "bus station",
      "nearest",
      "where",
      "tell"
    ],
    "correctSentence": "tell me where the nearest bus station is"
  },
  {
    "id": 61,
    "context": "Why were you late for the meeting? The reason I was late for the meeting _________________________________.",
    "jumbledWords": [
      "wouldn't",
      "was",
      "morning",
      "my",
      "car",
      "start",
      "this",
      "that"
    ],
    "correctSentence": "was that my car wouldn't start this morning"
  },
  {
    "id": 62,
    "context": "Why is this restaurant so popular? The restaurant is famous for _________________________________.",
    "jumbledWords": [
      "its",
      "that",
      "delicious",
      "are",
      "daily",
      "seafood",
      "caught",
      "fresh",
      "dishes"
    ],
    "correctSentence": "its delicious seafood dishes that are caught fresh daily"
  },
  {
    "id": 63,
    "context": "Did you cancel the picnic because of the rain? Despite the heavy rain, _________________________________.",
    "jumbledWords": [
      "we",
      "our",
      "for",
      "go",
      "decided",
      "the",
      "with",
      "to",
      "picnic",
      "ahead",
      "plans"
    ],
    "correctSentence": "the we decided to go ahead with our plans for picnic"
  },
  {
    "id": 64,
    "context": "I need to review the quarterly report soon. I would be very grateful _________________________________.",
    "jumbledWords": [
      "if",
      "me",
      "could",
      "the",
      "you",
      "send",
      "by",
      "report",
      "Friday"
    ],
    "correctSentence": "if you could send me the report by Friday"
  },
  {
    "id": 65,
    "context": "What does the new software update do? The new software update is designed _________________________________.",
    "jumbledWords": [
      "to",
      "run",
      "make",
      "faster",
      "much",
      "the",
      "on",
      "older",
      "devices",
      "application"
    ],
    "correctSentence": "the to make application run much faster on older devices"
  },
  {
    "id": 66,
    "context": "Why wasn't Mark at the conference yesterday? He was unable to attend the conference _________________________________.",
    "jumbledWords": [
      "because",
      "a",
      "he",
      "prior",
      "had",
      "he",
      "change",
      "commitment",
      "couldn't"
    ],
    "correctSentence": "he because he had a prior commitment couldn't change"
  },
  {
    "id": 67,
    "context": "What kind of job is Maria looking for? She is looking for a job _________________________________.",
    "jumbledWords": [
      "that",
      "her",
      "skills",
      "will",
      "to",
      "use",
      "her",
      "in",
      "graphic design",
      "allow"
    ],
    "correctSentence": "that will allow her to use her skills in graphic design"
  },
  {
    "id": 68,
    "context": "What did the tour guide say about this castle? The tour guide told us that _________________________________.",
    "jumbledWords": [
      "the",
      "was",
      "castle",
      "ago",
      "over",
      "five",
      "built",
      "hundred",
      "years"
    ],
    "correctSentence": "the castle was built over five hundred years ago"
  },
  {
    "id": 69,
    "context": "Have you made summer plans? I haven't decided yet _________________________________.",
    "jumbledWords": [
      "what",
      "my",
      "I",
      "for",
      "am",
      "vacation",
      "to",
      "going",
      "do",
      "summer"
    ],
    "correctSentence": "I what am going to do for my summer vacation"
  },
  {
    "id": 70,
    "context": "Was it easy to set up your new camera? The instructions for the new camera _________________________________.",
    "jumbledWords": [
      "were",
      "than",
      "I",
      "complicated",
      "had",
      "more",
      "originally",
      "thought"
    ],
    "correctSentence": "were more complicated than I had originally thought"
  },
  {
    "id": 71,
    "context": "Did you find the books you were looking for? The librarian showed me _________________________________.",
    "jumbledWords": [
      "where",
      "the",
      "on",
      "to",
      "find",
      "ancient",
      "history",
      "section",
      "books"
    ],
    "correctSentence": "the where to find section on ancient history books"
  },
  {
    "id": 72,
    "context": "How was the concert, considering the weather? Although the weather was cold, _________________________________.",
    "jumbledWords": [
      "had",
      "a",
      "wonderful",
      "we",
      "still",
      "at",
      "the",
      "time",
      "outdoor concert"
    ],
    "correctSentence": "the we still had a wonderful time at outdoor concert"
  },
  {
    "id": 73,
    "context": "I want to recommend that restaurant to a friend. Can you remember _________________________________?",
    "jumbledWords": [
      "the",
      "of",
      "restaurant",
      "we",
      "new",
      "name",
      "tried",
      "the",
      "last week"
    ],
    "correctSentence": "the name of the new restaurant we tried last week"
  },
  {
    "id": 74,
    "context": "How can I learn more English words? If you want to improve your vocabulary, _________________________________.",
    "jumbledWords": [
      "you",
      "a",
      "of",
      "variety",
      "read",
      "should",
      "and",
      "books",
      "wide",
      "articles"
    ],
    "correctSentence": "you should read a wide variety of books and articles"
  },
  {
    "id": 75,
    "context": "Is John still busy with that big project? He finally finished the project _________________________________.",
    "jumbledWords": [
      "on",
      "for",
      "he",
      "been",
      "working",
      "had",
      "the last",
      "that",
      "two months"
    ],
    "correctSentence": "he that had been working on for the last two months"
  },
  {
    "id": 76,
    "context": "What was your hotel like on vacation? The hotel where we stayed on vacation _________________________________.",
    "jumbledWords": [
      "had",
      "a",
      "swimming",
      "and",
      "beautiful",
      "pool",
      "a",
      "private",
      "beach"
    ],
    "correctSentence": "had a beautiful swimming pool and a private beach"
  },
  {
    "id": 77,
    "context": "We need to discuss the new proposal. I was wondering _________________________________.",
    "jumbledWords": [
      "if",
      "would",
      "next week",
      "available",
      "be",
      "you",
      "to",
      "meet",
      "sometime"
    ],
    "correctSentence": "if you would be available to meet sometime next week"
  },
  {
    "id": 78,
    "context": "Why can't we go to the park? We can’t go _________________________________.",
    "jumbledWords": [
      "the park",
      "it's",
      "because",
      "is",
      "special event",
      "to",
      "for",
      "closed today",
      "a"
    ],
    "correctSentence": "to the park because closed today for a special event it's is"
  },
  {
    "id": 79,
    "context": "What's a good habit for computer users? It is important to remember _________________________________.",
    "jumbledWords": [
      "always",
      "your",
      "you",
      "that",
      "back up",
      "should",
      "files",
      "computer",
      "regularly"
    ],
    "correctSentence": "that you should always back up your computer files regularly"
  },
  {
    "id": 80,
    "context": "I'm trying to make some coffee. Could you explain _________________________________?",
    "jumbledWords": [
      "new",
      "this",
      "to",
      "coffee",
      "how",
      "use",
      "machine",
      "in",
      "the kitchen"
    ],
    "correctSentence": "to this new coffee machine in the kitchen how /use"
  },
  {
    "id": 81,
    "context": "D id you enjoy the documentary last night? The documentary about penguins _________________________________.",
    "jumbledWords": [
      "was",
      "I",
      "than",
      "had",
      "much",
      "expected",
      "more",
      "it",
      "informative",
      "to be"
    ],
    "correctSentence": "was much more informative than I had expected it to be"
  },
  {
    "id": 82,
    "context": "What are the requirements for getting a driver's license? To get a driver's license, _________________________________.",
    "jumbledWords": [
      "both",
      "a",
      "pass",
      "must",
      "and",
      "first",
      "written",
      "a practical",
      "you",
      "exam"
    ],
    "correctSentence": "a must first pass both written and exam a practical /you"
  },
  {
    "id": 83,
    "context": "Why is Maria upset? She was disappointed _________________________________.",
    "jumbledWords": [
      "that",
      "she",
      "see",
      "to",
      "was",
      "the",
      "sold out",
      "wanted",
      "concert",
      "already"
    ],
    "correctSentence": "she was that the concert wanted to see already sold out"
  },
  {
    "id": 84,
    "context": "What are the qualifications for the new job opening? The company is looking to hire someone _________________________________.",
    "jumbledWords": [
      "who",
      "three",
      "of",
      "in",
      "has",
      "years",
      "experience",
      "at least",
      "marketing"
    ],
    "correctSentence": "who has at least three years of experience in marketing"
  },
  {
    "id": 85,
    "context": "It's almost the end of the year already. I can't believe _________________________________.",
    "jumbledWords": [
      "how",
      "has",
      "this",
      "by",
      "quickly",
      "year",
      "gone",
      "so far"
    ],
    "correctSentence": "how quickly this year has gone by so far"
  },
  {
    "id": 86,
    "context": "What should we do about the project proposal? Before we make a final decision, _________________________________.",
    "jumbledWords": [
      "we",
      "all",
      "consider",
      "should",
      "of",
      "the",
      "available",
      "options",
      "carefully"
    ],
    "correctSentence": "we should consider all of the available options carefully"
  },
  {
    "id": 87,
    "context": "Why are there no cars parked here? The new city regulation _________________________________.",
    "jumbledWords": [
      "prohibits",
      "from",
      "on",
      "this",
      "people",
      "parking",
      "street",
      "during",
      "weekdays"
    ],
    "correctSentence": "prohibits people from parking on this street during weekdays"
  },
  {
    "id": 88,
    "context": "What did your manager want to talk about? My manager asked me _________________________________.",
    "jumbledWords": [
      "I",
      "this",
      "by",
      "could",
      "finish",
      "report",
      "the end",
      "of the",
      "if",
      "week"
    ],
    "correctSentence": "if I could finish this report by the end of the week"
  },
  {
    "id": 89,
    "context": "Are you going to your family reunion? Yes. It has been a long time _________________________________.",
    "jumbledWords": [
      "my",
      "saw",
      "who",
      "I",
      "cousins,",
      "live",
      "in",
      "last",
      "since",
      "Australia"
    ],
    "correctSentence": "since I last saw my cousins, who live in Australia"
  },
  {
    "id": 90,
    "context": "What are you studying in your art class? The art class I am taking this semester _________________________________.",
    "jumbledWords": [
      "is",
      "on",
      "painting",
      "focused",
      "techniques",
      "and",
      "watercolor",
      "color",
      "theory"
    ],
    "correctSentence": "is focused on watercolor painting techniques and color theory"
  },
  {
    "id": 91,
    "context": "Is my information safe on this website? The website's privacy policy states _________________________________.",
    "jumbledWords": [
      "not",
      "user",
      "it",
      "share",
      "will",
      "data",
      "with",
      "any",
      "that",
      "third parties"
    ],
    "correctSentence": "that it will not share user data with any third parties"
  },
  {
    "id": 92,
    "context": "How did Tom do on his final exam? Even though he studied very hard, _________________________________.",
    "jumbledWords": [
      "not",
      "the",
      "did",
      "on",
      "pass",
      "final exam",
      "his",
      "first",
      "he",
      "attempt"
    ],
    "correctSentence": "he did not pass the final exam on his first attempt"
  },
  {
    "id": 93,
    "context": "Do you have any advice for booking flights? I would recommend _________________________________.",
    "jumbledWords": [
      "flight",
      "well",
      "you",
      "book",
      "your",
      "in advance",
      "for",
      "a",
      "that",
      "good price"
    ],
    "correctSentence": "that you book your flight well in advance for a good price"
  },
  {
    "id": 94,
    "context": "What is that book you are reading about? The historical novel is about _________________________________.",
    "jumbledWords": [
      "French",
      "a",
      "who",
      "young",
      "during",
      "lived",
      "the",
      "woman",
      "Revolution"
    ],
    "correctSentence": "the a young woman who lived during French Revolution"
  },
  {
    "id": 95,
    "context": "Which of these two phones should I buy? The main difference between the two phones _________________________________.",
    "jumbledWords": [
      "is",
      "has",
      "one",
      "a",
      "that",
      "much",
      "better",
      "than",
      "camera",
      "the other"
    ],
    "correctSentence": "is that one has a much better camera than the other"
  },
  {
    "id": 96,
    "context": "Why did he choose that job offer? He decided to take the job _________________________________.",
    "jumbledWords": [
      "offered",
      "it",
      "a",
      "and",
      "salary",
      "higher",
      "because",
      "better benefits"
    ],
    "correctSentence": "because it offered a higher salary and better benefits"
  },
  {
    "id": 97,
    "context": "Is there anything I should do before closing the office? Please make sure _________________________________.",
    "jumbledWords": [
      "have",
      "you",
      "all",
      "turned off",
      "the",
      "lights",
      "before",
      "you",
      "that",
      "leave"
    ],
    "correctSentence": "that you turned off all the lights before leave have /you"
  },
  {
    "id": 98,
    "context": "Did the mechanic find out what was wrong with your car? The problem with the car _________________________________.",
    "jumbledWords": [
      "was",
      "a",
      "by",
      "small",
      "in",
      "leak",
      "caused",
      "one",
      "of the",
      "tires"
    ],
    "correctSentence": "was caused by a small leak in one of the tires"
  },
  {
    "id": 99,
    "context": "What did you think of Sarah's performance? I was really impressed by _________________________________.",
    "jumbledWords": [
      "she",
      "on",
      "well",
      "stage",
      "performed",
      "how",
      "being",
      "despite",
      "so nervous"
    ],
    "correctSentence": "how well she performed on stage despite being so nervous"
  },
  {
    "id": 100,
    "context": "Why do people emphasize eating a good breakfast? It is often said _________________________________.",
    "jumbledWords": [
      "is",
      "the",
      "most",
      "day",
      "breakfast",
      "important",
      "that",
      "meal",
      "of the"
    ],
    "correctSentence": "is that breakfast the most important meal of the day"
  },
  {
    "id": 101,
    "context": "I'm considering minoring in philosophy. How _________________________________?",
    "jumbledWords": [
      "complement",
      "your",
      "studies",
      "you",
      "think",
      "it",
      "will",
      "do",
      "major"
    ],
    "correctSentence": "do you think it will complement your major studies"
  },
  {
    "id": 102,
    "context": "The campus Wi-Fi is extremely slow today. You_________________________________ main library.",
    "jumbledWords": [
      "desk",
      "help",
      "the",
      "located",
      "in",
      "the IT",
      "report",
      "issue",
      "the",
      "at",
      "can"
    ],
    "correctSentence": "can report the issue at the help desk located in the IT"
  },
  {
    "id": 103,
    "context": "My student visa expires at the end of the semester. _________________________________?",
    "jumbledWords": [
      "for",
      "the necessary",
      "the renewal",
      "paperwork",
      "you",
      "submitted",
      "have",
      "all"
    ],
    "correctSentence": "have you submitted all paperwork the renewal for /the necessary"
  },
  {
    "id": 104,
    "context": "Professor Chen's lecture was very inspiring. I agree. _________________________________.",
    "jumbledWords": [
      "environmental",
      "about",
      "the",
      "his",
      "research",
      "particularly",
      "section",
      "was",
      "engaging"
    ],
    "correctSentence": "the section about his environmental research was particularly engaging"
  },
  {
    "id": 105,
    "context": "I need to book a study room for our group project. _________________________________the weekend?",
    "jumbledWords": [
      "there",
      "in",
      "large",
      "available",
      "for",
      "any",
      "the system",
      "are",
      "meeting room"
    ],
    "correctSentence": "are there any meeting room in the system for large /available"
  },
  {
    "id": 106,
    "context": "I'm looking for a part-time job near the college. Have_________________________________?",
    "jumbledWords": [
      "openings",
      "any",
      "job",
      "you",
      "seen",
      "posted",
      "recently",
      "the",
      "in",
      "library"
    ],
    "correctSentence": "you seen any job openings posted in the library recently"
  },
  {
    "id": 107,
    "context": "The deadline for course registration is fast approaching. _________________________________ advisor?",
    "jumbledWords": [
      "a meeting",
      "your",
      "to schedule",
      "you",
      "forgotten",
      "have",
      "with"
    ],
    "correctSentence": "have you forgotten to schedule a meeting with your"
  },
  {
    "id": 108,
    "context": "I'm thinking about transferring to a different university. What_________________________________?",
    "jumbledWords": [
      "application",
      "are",
      "requirements",
      "the process",
      "challenging",
      "most",
      "for",
      "the"
    ],
    "correctSentence": "are the most challenging application requirements for the process"
  },
  {
    "id": 109,
    "context": "I failed the practice midterm yesterday. _________________________________ actual one?",
    "jumbledWords": [
      "study",
      "plan",
      "you",
      "to",
      "better",
      "for the",
      "how",
      "will"
    ],
    "correctSentence": "how will you plan to study better for the"
  },
  {
    "id": 110,
    "context": "I heard the cafeteria food has improved. _________________________________.",
    "jumbledWords": [
      "try",
      "new",
      "should",
      "the",
      "we",
      "out",
      "lunch",
      "for",
      "specials",
      "today Exercise 2"
    ],
    "correctSentence": "we should try out the new specials for lunch today Exercise 2"
  },
  {
    "id": 111,
    "context": "The historical artifacts exhibition opens next week. _________________________________ for students?",
    "jumbledWords": [
      "there",
      "tickets",
      "or",
      "a special",
      "rate",
      "are",
      "discount"
    ],
    "correctSentence": "are there discount tickets or a special rate"
  },
  {
    "id": 112,
    "context": "I need to print my essay before class starts. _________________________________ located?",
    "jumbledWords": [
      "where",
      "the closest",
      "do",
      "to the lecture",
      "printer",
      "building",
      "you",
      "know",
      "is"
    ],
    "correctSentence": "do you know where the closest printer to the lecture building is"
  },
  {
    "id": 113,
    "context": "I'm confused about the citation format we should use. You should_________________________________.",
    "jumbledWords": [
      "the style",
      "website",
      "to clarify",
      "the",
      "look up",
      "on",
      "guide",
      "writing center's"
    ],
    "correctSentence": "look up the style guide on the writing center's website to clarify"
  },
  {
    "id": 114,
    "context": "My laptop screen cracked this morning. _________________________________of it.",
    "jumbledWords": [
      "the",
      "tech support",
      "you",
      "contact",
      "to",
      "department",
      "should",
      "take care"
    ],
    "correctSentence": "you should contact the tech support department to take care"
  },
  {
    "id": 115,
    "context": "I'm trying to find an internship for the summer. Have_________________________________?",
    "jumbledWords": [
      "the",
      "university",
      "services",
      "career",
      "portal",
      "searched",
      "you",
      "yet"
    ],
    "correctSentence": "you searched the university career services portal yet"
  },
  {
    "id": 116,
    "context": "The presentation slides are too small to read. _________________________________ larger?",
    "jumbledWords": [
      "the projector",
      "how",
      "I",
      "settings",
      "can",
      "adjust",
      "the",
      "to make",
      "text"
    ],
    "correctSentence": "how can I adjust the projector settings to make the text"
  },
  {
    "id": 117,
    "context": "I'm struggling with the organic chemistry lab reports. Have you _________________________________?",
    "jumbledWords": [
      "teaching",
      "tried",
      "your problems",
      "to discuss",
      "with",
      "assistant",
      "the"
    ],
    "correctSentence": "tried to discuss your problems with the teaching assistant"
  },
  {
    "id": 118,
    "context": "Our class field trip is scheduled for next month. Did _________________________________ the trip?",
    "jumbledWords": [
      "the",
      "your parents",
      "to sign",
      "remember",
      "form",
      "for",
      "permission",
      "necessary"
    ],
    "correctSentence": "your parents remember to sign the necessary permission form for"
  },
  {
    "id": 119,
    "context": "I need to improve my public speaking skills. Is there_________________________________?",
    "jumbledWords": [
      "on campus",
      "available",
      "focuses",
      "public speaking",
      "a workshop",
      "on",
      "that"
    ],
    "correctSentence": "a workshop available on campus that focuses on public speaking"
  },
  {
    "id": 120,
    "context": "The student government election results are in. Do you _________________________________?",
    "jumbledWords": [
      "newly",
      "who",
      "the",
      "president",
      "and",
      "are",
      "elected",
      "know",
      "vice president Exercise 3"
    ],
    "correctSentence": "know who the newly elected president and are vice president Exercise 3"
  },
  {
    "id": 121,
    "context": "I missed the first week of the programming course. _________________________________material?",
    "jumbledWords": [
      "to",
      "are",
      "you",
      "catch up",
      "planning",
      "the missed",
      "lecture",
      "how",
      "on"
    ],
    "correctSentence": "how are you planning to catch up on the missed lecture"
  },
  {
    "id": 122,
    "context": "I'm excited about the upcoming cultural festival. _________________________________ there?",
    "jumbledWords": [
      "be",
      "what",
      "of",
      "performances",
      "food",
      "and",
      "available",
      "will",
      "kind"
    ],
    "correctSentence": "what kind of performances and food will be available"
  },
  {
    "id": 123,
    "context": "I need to reserve some books from the archives. When _________________________________?",
    "jumbledWords": [
      "available",
      "the special",
      "to",
      "collections",
      "for",
      "students",
      "access",
      "are",
      "archives"
    ],
    "correctSentence": "are the special collections archives available for students to access"
  },
  {
    "id": 124,
    "context": "The gym is getting new equipment next week. _________________________________?",
    "jumbledWords": [
      "they",
      "old",
      "equipment",
      "are",
      "what",
      "with",
      "planning",
      "the",
      "to do"
    ],
    "correctSentence": "what are they planning to do with the old equipment"
  },
  {
    "id": 125,
    "context": "I want to change my major from science to arts. You should_________________________________.",
    "jumbledWords": [
      "your academic",
      "an appointment",
      "to discuss",
      "with",
      "advisor",
      "schedule",
      "this"
    ],
    "correctSentence": "schedule an appointment with your academic advisor to discuss this"
  },
  {
    "id": 126,
    "context": "I'm behind on my readings for history class. _________________________________reading time.",
    "jumbledWords": [
      "your",
      "a better",
      "to manage",
      "you",
      "could",
      "find",
      "perhaps",
      "way"
    ],
    "correctSentence": "perhaps you could find a better way to manage your"
  },
  {
    "id": 127,
    "context": "I need to learn how to analyze data in Python. _________________________________ department?",
    "jumbledWords": [
      "any",
      "specialized",
      "offered",
      "are",
      "courses",
      "the",
      "there",
      "computer science",
      "in"
    ],
    "correctSentence": "are there any specialized courses offered in the computer science"
  },
  {
    "id": 128,
    "context": "My roommate is moving out at the end of the year. Are _________________________________?",
    "jumbledWords": [
      "you",
      "looking",
      "next",
      "already",
      "for",
      "roommate",
      "for",
      "semester",
      "a new"
    ],
    "correctSentence": "you already looking for a new roommate for next semester"
  },
  {
    "id": 129,
    "context": "The guest speaker gave a fascinating talk. _________________________________ general research?",
    "jumbledWords": [
      "his",
      "about",
      "new",
      "was",
      "book",
      "or",
      "the discussion",
      "more"
    ],
    "correctSentence": "was the discussion more about his new book or"
  },
  {
    "id": 130,
    "context": "I have to renew my student ID card. Do you know_________________________________?",
    "jumbledWords": [
      "located",
      "campus",
      "where",
      "the main",
      "for",
      "services",
      "office",
      "renewals",
      "is Exercise 4"
    ],
    "correctSentence": "where the main campus services office for renewals located is Exercise 4"
  },
  {
    "id": 131,
    "context": "I need to prepare for my meeting with the Dean tomorrow. _________________________________.",
    "jumbledWords": [
      "the main",
      "you",
      "prepare",
      "to",
      "issues",
      "discuss",
      "and",
      "prioritize",
      "should"
    ],
    "correctSentence": "you should prepare and prioritize the main issues to discuss"
  },
  {
    "id": 132,
    "context": "The course syllabus mentioned a required textbook. Do you _________________________________ ?",
    "jumbledWords": [
      "the best",
      "know",
      "place",
      "used",
      "to buy",
      "a",
      "copy",
      "is",
      "where"
    ],
    "correctSentence": "know the best place to buy a used copy is /where"
  },
  {
    "id": 133,
    "context": "The elevator in the science building is out of service again. I already asked_________________________________.",
    "jumbledWords": [
      "maintenance",
      "it",
      "when",
      "department",
      "would",
      "they",
      "fix",
      "the"
    ],
    "correctSentence": "the maintenance department when they would fix it"
  },
  {
    "id": 134,
    "context": "I’m thinking about starting a student investment club. _________________________________ the club.",
    "jumbledWords": [
      "need",
      "university",
      "get",
      "you",
      "recognition",
      "for",
      "official",
      "to"
    ],
    "correctSentence": "you need to get official university recognition for"
  },
  {
    "id": 135,
    "context": "My presentation feedback was a little harsh. _________________________________?",
    "jumbledWords": [
      "comments",
      "professor's",
      "what",
      "were",
      "specifically",
      "about",
      "the"
    ],
    "correctSentence": "what were the comments specifically about professor's"
  },
  {
    "id": 136,
    "context": "I have to retake the English proficiency test next month. _________________________________ study with?",
    "jumbledWords": [
      "the necessary",
      "materials",
      "you",
      "where",
      "find",
      "did",
      "to",
      "practice"
    ],
    "correctSentence": "where did you find the necessary practice materials to"
  },
  {
    "id": 137,
    "context": "The campus newspaper is looking for new writers. _________________________________articles?",
    "jumbledWords": [
      "to submit",
      "application",
      "is",
      "when",
      "the",
      "deadline",
      "and",
      "your"
    ],
    "correctSentence": "when is the deadline to submit your application and"
  },
  {
    "id": 138,
    "context": "I'm applying for a research assistant position in the lab. What research _________________________________?",
    "jumbledWords": [
      "you",
      "specifically",
      "do",
      "hope",
      "from",
      "skills",
      "to gain",
      "the position"
    ],
    "correctSentence": "skills do you specifically hope to gain from the position"
  },
  {
    "id": 139,
    "context": "I can’t log into the online learning portal. You _________________________________.",
    "jumbledWords": [
      "password",
      "the",
      "help center",
      "should",
      "reset",
      "contact",
      "to",
      "your"
    ],
    "correctSentence": "should contact the help center to reset your password"
  },
  {
    "id": 140,
    "context": "The architecture department is hosting a design competition._________________________________?",
    "jumbledWords": [
      "will be",
      "winning",
      "used",
      "project",
      "what",
      "the",
      "criteria",
      "to judge Exercise 5"
    ],
    "correctSentence": "what criteria will be used the winning project to judge Exercise 5"
  },
  {
    "id": 141,
    "context": "I'm worried about getting a good letter of recommendation. _________________________________, your professor ?",
    "jumbledWords": [
      "ask",
      "should",
      "who",
      "you",
      "to",
      "it",
      "write"
    ],
    "correctSentence": "who should you ask to write it"
  },
  {
    "id": 142,
    "context": "The gym is completely empty right now, which is unusual. _________________________________something.",
    "jumbledWords": [
      "busy",
      "midterms",
      "maybe",
      "or",
      "with",
      "everyone's"
    ],
    "correctSentence": "maybe with or busy/ midterms everyone's"
  },
  {
    "id": 143,
    "context": "I just received a grade of 'A' on my toughest assignment. This _________________________________.",
    "jumbledWords": [
      "celebration",
      "of",
      "definitely",
      "calls for",
      "a",
      "small",
      "achievement",
      "you"
    ],
    "correctSentence": "definitely calls for a small celebration of you achievement"
  },
  {
    "id": 144,
    "context": "The student loans office is raising its interest rates._________________________________ loan applications?",
    "jumbledWords": [
      "only affect",
      "current",
      "will",
      "this",
      "students",
      "new",
      "or",
      "all"
    ],
    "correctSentence": "will this only affect current students or all new"
  },
  {
    "id": 145,
    "context": "I need to drop one of my elective courses. Do you _________________________________?",
    "jumbledWords": [
      "the official",
      "a course",
      "know",
      "is",
      "what",
      "for dropping",
      "deadline"
    ],
    "correctSentence": "know what the official deadline is for dropping a course"
  },
  {
    "id": 146,
    "context": "My group members are not contributing enough to the project.You _________________________________.",
    "jumbledWords": [
      "the professor",
      "happening",
      "might",
      "if",
      "to tell",
      "keeps",
      "want",
      "it"
    ],
    "correctSentence": "might want to tell the professor if it keeps happening"
  },
  {
    "id": 147,
    "context": "I heard there’s a new tutoring service in the math department. Do _________________________________ they offer?",
    "jumbledWords": [
      "what",
      "the tutoring",
      "schedule",
      "know what",
      "and",
      "you",
      "is"
    ],
    "correctSentence": "you know what what the tutoring schedule is and"
  },
  {
    "id": 148,
    "context": "The student cafeteria is running a special promotion today. Really? __ __ __ __ __ — a discount or __ __? _________________________________",
    "jumbledWords": [
      "does",
      "what",
      "include",
      "something",
      "the promotion",
      "or",
      "free"
    ],
    "correctSentence": "what does the promotion include or something free"
  },
  {
    "id": 149,
    "context": "I can’t decide which foreign language to study next. Why _________________________________?",
    "jumbledWords": [
      "best fits",
      "your",
      "not",
      "the one",
      "career goals",
      "choose",
      "that"
    ],
    "correctSentence": "not choose the one that best fits your career goals"
  },
  {
    "id": 150,
    "context": "I'm trying to appeal the penalty fee I received. _________________________________ process?",
    "jumbledWords": [
      "the appropriate",
      "the",
      "first",
      "what",
      "step",
      "is",
      "appeal",
      "in"
    ],
    "correctSentence": "what is the appropriate first step in the appeal"
  }
];
