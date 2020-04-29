import React, { useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

import { RecipeContext } from '../context/RecipeContext';

const RecipeCard = (details) => {

    const { push } = useHistory()

    const {recipeToEdit, setRecipeToEdit} = useContext(RecipeContext)

    const removeRecipe = (details) => {
        // make a delete request to delete this color
        axiosWithAuth().delete(`https://secret-fam-recipes.herokuapp.com/api/recipes/${details.id}`, details)
        window.location.reload(true);
        console.log('to delete:', details)
    }

    const pushToEdit = () => {
        push(`/edit-recipe/:${details.id}`)
        setRecipeToEdit(details)
        console.log('Editing: ', details)
    }
  
    return (
        <div className="recipe-card">
            <h2>{details.title}</h2>

            <div>
                ingredients: 

            <p>
            
              {details.ingredients}
                
            </p>
      
            <p>{details.instructions}</p>
            {/* <p>{details.notes}</p>
            {details.categories.map((i) => {
                return (<p>{i}</p>)
            })} */}

            </div>
            <button onClick={pushToEdit}>Edit Recipe</button>
            <br/>
            <button onClick={() => {removeRecipe(details)}}> Delete Recipe </button>
        </div>

    )
}

//also need to add some kind 'tag' to filter recipes

export default RecipeCard