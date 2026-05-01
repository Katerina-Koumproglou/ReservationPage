import { RequiredError } from "../../styles/Errors";
import { InputContactInfo } from "../../styles/Inputs";
import {
  InputContactInfoWrapper,
  SectionWrapper,
  ColumnWrapper,
} from "../../styles/Wrappers";
import { SectionTitle } from "../../styles/Texts";

const ContactInfo = ({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  errors,
}) => {
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <RequiredError>{errors.name ? errors.name : ""}</RequiredError>
        </ColumnWrapper>
        {/* Email */}
        <ColumnWrapper>
          <InputContactInfo
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <RequiredError>{errors.email ? errors.email : ""}</RequiredError>
        </ColumnWrapper>
        {/* Phone number */}
        <ColumnWrapper>
          <InputContactInfo
            type="tel"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
