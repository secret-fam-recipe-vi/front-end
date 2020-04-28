import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import RecipeCard from './RecipeCard';

const RecipeList = () => {
//const id

const url = 'data api'
 const [recipes, setRecipes] = useState([])

useEffect(() => {
    axios
    .get('url')
    .then(response => {
        console.log('response', response.data.results)
        setRecipes(response.data.results);
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
                    name={recipe.name}
                    image={recipe.image}
                    ingredients={recipe.ingredients}
                    notes={recipe.notes}
                />
            ))}            
        </div>
    )
}

export default RecipeList