'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema of house details
let house = new Schema({
    houseID: {
        type: Number,
        unique: true,
        required: "Unique ID is required"
    },
    houseType: {
        type: String,
        required: "Specify house type"
    },
    noOfBedroom: {
        type: Number,
        required: "Specify No of bedrooms"
    },
    noOfBathrooms: {
        type: Number,
        required: "Specify No fo bathrooms"
    },
    sqft: {
        type: Number,
        required: "Specify house area"
    },
    description: {
        type: String,
    },
    postedBy: {
        type: String,
    },
    purpose: {
        type: String,
    },
    
});
module.exports = mongoose.model('house', house);
