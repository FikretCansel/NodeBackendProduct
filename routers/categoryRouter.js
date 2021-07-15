const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");

router.get("/categories",controller.getAll)

router.get("/categories/getAll",controller.getAll)

router.get("/categories/add",controller.add)

router.get("/categories/update",controller.update)

module.exports=router;

