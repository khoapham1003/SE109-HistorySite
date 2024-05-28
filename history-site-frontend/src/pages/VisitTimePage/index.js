import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function VisitTimePage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Giờ tham quan và Giá vé</h1>
        </div>
        <div className="infor-info-container">
          <div className="infor-map">
            <img
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/tham-quan-gia-ve-final-3.jpg"
              alt=""
              width="600"
            />
          </div>

          <p>
            Di tích lịch sử Dinh Độc Lập mở cửa phục vụ khách tham quan tất cả
            các ngày trong tuần, kể cả thứ Bảy, Chủ nhật và Lễ, Tết (trừ các
            trường hợp đặc biệt, sẽ được thông báo tại đây).
          </p>
          <p>
            (Các trường hợp được miễn, giảm mức phí tham quan Di tích lịch sử
            Dinh Độc Lập thực hiện theo quy định tại Thông tư 182/2016/TT-BTC
            ngày 08/11/2016 của Bộ Tài chính quy định mức thu, chế độ thu, nộp,
            quản lý và sử dụng phí tham quan di tích lịch sử Dinh Độc Lập).
          </p>
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

export default VisitTimePage;
