const getDb = require('./context/mongoCommerceContext.js').getDb;
const mongodb=require("mongodb")


module.exports=class MoProductDal{
    
    add(product){
        const db = getDb();
        delete product.id;
        db.collection('products').insertOne(product).then(result=>{
            console.log(result)
        })
        .catch(err=>{console.log(err);});
    }

    getAll(){
        const db=getDb();
        return db.collection("products").find({}).toArray().then(products=>{return products}).catch(err=>console.log(err));
    }
    getById(productId){
        const db=getDb();
        return db.collection("products").findOne({_id:mongodb.ObjectId(productId)}).then(products=>{return products}).catch(err=>console.log(err));
    }
    getByCategoryId(categoryId){
        const db=getDb();
        return db.collection("products").find({categoryId:categoryId}).toArray().then(products=>{return products}).catch(err=>console.log(err));
    }
    update(product){
        const db=getDb();
        let productId=product.id;
        delete product.id;

        return db.collection("products").updateOne({_id:mongodb.ObjectId(productId)},{$set: product}).then(data=>{return data}).catch(err=>console.log(err));
    }
    delete(productId){
        const db=getDb();
        return db.collection("products").deleteOne({_id:mongodb.ObjectId(productId)}).then(data=>{return data}).catch(err=>console.log(err));
    }
}
