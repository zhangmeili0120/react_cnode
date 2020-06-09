import React, { Component } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import HomeTag from "./HomeTag";
import { connect } from "react-redux";
import {getHomeData} from "../../store/actions";

class HomeList extends Component {
  constructor(props) {
    super(props);
    const { type } = this.props.match.params;
    this.state = {
      page: 1
    };
    this.getData(type, 1);
  }
  componentWillReceiveProps(nextProps) {
    const { type } = this.props.match.params;
    const newType = nextProps.match.params.type;

    if (type !== newType) {
      this.getData(newType, 1);

    }
  }
  getData(type, page) {
    const { dispatch } = this.props;
    getHomeData(dispatch, type, page);
  }
  render() {
    const { type } = this.props.match.params;
    const { page } = this.state;
    const { data, loading } = this.props;
    return (
      <List
        className="home_page_list"
        itemLayout="horizontal"
        dataSource={data}
        loading={loading}
        pagination={{
          current: page,
          total: 5000,
          onChange: page => {
            this.setState({
              loading: true,
              page
            });
            this.getData(type, page);
          }
        }}
        renderItem={item => (
          <List.Item
            actions={[
              <span>回复 {item.reply_count}</span>,
              <span>访问 {item.visit_count}</span>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={
                <div>
                  <HomeTag item={item} />
                  <Link to={`/topic/${item.id}`}>{item.title}</Link>
                </div>
              }
              description={
                <div>
                  <Link to={`/user/${item.author.loginname}`}>
                    {item.author.loginname}
                  </Link>
                  <span style={{ marginLeft: "10px" }}>
                    发表于：{item.create_at.split("T")[0]}
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default connect(state => {
  return state.home;
})(HomeList);
