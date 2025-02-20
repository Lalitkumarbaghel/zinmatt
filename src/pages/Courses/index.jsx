import Banner from "./Banner/Banner";
import ChooseCourse from "./ChooseCourse/ChooseCourse";
import SyllabusCourses from "./SyllabusCourse/SyllabusCourse";
function Courses(){
    return(
        <div>
            <Banner/>
            <ChooseCourse/>
            {/* <Syllabus/> */}
            <SyllabusCourses/>
        </div>
    )
}
export default Courses;