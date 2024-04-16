import React from "react";
import recipes from "./recipes/recipes";
import RecipeCard from "./components/Card/RecipeCard";
import RecipeList from "./components/List/RecipeList";


function App() {
  return (
    <div className="App">
      
      <RecipeList/>
      
    </div>
  );
}

export default App;

/*  The general idea here is to allow all the recipe list to be displayed and the individual recipe to act as a pop-up
    when clicked. I would rather one <RecipeCard/> component being called in RecipeList.jsx and it being adjusted when necessary, than
    continously adding and deleting components. (15/04)

*/
