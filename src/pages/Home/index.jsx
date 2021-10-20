import Action from './components/Action'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Different from './components/Different'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'


export default function Home() {
    return (
        <main className="homepage" id="main">
        <Banner/>
        <CourseList name="Khóa học Offline" description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"/>
        <CourseList name="Khóa Học Online"/>
        <Different/>
        <Testimonial/>
        <Gallery/>
        <Action/>
      </main>
    )
}
