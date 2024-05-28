import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function MapPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Bản đồ di tích</h1>
        </div>
        <div className="infor-info-container">
          <div className="infor-map">
            <img
              class="aligncenter size-full wp-image-5958 lazyloaded"
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2023/08/Map-1.jpg"
              alt=""
              width="600"
            />
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

export default MapPage;
