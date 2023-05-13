'use strict'

var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.listAllContact = function(req,res){
    var query = {sort: {firstName: 1}}
    User.find({}, null, query, function(err, Contacts){
        if(err) throw err
        console.log(Contacts)
        res.json(Contacts)
    })
}
exports.createContact = function(req,res){
    var newUser = new User(req.body)
    console.log(req.body)
    newUser.save(function(err, Contacts){
        if(err) throw err
        res.json(Contacts)
    })
}
exports.readContact= function(req,res){
    console.log(req.params.id)
    User.findById(req.params.id, function(err,Contacts){
        if(err) throw err
        res.json(Contacts)
    })
}

exports.deleteContact = function(req,res){
    console.log(req.params.id)
    User.findByIdAndRemove(req.params.id, function(err, Contacts){
        if(err) throw err
        const response = {
            message: "Delete user id : " + req.params.id,
            id: Contacts._id

        }
        res.json(response)
    })
}

exports.updateContact = function(req,res){
    console.log(req.params.id)
    var newUser = {}
    newUser = req.body
    User.findByIdAndUpdate(req.params.id, newUser, {new: true}, function(err, Contacts){
        if(err) throw err
        console.log(Contacts)
        res.json(Contacts)
    }) 
}