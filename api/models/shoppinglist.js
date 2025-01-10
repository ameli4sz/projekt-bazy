const mongoose = require("mongoose");

//schemat listy zakupów
const ItemSchema = mongoose.Schema({
  ingredient_name: { type: String },
  quantity: { type: Number },
});

const ShoppingListSchema = new mongoose.Schema({
  _listId: mongoose.Types.ObjectId,

  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  _mealprepId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mealprep",
  },
  items: [ItemSchema],
});

module.exports = mongoose.model("shoppinglist", ShoppingListSchema);
