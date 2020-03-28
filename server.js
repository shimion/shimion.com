const express = require("express");
const path = require("path");
const Wp = require("./data/db");
//const nurlWp = require("./data/url");
const app = express();
const theme = "joe";
const theme_path = "./static/" + theme;
const port = 3000;
app.use(express.static(path.join(__dirname, theme_path))); // must need
app.get("/", (requesr, response) => {
  response.sendFile(path.join(__dirname, theme_path + "/index.html"));
});

app.listen(port, () => {
  console.log(`Sim ${port}`);
});
