import React from 'react';
import { Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//localhost:8000/upload',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
      console.log(info.fileList[0].response.fileUrl);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class UploadMutilfile extends React.Component {
  state = {
    urlImage: '',
  };

  render() {
    return (
      <div>
        <div>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or
              other band files
            </p>
          </Dragger>
        </div>
      </div>
    );
  }
}

export default UploadMutilfile;
