// models/Product.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['milk', 'fruits'], 
  },
  mrp: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String, 
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive'], 
  }
});

const Product = mongoose.model('Product', productSchema);



export default Product;
