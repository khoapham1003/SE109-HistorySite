import React from "react";
import { Link, useParams } from "react-router-dom";
import { Activity } from "../../components/data";
import { List } from "antd";
import LatestPost from "../../components/LastestPost";

function ActivityDetailPage() {
  const { index } = useParams();
  const activity = Activity[index];

  return (
    <div>
      <h1>{activity.title}</h1>
      <p>{activity.content}</p>
      {Array.isArray(activity.img) ? (
        activity.img.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${activity.title} ${idx + 1}`}
            style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
          />
        ))
      ) : (
        <img
          src={activity.img}
          alt={activity.title}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        />
      )}
      <div>
        <LatestPost />
      </div>
      <div>
        <h2>Bài viết liên quan</h2>
        <List
          dataSource={Activity}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={<Link to={`/CacHoatDong/${item.id}`}>{item.title}</Link>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ActivityDetailPage;
