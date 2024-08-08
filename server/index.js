require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.HOST_PORT || 5000;
const userRoutes = require("./routes/userRoutes");

app.use(express.json())
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`${port} Connected!`);
});