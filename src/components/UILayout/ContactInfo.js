import { RequiredError } from "../../styles/Errors";
import { InputContactInfo } from "../../styles/Inputs";
import {
  InputContactInfoWrapper,
  SectionWrapper,
  ColumnWrapper,
} from "../../styles/Wrappers";
import { SectionTitle } from "../../styles/Titles";

const ContactInfo = ({ userInfo, handleChange, errors }) => {
  return (
    <SectionWrapper>
      <SectionTitle>CONTACT INFORMATION</SectionTitle>
      <InputContactInfoWrapper>
        {/* Your Name */}
        <ColumnWrapper>
          <InputContactInfo
            type="text"
            id="name"
            placeholder="Your Name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <RequiredError>{errors.name ? errors.name : ""}</RequiredError>
        </ColumnWrapper>
        {/* Email */}
        <ColumnWrapper>
          <InputContactInfo
            type="text"
            id="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <RequiredError>{errors.email ? errors.email : ""}</RequiredError>
        </ColumnWrapper>
        {/* Phone number */}
        <ColumnWrapper>
          <InputContactInfo
            type="tel"
            id="phoneNumber"
            placeholder="Phone Number"
            value={userInfo.phoneNumber}
            onChange={handleChange}
          />
          <RequiredError>
            {errors.phoneNumber ? errors.phoneNumber : ""}
          </RequiredError>
        </ColumnWrapper>
      </InputContactInfoWrapper>
    </SectionWrapper>
  );
};

export default ContactInfo;
