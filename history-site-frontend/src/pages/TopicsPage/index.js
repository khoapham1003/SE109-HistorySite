import { Card, List, Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { topics } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function TopicsPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Chuyên đề khác</h1>
        </div>
        <div className="infor-info-divide">
          <div className="infor-list">
            <span>BÀI VIẾT LIÊN QUAN</span>
            <List
              dataSource={topics}
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
            {topics.map((topic, index) => (
              <Link to={`/ChuyenDeKhac/${topic.id}`} key={index}>
                <Card className="infor-news">
                  <div className="infor-img-container">
                    <img width={300} src={topic.img} alt={topic.title} />
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
      <div className="main-section3">
        <h2 className="main-little-title">
          TRƯNG BÀY
          <br /> TỪ DINH NORODOM ĐẾN DINH ĐỘC LẬP <br />
          1868 – 1966
        </h2>
        <Button className="main-button-more" onClick={handleTrungBay}>
          XEM THÊM
        </Button>
      </div>
    </div>
  );
}

export default TopicsPage;
