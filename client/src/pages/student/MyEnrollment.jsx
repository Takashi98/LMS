import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";
import { Line } from "rc-progress";
import Footer from "@/components/student/Footer";

const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);

  const [progressArray, setProgressArray, ] = useState([
    {
      lectureCompleted: 2,
      totalLectures: 4,
    },
    {
      lectureCompleted: 1,
      totalLectures: 5,
    },
    {
      lectureCompleted: 4,
      totalLectures: 4,
    },
    {
      lectureCompleted: 3,
      totalLectures: 4,
    },
    {
      lectureCompleted: 1,
      totalLectures: 4,
    },
    {
      lectureCompleted: 2,
      totalLectures: 4,
    },
    {
      lectureCompleted: 2,
      totalLectures: 4,
    },
    {
      lectureCompleted: 2,
      totalLectures: 4,
    },
    {
      lectureCompleted: 2,
      totalLectures: 4,
    },
  ]);

  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => (
              <tr className="border-b border-gray-500/20" key={index}>
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img
                    className="w-14 sm:w-24 md:w-28"
                    src={course.courseThumbnail}
                    alt=""
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted *100)/ progressArray[index].totalLectures : 0} className="bg-gray-300 rounded-full"/>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[index] &&
                    `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button onClick={() => navigate('/player/' + course._id)} className="cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white rounded">
                    {progressArray[index] &&
                    progressArray[index].lectureCompleted /
                      progressArray[index].totalLectures ===
                      1
                      ? "Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default MyEnrollment;
