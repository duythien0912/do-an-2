import React, { Component } from "react";
import { Form, Input, Button } from "antd";
const FormItem = Form.Item;

class App extends Component {
  state = {
    thanhTien: 100,
    record: this.props.record || []
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  componentDidMount = () => {
    this.props.form.setFieldsValue({
      name: this.state.record.name,
      type: this.state.record.type,
      baohanh: this.state.record.baohanh,
      description: this.state.record.mota,
      tongTrongLuong: this.state.record.tongtrongluong,
      soLuong: this.state.record.soluong,
      donGia: this.state.record.dongia
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
    const { typesubmit } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Tên sản phẩm"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input tên sản phẩm!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="Mã sản phẩm"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "Please input loại sản phẩm!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="Bảo hành"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("baohanh", {
            rules: [{ required: true, message: "Please input bảo hành!" }]
          })(<Input />)}
        </FormItem>

        <FormItem
          label="Mô tả"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("description", {})(<Input />)}
        </FormItem>

        <FormItem
          label="Tổng trọng lượng"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("tongTrongLuong", {
            rules: [
              { required: true, message: "Please input tổng trọng lượng!" }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="Số lượng"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("soLuong", {
            rules: [{ required: true, message: "Please input số lượng!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="Đơn giá"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("donGia", {
            rules: [{ required: true, message: "Please input đơn giá!" }]
          })(<Input />)}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            {typesubmit ? typesubmit : "Submit"}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SanPhamForm = Form.create()(App);

export default SanPhamForm;
