const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email:  String, // String is shorthand for {type: String}
  password: String,
  name:   String,
  resetToken:String,
  resetTokenExpiration:Date,
  isAdmin:{
    type:Boolean,
    default:false
  }
});

module.exports=mongoose.model('User',userSchema);