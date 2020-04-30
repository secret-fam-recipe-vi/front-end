import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import SearchForm from './SearchForm'
import RecipeCard from './RecipeCard';
import { RecipeContext } from '../context/RecipeContext';
import { SearchContext } from '../context/SearchContext'
const SearchResults = () => {
    const url = 'https://secret-fam-recipes.herokuapp.com/api/recipes'
    const {recipes, setRecipes} = useContext(RecipeContext)
    const {searchTerm, setSearchTerm} = useContext(SearchContext);
    const {searchResults, setSearchResults} = useContext(SearchContext);
    useEffect(() => {
        axiosWithAuth()
        .get(url)
        .then(response => {
            console.log('response', response)
            setRecipes(response.data);
        })
        .catch(error => {
            console.log('uhoh, error fetching recipes', error)
        })
    }, []);
    return (
        <div className='recipe-list'>
            <Link to='/dashboard'>All Recipes</Link>
            <br/>
            <Link to='/add-recipe'>Add Recipe</Link>
            <SearchForm />
            {searchResults.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    source={recipe.source}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    notes={recipe.notes}
                    categories={[recipe.categories]}
                />
            ))}        
        </div>
    )
}
export default SearchResults