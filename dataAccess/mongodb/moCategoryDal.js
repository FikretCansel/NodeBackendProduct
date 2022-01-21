const getDb = require('./context/mongoCommerceContext.js').getDb;


module.exports=class MoCategoryDal{
    add(category){
        const db = getDb();
        db.collection('categories').insertOne(category).then(result=>{
            console.log(result)
        })
        .catch(err=>{console.log(err);});
    }
    getAll(){
        const db=getDb();
        return db.collection("categories").find({}).toArray().then(categories=>{return categories}).catch(err=>console.log(err));
    }
    getById(categoryId){
        const db=getDb();
        return db.collection("categories").findOne({_id:mongodb.ObjectId(categoryId)}).then(category=>{return category}).catch(err=>console.log(err));
    }
}