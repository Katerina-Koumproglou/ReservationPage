import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import notifSound from "../assets/sounds/notif-sound.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactInfo from "../components/UILayout/ContactInfo";
import ReservationDetails from "../components/UILayout/ReservationDetails";
import validateUserInfo from "../functions/validateNecessaryFields";
import { SubmitButton } from "../styles/Buttons";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AppWrapper, SectionWrapper } from "../styles/Wrappers";

const ReservationPage = () => {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    reservationDate: new Date(),
    selectedSlot: null,
    amountOfGuests: null,
  };

  const [userInfo, setUserInfo] = useState(initialState);
  const [errors, setErrors] = useState({}); //Handle errors

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

    //Prepare the new reservation into a string
    const preparedNewReservation = {
      ...userInfo,
      reservationDate: userInfo.reservationDate.toISOString(),
    };
    // console.log("prepared res: ", preparedNewReservation);

    //Create an array of the already existing reservations
    const existingReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    // console.log("existing reservations: ", existingReservations);

    //Load new reservation to the array of the existing ones
    const updatedReservations = [
      ...existingReservations,
      preparedNewReservation,
    ];
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    // console.log("updated reservations: ", localStorage.getItem("reservations"));

    //Reservation submitted successfully alerts
    console.log("Reservation sumbitted for: ", userInfo);
    const sound = new Audio(notifSound);
    sound.play();
    toast.success("Reservation submitted successfully!");
    setUserInfo(initialState);
    setErrors({});
  }

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper as="form" onSubmit={handleSubmit}>
        <SectionWrapper>
          {/* CONTACT INFORMATION SECTION */}
          <ContactInfo
            userInfo={userInfo}
            handleChange={handleChange}
            errors={errors}
          />

          {/* RESERVATION DETAILS SECTION */}
          <ReservationDetails
            userInfo={userInfo}
            handleChange={handleChange}
            errors={errors}
          />
        </SectionWrapper>
        {/* SUBMIT BUTTON */}
        <SubmitButton>RESERVE APPOINTMENT</SubmitButton>
        <ToastContainer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default ReservationPage;
