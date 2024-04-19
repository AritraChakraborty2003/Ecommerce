import Header from "./Header";
import Foot from "./Foot";
const Item = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center h-28 w-screen text-5xl items-center bg-mustardyellow text-black font-extrabold">
        Books
      </div>
      <div className="mainArea bg-darkwhite w-screen flex space-x-3 pb-5">
        {screen.width >= 1280 && screen.width < 1700 && (
          <div className="filter flex-column hidden lg:block lg: w-[400px]">
            <div className="boxFilter  w-[400px]  ">
              <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                Genre
              </p>
              <ul className="ml-10 mt-4">
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  Fictional
                </li>
                <li>
                  {" "}
                  <input type="radio" value="Fictional" name="bookChoice" /> Non
                  Fictional
                </li>
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  Competetive
                </li>
              </ul>
            </div>
            <div className="boxFilter w-[400px]">
              <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                Price Range
              </p>
              <ul className="ml-10 mt-4">
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  upto 500
                </li>
                <li>
                  {" "}
                  <input type="radio" value="Fictional" name="bookChoice" /> Non
                  Rs 500-750
                </li>
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" /> Rs
                  1000 -above
                </li>
              </ul>
            </div>
            <div className="boxFilter  w-[400px] ">
              <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                Language
              </p>
              <ul className="ml-10 mt-4">
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  English
                </li>
                <li>
                  {" "}
                  <input type="radio" value="Fictional" name="bookChoice" /> Non
                  Bengali
                </li>
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  Hindi
                </li>

                <li className="mt-5 w-full flex justify-start">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2"
                  >
                    Search
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {screen.width >= 1700 && (
          <div className="filter flex-column hidden lg:block  w-[600px]">
            <div className="boxFilter  w-[400px]  ">
              <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                Genre
              </p>
              <ul className="ml-10 mt-4">
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  Fictional
                </li>
                <li>
                  {" "}
                  <input type="radio" value="Fictional" name="bookChoice" /> Non
                  Fictional
                </li>
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  Competetive
                </li>
              </ul>
            </div>
            <div className="boxFilter w-[400px]">
              <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                Price Range
              </p>
              <ul className="ml-10 mt-4">
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  upto 500
                </li>
                <li>
                  {" "}
                  <input type="radio" value="Fictional" name="bookChoice" /> Non
                  Rs 500-750
                </li>
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" /> Rs
                  1000 -above
                </li>
              </ul>
            </div>
            <div className="boxFilter  w-[400px] ">
              <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                Language
              </p>
              <ul className="ml-10 mt-4">
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  English
                </li>
                <li>
                  {" "}
                  <input type="radio" value="Fictional" name="bookChoice" /> Non
                  Bengali
                </li>
                <li>
                  <input type="radio" value="Fictional" name="bookChoice" />{" "}
                  Hindi
                </li>

                <li className="mt-5 w-full flex justify-start">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2"
                  >
                    Search
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="display mt-3 flex flex-wrap gap-5  w-[100vw] lg:w-[71vw]">
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
                  Rich Dad and Poor Dad
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
        </div>
      </div>
      <Foot />
    </>
  );
};
export default Item;
