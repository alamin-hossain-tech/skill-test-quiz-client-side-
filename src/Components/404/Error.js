import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../../error-bg.png";

const Error = () => {
  return (
    <div
      className="py-5"
      style={{
        backgroundImage: `url(${errorimg})`,
        height: "80vh",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="bg-danger d-inline-block  px-3 text-light">Error 404</h1>
      </div>
      <div>
        <h4 className="bg-primary d-inline-block  px-3 text-light">
          Page Not Found
        </h4>
      </div>
      <div className="mt-3">
        <Link className="btn btn-outline-primary" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
