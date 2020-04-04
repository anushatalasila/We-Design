'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(userEmailID) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(userEmailID)
};
// schema of user details
let user = new Schema({
    userID: {
        type: Number,
        unique:true,//sets the field as uniques throughout
        required: "user ID is required"
    },
    username: {
        type: String,
        unique : true,  //sets the field as uniques throughout
        required: 'Username cannot be empty'
    },
    password: {
        type: String,
        required: 'Password cannot be empty',
        minlength : [6,'Password must be atleast 6 character long']
    },
    userFirstName: {
        type: String,
        required: "User First name is required"
    },

    userLastName: {
        type: String,
        required: "User Last Name is required"
    },

    userEmailID: {
        type: String,
        unique: true,
        required: "Email address is required",
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
});

module.exports = mongoose.model('user', user);