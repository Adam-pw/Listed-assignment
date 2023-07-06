import React, { useEffect, useState } from "react";
import {
  LineChart as LineGraph,
  Line,
  XAxis,
  YAxis,
  Tooltip as Tooltip2,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/lineRandom");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineGraph
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip2 />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="Guest"
            stroke="#E9A0A0"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
        </LineGraph>
      </ResponsiveContainer>
    </>
  );
};

export default LineChart;
