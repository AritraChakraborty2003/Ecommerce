/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Booksfirstpage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/booksAPI")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

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
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  } else if (screen.width >= 1300 && screen.width < 1600) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  }
  return (
    <>
      <div className="booksBox md:mt-10 pt-10">
        <div className="classNameBooks lg:h-20  flex w-12/12 justify-center font-bold">
          <p className="text-4xl lg:text-6xl  font-bold text-orange overflow-hidden">
            Books
          </p>
        </div>
        <div className="flex w-12/12  justify-center mt-4">
          <ul className="flex gap-x-10 lg:gap-x-20 text-1xl font-semibold lg:text-xl">
            <li className="pr-4 md:border-r-4 hover:underline hover:underline-offset-2 hover:decoration-8 hover:decoration-mustardyellow">
              Fiction
            </li>
            <li className="pr-4 md:border-r-4 hover:underline hover:underline-offset-2 hover:decoration-8 hover:decoration-mustardyellow">
              Non-Fiction
            </li>
            <li className="pr-4 md:border-r-4 hover:underline hover:underline-offset-2 hover:decoration-8 hover:decoration-mustardyellow">
              Competetive
            </li>
          </ul>
        </div>

        <div className="holder h-96 hidden lg:block mt-10">
          <Slider {...settings} className="h-96">
            {data.map((val) => (
              <div
                className="max-w-[230px] max-h-[290px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6"
              >
                <div className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                    src={val.image}
                    alt=""
                    width={75}
                    height={60}
                    onClick={() => {
                      navigate("/details", { state: { val: val } });
                    }}
                  />
                </div>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      {val.name}
                    </p>
                  </a>
                  <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                    by {val.author}
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Price: Rs {val.price}
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
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

      <div className="w-12/12 bookHolder lg:hidden space-x-1 flex flex-wrap  justify-center items-center mt-10 ">
        {(screen.width >= 410 &&
          data.map((val) => (
            <div
              className="mt-3 w-[185px] h-[200px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 "
            >
              <div className="w-12/12 flex justify-center">
                <img
                  className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                  src={val.image}
                  alt=""
                  width={75}
                  height={60}
                  onClick={() => {
                    navigate("/details", { state: { val: val } });
                  }}
                />
              </div>
              <div className="p-5 flex justify-center items-center">
                <button
                  type="button"
                  className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))) ||
          (screen.width <= 410 &&
            screen.width > 320 &&
            data.map((val) => (
              <div
                className="mt-3 w-[160px] h-[200px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 "
              >
                <div className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                    src={val.image}
                    alt=""
                    width={75}
                    height={60}
                    onClick={() => {
                      navigate("/details", { state: { val: val } });
                    }}
                  />
                </div>
                <div className="p-5 flex justify-center items-center">
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))) ||
          (screen.width <= 320 &&
            data.map((val) => (
              <div
                className="mt-3 w-[150px] h-[200px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 "
              >
                <div className="w-12/12 flex justify-center">
                  <img
                    className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                    src={val.image}
                    alt=""
                    width={75}
                    height={60}
                    onClick={() => {
                      navigate("/details", { state: { val: val } });
                    }}
                  />
                </div>
                <div className="p-5 flex justify-center items-center">
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )))}
      </div>
    </>
  );
};

export default Booksfirstpage;
