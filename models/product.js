const connection = require("../utilitys/db")

module.exports = class Product {


    constructor(productName, categoryId, price) {
        this.productName = productName;
        this.categoryId = categoryId;
        this.price = price;
    }

    static getAll() {
        return connection.execute('Select * from products')
    }
    static delete(id){
        return connection.execute("Delete from products where id=?",[id])
    }
    saveProduct() {
        return connection.execute("Insert Into products (productName,categoryId,price) Values (?,?,?)", [this.productName, this.categoryId, this.price]);
    }



}