import React, { useState } from "react";
import "./CourseBox.css";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../baseURL";

export default function CourseBox(course) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const courseScore = Math.round(course.courseAverageScore) ?? 0;
  const emptyStars = 5 - courseScore;
  const onImgLoaded = () => setIsImgLoaded(true);
  return (
    <>
      <div className="col-4">
        <div className="course-box">
          <Link to={`/course-info/${course?.shortName}`}>
            <img
              src={`/images/courses/${course?.cover}`}
              alt="Course img"
              className="course-box__img"
              onLoad={onImgLoaded}
            />
            {!isImgLoaded && <CircleSpinner />}
          </Link>
          <div className="course-box__main">
            <Link
              to={`/course-info/${course?.shortName}`}
              className="course-box__title"
            >
              {course?.name}
            </Link>

            <div className="course-box__rating-teacher">
              <div className="course-box__teacher">
                <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                <a href="#" className="course-box__teacher-link">
                  {course?.creator}
                </a>
              </div>
              <div className="course-box__rating">
                {Array.from({ length: emptyStars }).map((_, index) => (
                  <img
                    key={index}
                    src="/images/svgs/star.svg"
                    alt=""
                    className="course-box__star"
                  />
                ))}
                {Array.from({ length: courseScore }).map((_, index) => (
                  <img
                    key={index}
                    src="/images/svgs/star_fill.svg"
                    alt=""
                    className="course-box__star"
                  />
                ))}

                {/* <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  className="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  className="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  className="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  className="course-box__star"
                /> */}
              </div>
            </div>

            <div className="course-box__status">
              <div className="course-box__users">
                <i className="fas fa-users course-box__users-icon"></i>
                <span className="course-box__users-text">
                  {course?.registers}
                </span>
              </div>
              <span className="course-box__price">
                {course.price === 0
                  ? "رایگان"
                  : `${course?.price.toLocaleString("fa-IR")} تومان`}
              </span>
            </div>
          </div>

          <div className="course-box__footer">
            <Link
              to={`/course-info/${course?.shortName}`}
              className="course-box__footer-link"
            >
              مشاهده اطلاعات
              <i className="fas fa-arrow-left course-box__footer-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
