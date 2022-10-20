import React from "react";
import { Link } from "react-router-dom";

const QuizGrid = ({ quiz, selectQuiz }) => {
  // console.log(quiz);
  const { logo, name, total, id } = quiz;
  return (
    <div className="col">
      <div className="card ">
        <img src={logo} alt="" className="card-img-top bg-dark rounded" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <p className="card-text text-start w-50 mb-0">
              <strong>Total Quiz: </strong>
              {total}
            </p>
            <Link to={`/quiz/${id}`}>
              <button className="btn btn-primary text-end">Try Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGrid;
