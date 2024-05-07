/* eslint-disable react/no-unescaped-entities */
import "./handler.css";

import Foot1 from "./Foot1";
import Header from "./Header";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { useState, useEffect } from "react";
const AddAdmin = () => {
  /*const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);*/
  //const navigate = useNavigate();
  /*useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/adminData")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/
  const getData = () => {
    axios.get("");
  };
  //console.log(data);
  const handleLogin = (e) => {
    e.preventDefault();

    //Signup Authetication code/Logic for backend extension
    getData();
    let flag = true;

    if (flag) {
      document.getElementById("success").innerHTML = "Upload Successful";
      flag = true;
    }

    if (!flag) {
      alert("Not Logged in Succesully");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-darkwhite">
        <h1
          id="success"
          className="text-3xl overflow-hidden ml-2 font-bold"
        ></h1>
        <div className="w-12/12  bg-darkwhite flex justify-center items-center p-10 ">
          <div className="form-area border-mustardyellow border-2 w-[99vw] md:w-[80vmin] ">
            <div className="flex flex-col justify-center items-center imgHolder h-20 w-12/12 bg-mustardyellow">
              <p className="text-2xl font-bold ">Admin</p>
              <span className="text-md">(Add an admin for your Database)</span>
            </div>

            <form className="pt-5 pl-3 pb-5">
              <input
                type="text"
                name="text"
                placeholder="Enter username..."
                className="shadow-xl p-2 w-[70vmin] lg:w-[76vmin]"
                /* onChange={(e) => {
                  setUser(e.target.value);
                }}*/
              ></input>
              <br />
              <br />
              <input
                type="text"
                name="password"
                placeholder="Enter Password..."
                className="shadow-xl p-2 w-[70vmin] lg:w-[76vmin]"
                /*onChange={(e) => {
                  setPassword(e.target.value);
                }}*/
              />

              <div className="btnHolder flex justify-center items-center mt-3">
                <button
                  type="submit"
                  className="mt-3 p-2 w-24 bg-mustardyellow text-black hover:bg-blue-700 "
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Foot1 />
    </>
  );
};
export default AddAdmin;
