import '../css/FooterLink.css';

const footerLink = [
    {
        name: "Privacy Policy",
        path: "privacy",
    },
    {
        name: "Contact Me",
        path: "contactme",
    },
];

function FooterLink({ setPage }) {
    const list = footerLink.map(item => {
        return (
            <div key={item.name} className="footer-link">
                <a href={`#${item.path}`} onClick={(e) => {
                        e.preventDefault(); // 阻止链接的默认行为
                        // window.history.pushState({}, '', '#' + item.path); // 更新 URL 的哈希部分
                        setPage('/' + item.path); // 更新页面状态
                    }}>
                        {item.name}
                </a>
            </div>    
        );
    });

    return (
        <>
            {list}
        </>
    );
}

export default FooterLink;
