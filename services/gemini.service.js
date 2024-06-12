/*
 * Created on Thu Jun 05 2024
 *
 * Copyright (c) 2024 Hafiz Uzair Raza
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: process.env.GEMINI_MODEL
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain"
};

const getGeminiResponse = async (input) => {
  const chatSession = model.startChat({
    generationConfig,
    history: []
  });

  const result = await chatSession.sendMessage(input);
  return result;
};

module.exports = getGeminiResponse;
