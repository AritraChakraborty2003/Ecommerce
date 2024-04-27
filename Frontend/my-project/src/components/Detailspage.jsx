/* eslint-disable react/prop-types */
import Header from "./Header";
import Foot1 from "./Foot1";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Detailspage = (props) => {
  const [statusDescription, setStatusDescription] = useState(false);
  const [statusDetails, setStatusDetails] = useState(false);
  const location = useLocation();
  console.log(location.state.val);
  let p = location.state.val.price;
  let d = location.state.val.discount;
  const x = Math.trunc((p * 100) / (100 - d));
  console.log(x);

  const sendRequest = () => {
    //console.log(formData.get("name"));
    console.log(location.state.val.discount);
    const dataObj = {
      name: location.state.val.name,
      price: location.state.val.price,
      stock: location.state.val.stock,
      discount: location.state.val.discount,
      category: location.state.val.category,
      descr: location.state.val.descr,
      url: location.state.val.image,
    };

    let control = true;
    axios.post("http://127.0.0.1:8000/ordersAPI", dataObj).then((res) => {
      if (res.status != 200) {
        control = false;
      }
    });
    if (control) {
      document.getElementById("success").innerHTML =
        "Request Placed Successfully";
    }
  };
  return (
    <>
      {console.log(props.dataObj)}
      <body className="bg-darkwhite">
        <Header />
        {location.state.val.stock === 0 && (
          <h1 id="success" className="mt-2 ml-3 font-bold text-2xl"></h1>
        )}
        <div className="mainArea bg-darkwhite flex justify-center  flex-wrap mb-5">
          <div className="bookHolder w-[600px] flex justify-center mt-3 lg:mt-10 p-5">
            <div className="imgHolder h-52 lg:h-96 w-[400px] flex justify-center ">
              <a href="/details">
                {" "}
                <img
                  src={location.state.val.image}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </a>
            </div>
          </div>
          <div className="bookHolder w-[650px]  p-5">
            <p className="text-4xl font-extrabold overflow-hidden h-11">
              {location.state.val.name}
            </p>
            <br />

            {location.state.api === "booksAPI" && (
              <>
                <p className="font-grey">(By {location.state.val.author})</p>
                <br />
              </>
            )}
            <div className="priceContainer flex space-x-5">
              <p className="line-through text-black text-xl font-roboto font-medium overflow-hidden">
                Rs. {x}
              </p>
              <p className=" text-brown text-2xl font-roboto font-bold overflow-hidden">
                Rs. {location.state.val.price}
              </p>
              <p className=" text-black text-lg font-medium font-oxygen">
                Save {location.state.val.discount}%
              </p>
            </div>

            <div className="bookInfo">
              <ul className="mt-5">
                <li className="mt-3 font-medium font-roboto text-md">
                  {(location.state.val.stock === 0 && (
                    <p className="text-red font-bold text-3xl">
                      Currently Unavailable!!!
                    </p>
                  )) ||
                    (location.state.val.stock <= 5 && (
                      <p className="text-red font-bold text-xl">
                        Hurry!!! Very Few Stocks Left
                      </p>
                    )) || (
                      <p className="text-black font-bold text-xl">In Stock</p>
                    )}
                </li>
                <li className="mt-3 font-medium font-roboto text-md">
                  Binding: Hardcover
                </li>
                <li className="mt-3 font-medium font-roboto text-md">
                  Category:{location.state.val.category}
                </li>

                <li>
                  {(location.state.val.stock > 0 && (
                    <div className="box1   lg:w-5/6 mt-5">
                      <div className="box1 h-10 border-solid border-2 flex justify-center items-center rounded-xl">
                        <p className="text-md overflow-hidden font-bold font-oxygen">
                          Add to Cart
                        </p>
                      </div>
                      <div className="flex lg:w-12/12 mt-3 space-x-3">
                        <div className="box1 h-10 border-gray-2  bg-mustardyellow flex justify-center items-center w-1/2 text-black rounded-xl">
                          <p className="text-md overflow-hidden font-bold">
                            Buy Now
                          </p>
                        </div>
                        <div className="box1 h-10 border-solid border-2 flex justify-center items-center w-1/2 rounded-xl">
                          <div className="holder flex space-x-5 ">
                            <img
                              src="./images/heart.png"
                              height={10}
                              width={20}
                            ></img>

                            <p className="text-md">Shortlist Product</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) || (
                    <div className="box1   lg:w-5/6 mt-5">
                      <div
                        className="box1 h-10  flex justify-center items-center rounded-xl bg-mustardyellow 
                      "
                        onClick={sendRequest}
                      >
                        <p className="text-md overflow-hidden font-bold font-oxygen text-xl">
                          Request To Order !!!
                        </p>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <p>Delivery Within 6 to 8 business days</p>
                  <div className="flex space-x-11 mt-5">
                    <img src="./images/new.png" height={30} width={70}></img>
                    <img
                      src="./images/bestseller.png"
                      height={20}
                      width={70}
                    ></img>
                    <img
                      src="./images/shipping.png"
                      height={100}
                      width={100}
                    ></img>
                  </div>
                </li>

                <li className="mt-5 p-2 border-solid border-b-2 flex w-[75vmin]">
                  <div className="details text-xl text-black font-extrabold font-poppins w-11/12">
                    Description
                  </div>
                  <div className="imageBox h-10 w-1/12overflow-hidden">
                    <img
                      id="imgIcon1"
                      src="./images/ricon.png"
                      className="max-w-full max-h-full object-contain"
                      onClick={() => {
                        if (statusDescription) {
                          document.getElementById("imgIcon1").src =
                            "./images/ricon.png";
                          setStatusDescription(false);
                        } else {
                          document.getElementById("imgIcon1").src =
                            "./images/downicon.png";
                          setStatusDescription(true);
                        }
                      }}
                    ></img>
                  </div>
                </li>
                {statusDescription ? (
                  <li className="mt-1 p-2  flex w-[75vmin]">
                    <div className="details text-xl text-black  font-poppins w-11/12 font-normal">
                      {location.state.val.descr}
                    </div>
                  </li>
                ) : null}
                <li className="mt-1 p-2 border-solid border-b-2 flex w-[75vmin]">
                  <div className="details text-xl text-black font-extrabold font-poppins w-11/12">
                    Other Details
                  </div>
                  <div className="imageBox h-10 w-1/12overflow-hidden">
                    <img
                      src="./images/ricon.png"
                      id="imgIcon3"
                      className="max-w-full max-h-full object-contain"
                      onClick={() => {
                        if (statusDetails) {
                          document.getElementById("imgIcon3").src =
                            "./images/ricon.png";
                          setStatusDetails(false);
                        } else {
                          document.getElementById("imgIcon3").src =
                            "./images/downicon.png";
                          setStatusDetails(true);
                        }
                      }}
                    ></img>
                  </div>
                </li>

                {statusDetails ? (
                  <li className="mt-1 p-2  flex w-[75vmin]">
                    <div className="details text-xl text-black  font-poppins w-11/12 font-normal">
                      {location.state.val.descr}
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <div className="recommended text-4xl font-extrabold ml-2 mb-5 font-Oxygen overflow-hidden">
          Recommendations:
        </div>
        <div className="display mt-3 flex flex-wrap gap-5  w-[100vw] lg:w-[100vw] justify-center items-center mb-5 pb-5">
          <div
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
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
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6 "
          >
            <a href="#" className="w-12/12 flex justify-center">
              <img
                className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                src="./images/rpd.jpg"
                alt=""
                width={75}
                height={60}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  Rich Dad poor Dad
                </p>
              </a>
              <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                by Robert T. Kiyosaki
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
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6 "
          >
            <a href="#" className="w-12/12 flex justify-center">
              <img
                className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                src="./images/monk.jpg"
                alt=""
                width={75}
                height={60}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  Monk who sold ferrari
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
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6"
          >
            <a href="#" className="w-12/12 flex justify-center">
              <img
                className="rounded-t-lg border-solid border-grey-2 shadow-xl"
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
              <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
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
        </div>
        <Foot1 />
      </body>
    </>
  );
};
export default Detailspage;
