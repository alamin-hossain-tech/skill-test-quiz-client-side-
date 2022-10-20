import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Stats.css";

const Stats = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div className="my-5 container-fluid">
      <h2 className="mb-5">Quiz Stats</h2>

      <ResponsiveContainer className="mx-auto" width="75%" height={400}>
        <BarChart data={data}>
          <Bar dataKey="total" fill="#0d6efd" />

          <XAxis dataKey="name" tick="name" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
