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
        type: String,
        required: "user ID is required"
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