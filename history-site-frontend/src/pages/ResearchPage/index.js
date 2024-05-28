import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Research } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function ResearchPage() {
  return (
    <div>
      <h2> Nghiên Cứu và Sưu Tầm</h2>
      {Research.map((topic, index) => (
        <Link
          to={`/NghienCuuSuuTam/${topic.id}`}
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
        <LatestPost />
      </div>
      <div>
        <h2>Bài viết liên quan</h2>
        <List
          dataSource={Research}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={
                  <Link to={`/NghienCuuSuuTam/${item.id}`}>{item.title}</Link>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ResearchPage;
