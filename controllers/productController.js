const Product = require("../models/product");
const Result = require("../utilities/Results/Result");
const DataResult = require("../utilities/Results/DataResult");

exports.getAll= async(req,res,next)=>{
    
    const products =await  Product.getAll().then((data) => {
        return data[0];
    })
    .catch((err) => console.log(err));
    let result=new DataResult(true,"Işlem Başarılı",products);
    res.send(result);
}

exports.getById=async(req,res,next)=>{
    console.log(req.body.id);
    let product =await Product.getById(req.body.id).then((data)=>{
        return data[0];
    }).catch((err) => console.log(err));;

    let result=new DataResult(true,"Işlem Başarılı",product);
    res.send(result);
}
exports.getByCategoryId=async(req,res,next)=>{
    console.log(req.body.categoryId);
    let product =await Product.getByCategoryId(req.body.categoryId).then((data)=>{
        return data[0];
    }).catch((err) => console.log(err));;

    let result=new DataResult(true,"Işlem Başarılı",product);
    res.send(result);
}

exports.add=async(req,res,next)=>{
    // {name:"Lenovo K6",categoryId:1,price:2000,description:"Full Hd"
    //console.log(req.body.id);
    
    let product=new Product(req.body.productName,req.body.categoryId,req.body.price,req.body.description);
    product.add();

    let result=new Result(true,"Işlem Başarılı");

    res.send(result);
}

exports.update=(req,res,next)=>{
    let product=new Product(req.body.productName,req.body.categoryId,req.body.price,req.body.description);
    product.update(req.body.id);

    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}

exports.delete=(req,res,next)=>{
    Product.delete(req.body.id);

    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}