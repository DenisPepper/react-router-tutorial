import {AppButton} from "../app-button/app-button";

export const HeaderUserMenu = () => {
    return (
        <section className={'user-menu'}>
            <button
                className={'user-menu-icon search-button'}
                aria-label='поиск по названию отеля'
            >
            </button>

            <a
                className={'user-menu-icon favorite-link'}
                href='#'
                aria-label='переход на страницу избранных отелей'
            >
            </a>

            <div className='favorite-counter'><span>12</span></div>

            <AppButton
                cssClass='user-menu-open-popup'
                aria-label='открыть окно поиска отеля'
            >
                Хочу сюда!
            </AppButton>

        </section>
    );
}
