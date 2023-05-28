export const HeaderUserMenu = () => {
    return (
        <div className={'user-menu'}>
            <button className={'search-button'} aria-label='поиск по названию отеля'>найти</button>

            <a
                className={'favorite-link'}
                href='#'
                aria-label='переход на страницу избранных отелей'
            >
                перейти в избранное
            </a>

            <a
                className={'popup-link'}
                href='#'
                aria-label='открыть окно поиска отеля'
            >
                Хочу сюда!
            </a>
        </div>
    );
}
