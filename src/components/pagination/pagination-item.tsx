import {IPagination} from "../../settings";

interface PaginationItemProps {
    item: IPagination;
}

export const PaginationItem = (props: PaginationItemProps) => {
    const {item: {value, isCurrent, isDotted}} = props;

    const currentModifier = isCurrent ? 'pagination-link--current' : '';
    const dottedModifier = isDotted ? 'pagination-item--dotted' : '';

    return (
        <li className={`pagination-item ${dottedModifier}`}>
            {
                isDotted ?
                    <button>...</button>
                    :
                    <a className={`pagination-link ${currentModifier}`} href='#'>
                        {value}
                    </a>
            }
        </li>
    );
}
