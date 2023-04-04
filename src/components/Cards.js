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
          <a href={props.item.live} target="_blank"><button className="button-1" >Live</button></a>
          <a href={props.item.github} target="_blank"> <button className="button-2"> Github</button> </a>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Cards;
