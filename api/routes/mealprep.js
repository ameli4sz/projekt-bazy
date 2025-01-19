const express = require("express");
const router = express.Router();
//autoryzacja
const checkAuth = require("../middleware/checkAuth");

const mealprepController = require("../controllers/mealprep");

router.get("/", mealprepController.mealprep_get_all);

router.post("/", checkAuth, mealprepController.mealprep_add_new);

router.get("/:mealprepId", mealprepController.mealprep_get_by_id);

router.delete("/:mealprepId", checkAuth, mealprepController.mealprep_delete);

router.post(
  "/:mealprepId/recipes",
  checkAuth,
  mealprepController.add_recipe_to_mealprep
);

router.delete(
  "/:mealprepId/recipes",
  checkAuth,
  mealprepController.delete_recipe_from_mealprep
);

module.exports = router;
