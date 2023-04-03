import  './App.css';
import Project from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer'
function App() {
  return (
    <div className="header">
      <div>
      <div className="menu">
        <div className="portfolio">portfolio</div>
        <div className="nav">
          <div className="nav-projects">projects</div>
          <div className="nav-tech">Technologies</div>
          <div className="nav-social">contacts</div>
        </div>
        <div className="icons">
        <ion-icon name="logo-github" className="f-icon"></ion-icon>
        <ion-icon name="logo-twitter" className="f-icon"></ion-icon>
        <ion-icon name="logo-linkedin" className="f-icon"></ion-icon>
        </div>
      </div>
     <div className='hero'>
      <div className='mid'>
        <div className='heading'> <span className="highlighting">Hello, I'm Apala Gupta ,  </span>
            Frontend developer.
        </div>
        <div className='about'>
          Information Technology undergrade, seeking to apply
          competent development skills with collaboration, communication and passion.
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
    
  );
}

export default App;
