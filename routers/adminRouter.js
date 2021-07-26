const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");

router.post("/products/add",productController.add);

router.post("/products/update",productController.update);

router.delete("/products/delete",productController.delete);

router.post("/categories/add",categoryController.add);

router.post("/categories/update",categoryController.update);


module.exports=router;

