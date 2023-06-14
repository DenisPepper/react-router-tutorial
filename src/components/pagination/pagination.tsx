import {paginationItems as items} from "../../settings";
import {PaginationItem} from "./pagination-item";

export const Pagination = () => {
    return (
        <ul className='pagination-list catalog-pagination'>
            {items.map((item) => <PaginationItem key={item.value} item={item}/>)}
        </ul>
    );
}
