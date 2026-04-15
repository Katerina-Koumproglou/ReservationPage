import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  text-align: right;
  display: flex;
  gap: 4rem;
`;

export const NavItem = styled(Link)`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-decoration: none;
  font-size: 1.1rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: translateY(-0.3rem);
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    height: 0.15rem;
    width: 100%;
    border-radius: 0.1rem;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.25s ease-in-out;
    background: ${({ theme }) => theme.colors.primaryText};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
