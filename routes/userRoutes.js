'use strict'

module.exports = function(app){
    var UserList = require('../controllers/UsersListController')

    app.route('/user')
        .post(UserList.registerUser)
    app.get('/user/:uid',UserList.getUserbyUID)
}