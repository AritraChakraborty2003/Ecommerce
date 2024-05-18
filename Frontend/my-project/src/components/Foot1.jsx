import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacecategory,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Foot1 = () => {
  const [statusBlog, setStatusBlog] = useState(false);
  const [statusShop, setStatusShop] = useState(false);
  const [statusPolicy, setStatusPolicy] = useState(false);
  return (
    <>
      {(screen.width < 1280 && (
        <footer>
          <div className="flex-wrap footer-body-w-12/12 pb-2 md:pb-0 bg-mustardyellow flex">
            <div className="leftPart w-[85vmin]">
              <div
                className="imgHolder h-15
                   w-56 mt-8 ml-3"
              >
                <img src=".././images/logo-black.png"></img>
              </div>

              <p className="ml-5 font-oxygen font-medium">
                Embark on a literary journey with Kitabay, the online category
                wonderland nestled in Noida since 2023. We take glory in being
                sustainable and eco friendly - from new releases to treasured
                pre-loved categorys and merchs. And wait, there is more! Dive
                into the sea of categoryish merchandise that will make any heart
                flutter. Join Kitabay and let sustainable reading ignite your
                imagination!
              </p>
              <div className="socialIcons mt-5 ml-3 flex space-x-5">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacecategory} />
              </div>
              <div className="subsPanel flex">
                <input
                  type="search"
                  name=""
                  id=""
                  className="ml-3 mt-4 w-9/12 p-2"
                  placeholder="Subscribe to emailer"
                />
                <button
                  type="button"
                  className="bg-brown w-24 h-12 mt-[17px]
             text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="leftPart w-[90vmin] mt-5 pb-5">
              <div className="box1 w-12/12  ml-5 border-b-2 pb-2">
                <div className="holder flex">
                  <div className="textHolder w-11/12">
                    <p className="font-bold">Brand</p>
                  </div>
                  <img
                    id="imgIcon"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    className="float-right"
                    onClick={() => {
                      console.log(statusBlog);

                      if (statusBlog) {
                        document.getElementById("imgIcon").src =
                          "./images/ricon.png";
                        setStatusBlog(false);
                      } else {
                        document.getElementById("imgIcon").src =
                          "./images/downicon.png";
                        setStatusBlog(true);
                      }
                    }}
                  ></img>
                </div>
              </div>
              {statusBlog ? (
                <div className="brandHolder ml-5" id="brandHolder">
                  <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Blogs</li>
                  </ul>
                </div>
              ) : null}
              <div className="box1 w-12/12 ml-5 border-b-2 pb-2 mt-4">
                <div className="holder flex">
                  <div className="textHolder w-11/12">
                    <p className="font-bold">Shop Now</p>
                  </div>
                  <img
                    id="imgIcon1"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    className="float-right"
                    onClick={() => {
                      if (statusShop) {
                        document.getElementById("imgIcon1").src =
                          "./images/ricon.png";
                        setStatusShop(false);
                      } else {
                        document.getElementById("imgIcon1").src =
                          "./images/downicon.png";
                        setStatusShop(true);
                      }
                    }}
                  ></img>
                </div>
              </div>

              {statusShop ? (
                <div className="brandHolder ml-5" id="brandHolder1">
                  <ul>
                    <li>Merchendise</li>
                    <li>categorys</li>
                    <li>Worship items</li>
                    <li>Corporate Gifts</li>
                  </ul>
                </div>
              ) : null}

              <div className="box1 w-12/12 ml-5 border-b-2 mt-4">
                <div className="holder flex">
                  <div className="textHolder w-11/12">
                    <p className="font-bold">Policies</p>
                  </div>
                  <img
                    id="imgIcon2"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    className="float-right"
                    onClick={() => {
                      if (statusPolicy) {
                        document.getElementById("imgIcon2").src =
                          "./images/ricon.png";
                        setStatusPolicy(false);
                      } else {
                        document.getElementById("imgIcon2").src =
                          "./images/downicon.png";
                        setStatusPolicy(true);
                      }
                    }}
                  ></img>
                </div>
              </div>

              {statusPolicy ? (
                <div className="brandHolder ml-5 mt-2" id="brandHolder2">
                  <ul>
                    <li>Privacy</li>
                    <li>Shipping & Returns</li>
                    <li>Payment & Refunds</li>
                    <li>T&C</li>
                    <li>Track your Order</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </footer>
      )) ||
        (screen.width >= 1280 && screen.width < 1536 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-mustardyellow flex">
              <div className="leftPart w-[80vmin]">
                <div
                  className="imgHolder h-15
                   w-56 mt-8 ml-3"
                >
                  <img src=".././images/logo-black.png"></img>
                </div>

                <p className="ml-5 font-oxygen font-medium">
                  Embark on a literary journey with Kitabay, the online category
                  wonderland nestled in Noida since 2023. We take glory in being
                  sustainable and eco friendly - from new releases to treasured
                  pre-loved categorys and merchs. And wait, there is more! Dive
                  into the sea of categoryish merchandise that will make any
                  heart flutter. Join Kitabay and let sustainable reading ignite
                  your imagination!
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacecategory} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
             text-white"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="endingDiv mt-7 ml-3">
                  <p className="">
                    Copyright| All Rights Reserved,CodeMap.co.in
                  </p>
                </div>
              </div>

              <div className="leftPart w-[80vmin] ">
                <div className="pl-10 flex space-x-10 items-start mt-10 footerBox w-[70vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">Shop Now</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">categorys</li>
                      <li className="mt-1">Merchendises</li>
                      <li className="mt-1">Worship Materials</li>
                      <li className="mt-1">Corporate Gifts</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Shipping & Returns</li>
                      <li className="mt-1">Payment & Refunds</li>
                      <li className="mt-1">T&C</li>
                      <li className="mt-1">Track your Order</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 1536 && screen.width < 1728 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 lg:h-96 bg-mustardyellow flex">
              <div className="leftPart w-[95vmin]">
                <div
                  className="imgHolder h-15
                   w-56 mt-8 ml-3"
                >
                  <img src=".././images/logo-black.png"></img>
                </div>

                <p className="ml-5 font-oxygen font-medium">
                  Embark on a literary journey with Kitabay, the online category
                  wonderland nestled in Noida since 2023. We take glory in being
                  sustainable and eco friendly - from new releases to treasured
                  pre-loved categorys and merchs. And wait, there is more! Dive
                  into the sea of categoryish merchandise that will make any
                  heart flutter. Join Kitabay and let sustainable reading ignite
                  your imagination!
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacecategory} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
             text-white"
                  >
                    Subscribe
                  </button>
                </div>

                <div className="endingDiv mt-7 ml-3">
                  <p className="">
                    Copyright| All Rights Reserved,CodeMap.co.in
                  </p>
                </div>
              </div>

              <div className="leftPart  w-[115vmin]">
                <div className="flex justify-evenly items-start mt-10 footerBox w-[110vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Shop Now</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">categorys</li>
                      <li className="mt-1">Merchendises</li>
                      <li className="mt-1">Worship Materials</li>
                      <li className="mt-1">Corporate Gifts</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Shipping & Returns</li>
                      <li className="mt-1">Payment & Refunds</li>
                      <li className="mt-1">T&C</li>
                      <li className="mt-1">Track your Order</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 1728 && screen.width < 1920 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-mustardyellow flex">
              <div className="leftPart w-[75vmin]">
                <div
                  className="imgHolder h-15
                   w-56 mt-8 ml-3"
                >
                  <img src=".././images/logo-black.png"></img>
                </div>

                <p className="ml-5 font-oxygen font-medium">
                  Embark on a literary journey with Kitabay, the online category
                  wonderland nestled in Noida since 2023. We take glory in being
                  sustainable and eco friendly - from new releases to treasured
                  pre-loved categorys and merchs. And wait, there is more! Dive
                  into the sea of categoryish merchandise that will make any
                  heart flutter. Join Kitabay and let sustainable reading ignite
                  your imagination!
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacecategory} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
             text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="leftPart  w-[80vmin]">
                <div className="flex justify-evenly items-start mt-10 footerBox w-[79vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Shop Now</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">categorys</li>
                      <li className="mt-1">Merchendises</li>
                      <li className="mt-1">Worship Materials</li>
                      <li className="mt-1">Corporate Gifts</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Shipping & Returns</li>
                      <li className="mt-1">Payment & Refunds</li>
                      <li className="mt-1">T&C</li>
                      <li className="mt-1">Track your Order</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 1920 && screen.width < 2048 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-mustardyellow flex">
              <div className="leftPart w-[80vmin]">
                <div
                  className="imgHolder h-15
                   w-56 mt-8 ml-3"
                >
                  <img src=".././images/logo-black.png"></img>
                </div>

                <p className="ml-5 font-oxygen font-medium">
                  Embark on a literary journey with Kitabay, the online category
                  wonderland nestled in Noida since 2023. We take glory in being
                  sustainable and eco friendly - from new releases to treasured
                  pre-loved categorys and merchs. And wait, there is more! Dive
                  into the sea of categoryish merchandise that will make any
                  heart flutter. Join Kitabay and let sustainable reading ignite
                  your imagination!
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacecategory} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
             text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="leftPart  w-[97vmin]">
                <div className="flex justify-evenly items-start mt-10 footerBox w-[97vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Shop Now</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">categorys</li>
                      <li className="mt-1">Merchendises</li>
                      <li className="mt-1">Worship Materials</li>
                      <li className="mt-1">Corporate Gifts</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Shipping & Returns</li>
                      <li className="mt-1">Payment & Refunds</li>
                      <li className="mt-1">T&C</li>
                      <li className="mt-1">Track your Order</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 2048 && (
          <footer className="">
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-mustardyellow flex">
              <div className="leftPart w-[85vmin]">
                <div
                  className="imgHolder h-15
                   w-56 mt-8 ml-3"
                >
                  <img src=".././images/logo-black.png"></img>
                </div>

                <p className="ml-5 font-oxygen font-medium">
                  Embark on a literary journey with Kitabay, the online category
                  wonderland nestled in Noida since 2023. We take glory in being
                  sustainable and eco friendly - from new releases to treasured
                  pre-loved categorys and merchs. And wait, there is more! Dive
                  into the sea of categoryish merchandise that will make any
                  heart flutter. Join Kitabay and let sustainable reading ignite
                  your imagination!
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacecategory} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
             text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="leftPart  w-[90vmin] flex justify-center">
                <div className="pl-10 flex space-x-10 items-start mt-10 footerBox w-[70vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">Shop Now</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">categorys</li>
                      <li className="mt-1">Merchendises</li>
                      <li className="mt-1">Worship Materials</li>
                      <li className="mt-1">Corporate Gifts</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Shipping & Returns</li>
                      <li className="mt-1">Payment & Refunds</li>
                      <li className="mt-1">T&C</li>
                      <li className="mt-1">Track your Order</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        ))}
    </>
  );
};

export default Foot1;
