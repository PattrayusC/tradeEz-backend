'use strict'

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

exports.updateUser = function(req, res) {
    var newUser = {}
    newUser = req.body
    console.log(req.body)
    User.findByIdAndUpdate(req.params._id, newUser, {new: true}, function(err, Users) {
        if (err) throw err
        res.json(Users)
    })
}