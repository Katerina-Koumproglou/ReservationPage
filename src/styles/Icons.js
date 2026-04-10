import styled from "styled-components";

export const DropdownArrow = styled.span`
  font-size: 1.3rem;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.4s ease;
  align-items: left;
`;
