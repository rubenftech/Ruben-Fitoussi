
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const getGeminiChat = () => {
  // Use a fallback to prevent ReferenceError if process is not defined
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI Chat will not function.");
    // Return a mock chat object if no key to prevent crashing the UI
    return {
      sendMessage: async () => ({ text: "I'm currently offline because the API key is missing. Please check the environment configuration." })
    };
  }

  const ai = new GoogleGenAI({ apiKey });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};
