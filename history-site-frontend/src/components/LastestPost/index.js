import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import { News, Activity, Research, topics } from "../data";

function LatestPost() {
  const combinedData = [...Activity, ...News, ...Research, ...topics];
  const sortedData = combinedData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestData = sortedData.slice(0, 5); 

  return (
    <div>
      <h2>Bài Viết Mới Nhất</h2>
      <List
        itemLayout="horizontal"
        dataSource={latestData}
        renderItem={(item) => (
          <List.Item>
            {/* Kiểm tra xem item có thuộc vào mảng News không */}
            {News.includes(item) ? (
              <List.Item.Meta
                title={<Link to={`/TinTuc/${item.id}`}>{item.title}</Link>}
              />
            ) : (
              // Kiểm tra xem item có thuộc vào mảng Activity không
              Activity.includes(item) ? (
                <List.Item.Meta
                  title={
                    <Link to={`/CacHoatDong/${item.id}`}>{item.title}</Link>
                  }
                />
              ) : (
                // Kiểm tra xem item có thuộc vào mảng Research không
                Research.includes(item) ? (
                  <List.Item.Meta
                    title={
                      <Link to={`/NghienCuuSuuTam/${item.id}`}>{item.title}</Link>
                    }
                  />
                ) : (
                  // Kiểm tra xem item có thuộc vào mảng topics không
                  topics.includes(item) ? (
                    <List.Item.Meta
                      title={
                        <Link to={`/ChuyenDeKhac/${item.id}`}>{item.title}</Link>
                      }
                    />
                  ) : (
                    <List.Item.Meta title={<a href="#">{item.title}</a>} />
                  )
                )
              )
            )}
          </List.Item>
        )}
      />
    </div>
  );
}

export default LatestPost;
