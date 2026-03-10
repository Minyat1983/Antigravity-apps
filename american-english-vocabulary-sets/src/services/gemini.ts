import { GoogleGenAI, Type, Modality } from "@google/genai";

export interface VocabTerm {
  term: string;
  pos: string;
  level: string;
  definition: string;
  example: string;
}

const API_KEY = process.env.GEMINI_API_KEY || "";
export const IS_OFFLINE = !API_KEY || API_KEY === "MY_GEMINI_API_KEY";

const ai = !IS_OFFLINE ? new GoogleGenAI({ apiKey: API_KEY }) : null;

const MOCK_DATA: Record<string, Record<string, VocabTerm[]>> = {
  "business meetings": {
    "A1": [
      { term: "meeting", pos: "noun", level: "A1", definition: "A time when people come together to talk.", example: "We have a meeting at 10 AM." },
      { term: "room", pos: "noun", level: "A1", definition: "A space in a building.", example: "The meeting is in the conference room." },
      { term: "talk", pos: "verb", level: "A1", definition: "To say words to someone.", example: "We need to talk about the project." },
      { term: "start", pos: "verb", level: "A1", definition: "To begin something.", example: "The meeting will start on time." },
      { term: "end", pos: "verb", level: "A1", definition: "To finish something.", example: "What time does the meeting end?" }
    ],
    "B1": [
      { term: "agenda", pos: "noun", level: "B1", definition: "A list of things to be discussed in a meeting.", example: "Did everyone receive the agenda for today's call?" },
      { term: "brainstorm", pos: "verb", level: "B1", definition: "To suggest a lot of ideas for a future activity.", example: "Let's brainstorm some ideas for the marketing campaign." },
      { term: "collaborate", pos: "verb", level: "B1", definition: "To work with someone else for a special purpose.", example: "We need to collaborate with the design team on this." },
      { term: "deadline", pos: "noun", level: "B1", definition: "A time or day by which something must be done.", example: "The deadline for the report is Friday afternoon." },
      { term: "feedback", pos: "noun", level: "B1", definition: "Information about something you have done.", example: "I'd appreciate some feedback on my presentation." }
    ],
    "C1": [
      { term: "leverage", pos: "verb", level: "C1", definition: "To use something that you already have in order to achieve something new.", example: "We should leverage our existing partnerships to expand into new markets." },
      { term: "paradigm", pos: "noun", level: "C1", definition: "A very clear and typical example of something.", example: "This new strategy represents a paradigm shift in our industry." },
      { term: "mitigate", pos: "verb", level: "C1", definition: "To make something less harmful, unpleasant, or bad.", example: "We need to identify potential risks and find ways to mitigate them." },
      { term: "alignment", pos: "noun", level: "C1", definition: "An arrangement in which two or more things are in the correct position relative to each other.", example: "We need to ensure all departments are in alignment with our long-term goals." },
      { term: "incentivize", pos: "verb", level: "C1", definition: "To give someone a reason for wanting to do something.", example: "How can we incentivize our employees to be more productive?" }
    ]
  },
  "travel": {
    "B1": [
      { term: "itinerary", pos: "noun", level: "B1", definition: "A detailed plan or route of a journey.", example: "Our travel agent sent us the final itinerary yesterday." },
      { term: "accommodation", pos: "noun", level: "B1", definition: "A place to live, work, or stay in.", example: "We're still looking for affordable accommodation in NYC." },
      { term: "landmark", pos: "noun", level: "B1", definition: "A building or place that is easily recognized.", example: "The Golden Gate Bridge is a famous landmark in San Francisco." },
      { term: "carry-on", pos: "noun", level: "B1", definition: "A small bag that you can take onto an airplane with you.", example: "I only ever travel with a carry-on bag to save time." },
      { term: "layover", pos: "noun", level: "B1", definition: "A short stay in a place that you make while you are on a longer journey.", example: "We have a four-hour layover in Chicago." }
    ]
  }
};

async function withRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  let lastError: any;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      // Check if it's a 429 (Resource Exhausted) error
      const isQuotaError = error?.message?.includes("429") || error?.status === "RESOURCE_EXHAUSTED";

      if (isQuotaError && i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
        console.warn(`Quota exceeded. Retrying in ${Math.round(delay)}ms... (Attempt ${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw lastError;
}

export async function generateVocabulary(topic: string, level: string, excludeTerms: string[] = []): Promise<VocabTerm[]> {
  const normalizedTopic = topic.toLowerCase().trim();

  // Use mock data if offline or if topic is available in mock data
  if (IS_OFFLINE || MOCK_DATA[normalizedTopic]) {
    const topicData = MOCK_DATA[normalizedTopic] || MOCK_DATA["business meetings"]; // Fallback to business meetings if topic not found
    const levelData = topicData[level] || topicData["B1"] || Object.values(topicData)[0];

    // Filter out excluded terms
    return levelData.filter(item => !excludeTerms.includes(item.term));
  }

  if (!ai) throw new Error("API key is missing. Please provide a valid API key.");

  const model = "gemini-3.1-pro-preview";

  const systemInstruction = `You are an expert American English Curriculum Designer. Your goal is to generate CEFR-aligned vocabulary sets using strictly American English standards (US).

Core Directives:
1. Spelling: Use American spelling only (e.g., "color," "center," "realize," "program").
2. Lexicon: Use North American terminology (e.g., "apartment," "elevator," "sidewalk," "trash").
3. Context: Example sentences should reflect American cultural norms, measurements (inches/miles/Fahrenheit), and currency (USD).

Pedagogical Guidelines:
- A1-A2: Use high-frequency, concrete words. Definitions must be under 15 words.
- B1-B2: Include common phrasal verbs and idiomatic expressions (e.g., "get in line," "take a rain check").
- C1-C2: Focus on academic, professional, and nuanced vocabulary (e.g., "leverage," "paradigm," "mitigate"). Use complex sentence structures for examples.

Output exactly 10-12 terms.`;

  let prompt = `Generate a vocabulary set for the topic "${topic}" at CEFR level "${level}".`;
  if (excludeTerms.length > 0) {
    prompt += `\n\nCRITICAL: Do NOT include any of the following terms as they have already been used: ${excludeTerms.join(", ")}. Provide a completely new and unique set of terms.`;
  }

  try {
    return await withRetry(async () => {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                term: { type: Type.STRING, description: "The vocabulary word or phrase (US spelling)" },
                pos: { type: Type.STRING, description: "Part of Speech" },
                level: { type: Type.STRING, description: "CEFR Level" },
                definition: { type: Type.STRING, description: "Definition (following pedagogical guidelines)" },
                example: { type: Type.STRING, description: "American Context Example" },
              },
              required: ["term", "pos", "level", "definition", "example"],
            },
          },
        },
      });

      const text = response.text;
      if (!text) return [];
      return JSON.parse(text);
    });
  } catch (error: any) {
    console.error("Error generating vocabulary:", error);
    if (error?.message?.includes("429") || error?.status === "RESOURCE_EXHAUSTED") {
      throw new Error("The AI is currently busy (quota exceeded). Please wait a moment and try again.");
    }
    throw error;
  }
}

export async function generateSpeech(text: string): Promise<string | undefined> {
  if (IS_OFFLINE || !ai) return undefined;

  try {
    return await withRetry(async () => {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Pronounce clearly in American English: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Kore' is a good clear voice
            },
          },
        },
      });

      return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    });
  } catch (error: any) {
    console.error("Error generating speech:", error);
    return undefined;
  }
}
