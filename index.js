const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const app = express();

console.log("APP_PORT", APP_PORT);

app.get("/", (req, res) => res.send("hello world!"));

app.listen(APP_PORT, () => console.log("app started at ", APP_PORT));
