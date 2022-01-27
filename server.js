const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");
//const mongoConnect = require("./dataAccess/mongodb/context/mongoCommerceContext.js").mongoConnect;
const mongoose=require("mongoose");
const cookieParse=require("cookie-parser");
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const MooUserDal=require("./dataAccess/mongodb/moongose/mooUserDal");

const userDal = new MooUserDal();

const mongoDbConnectionString="mongodb+srv://fikfik:fik11fikret@cluster0.ko3tm.mongodb.net/Commerce?retryWrites=true&w=majority";


app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParse());

var store = new MongoDBStore({
    uri: mongoDbConnectionString,
    collection: 'mySessions'
  });

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:3600000
    },
    store: store,
}));

app.use((req,res,next)=>{
    if(!req.session.user){
        return next();
    }
    userDal.getById(req.session.user._id)
        .then(user=>{
            req.user=user;
            next();
        })
        .catch(err=>console.log(err));
});


app.use(indexRouter);

  

mongoose.connect(mongoDbConnectionString).then(()=>{
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
