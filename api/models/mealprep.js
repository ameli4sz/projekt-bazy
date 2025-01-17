const mongoose = require("mongoose");

//schemat produktu
const mealprepSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Referencja do kolekcji "users"
  },
  name: String,
  date: String,
  recipes: [
    // Upewnij się, że to pole jest poprawnie zdefiniowane
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recipes", // Referencja do kolekcji "recipes"
    },
  ],
});

module.exports = mongoose.model("mealprep", mealprepSchema);
