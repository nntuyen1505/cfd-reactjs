import { ListCourse } from "../../components/ListCourse";
import Action from "./components/Action";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";

export default function Home() {
  var courseOffline = [
    {
      img: "img/img1.png",
      tag: "end",
      people: "12",
      liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img1.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img2.png",
      tag: "end",
      people: "12",
      liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img2.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img3.png",
      tag: "end",
      people: "12",
      liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img3.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img1.png",
      // tag: "end",
      // people: "12",
      // liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img1.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img2.png",
      // tag: "end",
      // people: "12",
      // liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img2.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img3.png",
      // tag: "end",
      // people: "12",
      // liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img3.png",
      teacher: "Trần Nghĩa",
    },
  ];
  var coursOnline = [
    {
      img: "img/img1.png",
      // tag: "end",
      // people: "12",
      // liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img1.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img2.png",
      // tag: "end",
      // people: "12",
      // liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img2.png",
      teacher: "Trần Nghĩa",
    },
    {
      img: "img/img3.png",
      // tag: "end",
      // people: "12",
      // liked: "100",
      name: "Front-end Căn Bản",
      des: "One of the best corporate fashion brands in Sydney",
      avatar: "img/img3.png",
      teacher: "Trần Nghĩa",
    },
  ];

  return (
    <main className="homepage" id="main">
      <Banner />
      {/* <CourseList name="Khóa học Offline" description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"/>
        <CourseList name="Khóa Học Online"/> */}
      <ListCourse
        maintitle="Khóa học Offline"
        topdes="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
        list={courseOffline}
     />
      <ListCourse maintitle="Khóa học Online" list={coursOnline}/>
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
