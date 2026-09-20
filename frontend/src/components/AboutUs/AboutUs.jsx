import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div>
      <div className="about-us">
        <div className="container">
          <SectionHeader
            title="ما چه کمکی بهتون میکنیم؟"
            desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
          />
        </div>
        <div className="container">
          <div className="row">
            <AboutUsBox />
          </div>
        </div>
      </div>
    </div>
  );
}
