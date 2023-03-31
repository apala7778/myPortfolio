import  './App.css';
import Project from './components/Projects'
function App() {
  return (
    <div className="header">
      <div className="menu">
        <diV className="portfolio">portfolio</diV>
        <div className="nav">
          <div className="nav-projects">projects</div>
          <div className="nav-tech">Technologies</div>
          <div className="nav-social">contacts</div>
        </div>
        <div className="icons">
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
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
      < Project />
    </div>
    
  );
}

export default App;
