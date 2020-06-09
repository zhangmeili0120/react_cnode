import React, { Component } from 'react'
import {Card, Avatar} from 'antd'
import {Link} from 'react-router-dom'

export default class RepliesList extends Component {
  render() {
    const {replies, reply_count, loading} = this.props;
    
    return (
      <Card title={`${reply_count}条回复`} loading={loading}>
        {
          replies.map(item => {
            return <div key={item.id} className="reply_item">
              <div>
                <h2>{item.title}</h2>
                <Avatar src={item.author.avatar_url} />
                <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                <span style={{marginLeft: '15px'}}>发表于：{item.create_at.split('T')[0]}</span>
              </div>
              <div dangerouslySetInnerHTML={{__html: item.content}}></div>
            </div>
          })
        }
      </Card>
    )
  }
}
