const mongoose = require('mongoose');
const { User } = require('../model/users.js');

//Connection URI to mongo
const uri = 'mongodb://127.0.0.1:27017/blog_db';

//Making Connection (asynchronously)

mongoose.connect(uri)
    .then( result => {
        console.log("Connected Successfully");
    })
    .catch( error => console.log(error));

module.exports = User;