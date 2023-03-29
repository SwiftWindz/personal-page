import React from "react";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <>
      <div className="grid grid-cols-1 h-screen">
        <Projects />
        <Footer />
      </div>
    </>
  );
}
