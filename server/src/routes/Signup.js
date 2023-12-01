const express = require('express');
const router = express.Router();    

const {CheckSignup} = require('../controllers/Signup');
const {adduser, users} = require('../functions/Users');

router.get('/', (req,res)=>{
    res.send("Following users have signed up: " + JSON.stringify(users, null,1));
});

router.post('/', CheckSignup, (req,res)=>{
    adduser(req.query.name, req.query.email);
    res.send("New User signed up")
});

module.exports = router;