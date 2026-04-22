import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  margin-top: 2rem;
  min-width: 20rem;
`;

export const HeaderTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: left;
  font-weight: 400;
  font-size: 1.3rem;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const HomeTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const OverlayText = styled.span`
  display: inline-block;
  z-index: 2;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  position: relative;
  transition: transform 0.2s ease-in-out;
`;
