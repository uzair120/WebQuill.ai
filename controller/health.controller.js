/*
 * Created on Sat Jun 13 2024
 *
 * Copyright (c) 2024 Hafiz Uzair Raza
 */

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.set("Content-Type", "application/json");
    res.send({ status: "ok", info: {}, error: {}, details: {} });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
