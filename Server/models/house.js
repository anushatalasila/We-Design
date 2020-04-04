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

// schema of user details
// let user = new Schema({
//     userID: {
//         type: String,
//         required: "user ID is required"
//     },
    
//     userFirstName: {
//         type: String,
//         required: "User First name is required"
//     },

//     userLastName: {
//         type: String,
//         required: "User Last Name is required"
//     },

//     userEmailID: {
//         type: String,
//         unique: true,
//         required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
// });
module.exports = mongoose.model('house', house);
// module.exports = mongoose.model('user', user);