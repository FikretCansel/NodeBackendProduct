const express = require("express");
const router = express.Router();
const controller = require("../controllers/accountController");

router.post("/account/register",controller.register);

router.post("/account/login",controller.login);

router.get("/account/logout",controller.logout);

router.post("/account/reset-password",controller.resetPassword);

router.post("/account/reset-password/:token",controller.resetCreateNewPassword);

module.exports=router;

