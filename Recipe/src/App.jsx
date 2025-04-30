import React, { useEffect, useState } from 'react'
import "./App.css"
import Recipe from './Recipe';

const App = () => {
  const API_KEY="69605e5df74242ec987b887fcf9e0625";
  const[recipe,setRecipe]=useState([])
  const[search,setSearch]=useState("")
  const [query,setQuery]=useState("chicken")
  useEffect(()=>{
   getRecipes();
  },[query])
  const getRecipes=async()=>{
    const response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${API_KEY}`)
    const data=await response.json();
    setRecipe(data.results)
  };
  const updateSearch=(event)=>{
    setSearch(event.target.value);
  }
  const getSearch=(event)=>{
    event.preventDefault();
    setQuery(search);
    setSearch(" ");
  }
  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipe'>
        {
          recipe.map(recipe=>(
            <Recipe key={recipe.id}
            title={recipe.title}
            image={recipe.image}/>
          ))
        }

      </div>

    </div>
  )
}

export default App