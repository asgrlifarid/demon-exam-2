
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProdctSchema = new Schema({
    title: String,
    ingredient: String,
    price: Number,
    imgUrl: String,
    category: String,
});

const ProductModel = mongoose.model('Product', ProdctSchema);
module.exports = ProductModel;