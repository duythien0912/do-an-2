import { Card, Icon, Upload, Modal, Layout, Col, Row, Button, Spin } from 'antd';

import React from 'react';
import axios from 'axios';

import UploadMutilfile from './UploadMutilfile';
const { Meta } = Card;
const { Content } = Layout;

class Main extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    filePrewload: [
      {
        status: 'none',
      },
    ],
    loading: true,
  };

  componentDidMount = () => {
    axios.get('http://localhost:8000/findImage').then(res => {
      this.setState({
        filePrewload: res.data,
        loading: false,
      });
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
  };

  render() {
    const { previewVisible, previewImage, fileList, filePrewload } = this.state;
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
            height: '100vh',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
          }}
        >
          <Spin style={{ margin: 0 }} />
        </div>
      );
    } else {
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
              {filePrewload.map((fileList, i) => {
                return (
                  <Col xs={10} sm={9} md={7} key={fileList._id}>
                    <Card
                      hoverable
                      style={{ width: 'vw' }}
                      cover={<img alt="example" src={`http://localhost:8000/${fileList.url}`} />}
                    >
                      <Meta
                        title={`Name: ${fileList.name}`}
                        description={`Type: ${fileList.type}`}
                      />
                    </Card>
                  </Col>
                );
              })}

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
