'use strict'

module.exports = function(app){
    var imageList = require('../controllers/imageController')

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

    app.route('/image')
        .get(imageList.getimages)
    app.route('/image/:imageId')
        .get(imageList.getimagesById)
    app.post('/upload',upload.single('image'),imageList.uploadimage)
}