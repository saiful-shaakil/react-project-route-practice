import React from "react";
import "./Cart.css";

const Cart = ({ cart, handlerRemoveItems }) => {
  let command;
  if (cart.length === 0) {
    command = "start your shopping";
  }
  if (cart.length > 0) {
    command = "You've started your shopping";
  }
  return (
    <div>
      <p>Selected Items : {cart.length}</p>
      <small>{command}</small>
      {cart.map((item) => (
        <p>
          {item.name}{" "}
          <button onClick={() => handlerRemoveItems(item)}>X</button>
        </p>
      ))}
      {cart.length < 4 ? (
        <p>Why you are stopped?Adding is fun man!</p>
      ) : (
        <button className="orange">Review Order</button>
      )}
    </div>
  );
};

export default Cart;
