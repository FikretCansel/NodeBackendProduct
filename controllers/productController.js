const Product = require("../models/product");
const Result = require("../utilities/Results/Result");
const DataResult = require("../utilities/Results/DataResult");

exports.getAll=(req,res,next)=>{
    
    const products = Product.getAll();
    let result=new DataResult(true,"Işlem Başarılı",products);
    res.send(result);
}

exports.getById=(req,res,next)=>{
    console.log(req.body.id);
    let product = Product.getById(req.body.id);

    let result=new DataResult(true,"Işlem Başarılı",product);
    res.send(result);
}

exports.add=(req,res,next)=>{
    // {name:"Lenovo K6",categoryId:1,price:2000,description:"Full Hd"
    //console.log(req.body.id);

    let product=new Product(req.body.name,req.body.categoryId,req.body.price,req.body.description);
    product.add();

    let result=new Result(true,"Işlem Başarılı");

    res.send(result);
}

exports.update=(req,res,next)=>{
    let product=new Product(req.body.name,req.body.categoryId,req.body.price,req.body.description);
    product.update(req.body.id);

    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}