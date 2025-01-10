const mongoose = require("mongoose");

//schemat produktu
const recipesSchema = mongoose.Schema({
  //_id nie trzeba wpisywać
  _recipeId: mongoose.Types.ObjectId,
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: String,
  ingredients: String,
  tags: [String],
  instruction: String,
  prepTime: Number,
});

module.exports = mongoose.model("recipes", recipesSchema);
