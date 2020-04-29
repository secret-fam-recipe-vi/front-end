import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const AddRecipe = () => {

    const [newRecipe, setNewRecipe] = useState(
        {
            title: "",  // string, required
            source: "",  // string, optional
            ingredients: "",  // text, required
            instructions: "",  // text, required
            notes: "",  // text, optional
            categories: [1]  // array of category ids*, optional
        }
    )

    const { push } = useHistory()

    const handleChanges = (input) => {
        setNewRecipe({...newRecipe, [input.target.name] : input.target.value})
        console.log('New Recipe:',newRecipe)
    }

    const handleArrayChange = (input) => {
        if (document.getElementById('checkbox' + input.target.value).checked){
            newRecipe.categories.push(input.target.value)
            console.log(`Added Category: ${input.target.value}`,newRecipe)
        } else if (input.target.value === input.target.value) {
            const index = newRecipe.categories.indexOf(input.target.value)
            newRecipe.categories.splice(index,1)
            console.log(`Removed Category Category: ${input.target.value}`,newRecipe)
        }
    }

    const handleSubmit = (e) => {
        axiosWithAuth().post('https://secret-fam-recipes.herokuapp.com/api/recipes', newRecipe)
        .then(console.log('New Recipe Added: ', newRecipe))
        push('/dashboard');
    }

    return (
        <div className='addRecipeBox'>
            <Link to='/dashboard'>Back to Dashboard</Link>
            <p>Add A Recipe</p>
            <form onSubmit={handleSubmit} className='addRecipeForm'>

                <input 
                    type='text' 
                    placeholder='Recipe Name'
                    name='title'
                    onChange={handleChanges}
                    required
                />
                <span className='requiredIndicator'>*</span>
                <br/>

                <input 
                    type='text' 
                    placeholder='Source of Recipe'
                    name='source'
                    onChange={handleChanges}
                />
                <br/>

                <textarea 
                    rows='4' 
                    cols="50" 
                    placeholder='Ingredients'
                    name='ingredients'
                    onChange={handleChanges}
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
                />
                <br/>

                <label for='breakfast'>Breakfast</label>
                <input value={1} id='checkbox1' type='checkbox' name='categories' onChange={handleArrayChange} />
                <br/>

                <label for='lunch'>Lunch</label>
                <input value={2} id='checkbox2' type='checkbox' name='categories' onChange={handleArrayChange} />
                <br/>

                <label for='dinner'>Dinner</label>
                <input value={3} id='checkbox3' type='checkbox' name='categories' onChange={handleArrayChange} />
                <br/>

                <label for='vegetarian'>Vegetarian</label>
                <input value={4} id='checkbox4' type='checkbox' name='categories' onChange={handleArrayChange} />
                <br/>

                <label for='vegan'>Vegan</label>
                <input value={5} id='checkbox5' type='checkbox' name='categories' onChange={handleArrayChange} />
                <br/>

                <label for='gluten-free'>Gluten-Free</label>
                <input value={6} id='checkbox6' type='checkbox' name='categories' onChange={handleArrayChange} />
                <br/>

                {/* <input 
                    name='categories'
                />
                <br/> */}

                <br/>           
                <input type='submit' className='submit'/>
                <br/>

            </form>
        </div>
    )
}

export default AddRecipe