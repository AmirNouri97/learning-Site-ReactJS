import React, { useState } from "react";
import "./CourseDetailsBox.css";
export default function CourseDetailsBox() {
  const [courseDetailBox, setCourseDetailBox] = useState([
    {
      id: 1,
      title: "وضعیت دوره :",
      subtitle: "به اتمام رسیده",
      icon: "graduation-cap",
    },
    { id: 2, title: "مدت زمان دوره", subtitle: "19 ساعت", icon: "clock" },
    {
      id: 3,
      title: "آخرین بروزرسانی",
      subtitle: "1401/03/02",
      icon: "calendar-alt",
    },
    { id: 4, title: "روش پشتیبانی", subtitle: "آنلاین", icon: "user-alt" },
    { id: 5, title: "پیش نیاز :", subtitle: "HTML CSS", icon: "info-circle" },
    {
      id: 6,
      title: "نوع مشاهده :",
      subtitle: "ضبط شده / آنلاین",
      icon: "play",
    },
  ]);
  return (
    <div class="course-boxes">
      <div class="row">
        {courseDetailBox.length !== 0 &&
          courseDetailBox.map((course) => (
            <div key={course.id} class="col-4">
              <div class="course-boxes__box">
                <div class="course-boxes__box-right">
                  <i
                    class={`course-boxes__box-right-icon fas fa-${course.icon}`}
                  ></i>
                </div>
                <div class="course-boxes__box-left">
                  <span class="course-boxes__box-left-title">
                    {course.title}
                  </span>
                  <span class="course-boxes__box-left--subtitle">
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
