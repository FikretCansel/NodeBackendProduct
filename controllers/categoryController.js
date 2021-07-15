const Category = require("../models/category");
const DataResult = require("../utilities/Results/DataResult");
const Result = require("../utilities/Results/Result");

exports.getAll=(req,res,next)=>{
    
    const categories = Category.getAll();
    let result=new DataResult(true,"Işlem Başarılı",categories);
    res.send(result);
}

exports.getById=(req,res,next)=>{
    let category = Category.getById(req.body.id);
    let result=new DataResult(true,"Işlem Başarılı",category);
    res.send(result);
}

exports.add=(req,res,next)=>{
    
    let category=new Category(req.body.name);
    category.add();
    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}

exports.update=(req,res,next)=>{
    let categories=new Category(req.body.name);
    categories.update(req.body.id);
    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}