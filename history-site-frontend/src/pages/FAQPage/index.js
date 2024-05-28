import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { List, Button } from "antd";
import { News } from "../../components/data";
import LatestPost from "../../components/LastestPost";
function FAQPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Câu hỏi thường gặp (FAQ)</h1>
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
          <div className="infor-info-container infor-faq">
            <p>
              <span>
                <strong>
                  1. Làm sao để tôi liên hệ tham gia chương trình này?
                </strong>
              </span>
            </p>
            <p>
              Bạn có thể gọi đến số:
              <strong> 080 85122 – </strong>
              <strong>080 85120 </strong>
              để được gặp nhân viên giáo dục tư vấn về chương trình phù hợp
              nhất.
            </p>
            <p>
              <span>
                <strong>
                  2. Số lượng học sinh tối đa để tham gia chương trình giáo dục
                  Khám phá di sản là bao nhiêu?
                </strong>
              </span>
            </p>
            <p>
              <span>
                Từ 15 đến 50 học sinh là số lượng học sinh mà chúng tôi có thể
                đảm nhiệm trong mỗi buổi học để nhằm đảm bảo về chất lượng phục
                vụ tốt nhất đến mỗi học sinh.
              </span>
            </p>
            <p>
              <span>
                <strong>
                  3. Để tham gia chương trình, chúng tôi cần đặt lịch trước mấy
                  ngày?
                </strong>
              </span>
              <p>
                <span>
                  Lời khuyên tốt nhất là bạn hãy liên hệ đặt lịch ngay khi đã
                  chọn được chương trình phù hợp với học sinh.
                </span>
              </p>
            </p>
            <p>
              <p>
                <span>
                  <strong>
                    4. Thời gian hoạt động của các chương trình Khám phá Di sản
                    tại Di tích?
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  Chúng tôi chào đón các bạn nhỏ trong khung giờ từ 08h00 –
                  16h00 các ngày trong tuần, không bao gồm Thứ Bảy và Chủ Nhật.
                </span>
              </p>
            </p>
            <p>
              <p>
                <span>
                  <strong>
                    5. Học sinh cần mang theo những đồ dùng học tập nào khi tham
                    gia chương trình?
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  Chúng tôi đã có sẵn học liệu cho học sinh khi tham gia các
                  hoạt động của chương trình. Nếu thấy cần thiết, học sinh chỉ
                  mang theo giấy bút để ghi chép lại các nội dung mà các em tìm
                  hiểu được trong quá trình trải nghiệm cùng với nhân viên giáo
                  dục.
                </span>
              </p>
            </p>
            <p>
              <p>
                <span>
                  <strong>
                    6. Thầy/cô giáo có được tham dự cùng học sinh không?
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  Chúng tôi sẵn lòng chào đón sự tham gia của Ban Giám hiệu,
                  thầy/cô Chủ nhiệm và Bảo mẫu cùng trải nghiệm giờ học.
                </span>
              </p>
            </p>
            <p>
              <p>
                <span>
                  <strong>
                    7. Chi phí tham gia chương trình là bao nhiêu?
                  </strong>
                </span>
              </p>
              <p>
                Chi phí tham gia chương trình là 20.000 VNĐ/ học sinh/ chủ đề (
                <strong>
                  phí này đã bao gồm vé vào cổng, nước uống và học liệu
                </strong>
                )
              </p>
            </p>
            <p>
              <p>
                <span>
                  <strong>8. Thanh toán bằng hình thức gì?</strong>
                </span>
              </p>
              <p>
                Quý nhà trường/ phụ huynh sẽ thanh toán bằng tiền mặt hoặc
                chuyển khoản tại phòng Kế hoạch tài vụ trên số lượng thực tế học
                sinh tham gia chương trình vào buổi cuối cùng (
                <strong>Có hỗ trợ xuất hóa đơn VAT</strong>).
              </p>
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

export default FAQPage;
