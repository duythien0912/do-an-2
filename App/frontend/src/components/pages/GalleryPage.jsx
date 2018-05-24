import React from "react";
import { Layout } from "antd";

import TopNavigation from "../navigation/TopNavigation";
import Gallery from "../ui/Gallery";

const GalleryPage = () => (
  <Layout>
    <TopNavigation />
    <div
      style={{
        marginTop: "10vh",
        minHeight: "100vh"
      }}
    >
      <Gallery />
    </div>
  </Layout>
);

export default GalleryPage;
