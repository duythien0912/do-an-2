import { Card, Icon, Avatar, Upload, Modal, message, Layout, Col, Row } from 'antd';

import React from 'react';

import UploadMutilfile from './UploadMutilfile';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    console.log(fileList);

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
    return (
      <div className="clearfix">
        <Upload
          action="//localhost:8000/upload/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <UploadMutilfile />
        <Content>
          <Row type="flex" justify="space-around" align="middle">
            {fileList.map((fileList, i) => {
              return (
                <Col xs={10} sm={9} md={7} key={fileList.uid}>
                  {fileList.status !== 'done' ? (
                    <p>Loading</p>
                  ) : (
                    <Card
                      hoverable
                      style={{ width: 'vw' }}
                      cover={
                        <img
                          alt="example"
                          src={`http://localhost:8000/${fileList.response.fileUrl}`}
                        />
                      }
                    >
                      <Meta
                        title={`Name: ${fileList.name}`}
                        description={`Tyle: ${fileList.type}`}
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

export default Main;
