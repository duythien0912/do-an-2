import React from "react";
import { Menu, Icon, Button, Badge } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopNavigation extends React.Component {
  state = {
    current: "mail",
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
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
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>

        <Menu.Item key="user" style={{ float: "right" }}>
          <Link to="/upload">
            <Badge
              count={23}
              showZero
              style={{ backgroundColor: "#52c41a" }}
            />
          </Link>
        </Menu.Item>

        <Menu.Item key="Sign_up" style={{ float: "right" }}>
          <Link to="/upload">
            <Button type="primary">Sign up</Button>
          </Link>
        </Menu.Item>

        <Menu.Item key="Sign_In" style={{ float: "right" }}>
          <Link to="/upload">
            <Icon type="login" /> Sign In
          </Link>
        </Menu.Item>

        <Menu.Item key="alipay" style={{ float: "right" }}>
          <Link to="/upload">
            <Button type="primary">
              <Icon type="plus-square-o" />
              Upload
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopNavigation;
