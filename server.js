const app = require("express")();
const productController = require("./controller/productController")






const app = require("express")();
const Product = require("./models/product")
var bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const connection = require("./utilitys/db");


app.get("/products/getAll", function (req, res) {

    Product.getAll().then((result) => {
        res.send(result[0])
        res.statusCode=200;
        res.end();
    })
    .catch((err) => console.log(err));

})

app.get("/products/getById", function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" })

    console.log("Id :" + req.query.id);
    console.log("categoryId :" + req.query.categoryId);
    res.send("products getById")
    res.end();
})

app.post("/products/add", urlEncodedParser, function (req, res) {

    const product = new Product(req.body.productName,req.body.categoryId,req.body.price);

    product.saveProduct().then((result)=>{
        res.send("success:true");
        res.end();
    }).catch((err)=>res.end("success:false"+err))
    
})
app.post("/products/delete",urlEncodedParser, function (req, res) {

    Product.delete(req.body.id).then(result=>res.end("success:true")).catch(err=>"success:false"+err);
})
app.get("/products/update", function (req, res) {

    res.send("product update")
    res.end();
})









const port = 3000;
app.listen(port, () => console.log(`Run on port ${port}`));