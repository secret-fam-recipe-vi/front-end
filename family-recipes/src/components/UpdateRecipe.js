import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

import {RecipeContext} from '../context/RecipeContext'

const UpdateRecipe = () => {

    const {recipeToEdit, setRecipeToEdit} = useContext(RecipeContext)

    const { push } = useHistory()

    const handleChanges = (input) => {
        setRecipeToEdit({...recipeToEdit, [input.target.name] : input.target.value})
        console.log('Updated Recipe:',recipeToEdit)
    }

    const handleSubmit = (e) => {
        axiosWithAuth().put(`https://secret-fam-recipes.herokuapp.com/api/recipes/${recipeToEdit.id}`, recipeToEdit)
        .then(console.log('Updated Recipe Succesful: ', recipeToEdit))
        push('/dashboard');
        window.location.reload(true);
    }

    return (
        <div className='addRecipeBox'>
            
            <Link to='/dashboard'>Back to Dashboard</Link>
            <p>Update Recipe:</p>
            <form onSubmit={handleSubmit} className='addRecipeForm'>

                <input 
                    type='text' 
                    placeholder='Recipe Name'
                    name='title'
                    onChange={handleChanges}
                    defaultValue={recipeToEdit.title}
                    required
                />
                <span className='requiredIndicator'>*</span>
                <br/>

                <input 
                    type='text' 
                    placeholder='Source of Recipe'
                    name='source'
                    onChange={handleChanges}
                    defaultValue={recipeToEdit.source}
                />
                <br/>

                <textarea 
                    rows='4' 
                    cols="50" 
                    placeholder='Ingredients'
                    name='ingredients'
                    onChange={handleChanges}
                    defaultValue={recipeToEdit.ingredients}
                    required
                /> 
                <span className='requiredIndicator'>*</span>
                <br/>

                <textarea 
                    rows='4' 
                    cols="50" 
                    placeholder='Instructions'
                    name='instructions'
                    onChange={handleChanges}
                    defaultValue={recipeToEdit.instructions}
                    required
                />
                <span className='requiredIndicator'>*</span>
                <br/>

                <textarea 
                    rows='4' 
                    cols="50" 
                    placeholder='Notes'
                    name='notes'
                    onChange={handleChanges}
                    defaultValue={recipeToEdit.notes}
                />
                <br/>

                <br/>           
                <input type='submit' className='submit'/>
                <br/>

            </form>
        </div>
    )
}

export default UpdateRecipe