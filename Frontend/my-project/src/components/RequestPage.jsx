import Header from "./Header";
import Foot1 from "./Foot1";
import axios from "axios";
import { useEffect, useState } from "react";
const RequestPage = () => {
  const [data, setData] = useState([]);
  const ObjMap = {
    Fictional: "book",
    fictional: "book",
    "non fictional": "book",
    competetive: "book",
    business: "book",
    "self help": "book",
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ordersAPI")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      <Header />

      <div className="p-5 w-[100vw] lg:w-screen">
        <h1 className="text-center text-4xl h-16 font-bold">Request Page</h1>

        <div className="RequestBody w-12/12 flex gap-10 justify-center items-center flex-wrap pb-5">
          {data.map((val) => (
            // eslint-disable-next-line react/jsx-key
            <div className="card3 flex w-[95vw]  lg:w-[90vmin] rounded-lg shadow-2xl  pb-3 gap-5">
              <div className="imgHolder mt-5 width={120} ml-3">
                {(screen.width < 900 && (
                  <img src={val.image} height={120} width={120}></img>
                )) || <img src={val.image} height={140} width={140}></img>}
              </div>

              <div className="detailsDiv mt-5">
                <p className="prodName h-17 lg:h-10 text-lg font-medium lg:text-xl ">
                  Name:
                  <span className="text-xl lg:text-2xl  font-bold">
                    {" "}
                    {val.name}{" "}
                  </span>
                </p>
                <p className="category mt-2">
                  <p className="prodName h-10  text-lg font-medium lg:text-xl ">
                    Category:
                    <span className="text-xl lg:text-2xl  font-bold">
                      {" "}
                      {ObjMap[val.category]}{" "}
                    </span>
                  </p>
                </p>
                <p
                  className="Pr
              ice"
                >
                  <p className="category mt-2">
                    <p className="prodName h-10  text-lg font-medium lg:text-xl ">
                      Price:
                      <span className="text-xl lg:text-2xl  font-bold">
                        {" "}
                        Rs. {val.price}{" "}
                      </span>
                    </p>
                  </p>
                </p>
                <p className="discount mt-2">
                  <p className="prodName h-10  text-lg font-medium lg:text-xl ">
                    Discount-Listed:
                    <span className="text-xl lg:text-2xl  font-bold">
                      {val.discount + "%"}
                    </span>
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Foot1 />
    </>
  );
};
export default RequestPage;
