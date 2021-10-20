import React from 'react'
import {ListCourse} from '../../components/ListCourse'

import Banner from './components/Banner'
import Content from './components/Content'

export default function CourseDetail() {
    var projectMember = [
        {
            // tag: "end",
            // people: "12",
            // liked: "100",
            name: "Front-end Căn Bản",
            des: "One of the best corporate fashion brands in Sydney",
            avatar: "img/img1.png",
            teacher: "Trần Nghĩa"
            
      
          },
          {
            // tag: "end",
            // people: "12",
            // liked: "100",
            name: "Front-end Căn Bản",
            des: "One of the best corporate fashion brands in Sydney",
            avatar: "img/img2.png",
            teacher: "Trần Nghĩa"
            
      
          },
          {
            // tag: "end",
            // people: "12",
            // liked: "100",
            name: "Front-end Căn Bản",
            des: "One of the best corporate fashion brands in Sydney",
            avatar: "img/img3.png",
            teacher: "Trần Nghĩa"
            
      
          },
    ]
    var projectMember = [
        {
            // tag: "end",
            // people: "12",
            // liked: "100",
            name: "Front-end Căn Bản",
            des: "One of the best corporate fashion brands in Sydney",
            avatar: "img/img1.png",
            teacher: "Trần Nghĩa"
            
      
          },
          {
            // tag: "end",
            // people: "12",
            // liked: "100",
            name: "Front-end Căn Bản",
            des: "One of the best corporate fashion brands in Sydney",
            avatar: "img/img2.png",
            teacher: "Trần Nghĩa"
            
      
          },
          {
            // tag: "end",
            // people: "12",
            // liked: "100",
            name: "Front-end Căn Bản",
            des: "One of the best corporate fashion brands in Sydney",
            avatar: "img/img3.png",
            teacher: "Trần Nghĩa"
            
      
          },
    ]
    return (
        <main className="course-detail" id="main">
        <Banner/>
        <Content/>
        <ListCourse subtitle="DỰ ÁN" maintitle="THÀNH VIÊN" list={projectMember}/>
        <ListCourse subtitle="KHÓA HỌC" maintitle="Liên Quan" list={projectMember}/>

      
      </main>
    )
}

