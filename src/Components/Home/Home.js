import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const quizTopics = data.data;
  console.log(quizTopics);
  return (
    <div>
      <h2>This is Home: {data.data.length}</h2>
    </div>
  );
};

export default Home;
