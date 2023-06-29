import {AppLink} from "../../settings";

export const Breadcrumbs = () => {
    return (
        <ul className="breadcrumbs">
            <li className='breadcrumbs-item'>
                <a className='breadcrumbs-link' href={AppLink.home}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 0.5L0.5 6.30006V12.5001H12.5V6.30006L6.5 0.5ZM11.5 11.5001H1.5V6.70005L6.5 1.9L11.5 6.70005V11.5001Z"/>
                        <path d="M4.5 10.5001H5.5V8.00005H7.5V10.5001H8.5V7.00005H4.5V10.5001Z"/>
                    </svg>
                    <span className='visually-hidden'>Главная</span>
                </a>
            </li>
            <li className="breadcrumbs-item breadcrumbs-item--current">
                Гостиницы
            </li>
        </ul>
    );
}
