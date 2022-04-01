import { useEffect, useState } from "react";

const useTShirt = () => {
  const [tshirts, setTshirts] = useState([]);
  useEffect(() => {
    fetch("tshirt.json")
      .then((res) => res.json())
      .then((data) => setTshirts(data));
  }, []);

  return [tshirts, setTshirts];
};
export default useTShirt;
