import { useState } from "react";
import "../css/Offeradds.css";
import OfferImg from "../Image/Frame 694.png";
const Offeradds = () => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const destination = new Date("jan 1,2025 10:00:00").getTime();
  setTimeout(() => {
    const time = new Date().getTime();

    const deff = destination - time;
    // console.log(destination - time);

    const days = Math.floor(deff / (1000 * 60 * 60 * 24));
    setDay(days);
    const hours = Math.floor((deff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    setHour(hours);
    const minutes = Math.floor((deff % (1000 * 60 * 60)) / (1000 * 60));
    setMinute(minutes);
    const seconds = Math.floor((deff % (1000 * 60)) / 1000);
    setSecond(seconds);
  }, 1000);

  return (
    <>
      <div className="offer-adds-component">
        <div className="offer-addas-sub-component">
          <div className="add-text-timer">
            <h1 className="offer-title">Enhance Your Music Experience</h1>
            <div className="add-time">
              <div className="day-time">
                <span className="time-d">{day}</span>Day
              </div>
              <div className="hours-time">
                <span className="time-d">{hour}</span>Hours
              </div>
              <div className="minute-time">
                <span className="time-d">{minute}</span>Minute
              </div>
              <div className="second-time">
                <span className="time-d">{second}</span>Second
              </div>
            </div>
            <button className="shop-now">Buy Now!</button>
          </div>

          <div className="add-image">
            <img
              className="offerimage"
              src={OfferImg}
              alt="offremusicimage.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offeradds;
