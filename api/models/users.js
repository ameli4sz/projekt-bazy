const mongoose = require("mongoose");

//schemat użytkownika
const userSchema = mongoose.Schema({
  //_id nie trzeba wpisywać
  _userId: mongoose.Types.ObjectId,
  email: String,
  password: String,
});

module.exports = mongoose.model("users", userSchema);
