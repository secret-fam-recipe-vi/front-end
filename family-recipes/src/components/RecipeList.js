import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

import RecipeCard from './RecipeCard';
import SearchForm from './SearchForm';

import { RecipeContext } from '../context/RecipeContext';

import styled from 'styled-components'

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: center;
opacity: 60%;
`

const AddButton  = styled.button`
color: tan;
background-color: #914d20;
border-radius: 10px;
border: 1px solid black;
padding: 10px;`


const RecipeList = () => {

    const url = 'https://secret-fam-recipes.herokuapp.com/api/recipes'
    const {recipes, setRecipes} = useContext(RecipeContext)


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

            <Link to='/add-recipe'> <AddButton>Add Recipe</AddButton> </Link>
            <SearchForm />
            <List>
            {recipes.map(recipe => (
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
            </List>      
        </div>
    )
}

export default RecipeList