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

  return (
    <>
      <div className="Holder w-screen  p-5 flex flex-wrap gap-7  justify-center items-center">
        {(screen.width > 1000 &&
          data.map((val) => (
            <video
              autoPlay
              loop
              muted
              src={val.file}
              type="video/mp4"
              width={250}
              height={250}
            />
          ))) ||
          (screen.width > 0 &&
            screen.width < 400 &&
            data.map((val) => (
              <video
                autoPlay
                loop
                muted
                src={val.file}
                type="video/mp4"
                width={140}
                height={140}
              />
            ))) ||
          (screen.width > 400 &&
            data.map((val) => (
              <video
                autoPlay
                loop
                muted
                src={val.file}
                type="video/mp4"
                width={180}
                height={180}
              />
            )))}
      </div>
    </>
  );
};
export default Reviews;
