import  './App.css';
import Project from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer'
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';



function App() {
  return (
   <BrowserRouter>
    <div className="header">
      <div>
      <div className="menu">
        <div className="portfolio">Portfolio.</div>
        <div className="nav">
          <div className="nav-projects"><Link to="#project">Projects</Link></div>
          <div className="nav-tech"> <Link to='#tech' >Technologies</Link>  </div>
          <div className="nav-social"> <a href="https://apalawrites.hashnode.dev/" target='_blank'  className='blog'>Blogs</a></div>
           </div>
        <div className="icons">
        <a href="https://github.com/apala7778" target='_blank'><AiFillGithub size='1.7rem' color='white' /></a>
        
        <a href="https://twitter.com/apalagupta4" target='_blank' ><BsTwitter size='1.7rem' color='white' /></a>
        <a href="https://www.linkedin.com/in/apala-g-33765b226" target='_blank' ><BsLinkedin size='1.7rem' color='white' /></a>
        
        </div>
      </div>
     <div className='hero'>
      <div className='mid'>
        <div className='heading'> <span className="highlighting">Hello, I'm Apala Gupta ,  </span>
            FrontEnd Developer.
        </div>
        <div className='about'>
          Information Technology undergrade, seeking to apply
          competent development skills with collaboration, communication and passion.
          I look forward to build my skills and contributing to the development of open-source projects,
          I also write technical blogs. Reach me for any Freelance opportunity.
        </div>
        <div className='mygithub'>
          <button> my github</button>
        </div>
      </div> 
      
       <div className='circle'>
      <div className='circles'></div>
        <div className='circle-one'></div>
        <div className="circle-two"></div>
      
      </div>
      
      </div>
      </div> 
      <div> < Project /></div>
      <div><Tech /></div>
      <div><Footer/></div>
     
       
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
