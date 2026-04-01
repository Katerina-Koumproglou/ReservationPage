import { RequiredError } from "../../styles/Errors";

export default function PersonalInfo({ userInfo, handleChange, errors }) {
  return (
    <div className="left-column">
      {/* First name */}
      <label>
        First Name:
        <input
          type="text"
          id="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <RequiredError>{errors.firstName}</RequiredError>}
      </label>
      {/* Surname */}
      <label>
        Surname(s):
        <input
          type="text"
          id="surname"
          value={userInfo.surname}
          onChange={handleChange}
        />
        {errors.surname && <RequiredError>{errors.surname}</RequiredError>}
      </label>
      {/* Email */}
      <label>
        Email:
        <input
          type="text"
          id="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        {errors.email && <RequiredError>{errors.email}</RequiredError>}
      </label>
      {/* Phone number */}
      <label>
        Phone Number:
        <input
          type="tel"
          id="phoneNumber"
          value={userInfo.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <RequiredError>{errors.phoneNumber}</RequiredError>
        )}
      </label>
    </div>
  );
}
