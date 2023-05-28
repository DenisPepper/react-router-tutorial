import {AppLink, AppPath, Link} from "../../settings";
import {useLocation} from "react-router-dom";

export const HeaderNav = () => {
    const location = useLocation();

    return (
        <nav className="main-navigation">
            <ul>
                <HeaderNavLink
                    link={location.pathname === AppPath.Home ? AppLink.stub : AppLink.home}
                    name={'Главная'}
                />
                <HeaderNavLink
                    link={location.pathname === AppPath.Home ? AppLink.advantages : AppLink.home}
                    name={'О Седоне'}
                />
                <HeaderNavLink
                    link={location.pathname === AppPath.Home ? AppLink.catalog : AppLink.stub}
                    name={'Гостиницы'}
                />
            </ul>
        </nav>
    );
}


interface HeaderNavLinkProps {
    link: Link;
    name: string;
}

const HeaderNavLink = (props: HeaderNavLinkProps) => {
    const {link, name} = props;
    return (
        <li className="main-navigation-item">
            <a
                className="main-navigation-link"
                href={link}
            >
                {name}
            </a>
        </li>
    );
}
