'use strict'

module.exports = function(app){
    var UserList = require('../controllers/UsersListController')

    app.route('/user')
        .post(UserList.registerUser)
    app.get('/user/:uid',UserList.getUserbyUID)
    app.put('/user/:_id',UserList.updateUser)
    app.put('/updateOrder/:uid',UserList.updataMyorder)
}