const connection = require("../utilities/config/db")

module.exports= class Category{
    constructor(name){
        this.name=name;
    }
    static getAll(){
        return connection.execute('Select * from categories')
    }
    static getById(id){
        return connection.execute("Select * from categories where id=?",[id]);
    }
    static delete(id){
        return connection.execute("Delete from categories where id=?",[id]);
    }
    add(){
        return connection.execute("Insert Into categories (name) Values (?)", [this.name]);
    }
    update(id){
        return null;
    }


}