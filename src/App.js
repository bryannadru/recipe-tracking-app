import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const addNewRecipe = (newRecipes) => {
    setRecipes([...recipes, newRecipes])
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const deleteRecipe = (recipeId) => {
  setRecipes ((updatedRecipe) => updatedRecipe.filter((recipe, index) => index !== recipeId))
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate recipes={recipes} addNewRecipe={addNewRecipe}/>
    </div>
  );
}

export default App;
