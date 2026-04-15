import { HeaderTitle } from "../../styles/Titles";
import { HeaderWrapper, InnerWrapper } from "../../styles/Wrappers";
import { NavWrapper, NavItem } from "../../styles/Navigations";

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <HeaderTitle>Cafeteria</HeaderTitle>
        <NavWrapper>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/reservations">Reservations</NavItem>
          <NavItem>About</NavItem>
        </NavWrapper>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
