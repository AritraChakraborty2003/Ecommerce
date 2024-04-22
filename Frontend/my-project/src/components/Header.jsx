import { useState } from "react";
const Header = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
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
          <div className=".fixed relative .top-0 navBar bg-darkwhite  h-20 flex  justify-between">
            <div className="logoHolder  h-20 w-1/3 p-2 flex justify-center items-center">
              <a href="/">
                <img
                  src="./images/logo-black.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </a>
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

                <div className="imgHolder w-15 flex items-center overflow-hidden">
                  <a href="/cart">
                    <img
                      src="./images/cart.png"
                      className="w-[50px] h-[50px]"
                    ></img>
                  </a>
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
              <li className="text-15 mt-5 flex space-x-4">
                <div className="w-10 h-15">
                  <img
                    src="./images/user1.png"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
                <div className="w-10 h-15">
                  <img
                    src="./images/cart.png"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
