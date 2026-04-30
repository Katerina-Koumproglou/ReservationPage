import { useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ setIsScrolled }) => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  if (previousPathname.current !== pathname) {
    window.scrollTo(0, 0);
    setIsScrolled(false);
    previousPathname.current = pathname;
  }
  return null;
};

export default ScrollToTop;
