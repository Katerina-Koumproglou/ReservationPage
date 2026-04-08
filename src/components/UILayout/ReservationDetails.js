import { useState } from "react";
import {
  NavWeekButtonWrapper,
  SectionWrapper,
  InputContactInfoWrapper,
  DayHeader,
  WeekHeader,
  DayColumn,
} from "../../styles/Wrappers";
import { SectionTitle } from "../../styles/Titles";
import { SimpleButton } from "../../styles/Buttons";
import {
  getDayName,
  getMonthNumber,
  getMonthName,
} from "../../functions/formatDates";
import { getWeekDays } from "../../functions/getWeekDays";
import { changeWeek } from "../../functions/changeWeek";
import { setReservation } from "../../functions/setReservation";
import { RequiredError } from "../../styles/Errors";

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
      </InputContactInfoWrapper>

      <WeekHeader>
        {weekDays.map((day, index) => (
          // Wraps the whole column of the day
          <DayColumn>
            {/* Example: SUN 17/3 */}
            <DayHeader key={index}>
              <p>
                <strong>{getDayName(day)}</strong>
              </p>
              <p>
                {day.getDate()}/{getMonthNumber(day)}
              </p>
            </DayHeader>
            {timeSlots.map((time, i) => (
              <SimpleButton
                key={i}
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
