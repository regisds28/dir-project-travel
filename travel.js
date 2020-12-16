const express = require("express");
const expressHandlebars = require("express-handlebars");
const message = require("./lib/message");
const handlers = require("./lib/handlers");

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

app.get("/", (req, res) => handlers.home);
app.get("/about", (req, res) => handlers.about);

app.use(express.static(__dirname + "/public"));

//página 404 personalizada
app.use((req, res) => handlers.notFound);

//página 500 personalizada
app.use((err, req, res, next) => handlers.serverError);

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port};` + `press Ctrl+C to terminate`
  )
);
