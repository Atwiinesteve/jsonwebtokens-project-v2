//Importing Modules
const express = require('express');
const { userPosts } = require('../services/userPosts.js');
const verify = require('../tokens/token.js');


// Importing Custom Modules


// Router
const router = express.Router();



// Creating and Registering User
router.get('/posts', verify, userPosts);




// Exporting Router.
module.exports = router;