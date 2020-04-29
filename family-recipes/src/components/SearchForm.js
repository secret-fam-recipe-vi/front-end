import React, { useState, useContext } from "react";

import { RecipeContext } from "../context/RecipeContext";

export default function SearchForm() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChanges = e => {
    setSearchTerm(e.target.value)
  }
  const handleSearch = arr => {
    setRecipes(arr)
}
  const handleSubmit = e => {
    e.preventDefault()
    const searchedRecipes = recipes.filter(recipe =>(
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    
   handleSearch(searchedRecipes)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input
    onChange={handleChanges}
    value={searchTerm}
    type="text"
    placeholder="what're ya lookin for? 🔍"
    />
    <input
      type="submit"
    />
  </form>
  );
}
