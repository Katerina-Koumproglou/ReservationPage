import styled from "styled-components";

export const SubmitButton = styled.button`
  margin-top: 3rem;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    border-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const SimpleButton = styled.button`
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.secondaryText : theme.colors.primary};
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  cursor: pointer;

  &:first-child {
    border-right: none;
  }
`;
