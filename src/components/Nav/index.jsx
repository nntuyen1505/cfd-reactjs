import React from 'react'

export function Nav() {
    return (
        <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>
          <li className="active">
            <a href="#">Trang chủ</a>
          </li>
          <li>
            <a href="#">CFD Team</a>
          </li>
          <li>
            <a href="#">Khóa Học</a>
          </li>
          <li>
            <a href="#">Dự Án</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </nav>
    )
}
