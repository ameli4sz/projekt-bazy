const mongoose = require("mongoose");

//schemat produktu
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
      ref: "recipes", // Referencja do kolekcji "recipes"
    },
  ],
});

module.exports = mongoose.model("shoppingList", shoppingListSchema);
