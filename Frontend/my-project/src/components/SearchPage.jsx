/* eslint-disable react/jsx-key */
import Foot1 from "./Foot1";
import Header from "./Header";
import "./search.css";
import { useLocation, useNavigate } from "react-router-dom";
const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("This is an array", location.state.val);
  const data = location.state.val;
  return (
    <>
      <Header />
      <div className="main bg-darkwhite">
        {(data.length === 0 && (
          <div className="display  flex flex-wrap gap-5  w-[100vw] lg:w-[100vw] h-96 justify-center items-center p-36 bg-darkwhite">
            <p>0 results found</p>
          </div>
        )) || (
          <div className="display  flex flex-wrap gap-5  w-[100vw] lg:w-[100vw] justify-center items-center pb-40 bg-darkwhite">
            {data.map((val) => (
              // eslint-disable-next-line react/jsx-key

              <div
                className="w-[230px]  pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 mt-5

                                hover:scale-x-110 ml-6"
              >
                {console.log(val)}
                <div className="flex justify-center items-center">
                  <img
                    className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                    src={val.image}
                    alt=""
                    width={75}
                    height={60}
                    onClick={() => {
                      if (val.author != "NA")
                        navigate("/details", {
                          state: { val: val, api: "booksAPI" },
                        });
                      else {
                        console.log("Hello");
                        navigate("/details", {
                          state: { val: val },
                        });
                      }
                    }}
                  />
                </div>

                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      {val.name}
                    </p>
                  </a>
                  {val.author != "NA" && (
                    <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                      by {val.author}
                    </p>
                  )}

                  {val.brand != "NA" && (
                    <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                      brand:&nbsp;
                      <span className="text-black">{val.brand}</span>
                    </p>
                  )}
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
          </div>
        )}
      </div>
      <Foot1 />
    </>
  );
};
export default SearchPage;
