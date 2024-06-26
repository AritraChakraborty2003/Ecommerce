import "./custom1.css";
const MysteryBox = () => {
  return (
    <>
      <h1 className="ml-3 text-5xl font-bold h-17 lg:h-14 mt-10">
        MysteryBox By Fashion
      </h1>
      <div className="flex justify-center items-center mt-3">
        <div className="mysteryBoxScreen w-[97.5vw] rounded-xl flex flex-wrap-reverse space-x-1 bg-mustardyellow text-black justify-center items-center mb-1">
          {screen.width > 1698 && (
            <>
              <div className="firstSection w-[110vmin]  flex pb-5 ">
                <div className="section1  w-[60vmin] ml-2">
                  <ul className="mt-5">
                    <li className="font-poppins font-medium text-2xl flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1 "></div>
                      &nbsp;&nbsp;&nbsp;Available in 3 sizes
                    </li>
                    <li className="font-poppins font-medium text-2xl mt-3 flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1 "></div>
                      &nbsp;&nbsp;&nbsp;Over 8 different Genres
                    </li>
                    <li className="font-poppins font-medium text-2xl mt-3 flex">
                      <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1 "></div>
                      &nbsp;&nbsp;&nbsp;Upto 80% discount
                    </li>
                    <li className="mt-10 font-roboto font-extrabold text-2xl ">
                      Starting at Rs 1000 for 10 categorys
                    </li>
                    <li className="mt-5">
                      <button className="bg-red text-white p-3 rounded-2xl">
                        Shop Now
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="section2 ml-3">
                  <ul className="mt-5">
                    <li className="font-poppins font-medium text-2xl flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1"></div>
                      &nbsp;&nbsp;&nbsp;100% original categorys
                    </li>
                    <li className="font-poppins font-medium text-2xl mt-4 flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1"></div>
                      &nbsp;&nbsp;&nbsp;Free categorymarks provided
                    </li>
                    <li className="font-poppins font-medium text-2xl mt-4 flex">
                      <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1"></div>
                      &nbsp;&nbsp;&nbsp;Free Doorstep delivery
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
            </>
          )}{" "}
          {(screen.width >= 1280 && screen.width < 1536 && (
            <>
              <div className="firstSection w-[90vmin]  flex pb-5 ">
                <div className="section1  w-[75vmin] ml-2">
                  <ul className="mt-5">
                    <li className="font-poppins font-medium text-lg lg:text-xl flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                      &nbsp;&nbsp;&nbsp;Available in 3 sizes
                    </li>
                    <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                      &nbsp;&nbsp;&nbsp;Over 8 different Genres
                    </li>
                    <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                      <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                      &nbsp;&nbsp;&nbsp;Upto 80% discount
                    </li>
                    <li className="mt-10 font-roboto font-extrabold text-xl lg:text-2xl ">
                      Starting at Rs 1000 for 10 categorys
                    </li>
                    <li className="mt-5">
                      <button className="bg-red text-white p-3 rounded-2xl">
                        Shop Now
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="section2 ml-3">
                  <ul className="mt-5">
                    <li className="font-poppins font-medium text-lg lg:text-xl flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                      &nbsp;&nbsp;&nbsp;100% original categorys
                    </li>
                    <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                      <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                      &nbsp;&nbsp;&nbsp;Free categorymarks provided
                    </li>
                    <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                      <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                      &nbsp;&nbsp;&nbsp;Free Doorstep delivery
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
            </>
          )) ||
            (screen.width >= 1536 && screen.width < 1698 && (
              <>
                <div className="firstSection w-[130vmin]  flex pb-5 ">
                  <div className="section1  w-[75vmin] ml-2">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-lg lg:text-xl flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Available in 3 sizes
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Over 8 different Genres
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                        <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Upto 80% discount
                      </li>
                      <li className="mt-10 font-roboto font-extrabold text-xl lg:text-2xl ">
                        Starting at Rs 1000 for 10 categorys
                      </li>
                      <li className="mt-5">
                        <button className="bg-red text-white p-3 rounded-2xl">
                          Shop Now
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="section2 ml-3">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-lg lg:text-xl flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;100% original categorys
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;Free categorymarks provided
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                        <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;Free Doorstep delivery
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
              </>
            )) ||
            (screen.width >= 1536 && screen.width < 1698 && (
              <>
                <div className="firstSection w-[130vmin]  flex pb-5 ">
                  <div className="section1  w-[75vmin] ml-2">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-lg lg:text-xl flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Available in 3 sizes
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Over 8 different Genres
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                        <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Upto 80% discount
                      </li>
                      <li className="mt-10 font-roboto font-extrabold text-xl lg:text-2xl ">
                        Starting at Rs 1000 for 10 categorys
                      </li>
                      <li className="mt-5">
                        <button className="bg-red text-white p-3 rounded-2xl">
                          Shop Now
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="section2 ml-3">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-lg lg:text-xl flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;100% original categorys
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                        <div className="h-[2vmin] w-[2vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;Free categorymarks provided
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                        <div className="h-[2vmin] w-[2vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;Free Doorstep delivery
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
              </>
            )) ||
            (screen.width >= 700 && screen.width < 1279 && (
              <>
                <div className="firstSection w-[130vmin]  flex pb-5 ">
                  <div className="section1  w-[60vmin] ml-2">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-lg lg:text-xl flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Available in 3 sizes
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Over 8 different Genres
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-3 flex">
                        <div className="h-[1vmin] w-[1vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3 "></div>
                        &nbsp;&nbsp;&nbsp;Upto 80% discount
                      </li>
                      <li className="mt-10 font-roboto font-extrabold text-xl lg:text-2xl ">
                        Starting at Rs 1000 for 10 categorys
                      </li>
                      <li className="mt-5">
                        <button className="bg-red text-white p-3 rounded-2xl">
                          Shop Now
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="section2 ml-3">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-lg lg:text-xl flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;100% original categorys
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;Free categorymarks provided
                      </li>
                      <li className="font-poppins font-medium text-lg lg:text-xl mt-4 flex">
                        <div className="h-[1vmin] w-[1vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-3"></div>
                        &nbsp;&nbsp;&nbsp;Free Doorstep delivery
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
              </>
            )) ||
            (screen.width < 700 && (
              <>
                <div className="firstSection w-[130vmin]  flex pb-5 ">
                  <div className="section1  w-[60vmin] ml-2">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-md lg:text-xl flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-2 "></div>
                        &nbsp;&nbsp;&nbsp;Available in 3 sizes
                      </li>
                      <li className="font-poppins font-medium text-md lg:text-xl mt-1 flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-2 "></div>
                        &nbsp;&nbsp;&nbsp;Over 8 different Genres
                      </li>
                      <li className="font-poppins font-medium text-md lg:text-xl mt-1 flex">
                        <div className="h-[1vmin] w-[1vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-2"></div>
                        &nbsp;&nbsp;&nbsp;Upto 80% discount
                      </li>
                      <li className="mt-10 font-roboto font-extrabold text-md lg:text-2xl ">
                        Starting at Rs 1000 for 10 categorys
                      </li>
                      <li className="mt-5">
                        <button className="bg-red text-white p-3 rounded-2xl">
                          Shop Now
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="section2 ml-3">
                    <ul className="mt-5">
                      <li className="font-poppins font-medium text-md lg:text-xl flex mt-1">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-2 "></div>
                        &nbsp;&nbsp;&nbsp;100% original categorys
                      </li>
                      <li className="font-poppins font-medium text-md lg:text-xl  flex">
                        <div className="h-[1vmin] w-[1vmin]  lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1"></div>
                        &nbsp;&nbsp;&nbsp;Free categorymarks provided
                      </li>
                      <li className="font-poppins font-medium text-md lg:text-xl  flex">
                        <div className="h-[1vmin] w-[1vmin] lg:h-[1vmin] lg:w-[1vmin] bg-black rounded-xl border-solid border-2 mt-1"></div>
                        &nbsp;&nbsp;Free Doorstep delivery
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
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default MysteryBox;
