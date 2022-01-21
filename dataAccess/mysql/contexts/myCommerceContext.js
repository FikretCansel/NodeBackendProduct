const mysql=require("mysql2");


const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        database:'node-demo',
        password:"fikret"
    }
);

module.exports=connection.promise();