import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const Port = process.env.PORT || 6000;

app.get("/todo", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
