import React, { Component } from "react";
import { Table } from "antd";

class KhachHangTable extends Component {
  render() {
    const columns = [
      { title: "Tên khách hàng", dataIndex: "name", key: "name" },
      { title: "Số điện thoại", dataIndex: "sodienthoai", key: "sodienthoai" },
      { title: "Email", dataIndex: "email", key: "email" },
      { title: "Điểm tích lũy", dataIndex: "diemtichluy", key: "diemtichluy" },

      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: () => <a href="#0">Delete</a>
      }
    ];

    const data = [
      {
        key: 1,
        name: "John Brown",
        sodienthoai: "0999999999",
        email: "JohnBrown@gmail.com",
        diemtichluy: "1"
      },
      {
        key: 2,
        name: "Jim Green",
        sodienthoai: "0999999999",
        email: "JimGreen@gmail.com",
        diemtichluy: "3"
      },
      {
        key: 3,
        name: "Joe Black",
        sodienthoai: "0999999999",
        email: "JoeBlack@gmail.com",
        diemtichluy: "4"
      }
    ];

    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>{`Tên khách hàng: ${
              record.name
            } Số điện thoại: ${record.sodienthoai} Email: ${
              record.email
            } Điểm tích lũy: ${record.diemtichluy}`}</p>
          )}
          dataSource={data}
          size="small"
        />
      </div>
    );
  }
}

export default KhachHangTable;
