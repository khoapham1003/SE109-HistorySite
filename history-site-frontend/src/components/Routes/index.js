import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import DetailPage from "../../pages/DetailPage";
import InforPage from "../../pages/InformationPage";
import HistoryPage from "../../pages/HistoryPage";

import DefaultLayout from "../Layouts";
import KienTrucPage from "../../pages/ArchitecturePage";
import MapPage from "../../pages/MapPage";
import BuildingMapPage from "../../pages/BuildingMapPage";
import VisitTimePage from "../../pages/VisitTimePage";
import TourGuidePage from "../../pages/TourGuidePage";
import ProgramPage from "../../pages/ProgramPage";
import FAQPage from "../../pages/FAQPage";
import TopicsPage from "../../pages/TopicsPage";
import TopicDetailPage from "../../pages/TopicsDetailPage";
import ResearchPage from "../../pages/ResearchPage";
import ResearchDetailPage from "../../pages/ResearchDetail";
import ActivityPage from "../../pages/ActivityPage";
import ActivityDetailPage from "../../pages/ActivityDetail";
import NewsDetailPage from "../../pages/NewsDetail";
import NewsPage from "../../pages/NewsPage";
import Page3D from "../../pages/3DPage";
import ContactPage from "../../pages/ContactPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <MainPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/DetailPage"
          element={
            <DefaultLayout>
              <DetailPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/ThongTinChung"
          element={
            <DefaultLayout>
              <InforPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/LichSuDiTich"
          element={
            <DefaultLayout>
              <HistoryPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/KienTrucDinh"
          element={
            <DefaultLayout>
              <KienTrucPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/BanDoDinh"
          element={
            <DefaultLayout>
              <MapPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/SoDoToaNha"
          element={
            <DefaultLayout>
              <BuildingMapPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/GioThamQuan"
          element={
            <DefaultLayout>
              <VisitTimePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/TourGuide"
          element={
            <DefaultLayout>
              <TourGuidePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/ChuongTrinhKhamPha"
          element={
            <DefaultLayout>
              <ProgramPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/FAQ"
          element={
            <DefaultLayout>
              <FAQPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/ChuyenDeKhac"
          element={
            <DefaultLayout>
              <TopicsPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/ChuyenDeKhac/:index"
          element={
            <DefaultLayout>
              <TopicDetailPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/NghienCuuSuuTam"
          element={
            <DefaultLayout>
              <ResearchPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/NghienCuuSuuTam/:index"
          element={
            <DefaultLayout>
              <ResearchDetailPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/CacHoatDong"
          element={
            <DefaultLayout>
              <ActivityPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/CacHoatDong/:index"
          element={
            <DefaultLayout>
              <ActivityDetailPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/TinTuc"
          element={
            <DefaultLayout>
              <NewsPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/TinTuc/:index"
          element={
            <DefaultLayout>
              <NewsDetailPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/LienHe"
          element={
            <DefaultLayout>
              <ContactPage />
            </DefaultLayout>
          }
        />
        <Route path="/3D" element={<Page3D />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
