const express = require("express");
const router = express.Router();
//autoryzacja
const checkAuth = require("../middleware/checkAuth");

//importuję kontroler
const recipesController = require("../controllers/products");

router.get("/", recipesController.recipes_get_all);

router.post("/", checkAuth, recipesController.recipes_add_new);

/*router.get("/:productId", ProductController.products_get_by_id);

router.put("/:productId", ProductController.products_update);

router.delete("/:productId", ProductController.products_delete);*/

module.exports = router;
