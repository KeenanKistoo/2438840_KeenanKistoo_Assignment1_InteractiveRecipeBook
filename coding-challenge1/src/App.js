import React from "react";
import recipes from "./recipes/recipes";
import RecipeCard from "./components/Card/RecipeCard";
import RecipeList from "./components/List/RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeCard/>
      <RecipeList/>
      
    </div>
  );
}

export default App;
