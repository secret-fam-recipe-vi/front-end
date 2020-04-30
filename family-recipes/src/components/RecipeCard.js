import React, { useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

import { RecipeContext } from '../context/RecipeContext';


import styled from 'styled-components'

// const Card = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-evenly;
// align-content: center;
// height: 370px;
// margin-top: 20px;
// margin-bottom: 20px;
// width: 400px;
// background-color: rgba(0,0,0,0.5) !important;
// box-shadow: 0 0 40px;
// color: white;`

const Card = styled.div`
width: 300px;
margin: 45px;
background: tan;
box-shadow: 0 0 40px;
color: black;`

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
        <Card>
            <h2>{details.title}</h2>

            <div>
                ingredients: 

            <p>
            
              {details.ingredients}
                
            </p>
      
            <p>instructions: {details.instructions}</p>
            <p>notes: {details.notes}</p>
            <p>categories: {details.categories} </p>

            </div>
            <button onClick={pushToEdit}>Edit Recipe</button>
            <br/>
            <button onClick={() => {removeRecipe(details)}}> Delete Recipe </button>
        </Card>

    )
}

//also need to add some kind 'tag' to filter recipes

export default RecipeCard