import {IPagination} from "../../settings";

interface PaginationItemProps {
    item: IPagination;
}

export const PaginationItem = (props: PaginationItemProps) => {
    const {item: {value, isCurrent, isDotted}} = props;

    const currentModifier = isCurrent ? 'pagination-item--current' : '';
    const dottedModifier = isDotted ? 'pagination-item--dotted' : '';

    return (
        <li className={`pagination-item ${currentModifier} ${dottedModifier}`}>
            <a className='pagination-link' href='#' >
                {value}
            </a>
        </li>
    );
}
