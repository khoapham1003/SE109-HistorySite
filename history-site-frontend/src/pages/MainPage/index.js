import { Button, Carousel } from "antd";
import React, { useRef } from "react";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function MainPage() {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <div>
      <div className="content" />
      <div className="title">DINH ĐỘC LẬP</div>
      <div className="description">
        Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia bằng
        Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn hóa. Ngày 12
        tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa Xã hội Chủ nghĩa
        Việt Nam đã ký...
      </div>
      <Button className="button-more">ĐỌC THÊM</Button>
      <div className="carousel-container">
        <Carousel ref={carouselRef} className="carousel">
          <div>
            <h3 className="carousel-content">
              <img
                src={
                  "https://dinhdoclap.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-01-1.jpg"
                }
                alt="carousel item 1"
              />
            </h3>
          </div>
          <div>
            <h3 className="carousel-content">
              <img
                src={
                  "https://dinhdoclap.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-02-1.jpg"
                }
                alt="carousel item 2"
              />
            </h3>
          </div>
          <div>
            <h3 className="carousel-content">
              <img
                src={
                  "https://dinhdoclap.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-03-1.jpg"
                }
                alt="carousel item 3"
              />
            </h3>
          </div>
        </Carousel>
        <Button className="carousel-btn carousel-btn-prev" onClick={handlePrev}>Prev</Button>
        <Button className="carousel-btn carousel-btn-next" onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

export default MainPage;
