import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Question.css";

const Question = ({ questions, count }) => {
  const { question, correctAnswer, id, options } = questions;
  const checkAns = (option) => {
    if (correctAnswer == option) {
      toast.success("Correct Answer 🎉");
      document
        .getElementById(option)
        .classList.add("bg-success", "text-light", "fw-bold");
    } else {
      toast.error("Wrong Answer😞");
      document.getElementById(option).classList.add("bg-danger", "text-light");
    }
  };
  return (
    <div className="border rounded my-1 text-start p-3">
      <div className="question">
        {count}
        <div dangerouslySetInnerHTML={{ __html: question }}></div>
      </div>
      <div className="options">
        {options.map((option) => (
          <div
            className={`d-flex align-items-center p-3 border rounded `}
            id={option}
            key={option}
          >
            <input
              onClick={() => checkAns(option)}
              type="radio"
              name={id}
              id={option}
            ></input>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

            <label className="ms-2" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
