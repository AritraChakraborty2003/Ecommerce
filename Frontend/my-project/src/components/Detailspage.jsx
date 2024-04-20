import Header from "./Header";
import Foot1 from "./Foot1";
const Detailspage = () => {
  return (
    <>
      <body className="bg-darkwhite">
        <Header />
        <div className="mainArea bg-darkwhite flex justify-center  flex-wrap">
          <div className="bookHolder w-[600px] flex justify-center mt-3 lg:mt-10 p-5">
            <div className="imgHolder h-52 lg:h-96 w-[400px] flex justify-center ">
              <a href="/details">
                {" "}
                <img
                  src="./images/rpd.jpg"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </a>
            </div>
          </div>
          <div className="bookHolder w-[650px]  p-5">
            <p className="text-4xl font-extrabold overflow-hidden">
              Rich Dad and Poor Dad
            </p>
            <br />
            <p className="font-grey">(by Robert T. Kiyosaki)</p>
            <br />
            <div className="priceContainer flex space-x-5">
              <p className="line-through text-black text-xl font-roboto font-medium overflow-hidden">
                Rs. 800
              </p>
              <p className=" text-brown text-2xl font-roboto font-bold overflow-hidden">
                Rs. 720
              </p>
              <p className=" text-black text-lg font-medium font-oxygen">
                Save 10%
              </p>
            </div>

            <div className="bookInfo">
              <ul className="mt-5">
                <li className="mt-3 font-medium font-roboto text-md">
                  In Stock
                </li>
                <li className="mt-3 font-medium font-roboto text-md">
                  Binding: Hardcover
                </li>
                <li className="mt-3 font-medium font-roboto text-md">
                  Category: Self Help
                </li>

                <li>
                  <div className="box1   lg:w-5/6 mt-5">
                    <div className="box1 h-10 border-solid border-2 flex justify-center items-center">
                      <p className="text-md overflow-hidden font-bold font-oxygen">
                        Add to Cart
                      </p>
                    </div>
                    <div className="flex lg:w-12/12 mt-3 space-x-3">
                      <div className="box1 h-10 border-gray-2  bg-mustardyellow flex justify-center items-center w-1/2 text-black">
                        <p className="text-md overflow-hidden font-bold">
                          Buy Now
                        </p>
                      </div>
                      <div className="box1 h-10 border-solid border-2 flex justify-center items-center w-1/2">
                        <div className="holder flex space-x-5">
                          <img
                            src="./images/heart.png"
                            height={10}
                            width={20}
                          ></img>
                          <p className="text-md overflow-hidden">
                            Shortlist Product
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <p>Delivery Within 6 to 8 business days</p>
                  <div className="flex space-x-10 mt-5">
                    <img src="./images/new.png" height={30} width={70}></img>
                    <img
                      src="./images/bestseller.png"
                      height={30}
                      width={70}
                    ></img>
                    <img
                      src="./images/shipping.png"
                      height={100}
                      width={100}
                    ></img>
                  </div>
                </li>

                <li className="mt-3"></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="recommended text-4xl font-extrabold ml-2 mb-5 font-Oxygen overflow-hidden">
          Recommendations:
        </div>
        <div className="display mt-3 flex flex-wrap gap-5  w-[100vw] lg:w-[100vw] justify-center items-center mb-5">
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
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-110 ml-6 overflow-hidden"
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
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-110 ml-6 overflow-hidden"
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
            className="w-[230px] h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl  transform transition duration-300 
                                hover:scale-x-110 ml-6 overflow-hidden"
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
