import { HeaderTitle } from "../../styles/Texts";
import { HeaderWrapper, InnerWrapper } from "../../styles/Wrappers";
import { NavWrapper, NavItem } from "../../styles/Navigations";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) {
      console.log("Sentinel not found");
      return;
    }
    console.log("Sentinel found: ", sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

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
