import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
const ContactSucceed = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">### Thanks For Submitting Your Feedback ####</h1>
        <h2 className="text-center">QA Team feels happy to hear more about you</h2>
        <Link to="/">
            <h3 className="text-center">Please go to Home page</h3>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ContactSucceed;
