/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "./banner.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HeaderLogin = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setinput] = useState("");
  const [status1, setChangeStatus1] = useState(false);
  const [valMatch, setValMatch] = useState([]);
  const store = [];
  //let unique = [];
  const UniqueAuthor = [];
  const UniqueGenre = [];
  const UniqueBookname = [];
  const UniqueCategory = [];
  const UniqueBrand = [];
  const UniqueProducts = [
    "merchs",
    "merch",
    "books",
    "book",
    "gifts",
    "gift",
    "religious",
  ];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/searchAPI")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  data.map((val) => {
    if (UniqueAuthor.indexOf(val.author) === -1 && val.author != "NA") {
      UniqueAuthor.push(val.author);
    }
    if (UniqueGenre.indexOf(val.genre) === -1 && val.genre != "NA") {
      UniqueGenre.push(val.genre);
    }
    if (UniqueBookname.indexOf(val.bname) === -1 && val.bname != "NA") {
      UniqueBookname.push(val.bname);
    }
    if (UniqueBrand.indexOf(val.brand) === -1 && val.brand != "NA") {
      UniqueBrand.push(val.brand);
    }
    if (UniqueCategory.indexOf(val.category) === -1 && val.category != "NA") {
      UniqueCategory.push(val.category);
    }
  });

  let match = [];
  const fetchData = (value) => {
    match = [];
    UniqueBookname.filter((val) => {
      if (value != "") {
        if (val.startsWith(value)) {
          match.push(val);
          return val;
        }

        setValMatch(match);
        setChangeStatus1(true);
      } else {
        setChangeStatus1(false);
      }
    });

    UniqueGenre.filter((val) => {
      if (value != "") {
        if (val.startsWith(value)) {
          match.push(val);
          return val;
        }

        setValMatch(match);
        setChangeStatus1(true);
      } else {
        setChangeStatus1(false);
      }
    });
    UniqueProducts.filter((val) => {
      if (value != "") {
        if (val.startsWith(value)) {
          match.push(val);
          return val;
        }

        setValMatch(match);
        setChangeStatus1(true);
      } else {
        setChangeStatus1(false);
      }
    });
    UniqueBrand.filter((val) => {
      if (value != "") {
        if (val.startsWith(value)) {
          match.push(val);
          return val;
        }

        setValMatch(match);
        setChangeStatus1(true);
      } else {
        setChangeStatus1(false);
      }
    });

    UniqueAuthor.filter((val) => {
      if (value != "") {
        if (val.startsWith(value)) {
          match.push(val);
          return val;
        }

        setValMatch(match);
        setChangeStatus1(true);
      } else {
        setChangeStatus1(false);
      }
    });
  };
  const handleChange = (value) => {
    if (value != "") {
      setinput(value);
      fetchData(value);
      console.log(input);
    } else {
      setChangeStatus1(false);
    }
  };
  console.log(data);
  console.log("This is: ", valMatch, "the length is ", valMatch.length);
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="hidden lg:block slidebar bg-mustardyellow  w-12/12 p-2">
            <div className="showText w-12/12">
              <ul className="flex justify-evenly font-medium font-serif">
                <Marquee speed={80} gradient={false} pauseOnHover>
                  <li className="ml-10">
                    Great <span className="font-bold">Books!!!!</span>
                  </li>

                  <li className="ml-20">
                    Excellent customer
                    <span className=" font-bold"> Service</span>
                  </li>
                  <li className="ml-20">
                    Contact No: <span className=" font-bold"> 9856XXXX</span>
                  </li>
                  <li className="ml-20">
                    Best <span className=" font-bold">Merchandises</span>
                  </li>
                  <li className="ml-20">
                    Top notch
                    <span className=" font-bold">
                      &nbsp;&nbsp;Corporate Gifts
                    </span>
                  </li>
                </Marquee>
              </ul>
            </div>
          </div>
          <div className=".fixed relative .top-0 navBar bg-darkwhite  flex  justify-between">
            {(screen.width > 1199 && (
              <div className="flex space-x-2">
                <div className="hidden lg:block  w-[45vmin] p-2  justify-center items-center">
                  <div className="logoHolder ">
                    <a href="/">
                      <img
                        src="./images/logo-black.png"
                        className="max-w-full max-h-full object-contain"
                      ></img>
                    </a>
                  </div>
                </div>

                <div className="IconHolder  w-[77vmin] p-2 hidden lg:block">
                  <ul className="flex ml-1 space-x-3 xl:space-x-5 p-4 pl-2 pr-4   lg:font-normal  xl:text-md  xl:font-normal lg:text-md text-lg">
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/Filter">Books</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/FilterMerchs">Merchs</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/FilterReligious">Religious</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <Link to="/FilterGifts">Corporate Gifts</Link>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="IconHolder w-[67vmin] p-2 hidden lg:block ">
                  <div className="flex flex-col">
                    <div className="searchHolder flex justify-end items-center   border-white bg-white mt-2 p-2 ">
                      <input
                        type="text"
                        placeholder="Search your item...."
                        id="searchBox"
                        onChange={(e) => {
                          handleChange(e.target.value);
                        }}
                        className="rounded-lg pl-1 border-white w-[65vmin]"
                      ></input>

                      <FaSearch
                        height={40}
                        width={40}
                        className="mr-5"
                        id="search"
                        onClick={() => {
                          if (
                            document.getElementById("searchBox").value === ""
                          ) {
                            alert("Please enter a value to search");
                          } else if (
                            document.getElementById("searchBox").value ===
                              "merchs" ||
                            document.getElementById("searchBox").value ===
                              "merch" ||
                            document.getElementById("searchBox").value ===
                              "book" ||
                            document.getElementById("searchBox").value ===
                              "books" ||
                            document.getElementById("searchBox").value ===
                              "gift" ||
                            document.getElementById("searchBox").value ===
                              "gifts" ||
                            document.getElementById("searchBox").value ===
                              "religious"
                          ) {
                            const value =
                              document.getElementById("searchBox").value;
                            if (value === "books") {
                              navigate("/Filter", {
                                state: {
                                  val:
                                    document.getElementById("searchBox").value +
                                    "API",
                                  title:
                                    document.getElementById("searchBox").value,
                                  api: "booksAPI",
                                },
                              });
                              document.getElementById("searchBox").value = "";
                            } else if (
                              value === "gifts" ||
                              value === "merchs" ||
                              value === "religious"
                            ) {
                              if (value === "gifts") {
                                navigate("/FilterGifts", {
                                  state: {
                                    val:
                                      document.getElementById("searchBox")
                                        .value + "API",
                                    title:
                                      document.getElementById("searchBox")
                                        .value,
                                  },
                                });
                              }
                              if (value === "merchs") {
                                navigate("/FilterMerchs", {
                                  state: {
                                    val:
                                      document.getElementById("searchBox")
                                        .value + "API",
                                    title:
                                      document.getElementById("searchBox")
                                        .value,
                                  },
                                });
                              }
                              if (value === "religious") {
                                navigate("/FilterReligious", {
                                  state: {
                                    val:
                                      document.getElementById("searchBox")
                                        .value + "API",
                                    title:
                                      document.getElementById("searchBox")
                                        .value,
                                  },
                                });
                              }
                            } else {
                              if (value === "book") {
                                navigate("/Filter", {
                                  state: {
                                    val:
                                      document.getElementById("searchBox")
                                        .value +
                                      "s" +
                                      "API",
                                    title:
                                      document.getElementById("searchBox")
                                        .value + "s",
                                    api: "booksAPI",
                                  },
                                });
                              } else if (
                                value === "merch" ||
                                value === "gift"
                              ) {
                                if (value === "merch") {
                                  navigate("/FilterMerchs", {
                                    state: {
                                      val:
                                        document.getElementById("searchBox")
                                          .value +
                                        "s" +
                                        "API",
                                      title:
                                        document.getElementById("searchBox")
                                          .value + "s",
                                    },
                                  });
                                } else {
                                  navigate("/FilterGifts", {
                                    state: {
                                      val:
                                        document.getElementById("searchBox")
                                          .value +
                                        "s" +
                                        "API",
                                      title:
                                        document.getElementById("searchBox")
                                          .value + "s",
                                    },
                                  });
                                }
                              }
                            }
                          } else {
                            data.map((val) => {
                              const value =
                                document.getElementById("searchBox").value;
                              if (val.brand === "NA") {
                                console.log("Found");
                                if (
                                  val.bname === value ||
                                  val.author === value ||
                                  val.genre === value ||
                                  val.category === value ||
                                  val.categorySupport === value ||
                                  val.authorLname === value ||
                                  val.authorFname === value
                                ) {
                                  const bookObj = {
                                    name: val.bname,
                                    author: val.author,
                                    genre: val.genre,
                                    category: val.category,
                                    image: val.image,
                                    price: val.price,
                                    brand: "NA",
                                    stock: val.stock,
                                    discount: val.discount,
                                    descr: val.decsr,
                                  };

                                  store.push(bookObj);
                                }
                                navigate("/search", {
                                  state: { val: store, api: "booksAPI" },
                                });
                              }
                              if (val.author === "NA") {
                                if (
                                  val.descr === value ||
                                  val.category === value ||
                                  val.brandFname === value ||
                                  val.brandLname === value ||
                                  val.bname === value
                                ) {
                                  const pObj = {
                                    name: val.bname,
                                    author: val.author,
                                    genre: val.genre,
                                    category: val.category,
                                    image: val.image,
                                    price: val.price,
                                    stock: val.stock,
                                    discount: val.discount,
                                    descr: val.decsr,
                                    brand: val.brand,
                                  };

                                  store.push(pObj);
                                }
                                navigate("/search", {
                                  state: { val: store },
                                });
                              }
                            });
                          }
                        }}
                      ></FaSearch>
                    </div>
                    {input != "" && status1 && (
                      <>
                        <div className="p-2  w-[60vmin]  ml-3 bg-white text-black mt-[0.01vmin]">
                          <ul>
                            {valMatch.map((val) => (
                              <li
                                onClick={() => {
                                  document.getElementById("searchBox").value =
                                    val;
                                  setChangeStatus1(false);
                                }}
                              >
                                {val}
                              </li>
                            ))}
                          </ul>

                          <div
                            className="mt-2 text-xs flex"
                            onClick={() => {
                              setChangeStatus1(false);
                            }}
                          >
                            <img
                              src="./images/cross.png"
                              height={10}
                              width={10}
                              className="mt-1"
                            ></img>
                            <div className="ml-1">Close</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="ExtHolder hidden lg:block w-[25vmin] p-2">
                  <div className="ExtHolder flex justify-end  mr-10  w-full p-2 space-x-10 ">
                    <div className="imgHolder w-24 flex items-center">
                      <div className="flex w-24">
                        <p className="w-20">Aritra</p>
                        <img
                          src="./images/downicon.png"
                          height={27}
                          className="ml-1"
                          width={27}
                          onClick={() => {
                            console.log("data");
                          }}
                        ></img>
                      </div>
                    </div>

                    <div className="imgHolder w-20  items-center overflow-hidden flex h-13">
                      <a href="/cart">
                        <img
                          src="./images/cart.png"
                          className="w-[30px] h-[30px]"
                        ></img>
                      </a>
                      <div className="h-7 w-7 rounded-2xl bg-orange mt-[-2vmin] ml-[-0.45vmin]">
                        <p className="flex justify-center items-center text-white">
                          1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) || (
              <div className="hamHolder block lg:hidden h-20">
                <div className="flex gap-2 w-[100vw] md:w-[100vw]">
                  <div className="flex w-1/2">
                    <div className="h-20 flex justify-center items-center ml-3">
                      <div className="imgHolder flex justify-center items-center">
                        <img
                          className="max-h-full max-w-full object-contain"
                          src="./images/hamburger (1).png"
                          onClick={() => {
                            if (status) {
                              setStatus(false);
                            } else setStatus(true);
                          }}
                          height={27}
                          width={27}
                        ></img>
                      </div>
                    </div>
                    <div className="logoHolder mt-6 ml-6 w-56 ">
                      <a href="/">
                        <img
                          src="./images/logo-black.png"
                          className="max-w-full max-h-full object-contain"
                          height={170}
                          width={140}
                        ></img>
                      </a>
                    </div>
                  </div>
                  <div className="space-x-5 w-1/2 flex justify-end pr-5">
                    <div className="imgHolder flex justify-center items-center mt-2">
                      <img
                        className="max-h-full max-w-full object-contain"
                        src="./images/cart.png"
                        height={40}
                        width={40}
                      ></img>
                    </div>

                    <div className="imgHolder flex justify-center items-center mt-2 ml-2">
                      <img
                        className="max-h-full max-w-full object-contain"
                        src="./images/user1.png"
                        height={40}
                        width={40}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {status ? (
        <div className="className pb-10 bg-darkwhite">
          <div className="iconHolder">
            <ul className="pl-5 pt-2 flex flex-col gap-3">
              <li>
                <a href="#" className="text-black ">
                  <Link to="/Filter">Books</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  <Link to="/FilterMerchs">Merchs</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  <Link to="/FilterReligious">Religious</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  <Link to="/FilterGifts">Corporate Gifts</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="searchDiv lg:hidden flex justify-center items-center bg-darkwhite pl-3 pr-3 pb-3">
        <div className="flex flex-col">
          <div className="searchHolder flex justify-end items-center   border-white bg-white p-2 ">
            <input
              type="text"
              placeholder="Search your item...."
              id="searchBox"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              className="rounded-lg pl-1 border-white w-[95vw]"
            ></input>

            <FaSearch
              height={40}
              width={40}
              className="mr-5"
              id="search"
              onClick={() => {
                if (document.getElementById("searchBox").value === "") {
                  alert("Please enter a value to search");
                } else if (
                  document.getElementById("searchBox").value === "merchs" ||
                  document.getElementById("searchBox").value === "merch" ||
                  document.getElementById("searchBox").value === "book" ||
                  document.getElementById("searchBox").value === "books" ||
                  document.getElementById("searchBox").value === "gift" ||
                  document.getElementById("searchBox").value === "gifts" ||
                  document.getElementById("searchBox").value === "religious"
                ) {
                  const value = document.getElementById("searchBox").value;
                  if (
                    value === "merchs" ||
                    value === "books" ||
                    value === "gifts"
                  ) {
                    navigate("/Items", {
                      state: {
                        val: document.getElementById("searchBox").value + "API",
                        title: document.getElementById("searchBox").value,
                      },
                    });
                    document.getElementById("searchBox").value = "";
                  } else {
                    navigate("/Items", {
                      state: {
                        val:
                          document.getElementById("searchBox").value +
                          "s" +
                          "API",
                        title: document.getElementById("searchBox").value + "s",
                      },
                    });
                  }
                } else {
                  data.map((val) => {
                    const value = document.getElementById("searchBox").value;
                    if (val.brand === "NA") {
                      console.log("Found");
                      if (
                        val.bname === value ||
                        val.author === value ||
                        val.genre === value ||
                        val.category === value ||
                        val.categorySupport === value ||
                        val.authorLname === value ||
                        val.authorFname === value
                      ) {
                        const bookObj = {
                          name: val.bname,
                          author: val.author,
                          genre: val.genre,
                          category: val.category,
                          image: val.image,
                          price: val.price,
                          stock: val.stock,
                          discount: val.discount,
                          descr: val.decsr,
                        };

                        store.push(bookObj);
                      }
                    }
                    if (val.author === "NA") {
                      if (
                        val.descr === value ||
                        val.category === value ||
                        val.brandFname === value ||
                        val.brandLname === value
                      ) {
                        const pObj = {
                          name: val.bname,
                          author: val.author,
                          genre: val.genre,
                          category: val.category,
                          image: val.image,
                          price: val.price,
                          stock: val.stock,
                          discount: val.discount,
                          descr: val.decsr,
                          brand: val.brand,
                        };

                        store.push(pObj);
                      }
                    }
                  });

                  navigate("/search", { state: { val: store } });
                }
              }}
            ></FaSearch>
          </div>
          {input != "" && status1 && (
            <>
              <div className="p-2  w-[92vw]  ml-1 bg-white text-black mt-[0.01vmin]">
                <ul>
                  {valMatch.map((val) => (
                    <li
                      onClick={() => {
                        document.getElementById("searchBox").value = val;
                        setChangeStatus1(false);
                      }}
                    >
                      {val}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-2 text-xs flex"
                  onClick={() => {
                    setChangeStatus1(false);
                  }}
                >
                  <img
                    src="./images/cross.png"
                    height={10}
                    width={10}
                    className="mt-1"
                  ></img>
                  <div className="ml-1">Close</div>
                </div>
              </div>
              <p>The logic behind login</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default HeaderLogin;
