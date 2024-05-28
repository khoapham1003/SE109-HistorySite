import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../components/data";
import LastestPost from "../../components/LastestPost";

function ActivityPage() {
  return (
    <div>
      <h2>Các Hoạt Động</h2>
      {Activity.map((topic, index) => (
        <Link
          to={`/CacHoatDong/${topic.id}`}
          key={index}
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
        <LastestPost />
      </div>
      <div>
        <h2>Bài viết liên quan</h2>
        <List
          dataSource={Activity}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={
                  <Link to={`/CacHoatDong/${item.id}`}>{item.title}</Link>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ActivityPage;
