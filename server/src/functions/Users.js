const express = require('express');

// dummy data 
let users = [
    { name: "pallvi", email: "abc@gmail.com"},
];

const adduser = (name, email) => { 
    users.push({name, email});
}

const deleteuser = (array, checkname) => {

    const index = array.findIndex(obj => obj.name === checkname);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const updateUser = (givenName, newEmail) =>{
    const toUpdateUser = users.find(user => user.name === givenName);
    toUpdateUser.email = newEmail;
}

module.exports = {users, adduser, deleteuser, updateUser};
