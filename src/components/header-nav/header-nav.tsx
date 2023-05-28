import {AppLink, AppPath, Link} from "../../settings";
import {useLocation} from "react-router-dom";

export const HeaderNav = () => {
    const location = useLocation();

    return (
        <nav className="main-navigation">
            <ul className="main-navigation-list">
                <HeaderNavLink
                    link={location.pathname === AppPath.Home ? AppLink.stub : AppLink.home}
                    name={'Главная'}
                    isCurrent
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
    isCurrent?: boolean;
}

const HeaderNavLink = (props: HeaderNavLinkProps) => {
    const {link, name, isCurrent = false} = props;
    return (
        <li
            className={`main-navigation-item ${isCurrent && 'main-navigation-item--current'}`}
        >
            <a
                className="main-navigation-link"
                href={link}
            >
                {name}
            </a>
        </li>
    );
}
