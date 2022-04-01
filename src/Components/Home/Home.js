import React, { useState } from "react";
import useTShirt from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tshirts, setTshirts] = useTShirt();
  const [cart, setCart] = useState([]);
  const handlerAddItems = (selectedItem) => {
    const exist = cart.find((item) => item._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    }
  };
  const handlerRemoveItems = (selectedItem) => {
    const remain = cart.filter((item) => item._id !== selectedItem._id);
    setCart(remain);
  };
  return (
    <div className="shop-section">
      <div className="tshirt-section">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handlerAddItems={handlerAddItems}
          ></TShirt>
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart} handlerRemoveItems={handlerRemoveItems}></Cart>
      </div>
    </div>
  );
};

export default Home;
