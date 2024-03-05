import React, { useState } from "react";
import { Card, Button, Row, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./PreferencesForm.css"; // Make sure you have the corresponding CSS file
import { Link } from "react-router-dom";

const financialGoals = [
  { label: "Save for retirement", value: "saveForRetirement" },
  { label: "Invest in my future", value: "investInFuture" },
  { label: "Pay off debt", value: "payOffDebt" },
  { label: "Build an emergency fund", value: "buildEmergencyFund" },
  { label: "Travel the world", value: "travelTheWorld" },
];

const PreferencesForm = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <div className="preferences-layout">
      <Card className="preferences-card">
        <Row justify="space-between" align="middle">
          <Col className="back-button">
            <LeftOutlined className="back-icon" />
          </Col>
          <Col className="preferences-title">
            <ul>
              <li>Preferences</li>
            </ul>
          </Col>
          <Col>{/* <div className="step-counter">1/5</div> */}</Col>
        </Row>
        <div className="preferences-question">
          What are your top 3 financial goals?
        </div>
        <div className="goals-container">
          {financialGoals.map((goal) => (
            <div
              key={goal.value}
              className={`goal ${
                selectedGoals.includes(goal.value) ? "selected" : ""
              }`}
              onClick={() => toggleGoal(goal.value)}
            >
              {goal.label}
            </div>
          ))}
        </div>
        <Link to="/Dashboard">
          <Button
            type="primary"
            className="preferences-next-button"
            disabled={selectedGoals.length !== 3}
          >
            Next
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default PreferencesForm;
