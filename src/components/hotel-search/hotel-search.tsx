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
                cssClass='hotel-search-open-popup app-button--large'
                aria-label='открыть окно поиска отеля'
            >
                ПОИСК ГОСТИНИЦЫ В седоне
            </AppButton>
        </section>
    );
}