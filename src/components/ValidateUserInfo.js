export default function validateUserInfo(userInfo) {
  let tempErrors = {};
  if (!userInfo.firstName) tempErrors.firstName = "Required field";
  if (!userInfo.surname) tempErrors.surname = "Required field";
  if (!userInfo.email) tempErrors.email = "Required field";
  if (!userInfo.phoneNumber) tempErrors.phoneNumber = "Required field";

  return tempErrors;
}
