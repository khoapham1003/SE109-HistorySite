import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { List, Button } from "antd";
import { News } from "../../components/data";
import LatestPost from "../../components/LastestPost";
function ProgramPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Chương trình Khám phá Di sản</h1>
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
            <div className="infor-map">
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2023/07/hình-bìa-KQDS.png"
                alt=""
                width="600"
              />
            </div>
            <p>
              Chương trình Khám phá Di sản là một tập hợp các chủ đề được xây
              dựng trên cơ sở các hiện vật tại Di tích, tích hợp nhiều môn học
              như lịch sử, mỹ thuật, địa lý, tiếng Việt, giáo dục công dân … phù
              hợp với trình độ cũng như tâm sinh lý theo độ tuổi của học sinh.
            </p>
            <p>
              Mỗi chủ đề dài từ 90-100 phút, là một chuỗi các hoạt động phong
              phú, đa dạng, được thiết kế sáng tạo dưới hình thức “học mà chơi,
              chơi mà học”, không chỉ giúp học sinh hứng thú, chủ động tìm hiểu
              lịch sử, văn hóa dân tộc mà còn tạo điều kiện để học sinh phát huy
              tính sáng tạo, phát triển những kỹ năng quan trọng như làm việc
              nhóm, thuyết trình và giải quyết vấn đề …
            </p>
            <div>
              <span>
                <span>Liên hệ:</span>
                <span>
                  <strong>
                    <span> 080 85122</span>
                    <span>–</span>
                  </strong>
                </span>
                <span>
                  <strong>080 85120</strong>
                </span>
              </span>
            </div>
            <div>
              <strong>Chủ đề dành cho học sinh tiểu học:</strong>
            </div>
            <div>
              <ul>
                <li>
                  <span>Lớp 1: Cùng em khám phá Dinh Độc Lập </span>(
                  <a href="https://drive.google.com/file/d/1usKeb7011NKYCaFvT_EJRMKCSr2KU1TS/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 2: Biển báo, biển chỉ dẫn trong Dinh Độc Lập</span>(
                  <a href="https://drive.google.com/file/d/1NKun7SJpFv6KiSb7lNCtHse6Q8VxQTE0/view?usp=drive_link">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 3: Lưỡng Long Tranh Châu</span>(
                  <a href="https://drive.google.com/file/d/1cLUDwXT-DGlAcKAMD1nQuiauFikuDWt9/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 4: Tranh sơn mài Bình Ngô Đại Cáo</span>(
                  <a href="https://drive.google.com/file/d/16tyec55-c4fGB6Ukx96tkE1pGejsJuS6/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 5: Thống Nhất Đất Nước</span>(
                  <a href="https://drive.google.com/file/d/176A64-O20aYamYLkT7jIhiqYMq3jXlLO/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
              </ul>
            </div>
            <div>
              <strong>Chủ đề dành cho học sinh trung học cơ sở:</strong>
              <ul>
                <li>
                  <span>Lớp 6: Chữ “Thọ” trong trang trí Dinh Độc Lập</span>(
                  <a href="https://drive.google.com/file/d/1bzNtxriP9Yxm46gmSFQVsbp5J_IrOVzP/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 7: Phòng Trình Quốc thư</span>(
                  <a href="https://drive.google.com/file/d/1B0MfxuMnmwqJbB3xraTHhvXL6CB_HQPf/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 8: Em tập làm thuyết minh viên</span>(
                  <a href="https://drive.google.com/file/d/1WT9r6MTMpgXetVpABsxBsXz5h5wMWL5U/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Lớp 9: Tiến vào Dinh Độc Lập</span>(
                  <a href="https://drive.google.com/file/d/11UYKRhVnGMDUp82_E-IiZc7rtrmZXOEi/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
                <li>
                  <span>Khối 8+9: Giải mật thư hiểu lịch sử</span>(
                  <a href="https://drive.google.com/file/d/1ecyU-RwaK59bnNnFfjEJdHh3gZtIXrkc/view?usp=sharing">
                    Tải tại đây
                  </a>
                  )
                </li>
              </ul>
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

export default ProgramPage;
