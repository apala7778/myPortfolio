import React from "react";
import "./App.css" 
import photo from "./images/myphoto.jpg" ;


function App() {
  return (
    <div className="container">
      <div className="first" >
     
      <nav>
        <ul>
        <li>home</li>
          
          <li>Projects</li>
          
          <li>Contacts</li>
          <li>Blogs</li>
         
        </ul>
      </nav>
      </div>
       <div className="aboutme">
       <img className="myphoto" src={photo}  alt="" />
        <section>
          <h1>About me.</h1>
          <p>I'm Apala Gupta. I am FrontEnd developer , currently learning Backend development.
             I'm passionate about Open Source & believe in the power of communities. 
             I also write Blogs about my Learning on Hashnode. 
             I'm open for collaboration & hackathon.
          </p>
        </section>
       
       </div>
    </div>
  );
}

export default App;
