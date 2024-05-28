import React from "react";
import { Link, useParams } from "react-router-dom";
import { News } from "../../components/data";
import { List } from "antd";
import LatestPost from "../../components/LastestPost";

function NewsDetailPage() {
  const { index } = useParams();
  const news = News[index];

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>

      {Array.isArray(news.img) ? (
        news.img.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${news.title} ${idx + 1}`}
            style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
          />
        ))
      ) : (
        <img
          src={news.img}
          alt={news.title}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        />
      )}
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

export default NewsDetailPage;
