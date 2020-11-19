const express = require("express");
const expressHandlebars = require("express-handlebars");
const message = require("./lib/message");

//usar assim requer o "type":"module" no package.json
//import express from "express";
//import expressHandlebars from "express-handlebars";

const app = express();
const port = process.env.PORT || 3000;

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => {
  res.render("about", { message: message.getMessages });
});

app.use(express.static(__dirname + "/public"));

//página 404 personalizada
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

//página 500 personalizada
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port};` + `press Ctrl+C to terminate`
  )
);
