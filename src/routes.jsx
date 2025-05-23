import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Category from "./pages/Category/Category";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Index from "./pages/Index/Index";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/article-info/:article-name", element: <ArticleInfo /> },
  { path: "/course-info/:course-name", element: <CourseInfo /> },
  { path: "/category-info/:category-name", element: <Category /> },
  { path: "/*", element: <Index /> },
];

export default routes;
