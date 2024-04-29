/* eslint-disable react/prop-types */

/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Foot1 from "./Foot1";
import Booksfirstpage from "./Booksfirstpage";
import "slick-carousel/slick/slick.css";
import MysteryBox from "./MysteryBox";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";
import Reviews from "./Reviews";
import Banner from "./Banner";
import SupportLinkBanner from "./SupportLinkBanner";
import Header from "./Header";
import Dealsofday from "./Dealsofday";
import ComboBox from "./ComboBox";

function First() {
  function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
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

        <div className="merchBox hidden lg:block md:mt-10 pb-10 ">
          <div className="classNameBooks lg:h-35 flex w-12/12 justify-center font-bold ">
            <p className="text-4xl lg:text-6xl  font-bold text-orange mt-10 overflow-hidden">
              Merchs
            </p>
          </div>
          <div className="holder h-96 hidden lg:block mt-10">
            <Slider {...settings} className="h-96">
              <div
                className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6"
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-105 ml-6 "
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-105 ml-6 "
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-105 ml-6"
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-105 ml-6 "
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
                className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-105 ml-6"
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
                  className="max-w-[250px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-105 ml-6"
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
        </div>
        <MysteryBox />
        <Reviews />
        <div className="counter" id="counter">
          <h1 id="cntText"></h1>
        </div>
      </body>

      <Foot1 />
    </>
  );
}

export default First;
