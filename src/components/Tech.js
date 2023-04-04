import React from 'react'
import './Tech.css'
import {SiTailwindcss} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';
import {BsGit} from 'react-icons/bs';
import {SiPostgresql} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {DiNodejsSmall} from 'react-icons/di';


const Tech = () => {
  return (
    <div className='techno' id='tech' >
     <h1>Technologies</h1> 
     <div className='cards-1' >
       <div className='mini'>
         <div className='carde'> 
         <FaReact size='3.75rem' color='white' className='react-icon' />
          </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <SiJavascript size='3.75rem' color='white' className='react-icon' />
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
       < AiFillHtml5 size='3.75rem' color='white' className='react-icon' />
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        < DiCss3 size='3.75rem' color='white' className='react-icon' />
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        < DiNodejsSmall size='3.75rem' color='white' className='react-icon' />
        </div>
      </div>
      </div>
      <div className='cards-2' >
       <div className='mini'>
         <div className='carde'> 
         <SiTailwindcss  size='3.75rem' className='react-icon'/>
          </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <SiExpress size='3.75rem' className='react-icon' />
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <BsGit size='3.75rem'  className='react-icon'/>
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <SiPostgresql size='3.75rem'  className='react-icon' />
        </div>
      </div>
      {/* <div className='mini'>
        <div className='carde'>
       <SiMongodb size='3.75rem'  className='react-icon' />
        </div> 
      </div> */}
      </div>
     
   
  
     
    </div>
  )
}

export default Tech
