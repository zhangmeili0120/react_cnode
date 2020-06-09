import React, { Component } from 'react'
// import data from './data'
import { Card, Avatar } from 'antd';
import HomeTag from '../home/HomeTag'
import {Link} from 'react-router-dom'
import axios from 'axios'
import RepliesList from './RepliesList';

class HomeDetailPage extends Component {
  constructor(props) {
    super(props);
    const {id} = this.props.match.params;

    this.state = {
      loading: true,
      data: {
        author: {},
        create_at: '',
        replies: [],
        reply_count: 0
      }
    }
    this.getData(id);
  }
  
  getData = (id) => {
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res => {
        this.setState({
          loading: false,
          data: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
          data: {}
        })
      })
  }

  render() {
    
    const {loading, data} = this.state;
    const item = data;
    const title = (
      <div>
        <h2>{item.title}</h2>
        <HomeTag item={item}/>
        <Avatar src={item.author.avatar_url} />
        <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
        <span>发表于：{item.create_at.split('T')[0]}</span>
      </div>
    )
    return (
      <React.Fragment>

        <Card title={title} bordered={false} loading={loading}>
          <div dangerouslySetInnerHTML={{__html: item.content}}></div>
        </Card>
        <RepliesList replies={item.replies} reply_count={item.reply_count} loading={loading} />
      </React.Fragment>

    )
  }
}

export default HomeDetailPage;
