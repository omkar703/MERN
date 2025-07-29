import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img src="https://www.w3schools.com/w3images/avatar.jpg" alt="avatar" />
    </div>
  );
};

export default Card;
