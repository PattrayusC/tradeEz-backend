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
    console.log('get userdata => '+ req.params.uid)
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

exports.updataMyorder = function(req,res){
    var query = {uid: req.params.uid}
    User.find(query,function(err,Users){ 
        if(err) throw err
        if(Users[0].orderBlog.includes(req.body._id)){
            console.log("Already have")
            res.json({
                joined: true
            })
        }else{
            Users[0].orderBlog.push(req.body._id)
            Users[0].save(function(err, Userss){
            if(err) throw err
            console.log("add " + req.body._id + " to Order")
            res.json({
                joined: false
            })
        })
        }
    })
}

exports.joinEvent = function(req,res){
    var query = {uid: req.params.uid}
    User.find(query,function(err,Users){ 
        if(err) throw err
        if(Users[0].orderBlog.includes(req.body._id)){
            console.log("Already have")
            res.json({
                joined: true
            })
        }else{
            Users[0].orderBlog.push(req.body._id)
            Users[0].point = Users[0].point + 1
            console.log("point added => " + Users[0].point)
            Users[0].save(function(err, Userss){
            if(err) throw err
            res.json({
                joined: false
            })
        })
        }
    })
}