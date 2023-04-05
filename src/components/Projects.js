import React from 'react'
import Card from './Cards'
import './Projects.css';
import data from '../Data'

export default function Projects () {
            const cards = data.map((item) => {
              return (
                
                  
                  <Card
                      key ={item.id}
                      // src={item.src}
                      // title={item.title}
                      // tech={item.tech}
                      // live={item.live}
                      // github={item.github}
                      item={item}
                  
                  /> 
                
              )
            })
  return (
    <div className='project' id='project'>
      <h2> Projects </h2>
   
       <div className='content' >
        { cards }
      
      
      
      </div> 
     
      
     
      
      
      
    </div>
  )
}


