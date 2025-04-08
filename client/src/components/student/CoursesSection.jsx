import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)
  return (
    <div className="py-17 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover out top-rated courses across various categories. From coding ad
        design to business and wellness, out courses are crafted to deliver
        results
      </p>

      <div className="grid grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4"> 
        {allCourses.slice(0,4).map((course, index) => <CourseCard course={course} key={index}/> )}
      </div>
      <Link
        onClick={() => scrollTo(0, 0)}
        to={"/course-list"}
        className="text0-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
