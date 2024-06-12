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

app.use(express.json());

app.use("/api", textController);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
