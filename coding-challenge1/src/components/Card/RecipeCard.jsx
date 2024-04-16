import React from 'react';
import recipes from "../../recipes/recipes";
import './RecipeCard.css';


//console.log(recipes) //Checks whether the recipes are being imported correctly. 

function RecipeCard(props){
    const {img_url, rec_name, restrictions, cooking_time, ingredients} = props; //Removes repetitive code(i.e. !props.img_url, just img_url).
    
    return (
        <>
            <article className='pop-up show'>
                <h1 className='main-heading'>{rec_name}</h1>
                <img className='rec-image' src={img_url} alt={"An Image of " + rec_name} />
                <h2 className='sub-head'>{"Diet-Friendly: " + restrictions}</h2>
                <p className='gen-text'>{cooking_time}</p>
                <h2 className='sub-head'>{"Core Ingrediants: " + ingredients}</h2>
                <h3 className='ter-head'>Instructions</h3>
                <p className='gen-text'>Insert Instructions Here!!!</p>
                <h3 className='ter-head'>Serving Suggestions:</h3>
                <p className='gen-text'>Insert Serving Suggestions Here!!!</p>
                <button className='back-btn'>Back To Recipes</button>
            </article>
        </>
    );
}
 
export default RecipeCard;

/*  Alternate Text is controlled by stating that the potential missing data is an image
    and the name of the recipe item that should have been displayed.
*/