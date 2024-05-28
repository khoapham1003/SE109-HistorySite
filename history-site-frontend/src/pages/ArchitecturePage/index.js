import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { List, Button } from "antd";
import { News } from "../../components/data";
import LatestPost from "../../components/LastestPost";

function KienTrucPage() {
  const navigate = useNavigate();

  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>Kiến trúc Dinh Độc Lập</h1>
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
            <p>
              Dinh Ðộc Lập là một công trình kiến trúc độc đáo của Kiến trúc sư
              Ngô Viết Thụ. Dinh được khởi công xây dựng ngày 01/7/1962 và khánh
              thành vào ngày 31/10/1966.
            </p>
            <p>
              Khi thiết kế Dinh Ðộc Lập, Kiến trúc sư Ngô Viết Thụ muốn tìm một
              ý nghĩa văn hóa cho công trình, nên mọi sự xếp đặt từ bên trong
              nội thất cho đến tiền diện bên ngoài, tất cả đều tượng trưng cho
              triết lý cổ truyền, nghi lễ Phương đông và cá tính của dân tộc.
              Kiến trúc sư Ngô Viết Thụ đã kết hợp hài hoà giữa nghệ thuật kiến
              trúc hiện đại với kiến trúc truyền thống Phương Ðông. Toàn thể
              bình diện của Dinh làm thành hình chữ CÁT ( 吉 ) có nghĩa là tốt
              lành, may mắn; Tâm của Dinh là vị trí phòng Trình quốc thư; Lầu
              thượng là Tứ phương vô sự lầu hình chữ KHẨU ( 口 ) để đề cao giáo
              dục và tự do ngôn luận. Hình chữ KHẨU ( 口 ) có cột cờ chính giữa
              sổ dọc tạo thành hình chữ TRUNG ( 中 ) như nhắc nhở muốn có dân
              chủ thì phải trung kiên. Nét gạch ngang được tạo bởi mái hiên lầu
              tứ phương, bao lơn danh dự và mái hiên lối vào tiền sảnh tạo thành
              hình chữ TAM ( 三 ), theo quan niệm dân chủ hữu tam viết nhân,
              viết minh, viết võ, ý mong muốn một đất nước hưng thịnh thì phải
              có những con người hội đủ 3 yếu tố Nhân, Minh, Võ. Ba nét gạch
              ngang này được nối liền nét sổ dọc tạo thành hình chữ VƯƠNG ( 王
              ), trên có kỳ đài làm thành nét chấm tạo thành hình chữ CHỦ ( 主 )
              tượng trưng cho chủ quyền đất nước. Mặt trước của dinh thự, toàn
              bộ bao lơn lầu 2 và lầu 3 kết hợp với mái hiên lối vào chính cùng
              2 cột bọc gỗ phía dưới mái hiên tạo thành hình chữ HƯNG ( 興 ) ý
              cầu chúc cho nước nhà được hưng thịnh mãi.
            </p>
            <div className="infor-img-container">
              <img
                class="aligncenter wp-image-397 lazyloaded"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/1-1.jpg"
                data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/1-1.jpg"
                alt=""
                width="800"
                data-was-processed="true"
              ></img>
            </div>
            <p>
              Vẻ đẹp kiến trúc của Dinh còn được thể hiện bởi bức rèm hoa đá
              mang hình dáng những đốt trúc thanh tao bao xung quanh tầng 2. Rèm
              hoa đá được biến cách từ bức cửa bàn khoa của các cung điện Cố đô
              Huế, không chỉ làm tăng vẻ đẹp của Dinh mà còn có tác dụng lấy ánh
              sáng mặt trời.
            </p>
            <p>
              Đi vào bên trong Dinh, tất cả các đường nét kiến trúc đều dùng
              đường ngay sổ thẳng, các hành lang, đại sảnh, các phòng đều lấy
              câu chính đại quang minh làm gốc.
            </p>
            <div className="infor-img-container">
              <img
                class="aligncenter wp-image-398 lazyloaded"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/2-1.jpg"
                data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/2-1.jpg"
                alt=""
                width="600"
                height="400"
                data-was-processed="true"
              ></img>
            </div>
            <p>
              Sân trước của Dinh là một thảm cỏ hình oval có đường kính 102m.
              Màu xanh của thảm cỏ tạo ra một cảm giác êm dịu, sảng khoái cho
              khách ngay khi bước qua cổng.
            </p>
            <div className="infor-img-container">
              <img
                class="aligncenter wp-image-399 lazyloaded"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/3-1.jpg"
                data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/3-1.jpg"
                alt=""
                width="600"
                height="266"
                data-was-processed="true"
              ></img>
            </div>
            <p>
              Chạy dài theo suốt chiều ngang của đại sảnh là hồ nước hình bán
              nguyệt. Trong hồ thả hoa sen và hoa súng gợi nên hình ảnh những hồ
              nước yên ả ở các ngôi đình, ngôi chùa cổ kính của Việt Nam.
            </p>
            <div className="infor-img-container">
              <img
                class="aligncenter wp-image-400 lazyloaded"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/4-1.jpg"
                data-lazy-src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/4-1.jpg"
                alt=""
                width="600"
                height="428"
                data-was-processed="true"
              ></img>
            </div>
            <p>
              Dinh có diện tích 120.000m² (300m x 400m), được giới hạn bởi 4
              trục đường chính, đó là:
            </p>
            <ul>
              <li>
                Ðường Nam Kỳ Khởi Nghĩa ở phía Ðông Bắc (mặt chính của Dinh)
              </li>
              <li>
                Ðường Huyền Trân Công Chúa ở phía Tây Nam (mặt sau của Dinh)
              </li>
              <li>
                Ðường Nguyễn Thị Minh Khai ở phía Tây Bắc (phía bên trái Dinh)
              </li>
              <li>Ðường Nguyễn Du ở phía Ðông Nam (phía bên phải Dinh)</li>
            </ul>
            <div className="infor-img-container">
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/so-do-tong-the-ko-chu-thich.jpg"
                width="600"
                height="428"
              ></img>
            </div>
            <p>
              Khu nhà chính hình chữ T diện tích mặt bằng là 4.500m², cao 26m,
              nằm ở vị trí trung tâm của khu đất. Ðây từng là nơi ở và làm việc
              Tổng thống Việt Nam Cộng hòa. Khu này có 03 tầng lầu, 02 gác lửng,
              01 sân thượng, 01 tầng nền và tầng hầm. Tổng diện tích sử dụng là
              20.000m² chia làm 95 phòng. Mỗi phòng có một chức năng riêng, kiến
              trúc và cách trang trí phù hợp với mục đích sử dụng của mỗi phòng.
              Sau 1975, khu nhà chính này tiếp tục được sử dụng một số phòng,
              còn lại để phục vụ du khách tham quan.
            </p>
            <div className="infor-img-container">
              <img
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/6.jpg"
                width="600"
                height="450"
              ></img>
            </div>
            <p>
              Ngoài các khu nhà trên, ở góc trái Dinh phía đường Nguyễn Thị Minh
              Khai còn có một nhà bát giác đường kính 4m, xây trên một gò đất
              cao, xung quanh không xây tường, mái ngói cong cổ kính làm nơi
              hóng mát, thư giãn.
            </p>
            <div className="infor-img-container">
              <img
                class="aligncenter wp-image-403 lazyloaded"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/7.jpg"
                alt=""
                width="600"
                height="399"
              ></img>{" "}
            </div>
            <p>
              Xung quanh Dinh là những bãi cỏ xanh mướt, vườn cây cổ thụ, những
              chậu cây kiểng quí và 04 sân quần vợt phía sau khu nhà chính.
            </p>
            <div className="infor-img-container">
              <img
                width="260"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/8.jpg"
              ></img>
              <img
                width="260"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/9.jpg"
              ></img>
              <img
                width="260"
                src="https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/10.jpg"
              ></img>
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

export default KienTrucPage;
