import React from "react";
import { Layout, Card, Button, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "./Connect.css";

const { Header, Footer } = Layout;
const { Text } = Typography;

const ConnectHeader = () => (
  <Header className="header">
    <h1>
      Welcome to <span className="gradient-text">Mailspend</span>
    </h1>
  </Header>
);

const ConnectCard = () => (
  <Card className="connect-card">
    <Text className="connect-email-title">
      <b>Connect your email</b>
    </Text>
    <Text className="connect-email-subtitle">
      Understand your spending habits and make smarter financial decisions.
    </Text>
    <Button
      type="primary"
      icon={<GoogleOutlined />}
      className="google-signin-btn"
    >
      Continue with Google
    </Button>
  </Card>
);

const ConnectFooter = () => (
  <Footer className="footer">
    <div className="footer-content">
      <Text className="footer-text">Privacy | Terms & Condition | FAQ</Text>
      <Text className="footer-text" copyable={false}>
        Copyright © 2024 MailSpend. All rights reserved.
      </Text>
    </div>
  </Footer>
);

const Connect = () => (
  <Layout className="layout">
    <ConnectHeader />
    <ConnectCard />
    <ConnectFooter />
  </Layout>
);

export default Connect;
