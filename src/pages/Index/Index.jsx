import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Header from "../../components/Header/Header";
import LastCourses from "../../components/LastCourses/LastCourses";
import "./Index.css";

export default function Index() {
  return (
    <div>
      <Header />
      <LastCourses />
      <AboutUs />
    </div>
  );
}
