import React, { Component } from "react";
import axios from "axios";
import { Card, Avatar, Col, Row } from "antd";
import UserListCom from "./UserListCom";

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        recent_topics: [],
        recent_replies: []
      }
    };
    const { id } = this.props.match.params;
    this.getData(id);
  }
  getData = id => {
    axios
      .get(` https://cnodejs.org/api/v1/user/${id}`)
      .then(res => {
        this.setState({
          loading: false,
          data: res.data.data
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          data: this.state.data
        });
      });
  };
  render() {
    const { data, loading } = this.state;
    const title = (
      <div>
        <Avatar src={data.avatar_url} />
        <Row>
          <Col xs={24} md={8}>
            <div>用户名：{data.githubUsername}</div>
          </Col>
          <Col xs={24} md={8}>
            <div>积分：{data.score}</div>
          </Col>
          <Col xs={24} md={8}>
            <div>注册时间：{data.create_at}</div>
          </Col>
        </Row>
      </div>
    );
    return (
      <div>
        <Card title={title} loading={loading}>
          {data.recent_topics.length ? (
            <UserListCom
              key="0"
              title="最近发表的主题"
              list={data.recent_topics}
            />
          ) : (
            ""
          )}
          {data.recent_replies.length ? (
            <UserListCom
              key="1"
              title="最近回复的主题"
              list={data.recent_replies}
            />
          ) : (
            ""
          )}
        </Card>
      </div>
    );
  }
}
