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
    update(id){
        let index= categories.findIndex((i)=>i.id===id);

        categories[index].name=this.name;
        categories[index].categoryId=this.categoryId;
        categories[index].price=this.price;
        categories[index].description=this.description;
    }


}