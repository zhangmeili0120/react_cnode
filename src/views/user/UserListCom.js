import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

export default class UserListCom extends Component {
  render() {
    const { list, title } = this.props;
    return (
      <div>
        <Card title={title}>
          {list.map((item, index) => {
            return (
              <div key={index} className="user_reply">
                <div>
                  <Avatar
                    src={item.author.avatar_url}
                    style={{ marginRight: "15px" }}
                  />
                  <Link to={`/topic/${item.id}`}>{item.title}</Link>
                </div>
                <div className="reply_rt">
                  最后回复：{item.last_reply_at.split("T")[0]}
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    );
  }
}
