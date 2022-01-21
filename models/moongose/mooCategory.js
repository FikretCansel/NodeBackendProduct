import mongoose from 'mongoose';
const { Schema } = mongoose;

const categoryShema = new Schema({
    name:  String, // String is shorthand for {type: String}
    _id: Number,
});

module.exports = mongoose.model('Product',categoryShema);
