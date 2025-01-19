const mongoose = require("mongoose");

//schemat przepisu
const recipesSchema = mongoose.Schema({
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
