import React from "react";
import "./TShirt.css";

const TShirt = (props) => {
  const { name, price, picture, gender } = props.tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => props.handlerAddItems(props.tshirt)}>
        Add To Cart
      </button>
    </div>
  );
};

export default TShirt;
