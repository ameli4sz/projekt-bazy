const mongoose = require("mongoose");
const Recipes = require("../models/recipes");

exports.recipes_get_all = (req, res, next) => {
  Recipes.find()
    .then((recipes) => {
      res.status(200).json({
        wiadomość: "lista wszystkich przepisów",
        lista: recipes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        wiadomość: err,
      });
    });
};

//dodawanie przepisu
exports.recipes_add_new = (req, res, next) => {
  const newRecipe = new Recipes({
    _userId: new mongoose.Types.ObjectId(req.body._userId),
    name: req.body.name,
    ingredients: req.body.ingredients,
    tags: req.body.tags,
    instruction: req.body.instruction,
    prepTime: req.body.prepTime,
  });

  //zapis do bazy
  newRecipe
    .save()
    .then((result) => {
      res.status(201).json({
        wiadomość: "utworzenie nowego przepisu",
        dane: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        wiadomość: err,
      });
    });
};

//wyszukiwanie przepisu po id
exports.recipes_get_by_id = (req, res, next) => {
  const id = req.params.recipesId;
  Recipes.findById(id).then((result) => {
    res.status(200).json({
      wiadomość: "Szczegóły przepisu o numerze " + id,
      dane: result,
    });
  });
};

//edytowanie przepisu
exports.recipes_update = (req, res, next) => {
  const id = req.params.recipesId;
  Recipes.findByIdAndUpdate(id, {
    _userId: req.body._userId,
    name: req.body.name,
    ingredients: req.body.ingredients,
    tags: req.body.tags,
    instruction: req.body.instruction,
    prepTime: req.body.prepTime,
  }).then(() => {
    res
      .status(200)
      .json({ wiadomość: "Zmiana danych przepisu o numerze " + id });
  });
};

//usunięcie przepisu
exports.recipes_delete = (req, res, next) => {
  const id = req.params.recipesId;
  Recipes.findOneAndDelete(id).then((result) => {
    res.status(200).json({ wiadomość: "Usunięcie przepisu o numerze " + id });
  });
};

exports.recipes_get_by_tag = (req, res, next) => {
  const tag = req.params.tags;
  Recipes.find({ tags: tag }).then((result) => {
    res.status(200).json({
      wiadomość: "Znalezione przepisy z tagiem: " + tag,
      dane: result,
    });
  });
};
