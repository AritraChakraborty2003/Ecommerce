import { useState } from "react";
import Marquee from "react-fast-marquee";
import "./banner.css";

import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
const Header1 = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="hidden lg:block slidebar bg-mustardyellow  w-12/12 p-2">
            <div className="showText w-12/12">
              <ul className="flex justify-evenly font-medium font-serif">
                <Marquee speed={80} gradient={false} pauseOnHover>
                  <li className="ml-10">
                    Great <span className="font-bold">categorys!!!!</span>
                  </li>

                  <li className="ml-20">
                    Excellent customer
                    <span className=" font-bold"> Service</span>
                  </li>
                  <li className="ml-20">
                    Contact No: <span className=" font-bold"> 9856XXXX</span>
                  </li>
                  <li className="ml-20">
                    Best <span className=" font-bold">Merchandises</span>
                  </li>
                  <li className="ml-20">
                    Top notch
                    <span className=" font-bold">
                      &nbsp;&nbsp;Corporate Gifts
                    </span>
                  </li>
                </Marquee>
              </ul>
            </div>
          </div>
          <div className=".fixed relative .top-0 navBar bg-darkwhite  h-20 flex  justify-between">
            {(screen.width > 1199 && (
              <div className="flex space-x-2">
                <div className="hidden lg:block  h-20 w-[45vmin] p-2  justify-center items-center">
                  <div className="logoHolder ">
                    <a href="/">
                      <img
                        src="./images/logo-black.png"
                        className="max-w-full max-h-full object-contain"
                      ></img>
                    </a>
                  </div>
                </div>

                <div className="IconHolder  h-20 w-[77vmin] p-2 hidden lg:block">
                  <ul className="flex ml-1 space-x-3 xl:space-x-5 p-4 pl-2 pr-4   lg:font-normal  xl:text-md  xl:font-normal lg:text-md text-lg">
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/Filter">categorys</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/FilterMerchs">Merchs</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/FilterReligious">Religious</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/FilterGifts">Corporate Gifts</Link>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="IconHolder  h-20 w-[70vmin] p-2 hidden lg:block ">
                  <div className="searchHolder  flex  justify-end items-center mt-2">
                    <input
                      type="text"
                      placeholder="Search your item...."
                      id="searchBox"
                      className="rounded-lg p-2 border-white w-[65vmin]"
                    ></input>
                    <div className="rounded-xl w-15 h-[6vmin] p-2  bg-mustardyellow flex justify-center items-center ml-[-5.9vmin] ">
                      <img
                        src="./images/searchicon.png"
                        className="rounded-xl"
                        height={25}
                        width={25}
                        onClick={() => {
                          navigate("/Items", {
                            state: {
                              val:
                                document.getElementById("searchBox").value +
                                "API",
                              title: document.getElementById("searchBox").value,
                            },
                          });
                          document.getElementById("searchBox").value = "";
                        }}
                      ></img>
                    </div>
                  </div>
                </div>

                <div className="ExtHolder hidden lg:block  h-15 w-[25vmin] p-2">
                  <div className="ExtHolder flex justify-end  mr-10  h-full w-full p-2 space-x-10 ">
                    <div className="imgHolder w-15 flex items-center">
                      {location.state.name}
                    </div>

                    <div className="imgHolder w-15  items-center overflow-hidden flex h-13">
                      <a href="/cart">
                        <img
                          src="./images/cart.png"
                          className="w-[30px] h-[30px]"
                        ></img>
                      </a>
                      <div className="h-7 w-7 rounded-2xl bg-orange mt-[-2vmin] ml-[-0.45vmin]">
                        <p className="flex justify-center items-center text-white">
                          1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) || (
              <div className="hamHolder block lg:hidden h-20">
                <div className="flex gap-2 w-[100vw] md:w-[100vw]">
                  <div className="flex w-1/2">
                    <div className="h-20 flex justify-center items-center ml-3">
                      <div className="imgHolder flex justify-center items-center">
                        <img
                          className="max-h-full max-w-full object-contain"
                          src="./images/hamburger (1).png"
                          onClick={() => {
                            if (status) {
                              setStatus(false);
                            } else setStatus(true);
                          }}
                          height={27}
                          width={27}
                        ></img>
                      </div>
                    </div>
                    <div className="logoHolder mt-6 ml-6 w-56 ">
                      <a href="/">
                        <img
                          src="./images/logo-black.png"
                          className="max-w-full max-h-full object-contain"
                          height={170}
                          width={140}
                        ></img>
                      </a>
                    </div>
                  </div>
                  <div className="space-x-5 w-1/2 flex justify-end pr-5">
                    <div className="imgHolder flex justify-center items-center mt-2">
                      <img
                        className="max-h-full max-w-full object-contain"
                        src="./images/cart.png"
                        height={40}
                        width={40}
                      ></img>
                    </div>

                    <div className="imgHolder flex justify-center items-center mt-2 ml-2">
                      <img
                        className="max-h-full max-w-full object-contain"
                        src="./images/user1.png"
                        height={40}
                        width={40}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {status ? (
        <div className="className pb-10 bg-darkwhite">
          <div className="iconHolder">
<<<<<<< HEAD
            <ul className="pl-5 pt-2">
              <li className="text-15">categorys</li>
              <li className="text-15 mt-5">Merchendise</li>
              <li className="text-15 mt-5">Traditionals</li>
              <li className="text-15 mt-5">Clothes</li>
              <li className="text-15 mt-5">Contact</li>
=======
            <ul className="flex ml-1 space-x-3 xl:space-x-5 p-4 pl-2 pr-4   lg:font-normal  xl:text-md  xl:font-normal lg:text-md text-lg">
              <li>
                <a href="#" className="text-black">
                  <Link to="/Filter">Books</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  <Link to="/FilterMerchs">Merchs</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  <Link to="/FilterReligious">Religious</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  <Link to="/FilterGifts">Corporate Gifts</Link>
                </a>
              </li>
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
            </ul>
          </div>
        </div>
      ) : null}

      <div className="searchDiv lg:hidden flex justify-center items-center bg-darkwhite p-3">
        <div className="searchHolder  flex justify-center items-center mt-[-2vmin]">
          <input
            type="text"
            placeholder="Search your item...."
            className="rounded-lg p-2 border-white w-[95vw]"
            id="searchBox"
          ></input>
          <div className="h-[10vmin] md:h-[6.25vmin] rounded-lg bg-mustardyellow flex justify-center items-center ml-[-6.5vmin] p-2">
            <img
              src="./images/searchicon.png"
              className="rounded-xl"
              height={30}
              width={30}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
