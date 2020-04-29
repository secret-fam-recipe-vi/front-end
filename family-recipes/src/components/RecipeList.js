import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

import RecipeCard from './RecipeCard';

const RecipeList = () => {
//const id

const url = 'https://secret-fam-recipes.herokuapp.com/api/recipes'
 const [recipes, setRecipes] = useState([])

useEffect(() => {
    axiosWithAuth()
    .get('https://secret-fam-recipes.herokuapp.com/api/recipes')
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
            <Link to='/add-recipe'>Add Recipe</Link>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    source={recipe.source}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    notes={recipe.notes}
                />
            ))}            
        </div>
    )
}

export default RecipeList