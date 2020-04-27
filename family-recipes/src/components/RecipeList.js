import React, { useEffect } from 'react';
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
    .catch(eerror => {
        console.log('uhoh, error fetching recipes', error)
    })

}, []);

    return (
        <div className='recipe-list'>
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