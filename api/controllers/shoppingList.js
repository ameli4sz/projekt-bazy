const mongoose = require("mongoose");
const ShoppingList = require("../models/shoppingList");
const Mealprep = require("../models/mealprep");

// Tworzenie listy zakupów
exports.shoppingList_add_new = (req, res, next) => {
  const { _userId, _mealprepId, name } = req.body;

  Mealprep.findById(_mealprepId)
    .populate({
      path: "recipes",
      select: "ingredients",
    })
    .then((mealprep) => {
      if (!mealprep) {
        return res.status(404).json({ message: "Mealprep nie znaleziono" });
      }

      const allIngredients = mealprep.recipes.flatMap(
        (recipe) => recipe.ingredients
      );

      const uniqueIngredients = [...new Set(allIngredients)];

      const newShoppingList = new ShoppingList({
        _userId,
        _mealprepId,
        name,
        items: uniqueIngredients,
      });

      return newShoppingList.save().then((savedList) => {
        res.status(201).json({
          message: "Lista zakupów została wygenerowana i zapisana",
          shoppingList: savedList,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

//usuwanie listy zakupów po ID
exports.shoppingList_delete = (req, res, next) => {
  const id = req.params.shoppingListId;
  ShoppingList.findOneAndDelete(id).then((result) => {
    res
      .status(200)
      .json({ wiadomość: "Usunięcie listy zakupów o numerze " + id });
  });
};

//wyszukiwanie listy zakupów po id
exports.shoppingList_get_by_id = (req, res, next) => {
  const id = req.params.shoppingListId;
  ShoppingList.findById(id).then((shoppingList) => {
    res.status(200).json({
      wiadomość: "Szczegóły listy zakupów o numerze " + id,
      dane: shoppingList,
    });
  });
};
