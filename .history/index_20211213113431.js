import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectdb.js";
import { Todo } from "./schema/todoSchema.js";

dotenv.config();

const app = express();
const Port = process.env.PORT || 6000;

connectDB();
//home route
app.get("/", (req, res) => {
  res.send("<h1>This is my todo application</h1>");
});

app.use(express.json());

//POST route for creating a todo
app.post("/todos", async (req, res) => {
  const { title, description, date_time } = req.body;
  const todo = await Todo.create({
    title,
    description,
    date_time,
  });
  if (todo) {
    res.status(201).json({
      success: true,
      data: todo,
      message: "Todo created successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Todo not created",
    });
  }
});

//GET route for retrieving all todos
app.get("/todos", (req, res) => {
  res.json([{ name: "abc", age: 23 }]);
});

// UPDATE route for updating a todo
app.patch("/todos/:id", (req, res) => {
  res.json({
    message: "Todo updated successfully",
  });
});

// DELETE route for deleting a todo
app.delete("/todos/:id", (req, res) => {
  res.json({
    message: "Todo deleted successfully",
  });
});

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
