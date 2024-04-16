import React, { useState } from "react";
import RecipeCard from "../Card/RecipeCard";
import recipesData from "../../recipes/recipes";
import './RecipeList.css'
import { Heart } from "@phosphor-icons/react";

function RecipeList(){
    const [filter, setFilter] = useState(null); //Monitors/Changes the filter buttons
    const [search, setSearch] = useState(""); //Monitors/Changes the searchbox state
    const [recipes, setRecipes] = useState(recipesData);/*Used state change to store the recipe data so that it can be altered
    without changing the orignal data set*/
    const [showFavorites, setShowFavorites] = useState(false);//Manages the state of whether only favourites are showing or if all recipes are showing.
    const [classFavorite, setClassFavorite] = useState(false); //Controls the class to show when favourites are only being shown.
    const favMessage = "If you're not seeing any recipes, it means that you haven't favorited any yet. Click on the 'Favorites' button again to view all recipes. You might find some favorites there that you haven't marked yet. Click on the <3 to mark them!"
    //The above message comes up whenever you are viewing your favorite recipes.
    const [id, setId] = useState(0); //Controls the data of the recipe card that the user would like to view. Check lines 68-74
    const [showCard, setShowCard] = useState("hide")
    
    /*TestFunction is used to test buttons when debugging code.
    When a button is not acting as expected, my first debug test
    is to check if the button is actually working or not.
    */
    /* function TestFunction(){
         console.log("Button Active")
     }*/

    function handleFilter(restriction){
        setFilter(restriction);
    }

    function handleSearch(e){
        setSearch(e.target.value);
    }

    function toggleFavorite(id) {
        setRecipes(prevRecipes =>
            prevRecipes.map(recipe =>
                recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
            )
        );
    }

    
    //Swaps between showing all recipes or just favourites
    function swapRecipes(){
        setShowFavorites(!showFavorites);
        setClassFavorite(!classFavorite);
    }

    // Apply filters based on current display mode (all or favorite)
    const filteredRecipes = recipes.filter(recipe => 
        (!filter || (filter === "Favorites" ? recipe.favorite : recipe.restrictions === filter)) &&
        (recipe.rec_name.toLowerCase().includes(search.toLowerCase()))
    );

    // Update display recipes based on current mode
    const displayRecipes = showFavorites ? filteredRecipes.filter(recipe => recipe.favorite) : filteredRecipes;

    function SelectRecipe(id){
        setId(id);
        setShowCard("show")
    }

    function toggleShowCard(){
        setShowCard("hide")
    }

    return (  
        <>
            <h1 className="main-head">Interactive Recipe App</h1>
            <section className="filter">
            <section>
                { <RecipeCard
                clickFunc={() => toggleShowCard()}
                showHide={showCard}
                rec_name={recipesData[id].rec_name}
                img_url={recipesData[id].img_url}
                restrictions={recipesData[id].restrictions}
                cooking_time={recipesData[id].cooking_time}
                ingredients={recipesData[id].ingredients}
                /> }
            </section>
            <button 
                    className={filter === null ? "filter-btns active" : "filter-btns"}
                    onClick={() => handleFilter(null)}>
                        Show All
                </button>
                <button 
                    className={classFavorite ? "filter-btns active" : "filter-btns"}
                    onClick={swapRecipes}
                >
                    Favorites
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
                {/* Search input */}
                <section className="search-sect">
                    <input className="search-box"
                     type="text"
                     placeholder="Search"
                     value={search}
                     onChange={handleSearch} />
                </section>
                <section>
                    <p  id="fav-message">{showFavorites ? favMessage : ""}</p>
                </section>
            </section>
            {/* Display filtered recipes */}
            {displayRecipes.map((recipe) => (
                <article className="recipe-item" key={recipe.id}>
                    <img className="rec-img" src={recipe.img_url} alt={"Image of " + recipe.rec_name}/>
                    <section className="info">
                        <h2 onClick={() => SelectRecipe(recipe.id)} className="rec-head">{recipe.rec_name}</h2>
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
