import React, { Component } from "react";
import { Table } from "antd";
import SanPhamForm from "../Form/SanPhamForm";

class SanPhamTable extends Component {
  render() {
    const columns = [
      { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
      { title: "Mã sản phẩm", dataIndex: "type", key: "type" },
      { title: "Bảo hành", dataIndex: "baohanh", key: "baohanh" },
      { title: "Mô tả", dataIndex: "mota", key: "mota" },
      {
        title: "Tổng trọng lượng",
        dataIndex: "tongtrongluong",
        key: "tongtrongluong"
      },
      { title: "Số lượng", dataIndex: "soluong", key: "soluong" },
      { title: "Đơn giá", dataIndex: "dongia", key: "dongia" },
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
        name: "nhan vang",
        type: "Rock",
        baohanh: "1 year",
        mota: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        tongtrongluong: "32 gram",
        soluong: "3",
        dongia: "3400000 VND"
      },
      {
        key: 2,
        name: "nhan bac",
        type: "Rock",
        baohanh: "2 year",
        mota: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        tongtrongluong: "13 gram",
        soluong: "1",
        dongia: "400000 VND"
      },
      {
        key: 3,
        name: "nhan kim cuong",
        type: "Rock",
        baohanh: "1 year",
        mota: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        tongtrongluong: "3 gram",
        soluong: "2",
        dongia: "200000 VND"
      }
    ];

    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => (
            <div>
              <SanPhamForm record={record} typesubmit="Update" />
            </div>
          )}
          dataSource={data}
          size="small"
        />
      </div>
    );
  }
}

export default SanPhamTable;
