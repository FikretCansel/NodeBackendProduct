const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const miAuthentication=require("../middleware/miAuthentication");
const miIsAdmin = require("../middleware/miIsAdmin");

router.get("/products",controller.getAll);

router.get("/products/getAll",miAuthentication,miIsAdmin,controller.getAll);

router.get("/products/getById",controller.getById);

router.get("/products/getByCategoryId",controller.getByCategoryId);

module.exports=router;

