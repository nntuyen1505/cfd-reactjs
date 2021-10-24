import { Header, Nav, Footer } from "./components";
import Demo from "./pages/Demo";
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
import "./asset/custom.scss";

import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gioi-thieu" component={Introduce} />
        <Route path="/khoa-hoc" component={Course} />
        <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
        <Route path="/san-pham" component={Project} />
        <Route path="/thong-tin-ca-nhan" component={Profile} />
        <Route path="/faq" component={Faq} />
        <Route path="/email" component={Email} />
        <Route path="/hop-tac" component={Cooperate} />
        <Route path="/thanh-toan" component={Payment} />
        <Route path="/dang-ky" component={Register} />
        <Route path="/team" component={Team} />
        <Route path="/demo" component={Demo} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
