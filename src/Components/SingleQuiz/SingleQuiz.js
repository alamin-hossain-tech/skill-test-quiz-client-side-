import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const SingleQuiz = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, questions, total, logo } = data.data;
  let count = 0;
  return (
    <div className="my-5">
      <img className="img-fluid w-25 mb-5 bg-dark" src={logo} alt="" />
      <h2>Quiz Topics: {name}</h2>
      <p>Total Qustion: {total}</p>
      <div className="container">
        <div className="row px-4">
          {questions.map((question) => (
            <Question
              key={question.id}
              questions={question}
              count={(count += 1)}
            ></Question>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
<h2>This is Single Quiz</h2>;
