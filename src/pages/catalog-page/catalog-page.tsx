import {Subscribe} from "../../components/subscribe/subscribe";
import {PageTitle} from "../../components/page-header/page-title";
import {Hotels} from "../../components/block-cards/hotels/hotels";
import {Breadcrumbs} from "../../components/breadcrumbs/breadcrumbs";
import {Filter} from "../../components/block-filter/filter/filter";
import {Pagination} from "../../components/pagination/pagination";

export const CatalogPage = () => {
    return (
        <main className='page-content'>

            <div className='filter-wrapper'>

                <div className='catalog-page-title'>
                    <PageTitle text='Гостиницы Седоны' isVisuallyHidden={false}/>
                </div>

                <Breadcrumbs/>

                <Filter />

            </div>

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

                <Pagination />
            </div>

            <Subscribe/>
        </main>
    );
}
