import React from "react";
import "./ArticleBox.css";
export default function ArticleBox() {
  const articlesInfo = [
    {
      id: 1,
      title: "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
      img: "images/blog/1.jpg",
      text: `زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای
        کتابخانه های مختلفی برای تسریع...`,
    },
    {
      id: 2,
      title: "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
      img: "images/blog/1.jpg",
      text: `زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای
        کتابخانه های مختلفی برای تسریع...`,
    },
    {
      id: 3,
      title: "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
      img: "images/blog/1.jpg",
      text: `زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای
        کتابخانه های مختلفی برای تسریع...`,
    },
  ];
  return (
    <>
      {articlesInfo.length !== 0 &&
        articlesInfo.map((article) => (
          <div className="col-4" key={article.id}>
            <div className="article-card">
              <div className="article-card__header">
                <a href="#" className="article-card__link-img">
                  <img
                    src={article.img}
                    className="article-card__img"
                    alt="Article Cover"
                  />
                </a>
              </div>
              <div className="article-card__content">
                <a href="#" className="article-card__link">
                  {article.title}
                </a>
                <p className="article-card__text">{article.text}</p>
                <a href="#" className="article-card__btn">
                  بیشتر بخوانید
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
