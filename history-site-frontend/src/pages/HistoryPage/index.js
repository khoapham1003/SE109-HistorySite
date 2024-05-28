import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function HistoryPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Lịch sử Dinh Độc Lập</h1>
        </div>
        <div className="infor-info-container">
          <p>
            Năm 1858, thực dân Pháp nổ súng tấn công Ðà Nẵng mở đầu cuộc chiến
            tranh xâm lược Việt Nam. Năm 1867, Pháp chiếm xong lục tỉnh Nam kỳ
            (Biên Hoà, Gia Định, Ðịnh Tường, Vĩnh Long, An Giang, Hà Tiên). Năm
            1868, chính quyền Pháp bắt đầu cho thiết kế và xây dựng tại trung
            tâm thành phố Sài Gòn một Dinh thự làm nơi ở cho Thống đốc Nam kỳ,
            khi xây xong có tên gọi là Dinh Norodom.
          </p>
          <p>
            Công trình do viên thống đốc Pháp tại miền Nam Việt Nam là La
            Grandière đặt viên đá đầu tiên khởi công xây dựng ngày 23/2/1868 và
            hoàn tất vào năm 1871. Từ 1887 – 1945, nhiều đời toàn quyền Pháp đã
            sử dụng dinh thự này làm nơi ở và làm việc trong suốt thời kỳ xâm
            lược Ðông Dương.
          </p>
          <div className="infor-img-container">
            <img
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/1.jpg"
              data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/1.jpg"
              alt=""
              width="500"
              height="334"
              data-was-processed="true"
            />
          </div>
          <p>
            Ngày 09/3/1945, phát xít Nhật đảo chính Pháp, độc chiếm Ðông Dương,
            Dinh Norodom là nơi làm việc của chính quyền Nhật ở Việt Nam.
          </p>
          <p>
            Tháng 9/1945, Nhật thất bại trong chiến tranh thế giới thứ II, Pháp
            trở lại chiếm Nam Bộ, Dinh Norodom là trụ sở làm việc của bộ máy
            chiến tranh xâm lược của Pháp ở Việt Nam.
          </p>
          <p>
            Ngày 07/5/1954, thực dân Pháp thất bại nặng nề trong chiến dịch Ðiện
            Biên Phủ buộc phải ký Hiệp định Gienève và rút khỏi Việt Nam. Mỹ tìm
            cách nhảy vào thực hiện ý đồ xâm chiếm miền Nam, Việt Nam tạm thời
            bị chia cắt thành 2 miền, miền Bắc là Việt Nam Dân chủ Cộng hòa, còn
            miền Nam là Quốc gia Việt Nam.
          </p>
          <p>
            Ngày 07/9/1954, Dinh Norodom được bàn giao giữa đại diện chính phủ
            Pháp, Ðại tướng Paul Ely với đại diện chính quyền Sài Gòn Thủ tướng
            Ngô Ðình Diệm. Ngô Ðình Diệm đã quyết định đổi tên Dinh thành Dinh
            Ðộc Lập. Ngày 26/10/1955, Thủ tướng Ngô Đình Diệm đã truất phế Quốc
            trưởng Bảo Đại, thành lập chính quyền Việt Nam Cộng hòa và lên làm
            Tổng thống. Từ đó Dinh Ðộc Lập trở thành nơi ở của gia đình Ngô Ðình
            Diệm và là nơi chứng kiến nhiều biến cố chính trị. Ngô Ðình Diệm đã
            duy trì chế độ độc tài gia đình trị, dồn dân vào ấp chiến lược, thi
            hành luật 10/59, không những gây phẫn uất trong nhân dân mà còn gây
            ra sự bất bình trong nội các chính quyền Sài Gòn.
          </p>
          <div className="infor-img-container">
            <img
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/2.jpg"
              data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/2.jpg"
              alt=""
              width="500"
              height="332"
              data-was-processed="true"
            />
          </div>
          <p>
            Ngày 27/02/1962, phe đảo chính đã cử hai viên phi công quân đội Sài
            Gòn là Nguyễn Văn Cử và Phạm Phú Quốc lái 2 máy bay AD6 ném bom làm
            sập toàn bộ phần chính cánh trái của Dinh. Do không thể khôi phục
            lại, Ngô Ðình Diệm đã cho san bằng và xây một dinh thự mới ngay trên
            nền đất cũ theo đồ án thiết kế của Kiến trúc sư Ngô Viết Thụ – người
            Việt Nam đầu tiên đạt giải Khôi nguyên La Mã.
          </p>
          <p>
            Ngô Ðình Diệm quyết định khởi công xây dựng Dinh ngày 01/7/1962.
            Trong thời gian xây dựng Dinh mới, gia đình Ngô Ðình Diệm tạm thời
            chuyển sang sống tại Dinh Gia Long (hiện nay là Bảo tàng thành phố
            Hồ Chí Minh). Công trình đang xây dựng dở dang thì Ngô Ðình Diệm bị
            phe đảo chính giết chết ngày 02/11/1963. Do vậy, ngày khánh thành
            Dinh 31/10/1966, người chủ tọa buổi lễ là Nguyễn Văn Thiệu, Chủ tịch
            Uỷ ban lãnh đạo quốc gia. Ngô Ðình Diệm là người khởi xướng xây dựng
            Dinh Ðộc Lập nhưng ông ta không được sống ở đây một ngày nào, mà
            người có thời gian sống ở Dinh thự này lâu nhất là Tổng thống Đệ nhị
            Việt Nam Cộng hòa Nguyễn Văn Thiệu (từ tháng 10/1967 đến 21/4/1975).
          </p>
          <div className="infor-img-container">
            <img
              class="alignnone wp-image-773 lazyloaded"
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/06/1-xe-tang-huc-cong-Dinh-trua-3041975.jpg"
              data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/06/1-xe-tang-huc-cong-Dinh-trua-3041975.jpg"
              alt=""
              width="334"
              height="252"
              data-was-processed="true"
            ></img>

            <img
              class="alignnone wp-image-391 lazyloaded"
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/3.jpg"
              data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/3.jpg"
              alt=""
              width="336"
              height="248"
              data-was-processed="true"
            ></img>
          </div>
          <p>Nhưng điều gì phải đến đã đến.</p>
          <p>
            Bằng chiến dịch Hồ Chí Minh lịch sử, 10h45’ ngày 30/4/1975, xe tăng
            mang số hiệu 843 của quân giải phóng thuộc Ðại đội 4, Tiểu đoàn 1,
            Lữ đoàn xe tăng 203, Quân đoàn 2 dẫn đầu đội hình đã húc nghiêng
            cổng phụ của Dinh Ðộc Lập, tiếp đó xe tăng mang số hiệu 390 đã húc
            tung cổng chính tiến thẳng vào Dinh. 11h30’ cùng ngày, Trung úy Bùi
            Quang Thận – Ðại đội trưởng chỉ huy xe tăng 843 đã hạ lá cờ 3 sọc
            xuống, kéo lá cờ mặt trận dân tộc giải phóng miền Nam Việt Nam lên.
            Cờ phấp phới tung bay trên nóc Dinh, kết thúc 30 năm chiến tranh
            gian khổ và anh dũng của dân tộc Việt Nam. Cũng chính vào giờ phút
            này, Tổng thống cuối cùng của chế độ Việt Nam Cộng hòa là Dương Văn
            Minh cùng toàn bộ nội các của chính quyền Sài Gòn phải tuyên bố đầu
            hàng vô điều kiện chính quyền cách mạng. Dưới sự lãnh đạo của Ðảng
            Cộng sản Việt Nam, quân và dân ta đã thực hiện được ý nguyện của Chủ
            tịch Hồ Chí Minh: Nhân dân 2 miền Nam – Bắc sum họp một nhà. Tinh
            thần và ý chí của nhân dân Việt Nam là độc lập dân tộc và thống nhất
            đất nước đã toàn thắng.
          </p>
          <div className="infor-img-container">
            <img
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/hinh-4.jpg"
              data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/hinh-4.jpg"
              alt=""
              width="500"
              height="253"
              data-lazy-srcset="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/hinh-4.jpg 800w, https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/hinh-4-768x388.jpg 768w"
              data-lazy-sizes="(max-width: 500px) 100vw, 500px"
              sizes="(max-width: 500px) 100vw, 500px"
              srcset="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/hinh-4.jpg 800w, https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/hinh-4-768x388.jpg 768w"
              data-was-processed="true"
            />
          </div>
          <p>
            Ngày nay, Dinh Ðộc Lập là di tích quốc gia đặc biệt được đông đảo du
            khách trong nước và nước ngoài đến tham quan và là nơi hội họp, tiếp
            khách của các cấp lãnh đạo trung ương cũng như của thành phố.
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

export default HistoryPage;
