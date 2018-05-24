import React from "react";
import { Modal, Button, Row, Col, Icon, Card } from "antd";
const { Meta } = Card;

class ModalImage extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <br />
        <Card
          onClick={this.showModal}
          hoverable
          style={{ width: "vw" }}
          cover={<img alt="example" src={`/${this.props.data.url}`} />}
        >
          <Meta
            title={`Name: ${this.props.data.name}`}
            description={`Type: ${this.props.data.type}`}
          />
        </Card>
        <Modal
          style={{
            top: 20
          }}
          width="95vw"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Row type="flex" align="middle">
            <Col span={13}>
              <img
                alt="example"
                src={`/${this.props.data.url}`}
                style={{
                  margin: "auto",
                  display: "table",
                  maxWidth: "50vw",
                  minWidth: "30vw"
                }}
              />
            </Col>

            <Col span={9} offset={2}>
              {" "}
              <h1>{this.props.data.name}</h1>
              <h2>{this.props.data.type}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus cursus laoreet sapien, nec fringilla dui placerat non.
                Cras et pretium justo. Etiam sit amet porttitor dui. Sed
                malesuada nisi sit amet odio gravida malesuada. Sed sit amet
                nibh finibus, convallis purus id, egestas nisi. Curabitur
                egestas augue non arcu consectetur, sed tristique mauris semper.
                Mauris nec mauris ac erat maximus maximus in elementum odio.
                Aenean aliquet velit lectus.
              </p>
              <a
                href={`/${this.props.data.url}`}
                download={this.props.data.name}
              >
                <Button
                  type="primary"
                  size="large"
                  style={{
                    width: "100%"
                  }}
                >
                  Download <Icon type="cloud-download" />
                </Button>
              </a>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalImage;
