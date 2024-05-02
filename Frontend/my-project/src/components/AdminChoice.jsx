import Header from "./Header";
import Foot1 from "./Foot1";
import { useNavigate } from "react-router-dom";
const Adminchoice = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-darkwhite">
        <button
          className="p-3 bg-mustardyellow text-black m-3 mt-4"
          onClick={() => navigate("/admin")}
        >
          Logout
        </button>
        <div className="boxHolder p-24 bg-darkwhite flex flex-wrap justify-center items-center space-x-10">
          <div
            className="w-[300px] h-[200px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 "
          >
            <div className="w-12/12 flex justify-center">
              <img
                className="mt-4  rounded-t-lg border-solid border-grey-2 shadow-xl"
                src="./images/cma.webp"
                alt=""
                width={120}
                height={130}
                onClick={() => {
                  navigate("/cms");
                }}
              />
            </div>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"></p>
              </a>
              <p className="mb-3 font-semibold text-xl text-brown dark:text-gray-400 text-center">
                Dynamic CMS
              </p>
            </div>
          </div>

          <div
            className="mt-5 lg:mt-0 w-[300px] h-[200px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 "
          >
            <div className="w-12/12 flex justify-center">
              <img
                className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                src="./images/orders.png"
                alt=""
                width={80}
                height={80}
                onClick={() => {
                  navigate("/RequestPage");
                }}
              />
            </div>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"></p>
              </a>
              <p className="mb-3 font-semibold text-xl text-brown dark:text-gray-400 text-center">
                Order Requests
              </p>
            </div>
          </div>

          <div
            className="mt-5 lg:mt-0 w-[300px] h-[200px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 "
          >
            <div className="w-12/12 flex justify-center">
              <img
                className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                src="./images/admin.png"
                alt=""
                width={80}
                height={80}
                onClick={() => {
                  navigate("/AddAdmin");
                }}
              />
            </div>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"></p>
              </a>
              <p className="mb-3 font-semibold text-xl text-brown dark:text-gray-400 text-center">
                Add Admin Data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Foot1 />
    </>
  );
};
export default Adminchoice;
