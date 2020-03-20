const express = require("express");
const path = require("path"); // must defined
const app = express();

const port = 3000; // must defined
app.use(express.static(path.join(__dirname, "./static"))); // must defined
app.get("/", (requesr, response) => {
  response.sendFile(path.join(__dirname, "./static/index.html")); //response.sendFile is to send/set specific file for the specific mathod ie GET/POST
});

app.listen(port, () => {
  console.log(`Sim ${port}`);
});
