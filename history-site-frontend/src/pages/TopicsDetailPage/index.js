import React from "react";
import { Link, useParams } from "react-router-dom";
import { topics } from "../../components/data";
import { List } from "antd";
import LatestPost from "../../components/LastestPost";

function TopicDetailPage() {
  const { index } = useParams();
  const topic = topics[index];

  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.content}</p>
      <img
        src={topic.img}
        alt={topic.title}
        style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
      />
      <div>
        <LatestPost />
      </div>
      <div>
        <h2>Bài viết liên quan</h2>
        <List
          dataSource={topics}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={
                  <Link to={`/ChuyenDeKhac/${item.id}`}>{item.title}</Link>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default TopicDetailPage;
