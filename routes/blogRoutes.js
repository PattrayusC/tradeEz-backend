'use strict'

module.exports = function(app){
    var blogList = require('../controllers/blogController')

    app.route('/createpost')
        .post(blogList.createBlog)
    app.route('/detail/:blogId')
        .get(blogList.readBlog)
        .delete(blogList.deleteBlog)
    app.route('/edit/:blogId')
        .put(blogList.updateBlog)
}