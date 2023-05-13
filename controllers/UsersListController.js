'use strict'

const { query } = require('express')
var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.registerUser = function(req,res){
    var newUser = new User(req.body)
    newUser.save(function(err, Users){
        if(err) throw err
        res.json(Users)
    })
}

exports.getUserbyUID = function(req,res){
    console.log(req.params.uid)
    var query = {uid: req.params.uid}
    User.find(query,function(err,Users){
        if(err) throw err
        res.json(Users)
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