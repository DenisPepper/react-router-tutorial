import {Subscribe} from "../../components/subscribe/subscribe";

export const CatalogPage = () => {
    return (
        <main className='page-content'>
            <h1 className="page-title">Гостиницы Седоны</h1>

            <ul className="breadcrumbs">
                <li><a href="./index.html">Главная</a></li>
                <li className="breadcrumbs__current">
                    <a href="./catalog.html">Гостиницы</a>
                </li>
            </ul>

            <form action="#" autoComplete="off">
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

                <button type="submit">Применить</button>
                <button type="reset">Сбросить</button>
            </form>

            <section className="catalog-block">
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

                <ul className="catalog__card-list">
                    <li className="card">
                        <div className="card-image">
                            <img src="#" alt="Отель"/>
                        </div>
                        <h3>Amara Resort & Spa</h3>
                        <dl>
                            <dt>Гостиница</dt>
                            <dd>От 4000 ₽</dd>
                        </dl>
                        <button type="button">подробнее</button>
                        <button type="button">в избранное</button>
                        <div className="rating-block">
                            <span>Рейтинг: 8,5</span>
                        </div>
                    </li>
                </ul>

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
            </section>

            <Subscribe />
        </main>
    );
}
