const mongoose =require("mongoose");

const { Schema } = mongoose;

const productShema = new Schema({
    productName:  {
        type:String,
        required:[true,"Ürün adı gereklidir."],
        minlength:3
    }, // String is shorthand for {type: String}
    categoryId: {
        type:Number,
        required:true
    },
    price:   {
        type:Number,
        // required:function () {
        //     return this.isActive;
        // },
        required:true,
        min:0
    },
    description: {
        type:String,
        validate:{
            validator:function(value) {
                return value && value.length >5;
            },
            message:'Ürün açıklaması en 5 karakter uzunlugunda olmalıdır.'
        }
    },
    isActive:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Product',productShema);
