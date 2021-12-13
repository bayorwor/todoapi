import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const Port = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("<h1>This is my todo application</h1>");
});

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
