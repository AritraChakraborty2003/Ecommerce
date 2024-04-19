//import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Banner = () => {
  const images = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
  ];
  return (
    <>
      {screen.width >= 1536 && screen.width < 1700 && (
        <Slide>
          <div className="each-slide-effect">
            <div
              className="Banner  h-96  banner w-12/12   bg-no-repeat "
              id="bannerScreen"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              className="Banner  h-96  banner w-12/12   bg-no-repeat "
              id="bannerScreen"
              style={{ backgroundImage: `url(${images[1]})` }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              className="Banner  h-96  banner w-12/12   bg-no-repeat "
              id="bannerScreen"
              style={{ backgroundImage: `url(${images[2]})` }}
            ></div>
          </div>
        </Slide>
      )}
    </>
  );
};
export default Banner;
