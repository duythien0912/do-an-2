import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Redirect } from "react-router-dom";

import SanPhamForm from "../Form/SanPhamForm";
import BaoHanhForm from "../Form/BaoHanhForm";
import KhachHangForm from "../Form/KhachHangForm";
import SanPhamTable from "../Tables/SanPhamTable";
import BaoHanhTable from "../Tables/BaoHanhTable";
import KhachHangTable from "../Tables/KhachHangTable";
import PictureTable from "../Tables/PictureTable";
import PictureForm from "../Form/PictureForm";
import NhapHangTable from "../Tables/NhapHangTable";
import NhapHangForm from "../Form/NhapHangForm";
import BanHangTable from "../Tables/BanHangTable";
import BanHangForm from "../Form/BanHangForm";

const { Header, Sider, Content } = Layout;

class DashBoardPage extends Component {
  state = {
    collapsed: false,
    menu: 1
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
    if (token.split(" ")[1] === "user" || !token.split(" ")[1]) {
      this.props.history.push("/user");
    }
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  onClickMenuItem = async data => {
    await this.setState({
      menu: data
    });
  };
  render() {
    if (this.state.menu === 0) {
      return <Redirect push to="/" />;
    }
    const { menu } = this.state;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="0">
              <div onClick={this.onClickMenuItem.bind(this, 0)}>
                <Icon type="home" />
                <span>HomePage</span>
              </div>
            </Menu.Item>
            <Menu.Item key="1">
              <div onClick={this.onClickMenuItem.bind(this, 1)}>
                <Icon type="shop" />
                <span>Sản phẩm</span>
              </div>
            </Menu.Item>
            <Menu.Item key="6">
              <div onClick={this.onClickMenuItem.bind(this, 6)}>
                <Icon type="wallet" />
                <span>Bán hàng</span>
              </div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={this.onClickMenuItem.bind(this, 2)}>
                <Icon type="customer-service" />
                <span>Bảo hành</span>
              </div>
            </Menu.Item>
            <Menu.Item key="3">
              <div onClick={this.onClickMenuItem.bind(this, 3)}>
                <Icon type="contacts" />
                <span>Khách hàng</span>
              </div>
            </Menu.Item>
            <Menu.Item key="4">
              <div onClick={this.onClickMenuItem.bind(this, 4)}>
                <Icon type="picture" />
                <span>Picture</span>
              </div>
            </Menu.Item>
            <Menu.Item key="5">
              <div onClick={this.onClickMenuItem.bind(this, 5)}>
                <Icon type="barcode" />
                <span>Nhập hàng</span>
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
              style={{ marginLeft: "17px" }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {menu === 1 ? (
              <div>
                <SanPhamTable />
                <SanPhamForm />
              </div>
            ) : (
              ""
            )}
            {menu === 2 ? (
              <div>
                <BaoHanhTable />
                <BaoHanhForm />
              </div>
            ) : (
              ""
            )}
            {menu === 3 ? (
              <div>
                <KhachHangTable />
                <KhachHangForm />
              </div>
            ) : (
              ""
            )}
            {menu === 4 ? (
              <div>
                <PictureTable />
                <PictureForm />
              </div>
            ) : (
              ""
            )}
            {menu === 5 ? (
              <div>
                <NhapHangTable />
                <NhapHangForm />
              </div>
            ) : (
              ""
            )}
            {menu === 6 ? (
              <div>
                <BanHangTable />
                <BanHangForm />
              </div>
            ) : (
              ""
            )}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default DashBoardPage;
