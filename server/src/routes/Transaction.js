const express = require('express');
const router = express.Router();

const {CheckItem} = require('../controllers/Transaction')
const {addTransaction, deleteTransaction, updateTransaction, transactions} = require('../functions/Transactions');

router.get('/', (req,res)=>{
    res.send("Your Transactions: " + JSON.stringify(transactions, null,1) )
});

router.post('/', (req,res)=>{
    const text = req.query.desc;
    const money = req.query.amount;
    addTransaction(text, money);
    res.send("Transaction added")
});

router.put('/', CheckItem, (req,res)=>{
    updateTransaction(req.query.desc, req.query.amount);
    res.send("Amount updated")
});

router.delete('/', CheckItem, (req,res)=>{
    deleteTransaction(transactions, req.query.desc);
    res.send("Transaction deleted")
});

module.exports = router;