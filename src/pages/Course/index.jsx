import React from "react";
import { useState } from "react/cjs/react.development";
import { ListCourse } from "../../components/ListCourse";
import Loading from "../../components/Loading";
import courseService from "../../services/courseService";
import ItemSection from "./components/ItemSection";
import { useEffect } from "react";

export default function Course() {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(async () => {
    let data = await courseService.home();
    console.log(data);
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
      <ListCourse
        h2title="KHÓA HỌC CFD"
        topdes="Khóa học thực chiến tại CFD được thiết kế giúp cho thành viên trải nghiệm những dự án thực tế, bám sát yêu cầu nhà tuyển dụng, cũng như những kỹ năng cần thiết để ứng tuyển tại các công ty."
        subtitle="KHÓA HỌC"
        maintitle="ONLINE"
        list={state.data.offline}
      />
      <ListCourse
        subtitle="KHÓA HỌC"
        maintitle="ONLINE"
        list={state.data.online}
      />
    </main>
  );
}
