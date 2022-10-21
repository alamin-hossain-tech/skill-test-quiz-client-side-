import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className=" hero-flex container">
      <div className="left-hero  my-auto text-start">
        <h5 className="text-uppercase">Give Test Today</h5>
        <h1 className="text-uppercase mt-2 ">
          Boost Your Confidence Through Skill Test
        </h1>
        <p className="mb-4">
          Like quizzes and tests, an exam is a tool to measure your students
          mastery of the course content, but it has weightier consequences. An
          exam is more formal in nature and often can determine whether a
          student passes or fails a class or course
        </p>
        <div>
          <button className="btn btn-primary">Sign up</button>
          <button className="btn btn-outline-primary ms-3">Show More</button>
        </div>
      </div>
      <div className="right-hero ">
        <img
          className="img-fluid"
          src="https://i.ibb.co/5Yqcvdd/Asset-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
