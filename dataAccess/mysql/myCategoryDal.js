const connection = require("./contexts/myCommerceContext.js");

export default class MyCategoryDal{
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