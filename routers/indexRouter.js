const express = require("express");
const router = express.Router();
const product = require("./productRouter");
const category = require("./categoryRouter");
const admin = require("./adminRouter");
const account = require("./accoutRouter");
const routers=[product,category,admin,account];


routers.forEach((item)=>{
    router.use(item);
})

module.exports=router;

