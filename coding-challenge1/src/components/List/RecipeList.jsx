import React, { useState } from "react";
import RecipeCard from "../Card/RecipeCard";
import recipes from "../../recipes/recipes";
import './RecipeList.css'

function RecipeList(){
    const [filter, setFilter] = useState(null);

    function handleFilter(restriction){
        setFilter(restriction);
        
    }

    const filteredRecipes = filter
    ? recipes.filter(recipe => recipe.restrictions === filter)
    : recipes;

    return (  
        <>
            <h1 className="main-head">Interactive Recipe App</h1>
            <section className="filter">
                <button 
                    className={filter === null ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter(null)}>
                        Show All
                </button>
                <button 
                    className={filter === "Keto" ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter("Keto")}>
                        Keto
                </button>
                <button 
                    className={filter === "Gluten-Free" ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter("Gluten-Free")}>
                    Gluten-Free
                </button>
                <button 
                    className={filter === "Paleo" ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter("Paleo")}>
                        Paleo
                </button>
                <button 
                    className={filter === "Vegetarian" ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter("Vegetarian")}>
                        Vegetarian
                </button>
                <button 
                    className={filter === "Nut-Free" ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter("Nut-Free")}>
                        Nut-Free
                </button>
                <button 
                    className={filter === "Vegan" ? "filter-btns active" : "filter-btns"}
                    onClick={() =>handleFilter("Vegan")}>
                        Vegan
                </button>
            </section>
                {filteredRecipes.map((recipe) => (
                    <article className="recipe-item" key={recipe.id}>
                        <img className="rec-img" src={recipe.img_url} alt={"Image of " + recipe.rec_name}/>
                        <section className="info">
                            <h2 className="rec-head">{recipe.rec_name}</h2>
                            <p className="gen-txt">Restrictions: {recipe.restrictions}</p>
                            <p className="gen-txt">Cooking Time: {recipe.cooking_time}</p>
                        </section>
                    </article>
                ))}
        </>
    );
}
 
export default RecipeList;