import { useState } from "react";
import {
  NavWeekButtonWrapper,
  SectionWrapper,
  InputContactInfoWrapper,
} from "../../styles/Wrappers";
import { SectionTitle } from "../../styles/Texts";
import { SimpleButton } from "../../styles/Buttons";
import { getMonthName } from "../../functions/formatDates";
import getWeekDays from "../../functions/getWeekDays";
import changeWeek from "../../functions/changeWeek";
import { RequiredError } from "../../styles/Errors";
import WeeklyCalendar from "./WeeklyCalendar";
import GuestDropdown from "./GuestDropdown";

const ReservationDetails = ({
  setReservationDate,
  selectedSlot,
  setSelectedSlot,
  amountOfGuests,
  setAmountOfGuests,
  errors,
}) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [timeCycle, setTimeCycle] = useState("AM"); //AM or PM

  const weekDays = getWeekDays(currentWeek);
  const startDay = weekDays[0];
  const endDay = weekDays[6];

  const timeSlots =
    timeCycle === "AM"
      ? ["8 AM", "9 AM", "10 AM", "11 AM"]
      : ["12 PM", "1 PM", "2 PM", "3 PM"];

  const savedReservations =
    JSON.parse(localStorage.getItem("reservations")) || [];

  return (
    <SectionWrapper>
      <InputContactInfoWrapper>
        <SectionTitle>
          {getMonthName(startDay).toUpperCase()} {startDay.getDate()} -{" "}
          {getMonthName(endDay).toUpperCase()} {endDay.getDate()}
        </SectionTitle>
        {/* PREV/NEXT WEEK NAVIGATION */}
        <NavWeekButtonWrapper>
          <SimpleButton
            type="button"
            onClick={() => changeWeek(-1, currentWeek, setCurrentWeek)}
          >
            &#60;
          </SimpleButton>
          <SimpleButton
            type="button"
            onClick={() => changeWeek(1, currentWeek, setCurrentWeek)}
          >
            &#62;
          </SimpleButton>
        </NavWeekButtonWrapper>
        {/* AM/PM TIME NAVIGATION */}
        <NavWeekButtonWrapper>
          <SimpleButton
            type="button"
            $isActive={timeCycle === "AM"}
            onClick={() => setTimeCycle("AM")}
          >
            AM
          </SimpleButton>
          <SimpleButton
            type="button"
            $isActive={timeCycle === "PM"}
            onClick={() => setTimeCycle("PM")}
          >
            PM
          </SimpleButton>
        </NavWeekButtonWrapper>
        {/* AMOUNT OF PEOPLE DROPDOWN */}
        <GuestDropdown
          amountOfGuests={amountOfGuests}
          setAmountOfGuests={setAmountOfGuests}
          errors={errors}
        />
      </InputContactInfoWrapper>

      <WeeklyCalendar
        weekDays={weekDays}
        savedReservations={savedReservations}
        timeSlots={timeSlots}
        setReservationDate={setReservationDate}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
      <RequiredError>
        {errors.selectedSlot ? errors.selectedSlot : ""}
      </RequiredError>
    </SectionWrapper>
  );
};

export default ReservationDetails;
