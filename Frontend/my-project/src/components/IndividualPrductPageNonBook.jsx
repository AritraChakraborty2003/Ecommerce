/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";
const IndividualProductPageNonBook = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="display mt-3 flex flex-wrap gap-5  w-[100vw] lg:w-[71vw] justify-center items-center pb-5">
        {(screen.width > 1000 &&
          props.filterP.map((val) => (
            <div
              className="w-[230px]  pt-3 bg-white border-solid  hidden lg:block border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6"
            >
              <div className="flex justify-center items-center">
                <img
                  className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                  src={val.image}
                  alt=""
                  width={75}
                  height={60}
                  onClick={() => {
                    navigate("/details", {
                      state: { val: val, api: "merchsAPI" },
                    });
                  }}
                />
              </div>

              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    {val.name}
                  </p>
                </a>
                <a href="#">
                  <p className="mb-2 text-base text-brown  tracking-tight text-md dark:text-white">
                    brand: {val.descr}
                  </p>
                </a>

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
          ))) ||
          (screen.width >= 410 &&
            screen.width <= 1000 &&
            props.filterP.map((val) => (
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
          (screen.width < 410 &&
            props.filterP.map((val) => (
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
            )))}
      </div>
    </>
  );
};
export default IndividualProductPageNonBook;
