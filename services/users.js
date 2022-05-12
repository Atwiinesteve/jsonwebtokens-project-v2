//Importing Modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Importing Custom Modules
const User = require('../models/user.js');


// SERVICE FUNCTIONS.

// Registering and Creating a User
exports.registerUser = async(req, res) => {

    // Check if already registered.
    const alreadyRegistered = await User.findOne({ email: req.body.email });
    if (alreadyRegistered) return res.status(400).send('User Email is already registered');

    // Encrypt the password for the user.
    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(req.body.password, salt);

    // Create User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
    });

    // Saving User to Database.
    user.save()
        .then(() => { res.status(201).send('User Created and Saved to Database...'); })
        .catch((err) => { res.status(500).send(err.message); })
};

// Logging in a User
exports.loginUser = async(req, res) => {

    // Check if user already regsitered.
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('User email not Found. Perhaps not registered.')

    // If User is already registered compare passwords.
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send('Unauthorised - Login Failed ...');

    // When Successfully Logged in, Assign a token for Authorization.
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
    res.status(200).header('auth-token', token).json({
        "Auth-token": token
    })

};