import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import { UserContext } from './context/UserContext';
import { RecipeContext } from './context/RecipeContext';
import { SearchContext } from './context/SearchContext';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddRecipe from './components/AddRecipe';
import Register from './components/Register'
import UpdateRecipe from './components/UpdateRecipe';
import SearchResults from './components/SearchResults';
import useLocalStorage from './hooks/useLocalStorage';

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

  const [searchTerm, setSearchTerm] = useState('');
  
  const [searchResults, setSearchResults] = useState([]);

    return (
      <Router>
        <div className="App">
          <UserContext.Provider value={{user, setUser}}>
            <RecipeContext.Provider value={{recipes, setRecipes, recipeToEdit, setRecipeToEdit}}>
              <SearchContext.Provider value={{searchTerm, setSearchTerm, searchResults, setSearchResults}}>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/add-recipe" component={AddRecipe}/>
                <PrivateRoute path="/edit-recipe/:id" component={UpdateRecipe}/>
                <PrivateRoute path="/search-results" component={SearchResults}/>
              </SearchContext.Provider>
            </RecipeContext.Provider>
          </UserContext.Provider>
        </div>
      </Router>
    );
}

export default App;
