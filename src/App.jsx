import "./css/App.css";

import Header from "./jsx/Header ";
import MainArea from "./jsx/MainArea";
import Footer from "./jsx/Footer";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState("/about"); //默认页面设置为"About Me"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handlePageChange() {
      const path = window.location.hash.slice(1) || '/about';
      setPage(path); // 更新状态以反映当前页面
    }
    handlePageChange(); // 在组件加载时设置初始页面

    window.addEventListener("hashchange", handlePageChange); // 监听 URL 的哈希变化
    return () => {
      window.removeEventListener("hashchange", handlePageChange);
    };
  }, []);
  
  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navigate = (path) => {
    window.history.pushState(null, '', `#${path}`); // 更新 URL 的哈希部分，但不加载页面
    setPage(path); // 同步更新页面状态
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Header setPage={navigate} themeChange={themeChange} />
      <MainArea page={page} setPage={navigate} />
      <Footer setPage={navigate} />
    </div>
  );
}

export default App;
