import React, { Component } from 'react'
import { Card, Avatar} from 'antd';
import { Link } from 'react-router-dom';

export default class UserListCom extends Component {
  render() {
    const {list, title} = this.props;
    return (
      <div>
        <Card title={title}>
          {
            list.map((item, index) => {
              return (
                <div key={index} style={{lineHeight: '50px'}}>
                  <Avatar src={item.author.avatar_url} style={{marginRight: '15px'}} />
                  <Link to={`/topic/${item.id}`}>{item.title}</Link>
                  <span style={{float: "right"}}>最后回复：{item.last_reply_at.split('T')[0]}</span>
                </div>
              )
            })
          }
        </Card>
      </div>
    )
  }
}
