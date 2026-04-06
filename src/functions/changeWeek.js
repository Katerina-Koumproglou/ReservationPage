//Change the week depending on the arrows
export const changeWeek = (direction, currentWeek, setCurrentWeek) => {
  const newDate = new Date(currentWeek);
  newDate.setDate(newDate.getDate() + direction * 7);
  setCurrentWeek(newDate);
};
