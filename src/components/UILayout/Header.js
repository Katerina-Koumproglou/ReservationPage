import { HeaderTitle } from "../../styles/Texts";
import { HeaderWrapper, InnerWrapper } from "../../styles/Wrappers";
import { NavWrapper, NavItem } from "../../styles/Navigations";

const Header = ({ isScrolled }) => {
  const handleAboutClick = () => {
    window.alert("About page");
  };

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <InnerWrapper $isScrolled={isScrolled}>
        <HeaderTitle>Cafeteria</HeaderTitle>
        <NavWrapper>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/reservations">Reservations</NavItem>
          <NavItem onClick={handleAboutClick}>About</NavItem>
        </NavWrapper>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
