//Returns an array of dates Sunday-Saturday, but needs shortening
export const getWeekDays = (date) => {
  const start = new Date(date);
  //Move the day back to Sunday to get the first day of the week
  start.setDate(start.getDate() - start.getDay()); //4

  return Array.from({ length: 7 }).map((_, i) => {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    return day;
  });
};
