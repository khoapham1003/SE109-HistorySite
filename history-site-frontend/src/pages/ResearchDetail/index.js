import React from "react";
import { Link, useParams } from "react-router-dom";
import { Research } from "../../components/data";
import { List } from "antd";
import LatestPost from "../../components/LastestPost";

function ResearchDetailPage() {
  const { index } = useParams();
  const research = Research[index];

  return (
    <div>
      <div>
        <h1>{research.title}</h1>
        <p>{research.content}</p>

        {Array.isArray(research.img) ? (
          research.img.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${research.title} ${idx + 1}`}
              style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
            />
          ))
        ) : (
          <img
            src={research.img}
            alt={research.title}
            style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
          />
        )}
      </div>
      <div>
        <LatestPost/>
      </div>
      <div>
        <h2>Bài viết liên quan</h2>
        <List
          dataSource={Research}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={<Link to={`/NghienCuuSuuTam/${item.id}`}>{item.title}</Link>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ResearchDetailPage;
