const mongoose = require("mongoose");

//schemat użytkownika
const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("users", userSchema);
