export const isTimeSlotBooked = (day, time, savedReservations) => {
  const slotKey = `${day.toDateString()}-${time}`;
  for (let i = 0; i < savedReservations.length; i++) {
    const reserv = savedReservations[i];
    if (reserv.selectedSlot === slotKey) {
      return true;
    }
  }
  return false;
};

export const isDayFullyBooked = (day, savedReservations) => {
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
    if (!isTimeSlotBooked(day, time, savedReservations)) {
      return false;
    }
  }
  return true;
};
