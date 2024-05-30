import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

function ContactPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleTrungBay = () => {
    navigate("/LichSuDiTich");
  };
  const onFinish = (values) => {
    console.log("Form Values:", values);
    message.success("Đã gửi phản hồi thành công! Cám ơn bạn đã góp ý!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(
      "Thông tin không hợp lệ. Xin hãy kiểm tra lại các ô thông tin và gửi lại."
    );
  };
  return (
    <div>
      <div className="main-background-image"></div>
      <div className="infor-content">
        <div className="infor-big-title">
          <h1>LIÊN HỆ</h1>
        </div>
        <div className="infor-info-divide">
          <div className="infor-info-container">
            <div className="contact-map">
              <iframe
                title="Google Map"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.44754139903!2d106.69530209999999!3d10.776994199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1712510314116!5m2!1svi!2s"
              ></iframe>
            </div>
            <div>
              <p>
                Chúng tôi sẽ liên hệ với Quý khách trong vòng 24h làm việc ngay
                sau khi nhận được yêu cầu từ Quý khách.
              </p>
              <p>
                Chúng tôi cam kết cung cấp dịch vụ tốt nhất và mang đến sự hài
                lòng tuyệt đối cho tất cả khách hàng.
              </p>
              <h3>SỐ ĐIỆN THOẠI LIÊN HỆ:</h3>
              <p>Hội nghị – Tiệc cưới: 080.85315 – 080.85316</p>
              <p>Nhà hàng café 30/4: 080.85413</p>
              <p>Quần vợt: 080.85034</p>
              <p>Đặt phòng</p>
              <p>– Nhà khách 108 Nguyễn Du: 080.82915 – 080.82916</p>
              <p>
                – Nhà khách 17 Thùy Vân – Vũng Tàu: (0254) 3524954 – 3524955
              </p>
              <h2>PHẢN HỒI CHO CHÚNG TÔI</h2>
              <Form
                className="contact-form"
                form={form}
                layout="vertical"
                name="contact_form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="your-name"
                  label="Họ Tên *"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập đầy đủ thông tin bắt buộc.",
                    },
                  ]}
                >
                  <Input placeholder="Họ Tên *" />
                </Form.Item>

                <Form.Item
                  name="your-phone"
                  label="Điện thoại *"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập đầy đủ thông tin bắt buộc.",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Số điện thoại không hợp lệ.",
                    },
                  ]}
                >
                  <Input placeholder="Điện thoại *" />
                </Form.Item>

                <Form.Item
                  name="your-email"
                  label="Email *"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập đầy đủ thông tin bắt buộc.",
                    },
                    { type: "email", message: "Email không hợp lệ." },
                  ]}
                >
                  <Input placeholder="Email *" />
                </Form.Item>

                <Form.Item name="your-message" label="Nội dung">
                  <Input.TextArea placeholder="Nội dung" rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button className="main-button-more" htmlType="submit">
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
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

export default ContactPage;
