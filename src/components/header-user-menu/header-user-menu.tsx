import {AppButton} from "../app-button/app-button";

export const HeaderUserMenu = () => {
    return (
        <ul className='user-menu'>
            <li className='user-menu-item'>
                <button
                    className={'user-menu-icon search-button'}
                    aria-label='поиск по названию отеля'
                >
                </button>
            </li>
            <li className='user-menu-item favorite-link-wrapper'>
                <a
                    className={'user-menu-icon favorite-link'}
                    href='#'
                    aria-label='переход на страницу избранных отелей'
                >
                </a>
                <div
                    className='favorite-counter'
                    aria-label='количество отелей в избранном'
                >
                    <span>12</span>
                </div>
            </li>
            <li className='want-here-wrapper'>
                <AppButton
                    cssClass='user-menu-open-popup'
                    aria-label='открыть окно поиска отеля'
                >
                    Хочу сюда!
                </AppButton>
            </li>
        </ul>
    );
}
