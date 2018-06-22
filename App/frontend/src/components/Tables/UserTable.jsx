import React, { Component } from 'react';
import { Table } from 'antd';

class UserTable extends Component {
  render() {
    const columns = [
      { title: 'Email', dataIndex: 'name', key: 'name' },
      { title: 'Password', dataIndex: 'sodienthoai', key: 'sodienthoai' },
      { title: 'Nick Name', dataIndex: 'email', key: 'email' },
      { title: 'Role', dataIndex: 'diemtichluy', key: 'diemtichluy' },

      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a href="#0">Delete</a>,
      },
    ];

    const data = [
      {
        key: 1,
        name: 'duythien1@gmail.com',
        sodienthoai: '******',
        email: 'Thien Duy',
        diemtichluy: 'user',
      },
      {
        key: 2,
        name: 'duythien2@gmail.com',
        sodienthoai: '******',
        email: 'THien',
        diemtichluy: 'user',
      },
      {
        key: 3,
        name: 'admin@gmail.com',
        sodienthoai: '******',
        email: 'Admin',
        diemtichluy: 'admin',
      },
    ];

    return (
      <div>
        <Table columns={columns} expandedRowRender={record => <p style={{ margin: 0 }}>{`Email: ${record.name} Pass: thienduy Nick Name: ${record.email} Role: ${record.diemtichluy}`}</p>} dataSource={data} size="small" />
      </div>
    );
  }
}

export default UserTable;
