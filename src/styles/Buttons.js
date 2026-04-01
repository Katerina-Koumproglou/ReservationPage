import styled from "styled-components";

export const SubmitButton = styled.button`
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: 0.1rem solid transparent;
  border-radius: 1.8rem;
  background-color: #5d2d05;
  color: white;

  &:hover {
    background-color: transparent;
    color: #5d2d05;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    border-color: #5d2d05;
    cursor: pointer;
  }
`;
