import React from 'react'
import Card from './Cards'
import './Projects.css';

const Projects = () => {
  return (
    <div className='project'>
      <h1> Projects </h1>
   
      <div className='content' >
      <Card />
      <Card /> 
      <Card />
      
      
      </div>
      <div className='content' >
      <Card />
      <Card /> 
      <Card /> 
      
      
      </div>
      
    </div>
  )
}

export default Projects
