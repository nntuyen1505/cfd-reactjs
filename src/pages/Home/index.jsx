import { ListCourse } from "../../components/ListCourse";
import Action from "./components/Action";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import courseService from "../../services/courseService";
import Loading from "../../components/Loading";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(async () => {
    let data = await courseService.home();
    if (data) {
      setState({
        loading: false,
        data: data,
      });
    }
  }, []);
  if (state.loading) {
    return <Loading />;
  }
  return (
    <main className="homepage" id="main">
      <Banner />

      <ListCourse
        maintitle="Khóa học Offline"
        topdes="Nơi có những khóa học thực chiến Front-End Dev và UX/UI Design, kết nối và chia sẻ kinh nghiệm giúp bạn có đầy đủ kỹ năng thực tế để tạo ra những sản phẩm sáng tạo, tinh tế và phù hợp.The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
        list={state.data.offline}
      />
      <ListCourse maintitle="Khóa học Online" list={state.data.online} />
      <Different />
      <Testimonial review={state.data.review} />
      <Gallery gallery={state.data.gallery} />
      <Action />
    </main>
  );
}
