const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");
//const mongoConnect = require("./dataAccess/mongodb/context/mongoCommerceContext.js").mongoConnect;
const mongoose=require("mongoose");


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(indexRouter);

mongoose.connect('mongodb+srv://fikret:fikret@cluster0.ko3tm.mongodb.net/Commerce?retryWrites=true&w=majority').then(()=>{
    const port= 3000;
    app.listen(port,()=>console.log(`Run on port ${port}`));
    console.log("Connected");
})
.catch(err=>{
    console.log("Mongoose Connect Error "+err);
})

/*
mongoConnect((client)=>{
    const port= 3000;
    app.listen(port,()=>console.log(`Run on port ${port}`));
    //console.log(client);
});
*/
