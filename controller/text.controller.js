/*
 * Created on Sat Jun 07 2024
 *
 * Copyright (c) 2024 Hafiz Uzair Raza
 */

const express = require("express");
const router = express.Router();
const conversation = require("../services/conversation.service");
const gemini = require("../services/gemini.service");
const webData = require("../services/webData.service");
const getGenerateRateLimits = require("../utils/rateLimiter.util");

router.post(
  "/generate",
  getGenerateRateLimits,
  // () => getRateLimits(60000, 2),
  async (req, res) => {
    try {
      const { url } = req.body;

      const { company, desc: jobDesc } = await webData(url);

      const conversationalText = await conversation(company, jobDesc);
      console.log("conversationalText", conversationalText);

      const geminiResponse = await gemini(conversationalText);
      console.log("geminiResponse", geminiResponse);

      res.set("Content-Type", "text/html");
      res.send(geminiResponse.response.text());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

module.exports = router;
