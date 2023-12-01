const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

const transactionRoute = require('./src/routes/Transaction');
const signupRoute = require('./src/routes/Signup');
const loginRoute = require('./src/routes/Login');

app.use('/transaction', transactionRoute);
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

app.get("/home", (req,res)=>{
    res.send("Expense Tracker");
});

app.listen(port, ()=>{
    console.log("Server running");
});