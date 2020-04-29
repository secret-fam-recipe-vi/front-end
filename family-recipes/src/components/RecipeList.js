import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import RecipeCard from './RecipeCard';

import styled from 'styled-components'



const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: center;
opacity: 60%;
`

const Addbutton  = styled.button`
color: tan;
background-color: #914d20;
border-radius: 10px;
border: 1px solid black;
padding: 10px;
`

const RecipeList = () => {

const url = 'https://secret-fam-recipes.herokuapp.com/api/recipes'

const [recipes, setRecipes] = useState([])

useEffect(() => {
    axiosWithAuth()
    .get(url)
    .then(response => {
        console.log('response from api', response)
        setRecipes(response.data);
    })
    .catch(error => {
        console.log('uhoh, error fetching recipes', error)
    })

}, []);

    return (
        <div>
        <Link to='/add-recipe'> <Addbutton>Add Recipe</Addbutton> </Link>
        <List>    
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    source={recipe.source}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    notes={recipe.notes}
                />
            ))}            
        </List>
      </div>
    )
}

export default RecipeList