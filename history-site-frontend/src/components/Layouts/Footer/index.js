import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Menu } from "antd";
import { FaFacebook, FaHome, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const { SubMenu } = Menu;

const items = [
  {
    label: <FaHome size={20} />,
    icon: <FaHome />,
    key: "1",
  },
  {
    label: "GIỚI THIỆU",
    key: "2",
    children: [
      {
        label: "Hội trường thống nhất",
        key: "3",
      },
      {
        label: "Tin tức",
        key: "4",
      },
    ],
  },
  {
    label: "DI TÍCH",
    key: "5",
    children: [
      {
        label: "Lịch sử Dinh Độc Lập",
        key: "6",
      },
      {
        label: "Kiến trúc Dinh Độc Lập",
        key: "7",
      },
      {
        label: "Bản đồ di tích",
        key: "8",
      },
      {
        label: "Sơ đồ tòa nhà Dinh Độc Lập",
        key: "9",
      },
      {
        label: "Giờ tham quan và giá vé",
        key: "10",
      },
      {
        label: "Hình thức tham quan",
        key: "11",
      },
    ],
  },
  {
    label: "TRƯNG BÀY",
    key: "12",
    children: [
      // {
      //   label: "Từ Dinh Norodom đến Dinh Độc Lập 1868 - 1966",
      //   key: 13,
      // },
      {
        label: "Chuyên đề khác",
        key: "14",
      },
      {
        label: "Nghiên cứu và sưu tầm",
        key: "15",
      },
    ],
  },
  {
    label: "HOẠT ĐỘNG GIÁO DỤC",
    key: "16",
    children: [
      {
        label: "Chương trình Khám phá Di sản",
        key: "17",
      },
      {
        label: "Các hoạt động",
        key: "18",
      },
      {
        label: "Câu hỏi thường gặp",
        key: "19",
      },
    ],
  },
];

function renderMenuItems(data) {
  return data.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.key} title={item.label} icon={item.icon}>
          {renderMenuItems(item.children)}
        </SubMenu>
      );
    }
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  });
}

function Footer() {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("");
  const handleContact = () => {
    navigate("/LienHe");
  };
  const handleClick = (e) => {
    setSelectedKey(e.key);
    console.log("Bạn đã chọn:", e.key);
    switch (e.key) {
      case "1":
        navigate("/");
        break;
      case "3":
        navigate("/ThongTinChung");
        break;
      case "4":
        navigate("/TinTuc");
        break;
      case "6":
        navigate("/LichSuDiTich");
        break;
      case "7":
        navigate("/KienTrucDinh");
        break;
      case "8":
        navigate("/BanDoDinh");
        break;
      case "9":
        navigate("/SoDoToaNha");
        break;
      case "10":
        navigate("/GioThamQuan");
        break;
      case "11":
        navigate("/TourGuide");
        break;
      case "14":
        navigate("/ChuyenDeKhac");
        break;
      case "15":
        navigate("/NghienCuuSuuTam");
        break;
      case "17":
        navigate("/ChuongTrinhKhamPha");
        break;
      case "18":
        navigate("/CacHoatDong");
        break;
      case "19":
        navigate("/FAQ");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-column footer-column-1">
        <img
          className="footer-logo"
          src={"https://dinhdoclap.gov.vn/wp-content/uploads/2017/09/logo.png"}
          alt="History"
        />
        <div className="footer-address">
          135 Nam Kỳ Khởi Nghĩa, quận 1, TP.HCM
        </div>
        <div className="footer-address">106 Nguyễn Du, quận 1, TP.HCM</div>
        <br />
        <div>Điện thoại: 080.85037 - 028.38223652</div>
        <div>Fax: 080.85008</div>
      </div>
      <div className="footer-divider1"></div>
      <div className="footer-column footer-column-2">
        <div className="footer-menu">
          <Menu
            mode="horizontal"
            onClick={handleClick}
            selectedKeys={[selectedKey]}
          >
            {renderMenuItems(items)}
          </Menu>
        </div>
        <div className="footer-divider2"></div>
        <div className="footer-row">
          <div className="footer-follow-us-column">
            <div className="footer-follow-us-title">THEO DÕI CHÚNG TÔI</div>
            <br />
            <div className="footer-social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
            <br />
            <br />
            <Button className="main-button-more" onClick={handleContact}>
              LIÊN HỆ
            </Button>
          </div>
          <div className="footer-map-column">
            <iframe
              title="Google Map"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.44754139903!2d106.69530209999999!3d10.776994199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1712510314116!5m2!1svi!2s"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
