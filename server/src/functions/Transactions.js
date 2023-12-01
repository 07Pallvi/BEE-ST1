const express = require('express');

let transactions = [
    { desc: "food", amount: 700},
];

const addTransaction = (desc, amount) =>{
    transactions.push({desc, amount});
}

const deleteTransaction = (array, checkdesc) =>{

    const index = array.findIndex(obj => obj.desc === checkdesc);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const updateTransaction = (givenDesc, newAmount) =>{
    const toUpdateTransaction = transactions.find(transaction => transaction.desc === givenDesc);
    toUpdateTransaction.amount = newAmount;
}

module.exports = {addTransaction, deleteTransaction, updateTransaction, transactions};