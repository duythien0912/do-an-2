import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      name: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Email" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input email!' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="Password" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('number', {
            rules: [{ required: true, message: 'Please input password!' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="NickName" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('email', {})(<Input />)}
        </FormItem>
        <FormItem label="Role" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('point', {})(<Input />)}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const UserForm = Form.create()(App);

export default UserForm;
