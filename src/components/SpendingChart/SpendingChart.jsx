import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SpendingChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    // Create gradient background
    const gradient = myChartRef.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "#ACBCF7"); // Light blue
    gradient.addColorStop(1, "#fff"); // Dark blue

    // If a chart instance already exists, destroy it before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        // Bring in data
        labels: data.map((d) => d.date),
        datasets: [
          {
            label: "Total Spending",
            data: data.map((d) => d.spending),
            fill: true,
            backgroundColor: gradient, // Apply the gradient here
            borderColor: "#3D56F5",
            borderDash: [2, 2], // Dotted line configuration
            // pointBackgroundColor:
            //   "linear-gradient(77.99deg, #203CF3 44.09%, #3D56F5 83.17%)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false, // Hide X-axis grid lines
              drawBorder: false, // Hide X-axis border
            },
          },
          y: {
            grid: {
              display: false, // Hide Y-axis grid lines
              drawBorder: false, // Hide Y-axis border
            },
            beginAtZero: true,
          },
        },
        elements: {
          line: {
            tension: 0.4, // This will make the line smooth
          },
        },
        plugins: {
          legend: {
            display: false, // Hides the legend
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      chartInstance.current.destroy();
    };
  }, [data]);

  return (
    <div
      style={{
        background: "#F9F9FB",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          fontSize: "16pxpx",
          fontWeight: "600",
          color: "#3B4061",
          marginBottom: "1rem",
          lineHeight: "19.2px",
        }}
      >
        Total Spending
      </p>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default SpendingChart;
