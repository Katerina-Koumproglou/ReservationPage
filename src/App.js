import ReservationPage from "./pages/ReservationPage";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppWrapper } from "./styles/Wrappers";
import Header from "./components/UILayout/Header";
import Footer from "./components/UILayout/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./functions/ScrollToTop";
import { useState } from "react";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    const pxToRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    setIsScrolled(window.scrollY > 6.25 * pxToRem);
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ScrollToTop setIsScrolled={setIsScrolled} />
          <Header isScrolled={isScrolled} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<ReservationPage />} />
            {/* <Route path="/about" /> */}
          </Routes>

          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
