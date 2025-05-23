import React from "react";
import "./CourseBox.css";

export default function CourseBox() {
  const courseInfo = [
    {
      id: 1,
      title: "دوره پروژه محور متخصص جنگو",
      teacher: " رضا دولتی",
      img: "images/courses/fareelancer.png",
      price: 1_000_000,
      usersCount: 500,
    },
    {
      id: 2,
      title: "دوره پروژه محور متخصص جنگو",
      teacher: " رضا دولتی",
      img: "images/courses/jango.png",
      price: 1_000_000,
      usersCount: 500,
    },
    {
      id: 3,
      title: "دوره پروژه محور متخصص جنگو",
      teacher: " رضا دولتی",
      img: "images/courses/nodejs.png",
      price: 1_000_000,
      usersCount: 500,
    },
    {
      id: 4,
      title: "دوره پروژه محور متخصص جنگو",
      teacher: " رضا دولتی",
      img: "images/courses/python.png",
      price: 1_000_000,
      usersCount: 500,
    },
    {
      id: 5,
      title: "دوره پروژه محور متخصص جنگو",
      teacher: " رضا دولتی",
      img: "images/courses/youtuber.png",
      price: 1_000_000,
      usersCount: 500,
    },
    {
      id: 6,
      title: "دوره پروژه محور متخصص جنگو",
      teacher: " رضا دولتی",
      img: "images/courses/js_project.png",
      price: 1_000_000,
      usersCount: 500,
    },
  ];

  return (
    <>
      {courseInfo.length !== 0 &&
        courseInfo.map((course) => (
          <div className="col-4">
            <div className="course-box" key={course.id}>
              <a href="#">
                <img
                  src={course.img}
                  alt="Course img"
                  className="course-box__img"
                />
              </a>
              <div className="course-box__main">
                <a href="#" className="course-box__title">
                  {course.title}
                </a>

                <div className="course-box__rating-teacher">
                  <div className="course-box__teacher">
                    <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                    <a href="#" className="course-box__teacher-link">
                      {course.teacher}
                    </a>
                  </div>
                  <div className="course-box__rating">
                    <img
                      src="images/svgs/star.svg"
                      alt="rating"
                      className="course-box__star"
                    />
                    <img
                      src="images/svgs/star_fill.svg"
                      alt="rating"
                      className="course-box__star"
                    />
                    <img
                      src="images/svgs/star_fill.svg"
                      alt="rating"
                      className="course-box__star"
                    />
                    <img
                      src="images/svgs/star_fill.svg"
                      alt="rating"
                      className="course-box__star"
                    />
                    <img
                      src="images/svgs/star_fill.svg"
                      alt="rating"
                      className="course-box__star"
                    />
                  </div>
                </div>

                <div className="course-box__status">
                  <div className="course-box__users">
                    <i className="fas fa-users course-box__users-icon"></i>
                    <span className="course-box__users-text">
                      {course.usersCount}
                    </span>
                  </div>
                  <span className="course-box__price">
                    تومان {course.price.toLocaleString("fa-IR")}
                  </span>
                </div>
              </div>

              <div className="course-box__footer">
                <a href="#" className="course-box__footer-link">
                  مشاهده اطلاعات
                  <i className="fas fa-arrow-left course-box__footer-icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
