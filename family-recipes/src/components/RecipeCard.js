import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const removeRecipe = (details) => {
    // make a delete request to delete this color
    axiosWithAuth().delete(`https://secret-fam-recipes.herokuapp.com/api/recipes/${details.id}`, details)
    // window.location.reload(true);
    console.log('to delete:', details)

}

//i think we are supposed to pass in recipe details
const RecipeCard = (details) => {
    return (
        <div className="recipe-card">
            <h2>{details.title}</h2>

            <div>
                ingredients: 
            <ul>
                {
                    details.ingredients
                }
            </ul>
            <p>{details.instructions}</p>
            <p>{details.notes}</p>

            </div>
            <button onClick={() => {
            removeRecipe(details)
          }}>Delete Recipe</button>
        </div>

    )
}

//also need to add some kind 'tag' to filter recipes

export default RecipeCard