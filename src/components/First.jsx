import { useState, useEffect } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot from "./Foot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";

function First() {
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);

  const xl = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
  ];
  var n = xl.length;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "#FFC300",
          width: "30px",
          height: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,

          background: "#FFC300",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }
  if (screen.width >= 1100 && screen.width <= 1299) {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  } else if (screen.width >= 1300 && screen.width < 1600) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  }

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      const cnt = (count + 1) % n;
      setCount(cnt);
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  const width = screen.width;
  return (
    <>
      <body className=" bg-darkwhite">
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

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/book1.jpg"
                className="max-h-full max-w-full object-contain"
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/gifts.webp"
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
            <ul className="flex gap-x-10 lg:gap-x-20 text-1xl font-semibold lg:text-xl">
              <li className="pr-4 md:border-r-2">Fiction</li>
              <li className="pr-4 md:border-r-2">Non-Fiction</li>

              <li className="pr-4 md:border-r-2">Competetive</li>
            </ul>
          </div>

          <div className="holder h-96 hidden lg:block mt-10">
            <Slider {...settings} className="h-96">
              <div
                className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-110 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg border-solid border-grey-2 shadow-xl"
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
                  <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                    by Robin Sharma
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/rpd.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Rich Dad Poor Dad
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown  dark:text-gray-400">
                    by Robert T Kiyosaki
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/monk.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Monk who sold his ferrari
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown  dark:text-gray-400">
                    by Robin Sharma
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/doglapan.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Doglapan
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown  dark:text-gray-400">
                    by Ashneer Grover
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/psychology.jpeg"
                    alt=""
                    width={75}
                    height={55}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Psychology Of Money
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Morgan Housel
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
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
                  className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
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
          <div className="btnContainer hidden lg:block">
            <div className="flex justify-center items-center">
              <button type="button" className=" bg-orange text-white p-3">
                More Books
              </button>
            </div>
          </div>

          <div className="bookHolder lg:hidden flex flex-wrap gap-5 justify-center items-center mt-10">
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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
              className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl   transform transition duration-500 
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
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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

            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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

            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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
        <div className="btnContainer block lg:hidden mt-7">
          <div className="flex justify-center items-center">
            <button type="button" className=" bg-orange text-white p-3">
              More Books
            </button>
          </div>
        </div>
        <div className="merchBox md:mt-10 pb-10 ">
          <div className="classNameBooks lg:h-35 flex w-12/12 justify-center font-bold ">
            <p className="text-4xl lg:text-6xl  font-extrabold text-orange mt-10 overflow-hidden">
              Merch
            </p>
          </div>

          <div className="holder h-96 hidden lg:block mt-10">
            <Slider {...settings} className="h-96">
              <div
                className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-110 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg border-solid border-grey-2 shadow-xl"
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
                  <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                    by Robin Sharma
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/rpd.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Rich Dad Poor Dad
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown  dark:text-gray-400">
                    by Robert T Kiyosaki
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/monk.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Monk who sold his ferrari
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown  dark:text-gray-400">
                    by Robin Sharma
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/doglapan.jpg"
                    alt=""
                    width={75}
                    height={60}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Doglapan
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown  dark:text-gray-400">
                    by Ashneer Grover
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-105 ml-6 overflow-hidden"
              >
                <a href="#" className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg"
                    src="./images/psychology.jpeg"
                    alt=""
                    width={75}
                    height={55}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      Psychology Of Money
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Author: Morgan Housel
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
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
                  className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
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
          <div className="btnContainer hidden lg:block">
            <div className="flex justify-center items-center">
              <button type="button" className=" bg-orange text-white p-3">
                More Books
              </button>
            </div>
          </div>

          <div className="bookHolder lg:hidden flex flex-wrap gap-5 justify-center items-center mt-10 ">
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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
              className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl   transform transition duration-500 
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
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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
            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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

            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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

            <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-xl ">
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
          <div className="btnContainer block lg:hidden mt-7">
            <div className="flex justify-center items-center">
              <button type="button" className=" bg-orange text-white p-3">
                More Books
              </button>
            </div>
          </div>
        </div>

        <div className="counter" id="counter">
          <h1 id="cntText"></h1>
        </div>
      </body>

      <Foot />
    </>
  );
}

export default First;
