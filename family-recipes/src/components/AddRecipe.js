import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const AddRecipe = () => {

    const [newRecipe, setNewRecipe] = useState()

    const handleSubmit = () => {
        axiosWithAuth().post('', newRecipe)
        .then(console.log(newRecipe))
    }

    return (
        <div className='addRecipeBox'>
            <p>Add A Recipe</p>
            <form onSubmit={handleSubmit} className='addRecipeForm'>
                <input type='text' placeholder='Recipe Name'/> <span className='requiredIndicator'>*</span>
                <br/>
                <input type='text' placeholder='Source of Recipe'/>
                <br/>
                <textarea rows='4' cols="50" placeholder='Ingredients'/> <span className='requiredIndicator'>*</span>
                <br/>
                <textarea rows='4' cols="50" placeholder='Special Instructions'/>
                <br/>
                <br/>
                <input type='submit' className='submit'/>
                <br/>
            </form>
        </div>
    )
}

export default AddRecipe