/* eslint-disable react/no-unescaped-entities */
import "./handler.css";
import GoogleAuth from "./GoogleAuth";
import Foot1 from "./Foot1";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("The email email:", email, "password: ", password);
    //Signup Authetication code/Logic for backend extension
  };

  return (
    <>
      <Header />
      <div className="w-12/12  bg-darkwhite flex justify-center items-center p-10">
        <div className="form-area border-mustardyellow border-2 w-[98vw] md:w-[80vmin] ">
          <div className="flex flex-col justify-center items-center imgHolder h-20 w-12/12 bg-mustardyellow">
            <p className="text-2xl font-bold ">Login</p>
            <span className="text-md">(Login into your Fashion account)</span>
          </div>

          <form className="p-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              className="shadow-xl p-2 w-[76vmin]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="password"
              placeholder="Enter Password..."
              value={email}
              className="shadow-xl p-2 w-[76vmin]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br></br>
            <br></br>

            <a>Or signup directly with google...</a>
            <br></br>

            <div className="mt-3">
              <GoogleAuth text="Login with Google" />
            </div>

            <br></br>
            <a href="/Signup">Don't Have an account?</a>

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
      <Foot1 />
    </>
  );
};
export default Login;
