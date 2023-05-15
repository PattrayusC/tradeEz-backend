'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({ //Json Schema Validate
    uid: {
        type: String,
        // required: 'Please enter'
    },
    email: {
        type: String,
        // required: 'Please enter'
    },
    username: {
        type: String,
        // required: 'Please enter'
    },
    firstname: {
        type: String,
        // required: 'Please enter'
    },
    lastname: {
        type: String,
        // required: 'Please enter'
    },
    picture_uri: {
        type: String,
        // required: 'Please enter'
    },
    phone: {
        type: String,
        default: null
    },
    facebook: {
        type: String,
        default: "facebook.com/"
    },
    twitter: {
        type: String,
        default: "twitter.com/"
    },
    point:{
        type: Number,
        default: 0
    }
},{collection : 'Users'})
module.exports = mongoose.model('Users', UserSchema)