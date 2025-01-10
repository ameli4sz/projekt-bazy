const mongoose = require("mongoose");

//schemat produktu
const mealprepSchema = mongoose.Schema({
  //_id nie trzeba wpisywać
  _mealprepId: mongoose.Types.ObjectId,
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  mealprep: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recipes",
    },
  ],
});

module.exports = mongoose.model("mealprep", mealprepSchema);
