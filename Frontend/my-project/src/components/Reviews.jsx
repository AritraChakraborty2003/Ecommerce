/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/reviewsAPI")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <>
      <div className="Holder w-screen  p-5 flex flex-wrap gap-7 mb-40">
        {data.map((val) => (
          <video
            autoPlay
            loop
            muted
            src={val.file}
            type="video/mp4"
            width={150}
            height={100}
          />
        ))}
      </div>
    </>
  );
};
export default Reviews;