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
