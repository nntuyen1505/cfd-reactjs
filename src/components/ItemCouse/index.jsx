import React from "react";
import { Link } from "react-router-dom";

export default function ItemCourse({
  slug,
  thumbnail,
  course_status,
  tag,
  people,
  like,
  title,
  short_description,
  avatar,
  teacher,
}) {
  let badgeClass =
    course_status === "sap-khai-gian"
      ? "b1"
      : course_status === "dang-dien-ra"
      ? "b2"
      : "b3";
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={"/chi-tiet-khoa-hoc/" + slug}>
          <img src={thumbnail.link} alt="" />
          <span className={`badge ${badgeClass}`}>
            {course_status === "sap-khai-gian"
              ? "Sắp Khai Giản"
              : course_status === "dang-dien-ra"
              ? "Đang  diễn ra"
              : "Đã kết thúc"}
          </span>
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="img/icon-user-white.svg" alt="" /> {0}
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> {0}
              </div>
            </div>
            <div className="share">
              <img src="img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher.avatar.link} alt="" />
            </div>
            <div className="name">{teacher.title}</div>
          </div>
          <Link  to={"/dang-ky/" + slug}  className="register-btn">Đăng Ký</Link>
        </div>
      </div>
    </div>
  );
}
