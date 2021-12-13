import express from "express";
import dotenv from "dotenv";
dotenv.config("./config/config.env");

const app = express();
const Port = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
