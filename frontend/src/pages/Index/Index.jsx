import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LastArticles from "../../components/LastArticles/LastArticles";
import LastCourses from "../../components/LastCourses/LastCourses";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PreSellCourses from "../../components/PreSellCourses/PreSellCourses";
import "./Index.css";

export default function Index() {
  return (
    <div>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PreSellCourses />
      <LastArticles />
      <Footer />
    </div>
  );
}
