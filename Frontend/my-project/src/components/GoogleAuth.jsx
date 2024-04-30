/* eslint-disable react/prop-types */
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GoogleAuth = (props) => {
  const Navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        Navigate("/login", { state: { val: res.data } });
      } catch (err) {
        alert(err);
      }
    },
  });
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        login();
      }}
      className="bg-darkblue text-white flex  justify-center items-center p-3 space-x-5"
    >
      <img src="./images/gicon.png" height={25} width={25} />

      <p>{props.text} 🚀</p>
    </button>
  );
};
export default GoogleAuth;
