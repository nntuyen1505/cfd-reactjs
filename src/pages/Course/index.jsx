import React from "react";
import { ListCourse } from "../../components/ListCourse";
import ItemSection from "./components/ItemSection";

export default function Course() {
  var courseOffline = [
    {
      img: "img/img1.png",
      name: "Front-end căn bản",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img.png",
      name: "React JS",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img2.png",
      name: "Animation",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img3.png",
      name: "Scss, Grunt JS và Boostrap 4",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img4.png",
      name: "UX/UI Design",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img5.png",
      name: "Web Responsive",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
  ];
  var courseOnline = [
    {
      img: "img/img6.png",
      name: "Front-end căn bản",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img7.png",
      name: "Front-end nâng cao",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
    {
      img: "img/img8.png",
      name: "Laravel framework",
      description: " One of the best corporate fashion brands in Sydney",
      avatar: "img/avt.png",
      teacher: "Trần Nghĩa",
      register: "Đăng Ký",
    },
  ];
  return (
    <main className="homepage" id="main">
      <ListCourse
        h2title="KHÓA HỌC CFD"
        topdes="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
        subtitle="KHÓA HỌC"
        maintitle="ONLINE"
        list={courseOffline}
      />
      <ListCourse subtitle="KHÓA HỌC" maintitle="ONLINE" list={courseOnline} />
      {/* <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC CFD</h2>
          <p className="top-des">
            The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has
            a more-or-less normal
          </p>
          <div className="textbox">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">ONLINE</h2>
          </div>
          <div className="list row">
            {
              courseOnline.map(function(item,index){
               return <ItemSection 
                        img={item.img} 
                        name={item.name} 
                        description={item.description} 
                        avatar={item.avatar}  
                        teacher={item.teacher} 
                        register={item.register} 
                      />              
              })
            }
          </div>
        </div>
      </section>
      <section className="section-2 section-blue">
        <div className="container">
          <div className="textbox white">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">OFFLINE</h2>
          </div>
          <div className="list row">
          {
              courseOffline.map(function(item,index){
               return <ItemSection 
                        img={item.img} 
                        name={item.name} 
                        description={item.description} 
                        avatar={item.avatar} 
                        teacher={item.teacher} 
                        register={item.register} 
                      />
              })
            }
          </div>
          <div className="text-deco">C</div>
        </div>
      </section> */}
    </main>
  );
}
