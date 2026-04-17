import { ReserveButton } from "../styles/Buttons";
import { HomeTitle } from "../styles/Titles";
import { HomeContent, HomeWrapper } from "../styles/Wrappers";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <HomeTitle>Welcome to the Cafeteria</HomeTitle>
        <p>Reserve your table quickly and easily!</p>
        <ReserveButton to="/reservations">Reserve a Table</ReserveButton>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
