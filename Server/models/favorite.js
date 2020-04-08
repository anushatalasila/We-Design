'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema of favorite details
let favorite = new Schema({
    favoriteID: {
        type: Number,
        unique: true,
        required: "ID is required"
    },
    houseID: {
        type: Number,
        unique: true,
        required: "House ID is required"
    },
    userID:
    {
        type: Number,
        unique: true,
        required: "User ID is required"
    }
    
});
module.exports = mongoose.model('favorite', favorite);
