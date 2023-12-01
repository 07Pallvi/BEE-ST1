import React, { useState, useContext } from "react";

import { GlobalContext } from "./GlobalState";

const AddTransaction = () =>{

    const {addTransaction} = useContext(GlobalContext);

    const[text, setText] = useState('');
    const[amount,  setAmount] = useState('');

    const changeText = (event) => {
        setText(event.target.value);
    }
    const changeAmount = (event) => {
        setAmount(event.target.value);
    }

    const submit = e => {

        e.preventDefault();

        const currentDate = new Date().toLocaleString();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text, amount: +amount,
            date: currentDate
        }
        addTransaction(newTransaction);
    }

    return(
        <div className="add">
            <h3> ADD NEW TRANSACTION </h3>

            <form id="form" onSubmit={submit}>

                <div className="form-control">
                    <input type="text" value={text} onChange={changeText} placeholder="Enter text..." required/>
                </div>
                <div className="form-control">
                    <input type="number" value={amount} onChange={changeAmount} 
                    placeholder="Enter amount... (-ve for expense)" required/>
                </div>
                <button className="btn" > Add </button>
                
            </form>
        </div>
    );
}

export default AddTransaction;