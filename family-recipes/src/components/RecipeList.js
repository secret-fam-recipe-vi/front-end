import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

import RecipeCard from './RecipeCard';
import { RecipeContext } from '../context/RecipeContext';

const RecipeList = () => {

    const url = 'https://secret-fam-recipes.herokuapp.com/api/recipes'

    const {recipes, setRecipes} = useContext(RecipeContext)
    // const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     const results = recipes.filter(recipe =>
    //         recipe.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setSearchResults(results);
    //   }, [searchTerm]);

    //   const handleChange = event => {
    //     setSearchTerm(event.target.value);
    //   };

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

            {/* <form>

                <label htmlFor="name">Search:</label>
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
             </form> */}

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
                    categories={[recipe.categories]}
                />
            ))}        
        </div>
    )
}

export default RecipeList