/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot1 from "./components/Foot1";
import FilterReligious from "./components/FilterReligious";
import FilterMerchs from "./components/FilterMerchs";
import Header from "./components/Header";
<<<<<<< HEAD
import FilterMerchs from "./components/FilterMerchs";
=======
import HeaderLogin from "./components/HeaderLogin";
import MerchsFirstPage from "./components/MerchsFirstPage";
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
import First from "./components/First";
import SearchPage from "./components/SearchPage";
import AddAdmin from "./components/AddAdmin";
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
<<<<<<< HEAD
=======
import FilterGifts from "./components/FilterGifts";
import Booksfirstpage from "./components/Booksfirstpage";
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
import "slick-carousel/slick/slick.css";
import GiftsPageFirst from "./components/GiftsPageFirst";
import "slick-carousel/slick/slick-theme.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Dealbooks from "./components/Dealbooks";

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
          <Route
            path="/categorysFirst"
            element={<categorysfirstpage />}
          ></Route>
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
<<<<<<< HEAD
=======
          <Route path="/FilterReligious" element={<FilterReligious />}></Route>
          <Route path="/FilterGifts" element={<FilterGifts />}></Route>
          <Route path="/MerchsFirstPage" element={<MerchsFirstPage />}></Route>
          <Route path="/giftPageFirst" element={<GiftsPageFirst />}></Route>
          <Route path="/headerLogin" element={<HeaderLogin />}></Route>
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
