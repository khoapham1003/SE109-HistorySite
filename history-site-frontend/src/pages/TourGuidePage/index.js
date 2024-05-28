import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { List, Button } from "antd";
import { News } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function TourGuidePage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Hình thức tham quan</h1>
        </div>
        <div className="infor-info-divide">
          <div className="infor-list">
            <span>BÀI VIẾT LIÊN QUAN</span>
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
            <br />
            <br />
            <div>
              <LatestPost />
            </div>
          </div>
          <div className="infor-info-container">
            <div className="infor-little-title">
              Tham quan khuôn viên Dinh Độc Lập bằng xe điện (khoảng 10 phút)
            </div>
            <p>
              Với hệ thống xe điện được trang bị hiện đại, thân thiện với môi
              trường, đón khách ngay tại lối vào, quí du khách được thoải mái
              ngắm nhìn toàn cảnh khuôn viên dinh rộng 12ha, vừa được tìm hiểu
              về những điểm nổi bật cũng như giá trị lịch sử của di tích qua hệ
              thống thuyết minh tự động tích hợp trên xe điện.
            </p>
            <p>
              Du lịch bằng xe điện vừa thuận tiện cho khách đi du lịch gia đình
              hoặc theo nhóm, vừa mang đến cho du khách cảm giác an toàn, thích
              thú khi được hòa mình vào thiên nhiên, để khám phá vẻ đẹp truyền
              thống văn hóa, lịch sử của thành phố.
            </p>
            <div className="infor-img-container">
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/IMG_0431.jpg"
                alt=""
                width="500"
                height="253"
              />
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/IMG_0437.jpg"
                alt=""
                width="500"
                height="253"
              />
            </div>
            <div className="infor-little-title">Tự do trải nghiệm</div>
            <p>
              Quí khách sẽ được tự do trải nghiệm và tìm hiểu thông qua hệ thống
              các pano, bảng chỉ dẫn, bảng tên phòng hiện đại, theo tiêu chuẩn
              quốc tế thay thế cho hình thức tham quan chờ tổ chức thành đoàn
              trước đây.
            </p>
            <div className="infor-little-title">Hướng dẫn viên giới thiệu</div>
            <p>
              Quý khách có thể liên hệ và đăng ký thuyết minh viên tại Quầy
              thông tin để được phục vụ theo mức phí qui định của Di tích với số
              lượng khách tối đa một đoàn là 25 người lớn hoặc 50 trẻ em (từ 15
              tuổi trở xuống).
            </p>
            <div className="infor-img-container">
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/IMG_2194.jpg"
                alt=""
                width="500"
                height="253"
              />
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/IMG_3732.jpg"
                alt=""
                width="500"
                height="253"
              />
            </div>
            <div className="infor-little-title">
              Sử dụng tai nghe thuyết minh tự động{" "}
            </div>
            <p>
              Hệ thống audio tour (thuyết minh bằng tai nghe điện tử) đã chính
              thức được đưa vào sử dụng để phục vụ khách tham quan di tích lịch
              sử Dinh Độc Lập từ tháng 8 năm 2017, với 10 thứ tiếng Anh, Pháp,
              Nhật, Trung Quốc, Hàn Quốc, Đức, Tây Ban Nha, Nga, Thái Lan và
              Việt Nam, đáp ứng nhu cầu của nhiều đối tượng khách tham quan từ
              khắp nơi trên thế giới.
            </p>
            <div className="infor-img-container">
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/IMG_2236-1.jpg"
                alt=""
                width="500"
                height="253"
              />
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/IMG_2217.jpg"
                alt=""
                width="500"
                height="253"
              />
            </div>
            <p>
              Sau chương trình tham quan, tại điểm dừng chân, Quí khách có thể
              xem thêm bộ phim tư liệu “Lịch sử Dinh Độc Lập” thời lượng 30 phút
              tại các phòng chiếu phim tiện nghi, hiện đại, hỗ trợ 04 thứ tiếng
              Anh, Pháp, Nhật, Trung Quốc giúp cho chuyến tham quan di tích của
              Quí khách thêm sinh động và lý thú.
            </p>
            <p>
              Quý khách có thể đăng ký hình thức tham quan qua số điện thoại
              080.85039 – 080.85120 để được sắp xếp thời gian hợp lý và thuận
              tiện
            </p>
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

export default TourGuidePage;
