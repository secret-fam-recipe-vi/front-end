import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { RecipeContext } from "../context/RecipeContext";

export default function SearchForm() {

  const { recipes, setRecipes } = useContext(RecipeContext);

  const {searchTerm, setSearchTerm} = useContext(SearchContext);

  const {searchResults, setSearchResults} = useContext(SearchContext);

  const { push } = useHistory()

  const handleChanges = e => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = arr => {
    setSearchResults(arr)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const searchedRecipes = recipes.filter(recipe =>(
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    push('/search-results')
   handleSearch(searchedRecipes)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input
    onChange={handleChanges}
    value={searchTerm}
    type="text"
    placeholder="what're ya lookin for?"
    required
    />
    <input
      type="submit"
      className='searchSubmit'
    />
  </form>
  );
}