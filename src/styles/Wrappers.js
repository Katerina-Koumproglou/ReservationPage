import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  background-color: white;
  min-height: 100vh;
  /* min-width: 150vw; */
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavWeekButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputContactInfoWrapper = styled(NavWeekButtonWrapper)`
  gap: 2rem;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 11rem;
`;

export const DayHeader = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ $isBooked, theme }) =>
    $isBooked ? theme.colors.disabled : theme.colors.primary};
  font-size: 1rem;

  p {
    margin: 0;
  }
`;

export const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TimeSlotContainer = styled.div``;

export const WeekHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
