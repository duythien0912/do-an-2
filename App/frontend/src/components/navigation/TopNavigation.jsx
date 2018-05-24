import React from "react";
import { Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";

class TopNavigation extends React.Component {
  state = {
    current: "mail",
    token: false,
    tokenRole: ""
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({
        token: true,
        tokenRole: token.split(" ")[1]
      });
    }
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  onClickLogOut = () => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <div style={{ position: "fixed", width: "100%", zIndex: "10" }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="home" />Home
            </Link>
          </Menu.Item>
          <Menu.Item key="gallery">
            <Link to="/gallery">
              <Icon type="picture" />Gallery
            </Link>
          </Menu.Item>
          {this.state.token === true ? (
            <Menu.Item key="app">
              {this.state.tokenRole === "user" ? (
                <Link to="/user">
                  <Icon type="user" />My gallery
                </Link>
              ) : null}
              {this.state.tokenRole === "admin" ? (
                <Link to="/dashboard">
                  <Icon type="dashboard" />Dash Board
                </Link>
              ) : null}
            </Menu.Item>
          ) : (
            ""
          )}

          {this.state.token === true ? (
            <Menu.Item key="Log_out" style={{ float: "right" }}>
              <a href="/" onClick={this.onClickLogOut}>
                <Button type="primary">Logout</Button>
              </a>
            </Menu.Item>
          ) : (
            <Menu.Item key="Sign_up" style={{ float: "right" }}>
              <Link to="/signup">
                <Button type="primary">Sign up</Button>
              </Link>
            </Menu.Item>
          )}
          {this.state.token === true ? (
            ""
          ) : (
            <Menu.Item key="Sign_In" style={{ float: "right" }}>
              <Link to="/login">
                <Button>
                  <Icon type="login" /> Login
                </Button>
              </Link>
            </Menu.Item>
          )}

          <Menu.Item key="user" style={{ float: "right" }}>
            <Link to="/upload">
              <Button type="primary">
                <Icon type="cloud-upload-o" style={{ fontSize: 16 }} />Upload
              </Button>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TopNavigation;
