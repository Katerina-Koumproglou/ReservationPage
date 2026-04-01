import DatePicker from "react-datepicker";

export default function ReservationDetails({
  userInfo,
  handleChange,
  handleDateChange,
}) {
  return (
    <div className="right-column">
      <div className="people-field">
        <label>Number of people:</label>
        <select
          id="amountOfPeople"
          value={userInfo.amountOfPeople}
          onChange={handleChange}
        >
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
          <option value="6">6+ People</option>
        </select>
      </div>
      {/* select date/time */}
      <h3>Select date and time:</h3>
      <div className="date-time-wrapper">
        <DatePicker
          selected={userInfo.reservationDate}
          placeholderText="Select date..."
          dateFormat="dd/MM/yyyy"
          onChange={handleDateChange}
          minDate={new Date()}
          inline
        />

        <div className="time">
          <label>Time:</label>
          <select
            id="reservationTime"
            value={userInfo.reservationTime}
            onChange={handleChange}
          >
            <option value="12:00">12:00</option>
            <option value="12:15">12:15</option>
            <option value="12:30">12:30</option>
            <option value="12:45">12:45</option>
            <option value="13:00">13:00</option>
            <option value="13:15">13:15</option>
            <option value="13:30">13:30</option>
            <option value="13:45">13:45</option>
            <option value="14:00">14:00</option>
          </select>
        </div>
      </div>
    </div>
  );
}
