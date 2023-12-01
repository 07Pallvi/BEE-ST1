const express = require('express');
const {users} = require('../functions/Users');

const CheckSignup = (req, res, next)=>{
    const userExists = users.some(user => user.name === req.query.name);
    if (userExists) {
        res.send('Already a user.');
    } else {
        next();
    }
}

module.exports = {CheckSignup};