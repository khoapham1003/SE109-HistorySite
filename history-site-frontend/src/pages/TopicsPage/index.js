import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { topics } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function TopicsPage() {
  return (
    <div>
      <h2> Chuyên đề khác</h2>
      {topics.map((topic, index) => (
        <Link
          to={`/ChuyenDeKhac/${topic.id}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <Card title={topic.title} style={{ marginBottom: "20px" }}>
            <img
              src={topic.img}
              alt={topic.title}
              style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
            />
            <p>{topic.content.split(" ").slice(0, 50).join(" ")}...</p>
          </Card>
        </Link>
      ))}
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

export default TopicsPage;
