const Category = require("../models/category");
const DataResult = require("../utilities/Results/DataResult");
const Result = require("../utilities/Results/Result");

exports.getAll=async(req,res,next)=>{
    
    const categories = await Category.getAll().then((data) => {
        return data[0];
    })
    .catch((err) => console.log(err));;
    let result=new DataResult(true,"Işlem Başarılı",categories);
    res.send(result);
}

exports.getById=async (req,res,next)=>{
    console.log(req.body.id);
    let category = await Category.getById(req.body.id).then((data) => {
        return data[0];
    })
    .catch((err) => console.log(err));
    let result=new DataResult(true,"Işlem Başarılı",category);
    res.send(result);
}

exports.add=async(req,res,next)=>{
    let category=new Category(req.body.name);
    category.add();
    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}

exports.update=(req,res,next)=>{
    // let categories=new Category(req.body.name);
    // categories.update(req.body.id);
    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}