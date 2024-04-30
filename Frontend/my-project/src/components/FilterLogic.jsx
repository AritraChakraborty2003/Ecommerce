/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Header from "./Header";
import Foot1 from "./Foot1";
import { Individualproductpage } from "./Individualproductpage";
//import Detailspage from "./Detailspage";
import axios from "axios";
import "./Filter.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*useCode={ (book != "" &&
                author != "" &&
                price === " " &&
                book + " " + author + " ") ||
              (book === "" &&
                author != "" &&
                price != " " &&
                author + " " + price + " ") ||
              (book != "" &&
                author === "" &&
                price != " " &&
                book + " " + price + " ") ||
              (book == "" && author == "" && price == "" && "All Products") ||
              (book == "" && price == "" && author != "" && author) ||
              (author == "" && price == "" && book != "" && book) ||
              (author == "" && book == "" && price != "" && price)}}*/
const FilterLogic = () => {
  const [data, setData] = useState([]);
  const [filteredProduct, setFilterProduct] = useState([]);
  const [author, setAuthor] = useState("");
  const [book, setBook] = useState("");
  const [active, setActive] = useState(" ");
  const [active1, setActive1] = useState(" ");
  const [active2, setActive2] = useState(" ");
  const [category, setCategory] = useState("All Products");
  const [genreDiv, setgenreDiv] = useState(false);
  const [authorDiv, setauthorDiv] = useState(false);
  const [priceDiv, setpriceDiv] = useState(false);
  const [isFind, setisFind] = useState(false);
  const [priceValue, setPriceValue] = useState(0);
  const [price, setPrice] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/booksAPI")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [spans] = useState([
    {
      id: "Fictional",
      text: "Fictional",
      type: "book",
    },
    {
      id: "Non fictional",
      text: "Non fictional",
      type: "book",
    },
    {
      id: "Competetive",
      text: "Competetive",
      type: "book",
    },
    {
      id: "Self Help",
      text: "Self Help",
      type: "book",
    },
    {
      id: "Business",
      text: "Business",
      type: "book",
    },
  ]);

  const [spansAuthor] = useState([
    {
      id: "Robin Sharma",
      text: "Robin Sharma",
      type: "author",
    },
    {
      id: "ML Khanna",
      text: "ML Khanna",
      type: "author",
    },
    {
      id: "Paulo Coelho",
      text: "Paulo Coelho",
      type: "author",
    },
    {
      id: "Ashneer Grover",
      text: "Ashneer Grover",
      type: "author",
    },
  ]);

  const [spansPrice] = useState([
    {
      id: 500,
      text: "under 500",
      type: "price",
      val: "discrete",
    },
    {
      id: 1000,
      text: "Between 500 to 1000",
      type: "price",
      val: "range",
    },
    {
      id: 1001,
      text: "More than 1000",
      type: "price",
      val: "discreteMore",
    },
  ]);

  const filterFunction = (Obj) => {
    if (author === "" && book === "" && price === "") {
      if (Obj.type === "book") {
        const filter = data.filter((product) => product.category === Obj.text);
        console.log(filter);
        setFilterProduct(filter);
        setBook(Obj.text);
      } else if (Obj.type === "author") {
        const filter = data.filter((product) => product.author === Obj.text);
        console.log(filter);
        setFilterProduct(filter);
        setAuthor(Obj.text);
      } else if (Obj.type === "price") {
        /*const filter = data.filter((product) => product.author === Obj.text);
        console.log(filter);
        setFilterProduct(filter);
        setAuthor(Obj.text);*/
        if (Obj.val === "discrete") {
          const filter = data.filter((product) => product.price < Obj.id);
          console.log(filter);
          setFilterProduct(filter);
          setPriceValue(Obj.id);
          setPrice(Obj.text);
          setPriceVal(Obj.val);
        } else if (Obj.val === "range") {
          const filter = data.filter(
            (product) => product.price > 500 && product.price <= 1000
          );
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        } else if (Obj.val === "discreteMore") {
          const filter = data.filter((product) => product.price > Obj.id);
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        }
      }
    } else {
      if (Obj.type === "book" && book != "" && author == "" && price == "") {
        console.log("Click");
        const filter = data.filter((product) => product.category === Obj.text);
        console.log(filter);
        setFilterProduct(filter);
        setBook(Obj.text);
      } else if (
        Obj.type === "book" &&
        book != "" &&
        author == "" &&
        price != ""
      ) {
        if (priceVal === "discrete") {
          const filter = data.filter(
            (product) => product.price < 500 && product.category === Obj.text
          );
          console.log(filter);
          setFilterProduct(filter);
          setBook(Obj.text);
        } else if (Obj.val === "range") {
          const filter = data.filter(
            (product) =>
              product.price > 500 &&
              product.price <= 1000 &&
              product.category === Obj.text
          );
          console.log(filter);
          setFilterProduct(filter);
          setBook(Obj.text);
        } else if (Obj.val === "discreteMore") {
          const filter = data.filter(
            (product) => product.price > Obj.id && product.category === Obj.text
          );
          console.log(filter);
          setFilterProduct(filter);
          setBook(Obj.text);
        }
      } else if (
        Obj.type === "author" &&
        author != "" &&
        book == "" &&
        price == ""
      ) {
        console.log("Click");
        const filter = data.filter((product) => product.author === Obj.text);
        console.log(filter);
        setFilterProduct(filter);
        setAuthor(Obj.text);
      } else if (
        Obj.type === "price" &&
        price != "" &&
        book == "" &&
        author == ""
      ) {
        if (Obj.val === "discrete") {
          const filter = data.filter((product) => product.price < Obj.id);
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        } else if (Obj.val === "range") {
          const filter = data.filter(
            (product) => product.price > 500 && product.price < 1000
          );
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        } else if (Obj.val === "discreteMore") {
          const filter = data.filter((product) => product.price > Obj.id);
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        }
      } else if (Obj.type === "author" && book != "" && price === "") {
        console.log("Click");
        const filter = data.filter(
          (product) => product.author === Obj.text && product.category == book
        );
        console.log(filter);
        setFilterProduct(filter);
        setAuthor(Obj.text);
      } else if (Obj.type === "price" && book != "" && author === "") {
        if (Obj.val === "discrete") {
          const filter = data.filter(
            (product) => product.price < Obj.id && product.category === book
          );
          console.log(filter);
          setFilterProduct(filter);
          setPriceValue(Obj.id);
          setPrice(Obj.text);
          setPriceVal(Obj.val);
        } else if (Obj.val === "range") {
          const filter = data.filter(
            (product) =>
              product.price > 500 &&
              product.price <= 1000 &&
              product.category === book
          );
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        } else if (Obj.val === "discreteMore") {
          const filter = data.filter(
            (product) => product.price > Obj.id && product.category === book
          );
          console.log(filter);
          setFilterProduct(filter);
          setPrice(Obj.text);
          setPriceValue(Obj.id);
          setPriceVal(Obj.val);
        }
      } else if (Obj.type === "author" && book != "" && price != "") {
        if (priceVal === "discrete") {
          const filter = data.filter(
            (product) =>
              product.author === Obj.text &&
              product.category == book &&
              product.price < priceValue
          );
          console.log(filter);
          setFilterProduct(filter);
          setAuthor(Obj.text);
        } else if (priceVal === "range") {
          const filter = data.filter(
            (product) =>
              product.author === Obj.text &&
              product.category == book &&
              product.price > 500 &&
              product.price < priceValue
          );
          console.log(filter);
          setFilterProduct(filter);
          setAuthor(Obj.text);
        } else {
          const filter = data.filter(
            (product) =>
              product.author === Obj.text &&
              product.category == book &&
              product.price > priceValue
          );
          console.log(filter);
          setFilterProduct(filter);
          setAuthor(Obj.text);
        }
      } else if (Obj.type === "book" && author != "" && price === "") {
        const filter = data.filter(
          (product) => product.category === Obj.text && product.author == author
        );
        console.log(filter);
        setFilterProduct(filter);
        setBook(Obj.text);
      } else if (Obj.type === "book" && author != "" && price != "") {
        if (priceVal === "discrete") {
          const filter = data.filter(
            (product) =>
              product.author === Obj.text &&
              product.category == book &&
              product.price < priceValue
          );
          console.log(filter);
          setFilterProduct(filter);
          setAuthor(Obj.text);
        } else if (priceVal === "range") {
          const filter = data.filter(
            (product) =>
              product.author === Obj.text &&
              product.category == book &&
              product.price > 500 &&
              product.price < priceValue
          );
          console.log(filter);
          setFilterProduct(filter);
          setAuthor(Obj.text);
        } else {
          const filter = data.filter(
            (product) =>
              product.author === Obj.text &&
              product.category == book &&
              product.price > priceValue
          );
          console.log(filter);
          setFilterProduct(filter);
          setAuthor(Obj.text);
        }
      }
    }
    /*console.log(author);

    const filter = data.filter((product) => product.category == text);
    console.log(filter);
    setFilterProduct(filter);*/
  };
  const handleChange = (individual) => {
    if (individual.type === "book") setActive(individual.id);
    if (individual.type === "author") setActive1(individual.id);
    if (individual.type === "price") setActive2(individual.id);
    setCategory(individual.text);
    filterFunction(individual);
    setisFind(true);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center h-28 w-screen text-5xl items-center bg-mustardyellow text-black font-extrabold">
        Books
      </div>
      <div className="mainArea bg-darkwhite w-screen flex space-x-3 pb-5">
        {screen.width >= 1280 && screen.width < 1700 && (
          <>
            <div className="filter flex-column hidden lg:block lg: w-[400px]">
              <div className="boxFilter  w-[400px]  ">
                <h1 className="mt-1 ml-3 text-4xl  font-poppins font-bold overflow-hidden">
                  Filter{" "}
                  <span className="text-2xl font-medium">( your needs )</span>
                </h1>
                <div className="flex ml-2 mt-10 border-solid border-b-2 w-[45vmin] ">
                  <div className="textHolder w-[40vmin] ">
                    <p className="text-xl overflow-hidden font-medium  font-poppins">
                      Genre
                    </p>
                  </div>

                  <img
                    id="imgIcon1"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    onClick={() => {
                      if (genreDiv) {
                        document.getElementById("imgIcon1").src =
                          "./images/ricon.png";
                        setgenreDiv(false);
                      } else {
                        document.getElementById("imgIcon1").src =
                          "./images/downicon.png";
                        setgenreDiv(true);
                      }
                    }}
                  />
                </div>
              </div>

              {genreDiv ? (
                <ul className="ml-10 mt-4 choice">
                  {spans.map((individual, index) => (
                    <li>
                      <span
                        key={index}
                        id={individual.id}
                        onClick={() => {
                          handleChange(individual);
                        }}
                        className={
                          individual.id === active ? "active" : "deactive"
                        }
                      >
                        {individual.text}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex ml-2 mt-5  border-solid border-b-2 w-[45vmin]">
                <div className="textHolder w-[40vmin] ">
                  <p className="text-xl overflow-hidden font-medium font-poppins">
                    Author
                  </p>
                </div>
                <img
                  id="imgIcon3"
                  src="./images/ricon.png"
                  height={20}
                  width={20}
                  onClick={() => {
                    if (authorDiv) {
                      document.getElementById("imgIcon3").src =
                        "./images/ricon.png";
                      setauthorDiv(false);
                    } else {
                      document.getElementById("imgIcon3").src =
                        "./images/downicon.png";
                      setauthorDiv(true);
                    }
                  }}
                />
              </div>

              {authorDiv ? (
                <ul className="ml-10 mt-4 choice">
                  {spansAuthor.map((individual1) => (
                    <li>
                      <span
                        id={individual1.id}
                        onClick={() => {
                          handleChange(individual1);
                        }}
                        className={
                          individual1.id === active1 ? "active" : "deactive"
                        }
                      >
                        {individual1.text}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex ml-2 mt-5  border-solid border-b-2 w-[45vmin]">
                <div className="textHolder w-[40vmin] ">
                  <p className="text-xl overflow-hidden font-medium font-poppins">
                    Price Range
                  </p>
                </div>
                <img
                  id="imgIcon5"
                  src="./images/ricon.png"
                  height={20}
                  width={20}
                  onClick={() => {
                    if (priceDiv) {
                      document.getElementById("imgIcon5").src =
                        "./images/ricon.png";
                      setpriceDiv(false);
                    } else {
                      document.getElementById("imgIcon5").src =
                        "./images/downicon.png";
                      setpriceDiv(true);
                    }
                  }}
                />
              </div>

              {priceDiv ? (
                <ul className="ml-10 mt-4 choice">
                  {spansPrice.map((individual3) => (
                    <li>
                      <span
                        id={individual3.id}
                        onClick={() => {
                          handleChange(individual3);
                        }}
                        className={
                          individual3.id === active2 ? "active" : "deactive1"
                        }
                      >
                        {individual3.text}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <li className="mt-5 w-full flex justify-start ml-4">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2"
                  onClick={() => {
                    setActive(" ");
                    setActive1(" ");
                    setActive2(" ");
                    setCategory("All Products");
                    setFilterProduct([]);
                    setAuthor("");
                    setBook("");
                    setPriceVal("");
                    setPriceValue("");
                    setPrice("");
                    //setpriceDiv("");
                    setisFind(false);
                  }}
                >
                  Clear Filter
                </button>
              </li>
            </div>
          </>
        )}
        {screen.width >= 1700 && (
          <>
            <h1 className="mt-1 ml-2 text-3xl font-bold">Filter</h1>
            <div className="filter flex-column hidden lg:block  w-[600px]">
              <div className="boxFilter  w-[400px]  ">
                <p className="text-center mt-3 text-2xl overflow-hidden font-bold">
                  Genre
                </p>
                <ul className="ml-10 mt-4">
                  <li>
                    <input type="radio" value="Fictional" name="bookChoice" />
                    Fictional
                  </li>
                  <li>
                    <input type="radio" value="Fictional" name="bookChoice" />{" "}
                    Non Fictional
                  </li>
                  <li>
                    <input type="radio" value="Fictional" name="bookChoice" />
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
                    <input type="radio" value="Fictional" name="bookChoice" />
                    upto 500
                  </li>
                  <li>
                    <input type="radio" value="Fictional" name="bookChoice" />{" "}
                    Non Rs 500-750
                  </li>
                  <li>
                    <input type="radio" value="Fictional" name="bookChoice" />{" "}
                    Rs 1000 -above
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
                    <input
                      type="radio"
                      value="Fictional"
                      name="bookChoice"
                    />{" "}
                    Non Bengali
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
          </>
        )}

        <div>
          <p className="text-center text-3xl overflow-hidden font-bold mt-4 h-16 ">
            {(book == "" && author == "" && price == "" && "All Products") ||
              book + " " + author + " " + price}
          </p>
          <div className="display mt-7 flex flex-wrap gap-5  w-[100vw] lg:w-[71vw] justify-center items-center pb-5">
            {filteredProduct.length > 0 && (
              <Individualproductpage
                category={category}
                filterP={filteredProduct}
              />
            )}
            {filteredProduct.length < 1 && isFind === true && (
              <p className="text-center mt-5">0 results found</p>
            )}

            {filteredProduct.length < 1 &&
              isFind === false &&
              data.map((val) => (
                // eslint-disable-next-line react/jsx-key

                <div
                  className="w-[230px]  pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-xl overflow-hidden transform transition duration-300 
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
                        navigate("/details", { state: { val: val } });
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <a href="#">
                      <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        {val.name}
                      </p>
                    </a>
                    <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400">
                      by {val.author}
                    </p>
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

            {data.length < 1 && (
              <div className="h-96 flex justify-center items-center">
                <p>Please Wait...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Foot1 />
    </>
  );
};
export default FilterLogic;
