import { Header, Nav, Footer } from "./components";
import Demo from "./pages/Demo";
import TestParent from "./pages/Demo1";
import Home from "./pages/Home";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Register from "./pages/Register";
import Email from "./pages/Email";
import Faq from "./pages/Faq";
import Introduce from "./pages/Introduce";
import Cooperate from "./pages/Cooperate";
import Payment from "./pages/Payment";
import Page404 from "./pages/Page404";
import Demo_UseEffect from "./pages/Demo_useEffect";
import LoginModal from "./pages/LoginModal";
import "./asset/custom.scss";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useContext, useState, state } from "react";
import PrivateRoutte from "./components/PrivateRoute";
import authService from "./services/authService";
import { useSelector } from "react-redux";

export const Context = createContext();

function App() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("login")));
  const [openLogin, setOpenLogin] = useState(false);

  const togglePopupLogin = (flag) => {
    if (typeof flag === "undefined") {
      setOpenLogin(!openLogin);
    } else {
      setOpenLogin(flag);
    }
  };

  let { user } = useSelector((state) => state);

  const login = async (user) => {
    let response = await authService.login(user);
    let res = await response.json();
    /*nếu đăng nhập  thành công thì back-end sẽ trả về cho 1  biến data, 
      và lấy biến data đó kiểm tra.
    */
    if (res.data) {
      /*
    khi xét vào localstorage thì nhớ stringify nó. bởi vì nó chỉ nhận string  thôi. 
      localStorage.setItem("login", JSON.stringify(res.data)); 
    Còn khi lấy ra lại thì phải parse nó về  dạng JSON lại để khi vào lại use thì nó sẽ ra thông tin.
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("login")));
    */

      /*
      localStorage.setItem lưu thông tin đăng nhập lại để khi refersh lại trang không mất đi,
      trong khi refesh lại thì phải lấy từ localstorage ra. dùng localstorage.getItem ở bên trên useState
    */
      localStorage.setItem("login", JSON.stringify(res.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));

      // setUser(res.data);
    } else {
      return res.error;
    }
  };

  // const login = (user) => {

  // const userLogin = {
  //   ...user,
  //   name: "Nguyen Ngoc Tuyen",
  //   avatar: "img/avatar1.png",
  // };
  // localStorage.setItem("login", JSON.stringify(userLogin));
  // setUser(userLogin);
  // };

  // const logout = () => {
  // setUser(null);
  //   localStorage.removeItem("login");
  // };
  return (
    <BrowserRouter>
      <Context.Provider value={{ user }}>
        <Header />
        <Nav />
        {!user && <LoginModal />}
        {/* use !phủ định lại: khi user đăng nhập rồi thì không  render <LoginModal/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gioi-thieu" component={Introduce} />
          <Route path="/khoa-hoc/" component={Course} />
          <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
          <Route path="/san-pham" component={Project} />
          <PrivateRoutte path="/thong-tin-ca-nhan" component={Profile} />
          <Route path="/faq" component={Faq} />
          <Route path="/email" component={Email} />
          <Route path="/hop-tac" component={Cooperate} />
          <Route path="/thanh-toan" component={Payment} />
          <Route path="/dang-ky" component={Register} />
          <Route path="/team" component={Team} />
          <Route path="/demo" component={Demo} />
          <Route path="/demo1" component={TestParent} />
          <Route path="/demo_effect" component={Demo_UseEffect} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
