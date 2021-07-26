const connection = require("../utilities/config/db")

module.exports= class Product{
    constructor(productName,categoryId,price,description){
        this.productName=productName;
        this.categoryId=categoryId;
        this.price=price;
        this.description=description;
    }
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

    add(){
        return connection.execute("Insert Into products (productName,categoryId,price,description) Values (?,?,?,?)", [this.productName, this.categoryId, this.price,this.description]);
    }
    update(id){
        // console.log(id);
        // console.log(this.productName);
        // console.log(this.categoryId);
        // console.log(this.price);
        // console.log(this.description);

        return connection.execute("Update products set (productName,categoryId,price,description) Values (?,?,?,?) where id=?"  , [this.productName, this.categoryId, this.price,this.description,id]);
    }


}