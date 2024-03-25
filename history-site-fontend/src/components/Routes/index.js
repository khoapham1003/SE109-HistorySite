import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import DetailPage from "../../pages/DetailPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/DetailPage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
