import "./custom1.css";
const MysteryBox = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mysteryBoxScreen w-[97.5vw] rounded-xl flex flex-wrap-reverse space-x-1 bg-mustardyellow text-black justify-center items-center mb-1">
          <div className="firstSection w-[130vmin]  flex pb-5 ">
            <div className="section1  w-[75vmin] ml-2">
              <ul className="mt-5">
                <li className="font-poppins font-medium text-lg lg:text-xl">
                  Available in 3 sizes
                </li>
                <li className="font-poppins font-medium text-lg lg:text-xl mt-3">
                  Over 8 different Genres
                </li>
                <li className="font-poppins font-medium text-lg lg:text-xl mt-3">
                  Upto 80% discount
                </li>
                <li className="mt-10 font-roboto font-extrabold text-xl lg:text-2xl ">
                  Starting at Rs 1000 for 10 books
                </li>
                <li className="mt-5">
                  <button className="bg-white text-black p-3 rounded-2xl">
                    Shop Now
                  </button>
                </li>
              </ul>
            </div>
            <div className="section2 ml-3">
              <ul className="mt-5">
                <li className="font-poppins font-medium text-lg lg:text-xl">
                  100% original books
                </li>
                <li className="font-poppins font-medium text-lg lg:text-xl mt-4">
                  Free bookmarks provided
                </li>
                <li className="font-poppins font-medium text-lg lg:text-xl mt-4">
                  Free Doorstep delivery
                </li>
              </ul>
            </div>
          </div>
          <div className="secondSection flex  items-center w-[64vmin]  h-[50vmin]">
            <div className="imgHolder flex  justify-center items-center w-[61vmin]  h-[48vmin]">
              <img
                src="./images/mysteryBox.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MysteryBox;
