import React, { Component } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  QuestionCircleOutlined,
  BookOutlined
} from "@ant-design/icons";
import { NavLink, withRouter } from "react-router-dom";

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "0"
    }
  }
  componentDidMount() {
    this.changeSelectedKey(this.props.location.pathname)
  }
  changeSelectedKey(pathname) {
    // 根据当前url修改state,初始化和切换路由后参数不同
    const map = {
      "index": "0",
      "about": "1",
      "book": "2"
    }
    const keysarr = Object.keys(map)
    for (let i = 0;i < keysarr.length; i++) {
      if (pathname.split('/')[1] === keysarr[i]) {
        this.setState({
          selected: map[keysarr[i]]
        });
        return;
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    // 每次切换路由会执行这里
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.changeSelectedKey(nextProps.location.pathname)
    }
    return true;
  }
  render() {
    const { mode } = this.props;
    const {selected} = this.state;
    const {pathname} = this.props.location;
    
    return (
      <Menu mode={mode} defaultSelectedKeys={["0"]} selectedKeys={[selected]} className="header_menu">
        <Menu.Item key="0">
          <NavLink to="/index/all" isActive={() => pathname.split('/')[1] === 'index'}>
            <HomeOutlined />
            首页
          </NavLink>
        </Menu.Item>
        <Menu.Item key="1">
          <NavLink to="/about" isActive={() => pathname.split('/')[1] === 'about'}>
            <QuestionCircleOutlined />
            关于
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/book" isActive={() => pathname.split('/')[1] === 'book'}>
            <BookOutlined />
            教程
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(HeaderMenu)
