import '../css/FooterLink.css';

const footerLink =[
    {
        name: "Privacy Policy",
        path: "privacy",
    },
    {
        name: "Contact Me",
        path: "ContactMe",
    },
];

function FooterLink({setPage}){
    
    
    const list = footerLink.map(item => {
        return(
            <div key={item.name} className="footer-link">
                <a href={`/${item.path}`} onClick={(e) => {
                        e.preventDefault(); //阻止链接的默认行为
                        window.history.pushState(null, '', e.target.pathname);
                        setPage(e.target.pathname); // 更新页面状态
                    }}>
                        {item.name}
                </a>
            </div>    
        );
    });
  
    return(
        <>
            {list}
        </>
    );
}
export default FooterLink;