//Returns an array of dates Sunday-Saturday, but needs shortening
const getWeekDays = (date) => {
  const start = new Date(date);
  //Move the day back to Sunday to get the first day of the week
  start.setDate(start.getDate() - start.getDay());

  return Array.from({ length: 7 }).map((_, i) => {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    return day;
  });
};

export default getWeekDays;
