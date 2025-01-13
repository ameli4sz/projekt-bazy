const mongoose = require("mongoose");

//schemat produktu
const mealprepSchema = mongoose.Schema({
  //_id nie trzeba wpisywać

  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: String,
  date: String,
  _recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipes",
}]
});

module.exports = mongoose.model("mealprep", mealprepSchema);
