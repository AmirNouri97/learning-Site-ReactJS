import React from "react";
import "./Topbar.css";
export default function Topbar() {
  const themeColors = [
    { primary: "#1eb35e", bg: "#1eb35e33", toolTip: "سبز" },
    { primary: "#ff8c00", bg: "#ff8c0033", toolTip: "نارنجی" },
    { primary: "#8e44ad", bg: "#8e44ad33", toolTip: "بنفش" },
    { primary: "#3498db", bg: "#3498db33", toolTip: "آبی" },
    { primary: "#d22c4e", bg: "#e91e6333", toolTip: "قرمز" },
  ];

  const handleChangeTheme = (color) => {
    document.documentElement.style.setProperty(
      "--primary-color",
      color.primary
    );
    document.documentElement.style.setProperty("--primary-color-bg", color.bg);
    localStorage.setItem("theme", JSON.stringify(color));
    console.log(color);
  };

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  آموزش Html
                </a>
              </li>
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  آموزش Css
                </a>
              </li>
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  آموزش جاوا اسکریپت
                </a>
              </li>
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  آموزش بوت استرپ
                </a>
              </li>
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  آموزش پایتون
                </a>
              </li>
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  آموزش ری‌اکت
                </a>
              </li>
              <li className="top-bar__item">
                <a href="#" className="top-bar__link">
                  20,000 تومان
                </a>
              </li>
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                nouri97dev@gmail.com
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                09104309016
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
            <div className="top-bar__theme-colors">
              {themeColors.map((color, index) => (
                <div key={index} className="tooltip-wrapper">
                  <button
                    className="top-bar__theme-color"
                    style={{ backgroundColor: color.primary }}
                    onClick={() => handleChangeTheme(color)}
                  ></button>
                  <span className="tooltip-text">{color.toolTip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
