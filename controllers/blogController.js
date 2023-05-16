'use strict'

var mongoose = require('mongoose')
var Blog = mongoose.model('Blogs')

exports.createBlog = function(req, res) {
    var newBlog = new Blog(req.body)
    newBlog.save(function(err, Blogs) {
        if (err) throw err
        res.json(Blogs)
    })
}

exports.updateBlog = function(req, res) {
    var newBlog = {}
    newBlog = req.body
    Blog.findByIdAndUpdate(req.params.blogId, newBlog, {new: true}, function(err, Blogs) {
        if (err) throw err
        res.json(Blogs)
    })
}

exports.deleteBlog = function(req, res) {
    Blog.findByIdAndRemove(req.params.blogId, function(err, Blogs) {
        if (err) throw err
        const response = {
            message: "Deleted blog id = " + req.params.blogId,
            id: Blogs._id
        }
        res.json(response);
    })
}

exports.readBlog = function(req, res) {
    console.log(req.params.blogId)
    Blog.findById(req.params.blogId, function(err, Blogs) {
        console.log(Blogs)
        if (err) {
            return res.status(500).json({ error: 'Server error' });
        }
        if (!Blogs) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(Blogs)
    })
}

exports.readLatestBlog = function(req,res){
    let query = {sold: false}
    console.log("readLatest")
    Blog.find(query,null,{limit: 6, sort:{'time': -1}},function(err,Blogs){
        if (err) throw err
        res.json(Blogs)
    })
}

exports.readAllBlog = function(req,res){
    let query = {sold: false}
    console.log("readALL")
    Blog.find(query,null,{skip: 6,sort:{'time': -1}},function(err,Blogs){
        if (err) throw err
        res.json(Blogs)
    })
}

exports.readAnnouceBlog = function(req,res){
    let query = {announce: true,sold: false}
    console.log("readAnnounce")
    Blog.find(query,null,{limit: 6, sort:{'time': -1}},function(err,blogs){
        if(err) throw err
        res.json(blogs)
    })
}

exports.readRewardBlog = function(req,res){
    let query = {reward: true,sold: false}
    Blog.find(query,null,{sort:{'time': -1}},function(err,blogs){
        if(err) throw err
        res.json(blogs)
    })
}

exports.readBlogByUID = function(req,res){
    let query = {author: req.params.uid}
    console.log(req.params.uid)
    Blog.find(query,null,{sort:{'time': -1}},function(err,blogs){ 
        if (err) {
            return res.status(500).json({ error: 'Server error' });
        }
        if (!blogs) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blogs)
    })
}

exports.readManyBlogByID = function(req,res){
    let query = {'_id': {$in:req.body}}
    console.log(req.body)
   Blog.find(query,null,{sort:{'time': -1}},function(err,blogs){ 
    if (err) {
        return res.status(500).json({ error: 'Server error' });
    }
    if (!blogs) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blogs)
})
} 
