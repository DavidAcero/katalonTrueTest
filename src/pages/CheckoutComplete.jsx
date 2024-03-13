import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
const CompleteCheckout = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">----- Thanks For Checking Out -----</h1>
        <h2 className="text-center">QA Team feels happy</h2>
        <Link to="/product">
            <h3 className="text-center">Back to Products Page</h3>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default CompleteCheckout;
