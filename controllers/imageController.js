var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose')
Images = mongoose.model('Images')


exports.getimages= function(req,res){
    Images.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        // res.render('imagepage',{items: data})
        console.log({items:data})
        res.json({items:data});
    })
}

exports.getimagesById= function(req,res){
    console.log(req.params.imageId)

    Images.findById(req.params.imageId)
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        imguri = "data:".concat(data.img.contentType,";base64,",data.img.data.toString('base64'))
        res.json({
            _id:data._id,
            name:data.name,
            desc:data.desc,
            type:data.contentType,
            uri:imguri
        });
    })
}

exports.uploadimage = function(req,res,next){
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join('./uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    var newImage = new Images(obj)

    var imguri = "data:".concat(newImage.img.contentType,";base64,",newImage.img.data.toString('base64'))
    newImage.save(function(err, Images){
        if(err) throw err
        else res.json({
          massage: 'Upload Successfully !!',
          uri: imguri
        });
        console.log('Upload Successfully !!')
    })
}