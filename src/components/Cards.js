import React from "react";
import "./Cards.css";


const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-row">
        <div className="circle-card">
          <div className="image">
            <img src={`../images/${props.item.src}`}alt=""  className="image-pro"/>
          </div>
          <div className="desc">
            <h3 className="name-pro">{props.item.title}</h3>
            <p className="stack"> {props.item.tech} </p>
          </div>
          <div className="buttons">
          <form ><button formAction={props.item.live} formTarget="_blank" className="button-1" >Live</button> </form>
          <form><button formAction={props.item.github}formTarget="_blank" className="button-2"> GitHub</button> </form>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Cards;
