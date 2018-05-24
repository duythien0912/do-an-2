import React, { Component } from "react";
import { Table } from "antd";

class loailoiTable extends Component {
  render() {
    const columns = [
      { title: "ID sản phẩm", dataIndex: "id", key: "id" },
      { title: "Lỗi", dataIndex: "loi", key: "loi" },
      { title: "Loại lỗi", dataIndex: "loailoi", key: "loailoi" },
      {
        title: "Thời gian bảo hành",
        dataIndex: "thoigianbaohanh",
        key: "thoigianbaohanh"
      },
      {
        title: "Thời gian nhận",
        dataIndex: "thoigiannhan",
        key: "thoigiannhan"
      },
      { title: "Thời gian trả", dataIndex: "thoigiantra", key: "thoigiantra" },
      { title: "Đơn giá", dataIndex: "dongia", key: "dongia" },
      { title: "Thành tiền", dataIndex: "thanhtien", key: "thanhtien" },
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
        id: "1",
        loi: "chua xac dinh",
        thoigianbaohanh: "1 year",
        loailoi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        thoigiannhan: "2018-05-03 10:08:10",
        thoigiantra: "2018-05-03 10:08:10",
        dongia: "3400000 VND",
        thanhtien: "10200000 VND"
      },
      {
        key: 2,
        id: "2",
        loi: "chua xac dinh",
        thoigianbaohanh: "2 year",
        loailoi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        thoigiannhan: "2018-05-03 10:08:10",
        thoigiantra: "2018-05-03 10:08:10",
        dongia: "400000 VND",
        thanhtien: "400000 VND"
      },
      {
        key: 3,
        id: "3",
        loi: "chua xac dinh",
        thoigianbaohanh: "1 year",
        loailoi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Al",
        thoigiannhan: "2018-05-03 10:08:10",
        thoigiantra: "2018-05-03 10:08:10",
        dongia: "200000 VND",
        thanhtien: "400000 VND"
      }
    ];

    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>{record.loailoi}</p>
          )}
          dataSource={data}
          size="small"
        />
      </div>
    );
  }
}

export default loailoiTable;
