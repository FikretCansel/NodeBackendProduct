const products = [{id:"1",name:"Lenovo K6",categoryId:"1",price:2000,description:"Full Hd"}]
//const connection = require("../utilitys/db")

module.exports= class Product{
    constructor(name,categoryId,price,description){
        this.id=products.length+1;
        this.name=name;
        this.categoryId=categoryId;
        this.price=price;
        this.description=description;
    }
    static getAll(){
        return products;
    }
    static getById(id){
         return products.find(product=>product.id===id);
    }
    static getByCategoryId(id){
        return products.filter(c=>c.categoryId===id);
    }

    add(){
        products.push(this);
    }
    update(id){
        let index= products.findIndex((i)=>i.id===id);

        products[index].name=this.name;
        products[index].categoryId=this.categoryId;
        products[index].price=this.price;
        products[index].description=this.description;
    }


}