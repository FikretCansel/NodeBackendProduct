const connection = require("./contexts/msCommerceContext.js");

export default class MyCategoryDal{
    static getAll(){
        var request = new sql.Request();
        return connection.then((e=>{
            e.execute(request.query('select * from Products'));
        }));
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