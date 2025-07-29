const express = require("express");

const userModel = require("./models/user");
const postModel = require("./models/posts");

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  try {
    let user1 = await userModel.create({
      name: "Omkar1111",
      email: "omkar111111@gmail.com",
      age: 25,
    });
    res.send(user1);
  } catch (err) {
    res.status(500).send("User creation failed: " + err.message);
  }
});

app.get("/post/create", async (req, res) => {
  try {
    const userId = "681ca3ca32b33b4e5ec5ef0d"; // Replace with real ID from DB

    // Check if user exists
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).send("User not found");

    // Create post
    const post = await postModel.create({
      postdata: "Hello World",
      user: userId,
    });

    // Link post to user
    user.posts.push(post._id);
    await user.save();

    res.send({ message: "Post Created", post });
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
