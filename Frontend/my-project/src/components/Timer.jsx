/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "May, 15, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer text-brown text-2xl text-center font-medium mt-3">
      Time Remaining:{" "}
      <span className="text-black">
        {hours % 10 === hours ? "0" + hours : hours}:
        {minutes % 10 === minutes ? "0" + minutes : minutes}:
        {seconds % 10 === seconds ? "0" + seconds : seconds}
      </span>
    </div>
  );
};

export default Timer;
