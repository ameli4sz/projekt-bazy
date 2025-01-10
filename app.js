//zmienne środowiskowe
require("dotenv").config();

// importuję expresa
const express = require("express");

// tworzę instancję expresa
const app = express();

//połączenie z bazą danych
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mmhju.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
);

//logger
const morgan = require("morgan");
app.use(morgan("dev"));

//parsowanie body
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //od tej pory w req.body mam informacje z części body

// importuję routy
const recipesRoutes = require("./api/routes/recipes");
const usersRoutes = require("./api/routes/users");

//stosuję routy
app.use("/recipes", recipesRoutes);
app.use("/users", usersRoutes);

//błąd routu
app.use((req, res, next) => {
  res.status(404).json({ wiadomość: "Not Found" });
});

module.exports = app;
