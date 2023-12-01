const express = require('express');
let {transactions} = require('../functions/Transactions');

const CheckItem = (req, res, next)=>{
    const itemExists = transactions.some(item => item.desc === req.query.desc);
    if (itemExists) {
        next()
    } else {
        res.send("Not a valid transaction..");
    }
}

module.exports = {CheckItem};