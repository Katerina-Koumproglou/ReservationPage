const setReservation = (day, time, setReservationDate, setSelectedSlot) => {
  const reservDate = new Date(day);

  const [hour, cycle] = time.split(" ");
  let hourInt = parseInt(hour);
  if (cycle === "PM" && hourInt !== 12) hourInt += 12;

  //Format reservDate
  reservDate.setHours(hourInt);
  reservDate.setMinutes(0);
  reservDate.setSeconds(0);

  setReservationDate(reservDate);
  setSelectedSlot(`${day.toDateString()}-${time}`);
};

export default setReservation;
