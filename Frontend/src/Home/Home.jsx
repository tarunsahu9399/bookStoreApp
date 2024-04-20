import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NewArrival from "../components/NewArrival";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      
      <NewArrival />
      <Footer />
    </>
  );
}

export default Home;
