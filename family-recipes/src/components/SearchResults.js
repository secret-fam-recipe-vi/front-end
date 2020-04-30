import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import RecipeCard from './RecipeCard';
import { RecipeContext } from '../context/RecipeContext';
import { SearchContext } from '../context/SearchContext';

import styled from 'styled-components';

const Button = styled.button`
color: tan;
background-color: #914d20;
border-radius: 10px;
border: 1px solid tan;
padding: 10px;
`



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
            <div className='button-wrapper'>
            <Link to='/dashboard'><Button><strong>All Recipes</strong></Button></Link>
            <br/>
            <Link to='/add-recipe'><Button><strong>Add Recipe</strong></Button></Link>  
            </div>
            {searchResults.map(recipe => (
                <div className='searched-cards'>
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
                </div>
            ))}        
        </div>
    )
}

export default SearchResults