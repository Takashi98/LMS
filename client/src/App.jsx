import CourseDetail from "./pages/student/CourseDetail";
import CourseList from "./pages/student/CourseList";
import Home from "./pages/student/Home";
import { Route, Routes, useMatch } from "react-router-dom";
import MyEnrollment from "./pages/student/MyEnrollment";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/student/educator/Educator";
import DashBoard from "./pages/student/educator/DashBoard";
import StudentEnrolled from "./pages/student/educator/StudentEnrolled";
import NavBar from "./components/student/Navbar";
import MyCourses from "./pages/student/educator/MyCourses";
import "quill/dist/quill.snow.css";
import AddCourses from "./pages/student/educator/AddCourses";

function App() {

  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
      {
        !isEducatorRoute && <NavBar/>
      }
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-list" element={<CourseList/>}/>
        <Route path="/course-list/:input" element={<CourseList/>}/>
        <Route path="/course/:id" element={<CourseDetail/>} />
        <Route path="/my-enrollments" element={<MyEnrollment/>}/> 
        <Route path="/player/:id" element={<Player/>}/>
        <Route path="/loading/:path" element={<Loading/>}/>
        <Route path="/educator" element={<Educator/>}>
          <Route path="/educator" element={<DashBoard/>} />
          <Route path="add-course" element={<AddCourses/>} />
          <Route path="student-enrolled" element={<StudentEnrolled/>} /> 
          <Route path="my-courses" element={<MyCourses/>} /> 
          

        </Route>

      </Routes>
    </div>
  );
}

export default App;
