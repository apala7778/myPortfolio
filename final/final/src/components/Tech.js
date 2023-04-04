import React from 'react'
import './Tech.css'
import {SiTailwindcss} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';
import {BsGit} from 'react-icons/bs';
import {SiPostgresql} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';


const Tech = () => {
  return (
    <div className='techno' id='tech' >
     <h1>Technologies</h1> 
     <div className='cards-1' >
       <div className='mini'>
         <div className='carde'> 
         <ion-icon name="logo-react"> </ion-icon>
          </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <ion-icon name="logo-javascript"></ion-icon>
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <ion-icon name="logo-html5"></ion-icon>
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <ion-icon name="logo-css3"></ion-icon>
        </div>
      </div>
      <div className='mini'>
        <div className='carde'>
        <ion-icon name="logo-nodejs"></ion-icon>
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
