import React from 'react';
import { Icon, Upload, Button, message, Dropdown } from 'antd';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import LoadingCompoment from './LoadingCompoment';

const beforeUpload = file => {
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return isLt2M;
};

class UploadSingleFile extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    filePrewload: [
      {
        status: 'none',
      },
    ],
    loading: false,
    token: false,
  };

  openGallery = item => {
    const items = [
      {
        src: item,
        w: 0,
        h: 0,
      },
    ];
    const pswpElement = this.pswpElement;
    const options = { index: 0 };
    this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, items, options);
    this.gallery.listen('gettingData', (index, item) => {
      const _this = this;
      if (item.w < 1 || item.h < 1) {
        // unknown size
        var img = new Image();
        img.onload = function() {
          // will get size after load
          item.w = this.width; // set image width
          item.h = this.height; // set image height
          _this.gallery.invalidateCurrItems(); // reinit Items
          _this.gallery.updateSize(true); // reinit Items
        };
        img.src = item.src; // let's download image
      }
    });
    this.gallery.init();
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        token: true,
      });
    }
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    if (file.response) {
      console.log(file.response.url);

      //window.open(file.response.url, '_blank');
      this.openGallery(file.response.url);

      this.setState({
        previewImage: file.response.url || file.thumbUrl,
      });
    }
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    console.log(fileList.slice(-1)[0]);
    const file = fileList.slice(-1)[0];
    const status = file.status;
    if (status !== 'uploading') {
    }
    if (status === 'done') {
      message.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${file.name} file upload failed.`);
    }
  };

  render() {
    const { fileList } = this.state;
    const uploadButton = (
      <Button>
        <Icon type="upload" />
        Upload
      </Button>
    );

    const uploadForm = (
      <Upload action="/upload/" accept="image/*" listType="picture" multiple={false} fileList={fileList} onPreview={this.handlePreview} onChange={this.handleChange} beforeUpload={beforeUpload}>
        {fileList.length >= 10 ? null : uploadButton}
      </Upload>
    );

    if (this.state.loading) {
      return <LoadingCompoment isLoading={this.state.loading} />;
    } else {
      return (
        <div>
          <div
            className="pswp"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            ref={div => {
              this.pswpElement = div;
            }}
          >
            <div className="pswp__bg" />

            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                <div className="pswp__item" />
                <div className="pswp__item" />
                <div className="pswp__item" />
              </div>

              <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                  <div className="pswp__counter" />

                  <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                  <button className="pswp__button pswp__button--share" title="Share" />

                  <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                  <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                  <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                      <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div className="pswp__share-tooltip" />
                </div>

                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

                <div className="pswp__caption">
                  <div className="pswp__caption__center" />
                </div>
              </div>
            </div>
          </div>

          <Dropdown overlay={uploadForm} trigger={['click']} placement="bottomCenter">
            {this.props.children}
          </Dropdown>
          <style>
            {`
            .ant-dropdown.ant-dropdown-placement-bottomCenter{
              z-index: 9;
            }
            `}
          </style>
        </div>
      );
    }
  }
}

export default UploadSingleFile;
