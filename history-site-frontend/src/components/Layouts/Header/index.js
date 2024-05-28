import React, { useState } from "react";
import { Menu } from "antd";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css";

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

function Header() {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("");

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
    <div className="header-container">
      <img
        className="header-logo"
        src={"https://dinhdoclap.gov.vn/wp-content/uploads/2017/09/logo.png"}
        alt="History"
        onClick={() => navigate("/")}
      />
      <div className="header-menu">
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[selectedKey]}
        >
          {renderMenuItems(items)}
        </Menu>
      </div>
    </div>
  );
}

export default Header;
