import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizGrid from "../QuizGrid/QuizGrid";

const Home = () => {
  const data = useLoaderData();
  const quizTopics = data.data;
  // const selectQuiz = (id) => {
  //   console.log(id);
  // };

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 container mx-auto py-5">
      {quizTopics.map((quiz) => (
        <QuizGrid quiz={quiz} key={quiz.id}></QuizGrid>
      ))}
    </div>
  );
};

export default Home;
