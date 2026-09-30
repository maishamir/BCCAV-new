import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss"
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <div className="home__first-screen">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default Home;
