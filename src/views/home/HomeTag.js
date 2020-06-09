import React, { Component } from "react";
import { Tag } from "antd";

export default class HomeTag extends Component {
  render() {
    const { item } = this.props;
    let obj = {};
    if (item.top) {
      obj = { 置顶: "red" };
    } else if (item.good) {
      obj = { 精华: "magenta" };
    } else {
      obj =
        item.tab === "share"
          ? { 分享: "green" }
          : item.tab === "ask"
          ? { 问答: "blue" }
          : item.tab === "dev"
          ? { 测试: "orange" }
          : { 招聘: "purple" };
    }

    return (
      <Tag color={obj[Object.keys(obj)[0]]}>{Object.keys(obj)[0]}</Tag>
    );
  }
}
