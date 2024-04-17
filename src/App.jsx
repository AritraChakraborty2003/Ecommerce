import { useState, useEffect } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./App.css";

function App() {
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);
  const xl = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
  ];
  var n = xl.length;
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      const cnt = (count + 1) % n;
      setCount(cnt);
    }, 2700);

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
                <ul className="flex justify-center space-x-5 xl:space-x-10 p-4 pl-4 pr-4  lg:text-base lg:font-medium  xl:text-lg  xl:font-bold font-roboto">
                  <li>
                    <a href="#" className="text-black">
                      Books
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Merchendise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Traditionals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Corporate Gifts
                    </a>
                  </li>
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
        >
          {(width >= 0 && width < 750 && (
            <img
              src="./images/mobile1.png"
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
                src="./images/mac1.png"
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
          <div className="classNameBooks lg:h-20  flex w-12/12 justify-center font-bold">
            <p className="text-4xl lg:text-6xl  font-extrabold text-orange">
              Books
            </p>
          </div>
          <div className="flex w-12/12  justify-center mt-4">
            <ul className="flex gap-x-10 lg:gap-x-20 text-1xl font-semibold lg:text-2xl">
              <li className="pr-3 md:border-r-4">Fiction</li>
              <li className="pr-3 md:border-r-4">Non-Fiction</li>

              <li className="pr-3 md:border-r-4">Competetive</li>
            </ul>
          </div>

          <div className="holder h-96 hidden lg:block mt-8">
            <Slider {...settings} className="h-96">
              <div
                className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-110 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/5am.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      The 5AM Club
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Robin Sharma
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs 900
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/5am.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      The 5AM Club
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Robin Sharma
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs 900
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/5am.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      The 5AM Club
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Robin Sharma
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs 900
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/5am.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      The 5AM Club
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Robin Sharma
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs 900
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              <div
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/5am.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      The 5AM Club
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Robin Sharma
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs 900
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/5am.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      The 5AM Club
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Robin Sharma
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs 900
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
                <div
                  className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
                >
                  <a href="#" className="w-12/12 flex justify-center">
                    <img
                      className="rounded-t-lg"
                      src="./images/5am.jpg"
                      alt=""
                      width={75}
                      height={60}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        The 5AM Club
                      </p>
                    </a>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                      Author: Robin Sharma
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                      Price: Rs 900
                    </p>
                    <button
                      type="button"
                      className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="bookHolder lg:hidden flex flex-wrap gap-5 justify-center items-center mt-10">
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
              <a href="#" className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg"
                  src="./images/5am.jpg"
                  alt=""
                  width={75}
                  height={60}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </p>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Price: Rs 900
                </p>
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div
              className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg   transform transition duration-500 
                                hover:scale-110"
            >
              <a href="#" className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg"
                  src="./images/5am.jpg"
                  alt=""
                  width={75}
                  height={60}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </p>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Price: Rs 900
                </p>
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
              <a href="#" className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg"
                  src="./images/5am.jpg"
                  alt=""
                  width={75}
                  height={60}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </p>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Price: Rs 900
                </p>
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
              <a href="#" className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg"
                  src="./images/5am.jpg"
                  alt=""
                  width={75}
                  height={60}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </p>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Price: Rs 900
                </p>
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
              <a href="#" className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg"
                  src="./images/5am.jpg"
                  alt=""
                  width={75}
                  height={60}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </p>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Price: Rs 900
                </p>
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
              <a href="#" className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg"
                  src="./images/5am.jpg"
                  alt=""
                  width={75}
                  height={60}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    The 5AM Club
                  </p>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Author: Robin Sharma
                </p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Price: Rs 900
                </p>
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="booksBox mt-10">
          <div className="classNameBooks  flex-col w-12/12 justify-center font-bold">
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
