//Importing Modules
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');



// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    date: {
        type: 'Date',
        default: Date.now
    }
}, { timestamp: true });


// Defining User
const User = mongoose.model('User', userSchema);


// Exporting User Schema
module.exports = User;