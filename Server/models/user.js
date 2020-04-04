'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;
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
        minlength: [6, 'Password must be atleast 6 character long']
    } 
});
user.pre('save', function(next) {
    var curuser = this;

    // only hash the password if it has been modified (or is new)
    if (!curuser.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(curuser.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            curuser.password = hash;
            next();
        });
    });
});

user.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('user', user);