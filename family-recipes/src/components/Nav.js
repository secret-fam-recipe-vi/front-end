import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: brown;
  background-color: tan;
  align-items: center;
  justify-content: space-around;
`;

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  const logoutFunction = () => {
    localStorage.removeItem("token");
    setUser({
      username: "",
      password: "",
    });
    console.log("User Has Logged Out:", user);
  };

  console.log("User State in Nav", user);

  return (
    <NavWrapper>
      <div>
        <h2>Welcome back, {user.username}!</h2>
      </div>
      <div>
        <Link to="/Dashboard">Home</Link>
      </div>
      <div>
        <Link to="/" onClick={logoutFunction}>
          Log Out
        </Link>
      </div>
    </NavWrapper>
  );
};

export default Nav;
