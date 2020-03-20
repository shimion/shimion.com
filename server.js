const express = require("express");
const path = require("path");
const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, "./static"))); // must need
app.get("/", (requesr, response) => {
  response.sendFile(path.join(__dirname, "./static/index.html"));
});

app.listen(port, () => {
  console.log(`Sim ${port}`);
});