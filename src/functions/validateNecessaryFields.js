const validateUserInfo = (userInfo) => {
  let tempErrors = {};
  if (!userInfo.name) tempErrors.name = "Required field";
  if (!userInfo.email) tempErrors.email = "Required field";
  if (!userInfo.phoneNumber) tempErrors.phoneNumber = "Required field";

  if (!userInfo.selectedSlot)
    tempErrors.selectedSlot = "Please select an available day and time.";
  return tempErrors;
};

export default validateUserInfo;
