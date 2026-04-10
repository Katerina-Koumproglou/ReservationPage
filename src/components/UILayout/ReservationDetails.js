import { useEffect, useState, useRef } from "react";
import {
  NavWeekButtonWrapper,
  SectionWrapper,
  InputContactInfoWrapper,
  DayHeader,
  WeekHeader,
  DayColumn,
  DropdownContainer,
} from "../../styles/Wrappers";
import { SectionTitle } from "../../styles/Titles";
import {
  DropdownButton,
  DropdownList,
  SimpleButton,
} from "../../styles/Buttons";
import {
  getDayName,
  getMonthNumber,
  getMonthName,
} from "../../functions/formatDates";
import { getWeekDays } from "../../functions/getWeekDays";
import { changeWeek } from "../../functions/changeWeek";
import { setReservation } from "../../functions/setReservation";
import { RequiredError } from "../../styles/Errors";
import { DropdownArrow } from "../../styles/Icons";
import { DropdownItem } from "../../styles/Inputs";

const ReservationDetails = ({ userInfo, handleChange, errors }) => {
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

  const isTimeSlotBooked = (day, time) => {
    const slotKey = `${day.toDateString()}-${time}`;
    for (let i = 0; i < savedReservations.length; i++) {
      const reserv = savedReservations[i];
      if (reserv.selectedSlot === slotKey) {
        return true;
      }
    }
    return false;
  };

  const isDayFullyBooked = (day) => {
    const allSlots = [
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
    ];

    for (let i = 0; i < allSlots.length; i++) {
      const time = allSlots[i];
      if (!isTimeSlotBooked(day, time)) {
        return false;
      }
    }
    return true;
  };

  //Dropdown menu logic
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState("Number of People");

  const guestsOptions = [
    "1 Person",
    "2 People",
    "3 People",
    "4 People",
    "5 People",
    "6+ People",
  ];

  const handleDropdownSelect = (guestsOptions) => {
    setSelectedPeople(guestsOptions);
    handleChange({ target: { id: "amountOfGuests", value: guestsOptions } });
    setDropdownIsOpen(false);
  };

  const dropdownRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
        <DropdownContainer ref={dropdownRef}>
          <DropdownButton
            type="button"
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          >
            {selectedPeople}
            <DropdownArrow $isOpen={dropdownIsOpen}>˄</DropdownArrow>
          </DropdownButton>
          {dropdownIsOpen && (
            <DropdownList>
              {guestsOptions.map((option, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleDropdownSelect(option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
          <RequiredError
            style={{
              position: "absolute",
              width: "100%",
              top: "2rem",
              minHeight: 0,
            }}
          >
            {errors.amountOfGuests ? errors.amountOfGuests : ""}
          </RequiredError>
        </DropdownContainer>
      </InputContactInfoWrapper>

      <WeekHeader style={{ marginTop: "1rem" }}>
        {weekDays.map((day, index) => (
          // Wraps the whole column of the day
          <DayColumn>
            {/* Example: SUN 17/3 */}
            <DayHeader key={index} $isBooked={isDayFullyBooked(day)}>
              <p>
                <strong>{getDayName(day)}</strong>
              </p>
              <p>
                {day.getDate()}/{getMonthNumber(day)}
              </p>
            </DayHeader>
            {timeSlots.map((time, index) => (
              <SimpleButton
                key={index}
                type="button"
                disabled={isTimeSlotBooked(day, time)}
                $isActive={
                  userInfo.selectedSlot === `${day.toDateString()}-${time}`
                }
                onClick={() => setReservation(day, time, handleChange)}
              >
                {time}
              </SimpleButton>
            ))}
          </DayColumn>
        ))}
      </WeekHeader>
      <RequiredError>
        {errors.selectedSlot ? errors.selectedSlot : ""}
      </RequiredError>
    </SectionWrapper>
  );
};

export default ReservationDetails;
