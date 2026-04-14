import ReservationPage from "./pages/ReservationPage";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppWrapper } from "./styles/Wrappers";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <ReservationPage />
      </AppWrapper>
    </>
  );
}

export default App;
