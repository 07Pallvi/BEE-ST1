import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <div className="navbar">
            <nav>
                <span className="pt1"> <Link to="/"> Expense Tracker</Link> </span>
                <span className="pt2"> <Link to="/record"> Your record </Link> </span>
            </nav>
        </div>
    );
}

export default Navbar;