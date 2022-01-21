const mongoose =require("mongoose");

const { Schema } = mongoose;

const productShema = new Schema({
    productName:  {
        type:String,
        required:true,
        default:"Default Name"
    }, // String is shorthand for {type: String}
    categoryId: {
        type:Number,
        required:true
    },
    price:   {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Product',productShema);
