const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//importuję model
const User = require("../models/users");
//import bcrypta
const bcrypt = require("bcrypt");
//importuję JWT
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

//zakładanie konta
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.status(500).json({ wiadomosc: err });
    const user = new User({
      _userId: new mongoose.Types.ObjectId(),
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

//zakładanie konta
router.post("/login", (req, res, next) => {
  //najpierw sprawdzam czy jest taki email
  User.findOne({ email: req.body.email }).then((user) => {
    //jeśli jest to pobieram obiekt usera
    if (!user) {
      res.status(401).json({ wiadomosc: "Błąd autoryzacji" });
    } else {
      //weryfikuję hasha
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) return res.status(500).json({ wiadomosc: err });
        if (!result)
          return res.status(401).json({ wiadomosc: "Błąd autoryzacji" });
        //jak jest ok to zwracam JWT
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

module.exports = router;
