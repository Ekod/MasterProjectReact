import React from "react";
import { HomePageContainer } from "../../app/layout/styles.styled";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Home page</h1>
      <h3>
        Go to <Link to="/activities">Activities</Link>
      </h3>
    </HomePageContainer>
  );
};
export default HomePage;
