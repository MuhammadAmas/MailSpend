import React, { useState } from "react";
import { Input, Upload } from "antd";
import { SendOutlined, UploadOutlined } from "@ant-design/icons";
import "./ChatInput.css";
const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log(message);
    setMessage("");
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && message.trim()) {
      handleSendMessage();
    }
  };

  // Dummy request to simulate file upload
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <div>
      <Input
        placeholder="Ask Mailspend anything..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        // prefix={<UploadOutlined />}
        suffix={
          <SendOutlined
            onClick={handleSendMessage}
            className="chat-input-send-icon"
          />
        }
        className="chat-input"
      />
      <p className="footer-text">
        Mailspend may generate inaccurate responses, always double-check its
        responses.
      </p>
    </div>
  );
};

export default ChatInput;
