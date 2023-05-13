'use strict'
const { ObjectId, Timestamp } = require('mongodb');
var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    // _id: ObjectId,
    author: String,
    product_img: String,
    product_name: String,
    price: Number,
    shipping_cost: Number,
    description: String,
    like: Number,
    time: Date,
    sold: Boolean,
    categories: Array,
    //ยังไม่มีส่วนของ comment
},{collection : 'blogs'});

module.exports = mongoose.model('Blogs', blogSchema);