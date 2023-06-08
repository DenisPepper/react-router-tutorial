import {AppLink} from "../../settings";

export const Breadcrumbs = () => {
    return (
        <ul className="breadcrumbs">
            <li className='breadcrumbs-item'>
                <a className='main-page-link' href={AppLink.home}>
                    <span className='visually-hidden'>Главная</span>
                </a>
            </li>
            <li className="breadcrumbs-item breadcrumbs-item--current">
                Гостиницы
            </li>
        </ul>
    );
}
