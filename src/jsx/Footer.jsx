import FooterLink from './FooterLink';

function Footer({setPage}) {
    return (
        <footer className="footer">
            <FooterLink className="footer__link" setPage={setPage}/>
        </footer>
    );
}

export default Footer;