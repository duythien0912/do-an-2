import React, { Component } from "react";
import { Layout } from "antd";

import TopNavigation from "../navigation/TopNavigation";
import BottomNavigation from "../navigation/BottomNavigation";
import SlideNavigation from "../navigation/SlideNavigation";
import Gallery from "../ui/Gallery";

const { Content } = Layout;

class UserPage extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
    if (token.split(" ")[1] === "admin") {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const token = localStorage.getItem("token");

    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <TopNavigation />
          <Layout style={{ marginTop: "47px", padding: "2vw" }}>
            <Content
              style={{
                padding: "1em",
                background: "#ffffff",
                borderRadius: "3px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
              }}
            >
              <Gallery userData={token ? token.split(" ")[2] : null} />
            </Content>
            <SlideNavigation />
          </Layout>
          <BottomNavigation />
        </Layout>
      </div>
    );
  }
}
export default UserPage;
