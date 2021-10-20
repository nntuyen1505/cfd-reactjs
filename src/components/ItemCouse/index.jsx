import React from 'react'

export default function ItemCourse({tag, people,like,name,des,avatar,teacher}) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src="img/img1.png" alt="" />
          {
              tag === 'Đã kết thúc' &&  (<span className="badge b1">{tag}</span>)
          }
          {
              tag === 'Sắp khai giảng' &&  (<span className="badge b1">{tag}</span>)
          }
          {
              tag === 'Đang diễn ra' &&  (<span className="badge b1">{tag}</span>)
          }
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="img/icon-user-white.svg" alt="" /> {people}
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> {like}
              </div>
            </div>
            <div className="share">
              <img src="img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </a>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">
            {des}
          </p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="name">{teacher}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  )
}
