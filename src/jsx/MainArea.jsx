// import { useState } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';

import Privacy from './Privacy';
import ContactMe from './ContactMe';

function MainArea({ page, setPage }) {
    // const changePage = (newPage) => {
    //     window.history.pushState({}, '', newPage);
    //     setPage(newPage);
    // }
    
    const renderPage = () => {
        switch (page) {
            case '/about':
                return <AboutMe />;
            case '/experience':
                return <Experience />;
            case '/projects':
                return <Projects />;
            case '/resume':
                return <Resume />;
            case '/privacy':
                return <Privacy />;  
            case '/ContactMe':
                return <ContactMe />;  

            default:
                return <AboutMe />;
        }
    };

    return (
        <>
            {renderPage()}
        </>
    )

}

export default MainArea; 