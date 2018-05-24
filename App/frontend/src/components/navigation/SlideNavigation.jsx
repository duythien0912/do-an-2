import React from "react";
import { Layout, Avatar, Button, Icon } from "antd";

const { Sider } = Layout;
const user = localStorage.getItem("token")
  ? localStorage.getItem("token").split(" ")[2]
  : null;

const SlideNavigation = () => {
  return (
    <Sider
      style={{
        background: "#fafafa",
        borderRadius: "3px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        minWidth: "30vw"
      }}
      className="SiderUser"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2em",
          paddingRight: "0",
          paddingLeft: "0",
          borderBottom: "1px solid #e8e8e8"
        }}
      >
        <div
          style={{
            margin: "auto",
            float: "left"
          }}
        >
          <p
            style={{
              fontWeight: "600",
              marginBottom: "5px"
            }}
          >
            {user}
          </p>
          <Button
            type="primary"
            style={{
              borderRadius: "50px",
              backgroundColor: "#0057ff"
            }}
          >
            <span
              style={{
                fontSize: "12px"
              }}
            >
              Follow
            </span>
          </Button>
        </div>
        <Avatar
          size="large"
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            margin: "auto"
          }}
        >
          {user.slice(0, 1)}
        </Avatar>
      </div>
      <div
        style={{
          padding: "2em",
          paddingRight: "0",
          borderBottom: "1px solid #e8e8e8"
        }}
      >
        <p
          style={{
            fontWeight: "400",
            marginBottom: "5px"
          }}
        >
          Photo gallery for {user}
        </p>
        <p
          style={{
            fontSize: "12px",
            marginBottom: "5px"
          }}
        >
          <Icon type="eye" className="iconUser" />97
          <Icon type="like-o" className="iconUser" />12
          <Icon type="heart-o" className="iconUser" />4
          <Icon type="dislike-o" className="iconUser" />1
        </p>
      </div>
    </Sider>
  );
};

export default SlideNavigation;
