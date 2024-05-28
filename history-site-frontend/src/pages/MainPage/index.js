import { Button, Carousel } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/ThongTinChung");
  };
  const handleVR = () => {
    navigate("/3D");
  };
  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };

  return (
    <div>
      <div className="main-background-image"></div>
      <div className="main-content">
        <div className="main-section1"></div>
        <div className="main-section2">
          <div className="main-info-container">
            <div className="main-info main-part">
              <h1 className="main-title">DINH ĐỘC LẬP</h1>
              <div className="main-description">
                Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia
                bằng Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn
                hóa. Ngày 12 tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa
                Xã hội Chủ nghĩa Việt Nam đã ký...
              </div>
              <Button className="main-button-more" onClick={handleReadMore}>
                ĐỌC THÊM
              </Button>
            </div>
            <div className="main-image main-part">
              {/* Thanh trượt */}
              <div className="main-carousel-container">
                <Carousel ref={carouselRef} className="main-carousel">
                  <div>
                    <h3 className="main-carousel-content">
                      <img
                        src={
                          "https://dinhdoclap.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-01-1.jpg"
                        }
                        alt="carousel item 1"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 className="main-carousel-content">
                      <img
                        src={
                          "https://dinhdoclap.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-02-1.jpg"
                        }
                        alt="carousel item 2"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 className="main-carousel-content">
                      <img
                        src={
                          "https://dinhdoclap.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-03-1.jpg"
                        }
                        alt="carousel item 3"
                      />
                    </h3>
                  </div>
                </Carousel>
                <Button
                  className="main-carousel-btn main-carousel-btn-prev"
                  onClick={handlePrev}
                >
                  &lt;
                </Button>

                <Button
                  className="main-carousel-btn main-carousel-btn-next"
                  onClick={handleNext}
                >
                  &gt;
                </Button>
              </div>
            </div>
          </div>
          <div className="main-info-container">
            <div className="main-part">
              <img
                className="main-vr-image"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2022/12/2022-12-23-16_33_29-DINH-DOC-LAP-VR360.png"
                alt="carousel item 1"
              />
              <Button className="main-button-more" onClick={handleVR}>
                VR360
              </Button>
            </div>
            <div className="main-part">
              {/* Thanh trượt */}
              <div className="main-carousel-container">
                <h1 className="main-big-title main-title">
                  DINH ĐỘC LẬP NGÀY NAY
                </h1>
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
    </div>
  );
}

export default MainPage;
