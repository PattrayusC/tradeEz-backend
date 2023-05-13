'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({ //Json Schema Validate
    cid: {
        type: String,
        required: 'Please enter'
    },
    firstName: {
        type: String,
        required: 'Please enter'
    },
    lastName: {
        type: String,
        required: 'Please enter'
    },
    email: {
        type: String,
        default: null
    },
    mobile: {
        type: String,
        required: 'Please enter'
    },
    facebook: {
        type: String,
        default: null
    },
    imageUrl: {
        type: String,
        default: null
    }
},{collection : 'Contacts'})
module.exports = mongoose.model('Users', UserSchema)