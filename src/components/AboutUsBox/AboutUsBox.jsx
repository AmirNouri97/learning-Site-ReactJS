import React from "react";
import "./AboutUsBox.css";
export default function AboutUsBox() {
  const aboutUsBoxInfos = [
    {
      id: 1,
      title: "دوره های اختصاصی",
      text: "  با پشتیبانی و کیفیت بالا ارائه میده !",
      iconClass: "far fa-copyright about-us__icon",
    },
    {
      id: 2,
      title: "اجازه تدریس",
      text: " به هر مدرسی رو نمیده. چون کیفیت براش مهمه !",
      iconClass: "fas fa-leaf about-us__icon",
    },
    {
      id: 3,
      title: "دوره پولی و رایگان",
      text: ` براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در
      پشتیبانی و اپدیت دوره ارائه بده`,
      iconClass: "fas fa-gem about-us__icon",
    },
    {
      id: 4,
      title: "اهمیت به کاربر",
      text: `
    اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به
    کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست`,
      iconClass: "fas fa-crown about-us__icon",
    },
  ];
  return (
    <>
      {aboutUsBoxInfos.length !== 0 &&
        aboutUsBoxInfos.map((box) => (
          <div class="col-6">
            <div class="about-us__box" key={box.id}>
              <div class="about-us__box-right">
                <i class={box.iconClass}></i>
              </div>
              <div class="about-us__box-left">
                <span class="about-us__box-title">{box.title}</span>
                <span class="about-us__box-text">{box.text}</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
