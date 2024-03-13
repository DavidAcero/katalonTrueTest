import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
const RegisterComplete = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center"> ====  Thanks For Registering  ====</h1>
        <h2 className="text-center">QA Team feels happy to have a new User </h2>
        <Link to="/about">
            <h3 className="text-center">Please Learn about us</h3>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default RegisterComplete;
