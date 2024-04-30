import "./handler.css";
import Header from "./Header";
import Foot1 from "./Foot1";
import { useState } from "react";
import GoogleAuth from "./GoogleAuth";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(
      "Name: ",
      name,
      "The email email:",
      email,
      "password: ",
      password,

      "confirm password: ",
      confirmPassword,
      "mobile: ",
      mobile
    );
    //Signup Authetication code/Logic for backend extension
  };

  return (
    <>
      <Header />
      <div className="w-12/12 h-[100vh] flex justify-center items-center bg-darkwhite">
        <div className="form-area border-mustardyellow border-2 w-[98vw] md:w-[80vmin] ">
          <div className="flex flex-col justify-center items-center imgHolder h-20 w-12/12 bg-mustardyellow">
            <p className="text-3xl font-bold overflow-hidden h-12 ">Sign-Up</p>
            <span className="text-md">
              (Fill the details to create an account)
            </span>
          </div>

          <form className="p-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Name..."
              className="shadow-xl p-2 w-[76vmin]"
              value={email}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <br />
            <br />
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
              className="shadow-xl p-2  w-[76vmin]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              type="text"
              name="cnfPassword"
              placeholder="Confirm  Password..."
              value={email}
              className="shadow-xl p-2 w-[76vmin]"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>

            <br></br>
            <br></br>

            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile..."
              value={email}
              className="shadow-xl p-2 w-[76vmin]"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            ></input>
            <br></br>
            <br></br>
            <a>Or signup directly with google...</a>
            <br></br>
            <div className="mt-3">
              <GoogleAuth text="Signup with Google" />
            </div>
            <div className="mt-3">
              <a href="/login">Already have an account?</a>
            </div>
            <br></br>
            <div className="btnHolder flex justify-center items-center">
              <button
                type="submit"
                className="mt-3 p-2 bg-mustardyellow text-black hover:bg-blue-700 "
                onClick={handleSignup}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Foot1 />
    </>
  );
};
export default Signup;
