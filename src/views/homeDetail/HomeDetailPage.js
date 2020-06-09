import React, { useEffect } from "react";
// import data from './data'
import { Card, Avatar } from "antd";
import HomeTag from "../home/HomeTag";
import { Link, useParams } from "react-router-dom";
import RepliesList from "./RepliesList";
import { useHomeDetailData } from "../../store/actions";
import { useSelector } from "react-redux";

function HomeDetailPage() {
  const { id } = useParams();
  const getHomeDetailData = useHomeDetailData();
  const { loading, data } = useSelector(state => state.topic);

  useEffect(() => {
    getHomeDetailData(id);
  }, [id]);

  const item = data;
  const title = (
    <div>
      <h2>{item.title}</h2>
      <HomeTag item={item} />
      <Avatar src={item.author.avatar_url} />
      <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
      <span>发表于：{item.create_at.split("T")[0]}</span>
    </div>
  );
  return (
    <React.Fragment>
      <Card title={title} bordered={false} loading={loading}>
        <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
      </Card>
      <RepliesList
        replies={item.replies}
        reply_count={item.reply_count}
        loading={loading}
      />
    </React.Fragment>
  );
}

export default HomeDetailPage;
