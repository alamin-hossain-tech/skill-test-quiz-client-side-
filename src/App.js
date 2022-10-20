import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Layouts/Main";
import Home from "./Components/Home/Home";
import SingleQuiz from "./Components/SingleQuiz/SingleQuiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/quiz/:id",
          element: <SingleQuiz></SingleQuiz>,
          loader: (params) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.params.id}`
            );
          },
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
