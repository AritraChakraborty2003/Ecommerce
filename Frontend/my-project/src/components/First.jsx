/* eslint-disable react/prop-types */

/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot1 from "./Foot1";
import Booksfirstpage from "./Booksfirstpage";
import "slick-carousel/slick/slick.css";
import MysteryBox from "./MysteryBox";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";
import Reviews from "./Reviews";
import Banner from "./Banner";
import SupportLinkBanner from "./SupportLinkBanner";
import Header from "./Header";
import Dealsofday from "./Dealsofday";
import ComboBox from "./ComboBox";
import MerchsFirstPage from "./MerchsFirstPage";
//import FirstPageReligious from "./FirstPageReligious";
import ReligiousFirstPage from "./ReligiousFirstPage";
import GiftsFirstPage from "./GiftsFirstPage";

function First() {
  // eslint-disable-next-line react/prop-types

  return (
    <>
      <Header />

      <body className=" bg-darkwhite">
        <Banner />
        <SupportLinkBanner />
        <div className="mt-10">
          <ComboBox />
        </div>
        <Booksfirstpage />
        <Dealsofday />
        <MerchsFirstPage />
        <MysteryBox />
        <Reviews />
        <ReligiousFirstPage />
        <GiftsFirstPage />
        <div className="counter" id="counter">
          <h1 id="cntText"></h1>
        </div>
      </body>

      <Foot1 />
    </>
  );
}

export default First;
