import React from "react";
import { Layout, Icon } from "antd";
import { Link } from "react-router-dom";

import TopNavigation from "../navigation/TopNavigation";
import background1 from "../../image/background1.jpeg";
//import background2 from "../../image/background2.jpeg";
//import background3 from "../../image/background3.jpeg";

const HomePage = () => (
  <div>
    <Layout>
      <TopNavigation />
      <div
        style={{
          minHeight: "100vh",
          color: "#F3ECFF",
          textAlign: "center",
          background: `url(${background1}) no-repeat center center fixed`,
          backgroundSize: "cover",
          filter: "blur(2px)"
        }}
        className="home__background"
      />
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "15vw"
        }}
      >
        <p
          style={{
            color: "#F3ECFF",
            fontSize: "4em",
            fontStyle: "italic",
            textAlign: "-webkit-auto",
            fontWeight: "bold"
          }}
        >
          Just a image page !
        </p>
        <Link to="/upload">
          <div
            style={{
              border: "0.5em solid #F3ECFF",
              padding: "1em",
              borderRadius: "20px",
              boxShadow: "-4px 4px 20px 0px #585858",
              mixBlendMode: "hard-light"
            }}
          >
            <Icon
              type="cloud-upload-o"
              style={{ fontSize: "4em", color: "#F3ECFF" }}
            />
            <p
              style={{
                color: "#F3ECFF",
                fontSize: "2em",
                fontStyle: "italic",
                fontWeight: "bold"
              }}
            >
              Upload your image.
            </p>
          </div>
        </Link>
      </div>
    </Layout>
  </div>
);

export default HomePage;
