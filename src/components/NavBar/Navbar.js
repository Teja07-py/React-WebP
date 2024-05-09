

import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom"; 
function Nav()
{
    return(
      <div className="navbar">
        <div className="navtitle">
            <h2>Ekart</h2>
        </div>
        <div className="menus">
            <Link className="l1" to="/">Home</Link>
            <Link className="l1" to="/profile">Profile</Link>
            <Link  className="l1" to="/products">Products</Link>
            <Link className="l1" to="/userss">Users</Link>
            <Link className="l1"  to="/login">Login</Link>
            <Link className="l1" to="/register">Register</Link>
        </div>
      </div>
    )
}
export default Nav