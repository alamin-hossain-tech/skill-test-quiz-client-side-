import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div className="my-5 container-fluid">
      <h2 className="mb-5">Quiz Stats</h2>

      <BarChart className="mx-auto" width={600} height={400} data={data}>
        <Bar dataKey="total" fill="#0d6efd" />

        <XAxis dataKey="name" tick="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Stats;
