const setReservation = (day, time, handleChange) => {
  const reservDate = new Date(day);

  const [hour, cycle] = time.split(" ");
  let hourInt = parseInt(hour);
  if (cycle === "PM" && hourInt !== 12) hourInt += 12;

  //Format reservDate
  reservDate.setHours(hourInt);
  reservDate.setMinutes(0);
  reservDate.setSeconds(0);

  handleChange({ target: { id: "reservationDate", value: reservDate } });
  handleChange({
    target: { id: "selectedSlot", value: `${day.toDateString()}-${time}` },
  });
};

export default setReservation;
