/*
 * Created on Thu Jun 04 2024
 *
 * Copyright (c) 2024 Hafiz Uzair Raza
 */

const express = require("express");
require("dotenv").config({ multiline: true });

const app = express();
const port = process.env.PORT || 3535;
const textController = require("./controller/text.controller");
const healthController = require("./controller/health.controller");

app.use(express.json());

app.use("/api", textController);
app.use("/health", healthController);
app.get("/", (req, res) => res.send("BE App for WebQuill.Gemini"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
