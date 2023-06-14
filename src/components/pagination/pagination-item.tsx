import {IPagination} from "../../settings";

interface PaginationItemProps {
    item: IPagination;
}

export const PaginationItem = (props: PaginationItemProps) => {
    const {item: {value, isCurrent, isDotted}} = props;

    const currentModifier = isCurrent ? 'pagination-link--current' : '';
    const dottedModifier = isDotted ? 'pagination-link--dotted' : '';

    return (
        <li className='pagination-item'>
            <a className={`pagination-link ${currentModifier} ${dottedModifier}`} href='#' >
                {value}
            </a>
        </li>
    );
}
