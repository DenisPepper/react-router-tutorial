import {SectionTitle} from "../section-title/section-title";
import {AppButton} from "../app-button/app-button";

export const HotelSearch = () => {
    return (
        <section className='hotel-search'>
            <SectionTitle
                primaryHeader='Заинтересовались?'
                secondaryHeader='Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в Седоне'
            />
            <AppButton
                cssClass='hotel-search__open-popup-button app-button--large'
                aria-label='открыть окно поиска отеля'
            >
                Поиск гостиницы в седоне
            </AppButton>
        </section>
    );
}
