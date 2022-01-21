var sql = require("mssql");


var config = {
    user: 'sa',
    password: 'fikret',
    server: 'DESKTOP-AIPNGTD', 
    database: 'Commerce'
};

module.exports=sql.connect(config,function(err) {
    if(err){
        console.log("Baglantida hata oluştu "+err);
    }
});

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('Commerce', 'fikret', 'fikret', {
//     host: 'localhost',
//     dialect: 'mssql'
//   });




