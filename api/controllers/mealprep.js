const mongoose = require("mongoose");
//importuję model
const Mealprep = require("../models/mealprep");

// wyświetlanie wszystkich mealprepów
exports.mealprep_get_all = (req, res, next) => {
  Mealprep.find()
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

exports.mealprep_add_new = (req, res, next) => {
  const newMealprep = new Mealprep({
    _userId: req.body._userId,
    name: req.body.name,
    date: req.body.date,
    recipes: req.body.recipes, // Tablica identyfikatorów przepisów
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
  

// //wyszukiwanie przepisu po id
// exports.recipes_get_by_id = (req, res, next) => {
//   const id = req.params.recipesId;
//   Recipes.findById(id).then((result) => {
//     res.status(200).json({
//       wiadomość: "Szczegóły przepisu o numerze " + id,
//       dane: result,
//     });
//   });
// };

// //edytowanie przepisu
// exports.recipes_update = (req, res, next) => {
//   const id = req.params.recipesId;
//   Recipes.findByIdAndUpdate(id, {
//     _userId: req.body._userId,
//     name: req.body.name,
//     ingredients: req.body.ingredients,
//     tags: req.body.tags,
//     instruction: req.body.instruction,
//     prepTime: req.body.prepTime,
//   }).then(() => {
//     res
//       .status(200)
//       .json({ wiadomość: "Zmiana danych przepisu o numerze " + id });
//   });
// };

// //usunięcie przepisu
// exports.recipes_delete = (req, res, next) => {
//   const id = req.params.recipesId;
//   Recipes.findOneAndDelete(id).then((result) => {
//     res.status(200).json({ wiadomość: "Usunięcie przepisu o numerze " + id });
//   });
// };

// exports.recipes_get_by_tag = (req, res, next) => {
//   const tag = req.params.tags;
//   Recipes.find({ tags: tag }).then((result) => {
//     res.status(200).json({
//       wiadomość: "Znalezione przepisy z tagiem: " + tag,
//       dane: result,
//     });
//   });
// };


