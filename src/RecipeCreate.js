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
  const [formData, setFormData] = useState(initialFormState)
 

 const changingContent = ({target}) => {
   setFormData({
     ...formData,
     [target.name]: target.value,
   })
 }
 
 const postedRecipe = (event) => {
   event.preventDefault()
     addNewRecipe(formData)
     setFormData(initialFormState)
 }
 

  
  return (
    <form name="create" onSubmit={postedRecipe}>
      <table>
        <tbody>
          <tr>
          <td>
            <input
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={changingContent}
              required
            /> 
          </td>
           
          <td>
            <input
              id="cuisine"
              name="cuisine"
              placeholder="Cuisine"
              value={formData.cuisine}
              onChange={changingContent}
              required
            />
          </td>

          <td>
            <input 
              id="photo"
              name="photo"
              placeholder="URL"
              value={formData.photo}
              onChange={changingContent}
              required
              />
         </td> 
            
         <td>    
          <textarea
            id="ingredients"
            name="ingredients"
            placeholder="Ingredients"
            value={formData.ingredients}
            onChange={changingContent}
            required
            />
         </td>
           
         <td>
          <textarea
            id="preparation"
            name="preparation"
            placeholder="Preparation"
            value={formData.preparation}
            onChange={changingContent}
            required
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
