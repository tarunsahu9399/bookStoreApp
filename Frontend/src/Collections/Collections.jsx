import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Collection from "../components/Collection";

function Collections() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Collection />
      </div>
      <Footer />
    </>
  );
}

export default Collections;
