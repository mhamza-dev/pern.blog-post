require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.HOST_PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const reactionRoutes = require("./routes/reactionRoutes");
const userreactionRoutes = require("./routes/userreactionRoutes");
const commentRoutes = require("./routes/commentRoutes");
const replyRoutes = require("./routes/replyRoutes");

app.use(express.json())
app.use("/users", userRoutes);
app.use('/categories', categoryRoutes)
app.use("/posts", postRoutes);
app.use("/reactions", reactionRoutes);
app.use("/userreactions", userreactionRoutes);
app.use("/comments", commentRoutes);
app.use("/replies", replyRoutes);

app.listen(port, () => {
  console.log(`${port} Connected!`);
});