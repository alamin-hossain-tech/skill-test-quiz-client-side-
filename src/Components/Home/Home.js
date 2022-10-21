import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import QuizGrid from "../QuizGrid/QuizGrid";

const Home = () => {
  const data = useLoaderData();
  const quizTopics = data.data;
  // const selectQuiz = (id) => {
  //   console.log(id);
  // };

  return (
    <div>
      <div className="my-5">
        <Hero></Hero>
      </div>
      <div>
        <h2 className="mt-5 pt-5"> Quiz Topics</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 container mx-auto py-5">
          {quizTopics.map((quiz) => (
            <QuizGrid quiz={quiz} key={quiz.id}></QuizGrid>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
