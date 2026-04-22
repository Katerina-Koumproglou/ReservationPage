import styled from "styled-components";
import cafeteriaBg from "../assets/images/cafeteria2.jpg";
import { OverlayText } from "./Titles";

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
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.1);
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  text-align: center;
`;

export const HomeWrapper = styled.div`
  background-image: url(${cafeteriaBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.5rem;
`;

export const ProductDisplayWrapper = styled.div`
  display: grid;
  padding: 0.5rem;
  gap: 0.5rem;
  max-width: 85rem;
  width: 100%;
  margin: 4rem auto;
  grid-template-columns: repeat(4, 1fr);
`;

export const ProductGridItem = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-position: center;
  min-height: 25rem;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;
  padding: 1.2rem;

  &:nth-child(1) {
    grid-column: 1/3;
  }

  &:nth-child(2) {
    grid-column: 3/5;
  }

  &:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/4;
  }

  &:nth-child(5) {
    grid-column: 3/5;
    grid-row: 2/4;
  }

  &:nth-child(7) {
    grid-column: 1/3;
  }

  &:before {
    content: "";
    opacity: 0;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      hsl(0, 0%, 0%, 0) 5%,
      hsl(0, 0%, 0%, 0.6)
    );
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
  }

  &:hover {
    transform: scale(0.98);
  }

  &:hover::before {
    opacity: 0.9;
  }

  &:hover ${OverlayText} {
    transform: translateY(-0.8rem);
  }
`;
