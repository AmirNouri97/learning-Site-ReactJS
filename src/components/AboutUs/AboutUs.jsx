import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div>
      <div class="about-us">
        <div class="container">
          <SectionHeader
            title="ما چه کمکی بهتون میکنیم؟"
            desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
          />
        </div>
        <div class="container">
          <div class="row">
            <AboutUsBox />
          </div>
        </div>
      </div>
    </div>
  );
}
