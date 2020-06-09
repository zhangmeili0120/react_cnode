import React, { Component } from 'react'
import {Menu } from 'antd'
import { NavLink, Redirect,Route,Switch } from 'react-router-dom'
import HomeList from './HomeList'

const header_nav = [
  {
    type: 'all',
    txt: '全部'
  },
  {
    type: 'good',
    txt: '精华'
  },
  {
    type: 'share',
    txt: '分享'
  },
  {
    type: 'ask',
    txt: '问答'
  },
  {
    type: 'job',
    txt: '招聘'
  },
  {
    type: 'dev',
    txt: '客户端测试'
  }
]

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowKeys: ["all"]
    }
  }
  static getDerivedStateFromProps(props, state) {
    const {pathname} = props.location;
    const pathnameArr = pathname.split('/')
    return {
      nowKeys: pathnameArr[2]
    }
  }
  render() {
    const {nowKeys} = this.state;
    return (
      <div>
        {/* 按钮导航 */}
        <Menu mode="horizontal" selectedKeys={[nowKeys]}>
          {
            header_nav.map(item => {
              return <Menu.Item key={item.type}><NavLink to={item.type} exact>{item.txt}</NavLink></Menu.Item>
            })
          }
        </Menu>
        {/* 接下来不配置页面，配置路由，匹配页面 */}
        <Switch>
          <Route path="/index" exact render={() => <Redirect to="/index/all" />} />
          <Route path="/index/:type" render={
            (props) => {
              const indexNavList = ['all', 'ask', 'share', 'dev', 'job', 'good']
              const {type} = props.match.params;
              return indexNavList.includes(type) ? <HomeList {...props} /> : <div>页面飞走啦！</div>
            }
          } />
          <Route render={() => <div>页面飞走啦</div>} />
        </Switch>
      </div>
    )
  }
}
