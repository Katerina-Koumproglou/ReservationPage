import styled from "styled-components";

export const InputContactInfo = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  border-radius: 0.15rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  outline: none;
  padding: 0.8rem 0.7rem;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DropdownItem = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondaryText};
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
`;
