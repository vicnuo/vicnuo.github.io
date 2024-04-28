import { useEffect } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import Privacy from './Privacy';
import ContactMe from './ContactMe';

function MainArea({ page, setPage }) {
    useEffect(() => {
        function handlePageChange() {
            const path = window.location.hash.slice(1) || '/about';
            console.log("Setting page to:", path);
           
            setPage(path);
        }
        

        // 监听 hashchange 事件
        window.addEventListener("hashchange", handlePageChange);
        // 初始化页面状态
        handlePageChange();

        return () => {
            window.removeEventListener("hashchange", handlePageChange);
        };
    }, []);

    const renderPage = () => {
        switch (page) {
            case '/about': return <AboutMe />;
            case '/experience': return <Experience />;
            case '/projects': return <Projects />;
            case '/resume': return <Resume />;
            case '/privacy': return <Privacy />;
            case '/contactme': return <ContactMe />;
            default: return <AboutMe key={page} />;
        }
    };

    return <>{renderPage()}</>;
}

export default MainArea;
