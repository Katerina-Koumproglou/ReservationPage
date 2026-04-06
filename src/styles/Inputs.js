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
