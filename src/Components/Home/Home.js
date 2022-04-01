import React from "react";
import useTShirt from "../../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tshirts, setTshirts] = useTShirt();
  return (
    <div className="shop-section">
      <div className="tshirt-section">
        {tshirts.map((tshirt) => (
          <TShirt key={tshirt._id} tshirt={tshirt}></TShirt>
        ))}
      </div>
      <div className="cart-section">
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Home;
