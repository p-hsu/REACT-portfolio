import React from "react";
import HomeContainer from "../components/HomeContainer";
import HomeWrapper from "../components/HomeWrapper";
import Overlay from "../components/Overlay";


function Home() {
  return (
    <HomeWrapper>
        <Overlay />
        <HomeContainer />
    </HomeWrapper>
  );
}

export default Home;