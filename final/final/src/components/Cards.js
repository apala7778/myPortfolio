import React from "react";
import "./Cards.css";
import photu from '../UPCHAAR-ICON.png';

const Cards = () => {
  return (
    <div className="card">
      <div className="card-row">
        <div className="circle-card">
          <div className="image">
            <img src={photu} alt=""  className="image-pro"/>
          </div>
          <div className="desc">
            <h3 className="name-pro">Netflix clone</h3>
            <p className="stack"> Reactjs CSS3 HTML5 </p>
          </div>
          <div className="buttons">
            <button className="button-1" >Live Project</button>
            <button className="button-2">Github</button>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Cards;
