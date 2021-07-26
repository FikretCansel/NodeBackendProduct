const express = require("express");
const router = express.Router();
const product = require("./productRouter");
const category = require("./categoryRouter");
const admin = require("./adminRouter");

const routers=[product,category,admin];


routers.forEach((item)=>{
    router.use(item);
})

module.exports=router;

