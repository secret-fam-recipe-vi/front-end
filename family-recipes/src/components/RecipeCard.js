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
        <Card className='recipeCard'>
            <h2><strong>{details.title}</strong></h2>

            <div>
                <strong>Ingredints:</strong>
            <p>
              {details.ingredients}
            </p>
      
            <p><strong>Instructions:</strong> {details.instructions}</p>
            <p><strong>Notes:</strong> {details.notes}</p>
            <p><strong>Categories:</strong> {details.categories} </p>

            </div>
            <button className='cardButton' onClick={pushToEdit}>Edit Recipe</button>
            <br/>
            <button className='cardButton' onClick={() => {removeRecipe(details)}}> Delete Recipe </button>
        </Card>

    )
}

export default RecipeCard