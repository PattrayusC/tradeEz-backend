'use strict'
var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
},{collection : 'images'});
 
module.exports = mongoose.model('Images', imageSchema);