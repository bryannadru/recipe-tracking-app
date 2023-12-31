import React, { useState } from "react";
import RecipeList from './RecipeList'


function RecipeCreate({addNewRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
 const initialFormState = {
   name: '',
   cuisine: '',
   url: '',
   ingredients: '',
   preparation:''
 }
 

 const [newRecipe, setNewRecipe] = useState('')
 const [formData, setFormData] = useState({...initialFormState})
  
 const changingContent = ({target}) => {
   setFormData({
     ...formData,
     [target.name]: target.value
   })
 }
 
 const postedRecipe = (event) => {
   event.preventDefault()
   addNewRecipe(formData)
   setFormData({...initialFormState})
 }
 

  
  return (
    <form name="create" onSubmit={postedRecipe}>
      <table>
        <tbody>
          <tr>
          <td>
            <label>Name</label>
            <input 
              id="name"
              name="name"
              placeholder="Name"
              onChange={changingContent}
            /> 
          </td>
           
          <td>
            <label>Cuisine</label>
            <input
              id="cuisine"
              name="cuisine"
              placeholder="Cuisine"
              onChange={changingContent}
            />
          </td>

          <td>
            <label>URL</label>
            <input 
              id="photo"
              name="photo"
              placeholder="URL"
              onChange={changingContent}
              />
         </td> 
            
         <td>    
          <label>Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            placeholder="Ingredients"
            onChange={changingContent}
            />
         </td>
           
         <td>
          <label>Preparation</label>
          <textarea
            id="preparation"
            name="preparation"
            placeholder="Preparation"
            onChange={changingContent}
            />
        </td>
        <td>
          <button type="submit">Create</button>
        </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
