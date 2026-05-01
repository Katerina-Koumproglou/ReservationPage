import { SimpleButton } from "../../styles/Buttons";
import { WeekHeader, DayColumn, DayHeader } from "../../styles/Wrappers";
import { getDayName, getMonthNumber } from "../../functions/formatDates";
import setReservation from "../../functions/setReservation";
import {
  isDayFullyBooked,
  isTimeSlotBooked,
} from "../../functions/checkReservationAvailability";

const WeeklyCalendar = ({
  weekDays,
  savedReservations,
  timeSlots,
  setReservationDate,
  selectedSlot,
  setSelectedSlot,
}) => {
  return (
    <WeekHeader style={{ marginTop: "1rem" }}>
      {weekDays.map((day, index) => (
        // Wraps the whole column of the day
        <DayColumn>
          {/* Example: SUN 17/3 */}
          <DayHeader
            key={index}
            $isBooked={isDayFullyBooked(day, savedReservations)}
          >
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
              disabled={isTimeSlotBooked(day, time, savedReservations)}
              $isActive={selectedSlot === `${day.toDateString()}-${time}`}
              onClick={() =>
                setReservation(day, time, setReservationDate, setSelectedSlot)
              }
            >
              {time}
            </SimpleButton>
          ))}
        </DayColumn>
      ))}
    </WeekHeader>
  );
};

export default WeeklyCalendar;
