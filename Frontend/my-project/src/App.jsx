/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot1 from "./components/Foot1";
import FilterReligious from "./components/FilterReligious";
import FilterMerchs from "./components/FilterMerchs";
import Header from "./components/Header";
import First from "./components/First";
import SearchPage from "./components/SearchPage";
import AddAdmin from "./components/AddAdmin";
import Dealbooks from "./components/Dealbooks";
import RequestPage from "./components/RequestPage";
import Timer from "./components/Timer";
//import Fetchdata from "./components/Fetchdata";
import MysteryBox from "./components/MysteryBox";
import Detailspage from "./components/Detailspage";
import Banner from "./components/Banner";
import Adminchoice from "./components/AdminChoice";
import Adminauth from "./components/Adminauth";
import ComboBox from "./components/ComboBox";
import FilterLogic from "./components/FilterLogic";
import Item from "./components/Item";
import Header1 from "./components/Header1";
import Signup from "./components/Signup";
import Cms from "./components/Cms";
import GoogleAuth from "./components/GoogleAuth";
import Dealsofday from "./components/Dealsofday";
import Reviews from "./components/Reviews";
import Cart from "./components/Cart";
import Booksfirstpage from "./components/Booksfirstpage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/footer" element={<Foot1 />}></Route>
          <Route path="/banner" element={<Banner />}></Route>
          <Route path="/Items" element={<Item />}></Route>
          <Route path="/cms" element={<Cms />}></Route>
          <Route path="/details" element={<Detailspage />}></Route>
          <Route path="/booksFirst" element={<Booksfirstpage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Filter" element={<FilterLogic />}></Route>
          <Route path="/mysteryBox" element={<MysteryBox />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/dealsofday" element={<Dealsofday />}></Route>
          <Route path="/RequestPage" element={<RequestPage />}></Route>
          <Route path="/dealsPage" element={<Dealbooks />}></Route>
          <Route path="/TimerPage" element={<Timer />}></Route>
          <Route path="/Header" element={<Header />}></Route>
          <Route path="/ComboBox" element={<ComboBox />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/googleAuth" element={<GoogleAuth />}></Route>
          <Route path="/admin" element={<Adminauth />}></Route>
          <Route path="/Adminchoice" element={<Adminchoice />}></Route>
          <Route path="/AddAdmin" element={<AddAdmin />}></Route>
          <Route path="/Header1" element={<Header1 />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/FilterMerchs" element={<FilterMerchs />}></Route>
          <Route path="/FilterReligious" element={<FilterReligious />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
