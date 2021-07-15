const products = [{id:"1",name:"Lenovo K6",categoryId:"1",price:2000,description:"Full Hd"}]


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
    update(product){
        let index= products.findIndex((i)=>i===product.id);

        product[index].name=this.name;
        product[index].categoryId=this.categoryId;
        product[index].price=price;
        product[index].description=description;
    }


}