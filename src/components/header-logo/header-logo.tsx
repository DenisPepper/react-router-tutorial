import {AppLink, AppPath} from "../../settings";
import {useLocation} from "react-router-dom";

export const HeaderLogo = () => {
    const location = useLocation();

    return (
        <a
            className="header-logo"
            href={AppLink.home}
            aria-current={location.pathname === AppPath.Home ? 'page' : 'false'}
        >
            <img src='./images/logo.svg' alt='Логотип города Седона' width='140' height='70'/>
        </a>
    );
}
