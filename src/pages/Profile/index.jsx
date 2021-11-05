import React, { useContext } from "react";

import {
  AccountInformation,
  ProjectDone,
  YourCourse,
  PaymentHistory,
  MyCoin,
} from "./components/";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Context } from "../../App";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  
  let { user } = useAuth();
  let { url } = useRouteMatch();
  console.log(url);
  return (
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src={user.avatar} alt="" />
            <div className="camera" />
          </div>
          <div className="name">{user.name}</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink to={`${url}`} exact>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={`${url}/khoa-hoc`}>Khóa học của bạn</NavLink>
              <NavLink to={`${url}/du-an`}>Dự án đã làm</NavLink>
              <NavLink to={`${url}/lich-su`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route path={`${url}`} exact component={AccountInformation} />
                <Route path={`${url}/khoa-hoc`} exact component={YourCourse} />
                <Route path={`${url}/du-an`} exact component={ProjectDone} />
                <Route
                  path={`${url}/lich-su`}
                  exact
                  component={PaymentHistory}
                />
                <Route path={`${url}/coin`} exact component={MyCoin} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
