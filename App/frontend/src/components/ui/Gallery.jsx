/**
 * Created by hao.cheng on 2017/5/6.
 */
import React from "react";
import { Row, Col, Card, Button } from "antd";
import PhotoSwipe from "photoswipe";
import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import axios from "axios";

import LoadingCompoment from "../LoadingCompoment";

const { Meta } = Card;

class Gallery extends React.Component {
  state = {
    gallery: null,
    loading: false,
    data: [],
    dataload: [],
    limit: 10,
    maxlimit: 50
  };
  chunkArray = (myArray, chunk_size) => {
    var results = [];

    myArray.map((data, i) => {
      const predata = results[i % chunk_size]
        ? [...results[i % chunk_size], data]
        : [data];
      results[i % chunk_size] = predata;
      return results[i % chunk_size];
    });

    return results;
  };
  componentDidMount = () => {
    this.setState({ loading: true });

    const user = this.props.userData ? this.props.userData : null;

    if (user) {
      axios
        .get("/findImageUser", { headers: { Authorization: user } })
        .then(res => {
          this.setState({
            data: res.data ? res.data.reverse() : null,
            loading: false
          });

          this.setState({
            maxlimit: this.state.data.length,
            dataload: this.chunkArray(
              this.state.data.slice(0, this.state.limit),
              5
            )
          });
        });
    } else {
      axios.get("/findImage").then(res => {
        this.setState({
          data: res.data.reverse(),
          loading: false
        });

        this.setState({
          maxlimit: this.state.data.length,
          dataload: this.chunkArray(
            this.state.data.slice(0, this.state.limit),
            5
          )
        });
      });
    }
  };
  componentWillUnmount = () => {
    this.closeGallery();
  };
  openGallery = item => {
    const items = [
      {
        src: item,
        w: 0,
        h: 0
      }
    ];
    const pswpElement = this.pswpElement;
    const options = { index: 0 };
    this.gallery = new PhotoSwipe(
      pswpElement,
      PhotoswipeUIDefault,
      items,
      options
    );
    this.gallery.listen("gettingData", (index, item) => {
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
  closeGallery = () => {
    if (!this.gallery) return;
    this.gallery.close();
  };

  onLoadMore = async () => {
    await this.setState({
      limit: this.state.limit + 10
    });
    await this.setState({
      dataload: this.chunkArray(this.state.data.slice(0, this.state.limit), 5)
    });
  };

  render() {
    const imgsTag = this.state.dataload.map(v1 =>
      v1.map(v2 => (
        <div className="gutter-box" key={v2._id}>
          <Card
            hoverable
            cover={
              <img
                onClick={() => this.openGallery(v2.url)}
                alt="example"
                width="100%"
                src={v2.url}
              />
            }
          >
            <Meta description={v2.type} title={v2.name} />
          </Card>
        </div>
      ))
    );

    return this.state.loading ? (
      <LoadingCompoment isLoading={this.state.loading} />
    ) : (
      <div className="gutter-example button-demo">
        <Row gutter={10} style={{ margin: 0 }}>
          <Col className="gutter-row" md={5}>
            {imgsTag[0]}
          </Col>
          <Col className="gutter-row" md={5}>
            {imgsTag[1]}
          </Col>
          <Col className="gutter-row" md={5}>
            {imgsTag[2]}
          </Col>
          <Col className="gutter-row" md={5}>
            {imgsTag[3]}
          </Col>
          <Col className="gutter-row" md={4}>
            {imgsTag[4]}
          </Col>
        </Row>
        {this.state.limit > this.state.maxlimit ? (
          ""
        ) : (
          <Button
            type="primary"
            onClick={this.onLoadMore}
            size="large"
            style={{
              margin: "8vh auto",
              display: "table"
            }}
          >
            Load More
          </Button>
        )}

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

                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />

                <button
                  className="pswp__button pswp__button--share"
                  title="Share"
                />

                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />

                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />

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

              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />

              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />

              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
      </div>
    );
  }
}

export default Gallery;
