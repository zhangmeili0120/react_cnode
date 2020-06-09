import React, { Component } from "react";
import { Affix, Row, Col, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import HeaderMenu from "./HeaderMenu";

export default class MyHeader extends Component {
  render() {
    const dropMenu = <HeaderMenu />;
    return (
      <Affix offsetTop={0}>
        <div className="my_header">
          <Row>
            <Col xs={23} sm={8}>
              <img
                className="logo"
                src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
                alt="logo"
              />
            </Col>
            <Col xs={1} sm={0}>
              <Dropdown overlay={dropMenu}>
                <MenuOutlined
                  style={{
                    fontSize: "16px",
                    color: "#1890ff",
                    marginTop: "8px"
                  }}
                />
              </Dropdown>
            </Col>
            <Col xs={0} sm={16}>
              <HeaderMenu mode="horizontal" />
            </Col>
          </Row>
        </div>
      </Affix>
    );
  }
}
