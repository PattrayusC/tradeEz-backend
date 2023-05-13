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
        res.json({
            _id:data._id,
            name:data.name,
            desc:data.desc,
            type:data.contentType,
            uri:data.img.data.toString('base64')
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
    newImage.save(function(err, Images){
        if(err) throw err
        else res.json({
          massage: 'Upload Successfully !!',
          id: Images._id
        });
        console.log('Upload Successfully !!')
    })
    // Images.create(obj).then ((err, item) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         // item.save();
    //         // res.redirect('/');
    //         console.log("upload done");
    //         res.json({
    //             massage: 'Upload Successfully aa!!',
    //         });
    //     }
    // }
    // );
}