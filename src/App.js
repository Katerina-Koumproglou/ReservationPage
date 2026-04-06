import { useState } from "react";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import notifSound from "./assets/sounds/notif-sound.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactInfo from "./components/UILayout/ContactInfo";
import ReservationDetails from "./components/UILayout/ReservationDetails";
import validateUserInfo from "./functions/ValidateUserInfo";

import { SubmitButton } from "./styles/Buttons";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { SectionWrapper } from "./styles/Wrappers";
const App = () => {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    reservationDate: new Date(),
    reservationTime: "",
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
    <ThemeProvider theme={theme}>
      <form className="App" onSubmit={handleSubmit}>
        <SectionWrapper>
          {/* LEFT COLUMN */}
          <ContactInfo
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
        </SectionWrapper>
        {/* SUBMIT BUTTON */}
        <SubmitButton>RESERVE APPOINTMENT</SubmitButton>
        <ToastContainer />
      </form>
    </ThemeProvider>
  );
};

export default App;
