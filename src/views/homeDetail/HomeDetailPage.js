import React, { Component } from "react";
// import data from './data'
import { Card, Avatar } from "antd";
import HomeTag from "../home/HomeTag";
import { Link } from "react-router-dom";
import RepliesList from "./RepliesList";
import { getHomeDetailData } from "../../store/actions";
import { connect } from "react-redux";

class HomeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.getData();
  }

  getData = () => {
    const { id } = this.props.match.params;
    const { dispatch } = this.props;
    getHomeDetailData(dispatch, id);
  };

  render() {
    const { loading, data } = this.props;
    const item = data;
    const title = item.author ? (
      <div>
        <h2>{item.title}</h2>
        <HomeTag item={item} />
        <Avatar src={item.author.avatar_url} />
        <Link to={`/user/${item.author.loginname}`}>
          {item.author.loginname}
        </Link>
        <span>发表于：{item.create_at.split("T")[0]}</span>
      </div>
    ) : (
      ""
    );
    // return item.replies && item.replies.length ? (
      return <React.Fragment>
        <Card title={title} bordered={false} loading={loading}>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </Card>
        <RepliesList
          replies={item.replies}
          reply_count={item.reply_count}
          loading={loading}
        />
      </React.Fragment>
    // ) : (
    //   ""
    // );
  }
}

export default connect(state => state.topic)(HomeDetailPage);
