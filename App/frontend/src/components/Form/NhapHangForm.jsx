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
      Idname: this.state.record.Idname,
      namecungcap: this.state.record.namecungcap,
      soluong: this.state.record.soluong,
      dongia: this.state.record.dongia,
      thanhtien: this.state.record.thanhtien,
      tongtien: this.state.record.tongtien,
      nguoigiao: this.state.record.nguoigiao,
      nguoinhan: this.state.record.nguoinhan,
      thoigiannhap: this.state.record.thoigiannhap
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
          label="ID sản phẩm"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("Idname", {
            rules: [{ required: true, message: "Please input loại sản phẩm!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="ten nha cung cap"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("namecungcap", {
            rules: [{ required: true, message: "Please input bảo hành!" }]
          })(<Input />)}
        </FormItem>

        <FormItem
          label="so luong"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("soluong", {})(<Input />)}
        </FormItem>

        <FormItem
          label="don gia"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("dongia", {
            rules: [
              { required: true, message: "Please input tổng trọng lượng!" }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="thanh tien"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("thanhtien", {
            rules: [{ required: true, message: "Please input số lượng!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="tong tien"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("tongtien", {
            rules: [{ required: true, message: "Please input đơn giá!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="nguoi giao"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("nguoigiao", {})(<Input />)}
        </FormItem>
        <FormItem
          label="nguoi nhan"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("nguoinhan", {})(<Input />)}
        </FormItem>
        <FormItem
          label="thoi gian nhap"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("thoigiannhap", {})(<Input />)}
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

const NhapHangForm = Form.create()(App);

export default NhapHangForm;
