import React from "react";
import { List, Avatar, Typography, Badge } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import "./ChatBox.css";
const { Text } = Typography;

const data = [
  {
    title: "Mailsend",
    avatar: "M",
    content:
      "Hey Ali! Based on your recent data, I see you've spent quite a bit on food delivery this month. Did you know this category accounts for 25% of your total spending?",
    isUser: false,
  },
  {
    title: "You",
    avatar: "Y",
    content: "25% is too much, any suggestions on how I could lower this?",
    isUser: true,
  },
  {
    title: "Mailsend",
    avatar: "M",
    content:
      "Here are two ideas: Cook more at home: This can be significantly cheaper and healthier. There are tons of beginner-friendly recipes online, and meal prepping can save you time. Optimize your food delivery habits: Consider subscribing to Foodpanda with a premium membership for free delivery or discounts. It might be worth it if you use it consistently.",
    isUser: false,
  },
];
const ChatBox = () => {
  return (
    <List
      style={{
        border: "1.5px solid #E1E1EA",
        borderRadius: "12px",
        padding: "24px",
        marginTop: "3rem",
        overflowY: "scroll",
        height: "55vh",
      }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{
            border: "none",
          }}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                style={
                  item.isUser
                    ? { backgroundColor: "#f56a00" }
                    : { backgroundColor: "#87d068" }
                }
              >
                {item.title.charAt(0)}
              </Avatar>
            }
            title={item.title}
            description={<Text>{item.content}</Text>}
            style={{
              background: "#F5F7FE",
              border: "1px solid #ECF0FD",
              borderRadius: "12px",
              padding: "10px",
            }}
          />
          {/* {!item.isUser && (
            <Badge count={<MessageOutlined style={{ color: "#1890ff" }} />} />
          )} */}
        </List.Item>
      )}
    />
  );
};

export default ChatBox;
