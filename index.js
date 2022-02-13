const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  const { name } = req.query;
  res.status(200).send(`Hello World! ${name ? name : ""}`);
});

app.listen(APP_PORT, () => console.log("app started at", APP_PORT));
