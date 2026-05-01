import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import notifSound from "../assets/sounds/notif-sound.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactInfo from "../components/UILayout/ContactInfo";
import ReservationDetails from "../components/UILayout/ReservationDetails";
import validateUserInfo from "../functions/validateNecessaryFields";
import { SubmitButton } from "../styles/Buttons";
import { AppWrapper, SectionWrapper } from "../styles/Wrappers";

const ReservationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reservationDate, setReservationDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [amountOfGuests, setAmountOfGuests] = useState(null);
  const [errors, setErrors] = useState({}); //Handle errors

  // Handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      name,
      email,
      phoneNumber,
      reservationDate,
      selectedSlot,
      amountOfGuests,
    };

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

    setName("");
    setEmail("");
    setPhoneNumber("");
    setReservationDate(new Date());
    setSelectedSlot(null);
    setAmountOfGuests(null);
    setErrors({});
  };

  return (
    <AppWrapper as="form" onSubmit={handleSubmit}>
      <SectionWrapper>
        {/* CONTACT INFORMATION SECTION */}
        <ContactInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          errors={errors}
        />

        {/* RESERVATION DETAILS SECTION */}
        <ReservationDetails
          setReservationDate={setReservationDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          amountOfGuests={amountOfGuests}
          setAmountOfGuests={setAmountOfGuests}
          errors={errors}
        />
      </SectionWrapper>
      {/* SUBMIT BUTTON */}
      <SubmitButton>RESERVE APPOINTMENT</SubmitButton>
      <ToastContainer />
    </AppWrapper>
  );
};

export default ReservationPage;
