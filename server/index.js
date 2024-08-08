require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.HostPort || 5000

app.listen(port, () => {
  console.log(`${port} Connected!`);
});