import {Subscribe} from "../../components/subscribe/subscribe";
import {PageTitle} from "../../components/page-header/page-title";
import {Hotels} from "../../components/block-cards/hotels/hotels";

export const CatalogPage = () => {
    return (
        <main className='page-content'>
            <div className='catalog-page-title'>
                <PageTitle text='Гостиницы Седоны' isVisuallyHidden={false}/>
            </div>
            <ul className="breadcrumbs">
                <li><a href="./index.html">Главная</a></li>
                <li className="breadcrumbs__current">
                    <a href="./catalog.html">Гостиницы</a>
                </li>
            </ul>
            <section className='catalog-filter'>

                <h2 className='visually-hidden'>Панель отбора гостиниц по фильтрам</h2>

                <form style={{display: 'flex'}} action="#" autoComplete="off">
                    <h2 className="visually-hidden">Форма поиска гостиниц города Седона</h2>

                    <fieldset>
                        <legend>Инфраструктура:</legend>
                        <ul className="features-list">
                            <li className="feature-item">
                                <input
                                    className="visually-hidden"
                                    type="checkbox"
                                    id="pool"
                                    name="pool"
                                    checked
                                />
                                <label htmlFor="pool">Бассейн</label>
                            </li>
                            <li className="feature-item">
                                <input
                                    className="visually-hidden"
                                    type="checkbox"
                                    id="parking"
                                    name="parking"
                                    checked
                                />
                                <label htmlFor="parking">Парковка</label>
                            </li>
                            <li className="feature-item">
                                <input
                                    className="visually-hidden"
                                    type="checkbox"
                                    id="wi-fi"
                                    name="wi-fi"
                                />
                                <label htmlFor="wi-fi">Wi-Fi</label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset>
                        <legend>Тип жилья:</legend>
                        <fieldset id="type">
                            <input type="radio" name="type" value="hotel" id="hotel" checked/>
                            <label htmlFor="hotel">Гостиница</label>
                            <input type="radio" name="type" value="motel" id="motel"/>
                            <label htmlFor="motel">Мотель</label>
                            <input
                                type="radio"
                                name="type"
                                value="aportaments"
                                id="aportaments"
                            />
                            <label htmlFor="aportaments">Апартаменты</label>
                        </fieldset>
                    </fieldset>

                    <fieldset>
                        <legend>Стоимость, ₽:</legend>
                        <label>
                            <input
                                className="price-from"
                                type="number"
                                value="0"
                                name="price-from"
                                min="0"
                                max="9000"
                                placeholder="от"
                            />
                            от
                        </label>
                        <label>
                            <input
                                className="price-to"
                                type="number"
                                value="9000"
                                name="price-to"
                                min="0"
                                max="9000"
                                placeholder="до"
                            />
                            до
                        </label>
                        <div id="slider" className="search-form__cost-slider">
                            <label>
                                stub slider
                                <input type="range"/>
                            </label>
                        </div>
                    </fieldset>

                    <button
                        className='app-button button--optional filter-submit-button'
                        type="submit"
                    >
                        Применить
                    </button>

                    <button
                        className='app-button button--transparent filter-reset-button'
                        type="reset"
                    >
                        Сбросить
                    </button>
                </form>
            </section>

            <div className="catalog-block">
                <h2 className="visually-hidden">Список гостиниц</h2>

                <div className="catalog-controls">
                    <p className="search-result">Найдено гостиниц: 38</p>
                    <div className="catalog-sortings">
                        <select id="price-sort-direction" name="price-sort-direction">
                            <option value="to-hight">Сначала дешевые</option>
                            <option value="to-low">Сначала дорогие</option>
                        </select>

                        <div className="sort-view">
                            <button type="button">
                                <span className="visually-hidden">вариант 1</span>
                            </button>
                            <button type="button">
                                <span className="visually-hidden">вариант 2</span>
                            </button>
                            <button type="button">
                                <span className="visually-hidden">вариант 3</span>
                            </button>
                        </div>
                    </div>
                </div>

                <Hotels/>

                <ul className="catalog__pagination-list">
                    <li
                        className="catalog__pagination-item catalog__pagination-item--current"
                    >
                        <a href="#">1</a>
                    </li>
                    <li className="catalog__pagination-item"><a href="#">2</a></li>
                    <li className="catalog__pagination-item"><a href="#">3</a></li>
                    <li className="catalog__pagination-item"><a href="#">4</a></li>
                    <li
                        className="catalog__pagination-item catalog__pagination-item--delimiter"
                    >
                        ...
                    </li>
                    <li className="catalog__pagination-item"><a href="#">10</a></li>
                </ul>
            </div>

            <Subscribe/>
        </main>
    );
}
