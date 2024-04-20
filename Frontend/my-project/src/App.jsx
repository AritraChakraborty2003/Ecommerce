/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot1 from "./components/Foot1";
import First from "./components/First";
import Detailspage from "./components/Detailspage";
import Banner from "./components/Banner";
import Cmsbooks from "./components/Cmsbooks";
import Item from "./components/Item";
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
          <Route path="/cms" element={<Cmsbooks />}></Route>
          <Route path="/details" element={<Detailspage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
