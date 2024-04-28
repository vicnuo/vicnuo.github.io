import '../css/Header.css';
import GlobalNav from "./GlobalNav";

function Header({setPage,themeChange}) {
   
    return (
        <header className="header">
            <a className="header__logo" href="index.html" aria-label="click here to go to home page">
                <img className="header__logo__img" src="self-photo.jpg" alt="website logo"></img>
            </a>

            <a className="skip-to-content-link" href="#main-content">Skip to content</a>
            <button className='change_theme_button' onClick={themeChange}>Theme</button>
            
            <div className='main-title-nav'>
                <h1 className="header__title">
                    Ethan Xu
                </h1>
            </div>
            
            <GlobalNav  setPage={setPage} className="header__nav"/>
        </header>
    );
}

export default Header;