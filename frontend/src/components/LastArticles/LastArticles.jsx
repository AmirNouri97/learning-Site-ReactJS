import React from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastArticles.css";
export default function LastArticles() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />
        <div className="articles__content">
          <div className="row">
            <ArticleBox />
          </div>
        </div>
      </div>
    </section>
  );
}
