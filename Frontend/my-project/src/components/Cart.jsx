import Header from "./Header";
import Foot1 from "./Foot1";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="container-fluid w-12/12 h-52 bg-mustardyellow text-black flex justify-center items-center text-7xl font-bold">
        Cart Page
      </div>
      <div className="container  w-12/12 mb-5">
        <div className="container  flex flex-col justify-center items-center mt-10">
          <div className="card mt-3 BoxHolder w-8/12  mb-10 rounded-3xl  shadow-3xl p-2 flex">
            <div className="imgSection w-1/3  h-60 flex justify-center items-center">
              <div className="imgHolder h-56 w-11/12 flex justify-center">
                <img
                  src="./images/rpd.jpg"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
            </div>
            <div className="textSection w-8/12  h-60">
              <h1 className="mt-3 ml-3 overflow-hidden text-2xl font-medium font-roboto">
                Product:{" "}
                <span className="text-2xl font-extrabold">
                  Rich Dad Poor Dad
                </span>
              </h1>

              <h1 className="mt-3 ml-3 overflow-hidden text-xl font-medium font-roboto">
                by
                <span className="text-xl font-medium"> Robert T. Kiyosaki</span>
              </h1>

              <h1 className="mt-3 ml-3 overflow-hidden text-xl font-medium font-roboto">
                category:
                <span className="text-xl font-medium"> Self help</span>
              </h1>

              <h1 className="mt-3 ml-3 overflow-hidden text-xl font-medium font-roboto">
                Price:
                <span className="text-xl font-extrabold"> Rs. 800</span>
                <div className="conatainer w-12/12  flex flex-end space-x-5 mt-5">
                  <div className="qty width h-12/12 w-24 border-solid border-2 rounded-xl">
                    <div className="qtyHolder flex items-center justify-center h-full">
                      <div className="qtyBox flex justify-evenly items-center space-x-3">
                        <div className="plusHolder h-4 w-4">
                          <img
                            src="./images/plus1.png"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>

                        <div className="qtyNum">
                          <p id="qtyNum" className="font-bold">
                            {" "}
                            1{" "}
                          </p>
                        </div>
                        <div className="minusHolder  h-3 w-3">
                          <img
                            src="./images/minus1.png"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="removeHolder">
                    <button
                      type="button"
                      className="bg-mustardyellow p-2 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </h1>
            </div>
          </div>

          <button type="button" className="p-2 bg-brown text-white">
            Check Out
          </button>
        </div>
      </div>
      <Foot1 />
    </>
  );
};
export default Cart;
