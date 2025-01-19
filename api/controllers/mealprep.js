const mongoose = require("mongoose");
const Mealprep = require("../models/mealprep");

// wyświetlanie wszystkich mealprepów
exports.mealprep_get_all = (req, res, next) => {
  Mealprep.find()
    .populate({
      path: "recipes",
      select: "name",
    })
    .then((mealprep) => {
      res.status(200).json({
        wiadomość: "lista wszystkich planów posiłków",
        lista: mealprep,
      });
    })
    .catch((err) => {
      res.status(500).json({
        wiadomość: err,
      });
    });
};

//tworzenie mealprepów
exports.mealprep_add_new = (req, res, next) => {
  const newMealprep = new Mealprep({
    _userId: req.body._userId,
    name: req.body.name,
    date: req.body.date,
    recipes: req.body.recipes,
  });

  // Zapis do bazy
  newMealprep
    .save()
    .then((result) => {
      // Populowanie przepisu
      return Mealprep.findById(result._id).populate("recipes"); // Populowanie odniesień do przepisów
    })
    .then((populatedMealprep) => {
      res.status(201).json({
        wiadomość: "Utworzono nowy plan posiłków z dodanymi przepisami",
        dane: populatedMealprep,
      });
    })
    .catch((err) => {
      res.status(500).json({
        wiadomość: "Błąd podczas tworzenia planu posiłków",
        błąd: err.message,
      });
    });
};

//usuwanie mealprepu po ID
exports.mealprep_delete = (req, res, next) => {
  const id = req.params.mealprepId;
  Mealprep.findOneAndDelete(id).then((result) => {
    res
      .status(200)
      .json({ wiadomość: "Usunięcie planu posiłków o numerze " + id });
  });
};

//wyszukiwanie planu posiłków po id
exports.mealprep_get_by_id = (req, res, next) => {
  const id = req.params.mealprepId;
  Mealprep.findById(id)
    .then((result) => {
      return Mealprep.findById(result._id).populate("recipes");
    })
    .then((populatedMealprep) => {
      res.status(200).json({
        wiadomość: "Szczegóły planu posiłków o numerze " + id,
        dane: populatedMealprep,
      });
    });
};

//dodawanie przepisu do istniejącego mealprepu
exports.add_recipe_to_mealprep = (req, res, next) => {
  const mealprepId = req.params.mealprepId;
  const recipesId = req.body.recipesId;

  Mealprep.findByIdAndUpdate(
    mealprepId,
    { $push: { recipes: recipesId } },
    { new: true }
  )
    .populate("recipes")
    .then((updatedMealprep) => {
      res.status(200).json({
        message: "Przepis został dodany do planu posiłków",
        mealprep: updatedMealprep,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

//usuwanie przepisu z istniejącego mealprepu
exports.delete_recipe_from_mealprep = (req, res, next) => {
  const mealprepId = req.params.mealprepId;
  const recipesId = req.body.recipesId;

  Mealprep.findByIdAndUpdate(
    mealprepId,
    { $pull: { recipes: recipesId } },
    { new: true }
  )
    .populate("recipes")
    .then((updatedMealprep) => {
      res.status(200).json({
        message: "Przepis został usunięty z planu posiłków",
        mealprep: updatedMealprep,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
