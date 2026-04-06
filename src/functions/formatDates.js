export const getDayName = (date) => {
  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
};

export const getMonthNumber = (date) => {
  return date.getMonth() + 1;
};

export const getMonthName = (date) => {
  return date.toLocaleDateString("en-US", { month: "long" });
};
