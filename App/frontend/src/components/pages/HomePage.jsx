import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Spin,
  Icon,
  Card,
  Col,
  Row,
} from "antd";
import axios from "axios";

import TopNavigation from "../navigation/TopNavigation";
import BottomNavigation from "../navigation/BottomNavigation";

const { Meta } = Card;

const { Header, Content, Footer } = Layout;

class HomePage extends React.Component {
  state = {
    filePrewload: [],
    loading: true,
  };

  componentDidMount = () => {
    axios.get("http://localhost:8000/findImage").then(res => {
      this.setState({
        filePrewload: res.data,
        loading: false,
      });
    });
  };

  render() {
    const {
      previewVisible,
      previewImage,
      fileList,
      filePrewload,
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    if (this.state.loading) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin style={{ margin: 0 }} />
        </div>
      );
    } else {
      return (
        <div>
          <Layout>
            <TopNavigation
              style={{ position: "fixed", width: "100%" }}
            />
            <div
              style={{
                minHeight: "50vh",
                background:
                  "#4568dc" /* fallback for old browsers */,
                background:
                  "-webkit-linear-gradient(to bottom, #4568dc, #b06ab3)" /* Chrome 10-25, Safari 5.1-6 */,
                background:
                  "linear-gradient(to bottom, #4568dc, #b06ab3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                color: "#F3ECFF",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#F3ECFF",
                  fontSize: "2.3em",
                  position: "absolute",
                  top: "25vh",
                  left: "15vw",
                  fontStyle: "italic",
                }}
              >
                The stuff you’ll see everywhere else tomorrow.
              </p>
            </div>
            <Content style={{ padding: "0 5vw", marginTop: 30 }}>
              <div
                style={{
                  background: "#fff0",
                  padding: 24,
                  minHeight: 380,
                  position: "relative",
                  top: "-15vh",
                }}
              >
                <Row type="flex" justify="space-around" align="top">
                  {filePrewload.map((fileList, i) => {
                    return (
                      <Col xs={10} sm={9} md={5} key={fileList._id}>
                        <Card
                          hoverable
                          style={{ width: "vw" }}
                          cover={
                            <img
                              alt="example"
                              src={`http://localhost:8000/${
                                fileList.url
                              }`}
                            />
                          }
                        >
                          <Meta
                            title={`Name: ${fileList.name}`}
                            description={`Type: ${fileList.type}`}
                          />
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Content>
          </Layout>
        </div>
      );
    }
  }
}

export default HomePage;
