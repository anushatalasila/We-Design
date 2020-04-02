'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for houses
let house = new Schema({
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