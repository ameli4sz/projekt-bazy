const express = require("express");
const router = express.Router();
//autoryzacja
const checkAuth = require("../middleware/checkAuth");

const shoppingListController = require("../controllers/shoppingList");

router.post("/", checkAuth, shoppingListController.shoppingList_add_new);

router.delete(
  "/:shoppingListId",
  checkAuth,
  shoppingListController.shoppingList_delete
);

router.get("/:shoppingListId", shoppingListController.shoppingList_get_by_id);

module.exports = router;
