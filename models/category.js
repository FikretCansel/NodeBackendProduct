const categories = [{id:"1",name:"Bilgisayar"}]


module.exports= class Category{
    constructor(name){
        this.id=categories.length+1;
        this.name=name;
    }
    static getAll(){
        return categories;
    }
    static getById(id){
         return categories.find(product=>product.id===id);
    }

    add(){
        categories.push(this);
    }
    update(product){
        let index= products.findIndex((i)=>i===product.id);

        categories[index].name=this.name;
        categories[index].categoryId=this.categoryId;
        categories[index].price=price;
        categories[index].description=description;
    }


}