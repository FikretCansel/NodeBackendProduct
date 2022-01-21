

module.exports= class Product{
    constructor(productName,categoryId,price,description,id){
        this.productName=productName;
        this.categoryId=categoryId;
        this.price=price;
        this.description=description;
        this.id=id;
    }
}