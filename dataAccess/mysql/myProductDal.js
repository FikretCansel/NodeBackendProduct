const connection = require("./contexts/myCommerceContext.js");

export default class myProductDal{
    static getAll(){
        return connection.execute('Select * from products')
    }
    static getById(id){
        return connection.execute("Select * from products where id=?",[id])
    }
    static getByCategoryId(id){
        return connection.execute("Select * from products where categoryId=?",[id])
    }
    static delete(id){
        return connection.execute("Delete from products where id=?",[id])
    }

    add(product){
        return connection.execute("Insert Into products (productName,categoryId,price,description) Values (?,?,?,?)", [product.productName, product.categoryId, product.price,product.description]);
    }
    update(product){
        return connection.execute("Update products set (productName,categoryId,price,description) Values (?,?,?,?) where id=?"  , [product.productName, product.categoryId, product.price,product.description,product.id]);
    }
}