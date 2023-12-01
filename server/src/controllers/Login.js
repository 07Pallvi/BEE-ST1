const express = require('express');
let {users} = require('../functions/Users');

const CheckLogin = (req, res, next)=>{
    const userExists = users.some(user => user.name === req.query.name);
    if (userExists) {
        next()
    } else {
        res.send("Not a valid user..");
    }
}

module.exports = {CheckLogin};