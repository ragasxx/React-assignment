import React, { useEffect, useState } from "react";
import "../App.css";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart, defaults } from "chart.js/auto";
import ShimmerChart from "./ShimmerChart";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartContainer = () => {
  const [populationData, setPopulationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  Chart.register(CategoryScale);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        const data = await response.json();
        setPopulationData(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const labels = populationData.map((item) => item.Nation);
  const populationValues = populationData.map((item) => item.Population);

  return (
    <div className="chart_container">
      <h1 className="chart_heading">Population Graph</h1>
      {isLoading ? (
        <ShimmerChart />
      ) : (
        <div className="chart">
          <Bar
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Nation",
                  data: populationValues,
                  backgroundColor: "rgba(27, 243, 149, 0.8)",
                  borderRadius: 3,
                  borderWidth: 1,
                  hoverBackgroundColor: "green",
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Population",
                    font: {
                      size: 13,
                      weight: "bold",
                    },
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Nation",
                    font: {
                      size: 13,
                      weight: "bold",
                    },
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ChartContainer;
