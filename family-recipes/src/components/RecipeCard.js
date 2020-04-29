import React from 'react';
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

            </div>
        </Card>
    )
}

//also need to add some kind 'tag' to filter recipes

export default RecipeCard