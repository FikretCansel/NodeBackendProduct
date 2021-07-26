const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");

router.get("/categories",controller.getAll)

router.get("/categories/getAll",controller.getAll)

router.get("/categories/getById",controller.getById)

module.exports=router;

