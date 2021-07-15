const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))


app.use(indexRouter);

const port= 3000;
app.listen(port,()=>console.log(`Run on port ${port}`));