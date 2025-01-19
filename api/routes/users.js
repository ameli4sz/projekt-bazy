const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const checkAuth = require("../middleware/checkAuth");

//zakładanie konta
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.status(500).json({ wiadomosc: err });
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() =>
        res
          .status(201)
          .json({ wiadomosc: "dodano użytkownika o id: " + user._id })
      );
  });
});

//logowanie
router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(401).json({ wiadomosc: "Błąd autoryzacji" });
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) return res.status(500).json({ wiadomosc: err });
        if (!result)
          return res.status(401).json({ wiadomosc: "Błąd autoryzacji" });

        const token = jwt.sign(
          { user: user._id, email: user.email },
          process.env.JWT_KEY,
          { expiresIn: "1d" }
        );
        return res.status(200).json(token);
      });
    }
  });
});

//wyświetlanie wszystkich użytkowników
router.get("/", checkAuth, (req, res, next) => {
  User.find().then((users) => {
    res.status(200).json({
      wiadomość: "lista wszystkich użytkowników:",
      lista: users,
    });
  });
});

//usuwanie użutkownika
router.delete("/:userId", checkAuth, (req, res, next) => {
  const id = req.params.userId;
  User.findByIdAndDelete(id).then((result) => {
    res.status(200).json({ wiadomość: "Usunięto użytkownika o numerze: ", id });
  });
});

module.exports = router;
