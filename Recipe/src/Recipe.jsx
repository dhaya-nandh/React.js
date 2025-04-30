import React from 'react'
import "./Recipe.css"

const Recipe = ({title,image}) => {
    
  return (
    <div className='recipe'>
        <h1>{title}</h1>
        <img className='image' src={image} alt="image"/>
    </div>
  )
}

export default Recipe