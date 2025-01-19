const mongoose = require("mongoose");

//schemat mealprepu
const mealprepSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: String,
  date: String,
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recipes",
    },
  ],
});

module.exports = mongoose.model("mealprep", mealprepSchema);
