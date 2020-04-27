import React from "react";
import { Link } from "react-router-dom";

//this component gets added to the dashboard

const Nav = () => {
  return (
    <div className="nav-container">
      <div>
        <h2>Welcome back!</h2>
      </div>

      <div>
        <Link to="/Dashboard">Home</Link>
      </div>
      <div>
        <Link to="/">Log Out</Link>
      </div>
    </div>
  );
};

export default Nav;
