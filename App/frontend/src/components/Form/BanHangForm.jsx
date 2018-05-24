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
      namecustomer: this.state.record.namecustomer,
      sdt: this.state.record.sdt,
      adress: this.state.record.adress,
      type: this.state.record.type,
      baohanh: this.state.record.baohanh,
      description: this.state.record.mota,
      tongTrongLuong: this.state.record.tongtrongluong,
      soLuong: this.state.record.soluong,
      donGia: this.state.record.dongia,
      thanhTien: this.state.record.thanhtien,
      nguoiban: this.state.record.nguoiban,
      timesell: this.state.record.timesell
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
          label="Tên khách hàng"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("namecustomer", {
            rules: [{ required: true, message: "Please input Tên khách hàng!" }]
          })(<Input />)}
        </FormItem>

        <FormItem
          label="Số điện thoại"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("sdt", {
            rules: [{ required: true, message: "Please input Số điện thoại!" }]
          })(<Input />)}
        </FormItem>
        <FormItem
          label="Địa chỉ"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("adress", {
            rules: [{ required: true, message: "Please input Địa chỉ!" }]
          })(<Input />)}
        </FormItem>
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
        <FormItem
          label="Thành tiền"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("thanhTien", {})(<Input />)}
        </FormItem>
        <FormItem
          label="Người bán"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("nguoiban", {})(<Input />)}
        </FormItem>
        <FormItem
          label="Thời gian bán"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("timesell", {})(<Input type="dateTime" />)}
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

const BanHangForm = Form.create()(App);

export default BanHangForm;
