const mongoose = require("mongoose");

//schemat listy
const shoppingListSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  _mealprepId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mealprep",
  },

  name: String,
  items: [
    {
      type: [String],
      ref: "recipes",
    },
  ],
});

module.exports = mongoose.model("shoppingList", shoppingListSchema);
