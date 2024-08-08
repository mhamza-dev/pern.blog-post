require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.HOST_PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(express.json())
app.use("/users", userRoutes);
app.use('/categories', categoryRoutes)
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`${port} Connected!`);
});