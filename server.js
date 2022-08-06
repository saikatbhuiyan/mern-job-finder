const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
