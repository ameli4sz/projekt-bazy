const express = require("express");
const router = express.Router();
//autoryzacja
const checkAuth = require("../middleware/checkAuth");

//importuję kontroler
const mealprepController = require("../controllers/mealprep");

router.get("/", mealprepController.mealprep_get_all);

// {
//     "_userId": "6782696083e34b97edc5ddd5",
//     "name": "poniedziałek9",
//     "date": "13-01-2025",
//     "recipes": ["678199185b62368e93f52c23"]
// }

router.post("/", checkAuth, mealprepController.mealprep_add_new);

// router.get("/:recipesId", recipesController.recipes_get_by_id);

// router.put("/:recipesId", checkAuth, recipesController.recipes_update);

// router.delete("/:recipesId", checkAuth, recipesController.recipes_delete);

// router.get("/tags/:tags", recipesController.recipes_get_by_tag);

// // router.get("/:user_id", recipesController.recipes_get_by_author);

module.exports = router;
