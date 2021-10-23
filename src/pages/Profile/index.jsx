import React from 'react'

// import AccountInformation from './components/AccountInformation'
// import ProjectDone from './components/ProjectDone'
// import YourCourse from './components/YourCourse'
// import PaymentHistory from './components/PaymentHistory'
// import MyCoin from './components/MyCoin'


import {AccountInformation, ProjectDone, YourCourse, PaymentHistory, MyCoin} from './components/'
import { Route, Switch, useRouteMatch } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function Profile() {

  let  {url} = useRouteMatch() 
    return (
      <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src="img/avatar-lg.png" alt="" />
            <div className="camera" />
          </div>
          <div className="name">trần nghĩa</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink to={`${url}`} exact>Thông tin tài khoản</NavLink>
              <NavLink to={`${url}/khoa-hoc`}>Khóa học của bạn</NavLink>
              <NavLink to={`${url}/du-an`}>Dự án đã làm</NavLink>
              <NavLink to={`${url}/lich-su`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
            <Switch>
              <Route path={`${url}`} exact component={AccountInformation}/>
              <Route path={`${url}/khoa-hoc`} exact component={YourCourse}/>
              <Route path={`${url}/du-an`} exact component={ProjectDone}/>
              <Route path={`${url}/lich-su`} exact component={PaymentHistory}/>
              <Route path={`${url}/coin`} exact component={MyCoin}/>
            </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
    )
}
