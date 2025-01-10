const express = require("express");
const router = express.Router();
//autoryzacja
const checkAuth = require("../middleware/checkAuth");

//importuję kontroler
const recipesController = require("../controllers/recipes");

router.get("/", recipesController.recipes_get_all);

router.post("/", checkAuth, recipesController.recipes_add_new);

router.get("/:recipesId", recipesController.recipes_get_by_id);

router.put("/:recipesId", recipesController.recipes_update);

router.delete("/:recipesId", recipesController.recipes_delete);

router.get("/tags/:tags", recipesController.recipes_get_by_tag);

module.exports = router;
