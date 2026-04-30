import { useState } from "react";
import { DropdownContainer } from "../../styles/Wrappers";
import { DropdownArrow } from "../../styles/Icons";
import { DropdownButton, DropdownList } from "../../styles/Buttons";
import { DropdownItem } from "../../styles/Inputs";
import { RequiredError } from "../../styles/Errors";

const GuestDropdown = ({ userInfo, handleChange, errors }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  //Dropdown menu logic
  const guestsOptions = [
    "1 Person",
    "2 People",
    "3 People",
    "4 People",
    "5 People",
    "6+ People",
  ];

  const handleDropdownSelect = (guestsOptions) => {
    handleChange({ target: { id: "amountOfGuests", value: guestsOptions } });
    setDropdownIsOpen(false);
  };

  return (
    <DropdownContainer
      tabIndex={0} //Default focus
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setDropdownIsOpen(false);
        }
      }}
    >
      <DropdownButton
        type="button"
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
      >
        {userInfo.amountOfGuests || "Number of People"}
        <DropdownArrow $isOpen={dropdownIsOpen}>˄</DropdownArrow>
      </DropdownButton>
      {dropdownIsOpen && (
        <DropdownList>
          {guestsOptions.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleDropdownSelect(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
      <RequiredError
        style={{
          position: "absolute",
          width: "100%",
          top: "2rem",
          minHeight: 0,
        }}
      >
        {errors.amountOfGuests ? errors.amountOfGuests : ""}
      </RequiredError>
    </DropdownContainer>
  );
};

export default GuestDropdown;
