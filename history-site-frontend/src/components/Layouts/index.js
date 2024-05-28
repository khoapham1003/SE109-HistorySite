import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function DefaultLayout({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn trang về đầu khi đường dẫn URL thay đổi
  }, [location]);
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
