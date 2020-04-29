import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';

import { UserContext } from './context/UserContext';
import { RecipeContext } from './context/RecipeContext'

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddRecipe from './components/AddRecipe';
import Register from './components/Register'
import useLocalStorage from './hooks/useLocalStorage';
import UpdateRecipe from './components/UpdateRecipe';

function App() {


  const [user, setUser] = useLocalStorage({
    username: '',
    password: '',
  })
  const [recipes, setRecipes] = useState([])
  const [recipeToEdit, setRecipeToEdit] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    notes: "",
    id: ""
  })

  return (
    <Router>
      <div className="App">

        <UserContext.Provider value={{user, setUser}}>
          <RecipeContext.Provider value={{recipes, setRecipes, recipeToEdit, setRecipeToEdit}}>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/add-recipe" component={AddRecipe}/>
            <PrivateRoute path="/edit-recipe/:id" component={UpdateRecipe}/>
          </RecipeContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
