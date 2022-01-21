const Product = require("../models/product");
const Result = require("../utilities/Results/Result");
const DataResult = require("../utilities/Results/DataResult");
const MooProductDal = require("../dataAccess/mongodb/moongose/mooProductDal");
const Messages = require("../utilities/ResultMessages/Messages.js");


const productDal= new MooProductDal();

exports.getAll= async(req,res,next)=>{
    
    let products =await productDal.getAll().then(data=>{return data;}).catch(err=>console.log(err));
    
    let result=new DataResult(true,"Işlem Başarılı",products);
    res.send(result);
}

exports.getById=async(req,res,next)=>{
    console.log(req.body.id);
    let productId=req.body.id;
    let product =await productDal.getById(productId).then((data)=>{
        console.log(data);
        return data;
    }).catch((err) => console.log(err));

    let result=new DataResult(true,Messages.OperationSuccess,product);
    res.send(result);
}
exports.getByCategoryId=async(req,res,next)=>{
    console.log(req.body.categoryId);
    let product =await productDal.getByCategoryId(req.body.categoryId).then((data)=>{
        return data;
    }).catch((err) => console.log(err));;

    let result=new DataResult(true,"Işlem Başarılı",product);
    res.send(result);
}

exports.add=async(req,res,next)=>{
    // {productName:"Lenovo K6",categoryId:1,price:2000,description:"Full Hd"
    
    let product=new Product(req.body.productName,req.body.categoryId,req.body.price,req.body.description);
    //let product=new Product("monster laptopv17.1",1,1600,"gtx1650 ekran karti");
    productDal.add(product).then(data=>{return data;}).catch(err=>console.log(err));;
    let result=new Result(true,Messages.OperationSuccess);

    res.send(result);
}

exports.update=async(req,res,next)=>{
    let product=new Product(req.body.productName,req.body.categoryId,req.body.price,req.body.description,req.body.id);
    let data = await productDal.update(product).then(data=>{return data;}).catch(err=>console.log(err));

    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}

exports.delete=async(req,res,next)=>{
    productDal.delete(req.body.id).then(data=>{return data;}).catch(err=>console.log(err));

    let result=new Result(true,"Işlem Başarılı");
    res.send(result);
}