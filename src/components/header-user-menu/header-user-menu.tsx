import {AppButton} from "../app-button/app-button";

export const HeaderUserMenu = () => {
    return (
        <section className={'user-menu'}>
            <div className='user-menu-icon'>
                <button
                    className={'search-button'}
                    aria-label='поиск по названию отеля'
                >
                </button>
            </div>

            <div className='user-menu-icon'>
                <a
                    className={'favorite-link'}
                    href='#'
                    aria-label='переход на страницу избранных отелей'
                >
                </a>
                <div className='favorite-counter'><span>12</span></div>
            </div>

            <AppButton
                cssClass='user-menu-open-popup'
                aria-label='открыть окно поиска отеля'
            >
                Хочу сюда!
            </AppButton>

        </section>
    );
}
