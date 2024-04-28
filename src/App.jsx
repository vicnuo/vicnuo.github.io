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
      setPage(document.location.pathname); // 根据当前的路径设置页面
    }
    handlePageChange(); // 设置初始页面

    window.addEventListener("popstate", handlePageChange);
    return () => {
      window.removeEventListener("popstate", handlePageChange);
    };
  }, []); // Important to have empty dependency array!

  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Header  setPage={setPage} themeChange={themeChange} />
      <MainArea page={page} setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
