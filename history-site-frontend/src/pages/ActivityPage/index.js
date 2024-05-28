import { Card, List, Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Activity } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function ActivityPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Các hoạt động</h1>
        </div>
        <div className="infor-info-divide">
          <div className="infor-list">
            <span>BÀI VIẾT LIÊN QUAN</span>
            <List
              dataSource={Activity}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={<Link to={`/TinTuc/${item.id}`}>{item.title}</Link>}
                  />
                </List.Item>
              )}
            />
            <br />
            <br />
            <div>
              <LatestPost />
            </div>
          </div>
          <div className="infor-info-container">
            {Activity.map((topic, index) => (
              <Link to={`/CacHoatDong/${topic.id}`} key={index}>
                <Card className="infor-news">
                  <div className="infor-img-container">
                    <img
                      src={Array.isArray(topic.img) ? topic.img[0] : topic.img}
                      alt={topic.title}
                      width={300}
                    />
                  </div>
                  <div>
                    <span className="infor-news-title">{topic.title}</span>
                    <p>{topic.content.split(" ").slice(0, 50).join(" ")}...</p>
                    <Button
                      className="main-button-more"
                      onClick={navigate(`/TinTuc/${topic.id}`)}
                    >
                      XEM THÊM
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
