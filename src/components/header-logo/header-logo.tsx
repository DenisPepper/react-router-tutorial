import {AppLink} from "../../settings";

export const HeaderLogo = () => {
    return (
        <a
            className="header-logo"
            href={AppLink.home}
            aria-label="Переход на главную страницу"
        >
            Logo
        </a>
    );
}
