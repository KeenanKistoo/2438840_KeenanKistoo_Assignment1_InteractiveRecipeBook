import React, { useState } from "react";
import RecipeCard from "../Card/RecipeCard";
import recipesData from "../../recipes/recipes";
import './RecipeList.css'
import { Heart } from "@phosphor-icons/react";

function RecipeList(){
    const [filter, setFilter] = useState(null); //Monitors/Changes the filter buttons
    const [search, setSearch] = useState(""); //Monitors/Changes the searchbox state
    const [recipes, setRecipes] = useState(recipesData); /*Used state change to store the recipe data so that it can be altered
                                                            without changing the orignal data set*/

    function handleFilter(restriction){
        setFilter(restriction);
        
    }
    /*This function is used to test buttons when debugging code.
    When a button is not acting as expected, my first debug test
    is to check if the button is actually working or not.
    */
    function TestFunction(){
        console.log("Button Active")
    }

    //Updates search state with value in input field (className: search-box)
    function handleSearch(e){
        setSearch(e.target.value);
    }

    function toggleFavorite(id) {
        setRecipes(prevRecipes =>
            prevRecipes.map(recipe =>
                recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
            )
        );
        console.log(recipes);
    }
    /*This conntrols what recipes are being displayed. There are two main checks:
    1) if the filter button is clicked, it filters those recipes
    2) if there is a value in your search box.
    */

    function handleFavorites(){
        setFilter("Favorites")
    }
    const filteredRecipes = recipes.filter(recipe => 
        (!filter || (filter === "favorite" ? recipe.favorite === true : recipe.restrictions === filter)) &&
        (recipe.rec_name.toLowerCase().includes(search.toLowerCase()))
    );



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
                    onClick={() => handleFilter("Vegan")}>
                        Vegan
                </button>
                <button 
                    className={filter === "Favorites" ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFavorites}>
                        Favourite
                </button>
                <section className="search-sect">
                    <input className="search-box"
                     type="text"
                     placeholder="Search"
                     value={search}
                     onChange={handleSearch} />
                </section>
            </section>
                {filteredRecipes.map((recipe) => (
                    <article className="recipe-item" key={recipe.id}>
                        <img className="rec-img" src={recipe.img_url} alt={"Image of " + recipe.rec_name}/>
                        <section className="info">
                            <h2 onClick={TestFunction} className="rec-head">{recipe.rec_name}</h2>
                            <p className="gen-txt">Restrictions: {recipe.restrictions}</p>
                            <p className="gen-txt">Cooking Time: {recipe.cooking_time}</p>
                            <button 
                                onClick={() => toggleFavorite(recipe.id)}
                                className={recipe.favorite ? 'fav-btn selected' : 'fav-btn'}
                            >
                                <Heart size={24}/>
                            </button>

                        </section>
                    </article>
                ))}
        </>
    );
}
 
export default RecipeList;