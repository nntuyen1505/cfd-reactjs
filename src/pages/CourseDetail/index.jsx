import React, { useState } from "react";
import { useParams } from "react-router";
import { ListCourse } from "../../components/ListCourse";
import { useEffect } from "react";

import Banner from "./components/Banner";
import Content from "./components/Content";
import courseService from "../../services/courseService";
import Loading from "../../components/Loading";

export default function CourseDetail() {
  // let [detail, setDetail] = useState()

  // let {slug} = useParams();

  // useEffect(async () => {
  //   let data = await courseService.detail(slug)
  //   setDetail(data)
  // }, [])

  // console.log(slug)

  // if(!detail) return <Loading/>

  const [state, setState] = useState({
    data: {},
    dataHome:{},
    loading: true,
  });

  const { slug } = useParams();

  useEffect(async () => {
    let data = await courseService.courseDetail(slug);
    let dataHome =  await courseService.home();
    console.log(data);
    console.log(dataHome);
    if (data) {
      setState({
        loading: false,
        data: data.data,
        dataHome:dataHome
      });
    }
  }, [slug]);

  if (state.loading) {
    return <Loading />;
  }
  return (
    <main className="course-detail" id="main">
      <Banner data={state.data}/>
      <Content data={state.data}/>
      <ListCourse
        subtitle="KHÓA HỌC"
        maintitle="Liên Quan"
        list={state.dataHome.online}
      />
    </main>
  );
}
