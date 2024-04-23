/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot1 from "./components/Foot1";
import First from "./components/First";
//import Fetchdata from "./components/Fetchdata";
import Detailspage from "./components/Detailspage";
import Banner from "./components/Banner";
import FilterLogic from "./components/FilterLogic";
import Item from "./components/Item";
import Cms from "./components/Cms";
import Cart from "./components/Cart";
import Booksfirstpage from "./components/Booksfirstpage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/footer" element={<Foot1 />}></Route>
          <Route path="/banner" element={<Banner />}></Route>
          <Route path="/books" element={<Item />}></Route>
          <Route path="/cms" element={<Cms />}></Route>
          <Route path="/details" element={<Detailspage />}></Route>
          <Route path="/booksFirst" element={<Booksfirstpage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Filter" element={<FilterLogic />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
