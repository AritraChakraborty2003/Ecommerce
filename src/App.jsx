import { useState, useEffect } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css";

function App() {
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    if (screen.width >= 1279 && screen.width < 1400) {
      document.getElementById("bannerScreen").innerHTML = `<img
          src="./images/mac4.png"
          className="max-w-full max-height-full object-contain"
        ></img>`;
    }

    const interval = setInterval(() => {
      document.getElementById("cntText").innerHTML = count;
      setCount(count + 1);
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  const width = screen.width;
  return (
    <>
      <body>
        <div className="header">
          <div className="headerContainer">
            <div className="hidden lg:block slidebar bg-mustardyellow  w-12/12 p-2">
              <div className="showText w-12/12">
                <ul className="flex justify-evenly font-medium font-serif">
                  <li>
                    Great <span className="text-black">Books!!!!</span>
                  </li>
                  <li>Excellent customer Service</li>
                  <li>Contact No: 9856XXXX</li>
                </ul>
              </div>
            </div>
            <div className="navBar bg-darkwhite  h-20 flex  justify-between">
              <div className="logoHolder  h-20 w-1/3 p-2 flex justify-center items-center">
                <img
                  src="./images/logo-black.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="IconHolder  h-20 w-2/3 p-2 hidden lg:block">
                <ul className="flex justify-center space-x-10 p-4 pl-4 pr-4 text-lg font-bold font-poppins">
                  <li>Books</li>
                  <li>Merchendise</li>
                  <li>Traditionals</li>
                  <li>Clothes</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div className="ExtHolder hidden lg:block  h-15 w-1/3 p-2 ">
                <div className="ExtHolder flex justify-end  mr-10  h-full w-full p-2 space-x-10 ">
                  <div className="imgHolder h-15 w-15 flex items-center">
                    <img
                      src="./images/user1.png"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                  <div className="imgHolder   h-15  w-15 flex items-center">
                    <img
                      src="./images/cart.png"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="hamHolder block lg:hidden h-20">
                <div className="h-20 w-20 flex justify-center items-center ">
                  <div className="imgHolder h-15  w-20 flex justify-center items-center">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src="./images/hamburger (1).png"
                      onClick={() => {
                        if (status) {
                          setStatus(false);
                        } else setStatus(true);
                      }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {status ? (
          <div className="className pb-10 bg-darkwhite">
            <div className="iconHolder">
              <ul className="pl-5 pt-2">
                <li className="text-15">Books</li>
                <li className="text-15 mt-5">Merchendise</li>
                <li className="text-15 mt-5">Traditionals</li>
                <li className="text-15 mt-5">Clothes</li>
                <li className="text-15 mt-5">Contact</li>
                <li className="text-15 mt-5">Icons</li>
              </ul>
            </div>
          </div>
        ) : null}
        <div
          className="Banner  h-96  banner w-12/12   bg-no-repeat "
          id="bannerScreen"
        ></div>

        <div className="supportLinks hidden md:block">
          <div className="flex bg-darkwhite justify-center h-15 p-5 space-x-10 lg:h-15 md:space-x-28 ">
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/books.png"
                className="max-h-full max-w-full object-contain"
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/clothes.png"
                className="max-h-full max-w-full object-contain"
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/merch.png"
                className="max-h-full max-w-full object-contain"
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/traditionals.png"
                className="max-h-full max-w-full object-contain"
              ></img>
            </div>
          </div>
        </div>
        <div className="booksBox md:mt-10">
          <div className="classBooks lg:h-20  flex w-12/12 justify-center font-bold">
            <p className="text-4xl lg:text-6xl  font-extrabold text-orange">
              Books
            </p>
          </div>
          <div className="flex w-12/12  justify-center mt-4">
            <ul className="flex gap-x-10 lg:gap-x-20 text-1xl font-semibold lg:text-2xl">
              <li className="  pr-3">Fiction</li>
              <li className="pr-3">Non-Fiction</li>
              <li className="pr-3">Competetive</li>
            </ul>
          </div>

          <div className="flex w-12/12   p-5 justify-center items-center gap-5 flex-wrap mt-3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-90">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/rpd.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Rich Dad and Poor Dad
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Author: Robert T. Kiyoshaki
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-extrabold">Price</span>: Rs 800
                </p>
                <button className="bg-orange font-white p-3 text-white">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-80">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/5am.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Author: Robert T. Kiyoshaki
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-extrabold">Price:</span> Rs 900
                </p>
                <button className="bg-orange font-white p-3 text-white">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/monk.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Monk who sold His Ferrari
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-extrabold">Price:</span> Rs 750
                </p>

                <button className="bg-orange font-white p-3 text-white">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-80">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/5am.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Author: Robert T. Kiyoshaki
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-extrabold">Price:</span> Rs 900
                </p>
                <button className="bg-orange font-white p-3 text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="booksBox mt-10">
          <div className="classBooks  flex-col w-12/12 justify-center font-bold">
            <p className="text-4xl lg:text-6xl h-20 flex justify-center ml-5">
              Merchendise
            </p>
            <span className="slogan text-center flex justify-center items-start">
              ( Not only books we have merchendise too!!! )
            </span>
          </div>

          <div className="flex w-12/12   p-5 justify-center items-center gap-5 flex-wrap mt-3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-90">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/pens.jpeg"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pens
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Check out our pens merchandise !!!
                </p>

                <button className="bg-orange font-white p-3 text-white">
                  Checkout
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-80">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/cups.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Cups
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  The designer cups for gifts!!!
                </p>

                <button className="bg-orange font-white p-3 text-white">
                  Checkout
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <div className="imageHolder h-60 w-90 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-full max-h-full object-contain"
                    src="./images/diary.jpeg"
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Diary
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  The best writing diaries for gifting
                </p>

                <button className="bg-orange font-white p-3 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="counter" id="counter">
          <h1 id="cntText"></h1>
        </div>
      </body>
    </>
  );
}

export default App;
