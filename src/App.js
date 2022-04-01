import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
