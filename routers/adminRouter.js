const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const miAuthentication=require("../middleware/miAuthentication");
const miIsAdmin = require("../middleware/miIsAdmin");

router.post("/products/add",miAuthentication,miIsAdmin,productController.add);

router.post("/products/update",miAuthentication,miIsAdmin,productController.update);

router.delete("/products/delete",miAuthentication,miIsAdmin,productController.delete);

router.post("/categories/add",miAuthentication,miIsAdmin,categoryController.add);

router.post("/categories/update",miAuthentication,miIsAdmin,categoryController.update);


module.exports=router;

