import React from "react";
import { Card, Typography } from "antd";
import "./Prompts.css";

const { Title, Paragraph } = Typography;

const cardData = [
  {
    key: "1",
    title: "Where your money goes",
    content:
      "Get a breakdown of your spending by category, date, merchant, etc.",
  },
  {
    key: "2",
    title: "Be smart with your spending",
    content: "Get personalized tips based on your spending habits",
  },
  {
    key: "3",
    title: "What does your bank statement show",
    content:
      "See and analyze the latest e-statement from your chosen bank account",
  },
];

const Prompts = () => {
  return (
    <div>
      {cardData.map(({ key, title, content }) => (
        <Card
          key={key}
          style={{
            background: key === "2" ? "#3D56F5" : "F9F9FB",
            marginBottom: "1rem",
            padding: "12px 12px",
          }}
        >
          <Title
            level={4}
            style={{
              color: key === "2" ? "white" : "#3B4061",
              fontSize: "16px",
            }}
          >
            {title}
          </Title>
          <Paragraph
            style={{
              color: key === "2" ? "#ACBCF7" : "#8D93B9",
              fontSize: "14px",
            }}
          >
            {content}
          </Paragraph>
        </Card>
      ))}
    </div>
  );
};

export default Prompts;
