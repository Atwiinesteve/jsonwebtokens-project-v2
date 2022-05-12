//Importing Modules
const express = require('express');


// Importing Custom Modules
const { registerUser, loginUser } = require('../services/users.js');


// Router
const router = express.Router();



// Creating and Registering User
router.post('/register', registerUser);



// Logging in a user.
router.post('/login', loginUser);



// Exporting Router.
module.exports = router;