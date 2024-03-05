import React, { useState } from "react";
import ChatInput from "../../components/ChatInput/ChatInput.jsx";
import "./Dashboard.css";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx";
import ChatBox from "../../components/ChatBox/ChatBox.jsx";
import { Col, Row } from "antd";
import Prompts from "../../components/Prompts/Prompts.jsx";
import SpendingChart from "../../components/SpendingChart/SpendingChart.jsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Example data
const spendingData = [
  { date: "2024-02-01", spending: 20000 },
  { date: "2024-02-02", spending: 50000 },
  { date: "2024-02-03", spending: 10000 },
  { date: "2024-02-04", spending: 90000 },
  { date: "2024-02-05", spending: 30000 },
  { date: "2024-02-06", spending: 80000 },

  // ... more data
];
const spendings = [
  { name: "Foodpanda", date: "2024-02-21", time: "2:32 AM", amount: 2504 },
  { name: "Foodpanda", date: "2024-02-21", time: "2:32 AM", amount: 2504 },
  { name: "Foodpanda", date: "2024-02-21", time: "2:32 AM", amount: 2504 },
  { name: "Foodpanda", date: "2024-02-21", time: "2:32 AM", amount: 2504 },
  { name: "Foodpanda", date: "2024-02-21", time: "2:32 AM", amount: 2504 },
  { name: "Foodpanda", date: "2024-02-21", time: "2:32 AM", amount: 2504 },

  // Add more spending items as needed
];

const SpendingItems = ({ spendingItems }) => (
  <div className="ms-box box-spending">
    <h3 className="ms-box_heading ms-mb-15">Recent spending</h3>
    {spendingItems.map((item, index) => (
      <div key={index} className="ms-box-item">
        <div className="ms-item-info">
          <p className="ms-item-name">{item.name}</p>
          <p className="ms-item-date">
            {item.date}, {item.time}
          </p>
        </div>
        <p className="ms-item-spent">Rs. {item.amount}</p>
      </div>
    ))}
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <h1
        style={{
          marginTop: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "36px",
            fontWeight: "600",
            background: "linear-gradient(92.24deg, #203CF3 0%, #3D56F5 36.69%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi Taha!
        </span>
        <br />
        <span
          style={{
            fontSize: "28px",
            fontWeight: "400",
            background: "#3B4061",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to your financial dashboard.
        </span>
      </h1>
      <Row
        gutter={[16, 16]}
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Col
          span={10}
          style={{
            // position: "fixed",
            // bottom: "0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          // alignItems="center"
        >
          <ChatBox />
          <ChatInput />
        </Col>
        <Col span={8}>
          <Col
            // span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <SpendingChart data={spendingData} />
            <Prompts />
          </Col>
        </Col>
        <Col span={6}>
          <div
            class="ms-box box-small"
            style={{
              backgroundColor: "#3D56F5",
              textAlign: "center",
            }}
          >
            <h3
              class="ms-box_heading"
              style={{
                color: "white",
                display: "flex",
                gap: "100px",
              }}
            >
              <LeftOutlined />
              Weekly
              <RightOutlined />
            </h3>
          </div>
          <div class="ms-box box-small">
            <h3 class="ms-box_heading">Quick Prompts</h3>
            <p class="ms-box_subheading">most commonly asked questions</p>
          </div>
          <div class="ms-box box-small">
            <h3 class="ms-box_heading">Top Categories</h3>
            <p class="ms-box_subheading">See your top spending categories</p>
          </div>
          <SpendingItems spendingItems={spendings} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
