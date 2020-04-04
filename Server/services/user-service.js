'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('user');

/**
 * Returns a promise for search results.
 *
 * @param search param.
*/
exports.search = (params) => {
    const promise = User.find(params).exec();
    return promise;
};

/**
 * Saves the new user object.
 *
 * @param user
*/
exports.save = (user) => {
    const newuser = new User(user);
    return newuser.save();
};

/**
 * Returns the user object by id.
 *
 * @param userId
*/
exports.get = (userId) => {
    const userPromise = User.findById(userId).exec();
    return userPromise;
};

/**
 * Updates an existing user.
 *
 * @param updateduser
*/
exports.update = (updateduser) => {
    
const promise = User.findByIdAndUpdate(updateduser.id, updateduser).exec();
   return promise;
};

/**
 * Deletes an existing user item.
 *
 * @param UserId
*/
exports.delete = (UserId) => {
    const promise = User.findByIdAndRemove(UserId).exec();
    return promise;
};