import mongoose from "mongoose"; // Import the Mongoose library
import express from "express"; // Import the Express library
import Todo from "./models/Todo.js"; // Import the Todo model

const app = express(); // Create an Express app
const port = 3000; // Define the port number

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Define a route for the home page
app.get("/", async (req, res) => {
  try {
    const todo = new Todo({
      name: "todo",
      description: "todo",
      isDone: false,
    });
    await todo.save(); // Save the todo to the database
    res.send("Todo saved successfully!");
  } catch (err) {
    console.error("Error saving todo:", err);
    res.status(500).send("Failed to save todo");
  }
});

// Define a route to fetch todos by name
app.get("/todos/:name", async (req, res) => {
  try {
    const todos = await Todo.find({ name: req.params.name }); // Find todos by name
    if (todos.length === 0) {
      return res.status(404).send("No todos found with the given name");
    }
    res.json(todos); // Return the array of todos
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).send("Failed to fetch todos");
  }
});

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
