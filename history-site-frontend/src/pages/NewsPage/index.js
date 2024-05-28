import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { News } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function NewsPage() {
  return (
    <div>
      <h2> Tin Tức</h2>
      {News.map((topic, index) => (
        <Link
          to={`/TinTuc/${topic.id}`}
          key={topic.id}
          style={{ textDecoration: "none" }}
        >
          <Card title={topic.title} style={{ marginBottom: "20px" }}>
            <img
              src={Array.isArray(topic.img) ? topic.img[0] : topic.img}
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
          dataSource={News}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={<Link to={`/TinTuc/${item.id}`}>{item.title}</Link>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default NewsPage;
