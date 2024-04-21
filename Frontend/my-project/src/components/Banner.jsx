import { useState, useEffect } from "react";
const Banner = () => {
  const [count, setCount] = useState(0);

  const ml = [
    "./images/mobile1.png",
    "./images/mobile2.png",
    "./images/mobile3.png",
    "./images/mobile4.png",
  ];
  const xl = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
  ];

  const width = screen.width;

  var n = xl.length;
  useEffect(() => {
    //Implementing the setInterval method

    const interval = setInterval(() => {
      const cnt = (count + 1) % n;

      setCount(cnt);
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div
        className="Banner  h-96  banner w-12/12   bg-no-repeat "
        id="bannerScreen"
      >
        {(width >= 0 && width < 750 && (
          <img
            src={ml[count]}
            className="max-w-full max-height-full object-contain"
          ></img>
        )) ||
          (width >= 750 && width < 1279 && (
            <img
              src="./images/tab.png"
              className="max-w-full max-height-full object-contain"
            ></img>
          )) ||
          (width >= 1279 && width < 1400 && (
            <img
              src="./images/mac4.png"
              className="max-w-full max-height-full object-contain"
            ></img>
          )) ||
          (width >= 1400 && width <= 1700 && (
            <img
              src={xl[count]}
              className="max-w-full max-height-full object-contain"
            ></img>
          )) ||
          (width >= 1700 && width <= 2048 && (
            <img
              src="./images/ol3.png"
              className="max-w-full max-height-full object-contain"
            ></img>
          ))}
      </div>
    </>
  );
};
export default Banner;
