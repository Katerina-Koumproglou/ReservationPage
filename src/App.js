import ReservationPage from "./pages/ReservationPage";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppWrapper } from "./styles/Wrappers";
import Header from "./components/UILayout/Header";
import Footer from "./components/UILayout/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<ReservationPage />} />
          </Routes>

          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
