import {Subscribe} from "../../components/subscribe/subscribe";
import {PageTitle} from "../../components/page-header/page-title";
import {Hotels} from "../../components/block-cards/hotels/hotels";
import {Breadcrumbs} from "../../components/breadcrumbs/breadcrumbs";
import {Filter} from "../../components/block-filter/filter/filter";
import {Pagination} from "../../components/pagination/pagination";
import {CatalogControls} from "../../components/catalog-controls/catalog-controls";

export const CatalogPage = () => {
    return (
        <main className='page-content'>

            <div className='filter'>

                <PageTitle text='Гостиницы Седоны' isVisuallyHidden={false} classCss='catalog-page-title'/>

                <Breadcrumbs/>

                <Filter />

            </div>

            <div className='catalog'>
                <h2 className="visually-hidden">Список гостиниц</h2>

                <CatalogControls />

                <Hotels/>

                <Pagination />
            </div>

            <Subscribe/>
        </main>
    );
}
