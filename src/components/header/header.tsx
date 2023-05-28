import {HeaderLogo} from "../header-logo/header-logo";
import {HeaderNav} from "../header-nav/header-nav";
import {HeaderUserMenu} from "../header-user-menu/header-user-menu";

export const Header = () => {
    return (
        <header>
            <HeaderLogo />
            <HeaderNav />
            <HeaderUserMenu />
        </header>
    );
}
