import {viewModes} from "../../settings";
import {CatalogViewMode} from "../catalog-view-mode/catalog-view-mode";

export const CatalogControls = () => {
    return (
        <div className="catalog-controls">
            <p className="search-result">Найдено гостиниц: 38</p>

            <select className='sort-direction' name="sort-direction">
                <option value="low-price-first">Сначала дешевые</option>
                <option value="high-price-first">Сначала дорогие</option>
            </select>

            <div className='sort-view-controls catalog-view-controls'>
                {viewModes.map((mode) => <CatalogViewMode key={mode.mode} mode={mode.mode} isChecked={mode.isChecked}/>)}
            </div>

        </div>
    );
}
