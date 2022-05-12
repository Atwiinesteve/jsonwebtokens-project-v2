//Importing Modules
const mongoose = require('mongoose');



// User Schema
const postSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    content: {
        type: 'string',
        required: true
    },
    creator: {
        type: 'string',
        required: true
    },
    date: {
        type: 'Date',
        default: Date.now
    }
}, { timestamp: true });


// Defining User
const Post = mongoose.model('Post', postSchema);


// Exporting User Schema
module.exports = Post;