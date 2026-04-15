import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  text-align: right;
  display: flex;
  gap: 4rem;
`;

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.secondaryText};
  text-decoration: none;
  font-size: 1.1rem;
`;
