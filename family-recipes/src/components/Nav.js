import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

//this component gets added to the dashboard

const Nav = () => {

  const { user, setUser } = useContext(UserContext)

  const logoutFunction = () => {
    localStorage.removeItem('token');
    setUser({
      username: '',
      password: ''
    })
    console.log('User After Logout:', user)
  }

  console.log('User State in Nav', user)

  return (
    <div className="nav-container">
      <div>
  <h2>Welcome back {user.username}!</h2>
      </div>
      <div>
        <Link to="/Dashboard">Home</Link>
      </div>
      <div>
        <Link to="/" onClick={logoutFunction}>Log Out</Link>
      </div>
    </div>
  );
};

export default Nav;
