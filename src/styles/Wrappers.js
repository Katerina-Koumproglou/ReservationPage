import styled from "styled-components";

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
  color: ${({ theme }) => theme.colors.primary};
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
