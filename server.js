const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");
const mongoConnect = require("./dataAccess/mongodb/context/mongoCommerceContext.js").mongoConnect;



const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(indexRouter);

mongoConnect((client)=>{
    const port= 3000;
    app.listen(port,()=>console.log(`Run on port ${port}`));
    //console.log(client);
});

