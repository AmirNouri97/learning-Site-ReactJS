import React from "react";
import "./Courses.css";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import Pagination from "../../components/Pagination/Pagination";
import CourseBox from "../../components/CourseBox/CourseBox";
export default function Courses() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section class="courses">
        <div class="container">
          <div class="courses-content">
            <div class="container">
              <div class="row">
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <Pagination />
      <Footer />
    </>
  );
}
