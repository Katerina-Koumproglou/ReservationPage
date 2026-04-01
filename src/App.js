import { useState } from "react";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import notifSound from "./assets/sounds/notif-sound.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfo from "./components/UILayout/PersonalInfo";
import ReservationDetails from "./components/UILayout/ReservationDetails";
import validateUserInfo from "./components/ValidateUserInfo";

import { SubmitButton } from "./styles/Buttons";

function App() {
  const initialState = {
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    reservationDate: new Date(),
    reservationTime: "12:00",
    amountOfPeople: 1,
  };

  const [userInfo, setUserInfo] = useState(initialState);

  function handleChange(e) {
    const { id, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  }

  // Handle submit button
  function handleSubmit(e) {
    e.preventDefault();

    //Handle errors
    const tempErrors = validateUserInfo(userInfo);
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length !== 0) return;

    //Reservation submitted successfully
    console.log("Reservation sumbitted for: ", userInfo);
    const sound = new Audio(notifSound);
    sound.play();
    toast.success("Reservation submitted successfully!");
    // setTimeout(() => {
    //   alert("Reservation submitted successfully!");
    // }, 1000);
    setUserInfo(initialState);
    setErrors({});
  }

  function handleDateChange(date) {
    setUserInfo((prev) => ({ ...prev, reservationDate: date }));
  }

  //Handle errors
  const [errors, setErrors] = useState({});

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Reservation Page</h1>
      <div className="wrapper">
        {/* LEFT COLUMN */}
        <PersonalInfo
          userInfo={userInfo}
          handleChange={handleChange}
          errors={errors}
        />

        {/* RIGHT COLUMN */}
        <ReservationDetails
          userInfo={userInfo}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
        />
      </div>
      {/* SUBMIT BUTTON */}
      <SubmitButton>Submit</SubmitButton>
      <ToastContainer />
    </form>
  );
}

export default App;
