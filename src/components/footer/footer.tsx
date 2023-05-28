import {FooterSocial} from "../footer-social/footer-social";
import {FooterContacts} from "../footer-contacts/footer-contacts";
import {FooterDeveloper} from "../footer-developer/footer-developer";

export const Footer = () => {
    return (
        <footer className='page-footer container'>
            <FooterSocial/>
            <FooterContacts />
            <FooterDeveloper />
        </footer>
    );
}
