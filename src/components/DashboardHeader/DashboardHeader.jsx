import React from "react";
import { Input, Button, Avatar } from "antd";
import { UploadOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";

const DashboardHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E7E7EF",
        padding: "16px 18px",
      }}
    >
      <Input
        suffix={
          <DownOutlined
            style={{
              background: "#232639",
              border: "1px solid #232639",
              color: "white",
              borderRadius: "4px",
              padding: "2px",
            }}
          />
        }
        placeholder="ali@example.com"
        style={{
          width: 200,
          border: "none",
          background: "transparent",
          color: "#232639",
        }}
      />
      <div>
        <Button
          type="primary"
          icon={<UploadOutlined />}
          style={{
            background: "#232639",

            borderColor: "none",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            marginLeft: 8,
          }}
        >
          Import Bank Statement
        </Button>
        <Avatar
          size="large"
          icon={<UserOutlined />}
          // If you have the user's image, replace `icon` with `src` prop and provide the image URL
          src="https://s3-alpha-sig.figma.com/img/dfda/5881/1c5b5f9e8ccd890e5d8b73553ab2844f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ck2nLW0uh14rB3dJ5gZFeRQjIovwZvTHzNY8zox~6llpyEZCQKMn3qaaNnGI-vKYMoEn7DzzC9xlDCr8~SrG-3gT1kP-ElUH5IGLrY8Ht35NH-GutIHJ-27gX5NqzNAvjSQbUsw7iy0l04sa7iSrAvQFDBwkyE12454ZyVQEzoUpsbKECt6tF7RZmz9EARY1XmzOWjVVdwtTlOA4w59WLCo-F5xmGaWsq1gxmZl21y7onH3kCZu73soEDqKhQZVxktCdpWIhutUzVFGDNBF1sYx08AwqGypyF5I3nKL0IRnwEgrnvg9pRTHTmUphOxhoU-PacepT1hPluqbWnP1mQg__"
          style={{ marginLeft: 8 }}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
