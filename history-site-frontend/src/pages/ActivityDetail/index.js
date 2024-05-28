import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Activity } from "../../components/data";
import { List, Button } from "antd";
import LatestPost from "../../components/LastestPost";

function ActivityDetailPage() {
  const navigate = useNavigate();
  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  const { index } = useParams();
  const activity = Activity[index];
  function convertNewlinesToBreaks(text) {
    return text.split("\n").map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br /> <br />
      </React.Fragment>
    ));
  }
  function ExhibitionContent({ content }) {
    return <div>{convertNewlinesToBreaks(content)}</div>;
  }
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>{activity.title}</h1>
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
            <ExhibitionContent content={activity.content} />
            <div className="infor-img-container detail-page-img">
              {Array.isArray(activity.img) ? (
                activity.img.map((image, idx) => (
                  <img
                    width={600}
                    key={idx}
                    src={image}
                    alt={`${activity.title} ${idx + 1}`}
                  />
                ))
              ) : (
                <img width={600} src={activity.img} alt={activity.title} />
              )}
            </div>
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

export default ActivityDetailPage;
