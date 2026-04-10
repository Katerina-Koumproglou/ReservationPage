import styled from "styled-components";

export const SubmitButton = styled.button`
  margin-top: 1rem;
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

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.disabled};
    border: 0.1rem solid ${({ theme }) => theme.colors.disabled};
  }
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  display: flex;
  width: 11rem;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondaryText};
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-top: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 10;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
`;
