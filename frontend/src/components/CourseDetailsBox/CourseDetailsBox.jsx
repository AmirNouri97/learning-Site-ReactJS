import React, { useState } from "react";
import "./CourseDetailsBox.css";
export default function CourseDetailsBox(props) {
  const { courseDetails, courseUpdated } = props;
  console.log(courseDetails);

  const [courseDetailBox, setCourseDetailBox] = useState([
    {
      id: 1,
      title: "وضعیت دوره :",
      subtitle: `${courseDetails.isComplete === 1 ? "به اتمام رسیده" : "درحال برگزاری"}`,
      icon: "graduation-cap",
    },
    { id: 2, title: "مدت زمان دوره", subtitle: "19 ساعت", icon: "clock" },
    {
      id: 3,
      title: "آخرین بروزرسانی",
      subtitle: `${courseUpdated.slice(0, 10)}`,
      icon: "calendar-alt",
    },
    {
      id: 4,
      title: "روش پشتیبانی",
      subtitle: `${courseDetails.support}`,
      icon: "user-alt",
    },
    { id: 5, title: "پیش نیاز :", subtitle: "HTML CSS", icon: "info-circle" },
    {
      id: 6,
      title: "نوع مشاهده :",
      subtitle: "ضبط شده / آنلاین",
      icon: "play",
    },
  ]);
  return (
    <div className="course-boxes">
      <div className="row">
        {courseDetailBox.length !== 0 &&
          courseDetailBox.map((course) => (
            <div key={course.id} className="col-4">
              <div className="course-boxes__box">
                <div className="course-boxes__box-right">
                  <i
                    className={`course-boxes__box-right-icon fas fa-${course.icon}`}
                  ></i>
                </div>
                <div className="course-boxes__box-left">
                  <span className="course-boxes__box-left-title">
                    {course.title}
                  </span>
                  <span className="course-boxes__box-left--subtitle">
                    {course.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
