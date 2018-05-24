import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { DatePicker } from "antd";

const FormItem = Form.Item;

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      name: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="ID sản phẩm"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("id", {
            rules: [{ required: true, message: "Please input tên sản phẩm!" }]
          })(<Input />)}
        </FormItem>
        <FormItem label="Lỗi" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input lỗi!" }]
          })(<Input type="textarea" />)}
        </FormItem>
        <FormItem
          label="Loại lỗi"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "Please input loại lỗi!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="Thời gian bảo hành"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("baohanh", {
            rules: [
              { required: true, message: "Please input thời gian bảo hành!" }
            ]
          })(<Input type="number" />)}
        </FormItem>

        <FormItem
          label="Thời gian nhận"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("thoigiannhan", {
            rules: [{ required: true, message: "Please input thời gian nhận!" }]
          })(
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select Time"
            />
          )}
        </FormItem>
        <FormItem
          label="Thời gian trả"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("soLuong", {
            rules: [{ required: true, message: "Please input thời gian trả!" }]
          })(
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select Time"
            />
          )}
        </FormItem>
        <FormItem
          label="Đơn giá"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("donGia", {
            rules: [{ required: true, message: "Please input đơn giá!" }]
          })(<Input type="number" />)}
        </FormItem>
        <FormItem
          label="Thành tiền"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("donGia", {})(<Input type="number" />)}
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

const BaoHanhForm = Form.create()(App);

export default BaoHanhForm;
