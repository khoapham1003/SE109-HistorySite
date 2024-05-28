import React from "react";
import { Button, Menu } from "antd";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const items = [
  { label: "TRANG CHỦ" },
  { label: "GIỚI THIỆU" },
  { label: "DI TÍCH" },
  { label: "TRƯNG BÀY" },
  { label: "HOẠT ĐỘNG GIÁO DỤC" },
  { label: "CÁC DỊCH VỤ" },
];

function Footer() {
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
          <Menu mode="horizontal" items={items} />
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
            <Button className="main-button-more">LIÊN HỆ</Button>
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
