const express = require("express");
const router = express.Router();
const produtController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");

router.post("/products/add",produtController.add);

router.post("/products/update",produtController.update);

router.post("/categories/add",categoryController.add);

router.post("/categories/update",categoryController.update);


module.exports=router;

