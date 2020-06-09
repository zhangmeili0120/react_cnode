import React, { useEffect } from "react";
import { Card, Avatar, Col, Row } from "antd";
import UserListCom from "./UserListCom";
import { useSelector } from "react-redux";
import { useUserDetailData } from "../../store/actions";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const getUserDetailData = useUserDetailData();
  const { data, loading } = useSelector(state => state.user);
  const { id } = useParams();

  useEffect(() => {
    getUserDetailData(id);
  }, [id]);

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
