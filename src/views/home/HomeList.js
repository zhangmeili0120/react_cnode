import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import { Link, useParams } from "react-router-dom";
import HomeTag from "./HomeTag";
import { useSelector } from "react-redux";
import { useHomeData } from "../../store/actions";

export default function HomeList() {
  const getHomeData = useHomeData();
  const { data, loading } = useSelector(state => state.home);
  const { type } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getHomeData(type, page)
  }, [page, type]);

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
          setPage(page);
          getHomeData(type, page);
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