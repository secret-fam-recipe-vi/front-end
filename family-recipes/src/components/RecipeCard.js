import React from 'react';

//i think we are supposed to pass in recipe details
const RecipeCard = (details) => {
    return (
        <div className="recipe-card">
            <h2>{details.title}</h2>
            {/*image?*/}

            <div>
                ingredients: 
            <p>
            
                    details.ingredients
                
            </p>
            <p>{details.instructions}</p>
            <p>{details.notes}</p>

            </div>
        </div>
    )
}

//also need to add some kind 'tag' to filter recipes

export default RecipeCard