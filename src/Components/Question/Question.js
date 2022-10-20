import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Question.css";

const Question = ({ questions, count }) => {
  const { question, correctAnswer, id, options } = questions;
  const checkAns = (option) => {
    if (correctAnswer === option) {
      toast.success("Correct Answer 🎉");
      document
        .getElementById(option)
        .classList.add("bg-success", "text-light", "fw-bold");
    } else {
      toast.error("Wrong Answer😞");
      document
        .getElementById(option)
        .classList.add("bg-danger", "text-light", "fw-bold");
    }
  };

  return (
    <div className="border border-info rounded my-4 text-start p-5">
      <div className="d-flex justify-content-between ">
        <div className="question d-flex fw-bold">
          {`Question No: ${count}. `}
          <div
            className="ms-3 "
            dangerouslySetInnerHTML={{ __html: question }}
          ></div>
        </div>
        <div>
          <button
            className="show-answer"
            onClick={() => toast.info(`Answer is : ${correctAnswer}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          </button>
        </div>
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

            <label
              className="ms-2"
              htmlFor={option}
              onClick={() => checkAns(option)}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
