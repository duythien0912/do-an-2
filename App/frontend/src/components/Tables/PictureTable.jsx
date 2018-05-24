import React, { Component } from "react";
import { Table } from "antd";
import axios from "axios";

class PictureTable extends Component {
  state = {
    data: [],
    loading: false
  };
  componentDidMount = async () => {
    this.setState({
      loading: true
    });
    await axios.get(`/findImage`).then(res => {
      this.setState({
        data: res.data.reverse(),
        loading: false
      });
    });
  };
  render() {
    const columns = [
      { title: "Id", dataIndex: "_id", key: "_id" },
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Type", dataIndex: "type", key: "type" },
      { title: "Url", dataIndex: "url", key: "url" },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: () => <a href="#0">Delete</a>
      }
    ];

    const { data } = this.state;

    return (
      <div>
        <Table
          loading={this.state.loading}
          columns={columns}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>{record.url}</p>
          )}
          dataSource={data}
          size="small"
        />
      </div>
    );
  }
}

export default PictureTable;
