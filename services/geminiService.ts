
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartServiceRecommendation = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for a service in Hyderabad. Query: "${userInput}". 
                 Based on the categories: Home Cleaning, Plumbing, Electrical, Repair, Salon, Fitness, Painting, Logistics.
                 Suggest which category fits best and explain why in one short sentence.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            categoryName: { type: Type.STRING },
            reasoning: { type: Type.STRING }
          },
          required: ["categoryName", "reasoning"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const generateReferralMessage = async (userName: string, referralCode: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a premium, elegant, and persuasive WhatsApp message for a luxury home service app called EliteFix in Hyderabad.
                 User Name: ${userName}. Referral Code: ${referralCode}.
                 The message should highlight that both friends get ₹500 off. 
                 Mention trust and professional quality. Keep it inviting and sophisticated.`,
    });
    return response.text;
  } catch (error) {
    return `Hey! Join me on EliteFix for premium home services in Hyderabad. Use my code ${referralCode} to get ₹500 off your first booking!`;
  }
};

export const getWorkerProfileSummary = async (workerData: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a professional and luxury sounding summary for this worker: ${JSON.stringify(workerData)}. 
                 Focus on their rating, experience, and reliability. Keep it under 25 words.`,
    });
    return response.text;
  } catch (error) {
    return "Top-rated professional with exceptional service history.";
  }
};
