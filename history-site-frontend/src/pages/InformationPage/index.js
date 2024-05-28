import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function InforPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };

  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Hội trường Thống Nhất</h1>
        </div>
        <div className="infor-info-container">
          <div>
            Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia bằng
            Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn hóa. Ngày
            12 tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa Xã hội Chủ
            nghĩa Việt Nam đã ký Quyết định số 1272/QĐ-TTg xếp hạng Di tích lịch
            sử Dinh Độc Lập là một trong 10 di tích quốc gia đặc biệt đầu tiên
            của cả nước.
          </div>
          <br />
          <div>
            Cơ quan quản lý Di tích lịch sử Dinh Độc Lập là Hội trường Thống
            Nhất. Căn cứ Quyết định số 709/QĐ-VPCP ngày 14 tháng 6 năm 2013 của
            Bộ trưởng, Chủ nhiệm Văn phòng Chính phủ qui định chức năng, nhiệm
            vụ, quyền hạn và cơ cấu tổ chức của Hội trường Thống Nhất, thì Hội
            trường Thống Nhất là đơn vị sự nghiệp công lập thuộc Văn phòng Chính
            phủ có chức năng quản lý, bảo tồn, tôn tạo Di tích lịch sử Dinh Độc
            Lập; phục vụ đại biểu, khách tham dự các cuộc họp, hội nghị của
            Chính phủ, Thủ tướng Chính phủ và Văn phòng Chính phủ; các hội nghị
            và hoạt động khác của Đảng, Nhà nước, Quốc hội khi có yêu cầu; được
            tận dụng cơ sở vật chất, lao động để kinh doanh dịch vụ theo qui
            định của pháp luật.
          </div>
          <div>
            <div>Thông tin Hội trường Thống Nhất</div>
            <ul>
              <li>Phòng Nghiệp vụ Thuyết minh</li>
              <li>Phòng Kế hoạch Tài vụ</li>
              <li>Phòng Bảo vệ</li>
              <li>Phòng Hành chính Tổ chức</li>
              <li>Phòng Quản trị</li>
              <li>Nhà khách 108 Nguyễn Du, quận 1, thành phố Hồ Chí Minh</li>
              <li>
                Nhà khách 17 Thùy Vân, thành phố Vũng Tàu, tỉnh Bà Rịa – Vũng
                Tàu
              </li>
            </ul>
          </div>
          <div className="infor-little-title">Sơ đồ tổ chức:</div>
          <div className="infor-img-container">
            <img
              className="mfp-img lazyloading"
              src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/1.png"
              data-was-processed="true"
              alt="Sơ đồ tổ chức"
            />
          </div>
          <div>
            Trong nhiều năm qua, tập thể cán bộ, nhân viên Hội trường Thống Nhất
            luôn đoàn kết nhất trí cao, phát huy cao ý thức trách nhiệm đối với
            công việc, chủ động, sáng tạo hoàn thành tốt công tác quản lý, bảo
            tồn và phát huy giá trị Di tích lịch sử Dinh Độc Lập và hoàn thành
            xuất sắc các nhiệm vụ do lãnh đạo Văn phòng Chính phủ giao. Năm
            2010, Hội trường Thống Nhất đã vinh dự nhận Cờ thi đua của Chính phủ
            và được Chủ tịch nước Cộng hòa Xã hội Chủ nghĩa Việt Nam tặng thưởng
            Huân chương Lao động hạng I.
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

export default InforPage;
