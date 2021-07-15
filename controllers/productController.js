const Product = require("../models/product");

exports.getAll=(req,res,next)=>{
    console.log("get all çalıştı");
    const products = Product.getAll();
    res.send(products);
}

exports.getById=(req,res,next)=>{
    console.log(req.body.id);
    let product = Product.getById(req.body.id);
    res.send(product);
}

exports.add=(req,res,next)=>{
    // {name:"Lenovo K6",categoryId:1,price:2000,description:"Full Hd"
    //console.log(req.body.id);

    let product=new Product(req.body.name,req.body.categoryId,req.body.price,req.body.description);
    product.add();
    res.send("Işlem Başarılı");
}

exports.update=(req,res,next)=>{
    let product=new Product(req.body.name,req.body.categoryId,req.body.price,req.body.description);
    product.update();
    res.send("Işlem Başarılı");
}