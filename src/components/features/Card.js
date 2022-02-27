import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = (props) => {
  return (
    <>
      <box className="box btn_shadow">
        <img src={props.image} alt="..." />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <BsArrowRight />
        </a>
      </box>
    </>
  );
};

export default Card;
