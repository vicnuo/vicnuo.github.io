import {useState} from 'react';
import '../css/GlobalNav.css';
import menu from './menu';

function GlobalNav({setPage, className }) {
    // "const [showMenu, setShowMenu] = useState(false);"这样会导致刷新之后menu会被关闭，所以要改成"const [showMenu, setShowMenu] = useState(true);
    // Should have no effect on the presence of html elements;
    const [showMenu, setShowMenu] = useState(false);
    
    const handleNavClick = (path, e) => {
        e.preventDefault(); //阻止链接的默认行为
        // window.location.hash = path; // 更新 URL 的哈希部分
        setPage(path); // 更新页面状态
        //setShowMenu(false); // 关闭菜单（如果是移动视图）
    };
    
    const list = menu.map(item => (
        <li key={item.name} className="global-nav__item">
            <a
                href={`#${item.path}`} // 修改 href 为哈希链接
                className="global-nav__link"
                onClick={(e) => handleNavClick(item.path, e)}
            >
                {item.name}
            </a>
        </li>
    ));

    // Decide whether to show the menu based on the state of showMenu;优先级看在css的哪个位置，靠后的优先级高；
    const menuClass = showMenu ? 'global-nav__list--open':'global-nav__list--collapsed' ;

    return (
        <nav className={`global-nav ${className}`}>
            <button 
                id="menuToggle" aria-label="Toggle menu" type="button"
                onClick={ () => setShowMenu(!showMenu) }>
                {/* {showMenu ? "Close Menu" : "Open Menu"} 这里写的是button上面显示的字*/}
                <i className="gg-menu"/>
            </button>
            {/* if showMenu is false, "menuHtml" will not render,用于toggle menu */}
            {/* {showMenu && menuHtml } */}

            <ul className={`global-nav__list ${menuClass}`}>
            {list}

        </ul>
        </nav>
    );
}

export default GlobalNav;