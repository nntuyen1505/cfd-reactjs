import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { useAuth } from "../../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";


export function Header() {
  //export default là đưa file này ra bên ngoài để sử dụng
  // let { user, logout,togglePopupLogin } = useAuth();
   const dispatch = useDispatch()
  let {user} = useSelector((store) => store);
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger">
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src="img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {user ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">{user.title}</div>
                  <div className="avatar">
                    <img src={user?.avatar?.link} alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/khoa-hoc">Khóa học của tôi</Link>
                <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // logout();
                  }}
                >
                  Đăng xuất
                </Link>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <a
                href="#"
                className="btn-register"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({type:"OPEN_LOGIN"})
                  // togglePopupLogin(true);
                }}
              >
                Đăng nhập
              </a>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
