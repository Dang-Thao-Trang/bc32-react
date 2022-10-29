import BookTicket from "./BookingTicker";
import "./style.css";
import InputForm from "./InputForm";
import BookingInfo from "./BookingInfo";

const MainBookingTicker = () => {
  return (
    <div className="background">
      <div className="overlay"></div>
      <h1 className="title">MOVIE SEAT SELECTION</h1>
      <div className="container d-flex justify-content-center">
        <div className="w3ls-reg">
          <InputForm />

          <div className="seat_w3ls my-5">
            <ul>
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
          </div>

          <BookTicket />

          <BookingInfo />
        </div>
      </div>
      <div className="copy-write py-3 text-white text-center fs-6">
        <p>
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          W3layouts
        </p>
      </div>
    </div>
  );
};

export default MainBookingTicker;
