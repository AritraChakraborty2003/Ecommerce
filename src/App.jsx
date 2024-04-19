/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot from "./components/Foot";
import First from "./components/First";
import Banner from "./components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/footer" element={<Foot />}></Route>
          <Route path="/banner" element={<Banner />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
