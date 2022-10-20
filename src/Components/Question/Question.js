import React from "react";

const Question = ({ questions }) => {
  const { question, correctAnswer, id, options } = questions;

  console.log(question);
  return (
    <div className="border rounded my-1 text-start p-3">
      <div className="question">
        <div dangerouslySetInnerHTML={{ __html: question }}></div>
      </div>
      <div className="options">
        {options.map((option) => (
          <div className="d-flex align-items-center mt-2">
            <input type="radio" name={id} id={option}></input>
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
