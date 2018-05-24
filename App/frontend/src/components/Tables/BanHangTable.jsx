import React, { Component } from "react";
import { Table } from "antd";
import BanHangForm from "../Form/BanHangForm";

class BanHangTable extends Component {
  render() {
    const columns = [
      { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
      { title: "Tên khách hàng", dataIndex: "namecustomer", key: "name" },
      { title: "Số điện thoại", dataIndex: "sdt", key: "sdt" },
      { title: "Địa chỉ", dataIndex: "adress", key: "adress" },
      { title: "Mã sản phẩm", dataIndex: "type", key: "type" },
      { title: "Bảo hành", dataIndex: "baohanh", key: "baohanh" },
      {
        title: "Tổng trọng lượng",
        dataIndex: "tongtrongluong",
        key: "tongtrongluong"
      },
      { title: "Số lượng", dataIndex: "soluong", key: "soluong" },
      { title: "Đơn giá", dataIndex: "dongia", key: "dongia" },
      { title: "Thành tiền", dataIndex: "thanhtien", key: "thanhtien" },
      { title: "Người bán", dataIndex: "nguoiban", key: "nguoiban" },
      { title: "Thời gian bán", dataIndex: "timesell", key: "timesell" },
      { title: "Mô tả", dataIndex: "mota", key: "mota" },

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
        namecustomer: "John Brown",
        sdt: "0987654321",
        adress: "21 Vo Van Ngan",
        type: "Rock",
        baohanh: "1 year",
        mota: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        tongtrongluong: "32 gram",
        soluong: "3",
        dongia: "3400000 VND",
        thanhtien: "10200000 VND",
        nguoiban: "nguyen van x",
        timesell: "13:42/15-5-2018"
      },
      {
        key: 2,
        name: "nhan bac",
        namecustomer: "Jim Green",
        sdt: "0987654321",
        adress: "21 Vo Van Ngan",

        type: "Rock",
        baohanh: "2 year",
        mota: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        tongtrongluong: "13 gram",
        soluong: "1",
        dongia: "400000 VND",
        thanhtien: "400000 VND",
        nguoiban: "nguyen van x",

        timesell: "13:42/15-5-2018"
      },
      {
        key: 3,
        name: "nhan kim cuong",
        namecustomer: "Joe Black",
        sdt: "0987654321",
        adress: "21 Vo Van Ngan",

        type: "Rock",
        baohanh: "1 year",
        mota: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        tongtrongluong: "3 gram",
        soluong: "2",
        dongia: "200000 VND",
        thanhtien: "400000 VND",
        nguoiban: "nguyen van x",

        timesell: "13:42/15-5-2018"
      }
    ];

    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => (
            <div>
              <BanHangForm record={record} typesubmit="Update" />
            </div>
          )}
          dataSource={data}
          size="small"
        />
      </div>
    );
  }
}

export default BanHangTable;
