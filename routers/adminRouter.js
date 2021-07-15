const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");


router.post("/products/add",controller.add);

router.post("/products/update",controller.update);


module.exports=router;

