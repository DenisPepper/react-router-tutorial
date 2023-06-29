import {features, hotelTypes} from "../../../settings";
import {Feature} from "../features/feature";
import {HotelType} from "../types/hotel-type";
import {Price} from "../price/price";

export const Filter = () => {
    return (
        <section>
            <h2 className='visually-hidden'>Панель отбора гостиниц по фильтрам</h2>

            <form className='filter-form' action='#'>


                <fieldset className='filter-set'>
                    <legend>Инфраструктура:</legend>
                    <div className='filter-set-wrapper'>
                        {features.map((feature) => <Feature key={feature.name} feature={feature}/>)}
                    </div>
                </fieldset>

                <fieldset className='filter-set'>
                    <legend>Тип жилья:</legend>
                    <div className='filter-set-wrapper'>
                        {hotelTypes.map((type, index) => <HotelType key={index} hotelType={type}/>)}
                    </div>
                </fieldset>

                <fieldset className='filter-set filter-set--extra'>
                    <legend>Стоимость, ₽:</legend>
                    <div className='filter-set-wrapper'>
                        <Price />
                        <div className='price-slider-wrapper'>
                            <button className='slider-element slider-point'></button>
                            <button className='slider-element slider-point slider-point--second'></button>
                            <div className='slider-element slider-axis slider-axis--second'></div>
                            <div className='slider-element slider-axis'></div>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='filter-set'>
                    <legend className='visually-hidden'>Кнопки</legend>
                    <div className='filter-set-wrapper filter-buttons'>
                        <button
                            type='submit'
                            className='app-button button--optional filter-submit-button'
                            aria-label='Применить фильтр'
                        >
                            Применить
                        </button>

                        <button
                            type='reset'
                            className='app-button button--transparent filter-reset-button'
                            aria-label='Очистить фильтр'
                        >
                            Сбросить
                        </button>
                    </div>
                </fieldset>

            </form>
        </section>
    );
}
