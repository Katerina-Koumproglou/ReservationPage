const LOCALES = "en-US";

export const getDayName = (date) => {
  return date.toLocaleDateString(LOCALES, { weekday: "short" }).toUpperCase();
};

export const getMonthNumber = (date) => {
  return date.getMonth() + 1;
};

export const getMonthName = (date) => {
  return date.toLocaleDateString(LOCALES, { month: "long" });
};
