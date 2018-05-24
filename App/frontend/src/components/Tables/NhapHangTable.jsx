import React, { Component } from "react";
import { Table } from "antd";
import SanPhamForm from "../Form/SanPhamForm";

class NhapHangTable extends Component {
  render() {
    const columns = [
      { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
      { title: "Ma San Pham", dataIndex: "Idname", key: "Idname" },
      {
        title: "Ten Nha Cung Cap",
        dataIndex: "namecungcap",
        key: "namecungcap"
      },
      { title: "Số lượng", dataIndex: "soluong", key: "soluong" },
      { title: "Đơn giá", dataIndex: "dongia", key: "dongia" },
      { title: "Thành tiền", dataIndex: "thanhtien", key: "thanhtien" },
      { title: "Tong Tien", dataIndex: "tongtien", key: "tongtien" },
      { title: "Nguoi Giao", dataIndex: "nguoigiao", key: "nguoigiao" },
      { title: "Nguoi Nhan", dataIndex: "nguoinhan", key: "nguoinhan" },
      {
        title: "Thoi Gian Nhap",
        dataIndex: "thoigiannhap",
        key: "thoigiannhap"
      },
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
        name: "Nhan vang",
        Idname: "1",
        namecungcap: "Rock",
        soluong: "1",
        dongia: "3400000 VND",
        thanhtien: "10200000 VND",
        tongtien: "10230000 VND",
        nguoigiao: "Shiper A",
        nguoinhan: "Nguyen Van A",
        thoigiannhap: "15-5-2018"
      },
      {
        key: 2,
        name: "Nhan bac",
        Idname: "2",
        namecungcap: "Jely",
        soluong: "1",
        dongia: "3400000 VND",
        thanhtien: "1200000 VND",
        tongtien: "1230000 VND",
        nguoigiao: "Shiper B",
        nguoinhan: "Nguyen Van B",
        thoigiannhap: "13-5-2018"
      },
      {
        key: 3,
        name: "Da ruby",
        Idname: "3",
        namecungcap: "Jely",
        soluong: "1",
        dongia: "340000 VND",
        thanhtien: "120000 VND",
        tongtien: "123000 VND",
        nguoigiao: "Shiper C",
        nguoinhan: "Nguyen Van B",
        thoigiannhap: "10-5-2018"
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

export default NhapHangTable;
