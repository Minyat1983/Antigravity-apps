
export interface WordEntry {
  word: string;
  pos: string;
  definition: string;
  sentence: string;
}

export interface QuizItem {
  question: string;
  options?: string[];
  answer: string;
  type: 'mcq' | 'fitb' | 'matching';
}

export const geneticsWords: WordEntry[] = [
  {
    word: "Genotype",
    pos: "Noun",
    definition: "The genetic constitution of an individual organism.",
    sentence: "While two organisms may look similar, their genotypes can vary significantly."
  },
  {
    word: "Phenotype",
    pos: "Noun",
    definition: "The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment.",
    sentence: "The plant's phenotype, such as its height and leaf color, was influenced by both its genes and soil quality."
  },
  {
    word: "Dominant",
    pos: "Adjective",
    definition: "Relating to or denoting heritable characteristics which are controlled by genes that are expressed in offspring even when inherited from only one parent.",
    sentence: "The brown eye trait is dominant over the blue eye trait in many genetic models."
  },
  {
    word: "Recessive",
    pos: "Adjective",
    definition: "Relating to or denoting heritable characteristics controlled by genes that are expressed in offspring only when inherited from both parents.",
    sentence: "For a recessive trait to be visible in the phenotype, the individual must possess two copies of the gene."
  },
  {
    word: "Inheritance",
    pos: "Noun",
    definition: "The process by which genetic information is passed on from parent to child.",
    sentence: "Patterns of inheritance can be complex when multiple genes influence a single trait."
  },
  {
    word: "Replication",
    pos: "Noun",
    definition: "The process by which a double-stranded DNA molecule is copied to produce two identical DNA molecules.",
    sentence: "DNA replication must occur with high precision to ensure genetic stability across generations."
  },
  {
    word: "Synthesis",
    pos: "Noun",
    definition: "The production of chemical compounds by reaction from simpler materials, especially in a biological context (e.g., protein synthesis).",
    sentence: "Ribosomes are the primary cellular sites for protein synthesis based on genetic instructions."
  },
  {
    word: "Hybrid",
    pos: "Noun / Adjective",
    definition: "The offspring of two plants or animals of different species or varieties.",
    sentence: "The scientist created a hybrid variety of corn that was more resistant to drought."
  },
  {
    word: "Generation",
    pos: "Noun",
    definition: "All of the people or organisms born and living at about the same time, regarded collectively.",
    sentence: "Researchers observed the mutation's effects over several generations of fruit flies."
  },
  {
    word: "Modification",
    pos: "Noun",
    definition: "A change in an organism caused by environmental factors or intentional genetic engineering.",
    sentence: "Genetic modification has allowed for the development of crops with enhanced nutritional profiles."
  }
];

export const geneticsQuiz: QuizItem[] = [
  {
    question: "Which term describes the genetic makeup of an organism, as opposed to its physical appearance?",
    options: ["Phenotype", "Genotype", "Hybrid", "Generation"],
    answer: "Genotype",
    type: "mcq"
  },
  {
    question: "The observable characteristics of an organism are known as its __________.",
    answer: "Phenotype",
    type: "fitb"
  },
  {
    question: "Which type of gene is expressed only when two copies are present?",
    options: ["Dominant", "Recessive", "Hybrid", "Variant"],
    answer: "Recessive",
    type: "mcq"
  },
  {
    question: "DNA __________ is the process of creating an exact copy of a DNA molecule.",
    answer: "Replication",
    type: "fitb"
  },
  {
    question: "Inheritance is the process of passing genetic information to offspring.",
    options: ["True", "False"],
    answer: "True",
    type: "mcq"
  },
  {
    question: "An offspring of two different varieties is called a(n) __________.",
    answer: "Hybrid",
    type: "fitb"
  },
  {
    question: "Protein __________ is the biological process where cells build new proteins.",
    options: ["Replication", "Synthesis", "Inheritance", "Mutation"],
    answer: "Synthesis",
    type: "mcq"
  },
  {
    question: "A trait that appears even if only one parent contributes the gene is __________.",
    answer: "Dominant",
    type: "fitb"
  },
  {
    question: "The study looked at how traits changed over a single __________ of the population.",
    options: ["Modification", "Generation", "Synthesis", "Replication"],
    answer: "Generation",
    type: "mcq"
  },
  {
    question: "Environmental factors can cause a __________ in the physical form of an organism.",
    answer: "Modification",
    type: "fitb"
  }
];
