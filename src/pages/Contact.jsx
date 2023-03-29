import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 h-screen">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
