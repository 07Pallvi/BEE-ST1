const express = require('express');
const router = express.Router();

const {CheckLogin} = require('../controllers/Login');
let {users, deleteuser, updateUser} = require('../functions/Users');

router.get('/', CheckLogin, (req,res)=>{
    res.send("User logged in successfully")
});

router.delete('/', CheckLogin, (req,res)=>{
    deleteuser(users, req.query.name);
    res.send("User account deleted" )
});

router.put('/', CheckLogin, (req, res)=>{
    updateUser(req.query.name, req.query.email)
    res.send("User email updated")
})

module.exports = router;