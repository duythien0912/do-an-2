import React from "react";
import { Card, Icon, Upload, Modal, Layout, Col, Row, message } from "antd";

import LoadingCompoment from "./LoadingCompoment";

const { Meta } = Card;
const { Content } = Layout;

const beforeUpload = file => {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isLt2M;
};

class Main extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [],
    filePrewload: [
      {
        status: "none"
      }
    ],
    loading: false,
    token: false
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({
        token: true
      });
    }
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    if (this.state.loading) {
      return <LoadingCompoment isLoading={this.state.loading} />;
    } else {
      return (
        <div className="clearfix">
          <div
            className="navMargin"
            style={{
              margin: "auto",
              width: "max-content",
              marginTop: "10vh"
            }}
          >
            <Upload
              action="/upload/"
  	      accept="image/*"
              listType="picture-card"
              multiple={false}
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              beforeUpload={beforeUpload}
            >
              {fileList.length >= 10 ? null : uploadButton}
            </Upload>
          </div>
          <Modal
            visible={previewVisible}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
          {
            //<UploadMutilfile />
          }

          <Content
            style={{
              background: "#f0f2f5"
            }}
          >
            <Row type="flex" justify="space-around" align="middle">
              {fileList.map((fileList, i) => {
                return (
                  <Col xs={10} sm={9} md={7} key={fileList.uid}>
                    {fileList.status !== "done" ? (
                      <Card hoverable style={{ width: "vw" }} loading />
                    ) : (
                      <Card
                        hoverable
                        style={{ width: "vw" }}
                        cover={
                          <img
                            alt="example"
                            src={`/${fileList.response.fileUrl}`}
                          />
                        }
                      >
                        <Meta
                          title={`Name: ${fileList.name}`}
                          description={`Type: ${fileList.type}`}
                        />
                      </Card>
                    )}
                  </Col>
                );
              })}
            </Row>
          </Content>
        </div>
      );
    }
  }
}

export default Main;
