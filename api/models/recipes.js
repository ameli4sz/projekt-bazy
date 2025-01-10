const mongoose = require("mongoose");

//schemat produktu
const recipesSchema = mongoose.Schema({
  //_id nie trzeba wpisywać

  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: String,
  ingredients: [String],
  tags: [String],
  instruction: String,
  prepTime: String,
});

module.exports = mongoose.model("recipes", recipesSchema);
