import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const SingleQuiz = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, questions, total } = data.data;
  let count = 0;
  return (
    <div className="my-5">
      <h2>This is Single Quiz: {name}</h2>
      <p>Total Qustion: {total}</p>
      <div className="container">
        <div className="row ">
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
