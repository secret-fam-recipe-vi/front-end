import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import { DataContext } from './context/data'
import Nav from './components/Nav'
import AddRecipe from './components/AddRecipe';
import Register from './components/Register'
import {UserContext} from './context/UserContext'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const [data, setData] = useState([])
  const [user, setUser] = useLocalStorage({
    username: '',
    password: '',
  })

  // useEffect(() => {
  //   axios.get(`https://secret-fam-recipes.herokuapp.com/api`)
  //   .then(response => {
  //     // setData(response.data)
  //     console.log('Response:', response)
  //   })
  // }, [])

  return (
    <Router>
      <div className="App">

        <UserContext.Provider value={{user, setUser}}>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/add-recipe" component={AddRecipe}/>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
